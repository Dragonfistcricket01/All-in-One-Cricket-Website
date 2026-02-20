const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT player_name, score, balls, difficulty, created_at 
             FROM doodle_cricket_scores 
             ORDER BY score DESC, created_at ASC 
             LIMIT 20`
        );

        res.json({
            success: true,
            leaderboard: result.rows
        });
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get leaderboard by difficulty
router.get('/leaderboard/:difficulty', async (req, res) => {
    try {
        const { difficulty } = req.params;

        const result = await pool.query(
            `SELECT player_name, score, balls, difficulty, created_at 
             FROM doodle_cricket_scores 
             WHERE difficulty = $1
             ORDER BY score DESC, created_at ASC 
             LIMIT 10`,
            [difficulty]
        );

        res.json({
            success: true,
            leaderboard: result.rows
        });
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Submit score
router.post('/score', async (req, res) => {
    try {
        const { playerName, score, balls, difficulty } = req.body;

        // Validate input
        if (!playerName || score === undefined || !balls || !difficulty) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        // Insert score
        const result = await pool.query(
            `INSERT INTO doodle_cricket_scores 
             (player_name, score, balls, difficulty) 
             VALUES ($1, $2, $3, $4) 
             RETURNING id`,
            [playerName.trim(), score, balls, difficulty]
        );

        res.json({
            success: true,
            scoreId: result.rows[0].id,
            message: 'Score saved successfully'
        });
    } catch (error) {
        console.error('Error saving score:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get player stats
router.get('/player/:playerName/stats', async (req, res) => {
    try {
        const { playerName } = req.params;

        const result = await pool.query(
            `SELECT 
                COUNT(*) as games_played,
                MAX(score) as highest_score,
                AVG(score)::numeric(10,2) as average_score,
                SUM(balls) as total_balls
             FROM doodle_cricket_scores 
             WHERE LOWER(player_name) = LOWER($1)`,
            [playerName]
        );

        res.json({
            success: true,
            stats: result.rows[0]
        });
    } catch (error) {
        console.error('Error fetching player stats:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get global statistics
router.get('/stats/global', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT 
                COUNT(*) as total_games,
                COUNT(DISTINCT player_name) as total_players,
                MAX(score) as highest_score,
                AVG(score)::numeric(10,2) as average_score
             FROM doodle_cricket_scores`
        );

        res.json({
            success: true,
            stats: result.rows[0]
        });
    } catch (error) {
        console.error('Error fetching global stats:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;