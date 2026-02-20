const axios = require('axios');

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const CRICAPI_KEY = process.env.CRICAPI_KEY;

// API Status Tracker
const apiStatus = {
    rapidapi: { available: true, resetTime: null },
    cricapi: { available: true, resetTime: null }
};

/**
 * Smart API Request with Automatic Fallback
 */
const fetchWithFallback = async (endpoint, dataType) => {
    // Try RapidAPI first
    if (apiStatus.rapidapi.available) {
        try {
            console.log('🔵 Trying RapidAPI...');
            const data = await fetchFromRapidAPI(endpoint);
            return { success: true, data, source: 'RapidAPI' };
        } catch (error) {
            if (error.response?.status === 429) {
                console.log('⚠️ RapidAPI rate limit hit! Switching to CricAPI...');
                apiStatus.rapidapi.available = false;
                apiStatus.rapidapi.resetTime = Date.now() + 3600000; // 1 hour
                // Fall through to CricAPI
            } else {
                throw error;
            }
        }
    }

    // Fallback to CricAPI
    if (apiStatus.cricapi.available) {
        try {
            console.log('🟢 Using CricAPI...');
            const data = await fetchFromCricAPI(dataType);
            return { success: true, data, source: 'CricAPI' };
        } catch (error) {
            if (error.response?.status === 429) {
                console.log('⚠️ CricAPI rate limit hit too!');
                apiStatus.cricapi.available = false;
                apiStatus.cricapi.resetTime = Date.now() + 3600000;
                return { success: false, error: 'All APIs exhausted' };
            }
            throw error;
        }
    }

    return { success: false, error: 'No API available' };
};

/**
 * Fetch from RapidAPI (Cricbuzz)
 */
const fetchFromRapidAPI = async (endpoint) => {
    const response = await axios.get(
        `https://cricbuzz-cricket.p.rapidapi.com${endpoint}`,
        {
            headers: {
                'X-RapidAPI-Key': RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            },
            timeout: 10000
        }
    );
    return response.data;
};

/**
 * Fetch from CricAPI
 */
const fetchFromCricAPI = async (dataType) => {
    const endpoints = {
        live: `/matches?apikey=${CRICAPI_KEY}`,
        rankings: `/rankings?apikey=${CRICAPI_KEY}`,
        news: `/news?apikey=${CRICAPI_KEY}`
    };

    const response = await axios.get(
        `https://api.cricapi.com/v1${endpoints[dataType] || endpoints.live}`,
        { timeout: 10000 }
    );
    return response.data;
};

/**
 * Reset API availability after cooldown
 */
setInterval(() => {
    const now = Date.now();

    if (!apiStatus.rapidapi.available && apiStatus.rapidapi.resetTime < now) {
        console.log('✅ RapidAPI available again');
        apiStatus.rapidapi.available = true;
    }

    if (!apiStatus.cricapi.available && apiStatus.cricapi.resetTime < now) {
        console.log('✅ CricAPI available again');
        apiStatus.cricapi.available = true;
    }
}, 60000); // Check every minute

module.exports = {
    fetchWithFallback,
    apiStatus
};