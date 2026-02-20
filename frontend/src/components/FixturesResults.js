import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';

const FixturesResults = () => {
    const navigate = useNavigate();

    const upcomingFeatures = [
        {
            icon: 'ri-calendar-check-line',
            title: 'Match Schedule',
            description: 'Complete fixture list for all international and domestic tournaments'
        },
        {
            icon: 'ri-trophy-line',
            title: 'Live Results',
            description: 'Real-time match results and scorecards from around the world'
        },
        {
            icon: 'ri-bar-chart-box-line',
            title: 'Match Statistics',
            description: 'Detailed statistics and analysis for every completed match'
        },
        {
            icon: 'ri-notification-line',
            title: 'Match Alerts',
            description: 'Get notified when your favorite teams are playing'
        },
        {
            icon: 'ri-time-line',
            title: 'Time Zone Support',
            description: 'View match timings in your local time zone'
        },
        {
            icon: 'ri-filter-3-line',
            title: 'Advanced Filters',
            description: 'Filter matches by format, team, series, and venue'
        }
    ];

    return (
        <div className="coming-soon-page">
            {/* Hero Section */}
            <div className="coming-hero">
                <div className="hero-content-coming">
                    <div className="coming-soon-badge">
                        <i className="ri-time-line"></i>
                        Coming Soon
                    </div>

                    <div className="coming-icon">
                        <i className="ri-calendar-event-line"></i>
                    </div>

                    <h1>Fixtures & Results</h1>

                    <p className="hero-subtitle-coming">
                        We're building a comprehensive platform to track all cricket fixtures and results from around the globe!
                    </p>

                    <div className="hero-buttons-coming">
                        <button
                            className="btn-primary-coming"
                            onClick={() => navigate('/stats/team-statistics')}
                        >
                            <i className="ri-team-line"></i>
                            Explore Team Stats
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
                        Stay tuned for comprehensive cricket fixtures and results tracking
                    </p>

                    <div className="features-grid-coming">
                        {upcomingFeatures.map((feature, index) => (
                            <div key={index} className="feature-card-coming">
                                <div className="feature-icon-coming">
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
            <div className="newsletter-section-coming">
                <div className="newsletter-container-coming">
                    <div className="newsletter-icon-coming">
                        <i className="ri-mail-line"></i>
                    </div>
                    <h3>Get Notified When We Launch</h3>
                    <p>Be the first to know when Fixtures & Results goes live!</p>
                    <div className="newsletter-form-coming">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter-input-coming"
                        />
                        <button className="newsletter-btn-coming">
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
                            onClick={() => navigate('/stats/player-rankings')}
                        >
                            <i className="ri-trophy-line"></i>
                            <h4>Player Rankings</h4>
                            <p>View ICC player rankings across all formats</p>
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

export default FixturesResults;