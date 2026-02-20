const axios = require('axios');
const db = require('../config/database');

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = 'cricbuzz-cricket.p.rapidapi.com';

// ==================== HELPER FUNCTIONS ====================
const makeRapidAPIRequest = async (endpoint) => {
    const options = {
        method: 'GET',
        url: `https://${RAPIDAPI_HOST}${endpoint}`,
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST
        },
        timeout: 10000
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(`❌ API request failed for ${endpoint}:`, error.message);
        throw error;
    }
};

// ==================== LOG SYNC (FIXED) ====================
const logSync = async (syncType, status, recordsCount, errorMessage = null) => {
    try {
        // Try with error_message column
        await db.query(
            `INSERT INTO sync_log (sync_type, status, records_synced, error_message) 
             VALUES ($1, $2, $3, $4)`,
            [syncType, status, recordsCount, errorMessage]
        );
        console.log(`📝 Logged sync: ${syncType} - ${status} - ${recordsCount} records`);
    } catch (error) {
        // If error_message column doesn't exist, try with message column
        if (error.message.includes('error_message') || error.message.includes('column')) {
            try {
                await db.query(
                    `INSERT INTO sync_log (sync_type, status, records_synced, message) 
                     VALUES ($1, $2, $3, $4)`,
                    [syncType, status, recordsCount, errorMessage]
                );
                console.log(`📝 Logged sync (fallback): ${syncType} - ${status}`);
            } catch (fallbackError) {
                console.error('❌ Error logging sync (both attempts failed):', fallbackError.message);
            }
        } else {
            console.error('❌ Error logging sync:', error.message);
        }
    }
};

// ==================== SYNC TEAM RANKINGS ====================
const syncTeamRankings = async () => {
    console.log('🔄 Syncing team rankings...');

    try {
        const formats = ['test', 'odi', 't20'];
        let totalRecords = 0;

        for (const format of formats) {
            try {
                const data = await makeRapidAPIRequest(`/stats/v1/rankings/teams?formatType=${format}`);

                if (data && data.rank && Array.isArray(data.rank)) {
                    for (const team of data.rank) {
                        await db.query(
                            `INSERT INTO team_rankings (format, team_name, rank, rating, points) 
                             VALUES ($1, $2, $3, $4, $5)
                             ON CONFLICT (format, team_name) 
                             DO UPDATE SET rank = $3, rating = $4, points = $5, updated_at = NOW()`,
                            [format, team.team, team.rank, team.rating, team.points]
                        );
                    }
                    totalRecords += data.rank.length;
                }
            } catch (error) {
                console.error(`❌ Failed to sync ${format} rankings:`, error.message);
            }
        }

        await logSync('team_rankings', 'success', totalRecords);
        console.log(`✅ Team rankings synced: ${totalRecords} records`);

        return { success: true, records: totalRecords };
    } catch (error) {
        await logSync('team_rankings', 'error', 0, error.message);
        throw error;
    }
};

// ==================== SYNC LIVE MATCHES ====================
const syncLiveMatches = async () => {
    console.log('🔄 Syncing live matches...');

    try {
        const data = await makeRapidAPIRequest('/matches/v1/live');
        let recordsCount = 0;

        if (data && data.typeMatches && Array.isArray(data.typeMatches)) {
            for (const matchType of data.typeMatches) {
                if (matchType.seriesMatches && Array.isArray(matchType.seriesMatches)) {
                    for (const series of matchType.seriesMatches) {
                        if (series.seriesAdWrapper && series.seriesAdWrapper.matches) {
                            for (const matchInfo of series.seriesAdWrapper.matches) {
                                const match = matchInfo.matchInfo;

                                await db.query(
                                    `INSERT INTO live_matches (match_id, series, venue, status, team1, team2) 
                                     VALUES ($1, $2, $3, $4, $5, $6)
                                     ON CONFLICT (match_id) 
                                     DO UPDATE SET status = $4, updated_at = NOW()`,
                                    [
                                        match.matchId.toString(),
                                        match.seriesName,
                                        match.venueInfo?.ground || 'Unknown',
                                        match.state,
                                        match.team1?.teamName || 'TBD',
                                        match.team2?.teamName || 'TBD'
                                    ]
                                );
                                recordsCount++;
                            }
                        }
                    }
                }
            }
        }

        await logSync('live_matches', 'success', recordsCount);
        console.log(`✅ Live matches synced: ${recordsCount} records`);

        return { success: true, records: recordsCount };
    } catch (error) {
        // If rate limited (429), log as warning not error
        if (error.response && error.response.status === 429) {
            console.warn('⚠️ Live matches: Rate limit reached (429)');
            await logSync('live_matches', 'rate_limited', 0, 'API rate limit exceeded');
            return { success: false, rateLimited: true, records: 0 };
        }

        await logSync('live_matches', 'error', 0, error.message);
        throw error;
    }
};

// ==================== SYNC CRICKET NEWS ====================
const syncCricketNews = async () => {
    console.log('🔄 Syncing cricket news...');

    try {
        const data = await makeRapidAPIRequest('/news/v1/index');
        let recordsCount = 0;

        if (data && data.storyList && Array.isArray(data.storyList)) {
            for (const news of data.storyList) {
                if (news.story) {
                    await db.query(
                        `INSERT INTO cricket_news (story_id, headline, intro, publish_time, image_url) 
                         VALUES ($1, $2, $3, $4, $5)
                         ON CONFLICT (story_id) 
                         DO UPDATE SET headline = $2, updated_at = NOW()`,
                        [
                            news.story.id.toString(),
                            news.story.hline,
                            news.story.intro || '',
                            news.story.pubTime,
                            news.story.imageId ? `https://static.cricbuzz.com/a/img/v1/i1/c${news.story.imageId}/i.jpg` : null
                        ]
                    );
                    recordsCount++;
                }
            }
        }

        await logSync('cricket_news', 'success', recordsCount);
        console.log(`✅ Cricket news synced: ${recordsCount} records`);

        return { success: true, records: recordsCount };
    } catch (error) {
        // If rate limited (429), log as warning not error
        if (error.response && error.response.status === 429) {
            console.warn('⚠️ Cricket news: Rate limit reached (429)');
            await logSync('cricket_news', 'rate_limited', 0, 'API rate limit exceeded');
            return { success: false, rateLimited: true, records: 0 };
        }

        await logSync('cricket_news', 'error', 0, error.message);
        throw error;
    }
};

// ==================== SYNC ALL DATA ====================
const syncAllData = async () => {
    console.log('🔄 Starting full data sync...');

    const results = {
        teamRankings: null,
        liveMatches: null,
        cricketNews: null
    };

    try {
        results.teamRankings = await syncTeamRankings();
    } catch (error) {
        console.error('Team rankings sync failed:', error.message);
        results.teamRankings = { success: false, error: error.message };
    }

    try {
        results.liveMatches = await syncLiveMatches();
    } catch (error) {
        console.error('Live matches sync failed:', error.message);
        results.liveMatches = { success: false, error: error.message };
    }

    try {
        results.cricketNews = await syncCricketNews();
    } catch (error) {
        console.error('Cricket news sync failed:', error.message);
        results.cricketNews = { success: false, error: error.message };
    }

    console.log('✅ Full data sync completed');
    return results;
};

// ==================== EXPORTS ====================
module.exports = {
    syncTeamRankings,
    syncLiveMatches,
    syncCricketNews,
    syncAllData,
    logSync
};