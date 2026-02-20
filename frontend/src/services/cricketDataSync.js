import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const RAPIDAPI_BASE_URL = 'https://cricbuzz-cricket.p.rapidapi.com';
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

/**
 * Complete Cricket Data Synchronization Service
 * Syncs data from RapidAPI to your backend database
 */

class CricketDataSync {
    constructor() {
        this.syncInProgress = false;
        this.lastSyncTime = null;
        this.syncInterval = 6 * 60 * 60 * 1000; // 6 hours
    }

    /**
     * Initialize auto-sync on app load
     */
    initAutoSync() {
        // Sync on first load
        this.syncAllData();

        // Auto-sync every 6 hours
        setInterval(() => {
            this.syncAllData();
        }, this.syncInterval);

        console.log('✅ Cricket Data Auto-Sync Initialized');
    }

    /**
     * Main sync function - syncs all cricket data
     */
    async syncAllData() {
        if (this.syncInProgress) {
            console.log('⏳ Sync already in progress...');
            return;
        }

        this.syncInProgress = true;
        console.log('🔄 Starting Complete Data Sync...');

        try {
            await Promise.all([
                this.syncTeamRankings(),
                this.syncPlayerRankings(),
                this.syncLiveMatches(),
                this.syncRecentMatches(),
                this.syncUpcomingMatches(),
                this.syncPlayerStats(),
                this.syncTeamStats(),
                this.syncNewsArticles()
            ]);

            this.lastSyncTime = new Date();
            console.log('✅ Complete Data Sync Successful!');

        } catch (error) {
            console.error('❌ Data Sync Failed:', error);
        } finally {
            this.syncInProgress = false;
        }
    }

    /**
     * Sync Team Rankings
     */
    async syncTeamRankings() {
        try {
            console.log('📊 Syncing Team Rankings...');

            // Fetch from RapidAPI
            const formats = ['test', 'odi', 't20'];

            for (const format of formats) {
                const response = await axios.get(
                    `${RAPIDAPI_BASE_URL}/stats/v1/rankings/teams`,
                    {
                        params: { formatType: format },
                        headers: {
                            'X-RapidAPI-Key': RAPIDAPI_KEY,
                            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                        }
                    }
                );

                // Send to your backend
                await axios.post(`${API_BASE_URL}/api/sync/team-rankings`, {
                    format: format,
                    data: response.data
                });
            }

            console.log('✅ Team Rankings Synced');
        } catch (error) {
            console.error('❌ Team Rankings Sync Failed:', error);
        }
    }

    /**
     * Sync Player Rankings
     */
    async syncPlayerRankings() {
        try {
            console.log('👤 Syncing Player Rankings...');

            const formats = ['test', 'odi', 't20'];
            const categories = ['batsmen', 'bowlers', 'allrounders'];

            for (const format of formats) {
                for (const category of categories) {
                    const response = await axios.get(
                        `${RAPIDAPI_BASE_URL}/stats/v1/rankings/players`,
                        {
                            params: {
                                formatType: format,
                                category: category
                            },
                            headers: {
                                'X-RapidAPI-Key': RAPIDAPI_KEY,
                                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                            }
                        }
                    );

                    // Send to your backend
                    await axios.post(`${API_BASE_URL}/api/sync/player-rankings`, {
                        format: format,
                        category: category,
                        data: response.data
                    });

                    // Rate limiting - wait 1 second between calls
                    await this.delay(1000);
                }
            }

            console.log('✅ Player Rankings Synced');
        } catch (error) {
            console.error('❌ Player Rankings Sync Failed:', error);
        }
    }

    /**
     * Sync Live Matches
     */
    async syncLiveMatches() {
        try {
            console.log('🔴 Syncing Live Matches...');

            const response = await axios.get(
                `${RAPIDAPI_BASE_URL}/matches/v1/live`,
                {
                    headers: {
                        'X-RapidAPI-Key': RAPIDAPI_KEY,
                        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                    }
                }
            );

            // Send to your backend
            await axios.post(`${API_BASE_URL}/api/sync/live-matches`, {
                data: response.data
            });

            console.log('✅ Live Matches Synced');
        } catch (error) {
            console.error('❌ Live Matches Sync Failed:', error);
        }
    }

