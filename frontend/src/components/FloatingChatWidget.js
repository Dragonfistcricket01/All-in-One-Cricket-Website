import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './FloatingChatWidget.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function FloatingChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [activeTab, setActiveTab] = useState('cricbot');
    const [messages, setMessages] = useState({
        cricbot: [],
        support: [],
        knowledgebot: []
    });
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [selectedModel, setSelectedModel] = useState('gemini-2.5-flash');
    const [availableModels, setAvailableModels] = useState([]);
    const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
    const messagesEndRef = useRef(null);
    const modelDropdownRef = useRef(null);

    // ==================== CLOSE DROPDOWN ON OUTSIDE CLICK ====================
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modelDropdownRef.current && !modelDropdownRef.current.contains(event.target)) {
                setIsModelDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // ==================== LOAD MODELS ====================
    useEffect(() => {
        fetchAvailableModels();
        const interval = setInterval(fetchAvailableModels, 30000);
        return () => clearInterval(interval);
    }, []);

    const fetchAvailableModels = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/gemini/models`);
            setAvailableModels(response.data.models);
        } catch (error) {
            console.error('Failed to fetch models:', error);
        }
    };

    // Load chat history from localStorage
    useEffect(() => {
        const savedMessages = localStorage.getItem('chatHistory');
        if (savedMessages) {
            try {
                setMessages(JSON.parse(savedMessages));
            } catch (error) {
                console.error('Error loading chat history:', error);
            }
        }
    }, []);

    // Save chat history to localStorage
    useEffect(() => {
        localStorage.setItem('chatHistory', JSON.stringify(messages));
    }, [messages]);

    // Auto-scroll to bottom
    useEffect(() => {
        scrollToBottom();
    }, [messages, activeTab]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleWidget = () => {
        setIsOpen(!isOpen);
        setIsMinimized(false);
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const clearChat = () => {
        if (window.confirm('Are you sure you want to delete this conversation?')) {
            setMessages(prev => ({
                ...prev,
                [activeTab]: []
            }));
            setShowSuggestions(true);
        }
    };

    const handleSendMessage = async (messageText = input) => {
        if (!messageText.trim() || loading) return;

        const userMessage = {
            role: 'user',
            content: messageText,
            timestamp: new Date().toISOString()
        };

        setMessages(prev => ({
            ...prev,
            [activeTab]: [...prev[activeTab], userMessage]
        }));

        setInput('');
        setLoading(true);
        setShowSuggestions(false);

        try {
            let response;

            if (activeTab === 'cricbot') {
                response = await getCricBotResponse(messageText);
            } else if (activeTab === 'support') {
                response = await getSupportResponse(messageText);
            } else {
                response = await getKnowledgeBotResponse(messageText);
            }

            const botMessage = {
                role: 'assistant',
                content: response,
                timestamp: new Date().toISOString()
            };

            setMessages(prev => ({
                ...prev,
                [activeTab]: [...prev[activeTab], botMessage]
            }));
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = {
                role: 'assistant',
                content: '❌ Sorry, I encountered an error. Please try again!',
                timestamp: new Date().toISOString()
            };
            setMessages(prev => ({
                ...prev,
                [activeTab]: [...prev[activeTab], errorMessage]
            }));
        }

        setLoading(false);
    };

    const getCricBotResponse = async (question) => {
        try {
            const response = await axios.post(`${API_URL}/api/gemini/chatbot`, {
                message: question,
                conversationHistory: messages.cricbot.slice(-10),
                preferredModel: selectedModel
            });

            if (response.data.notice) {
                console.log('ℹ️', response.data.notice);
            }

            return response.data.message;
        } catch (error) {
            if (error.response?.status === 429) {
                throw new Error('All AI models are busy. Please try again in a moment.');
            }
            throw error;
        }
    };

    const getSupportResponse = async (question) => {
        const lowerQuestion = question.toLowerCase();

        if (lowerQuestion.includes('buy') || lowerQuestion.includes('product') || lowerQuestion.includes('store')) {
            return '🛒 **How to buy products:**\n\n1. Browse our Cricket Store\n2. Add items to your cart\n3. Click "View Cart" button\n4. Complete the checkout process\n\nNeed help finding a specific product?';
        }

        if (lowerQuestion.includes('live score') || lowerQuestion.includes('score')) {
            return '🏏 **Live Scores:**\n\nYou can find live cricket scores at the top of our homepage in the **Live Score Ticker**. It updates automatically every 60 seconds with the latest match data!';
        }

        if (lowerQuestion.includes('feature') || lowerQuestion.includes('ai')) {
            return '🤖 **Our AI Features:**\n\n• Match Predictor\n• Player Performance Predictor\n• Pitch Behavior Predictor\n• AI Quiz Generator\n• AI Chatbot\n• ML Match Predictor\n\nExplore them in the AI Features section!';
        }

        if (lowerQuestion.includes('game')) {
            return '🎮 **Available Games:**\n\n• Cricket Quiz\n• Spin the Wheel\n• Memory Card Game\n\nFind them in the Games section of our website!';
        }

        if (lowerQuestion.includes('contact') || lowerQuestion.includes('support') || lowerQuestion.includes('help')) {
            return '📧 **Contact Support:**\n\nEmail: support@cricketwebsite.com\n\nOr use the contact form in the footer of our website!';
        }

        try {
            const response = await axios.post(`${API_URL}/api/gemini/customer-service`, {
                message: question,
                conversationHistory: messages.support.slice(-10),
                preferredModel: selectedModel
            });

            return response.data.response;
        } catch (error) {
            return '👋 **Hi! I can help you with:**\n\n• How to buy products\n• Finding live scores\n• AI features overview\n• Available games\n• Contact support\n\nWhat would you like to know?';
        }
    };

    const getKnowledgeBotResponse = async (question) => {
        const lowerQuestion = question.toLowerCase();

        const knowledgeBase = {
            'drs': 'DRS (Decision Review System) allows teams to challenge on-field umpire decisions. Each team gets **2 reviews per innings in Tests**, and **1 review in ODIs/T20s**. Technology used includes Ultra Edge, Ball Tracking, and Hot Spot.',
            'lbw': 'LBW (Leg Before Wicket) - A batsman is out if the ball hits their body (usually legs) and would have hit the stumps. **Key conditions:** Ball must not pitch outside leg stump, impact must be in line (unless no shot offered), and ball must be hitting the stumps.',
            'powerplay': '**In ODIs:** First 10 overs with only 2 fielders allowed outside the 30-yard circle.\n\n**In T20s:** First 6 overs with the same fielding restrictions.\n\nHelps batsmen score quickly in the early overs.',
            'free hit': 'A **free hit** is awarded after a **no-ball**. The batsman cannot be dismissed except by run-out. Common in limited-overs cricket. The batsman can swing freely without fear of getting out!',
            'mankad': '**Mankading** is when a bowler runs out a non-striker who leaves the crease before the ball is bowled. Named after Indian cricketer **Vinoo Mankad**. It\'s controversial but legal under the laws of cricket.',
            'shakib': '**Shakib Al Hasan** is a Bangladeshi all-rounder and one of the best all-rounders in modern cricket. He\'s excellent with both bat and ball, and has been Bangladesh\'s captain in all formats.',
            'babar': '**Babar Azam** is Pakistan\'s captain and one of the top batsmen in world cricket. Known for his elegant strokeplay, consistency across all formats, and comparisons to Virat Kohli. He\'s a modern batting maestro!',
            'ipl': 'The **Indian Premier League (IPL)** is the world\'s most popular T20 cricket league. Started in 2008, it features 10 teams with players from around the world. Known for its entertainment, big hits, and massive fan following!',
            'world cup': 'The **ICC Cricket World Cup** is held every 4 years in ODI format. India won in 1983 and 2011. Australia has won the most titles (5 times). The next World Cup is in 2027!',
            't20': '**T20 (Twenty20)** is the shortest format of cricket with 20 overs per side. Each game lasts about 3 hours. It\'s known for big hitting, exciting finishes, and entertainment. The T20 World Cup is held every 2 years.',
            'odi': '**ODI (One Day International)** is a 50-over format per side. Each game lasts about 8 hours. It\'s the format used for the Cricket World Cup. Perfect balance between Test cricket and T20!'
        };

        for (const [key, value] of Object.entries(knowledgeBase)) {
            if (lowerQuestion.includes(key)) {
                return value;
            }
        }

        try {
            const response = await axios.post(`${API_URL}/api/gemini/chatbot`, {
                message: question,
                conversationHistory: messages.knowledgebot.slice(-10),
                preferredModel: selectedModel
            });

            return response.data.message;
        } catch (error) {
            return '🤔 Hmm, I don\'t have information on that specific topic. Try asking me about:\n\n• LBW rules\n• DRS system\n• Famous players (Shakib, Babar, Kohli)\n• Tournaments (World Cup, IPL, T20)\n• Cricket formats (Test, ODI, T20)';
        }
    };

    const suggestions = {
        cricbot: [
            'What is DRS?',
            'How does ball tracking work?',
            'Can you be LBW off a no ball?',
            'What is a free hit?'
        ],
        support: [
            'How do I buy products?',
            'Where are live scores?',
            'Tell me about AI features',
            'What games are available?'
        ],
        knowledgebot: [
            'Who is Shakib?',
            'Explain powerplay rules',
            'What is mankading?',
            'Tell me about IPL'
        ]
    };

    return (
        <>
            <button
                className={`floating-chat-button ${isOpen ? 'active' : ''}`}
                onClick={toggleWidget}
                aria-label="Open Chat Assistant"
            >
                <i className={`ri-${isOpen ? 'close' : 'robot'}-line`}></i>
            </button>

            <div className={`floating-chat-widget ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
                <div className="chat-widget-header">
                    <div className="header-left">
                        <i className="ri-robot-line"></i>
                        <div>
                            <h3>Cricket AI Assistant</h3>
                            <span className="online-status">
                                <span className="status-dot"></span> Online
                            </span>
                        </div>
                    </div>
                    <div className="header-actions">
                        <button onClick={toggleMinimize} className="minimize-btn" title="Minimize">
                            <i className={`ri-${isMinimized ? 'arrow-up' : 'subtract'}-line`}></i>
                        </button>
                        <button onClick={toggleWidget} className="close-btn" title="Close">
                            <i className="ri-close-line"></i>
                        </button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        <div className="chat-widget-tabs">
                            <button
                                className={`tab-btn ${activeTab === 'cricbot' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab('cricbot');
                                    setShowSuggestions(messages.cricbot.length === 0);
                                }}
                            >
                                <i className="ri-robot-2-line"></i> CricBot AI
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'support' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab('support');
                                    setShowSuggestions(messages.support.length === 0);
                                }}
                            >
                                <i className="ri-customer-service-line"></i> Support
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'knowledgebot' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab('knowledgebot');
                                    setShowSuggestions(messages.knowledgebot.length === 0);
                                }}
                            >
                                <i className="ri-book-line"></i> Cricket Bot
                            </button>
                        </div>

                        <div className="chat-widget-messages">
                            {messages[activeTab].length === 0 && (
                                <div className="welcome-message">
                                    <i className="ri-robot-line"></i>
                                    <h4>
                                        {activeTab === 'cricbot' && "👋 Hi! I'm CricBot, your AI cricket assistant."}
                                        {activeTab === 'support' && "👋 Hi! I'm your Cricket Website Assistant."}
                                        {activeTab === 'knowledgebot' && "📚 Hello! Ask me about cricket!"}
                                    </h4>
                                    <p>
                                        {activeTab === 'cricbot' && "Ask me anything about cricket - rules, players, statistics, tournaments!"}
                                        {activeTab === 'support' && "I can help with store navigation, features, and more!"}
                                        {activeTab === 'knowledgebot' && "Instant answers to cricket rules, players, and records!"}
                                    </p>
                                </div>
                            )}

                            {messages[activeTab].map((message, index) => (
                                <div key={index} className={`message ${message.role}`}>
                                    <div className="message-avatar">
                                        {message.role === 'user' ? (
                                            <i className="ri-user-line"></i>
                                        ) : (
                                            <i className="ri-robot-line"></i>
                                        )}
                                    </div>
                                    <div className="message-content">
                                        <p>{message.content}</p>
                                        <span className="message-time">
                                            {new Date(message.timestamp).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="message assistant">
                                    <div className="message-avatar">
                                        <i className="ri-robot-line"></i>
                                    </div>
                                    <div className="message-content">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {showSuggestions && messages[activeTab].length === 0 && (
                            <div className="quick-suggestions">
                                <p>💡 Try asking:</p>
                                <div className="suggestions-grid">
                                    {suggestions[activeTab].map((suggestion, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSendMessage(suggestion)}
                                            className="suggestion-btn"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* INPUT WITH ICON-BASED MODEL SELECTOR */}
                        <div className="chat-widget-input">
                            <button onClick={clearChat} className="delete-chat-btn" title="Delete conversation">
                                <i className="ri-delete-bin-line"></i>
                            </button>

                            {/* AI MODEL ICON BUTTON */}
                            <div className="model-icon-wrapper" ref={modelDropdownRef}>
                                <button
                                    className="model-icon-btn"
                                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                                    disabled={loading}
                                    title="Select AI Model"
                                >
                                    <i className="ri-cpu-line"></i>
                                </button>

                                {/* DROPDOWN MENU */}
                                <div className={`model-icon-dropdown ${isModelDropdownOpen ? 'open' : ''}`}>
                                    <div className="model-dropdown-header">
                                        <i className="ri-cpu-line"></i>
                                        <span>Select AI Model</span>
                                    </div>
                                    {availableModels.map(model => (
                                        <div
                                            key={model.id}
                                            className={`model-option ${model.id === selectedModel ? 'selected' : ''} ${!model.available ? 'disabled' : ''}`}
                                            onClick={() => {
                                                if (model.available) {
                                                    setSelectedModel(model.id);
                                                    setIsModelDropdownOpen(false);
                                                }
                                            }}
                                        >
                                            <span className="model-option-name">
                                                {model.name}
                                                {model.id === selectedModel && <i className="ri-check-line"></i>}
                                            </span>
                                            <span className="model-option-desc">
                                                {!model.available ? '(At Capacity)' : model.description}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <input
                                type="text"
                                placeholder={`Ask about ${activeTab === 'cricbot' ? 'cricket' : activeTab === 'support' ? 'our features' : 'rules, players'}...`}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                disabled={loading}
                            />
                            <button
                                onClick={() => handleSendMessage()}
                                disabled={loading || !input.trim()}
                                className="send-btn"
                            >
                                <i className="ri-send-plane-fill"></i>
                            </button>
                        </div>

                        <div className="chat-widget-footer">
                            <span>🤖 Powered by Google Gemini AI</span>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default FloatingChatWidget;