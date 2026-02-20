const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { 
    syncTeamRankings, 
    syncLiveMatches, 
    syncCricketNews, 
    syncAllData 
} = require('../services/syncService');

// ==================== GET SYNC LOGS ====================
router.get('/logs', async (req, res) => {
    try {
        const result = await db.query(
            'SELECT * FROM sync_log ORDER BY synced_at DESC LIMIT 100'
        );
        
        res.json({
            success: true,
            logs: result.rows
        });
    } catch (error) {
        console.error('Error fetching sync logs:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch sync logs'
        });
    }
});

// ==================== MANUAL SYNC ENDPOINTS ====================
// Sync team rankings
router.post('/rankings', async (req, res) => {
    try {
        const result = await syncTeamRankings();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Sync live matches
router.post('/matches', async (req, res) => {
    try {
        const result = await syncLiveMatches();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Sync cricket news
router.post('/news', async (req, res) => {
    try {
        const result = await syncCricketNews();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Sync all data
router.post('/all', async (req, res) => {
    try {
        const result = await syncAllData();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// ==================== CLEAR LOGS ====================
router.delete('/logs', async (req, res) => {
    try {
        await db.query('DELETE FROM sync_log');
        res.json({ success: true, message: 'Logs cleared successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;