// ==================== OLD CODE (COMMENTED OUT - BACKUP) ====================
/*
const express = require('express');
const router = express.Router();
const axios = require('axios');

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = 'cricbuzz-cricket.p.rapidapi.com';

// Rate limiting cache
const cache = new Map();
const CACHE_DURATION = 3600000; // 1 hour

// Helper: Check cache
const getCached = (key) => {
    const cached = cache.get(key);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return cached.data;
    }
    return null;
};

// Helper: Set cache
const setCache = (key, data) => {
    cache.set(key, { data, timestamp: Date.now() });
};

// Helper: Make RapidAPI request with retry logic
const makeRapidAPIRequest = async (endpoint, retries = 3) => {
    const cacheKey = endpoint;
    const cached = getCached(cacheKey);

    if (cached) {
        console.log('✅ Returning cached data for:', endpoint);
        return cached;
    }

    const options = {
        method: 'GET',
        url: `https://${RAPIDAPI_HOST}${endpoint}`,
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST
        },
        timeout: 10000
    };

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`🔄 Attempt ${attempt} for: ${endpoint}`);
            const response = await axios.request(options);

            setCache(cacheKey, response.data);
            return response.data;

        } catch (error) {
            console.error(`❌ Attempt ${attempt} failed:`, error.message);

            if (error.response?.status === 429) {
                console.error('⚠️  Rate limit exceeded! Consider upgrading RapidAPI plan.');

                // Return mock data for development
                return {
                    error: 'RATE_LIMIT_EXCEEDED',
                    message: 'API rate limit exceeded. Using mock data for development.',
                    mockData: true
                };
            }

            if (attempt === retries) {
                throw error;
            }

            // Wait before retry (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
};

// Get Live Matches
router.get('/live-matches', async (req, res) => {
    try {
        const data = await makeRapidAPIRequest('/matches/v1/live');

        if (data.mockData) {
            // Return mock data
            return res.json({
                success: true,
                matches: [],
                message: 'API limit reached. Please upgrade your RapidAPI plan.'
            });
        }

        res.json({ success: true, data });
    } catch (error) {
        console.error('Live matches error:', error.message);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch live matches',
            details: error.message
        });
    }
});

// Get Team Rankings
router.get('/rankings/teams', async (req, res) => {
    try {
        const { format } = req.query; // test, odi, t20
        const data = await makeRapidAPIRequest(`/stats/v1/rankings/teams?formatType=${format}`);

        if (data.mockData) {
            return res.json({
                success: true,
                rankings: [],
                message: 'API limit reached'
            });
        }

        res.json({ success: true, data });
    } catch (error) {
        console.error('Team rankings error:', error.message);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch team rankings',
            details: error.message
        });
    }
});

module.exports = router;
*/

// ==================== NEW MULTI-API CODE (ACTIVE) ====================
const express = require('express');
const router = express.Router();
const multiAPI = require('../services/multiAPIService');

// ==================== GET LIVE MATCHES ====================
router.get('/matches/live', async (req, res) => {
    try {
        const result = await multiAPI.getLiveMatches();

        res.json({
            success: true,
            data: result.data,
            source: result.source,
            host: result.host,
            message: `✅ Data from ${result.source}`
        });
    } catch (error) {
        console.error('Live matches error:', error.message);
        res.status(500).json({
            success: false,
            error: 'All APIs unavailable',
            message: error.message
        });
    }
});

// ==================== GET TEAM RANKINGS ====================
router.get('/rankings/teams', async (req, res) => {
    try {
        const format = req.query.format || 'odi';
        const result = await multiAPI.getTeamRankings(format);

        res.json({
            success: true,
            data: result.data,
            source: result.source,
            host: result.host,
            message: `✅ Rankings from ${result.source}`
        });
    } catch (error) {
        console.error('Rankings error:', error.message);
        res.status(500).json({
            success: false,
            error: 'Could not fetch rankings'
        });
    }
});

// ==================== GET API STATUS ====================
router.get('/status', (req, res) => {
    const status = multiAPI.getAPIStatus();
    res.json({
        success: true,
        apis: status,
        message: 'Current status of all RapidAPI hosts'
    });
});

module.exports = router;