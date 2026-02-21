const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Database Connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('❌ Database Connection Failed:', err);
    } else {
        console.log('✅ Connected to PostgreSQL database');
    }
});

// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// =============== AUTH ROUTES ===============
// Registration
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await pool.query(
            'SELECT * FROM users WHERE email = $1 OR username = $2',
            [email, username]
        );

        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
            [username, email, hashedPassword]
        );

        const token = jwt.sign(
            { id: newUser.rows[0].id, username: newUser.rows[0].username },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            message: 'User registered successfully',
            token,
            user: newUser.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length === 0) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user.rows[0].id, username: user.rows[0].username },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.rows[0].id,
                username: user.rows[0].username,
                email: user.rows[0].email
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// =============== POLLS ROUTES ===============
// GET ALL POLLS
app.get('/api/polls', async (req, res) => {
    try {
        const polls = await pool.query(`
            SELECT p.id, p.question, 
                json_agg(json_build_object(
                    'id', po.id,
                    'text', po.option_text,
                    'votes', po.votes
                ) ORDER BY po.id) as options
            FROM polls p
            LEFT JOIN poll_options po ON p.id = po.poll_id
            GROUP BY p.id
            ORDER BY p.id
        `);

        res.json(polls.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// VOTE ON POLL
app.post('/api/polls/:pollId/vote', authenticateToken, async (req, res) => {
    try {
        const { pollId } = req.params;
        const { optionId } = req.body;
        const userId = req.user.id;

        const existingVote = await pool.query(
            'SELECT * FROM poll_votes WHERE poll_id = $1 AND user_id = $2', [pollId, userId]
        );

        if (existingVote.rows.length > 0) {
            return res.status(400).json({ error: 'You already have voted on this poll' });
        }

        await pool.query('BEGIN');
        await pool.query('UPDATE poll_options SET votes = votes + 1 WHERE id = $1', [optionId]);
        await pool.query('INSERT INTO poll_votes (poll_id, option_id, user_id) VALUES ($1, $2, $3)', [pollId, optionId, userId]);
        await pool.query('COMMIT');

        res.json({ message: 'Vote recorded successfully' });

    } catch (error) {
        await pool.query('ROLLBACK');
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// USER VOTED CHECK
app.get('/api/polls/:pollId/check-vote', authenticateToken, async (req, res) => {
    try {
        const { pollId } = req.params;
        const userId = req.user.id;

        const vote = await pool.query(
            'SELECT option_id FROM poll_votes WHERE poll_id = $1 AND user_id = $2', [pollId, userId]
        );

        if (vote.rows.length > 0) {
            res.json({ hasVoted: true, optionId: vote.rows[0].option_id });
        } else {
            res.json({ hasVoted: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// =============== QUIZ ROUTES ===============
// SUBMIT ROUTES
app.post('/api/quiz/submit', authenticateToken, async (req, res) => {
    try {
        const { quizType, score, totalQuestions, answers } = req.body;
        const userId = req.user.id;
        const result = await pool.query(
            'INSERT INTO quiz_attempts (user_id, quiz_type, score, total_questions, answers) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [userId, quizType, score, totalQuestions, JSON.stringify(answers)]
        );

        res.json({
            message: 'Quiz submitted successfully',
            attempt: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// QUIZ HISTORY
app.get('/api/quiz/history', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const history = await pool.query(
            'SELECT * FROM quiz_attempts WHERE user_id = $1 ORDER BY completed_at DESC LIMIT 20',
            [userId]
        );

        res.json(history.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// LEADERBOARD
app.get('/api/quiz/leaderboard/:quizType', async (req, res) => {
    try {
        const { quizType } = req.params;
        const leaderboard = await pool.query(
            `SELECT u.username, qa.score, qa.total_questions, qa.completed_at 
            FROM quiz_attempts qa
            JOIN users u ON qa.user_id = u.id
            WHERE qa.quiz_type = $1 
            ORDER BY qa.score DESC, qa.completed_at ASC 
            LIMIT 10`,
            [quizType]
        );

        res.json(leaderboard.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// =============== HEALTH CHECK ===============
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// =============== IMPORT ROUTE FILES ===============
console.log('📂 Loading route modules...');

const teamsRouter = require('./routes/teams');
const doodleCricketRouter = require('./routes/doodleCricket');
const dailyRewardsRouter = require('./routes/dailyRewards');
const rapidAPIRouter = require('./routes/rapidapi');
const cricAPIRouter = require('./routes/cricapi');
const geminiRoutes = require('./routes/gemini');
const rapidAPIRoutes = require('./routes/rapidapi');

// Import sync routes with error handling
let syncRoutes;
try {
    syncRoutes = require('./routes/sync');
    console.log('✅ Sync routes loaded successfully');
} catch (error) {
    console.error('❌ Failed to load sync routes:', error.message);
    syncRoutes = null;
}

// =============== REGISTER ROUTES ===============
console.log('🔗 Registering routes...');

app.use('/api/teams', teamsRouter);
app.use('/api/doodle-cricket', doodleCricketRouter);
app.use('/api/daily-rewards', dailyRewardsRouter);
app.use('/api/rapidapi', rapidAPIRouter);
app.use('/api/cricapi', cricAPIRouter);
app.use('/api/gemini', geminiRoutes);
app.use('/api/rapidapi', rapidAPIRoutes);

// Register sync routes only if loaded successfully
if (syncRoutes) {
    app.use('/api/sync', syncRoutes);
    console.log('✅ /api/sync routes registered');
} else {
    console.log('⚠️  /api/sync routes NOT registered (module failed to load)');
}

// =============== START CRON JOBS ===============
try {
    const { startSyncCron } = require('./jobs/syncCron');
    startSyncCron();
    console.log('⏰ Auto-sync cron job started');
} catch (error) {
    console.error('⚠️  Failed to start cron jobs:', error.message);
}

// =============== START SERVER (ONLY ONCE!) ===============
app.listen(PORT, '0.0.0.0',() => {
    console.log('\n' + '='.repeat(50));
    //console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`🚀 Server is LIVE on port ${PORT}`);
    console.log(`✅ Database connected`);
    console.log(`✅ RapidAPI integration active`);
    console.log(`⏰ Auto-sync enabled: Data will sync every hour`);
    console.log(`📡 Network: Listening on 0.0.0.0 (Required for Render)`);
    console.log('='.repeat(50) + '\n');
});