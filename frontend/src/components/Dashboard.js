import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cricketDataSync from '../services/cricketDataSync';
import '../styles/Features.css';

function Dashboard({ user }) {
    const [syncing, setSyncing] = useState(false);
    const [lastSync, setLastSync] = useState(null);

    const handleSync = async () => {
        setSyncing(true);
        try {
            const result = await cricketDataSync.manualSync();
            setLastSync(result.timestamp);
            alert('✅ Cricket data synced successfully!');
        } catch (error) {
            alert('❌ Sync failed. Please try again.');
            console.error('Sync error:', error);
        } finally {
            setSyncing(false);
        }
    };

    return (
        <div className="content-container">
            <div className="welcome-section">
                <h1>Welcome back, {user?.username}! 😊</h1>
                <p>Choose a feature to get started</p>

                {/* SYNC BUTTON */}
                <div style={{ marginTop: '20px' }}>
                    <button
                        onClick={handleSync}
                        disabled={syncing}
                        style={{
                            padding: '12px 30px',
                            background: syncing ? '#afa29cff' : 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: syncing ? 'not-allowed' : 'pointer',
                            fontSize: '16px',
                            fontWeight: '700',
                            boxShadow: syncing ? 'none' : '0 4px 15px rgba(222, 104, 74, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {syncing ? '🔄 Syncing Data...' : '🔄 Sync Cricket Data'}
                    </button>

                    {lastSync && (
                        <p style={{
                            marginTop: '10px',
                            color: '#16a34a',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}>
                            ✅ Last synced: {new Date(lastSync).toLocaleString()}
                        </p>
                    )}
                </div>
            </div>

            <div className="features-grid">
                <Link to="/polls" className="feature-card">
                    <div className="feature-icon">🏅</div>
                    <h2>Cricket Polls</h2>
                    <p>Vote on your favorite cricket topics and see what others think</p>
                </Link>

                <Link to="/quiz" className="feature-card">
                    <div className="feature-icon">🧠</div>
                    <h2>Cricket Quiz</h2>
                    <p>Test your knowledge with 10 challenging cricket questions</p>
                </Link>

                <Link to="/trivia" className="feature-card">
                    <div className="feature-icon">✨</div>
                    <h2>Cricket Trivia</h2>
                    <p>Challenge yourself with interesting cricket trivia</p>
                </Link>

                <Link to="/find-club" className="feature-card">
                    <div className="feature-icon">🔍</div>
                    <h2>Find Cricket Clubs</h2>
                    <p>Discover nearby cricket clubs and academies</p>
                </Link>

                <Link to="/news" className="feature-card">
                    <div className="feature-icon">📰</div>
                    <h2>Cricket News</h2>
                    <p>Stay updated with the latest cricket news and articles</p>
                </Link>

                <Link to="/cricket-store" className="feature-card">
                    <div className="feature-icon">🛒</div>
                    <h2>Cricket Store</h2>
                    <p>Shop cricket equipment, apparel, and accessories</p>
                </Link>

                <Link to="/stadium-information" className="feature-card">
                    <div className="feature-icon">🏟️</div>
                    <h2>Stadium Info</h2>
                    <p>Explore cricket stadiums around the world</p>
                </Link>

                <Link to="/history-of-cricket" className="feature-card">
                    <div className="feature-icon">📚</div>
                    <h2>Cricket History</h2>
                    <p>Learn about the rich history of cricket</p>
                </Link>

                <Link to="/community" className="feature-card">
                    <div className="feature-icon">📢</div>
                    <h2>Community Hub</h2>
                    <p>Discuss with cricket enthusiasts</p>
                </Link>

                <Link to="/lessons" className="feature-card">
                    <div className="feature-icon">📼</div>
                    <h2>Lessons</h2>
                    <p>Watch how player implement</p>
                </Link>

                <Link to="/tutorials" className="feature-card">
                    <div className="feature-icon">💡</div>
                    <h2>Tutorials</h2>
                    <p>Learn how to play cricket</p>
                </Link>

                <Link to="/analysis" className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h2>Analysis</h2>
                    <p>Decoding Player's Technique</p>
                </Link>

                <Link to="/team-builder" className="feature-card">
                    <div className="feature-icon">🏏</div>
                    <h2>Ultimate 11</h2>
                    <p>Build your dream 11</p>
                </Link>

                <Link to="/daily-rewards" className="feature-card">
                    <div className="feature-icon">🎁</div>
                    <h2>Daily Rewards</h2>
                    <p>Login every day to earn more rewards</p>
                </Link>

                <Link to="/rules-laws-regulations" className="feature-card">
                    <div className="feature-icon">📖</div>
                    <h2>Rules and Laws</h2>
                    <p>Understand cricket rules, laws, and regulations</p>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;