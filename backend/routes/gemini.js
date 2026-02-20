const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

console.log('🔑 Checking Gemini API Key...');
console.log('GEMINI_API_KEY exists:', !!process.env.GEMINI_API_KEY);
console.log('GEMINI_API_KEY length:', process.env.GEMINI_API_KEY?.length || 0);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY is not defined in .env file');
}

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// ==================== WEBSITE CONTEXT ====================
const WEBSITE_CONTEXT = `
You are assisting users on an All-in-One Cricket Website with the following information:

**Website Overview:**
- Name: All-in-One Cricket Website
- Purpose: Comprehensive cricket platform for fans worldwide
- Founded: 2024
- Developer: Solo developed by Abdullah Ibrahim as university project (COMP1682)

**Key Features:**
1. Cricket Store - 40+ products across multiple categories (bats, balls, equipment)
2. Live Cricket Scores - Real-time updates from Cricbuzz API
3. Player Statistics & Rankings
4. Match Predictions (AI-powered & formula-based)
5. Interactive Games (Quiz, Spin the Wheel, Memory Cards, Doodle Cricket)
6. AI Features:
   - AI Quiz Generator (Gemini-powered)
   - Match Predictor
   - Player Performance Predictor
   - Pitch Behavior Predictor
   - ML Match Predictor (Python scikit-learn)
7. Educational Content & Cricket Rules
8. Community Features & Polls

**Store Information:**
- 40+ cricket products available
- Categories: Cricket Bats, Cricket Balls, Protective Gear, Accessories
- Multi-currency support
- Shopping cart and wishlist features
- Secure checkout process

**AI Technology:**
- Powered by Google Gemini AI
- Machine Learning using Python and scikit-learn
- Real-time cricket data integration

**Contact:**
- Support Email: support@cricketwebsite.com
- Available 24/7 through chatbot

When answering questions, use this context to provide accurate information about our website.
`;

// ==================== MODEL CONFIGURATION ====================
const AVAILABLE_MODELS = {
    'gemini-2.0-flash-lite': {
        name: 'Gemini 2.0 Flash Lite',
        description: 'Ultra-fast, basic responses',
        rateLimit: { rpm: 15, tpm: 250000, rpd: 1000 },
        useBest: 'quick answers, simple questions'
    },
    'gemini-2.5-flash': {
        name: 'Gemini 2.5 Flash',
        description: 'Fastest, best for quick responses',
        rateLimit: { rpm: 10, tpm: 250000, rpd: 250 },
        useBest: 'general chat, quizzes, facts'
    },
    'gemini-2.5-pro': {
        name: 'Gemini 2.5 Pro',
        description: 'Most capable, complex tasks',
        rateLimit: { rpm: 2, tpm: 125000, rpd: 50 },
        useBest: 'analysis, predictions, detailed explanations'
    },
    'gemini-3-pro': {
        name: 'Gemini 3 Pro',
        description: 'Experimental, newest features',
        rateLimit: { rpm: null, tpm: 125000, rpd: null },
        useBest: 'experimental features, advanced analysis'
    }
};

// Track usage per model (simple in-memory tracking)
const modelUsage = {
    'gemini-2.0-flash-lite': { requests: 0, lastReset: Date.now() },
    'gemini-2.5-flash': { requests: 0, lastReset: Date.now() },
    'gemini-2.5-pro': { requests: 0, lastReset: Date.now() },
    'gemini-3-pro': { requests: 0, lastReset: Date.now() }
};

// Reset counters every minute
setInterval(() => {
    Object.keys(modelUsage).forEach(model => {
        modelUsage[model].requests = 0;
        modelUsage[model].lastReset = Date.now();
    });
}, 60000);

/**
 * Get the best available model (with fallback)
 */
