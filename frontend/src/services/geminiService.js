// import axios from 'axios';

////Initialize Gemini Server
// // Get the backend URL from your .env (http://localhost:5000)
// const API_URL = process.env.REACT_APP_API_URL;

// export const getGeminiChatResponse = async (userMessage, history = []) => {
//     try {
//         // We send the request to YOUR server, not Google
//         const response = await axios.post(`${API_URL}/api/gemini/chatbot`, {
//             message: userMessage,
//             conversationHistory: history
//         });

//         // Your backend returns { success: true, response: "...", modelUsed: ... }
//         if (response.data.success) {
//             return response.data.response;
//         } else {
//             throw new Error(response.data.error || "Unknown error");
//         }
//     } catch (error) {
//         console.error("Gemini Proxy Error:", error);
//         return "Sorry, I'm having trouble connecting to the AI server.";
//     }
// };
///**
// * Generate cricket quiz questions using Gemini AI
// * @param {string} difficulty - easy, medium, or hard
// * @param {string} category - general, players, history, rules, statistics
// * @param {number} numberOfQuestions - number of questions to generate
// */
//export const generateCricketQuiz = async (difficulty = "medium", category = "general", numberOfQuestions = 5) => {
//    try {
//        // Check if API key exists
//        //if (!process.env.REACT_APP_GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY === 'your_actual_gemini_api_key_here') {
//        if (!process.env.REACT_APP_GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY === 'paste your real API') {
//            return {
//                success: false,
//                quiz: [],
//                message: "⚠️ Gemini API key not configured. Please add your API key to .env file.",
//                error: "MISSING_API_KEY"
//            };
//        }
//
//        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//
//        const prompt = `Generate ${numberOfQuestions} cricket quiz questions with the following specifications:
//    
//Difficulty: ${difficulty}
//Category: ${category}
//Format: Multiple choice with 4 options
//
//IMPORTANT: Include global cricket coverage (Bangladesh, Pakistan, Afghanistan, Zimbabwe, South Africa, Sri Lanka, West Indies, New Zealand, etc.), not just India/Australia.
//Include diverse cricket leagues: IPL, BPL (Bangladesh), PSL (Pakistan), BBL (Australia), The Hundred (England), CPL (Caribbean).
//Cover all formats: Test, ODI, T20.
//
//Requirements:
//1. Each question must be factually accurate and about cricket
//2. Provide exactly 4 options (A, B, C, D)
//3. Clearly indicate the correct answer (0-3)
//4. Include a brief explanation for the correct answer
//5. Make questions interesting and educational
//6. Represent cricket globally, not just one region
//
//Return the quiz in this EXACT JSON format (no markdown, no code blocks, just pure JSON):
//[
//  {
//    "question": "Question text here?",
//    "options": ["Option A", "Option B", "Option C", "Option D"],
//    "correctAnswer": 0,
//    "explanation": "Brief explanation of why this is correct",
//    "difficulty": "${difficulty}",
//    "category": "${category}"
//  }
//]
//
//Generate ${numberOfQuestions} questions now.`;
//
//        const result = await model.generateContent(prompt);
//        const response = await result.response;
//        const text = response.text();
//
//        console.log("Gemini API Response:", text); // Debug log
//
//        // Clean up response - remove markdown code blocks if present
//        let cleanedText = text.trim();
//        if (cleanedText.startsWith("```json")) {
//            cleanedText = cleanedText.replace(/```json\n?/g, "").replace(/```\n?/g, "");
//        } else if (cleanedText.startsWith("```")) {
//            cleanedText = cleanedText.replace(/```\n?/g, "");
//        }
//
//        // Parse JSON
//        const quizData = JSON.parse(cleanedText);
//
//        // Validate quiz data
//        if (!Array.isArray(quizData) || quizData.length === 0) {
//            throw new Error("Invalid quiz format received");
//        }
//
//        return {
//            success: true,
//            quiz: quizData,
//            message: `Generated ${quizData.length} quiz questions successfully!`
//        };
//
//    } catch (error) {
//        console.error("Error generating quiz:", error);
//
//        // Provide specific error messages
//        let errorMessage = "Failed to generate quiz. ";
//
//        if (error.message.includes("API key")) {
//            errorMessage += "Please check your Gemini API key.";
//        } else if (error.message.includes("quota")) {
//            errorMessage += "API quota exceeded. Please try again later.";
//        } else if (error.message.includes("JSON")) {
//            errorMessage += "Error parsing AI response. Please try again.";
//        } else {
//            errorMessage += "Please try again or check your internet connection.";
//        }
//
//        return {
//            success: false,
//            quiz: [],
//            message: errorMessage,
//            error: error.message
//        };
//    }
//};
//
///**
// * Generate a single cricket trivia question
// */
//export const generateTriviaQuestion = async () => {
//    try {
//        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//
//        const prompt = `Generate 1 interesting cricket trivia question with 4 options. Include global cricket (not just India/Australia).
//
//Return in this EXACT JSON format (no markdown):
//{
//  "question": "Question text?",
//  "options": ["A", "B", "C", "D"],
//  "correctAnswer": 0,
//  "explanation": "Why this is correct",
//  "funFact": "An interesting related fact"
//}`;
//
//        const result = await model.generateContent(prompt);
//        const response = await result.response;
//        let text = response.text().trim();
//
//        // Clean markdown
//        if (text.startsWith("```json")) {
//            text = text.replace(/```json\n?/g, "").replace(/```\n?/g, "");
//        } else if (text.startsWith("```")) {
//            text = text.replace(/```\n?/g, "");
//        }
//
//        const triviaData = JSON.parse(text);
//
//        return {
//            success: true,
//            trivia: triviaData,
//            message: "Generated trivia successfully!"
//        };
//
//    } catch (error) {
//        console.error("Error generating trivia:", error);
//        return {
//            success: false,
//            trivia: null,
//            message: "Failed to generate trivia.",
//            error: error.message
//        };
//    }
//};
//
///**
// * Explain cricket rules using AI
// */
//export const explainCricketRule = async (ruleQuery) => {
//    try {
//        if (!ruleQuery || ruleQuery.trim() === '') {
//            return {
//                success: false,
//                explanation: 'Please enter a cricket rule or concept to explain!',
//                query: ruleQuery
//            };
//        }
//
//        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//
//        const prompt = `You are a cricket expert. Explain the following cricket rule or concept in simple, easy-to-understand language:
//
//"${ruleQuery}"
//
//Provide:
//1. A clear definition (2-3 sentences)
//2. An example scenario
//3. Why it matters in the game
//
//Keep the explanation under 150 words and suitable for beginners.`;
//
//        const result = await model.generateContent(prompt);
//        const response = await result.response;
//        const explanation = response.text();
//
//        return {
//            success: true,
//            explanation: explanation,
//            query: ruleQuery
//        };
//
//    } catch (error) {
//        console.error("Error explaining rule:", error);
//        return {
//            success: false,
//            explanation: "Failed to get explanation. Please try again.",
//            error: error.message
//        };
//    }
//};
//
///**
// * Cricket AI Chatbot - Conversational assistant
// * @param {string} userMessage - User's question
// * @param {Array} conversationHistory - Previous messages for context
// */
//export const cricketChatbot = async (userMessage, conversationHistory = []) => {
//    try {
//        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//
//        // Build conversation context
//        let fullPrompt = `You are CricBot, an expert cricket assistant with comprehensive knowledge of global cricket including Bangladesh, Pakistan, Afghanistan, Zimbabwe, South Africa, Sri Lanka, West Indies, and all cricket-playing nations.
//
//You provide helpful, accurate, and engaging responses about:
//- Cricket history, rules, players, statistics, teams worldwide
//- All formats: Test, ODI, T20
//- All major leagues: IPL, BPL, PSL, BBL, The Hundred, CPL
//- International cricket from all nations
//
//Key Guidelines:
//- Keep responses concise (2-3 paragraphs max unless asked for detailed explanation)
//- Use cricket terminology appropriately
//- Include relevant statistics when discussing players or teams
//- Be conversational and friendly
//- Cover cricket globally, not just one region
//- If you don't know something, admit it honestly
//- For current/live information, clarify that your knowledge has a cutoff date
//
//Previous Conversation:
//${conversationHistory.map(msg => `${msg.role === 'user' ? 'User' : 'CricBot'}: ${msg.content}`).join('\n')}
//
//User's Current Question: ${userMessage}
//
//Your Response:`;
//
//        const result = await model.generateContent(fullPrompt);
//        const response = await result.response;
//        const botReply = response.text();
//
//        return {
//            success: true,
//            message: botReply,
//            timestamp: new Date().toISOString()
//        };
//
//    } catch (error) {
//        console.error("Chatbot error:", error);
//        return {
//            success: false,
//            message: "I'm having trouble responding right now. Please try again!",
//            error: error.message
//        };
//    }
//};
//
///**
// * Get quick cricket facts
// */
//export const getQuickFact = async () => {
//    try {
//        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//
//        const prompt = `Share one interesting, lesser-known cricket fact in 2-3 sentences. Include global cricket (Bangladesh, Pakistan, Afghanistan, Zimbabwe, etc.), not just major nations. Make it engaging and surprising!`;
//
//        const result = await model.generateContent(prompt);
//        const response = await result.response;
//        const fact = response.text();
//
//        return {
//            success: true,
//            fact: fact
//        };
//
//    } catch (error) {
//        console.error("Error getting fact:", error);
//        return {
//            success: false,
//            fact: "Cricket is played in over 100 countries worldwide!"
//        };
//    }
//};
//
///**
// * Suggest follow-up questions based on conversation
// */
//export const getSuggestedQuestions = async (lastUserMessage) => {
//    try {
//        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//
//        const prompt = `Based on this cricket question: "${lastUserMessage}"
//
//Generate 3 short, relevant follow-up questions a user might want to ask. Return as a JSON array of strings.
//
//Example format: ["Question 1?", "Question 2?", "Question 3?"]
//
//Return ONLY the JSON array, no other text.`;
//
//        const result = await model.generateContent(prompt);
//        const response = await result.response;
//        let text = response.text().trim();
//
//        // Clean markdown
//        if (text.startsWith("```json")) {
//            text = text.replace(/```json\n?/g, "").replace(/```\n?/g, "");
//        } else if (text.startsWith("```")) {
//            text = text.replace(/```\n?/g, "");
//        }
//
//        const questions = JSON.parse(text);
//
//        return {
//            success: true,
//            suggestions: questions
//        };
//
//    } catch (error) {
//        console.error("Error getting suggestions:", error);
//        return {
//            success: false,
//            suggestions: [
//                "Tell me more about this",
//                "Who are the top players?",
//                "What are some interesting statistics?"
//            ]
//        };
//    }
//};


