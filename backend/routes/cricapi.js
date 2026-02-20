const express = require('express');
const router = express.Router();
const axios = require('axios');

const CRICAPI_KEY = process.env.CRICAPI_KEY;
const CRICAPI_BASE_URL = 'https://api.cricapi.com/v1';

// Get Current Matches
router.get('/matches/current', async (req, res) => {
    try {
        const response = await axios.get(
            `${CRICAPI_BASE_URL}/currentMatches`,
            {
                params: {
                    apikey: CRICAPI_KEY,
                    offset: 0
                },
                timeout: 10000
            }
        );

        res.json({ success: true, data: response.data.data });
    } catch (error) {
        console.error('CricAPI Error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch from CricAPI'
        });
    }
});

module.exports = router;