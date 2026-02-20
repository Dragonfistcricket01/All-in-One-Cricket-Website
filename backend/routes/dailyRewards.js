const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Reward configuration (7-day cycle)
const DAILY_REWARDS = [
    { day: 1, coins: 10, badge: null, emoji: '🪙' },
    { day: 2, coins: 15, badge: null, emoji: '🪙' },
    { day: 3, coins: 20, badge: { id: 'day3', name: '3 Day Streak', emoji: '🥉' }, emoji: '🪙' },
    { day: 4, coins: 25, badge: null, emoji: '🪙' },
    { day: 5, coins: 30, badge: { id: 'day5', name: '5 Day Streak', emoji: '🥈' }, emoji: '🪙' },
    { day: 6, coins: 40, badge: null, emoji: '🪙' },
    { day: 7, coins: 100, badge: { id: 'week1', name: 'Weekly Champion', emoji: '🏆' }, emoji: '💰' }
];

// Helper - Get today's date using LOCAL timezone (YYYY-MM-DD)
const getTodayDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// Helper: Calculate days between dates
const daysBetween = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
};

// GET: User's reward status
router.get('/status/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const today = getTodayDate();

        console.log('=== DEBUG STATUS ===');
        console.log('Today (Local):', today);

        // Get or create user reward record
        let userReward = await pool.query(
            'SELECT * FROM user_rewards WHERE user_id = $1',
            [userId]
        );

        if (userReward.rows.length === 0) {
            // Create new record
            await pool.query(
                'INSERT INTO user_rewards (user_id) VALUES ($1)',
                [userId]
            );
            userReward = await pool.query(
                'SELECT * FROM user_rewards WHERE user_id = $1',
                [userId]
            );
        }

        const record = userReward.rows[0];
        let canClaim = true;
        let nextRewardDay = 1;
        let streakBroken = false;

        console.log('Last Claim Date from DB:', record.last_claim_date);

        // Check if already claimed today
        if (record.last_claim_date) {
            // Extract date part only (YYYY-MM-DD) from database datetime
            const lastClaim = new Date(record.last_claim_date).toISOString().split('T')[0];

            console.log('Last Claim Date (formatted):', lastClaim);
            console.log('Comparing:', lastClaim, 'vs', today);

            if (lastClaim === today) {
                // Already claimed today
                canClaim = false;
                nextRewardDay = (record.current_streak % 7) + 1;
                console.log('✅ Already claimed today - canClaim:', canClaim);
            } else {
                // Calculate days since last claim
                const daysSinceLastClaim = daysBetween(today, lastClaim);
                console.log('Days since last claim:', daysSinceLastClaim);

                if (daysSinceLastClaim === 1) {
                    // Consecutive day - continue streak
                    nextRewardDay = (record.current_streak % 7) + 1;
                    canClaim = true;
                    console.log('✅ Consecutive day - streak continues');
                } else {
                    // Streak broken - reset to day 1
                    streakBroken = true;
                    nextRewardDay = 1;
                    canClaim = true;
                    console.log('⚠️ Streak broken - resetting to day 1');
                }
            }
        } else {
            console.log('🆕 First time claiming');
        }

        console.log('Can Claim:', canClaim);
        console.log('Next Reward Day:', nextRewardDay);
        console.log('===================');

        // Get recent claims (last 7)
        const recentClaims = await pool.query(
            `SELECT * FROM reward_claims 
             WHERE user_id = $1 
             ORDER BY claim_date DESC 
             LIMIT 7`,
            [userId]
        );

        // Get user badges
        const badges = await pool.query(
            'SELECT * FROM user_badges WHERE user_id = $1 ORDER BY earned_date DESC',
            [userId]
        );

        res.json({
            success: true,
            data: {
                currentStreak: streakBroken ? 0 : record.current_streak,
                longestStreak: record.longest_streak,
                totalCoins: record.total_coins,
                lastClaimDate: record.last_claim_date,
                canClaim: canClaim,
                nextRewardDay: nextRewardDay,
                streakBroken: streakBroken,
                recentClaims: recentClaims.rows,
                badges: badges.rows,
                nextReward: DAILY_REWARDS[nextRewardDay - 1]
            }
        });

    } catch (error) {
        console.error('❌ Error fetching reward status:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// POST: Claim daily reward
router.post('/claim/:userId', async (req, res) => {
    const client = await pool.connect();

    try {
        const { userId } = req.params;
        const today = getTodayDate();

        console.log('=== CLAIMING REWARD ===');
        console.log('User ID:', userId);
        console.log('Today (Local):', today);

        await client.query('BEGIN');

        // Get current record
        const userReward = await client.query(
            'SELECT * FROM user_rewards WHERE user_id = $1',
            [userId]
        );

        if (userReward.rows.length === 0) {
            await client.query('ROLLBACK');
            return res.status(404).json({ success: false, error: 'User reward record not found' });
        }

        const record = userReward.rows[0];

        // Check if already claimed today
        if (record.last_claim_date) {
            const lastClaim = new Date(record.last_claim_date).toISOString().split('T')[0];
            console.log('Last claim was:', lastClaim);

            if (lastClaim === today) {
                console.log('❌ Already claimed today!');
                await client.query('ROLLBACK');
                return res.status(400).json({
                    success: false,
                    error: 'Already claimed today',
                    nextClaimIn: '23:59:59'
                });
            }
        }

        // Calculate new streak
        let newStreak = 1;
        if (record.last_claim_date) {
            const lastClaim = new Date(record.last_claim_date).toISOString().split('T')[0];
            const daysSinceLastClaim = daysBetween(today, lastClaim);

            console.log('Days since last claim:', daysSinceLastClaim);

            if (daysSinceLastClaim === 1) {
                // Consecutive day
                newStreak = record.current_streak + 1;
                console.log('✅ Consecutive day! New streak:', newStreak);
            } else {
                console.log('⚠️ Streak broken! Resetting to 1');
            }
        }

        // Get reward for this day
        const dayInCycle = ((newStreak - 1) % 7) + 1;
        const reward = DAILY_REWARDS[dayInCycle - 1];

        console.log('Day in cycle:', dayInCycle);
        console.log('Reward:', reward.coins, 'coins');

        // Update user rewards
        const newLongestStreak = Math.max(newStreak, record.longest_streak);
        const newTotalCoins = record.total_coins + reward.coins;

        await client.query(
            `UPDATE user_rewards 
             SET current_streak = $1, 
                 longest_streak = $2, 
                 total_coins = $3, 
                 last_claim_date = $4,
                 updated_at = CURRENT_TIMESTAMP
             WHERE user_id = $5`,
            [newStreak, newLongestStreak, newTotalCoins, today, userId]
        );

        console.log('✅ Updated user_rewards table');

        // Record claim
        await client.query(
            `INSERT INTO reward_claims 
             (user_id, claim_date, day_number, reward_type, reward_amount, streak_at_claim)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [userId, today, dayInCycle, 'coins', reward.coins, newStreak]
        );

        console.log('✅ Recorded claim in reward_claims table');

        // Award badge if applicable
        let awardedBadge = null;
        if (reward.badge) {
            // Check if badge already exists
            const existingBadge = await client.query(
                'SELECT * FROM user_badges WHERE user_id = $1 AND badge_id = $2',
                [userId, reward.badge.id]
            );

            if (existingBadge.rows.length === 0) {
                await client.query(
                    `INSERT INTO user_badges 
                     (user_id, badge_id, badge_name, badge_emoji, earned_date)
                     VALUES ($1, $2, $3, $4, $5)`,
                    [userId, reward.badge.id, reward.badge.name, reward.badge.emoji, today]
                );
                awardedBadge = reward.badge;
                console.log('🏆 Badge awarded:', reward.badge.name);
            }
        }

        await client.query('COMMIT');
        console.log('✅ Transaction committed successfully!');
        console.log('======================');

        res.json({
            success: true,
            message: 'Reward claimed successfully!',
            data: {
                reward: {
                    day: dayInCycle,
                    coins: reward.coins,
                    badge: awardedBadge
                },
                newStreak: newStreak,
                totalCoins: newTotalCoins,
                isNewRecord: newStreak > record.longest_streak
            }
        });

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('❌ Error claiming reward:', error);
        res.status(500).json({ success: false, error: error.message });
    } finally {
        client.release();
    }
});

// GET: Leaderboard (longest streaks)
router.get('/leaderboard', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT 
                u.username,
                ur.current_streak,
                ur.longest_streak,
                ur.total_coins
             FROM user_rewards ur
             JOIN users u ON ur.user_id = u.id
             ORDER BY ur.current_streak DESC, ur.longest_streak DESC
             LIMIT 10`
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

module.exports = router;