import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
console.log('🔍 API_URL being used:', API_URL);

/**
 * Generate cricket quiz questions using Gemini AI
 */
export const generateCricketQuiz = async (difficulty = "medium", category = "general", numberOfQuestions = 5) => {
    try {
        const response = await axios.post(`${API_URL}/api/gemini/generate-quiz`, {
            difficulty,
            category,
            numberOfQuestions
        });

        return {
            success: true,
            quiz: response.data.quiz,
            message: `Generated ${response.data.quiz.length} quiz questions successfully!`
        };

    } catch (error) {
        console.error("Error generating quiz:", error);
        return {
            success: false,
            quiz: [],
            message: error.response?.data?.message || "Failed to generate quiz. Please try again.",
            error: error.message
        };
    }
};

/**
 * Generate a single cricket trivia question
 */
export const generateTriviaQuestion = async () => {
    try {
        const response = await axios.post(`${API_URL}/api/gemini/generate-trivia`);

        return {
            success: true,
            trivia: response.data.trivia,
            message: "Generated trivia successfully!"
        };

    } catch (error) {
        console.error("Error generating trivia:", error);
        return {
            success: false,
            trivia: null,
            message: "Failed to generate trivia.",
            error: error.message
        };
    }
};

/**
 * Explain cricket rules using AI
 */
