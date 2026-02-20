import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';

const InteractiveGames = () => {
    const navigate = useNavigate();

    const upcomingGames = [
        {
            icon: 'ri-gamepad-line',
            title: 'Doodle Cricket',
            description: 'Classic Google Doodle cricket game with enhanced features'
        },
        {
            icon: 'ri-trophy-line',
            title: 'Cricket Howzat',
            description: 'Exciting cricket management and strategy game'
        },
        {
            icon: 'ri-flashlight-line',
            title: 'T20 Blaster',
            description: 'Fast-paced T20 cricket action game'
        },
        {
            icon: 'ri-ball-pen-line',
            title: 'Batting Challenge',
            description: 'Test your batting skills against world-class bowlers'
        },
        {
            icon: 'ri-trophy-fill',
            title: 'World Cup Manager',
            description: 'Build and manage your dream cricket team'
        },
        {
            icon: 'ri-puzzle-line',
            title: 'Cricket Quiz',
            description: 'Test your cricket knowledge with trivia and challenges'
        }
    ];

    return (
        <div className="coming-soon-page">
            {/* Hero Section */}
            <div className="coming-hero games-hero-bg">
                <div className="hero-content-coming">
                    <div className="coming-soon-badge games-badge">
                        <i className="ri-time-line"></i>
                        Coming Soon
                    </div>

                    <div className="coming-icon games-icon">
                        <i className="ri-gamepad-line"></i>
                    </div>

                    <h1>Interactive Cricket Games</h1>

                    <p className="hero-subtitle-coming">
                        Get ready for exciting cricket games! Play Doodle Cricket, manage teams, and enjoy classic cricket games powered by modern web technology!
                    </p>

                    <div className="hero-buttons-coming">
                        <button
                            className="btn-primary-coming games-btn"
                            onClick={() => navigate('/team-builder')}
                        >
                            <i className="ri-team-line"></i>
                            Explore Ultimate Teams
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
                        Games Coming Soon
                    </h2>
                    <p className="features-subtitle-coming">
                        Fun and engaging cricket games for everyone
                    </p>

                    <div className="features-grid-coming">
                        {upcomingGames.map((game, index) => (
                            <div key={index} className="feature-card-coming game-card">
                                <div className="feature-icon-coming games-feature-icon">
                                    <i className={game.icon}></i>
                                </div>
                                <h3>{game.title}</h3>
                                <p>{game.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="newsletter-section-coming games-newsletter-bg">
                <div className="newsletter-container-coming">
                    <div className="newsletter-icon-coming games-newsletter-icon">
                        <i className="ri-mail-line"></i>
                    </div>
                    <h3>Get Notified When We Launch</h3>
                    <p>Be the first to play when our games go live!</p>
                    <div className="newsletter-form-coming">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter-input-coming"
                        />
                        <button className="newsletter-btn-coming games-btn">
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
                            onClick={() => navigate('/stats/players')}
                        >
                            <i className="ri-user-star-line"></i>
                            <h4>Player Profiles</h4>
                            <p>Discover your favorite players' stats</p>
                            <span className="cta-link-coming">
                                View Now <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                        <div
                            className="cta-card-coming"
                            onClick={() => navigate('/stats/team-statistics')}
                        >
                            <i className="ri-team-line"></i>
                            <h4>Team Statistics</h4>
                            <p>Explore team performance data</p>
                            <span className="cta-link-coming">
                                View Now <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                        <div
                            className="cta-card-coming"
                            onClick={() => navigate('/stats/player-rankings')}
                        >
                            <i className="ri-trophy-line"></i>
                            <h4>Rankings</h4>
                            <p>Check ICC rankings and standings</p>
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

export default InteractiveGames;