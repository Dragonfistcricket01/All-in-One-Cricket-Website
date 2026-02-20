import React, { useState, useRef, useEffect } from 'react';
import { findBestMatch, getStarterQuestions, getRandomFact } from '../utils/AIchatbotMatcher';
import './RuleBasedChatbot.css';

const RuleBasedChatbot = () => {
    const [messages, setMessages] = useState([
        {
            role: 'bot',
            content: "👋 Hello! I'm your Cricket Knowledge Assistant! I can answer questions about cricket rules, players, statistics, and tournaments. What would you like to know?",
            timestamp: new Date().toISOString()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [suggestions, setSuggestions] = useState(getStarterQuestions());
    const [showFactModal, setShowFactModal] = useState(false);
    const [currentFact, setCurrentFact] = useState('');
    const [messageCount, setMessageCount] = useState(0);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom
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

        // Add user message
        const newUserMessage = {
            role: 'user',
            content: userMessage,
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputMessage('');
        setIsTyping(true);

        // Simulate thinking delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));

        // Find matching response
        const matchResult = findBestMatch(userMessage);

        setIsTyping(false);

        // Add bot response
        const botMessage = {
            role: 'bot',
            content: matchResult.answer,
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, botMessage]);

        // Update suggestions with related questions
        if (matchResult.relatedQuestions && matchResult.relatedQuestions.length > 0) {
            setSuggestions(matchResult.relatedQuestions);
        } else {
            // Fallback to starter questions
            setSuggestions(getStarterQuestions());
        }

        // Increment message count
        setMessageCount(prev => prev + 1);

        // Show random fact every 5 questions
        if ((messageCount + 1) % 5 === 0) {
            setTimeout(() => {
                setCurrentFact(getRandomFact());
                setShowFactModal(true);
            }, 1000);
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = (suggestion) => {
        handleSendMessage(suggestion);
    };

    // Handle quick fact
    const handleShowFact = () => {
        setCurrentFact(getRandomFact());
        setShowFactModal(true);
    };

    // Clear chat
    const handleClearChat = () => {
        if (window.confirm('Clear all messages?')) {
            setMessages([
                {
                    role: 'bot',
                    content: "Chat cleared! Ask me anything about cricket! 🏏",
                    timestamp: new Date().toISOString()
                }
            ]);
            setSuggestions(getStarterQuestions());
            setMessageCount(0);
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

    // Format bot message with markdown-like styling
    const formatBotMessage = (content) => {
        // Split by lines
        const lines = content.split('\n');

        return lines.map((line, index) => {
            // Bold headers (**text**)
            if (line.includes('**')) {
                const parts = line.split('**');
                return (
                    <p key={index} className="formatted-line">
                        {parts.map((part, i) =>
                            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                        )}
                    </p>
                );
            }

            // Emoji bullets
            if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
                return <li key={index} className="bullet-point">{line.replace(/^[-•]\s*/, '')}</li>;
            }

            // Numbers
            if (/^\d+\./.test(line.trim())) {
                return <li key={index} className="numbered-point">{line}</li>;
            }

            // Regular line
            return line.trim() ? <p key={index} className="formatted-line">{line}</p> : <br key={index} />;
        });
    };

    return (
        <div className="rule-chatbot-container">
            {/* Header */}
            <div className="chatbot-header rule-header">
                <div className="header-content">
                    <div className="bot-avatar">📚</div>
                    <div className="header-info">
                        <h1>Cricket Knowledge Bot</h1>
                        <p className="bot-status">
                            <span className="status-dot active"></span>
                            Rule-Based Assistant • Instant Answers
                        </p>
                    </div>
                </div>
                <div className="header-actions">
                    <button onClick={handleShowFact} className="fact-button" title="Random Fact">
                        💡
                    </button>
                    <button onClick={handleClearChat} className="clear-button" title="Clear Chat">
                        🗑️
                    </button>
                </div>
            </div>

            {/* Fact Modal */}
            {showFactModal && (
                <div className="fact-modal-overlay" onClick={() => setShowFactModal(false)}>
                    <div className="fact-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setShowFactModal(false)}>✕</button>
                        <h3>💡 Cricket Quick Fact</h3>
                        <p>{currentFact}</p>
                        <button className="modal-ok-button" onClick={() => setShowFactModal(false)}>
                            Got it!
                        </button>
                    </div>
                </div>
            )}

            {/* Chat Messages */}
            <div className="chat-messages rule-messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.role === 'user' ? 'user-message' : 'bot-message'}`}
                    >
                        <div className="message-avatar">
                            {message.role === 'user' ? '👤' : '📚'}
                        </div>
                        <div className="message-content">
                            <div className="message-bubble">
                                {message.role === 'bot' ? (
                                    <div className="formatted-content">
                                        {formatBotMessage(message.content)}
                                    </div>
                                ) : (
                                    <p>{message.content}</p>
                                )}
                            </div>
                            <span className="message-time">{formatTime(message.timestamp)}</span>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="message bot-message">
                        <div className="message-avatar">📚</div>
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
                    <p className="suggestions-title">📌 Try asking:</p>
                    <div className="suggestions-grid">
                        {suggestions.slice(0, 4).map((suggestion, index) => (
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
                        placeholder="Ask about rules, players, records..."
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
                    💡 Tip: Ask about LBW, DRS, Sachin, World Cup, IPL, and more!
                </p>
            </div>

            {/* Info Footer */}
            <div className="chatbot-info-footer">
                <div className="info-badge">
                    <span className="badge-icon">⚡</span>
                    <span>Instant Responses</span>
                </div>
                <div className="info-badge">
                    <span className="badge-icon">🔒</span>
                    <span>No API Required</span>
                </div>
                <div className="info-badge">
                    <span className="badge-icon">💯</span>
                    <span>100% Free</span>
                </div>
                <div className="info-badge">
                    <span className="badge-icon">📖</span>
                    <span>{messages.length} Messages</span>
                </div>
            </div>
        </div>
    );
};

export default RuleBasedChatbot;