export const explainCricketRule = async (ruleQuery) => {
    try {
        if (!ruleQuery || ruleQuery.trim() === '') {
            return {
                success: false,
                explanation: 'Please enter a cricket rule or concept to explain!',
                query: ruleQuery
            };
        }

        const response = await axios.post(`${API_URL}/api/gemini/explain-rule`, {
            ruleQuery
        });

        return {
            success: true,
            explanation: response.data.explanation,
            query: ruleQuery
        };

    } catch (error) {
        console.error("Error explaining rule:", error);
        return {
            success: false,
            explanation: "Failed to get explanation. Please try again.",
            error: error.message
        };
    }
};

/**
 * Cricket AI Chatbot - Conversational assistant
 */
export const cricketChatbot = async (userMessage, conversationHistory = []) => {
    try {
        const response = await axios.post(`${API_URL}/api/gemini/chatbot`, {
            message: userMessage,
            conversationHistory
        });

        return {
            success: true,
            message: response.data.message,
            timestamp: new Date().toISOString()
        };

    } catch (error) {
        console.error("Chatbot error:", error);
        return {
            success: false,
            message: "I'm having trouble responding right now. Please try again!",
            error: error.message
        };
    }
};

/**
 * Get quick cricket facts
 */
export const getQuickFact = async () => {
    try {
        const response = await axios.post(`${API_URL}/api/gemini/quick-fact`);

        return {
            success: true,
            fact: response.data.fact
        };

    } catch (error) {
        console.error("Error getting fact:", error);
        return {
            success: false,
            fact: "Cricket is played in over 100 countries worldwide!"
        };
    }
};

/**
 * Suggest follow-up questions based on conversation
 */
export const getSuggestedQuestions = async (lastUserMessage) => {
    try {
        const response = await axios.post(`${API_URL}/api/gemini/suggested-questions`, {
            lastUserMessage
        });

        return {
            success: true,
            suggestions: response.data.suggestions
        };

    } catch (error) {
        console.error("Error getting suggestions:", error);
        return {
            success: false,
            suggestions: [
                "Tell me more about this",
                "Who are the top players?",
                "What are some interesting statistics?"
            ]
        };
    }
};