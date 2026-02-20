import React, { useState, useEffect, useRef } from 'react';
import { cricketChatbot, getSuggestedQuestions } from '../services/geminiService';
import './GeminiChatbot.css';

const GeminiChatbot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hello! 👋 I\'m CricBot, your AI cricket assistant. Ask me anything about cricket - rules, players, statistics, tournaments, or history!',
            timestamp: new Date().toISOString()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestedQuestions, setSuggestedQuestions] = useState([]);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    // Handle send message
    const handleSendMessage = async (messageText = null) => {
        const textToSend = messageText || inputMessage.trim();

        if (!textToSend) return;

        // Add user message
        const userMessage = {
            role: 'user',
            content: textToSend,
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);
        setSuggestedQuestions([]);

        try {
            // Get AI response
            const response = await cricketChatbot(textToSend, messages);

            if (response.success) {
                const assistantMessage = {
                    role: 'assistant',
                    content: response.message,
                    timestamp: response.timestamp
                };
                setMessages(prev => [...prev, assistantMessage]);

                // Get suggested follow-up questions
                const suggestions = await getSuggestedQuestions(textToSend);
                if (suggestions.success) {
                    setSuggestedQuestions(suggestions.suggestions);
                }
            } else {
                // Error message
                const errorMessage = {
                    role: 'assistant',
                    content: '❌ Sorry, I encountered an error. Please try again!',
                    timestamp: new Date().toISOString()
                };
                setMessages(prev => [...prev, errorMessage]);
            }
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage = {
                role: 'assistant',
                content: '❌ Connection error. Please check your internet and try again.',
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

    // Clear chat
    const handleClearChat = () => {
        setMessages([
            {
                role: 'assistant',
                content: 'Chat cleared! Ask me anything about cricket! 🏏',
                timestamp: new Date().toISOString()
            }
        ]);
        setSuggestedQuestions([]);
    };

    if (!isOpen) return null;

    return (
        <div className="gemini-chatbot-overlay">
            <div className="gemini-chatbot-container">
                {/* Header */}
                <div className="chatbot-header">
                    <div className="header-info">
                        <div className="bot-avatar">🤖</div>
                        <div className="bot-details">
                            <h3>CricBot AI</h3>
                            <span className="bot-status">
                                {isLoading ? '⚡ Thinking...' : '🟢 Online'}
                            </span>
                        </div>
                    </div>
                    <div className="header-actions">
                        <button
                            onClick={handleClearChat}
                            className="clear-button"
                            title="Clear chat"
                        >
                            🗑️
                        </button>
                        <button
                            onClick={onClose}
                            className="close-button"
                            title="Close chat"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.role}`}
                        >
                            <div className="message-avatar">
                                {msg.role === 'user' ? '👤' : '🤖'}
                            </div>
                            <div className="message-content">
                                <p>{msg.content}</p>
                                <span className="message-time">
                                    {new Date(msg.timestamp).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </span>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="message assistant">
                            <div className="message-avatar">🤖</div>
                            <div className="message-content typing">
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

                {/* Suggested Questions */}
                {suggestedQuestions.length > 0 && (
                    <div className="suggested-questions">
                        <p className="suggestions-label">💡 You might also ask:</p>
                        <div className="suggestions-buttons">
                            {suggestedQuestions.map((question, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSendMessage(question)}
                                    className="suggestion-button"
                                    disabled={isLoading}
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input Area */}
                <div className="chatbot-input-area">
                    <textarea
                        ref={inputRef}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about cricket rules, players, stats..."
                        disabled={isLoading}
                        rows="1"
                    />
                    <button
                        onClick={() => handleSendMessage()}
                        disabled={!inputMessage.trim() || isLoading}
                        className="send-button"
                    >
                        {isLoading ? '⏳' : '📤'}
                    </button>
                </div>

                {/* Footer */}
                <div className="chatbot-footer">
                    <span>🤖 Powered by Google Gemini AI</span>
                </div>
            </div>
        </div>
    );
};

export default GeminiChatbot;