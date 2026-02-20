import React, { useState, useRef, useEffect } from 'react';
import { cricketChatbot, getQuickFact, getSuggestedQuestions } from '../services/geminiService';
import './AIChatbot.css';

const AIChatbot = () => {
    const [messages, setMessages] = useState([
        {
            role: 'bot',
            content: "👋 Assalamu Alaikum! I'm RoboAIM01 😊, your AI cricket assistant powered by Google Gemini! Ask me anything about cricket - rules, players, statistics, history, or current teams!",
            timestamp: new Date().toISOString()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [suggestions, setSuggestions] = useState([
        "Who is the highest run scorer in ODI cricket?",
        "Explain the LBW rule",
        "Tell me about Hashim Amla's career",
        "What is the history of the Cricket World Cup?"
    ]);
    const [quickFact, setQuickFact] = useState('');
    const [showFact, setShowFact] = useState(false);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Handle sending message
    const handleSendMessage = async (messageText = inputMessage) => {
        if (!messageText.trim()) return;

        const userMessage = messageText.trim();

        // Add user message to chat
        const newUserMessage = {
            role: 'user',
            content: userMessage,
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputMessage('');
        setIsTyping(true);

        // Get conversation history (last 10 messages for context)
        const conversationHistory = messages.slice(-10).map(msg => ({
            role: msg.role === 'bot' ? 'assistant' : 'user',
            content: msg.content
        }));

        // Get AI response
        const response = await cricketChatbot(userMessage, conversationHistory);

        setIsTyping(false);

        // Add bot response to chat
        const botMessage = {
            role: 'bot',
            content: response.message,
            timestamp: response.timestamp || new Date().toISOString()
        };

        setMessages(prev => [...prev, botMessage]);

        // Get suggested follow-up questions
        const suggestionsResponse = await getSuggestedQuestions(userMessage);
        if (suggestionsResponse.success) {
            setSuggestions(suggestionsResponse.suggestions);
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = (suggestion) => {
        setInputMessage(suggestion);
        inputRef.current?.focus();
    };

    // Handle quick fact
    const handleGetQuickFact = async () => {
        setShowFact(true);
        const factResponse = await getQuickFact();
        if (factResponse.success) {
            setQuickFact(factResponse.fact);
        }
    };

    // Clear chat
    const handleClearChat = () => {
        if (window.confirm('Are you sure you want to clear the chat history?')) {
            setMessages([
                {
                    role: 'bot',
                    content: "Chat cleared! Ask me anything about cricket! 🏏",
                    timestamp: new Date().toISOString()
                }
            ]);
            setSuggestions([
                "Who is the highest run scorer in ODI cricket?",
                "Explain the LBW rule",
                "Tell me about Hashim Amla's career",
                "What is the history of the Cricket World Cup?"
            ]);
        }
    };

    // Handle Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Format timestamp
    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="ai-chatbot-container">
            {/* Header */}
            <div className="chatbot-header">
                <div className="header-content">
                    <div className="bot-avatar">🤖</div>
                    <div className="header-info">
                        <h1>CricBot AI Assistant</h1>
                        <p className="bot-status">
                            <span className="status-dot"></span>
                            Powered by Google Gemini
                        </p>
                    </div>
                </div>
                <div className="header-actions">
                    <button onClick={handleGetQuickFact} className="fact-button" title="Get Quick Fact">
                        💡
                    </button>
                    <button onClick={handleClearChat} className="clear-button" title="Clear Chat">
                        🗑️
                    </button>
                </div>
            </div>

            {/* Quick Fact Modal */}
            {showFact && (
                <div className="quick-fact-modal">
                    <div className="fact-content">
                        <button
                            className="close-fact"
                            onClick={() => setShowFact(false)}
                        >
                            ✕
                        </button>
                        <h3>💡 Cricket Quick Fact</h3>
                        <p>{quickFact || 'Loading amazing cricket fact...'}</p>
                    </div>
                </div>
            )}

            {/* Chat Messages Area */}
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.role === 'user' ? 'user-message' : 'bot-message'}`}
                    >
                        <div className="message-avatar">
                            {message.role === 'user' ? '👤' : '🤖'}
                        </div>
                        <div className="message-content">
                            <div className="message-bubble">
                                <p>{message.content}</p>
                            </div>
                            <span className="message-time">{formatTime(message.timestamp)}</span>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="message bot-message">
                        <div className="message-avatar">🤖</div>
                        <div className="message-content">
                            <div className="message-bubble typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
                <div className="suggestions-container">
                    <p className="suggestions-title">💡 Suggested questions:</p>
                    <div className="suggestions-grid">
                        {suggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                className="suggestion-chip"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="chat-input-container">
                <div className="input-wrapper">
                    <textarea
                        ref={inputRef}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me anything about cricket..."
                        className="chat-input"
                        rows="1"
                        disabled={isTyping}
                    />
                    <button
                        onClick={() => handleSendMessage()}
                        className="send-button"
                        disabled={!inputMessage.trim() || isTyping}
                    >
                        <span className="send-icon">➤</span>
                    </button>
                </div>
                <p className="input-hint">
                    Press Enter to send • Shift + Enter for new line
                </p>
            </div>

            {/* Features Info */}
            <div className="chatbot-features-AI">
                <div className="feature-item-AI">
                    <span className="feature-icon-AI">📊</span>
                    <span>Statistics & Records</span>
                </div>
                <div className="feature-item-AI">
                    <span className="feature-icon-AI">👥</span>
                    <span>Player Information</span>
                </div>
                <div className="feature-item-AI">
                    <span className="feature-icon-AI">📜</span>
                    <span>Rules & History</span>
                </div>
                <div className="feature-item-AI">
                    <span className="feature-icon-AI">🏆</span>
                    <span>Teams & Tournaments</span>
                </div>
            </div>
        </div>
    );
};

export default AIChatbot;