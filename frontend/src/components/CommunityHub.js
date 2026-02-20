import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityHub.css';

const CommunityHub = () => {
    return (
        <div className="community-hub-container">
            {/* Hero Section */}
            <div className="community-hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        👥 Cricket Community Hub
                    </h1>
                    <p className="hero-subtitle">
                        Connect, share, and engage with cricket enthusiasts worldwide
                    </p>
                </div>
            </div>

            {/* Community Options */}
            <div className="community-options">
                <div className="options-grid">
                    {/* Fan Club Card */}
                    <div className="community-card">
                        <div className="card-icon-wrapper">
                            <div className="card-icon"><i class="ri-user-community-fill"></i></div>
                        </div>
                        <h2 className="card-title">Fan Club & Community</h2>
                        <p className="card-description">
                            Join your favorite team's fan club, participate in discussions, and connect with fellow cricket fans
                        </p>
                        <div className="card-features">
                            <div className="feature-item">✅ Team Fan Clubs</div>
                            <div className="feature-item">✅ Community Discussions</div>
                            <div className="feature-item">✅ Activity Feed</div>
                            <div className="feature-item">✅ Member Interactions</div>
                        </div>
                        <Link to="/fan-club" className="card-button">
                            Join Community →
                        </Link>
                    </div>

                    {/* Content Generator Card */}
                    <div className="community-card">
                        <div className="card-icon-wrapper">
                            <div className="card-icon"><i class="ri-draft-fill"></i></div>
                        </div>
                        <h2 className="card-title">Content Creator Studio</h2>
                        <p className="card-description">
                            Create and share cricket articles, match reviews, player analyses, and more with the community
                        </p>
                        <div className="card-features">
                            <div className="feature-item">✅ Write Articles</div>
                            <div className="feature-item">✅ Match Reviews</div>
                            <div className="feature-item">✅ Player Analysis</div>
                            <div className="feature-item">✅ Share & Engage</div>
                        </div>
                        <Link to="/content-generator" className="card-button">
                            Start Creating →
                        </Link>
                    </div>
                </div>

                {/* Info Section */}
                <div className="community-info">
                    <div className="info-card-community">
                        <span className="info-icon">🌟</span>
                        <h3>Why Join Our Community?</h3>
                        <p>
                            Connect with over 97,000+ active cricket enthusiasts, share your passion,
                            create amazing content, and be part of the world's most engaging cricket community.
                        </p>
                    </div>
                    <div className="stats-row">
                        <div className="stat-box">
                            <span className="stat-number-community">97K+</span>
                            <span className="stat-label-community">Active Members</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number-community">5K+</span>
                            <span className="stat-label-community">Discussions</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number-community">1K+</span>
                            <span className="stat-label-community">Articles</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityHub;