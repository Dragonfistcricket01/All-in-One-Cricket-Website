const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Get all teams for a user
router.get('/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        const teamsResult = await pool.query(
            'SELECT * FROM teams WHERE user_id = $1 ORDER BY created_at DESC',
            [userId]
        );

        const teams = await Promise.all(teamsResult.rows.map(async (team) => {
            const playersResult = await pool.query(
                'SELECT * FROM team_players WHERE team_id = $1 ORDER BY position',
                [team.id]
            );

            return {
                id: team.id,
                name: team.team_name,
                formation: team.formation_name,
                formationId: team.formation_id,
                // Removed JSON.parse() - PostgreSQL already parses JSONB
                players: playersResult.rows.map(p => p.player_data),
                createdAt: team.created_at,
                updatedAt: team.updated_at
            };
        }));

        res.json({ success: true, teams });
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get single team by ID
router.get('/:teamId', async (req, res) => {
    try {
        const { teamId } = req.params;

        const teamResult = await pool.query(
            'SELECT * FROM teams WHERE id = $1',
            [teamId]
        );

        if (teamResult.rows.length === 0) {
            return res.status(404).json({ success: false, error: 'Team not found' });
        }

        const team = teamResult.rows[0];
        const playersResult = await pool.query(
            'SELECT * FROM team_players WHERE team_id = $1 ORDER BY position',
            [teamId]
        );

        res.json({
            success: true,
            team: {
                id: team.id,
                name: team.team_name,
                formation: team.formation_name,
                formationId: team.formation_id,
                // ✅ FIXED: Removed JSON.parse()
                players: playersResult.rows.map(p => p.player_data),
                createdAt: team.created_at,
                updatedAt: team.updated_at
            }
        });
    } catch (error) {
        console.error('Error fetching team:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Create new team
router.post('/', async (req, res) => {
    const client = await pool.connect();
    try {
        const { userId, teamName, formationId, formationName, players } = req.body;

        // Validate
        if (!userId || !teamName || !players || players.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        // Check team limit
        const countResult = await client.query(
            'SELECT COUNT(*) FROM teams WHERE user_id = $1',
            [userId]
        );

        if (parseInt(countResult.rows[0].count) >= 11) {
            return res.status(400).json({
                success: false,
                error: 'You can only save up to 11 teams'
            });
        }

        await client.query('BEGIN');

        // Insert team
        const teamResult = await client.query(
            `INSERT INTO teams (user_id, team_name, formation_id, formation_name) 
             VALUES ($1, $2, $3, $4) RETURNING id`,
            [userId, teamName, formationId, formationName]
        );

        const teamId = teamResult.rows[0].id;

        // Insert players
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            if (player) {
                await client.query(
                    `INSERT INTO team_players 
                     (team_id, player_id, position, player_name, player_role, player_country, player_rating, player_data) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                    [
                        teamId,
                        player.id,
                        i,
                        player.name,
                        player.role,
                        player.country,
                        player.rating,
                        JSON.stringify(player)
                    ]
                );
            }
        }

        await client.query('COMMIT');

        res.json({
            success: true,
            teamId,
            message: 'Team created successfully'
        });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error creating team:', error);
        res.status(500).json({ success: false, error: error.message });
    } finally {
        client.release();
    }
});

// Update team
router.put('/:teamId', async (req, res) => {
    const client = await pool.connect();
    try {
        const { teamId } = req.params;
        const { teamName, formationId, formationName, players } = req.body;

        await client.query('BEGIN');

        // Update team
        await client.query(
            `UPDATE teams 
             SET team_name = $1, formation_id = $2, formation_name = $3, updated_at = CURRENT_TIMESTAMP 
             WHERE id = $4`,
            [teamName, formationId, formationName, teamId]
        );

        // Delete existing players
        await client.query('DELETE FROM team_players WHERE team_id = $1', [teamId]);

        // Insert new players
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            if (player) {
                await client.query(
                    `INSERT INTO team_players 
                     (team_id, player_id, position, player_name, player_role, player_country, player_rating, player_data) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                    [
                        teamId,
                        player.id,
                        i,
                        player.name,
                        player.role,
                        player.country,
                        player.rating,
                        JSON.stringify(player)
                    ]
                );
            }
        }

        await client.query('COMMIT');

        res.json({
            success: true,
            message: 'Team updated successfully'
        });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error updating team:', error);
        res.status(500).json({ success: false, error: error.message });
    } finally {
        client.release();
    }
});

// Delete team
router.delete('/:teamId', async (req, res) => {
    try {
        const { teamId } = req.params;

        const result = await pool.query(
            'DELETE FROM teams WHERE id = $1 RETURNING id',
            [teamId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'Team not found'
            });
        }

        res.json({
            success: true,
            message: 'Team deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting team:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get user stats
router.get('/user/:userId/stats', async (req, res) => {
    try {
        const { userId } = req.params;

        const result = await pool.query(
            `SELECT 
                COUNT(*) as team_count,
                MAX(created_at) as last_created
             FROM teams 
             WHERE user_id = $1`,
            [userId]
        );

        res.json({
            success: true,
            stats: result.rows[0]
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;