import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdvancedAnalytics.css';

const AdvancedAnalytics = () => {
    const navigate = useNavigate();

    const upcomingFeatures = [
        {
            icon: 'ri-line-chart-line',
            title: 'Match Predictions',
            description: 'AI-powered predictions for upcoming matches based on historical data'
        },
        {
            icon: 'ri-bar-chart-box-line',
            title: 'Performance Trends',
            description: 'Detailed analysis of player and team performance over time'
        },
        {
            icon: 'ri-pie-chart-line',
            title: 'Head-to-Head Analysis',
            description: 'Compare players and teams with advanced statistical models'
        },
        {
            icon: 'ri-bubble-chart-line',
            title: 'Live Match Analytics',
            description: 'Real-time insights and predictions during live matches'
        },
        {
            icon: 'ri-organization-chart',
            title: 'Team Composition Analysis',
            description: 'Optimize team selection with data-driven recommendations'
        },
        {
            icon: 'ri-stock-line',
            title: 'Player Value Metrics',
            description: 'Advanced metrics to evaluate player impact and value'
        }
    ];

    return (
        <div className="advanced-analytics-page">
            {/* Hero Section */}
            <div className="analytics-hero">
                <div className="hero-content-analytics">
                    <div className="coming-soon-badge-analytics">
                        <i className="ri-time-line"></i>
                        Coming Soon
                    </div>

                    <div className="analytics-icon">
                        <i className="ri-line-chart-line"></i>
                    </div>

                    <h1>Advanced Analytics</h1>

                    <p className="hero-subtitle-analytics">
                        We're working on bringing you advanced cricket analytics including match predictions, performance trends, and more!
                    </p>

                    <div className="hero-buttons-analytics">
                        <button
                            className="btn-primary-analytics"
                            onClick={() => navigate('/stats/players')}
                        >
                            <i className="ri-user-star-line"></i>
                            Explore Player Profiles
                        </button>
                        <button
                            className="btn-secondary-analytics"
                            onClick={() => navigate('/')}
                        >
                            <i className="ri-home-line"></i>
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Preview */}
            <div className="features-preview-analytics">
                <div className="features-container-analytics">
                    <h2>
                        <i className="ri-flashlight-line"></i>
                        What's Coming
                    </h2>
                    <p className="features-subtitle-analytics">
                        Get ready for cutting-edge cricket analytics powered by AI and machine learning
                    </p>

                    <div className="features-grid-analytics">
                        {upcomingFeatures.map((feature, index) => (
                            <div key={index} className="feature-card-analytics">
                                <div className="feature-icon-analytics">
                                    <i className={feature.icon}></i>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="newsletter-section-analytics">
                <div className="newsletter-container-analytics">
                    <div className="newsletter-icon-analytics">
                        <i className="ri-mail-line"></i>
                    </div>
                    <h3>Get Notified When We Launch</h3>
                    <p>Be the first to know when Advanced Analytics goes live!</p>
                    <div className="newsletter-form-analytics">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter-input-analytics"
                        />
                        <button className="newsletter-btn-analytics">
                            <i className="ri-send-plane-line"></i>
                            Notify Me
                        </button>
                    </div>
                    <p className="newsletter-note-analytics">
                        <i className="ri-lock-line"></i>
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section-analytics">
                <div className="cta-container-analytics">
                    <h3>Explore What's Available Now</h3>
                    <div className="cta-cards-analytics">
                        <div
                            className="cta-card-analytics"
                            onClick={() => navigate('/stats/players')}
                        >
                            <i className="ri-user-star-line"></i>
                            <h4>Player Profiles</h4>
                            <p>Explore detailed player statistics and career information</p>
                            <span className="cta-link-analytics">
                                View Now <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                        <div
                            className="cta-card-analytics"
                            onClick={() => navigate('/stats/player-rankings')}
                        >
                            <i className="ri-trophy-line"></i>
                            <h4>Player Rankings</h4>
                            <p>Check ICC player rankings across all formats</p>
                            <span className="cta-link-analytics">
                                View Now <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                        <div
                            className="cta-card-analytics"
                            onClick={() => navigate('/stats/team-rankings')}
                        >
                            <i className="ri-team-line"></i>
                            <h4>Team Rankings</h4>
                            <p>Discover team standings and rankings worldwide</p>
                            <span className="cta-link-analytics">
                                View Now <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedAnalytics;