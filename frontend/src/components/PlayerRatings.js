import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';

const PlayerRatings = () => {
    const navigate = useNavigate();

    const upcomingFeatures = [
        {
            icon: 'ri-star-line',
            title: 'Performance Ratings',
            description: 'Comprehensive player ratings based on recent performances'
        },
        {
            icon: 'ri-bar-chart-box-line',
            title: 'Statistical Analysis',
            description: 'Advanced metrics and statistical breakdowns for each player'
        },
        {
            icon: 'ri-line-chart-line',
            title: 'Form Tracker',
            description: 'Track player form and performance trends over time'
        },
        {
            icon: 'ri-contrast-2-line',
            title: 'Format Comparison',
            description: 'Compare player ratings across Test, ODI, and T20I formats'
        },
        {
            icon: 'ri-trophy-line',
            title: 'Top Performers',
            description: 'View rankings of top-rated players in each category'
        },
        {
            icon: 'ri-refresh-line',
            title: 'Live Updates',
            description: 'Real-time rating updates after every match'
        }
    ];

    return (
        <div className="coming-soon-page">
            {/* Hero Section */}
            <div className="coming-hero ratings-hero-bg">
                <div className="hero-content-coming">
                    <div className="coming-soon-badge ratings-badge">
                        <i className="ri-time-line"></i>
                        Coming Soon
                    </div>

                    <div className="coming-icon ratings-icon">
                        <i className="ri-star-line"></i>
                    </div>

                    <h1>Player Ratings</h1>

                    <p className="hero-subtitle-coming">
                        Discover comprehensive player ratings powered by advanced analytics and real-time performance data!
                    </p>

                    <div className="hero-buttons-coming">
                        <button
                            className="btn-primary-coming ratings-btn"
                            onClick={() => navigate('/stats/player-rankings')}
                        >
                            <i className="ri-trophy-line"></i>
                            View ICC Rankings
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
                        Advanced player rating system with deep insights
                    </p>

                    <div className="features-grid-coming">
                        {upcomingFeatures.map((feature, index) => (
                            <div key={index} className="feature-card-coming">
                                <div className="feature-icon-coming ratings-feature-icon">
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
            <div className="newsletter-section-coming ratings-newsletter-bg">
                <div className="newsletter-container-coming">
                    <div className="newsletter-icon-coming ratings-newsletter-icon">
                        <i className="ri-mail-line"></i>
                    </div>
                    <h3>Get Notified When We Launch</h3>
                    <p>Be the first to access advanced player ratings!</p>
                    <div className="newsletter-form-coming">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter-input-coming"
                        />
                        <button className="newsletter-btn-coming ratings-btn">
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
                            onClick={() => navigate('/stats/player-rankings')}
                        >
                            <i className="ri-trophy-line"></i>
                            <h4>ICC Rankings</h4>
                            <p>Check official ICC player rankings</p>
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
                            <p>Explore detailed player statistics</p>
                            <span className="cta-link-coming">
                                View Now <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                        <div
                            className="cta-card-coming"
                            onClick={() => navigate('/stats/team-statistics')}
                        >
                            <i className="ri-team-line"></i>
                            <h4>Team Stats</h4>
                            <p>View comprehensive team statistics</p>
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

export default PlayerRatings;