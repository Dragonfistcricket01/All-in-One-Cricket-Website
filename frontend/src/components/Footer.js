import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            setTimeout(() => {
                setEmail('');
                setIsSuccess(false);
            }, 3000);
        }, 1500);
    };

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-container">
                    {/* Brand Column */}
                    <div className="footer-column footer-brand">
                        <h3 className="footer-logo">
                            <img src="/resource/All-in-One Cricket Website Logo.png" alt="All-in-One Cricket" />
                            <span>All-in-One Cricket</span>
                        </h3>
                        <p className="footer-description">
                            Your ultimate destination for everything cricket. Live scores, news, player stats, and comprehensive cricket coverage all in one place.
                        </p>
                        <div className="footer-social">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link social-facebook" title="Facebook">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link social-twitter" title="Twitter">
                                <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link social-instagram" title="Instagram">
                                <i className="ri-instagram-fill"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link social-youtube" title="Youtube">
                                <i className="ri-youtube-fill"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - UPDATED */}
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/live-scores">Live Scores</Link></li>
                            <li><Link to="/cricket-store">Cricket Store</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/news">News and Articles</Link></li>
                        </ul>
                    </div>

                    {/* Features - UPDATED WITH YOUR 5 FEATURES */}
                    <div className="footer-column">
                        <h4>Features</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/find-club">Find Cricket Club Nearby</Link></li>
                            <li><Link to="/team-builder">Ultimate Team 11</Link></li>
                            <li><Link to="/fan-club">Fan Club and Community</Link></li>
                            <li><Link to="/ratings">Player Ratings</Link></li>
                            <li><Link to="/polls">Polls + Quiz + Trivia</Link></li>
                        </ul>
                    </div>

                    {/* Stay Updated */}
                    <div className="footer-column footer-contact">
                        <h4>Stay Updated</h4>
                        <p className="newsletter-text">Get latest cricket updates delivered to your inbox</p>
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isSuccess}
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className={isSuccess ? 'success' : ''}
                            >
                                {isSubmitting ? (
                                    <span className="spinner"><i className="ri-loader-4-line"></i></span>
                                ) : isSuccess ? (
                                    <i className="ri-check-line success-icon"></i>
                                ) : (
                                    <i className="ri-send-plane-fill"></i>
                                )}
                            </button>
                        </form>
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="ri-mail-line"></i>
                                <span>info@allinonecricket.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="ri-phone-line"></i>
                                <span>+880 1234567891</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom - UPDATED */}
            <div className="footer-bottom">
                <div className="footer-container">
                    <p>&copy; 2025 All-in-One Cricket. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span>|</span>
                        <Link to="/terms-of-service">Terms of Service</Link>
                        <span>|</span>
                        <Link to="/cookie-policy">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;