function getBestAvailableModel(preferredModel = 'gemini-2.5-flash') {
    // Validate preferred model
    if (!AVAILABLE_MODELS[preferredModel]) {
        preferredModel = 'gemini-2.5-flash';
    }

    // Check if preferred model is available
    const preferred = AVAILABLE_MODELS[preferredModel];
    if (preferred.rateLimit.rpm === null ||
        modelUsage[preferredModel].requests < preferred.rateLimit.rpm) {
        return {
            model: preferredModel,
            name: preferred.name,
            isFallback: false
        };
    }

    // Try fallback models in order
    const fallbackOrder = [
        'gemini-2.0-flash-lite',
        'gemini-2.5-flash',
        'gemini-2.5-pro',
        'gemini-3-pro'
    ];

    for (const modelKey of fallbackOrder) {
        if (modelKey === preferredModel) continue; // Skip preferred (already tried)

        const model = AVAILABLE_MODELS[modelKey];
        if (model.rateLimit.rpm === null ||
            modelUsage[modelKey].requests < model.rateLimit.rpm) {
            return {
                model: modelKey,
                name: model.name,
                isFallback: true,
                originalModel: AVAILABLE_MODELS[preferredModel].name
            };
        }
    }

    // All models at limit
    throw new Error('All AI models are currently at capacity. Please try again in a minute.');
}

/**
 * Track model usage
 */
function trackModelUsage(modelKey) {
    if (modelUsage[modelKey]) {
        modelUsage[modelKey].requests++;
    }
}

// ==================== GET AVAILABLE MODELS ====================
router.get('/models', (req, res) => {
    const models = Object.entries(AVAILABLE_MODELS).map(([key, value]) => ({
        id: key,
        name: value.name,
        description: value.description,
        useBest: value.useBest,
        available: value.rateLimit.rpm === null ||
            modelUsage[key].requests < value.rateLimit.rpm,
        usage: modelUsage[key].requests,
        limit: value.rateLimit.rpm
    }));

    res.json({
        success: true,
        models
    });
});

// ==================== GENERATE CRICKET QUIZ ====================
router.post('/generate-quiz', async (req, res) => {
    console.log('🎯 Generate quiz endpoint hit!');
    console.log('📦 Request body:', req.body);

    try {
        if (!GEMINI_API_KEY) {
            return res.status(500).json({
                success: false,
                message: 'Gemini API key not configured on server'
            });
        }

        const { difficulty, category, numberOfQuestions, preferredModel } = req.body;
        console.log('📝 Quiz params:', { difficulty, category, numberOfQuestions, preferredModel });

        // Get best available model
        let modelInfo;
        try {
            modelInfo = getBestAvailableModel(preferredModel || 'gemini-2.5-flash');
        } catch (error) {
            return res.status(429).json({
                success: false,
                message: error.message,
                code: 'RATE_LIMIT_EXCEEDED'
            });
        }

        // Track usage
        trackModelUsage(modelInfo.model);

        const model = genAI.getGenerativeModel({ model: modelInfo.model });

        const prompt = `Generate ${numberOfQuestions} cricket quiz questions with the following specifications:
    
Difficulty: ${difficulty}
Category: ${category}
Format: Multiple choice with 4 options

IMPORTANT: Include global cricket coverage (Bangladesh, Pakistan, Afghanistan, Zimbabwe, South Africa, Sri Lanka, West Indies, New Zealand, etc.), not just India/Australia.

Requirements:
1. Each question must be factually accurate
2. Provide exactly 4 options
3. Clearly indicate the correct answer (0-3)
4. Include a brief explanation
5. Represent cricket globally

Return ONLY a valid JSON array (no markdown, no code blocks):
[
  {
    "question": "Question text?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 0,
    "explanation": "Explanation here",
    "difficulty": "${difficulty}",
    "category": "${category}"
  }
]`;

        console.log('🚀 Sending request to Gemini API...');
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        console.log('✅ Received response from Gemini API');
        console.log('📄 Raw response length:', text.length);

        // Clean up markdown
        text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        const quiz = JSON.parse(text);
        console.log('✅ Successfully parsed quiz JSON');
        console.log('📊 Generated questions:', quiz.length);

        const responseData = {
            success: true,
            quiz,
            modelUsed: {
                id: modelInfo.model,
                name: modelInfo.name
            }
        };

        // Add fallback notification if applicable
        if (modelInfo.isFallback) {
            responseData.notice = `Using ${modelInfo.name} (${modelInfo.originalModel} at capacity)`;
        }

        res.json(responseData);
    } catch (error) {
        console.error('❌ Quiz generation error:', error);

        // Check if it's a rate limit error
        if (error.message && error.message.includes('quota')) {
            return res.status(429).json({
                success: false,
                message: 'AI service temporarily unavailable. Please try again in a minute.',
                code: 'RATE_LIMIT_EXCEEDED'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to generate quiz',
            error: error.message
        });
    }
});

// ==================== GENERATE TRIVIA ====================
router.post('/generate-trivia', async (req, res) => {
    try {
        if (!GEMINI_API_KEY) {
            return res.status(500).json({
                success: false,
                message: 'Gemini API key not configured'
            });
        }

        const { preferredModel } = req.body;

        // Get best available model
        let modelInfo;
        try {
            modelInfo = getBestAvailableModel(preferredModel || 'gemini-2.5-flash');
        } catch (error) {
            return res.status(429).json({
                success: false,
                message: error.message,
                code: 'RATE_LIMIT_EXCEEDED'
            });
        }

        trackModelUsage(modelInfo.model);
        const model = genAI.getGenerativeModel({ model: modelInfo.model });

        const prompt = `Generate 1 interesting cricket trivia question with 4 options. Include global cricket.

Return ONLY valid JSON (no markdown):
{
  "question": "Question?",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": 0,
  "explanation": "Why correct",
  "funFact": "Interesting fact"
}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        const trivia = JSON.parse(text);

        const responseData = {
            success: true,
            trivia,
            modelUsed: { id: modelInfo.model, name: modelInfo.name }
        };

        if (modelInfo.isFallback) {
            responseData.notice = `Using ${modelInfo.name}`;
        }

        res.json(responseData);
    } catch (error) {
        console.error('Trivia generation error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to generate trivia',
            error: error.message
        });
    }
});

// ==================== EXPLAIN RULE ====================
router.post('/explain-rule', async (req, res) => {
    try {
        if (!GEMINI_API_KEY) {
            return res.status(500).json({
                success: false,
                message: 'Gemini API key not configured'
            });
        }

        const { ruleQuery, preferredModel } = req.body;

        if (!ruleQuery) {
            return res.status(400).json({
                success: false,
                message: 'Rule query is required'
            });
        }

        let modelInfo;
        try {
            modelInfo = getBestAvailableModel(preferredModel || 'gemini-2.5-flash');
        } catch (error) {
            return res.status(429).json({
                success: false,
                message: error.message,
                code: 'RATE_LIMIT_EXCEEDED'
            });
        }

        trackModelUsage(modelInfo.model);
        const model = genAI.getGenerativeModel({ model: modelInfo.model });

        const prompt = `You are a cricket expert. Explain "${ruleQuery}" in simple language.

Provide:
1. Clear definition (2-3 sentences)
2. Example scenario
3. Why it matters

Keep under 150 words.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const explanation = response.text();

        res.json({
            success: true,
            explanation,
            modelUsed: { id: modelInfo.model, name: modelInfo.name }
        });
    } catch (error) {
        console.error('Rule explanation error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to explain rule',
            error: error.message
        });
    }
});

