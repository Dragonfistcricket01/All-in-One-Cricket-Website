import React from 'react';
import { Link } from 'react-router-dom';
import './ChatbotSelection.css';

const ChatbotSelection = () => {
    return (
        <div className="chatbot-selection-page">
            <div className="selection-header">
                <h1>Choose Your Cricket Assistant</h1>
                <p>Select the chatbot that best fits your needs</p>
            </div>

            <div className="chatbot-cards">
                {/* AI Chatbot Card */}
                <Link to="/ai-chat" className="chatbot-card ai-card">
                    <div className="card-icon">🤖</div>
                    <h2>AI Chatbot</h2>
                    <p className="card-subtitle">Powered by Google Gemini</p>

                    <div className="card-features">
                        <div className="feature">✅ Natural conversations</div>
                        <div className="feature">✅ Contextual understanding</div>
                        <div className="feature">✅ Detailed explanations</div>
                        <div className="feature">✅ Follow-up questions</div>
                    </div>

                    <div className="card-badges">
                        <span className="badge">🌐 Internet Required</span>
                        <span className="badge">⚡ Smart AI</span>
                    </div>

                    <div className="card-action">
                        <button className="select-button ai-button">
                            Start AI Chat →
                        </button>
                    </div>
                </Link>

                {/* Rule-Based Chatbot Card */}
                <Link to="/cricket-bot" className="chatbot-card rule-card">
                    <div className="card-icon">📚</div>
                    <h2>Knowledge Bot</h2>
                    <p className="card-subtitle">Rule-Based Assistant</p>

                    <div className="card-features">
                        <div className="feature">✅ Instant responses</div>
                        <div className="feature">✅ Works offline</div>
                        <div className="feature">✅ Comprehensive FAQs</div>
                        <div className="feature">✅ 100% Free</div>
                    </div>

                    <div className="card-badges">
                        <span className="badge">🔒 No API Required</span>
                        <span className="badge">⚡ Lightning Fast</span>
                    </div>

                    <div className="card-action">
                        <button className="select-button rule-button">
                            Start Knowledge Bot →
                        </button>
                    </div>
                </Link>
            </div>

            <div className="comparison-section">
                <h3>Quick Comparison</h3>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>AI Chatbot</th>
                            <th>Knowledge Bot</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Response Speed</td>
                            <td>2-3 seconds</td>
                            <td>Instant</td>
                        </tr>
                        <tr>
                            <td>Understanding</td>
                            <td>Natural Language</td>
                            <td>Keyword-based</td>
                        </tr>
                        <tr>
                            <td>Internet Required</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Cost</td>
                            <td>Free (with limits)</td>
                            <td>100% Free</td>
                        </tr>
                        <tr>
                            <td>Best For</td>
                            <td>Complex queries</td>
                            <td>Quick facts</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChatbotSelection;