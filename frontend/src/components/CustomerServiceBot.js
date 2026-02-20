import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './CustomerServiceBot.css';

const CustomerServiceBot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: '👋 Hi! I\'m your Cricket Website Assistant. How can I help you today?',
            timestamp: new Date().toISOString()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const quickSuggestions = [
        '🛒 How do I buy products?',
        '🏏 Where are live scores?',
        '🤖 Tell me about AI features',
        '🎮 What games are available?',
        '📧 How do I contact support?'
    ];

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Handle send message
    const handleSendMessage = async (messageText = null) => {
        const textToSend = messageText || inputMessage.trim();

        if (!textToSend) return;

        // Hide suggestions after first message
        setShowSuggestions(false);

        // Add user message
        const userMessage = {
            role: 'user',
            content: textToSend,
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/gemini/customer-service', {
                message: textToSend,
                conversationHistory: messages
            });

            if (response.data.success) {
                const assistantMessage = {
                    role: 'assistant',
                    content: response.data.message,
                    timestamp: response.data.timestamp
                };
                setMessages(prev => [...prev, assistantMessage]);
            } else {
                throw new Error('Failed to get response');
            }
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage = {
                role: 'assistant',
                content: '❌ Sorry, I\'m having trouble connecting. Please try again or email us at support@cricketwebsite.com',
                timestamp: new Date().toISOString()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="customer-service-bot">
            {/* Header */}
            <div className="bot-header">
                <div className="bot-header-info">
                    <div className="bot-avatar-header">🤖</div>
                    <div>
                        <h3>Cricket Assistant</h3>
                        <span className="bot-status">
                            {isLoading ? '⚡ Typing...' : '🟢 Online'}
                        </span>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="bot-minimize-button"
                    title="Minimize chat"
                >
                    −
                </button>
            </div>

            {/* Messages */}
            <div className="bot-messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`bot-message ${msg.role}`}
                    >
                        <div className="bot-message-avatar">
                            {msg.role === 'user' ? '👤' : '🤖'}
                        </div>
                        <div className="bot-message-content">
                            <p>{msg.content}</p>
                            <span className="bot-message-time">
                                {new Date(msg.timestamp).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </span>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="bot-message assistant">
                        <div className="bot-message-avatar">🤖</div>
                        <div className="bot-message-content typing">
                            <div className="bot-typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {showSuggestions && (
                <div className="bot-suggestions">
                    <p className="suggestions-label">💡 Quick help:</p>
                    <div className="suggestions-grid">
                        {quickSuggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                onClick={() => handleSendMessage(suggestion)}
                                className="suggestion-btn"
                                disabled={isLoading}
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="bot-input-area">
                <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about store, features, navigation..."
                    disabled={isLoading}
                />
                <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputMessage.trim() || isLoading}
                    className="bot-send-button"
                >
                    {isLoading ? '⏳' : '📤'}
                </button>
            </div>

            {/* Footer */}
            <div className="bot-footer">
                <span>🤖 Powered by Google Gemini AI</span>
            </div>
        </div>
    );
};

export default CustomerServiceBot;