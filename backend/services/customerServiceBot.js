const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Website knowledge base
const WEBSITE_KNOWLEDGE = `
You are a helpful customer service assistant for "All-in-One Cricket Website".

WEBSITE FEATURES:
1. Cricket Store: Buy cricket equipment (bats, balls, clothing, etc.)
   - Location: /cricket-store
   - Categories: Bats, Balls, Clothing, Equipment
   - Features: Cart, Wishlist, Compare Products

2. Live Scores & Stats
   - Live match scores
   - Player statistics
   - Team rankings
   - Historical data

3. AI Features
   - AI Quiz Generator
   - Match Prediction
   - Pitch Behavior Prediction
   - Player Performance Prediction
   - AI Chatbot

4. Entertainment
   - Cricket games
   - Team builder
   - Community hub
   - Fan club

5. Learning Resources
   - Cricket rules and laws
   - Tutorials and lessons
   - Analysis articles
   - Stadium information

NAVIGATION HELP:
- Store: Click "Store" in navigation or visit /cricket-store
- Live Scores: Click "Live Scores" in navigation
- AI Tools: Click "AI & ML" dropdown menu
- Contact: Click "Contact" in footer or visit /contact

COMMON QUESTIONS:
Q: How do I buy products?
A: 1) Browse /cricket-store 2) Add to cart 3) Go to /cart 4) Checkout

Q: How do I use Team Builder?
A: Visit /team-builder and select players to create your dream team

Q: Where can I see live scores?
A: Visit /live-scores for real-time match updates

Q: How accurate are AI predictions?
A: Our AI uses historical data and machine learning. Accuracy varies based on available data.

Always be helpful, friendly, and guide users to the right pages!
`;

const customerServiceChat = async (userMessage, conversationHistory = []) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        // Build conversation context
        const context = [
            { role: 'user', parts: [{ text: WEBSITE_KNOWLEDGE }] },
            { role: 'model', parts: [{ text: 'I understand. I\'m ready to help users navigate the cricket website!' }] }
        ];

        // Add conversation history
        conversationHistory.forEach(msg => {
            context.push({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            });
        });

        // Add current message
        context.push({
            role: 'user',
            parts: [{ text: userMessage }]
        });

        const chat = model.startChat({ history: context.slice(0, -1) });
        const result = await chat.sendMessage(userMessage);
        const response = result.response.text();

        return {
            success: true,
            message: response,
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error('Customer service bot error:', error);
        return {
            success: false,
            message: 'Sorry, I\'m having trouble connecting. Please try again or contact support.',
            timestamp: new Date().toISOString()
        };
    }
};

module.exports = { customerServiceChat };