// ==================== CHATBOT (WITH MODEL SELECTION) ====================
router.post('/chatbot', async (req, res) => {
    try {
        if (!GEMINI_API_KEY) {
            return res.status(500).json({
                success: false,
                message: 'Gemini API key not configured'
            });
        }

        const { message, conversationHistory, preferredModel } = req.body;

        // Get best available model
        let modelInfo;
        try {
            modelInfo = getBestAvailableModel(preferredModel || 'gemini-2.5-flash');
        } catch (error) {
            return res.status(429).json({
                success: false,
                message: error.message,
                code: 'RATE_LIMIT_EXCEEDED'
            });
        }

        // Track usage
        trackModelUsage(modelInfo.model);

        const model = genAI.getGenerativeModel({ model: modelInfo.model });

        let conversationContext = conversationHistory && conversationHistory.length > 0
            ? conversationHistory.map(msg => `${msg.role === 'user' ? 'User' : 'CricBot'}: ${msg.content}`).join('\n')
            : '';

        const prompt = `You are CricBot, an expert cricket assistant with global cricket knowledge.

Previous Conversation:
${conversationContext}

User: ${message}

Provide helpful, accurate response (2-3 paragraphs max).`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const botReply = response.text();

        const responseData = {
            success: true,
            message: botReply,
            modelUsed: {
                id: modelInfo.model,
                name: modelInfo.name
            }
        };

        // Add fallback notification if applicable
        if (modelInfo.isFallback) {
            responseData.notice = `Note: Using ${modelInfo.name} (${modelInfo.originalModel} is at capacity)`;
        }

        res.json(responseData);
    } catch (error) {
        console.error('Chatbot error:', error);

        // Check if it's a rate limit error
        if (error.message && error.message.includes('quota')) {
            return res.status(429).json({
                success: false,
                message: 'AI service temporarily unavailable. Please try again in a minute.',
                code: 'RATE_LIMIT_EXCEEDED'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to respond',
            error: error.message
        });
    }
});

// ==================== QUICK FACT ====================
router.post('/quick-fact', async (req, res) => {
    try {
        if (!GEMINI_API_KEY) {
            return res.json({
                success: false,
                fact: 'Cricket is played in over 100 countries!'
            });
        }

        const { preferredModel } = req.body || {};

        let modelInfo;
        try {
            modelInfo = getBestAvailableModel(preferredModel || 'gemini-2.0-flash-lite');
        } catch (error) {
            return res.json({
                success: false,
                fact: 'Cricket is played in over 100 countries!'
            });
        }

        trackModelUsage(modelInfo.model);
        const model = genAI.getGenerativeModel({ model: modelInfo.model });

        const prompt = `Share one interesting, lesser-known cricket fact in 2-3 sentences. Include global cricket.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const fact = response.text();

        res.json({
            success: true,
            fact
        });
    } catch (error) {
        console.error('Quick fact error:', error);
        res.json({
            success: false,
            fact: 'Cricket is played in over 100 countries worldwide!'
        });
    }
});

// ==================== SUGGESTED QUESTIONS ====================
router.post('/suggested-questions', async (req, res) => {
    try {
        if (!GEMINI_API_KEY) {
            return res.json({
                success: true,
                suggestions: [
                    "Tell me more about this",
                    "Who are the top players?",
                    "What are some statistics?"
                ]
            });
        }

        const { lastUserMessage, preferredModel } = req.body;

        let modelInfo;
        try {
            modelInfo = getBestAvailableModel(preferredModel || 'gemini-2.0-flash-lite');
        } catch (error) {
            return res.json({
                success: true,
                suggestions: [
                    "Tell me more about this",
                    "Who are the top players?",
                    "What are some statistics?"
                ]
            });
        }

        trackModelUsage(modelInfo.model);
        const model = genAI.getGenerativeModel({ model: modelInfo.model });

        const prompt = `Based on: "${lastUserMessage}"

Generate 3 short follow-up questions. Return ONLY JSON array:
["Question 1?", "Question 2?", "Question 3?"]`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        const questions = JSON.parse(text);

        res.json({
            success: true,
            suggestions: questions
        });
    } catch (error) {
        console.error('Suggestions error:', error);
        res.json({
            success: true,
            suggestions: [
                "Tell me more about this",
                "Who are the top players?",
                "What are some statistics?"
            ]
        });
    }
});

// ==================== CUSTOMER SERVICE (WITH WEBSITE CONTEXT) ====================
router.post('/customer-service', async (req, res) => {
    try {
        const { message, conversationHistory, preferredModel } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                error: 'Message is required'
            });
        }

        if (!GEMINI_API_KEY) {
            return res.status(500).json({
                success: false,
                message: 'Service temporarily unavailable'
            });
        }

        let modelInfo;
        try {
            modelInfo = getBestAvailableModel(preferredModel || 'gemini-2.5-flash');
        } catch (error) {
            return res.status(429).json({
                success: false,
                message: error.message,
                code: 'RATE_LIMIT_EXCEEDED'
            });
        }

        trackModelUsage(modelInfo.model);
        const model = genAI.getGenerativeModel({ model: modelInfo.model });

        let conversationContext = conversationHistory && conversationHistory.length > 0
            ? conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')
            : '';

        const prompt = `${WEBSITE_CONTEXT}

You are a friendly customer service assistant for our All-in-One Cricket Website.

Previous Conversation:
${conversationContext}

User Question: ${message}

Provide a helpful, professional response using the website information above. Be specific about our features and capabilities. Remember our website was founded in 2024.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const reply = response.text();

        res.json({
            success: true,
            response: reply,
            modelUsed: { id: modelInfo.model, name: modelInfo.name }
        });
    } catch (error) {
        console.error('Customer service error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to process request'
        });
    }
});

module.exports = router;