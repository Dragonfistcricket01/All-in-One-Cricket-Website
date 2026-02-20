import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';

const LiveScores = () => {
    const navigate = useNavigate();

    const upcomingFeatures = [
        {
            icon: 'ri-radio-button-line',
            title: 'Real-Time Updates',
            description: 'Ball-by-ball live scores with instant updates'
        },
        {
            icon: 'ri-chat-3-line',
            title: 'Live Commentary',
            description: 'Expert commentary and analysis during live matches'
        },
        {
            icon: 'ri-pie-chart-line',
            title: 'Live Statistics',
            description: 'Detailed match statistics updated in real-time'
        },
        {
            icon: 'ri-notification-4-line',
            title: 'Match Notifications',
            description: 'Get alerts for wickets, boundaries, and milestones'
        },
        {
            icon: 'ri-video-line',
            title: 'Video Highlights',
            description: 'Watch key moments and highlights from live matches'
        },
        {
            icon: 'ri-line-chart-line',
            title: 'Win Predictor',
            description: 'AI-powered win probability during live matches'
        }
    ];

    return (
        <div className="coming-soon-page">
            {/* Hero Section */}
            <div className="coming-hero live-hero-bg">
                <div className="hero-content-coming">
                    <div className="coming-soon-badge live-badge">
                        <i className="ri-time-line"></i>
                        Coming Soon
                    </div>

                    <div className="coming-icon live-icon-pulse">
                        <i className="ri-radio-button-line"></i>
                    </div>

                    <h1>Live Cricket Scores</h1>

                    <p className="hero-subtitle-coming">
                        Experience cricket like never before with real-time scores, ball-by-ball commentary, and live match insights!
                    </p>

                    <div className="hero-buttons-coming">
                        <button
                            className="btn-primary-coming live-btn"
                            onClick={() => navigate('/stats/team-statistics')}
                        >
                            <i className="ri-team-line"></i>
                            View Team Stats
                        </button>
                        <button
                            className="btn-secondary-coming"
                            onClick={() => navigate('/')}
                        >
                            <i className="ri-home-line"></i>
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Preview */}
            <div className="features-preview-coming">
                <div className="features-container-coming">
                    <h2>
                        <i className="ri-flashlight-line"></i>
                        What's Coming
                    </h2>
                    <p className="features-subtitle-coming">
                        Get ready for the most comprehensive live cricket experience
                    </p>

                    <div className="features-grid-coming">
                        {upcomingFeatures.map((feature, index) => (
                            <div key={index} className="feature-card-coming">
                                <div className="feature-icon-coming live-feature-icon">
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
            <div className="newsletter-section-coming live-newsletter-bg">
                <div className="newsletter-container-coming">
                    <div className="newsletter-icon-coming live-newsletter-icon">
                        <i className="ri-mail-line"></i>
                    </div>
                    <h3>Get Notified When We Launch</h3>
                    <p>Be the first to experience live cricket scores!</p>
                    <div className="newsletter-form-coming">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter-input-coming"
                        />
                        <button className="newsletter-btn-coming live-btn">
                            <i className="ri-send-plane-line"></i>
                            Notify Me
                        </button>
                    </div>
                    <p className="newsletter-note-coming">
                        <i className="ri-lock-line"></i>
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section-coming">
                <div className="cta-container-coming">
                    <h3>Explore What's Available Now</h3>
                    <div className="cta-cards-coming">
                        <div
                            className="cta-card-coming"
                            onClick={() => navigate('/stats/team-statistics')}
                        >
                            <i className="ri-team-line"></i>
                            <h4>Team Statistics</h4>
                            <p>Explore detailed team performance and records</p>
                            <span className="cta-link-coming">
                                View Now <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                        <div
                            className="cta-card-coming"
                            onClick={() => navigate('/stats/players')}
                        >
                            <i className="ri-user-star-line"></i>
                            <h4>Player Profiles</h4>
                            <p>Check out player statistics and career info</p>
                            <span className="cta-link-coming">
                                View Now <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                        <div
                            className="cta-card-coming"
                            onClick={() => navigate('/stats/team-rankings')}
                        >
                            <i className="ri-trophy-line"></i>
                            <h4>Team Rankings</h4>
                            <p>View ICC team rankings worldwide</p>
                            <span className="cta-link-coming">
                                View Now <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveScores;