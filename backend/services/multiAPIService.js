const axios = require('axios');

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

// ==================== MULTI-HOST API CONFIGURATION ====================
const CRICKET_APIS = {
    cricbuzz: {
        host: 'cricbuzz-cricket.p.rapidapi.com',
        available: true,
        priority: 1,
        lastFailed: null
    },
    freeData: {
        host: 'cricket-api-free-data.p.rapidapi.com',
        available: true,
        priority: 2,
        lastFailed: null
    },
    liveLine: {
        host: 'cricket-live-line1.p.rapidapi.com',
        available: true,
        priority: 3,
        lastFailed: null
    },
    liveAdvanced: {
        host: 'cricket-live-line-advance.p.rapidapi.com',
        available: true,
        priority: 4,
        lastFailed: null
    },
    freeCricbuzz: {
        host: 'free-cricbuzz-cricket-api.p.rapidapi.com',
        available: true,
        priority: 5,
        lastFailed: null
    }
};

// Reset API availability every hour
setInterval(() => {
    Object.keys(CRICKET_APIS).forEach(key => {
        if (!CRICKET_APIS[key].available) {
            const hoursSinceFail = (Date.now() - CRICKET_APIS[key].lastFailed) / (1000 * 60 * 60);
            if (hoursSinceFail >= 1) {
                CRICKET_APIS[key].available = true;
                console.log(`✅ ${key} (${CRICKET_APIS[key].host}) available again`);
            }
        }
    });
}, 60000); // Check every minute

/**
 * Make API request with automatic fallback across all hosts
 */
const fetchWithMultipleHosts = async (endpoint, params = {}) => {
    // Sort by priority
    const sortedAPIs = Object.entries(CRICKET_APIS)
        .filter(([_, config]) => config.available)
        .sort(([_, a], [__, b]) => a.priority - b.priority);

    let lastError = null;

    for (const [name, config] of sortedAPIs) {
        try {
            console.log(`🔵 Trying ${name} (${config.host})...`);

            const response = await axios.get(
                `https://${config.host}${endpoint}`,
                {
                    params,
                    headers: {
                        'X-RapidAPI-Key': RAPIDAPI_KEY,
                        'X-RapidAPI-Host': config.host
                    },
                    timeout: 10000
                }
            );

            console.log(`✅ ${name} succeeded!`);
            return {
                success: true,
                data: response.data,
                source: name,
                host: config.host
            };

        } catch (error) {
            lastError = error;
            const status = error.response?.status;

            console.error(`❌ ${name} failed:`, {
                status,
                message: error.message
            });

            // Mark as unavailable if rate limit
            if (status === 429) {
                CRICKET_APIS[name].available = false;
                CRICKET_APIS[name].lastFailed = Date.now();

                // Check rate limit reset time
                const resetTime = error.response?.headers?.['x-ratelimit-requests-reset'];
                console.log(`⚠️ ${name} rate limit - disabled for 1 hour`);
                if (resetTime) {
                    console.log(`   Reset at: ${new Date(resetTime * 1000).toLocaleString()}`);
                }
            }

            continue; // Try next API
        }
    }

    // All APIs exhausted
    if (lastError?.response?.status === 429) {
        throw new Error('All APIs are rate-limited. Your RapidAPI free tier quota (200 requests/month) has been exhausted. Resets next month.');
    }

    throw new Error('All APIs exhausted: ' + (lastError?.message || 'Unknown error'));
};

/**
 * Get live matches with automatic fallback
 */
const getLiveMatches = async () => {
    // Try different endpoints across hosts
    const endpoints = [
        '/matches/v1/live',       // Cricbuzz
        '/live',                  // Live Line
        '/matches/live',          // Free Data
        '/v1/matches/live'        // Alternative
    ];

    for (const endpoint of endpoints) {
        try {
            return await fetchWithMultipleHosts(endpoint);
        } catch (error) {
            continue;
        }
    }

    throw new Error('Could not fetch live matches from any API');
};

/**
 * Get team rankings with fallback
 */
const getTeamRankings = async (format) => {
    const endpoints = [
        `/stats/v1/rankings/teams?formatType=${format}`,
        `/rankings/teams/${format}`,
        `/v1/rankings?format=${format}`
    ];

    for (const endpoint of endpoints) {
        try {
            return await fetchWithMultipleHosts(endpoint);
        } catch (error) {
            continue;
        }
    }

    throw new Error('Could not fetch rankings from any API');
};

/**
 * Get API status
 */
const getAPIStatus = () => {
    return Object.entries(CRICKET_APIS).map(([name, config]) => ({
        name,
        host: config.host,
        available: config.available,
        priority: config.priority,
        lastFailed: config.lastFailed
    }));
};

module.exports = {
    fetchWithMultipleHosts,
    getLiveMatches,
    getTeamRankings,
    getAPIStatus,
    CRICKET_APIS
};