    /**
     * Sync Recent Matches
     */
    async syncRecentMatches() {
        try {
            console.log('📅 Syncing Recent Matches...');

            const response = await axios.get(
                `${RAPIDAPI_BASE_URL}/matches/v1/recent`,
                {
                    headers: {
                        'X-RapidAPI-Key': RAPIDAPI_KEY,
                        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                    }
                }
            );

            // Send to your backend
            await axios.post(`${API_BASE_URL}/api/sync/recent-matches`, {
                data: response.data
            });

            console.log('✅ Recent Matches Synced');
        } catch (error) {
            console.error('❌ Recent Matches Sync Failed:', error);
        }
    }

    /**
     * Sync Upcoming Matches
     */
    async syncUpcomingMatches() {
        try {
            console.log('📆 Syncing Upcoming Matches...');

            const response = await axios.get(
                `${RAPIDAPI_BASE_URL}/matches/v1/upcoming`,
                {
                    headers: {
                        'X-RapidAPI-Key': RAPIDAPI_KEY,
                        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                    }
                }
            );

            // Send to your backend
            await axios.post(`${API_BASE_URL}/api/sync/upcoming-matches`, {
                data: response.data
            });

            console.log('✅ Upcoming Matches Synced');
        } catch (error) {
            console.error('❌ Upcoming Matches Sync Failed:', error);
        }
    }

    /**
     * Sync Player Statistics
     */
    async syncPlayerStats() {
        try {
            console.log('📈 Syncing Player Statistics...');

            // Get top players list from your database
            const topPlayers = await axios.get(`${API_BASE_URL}/api/players/top`);

            for (const player of topPlayers.data.slice(0, 50)) { // Top 50 players
                const response = await axios.get(
                    `${RAPIDAPI_BASE_URL}/stats/v1/player/${player.cricbuzzId}`,
                    {
                        headers: {
                            'X-RapidAPI-Key': RAPIDAPI_KEY,
                            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                        }
                    }
                );

                // Send to your backend
                await axios.post(`${API_BASE_URL}/api/sync/player-stats`, {
                    playerId: player.id,
                    data: response.data
                });

                // Rate limiting
                await this.delay(1000);
            }

            console.log('✅ Player Statistics Synced');
        } catch (error) {
            console.error('❌ Player Statistics Sync Failed:', error);
        }
    }

    /**
     * Sync Team Statistics
     */
    async syncTeamStats() {
        try {
            console.log('📊 Syncing Team Statistics...');

            const teams = [
                { name: 'India', id: '2' },
                { name: 'Australia', id: '4' },
                { name: 'England', id: '1' },
                { name: 'Pakistan', id: '7' },
                { name: 'Bangladesh', id: '6' },
                { name: 'South Africa', id: '3' },
                { name: 'New Zealand', id: '5' },
                { name: 'Sri Lanka', id: '8' },
                { name: 'West Indies', id: '10' },
                { name: 'Afghanistan', id: '96' },
                { name: 'Zimbabwe', id: '9' }
            ];

            for (const team of teams) {
                const response = await axios.get(
                    `${RAPIDAPI_BASE_URL}/teams/v1/${team.id}`,
                    {
                        headers: {
                            'X-RapidAPI-Key': RAPIDAPI_KEY,
                            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                        }
                    }
                );

                // Send to your backend
                await axios.post(`${API_BASE_URL}/api/sync/team-stats`, {
                    teamName: team.name,
                    data: response.data
                });

                // Rate limiting
                await this.delay(1000);
            }

            console.log('✅ Team Statistics Synced');
        } catch (error) {
            console.error('❌ Team Statistics Sync Failed:', error);
        }
    }

    /**
     * Sync News Articles
     */
    async syncNewsArticles() {
        try {
            console.log('📰 Syncing News Articles...');

            const response = await axios.get(
                `${RAPIDAPI_BASE_URL}/news/v1/index`,
                {
                    headers: {
                        'X-RapidAPI-Key': RAPIDAPI_KEY,
                        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                    }
                }
            );

            // Send to your backend
            await axios.post(`${API_BASE_URL}/api/sync/news`, {
                data: response.data
            });

            console.log('✅ News Articles Synced');
        } catch (error) {
            console.error('❌ News Articles Sync Failed:', error);
        }
    }

    /**
     * Get last sync time
     */
    getLastSyncTime() {
        return this.lastSyncTime;
    }

    /**
     * Manual sync trigger
     */
    async manualSync() {
        await this.syncAllData();
        return {
            success: true,
            timestamp: this.lastSyncTime
        };
    }

    /**
     * Delay helper for rate limiting
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Export singleton instance
export const cricketDataSync = new CricketDataSync();
export default cricketDataSync;