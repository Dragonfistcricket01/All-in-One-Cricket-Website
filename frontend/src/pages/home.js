import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section-home">
                <div className="hero-overlay-home"></div>
                <div className="hero-content-home">
                    <h1 className="hero-title-home">
                        Welcome to <span className="gradient-text">All-in-One Cricket</span>
                    </h1>
                    <p className="hero-subtitle-home">
                        Your Ultimate Destination for Everything Cricket
                    </p>
                    <p className="hero-description-home">
                        Live scores, news, player stats, and comprehensive cricket coverage all in one place
                    </p>
                    <div className="hero-buttons-home">
                        <Link to="/cricket-store" className="hero-btn-home primary">
                            <i className="ri-shopping-cart-line"></i>
                            Explore Store
                        </Link>
                        <Link to="/polls" className="hero-btn-home secondary">
                            <i className="ri-line-chart-line"></i>
                            Live Polls
                        </Link>
                    </div>
                </div>
                <div className="hero-stats-home">
                    <div className="stat-card-home">
                        <div className="stat-number-home">1000+</div>
                        <div className="stat-label-home">Products</div>
                    </div>
                    <div className="stat-card-home">
                        <div className="stat-number-home">50K+</div>
                        <div className="stat-label-home">Happy Customers</div>
                    </div>
                    <div className="stat-card-home">
                        <div className="stat-number-home">24/7</div>
                        <div className="stat-label-home">Live Updates</div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section-home">
                <div className="section-header-home">
                    <h2 className="section-title-home">Why Choose Us?</h2>
                    <p className="section-subtitle-home">Everything you need in one platform</p>
                </div>

                <div className="features-grid-home">
                    <div className="feature-card-home">
                        <div className="feature-icon-home">
                            <i className="ri-store-2-line"></i>
                        </div>
                        <h3>Cricket Store</h3>
                        <p>Premium cricket equipment and apparel from top brands</p>
                        <Link to="/cricket-store" className="feature-link-home">
                            Shop Now <i className="ri-arrow-right-line"></i>
                        </Link>
                    </div>

                    <div className="feature-card-home">
                        <div className="feature-icon-home">
                            <i className="ri-live-line"></i>
                        </div>
                        <h3>Live Scores</h3>
                        <p>Real-time match updates and ball-by-ball commentary</p>
                        <a href="/live-scores" className="feature-link-home">
                            View Scores <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div className="feature-card-home">
                        <div className="feature-icon-home">
                            <i className="ri-bar-chart-box-line"></i>
                        </div>
                        <h3>Player Stats and Profiles</h3>
                        <p>Comprehensive statistics and player profiles</p>
                        <a href="/stats/players" className="feature-link-home">
                            Explore Stats <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div className="feature-card-home">
                        <div className="feature-icon-home">
                            <i className="ri-gamepad-line"></i>
                        </div>
                        <h3>Interactive Games</h3>
                        <p>Online cricket games</p>
                        <Link to="/games" className="feature-link-home">
                            Play Now <i className="ri-arrow-right-line"></i>
                        </Link>
                    </div>

                    <div className="feature-card-home">
                        <div className="feature-icon-home">
                            <i className="ri-newspaper-line"></i>
                        </div>
                        <h3>Latest News</h3>
                        <p>Daily updates on cricket happenings worldwide</p>
                        <a href="/news" className="feature-link-home">
                            Read News <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div className="feature-card-home">
                        <div className="feature-icon-home">
                            <i className="ri-team-line"></i>
                        </div>
                        <h3>Community</h3>
                        <p>Join fan clubs and connect with cricket enthusiasts</p>
                        <Link to="/community" className="feature-link-home">
                            Join Now <i className="ri-arrow-right-line"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories Showcase */}
            <section className="categories-section-home">
                <div className="section-header-home">
                    <h2 className="section-title-home">Shop by Category</h2>
                    <p className="section-subtitle-home">Find exactly what you need</p>
                </div>

                <div className="categories-grid-home">
                    <Link to="/cricket-store/cricket-bats" className="category-card-home">
                        <div className="category-icon-home"><img src="/resource/cricket-bat.png" alt="Cricket Bat" /></div>
                        <h3>Bats</h3>
                        <p>Premium bats for all levels</p>
                    </Link>

                    <Link to="/cricket-store/cricket-balls" className="category-card-home">
                        <div className="category-icon-home"><img src="/resource/cricket-ball.png" alt="Cricket Ball" /></div>
                        <h3>Balls</h3>
                        <p>Quality balls for every format</p>
                    </Link>

                    <Link to="/cricket-store/jerseys" className="category-card-home">
                        <div className="category-icon-home"><img src="/resource/jersey.png" alt="Jersey" /></div>
                        <h3>Jerseys</h3>
                        <p>Official team jerseys</p>
                    </Link>

                    <Link to="/cricket-store/protective-gear" className="category-card-home">
                        <div className="category-icon-home"><img src="/resource/protection.png" alt="Protection Gear" /></div>
                        <h3>Protection</h3>
                        <p>Safety equipment & gear</p>
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="section-header-home">
                    <h2 className="section-title-home">Frequently Asked Questions</h2>
                    <p className="section-subtitle-home">Everything you need to know</p>
                </div>

                <div className="faq-container">
                    <FAQItem
                        question="What is this website about?"
                        answer="This is an all-in-one cricket platform providing news, player information, cricket rules, history, statistics, and interactive features in a single place. Our goal is to eliminate the need to browse multiple websites for cricket-related content."
                    />

                    <FAQItem
                        question="How often is the content updated?"
                        answer="We update our news section daily with the latest cricket happenings worldwide. Player statistics are updated after every match, and our historical content and rules sections are reviewed and updated quarterly or when official changes occur."
                    />

                    <FAQItem
                        question="Is this website free to use?"
                        answer="Yes, all features of this website are completely free to use. We believe cricket information should be accessible to all fans without any barriers or subscription fees."
                    />

                    <FAQItem
                        question="Can I contribute content or suggest features?"
                        answer="Yes! User-generated content features has already been introduced. Please check entertainment section to browse it. You can send us suggestions via email. We value community input and regularly implement user suggestions."
                    />

                    <FAQItem
                        question="Which cricket formats do you cover?"
                        answer="We cover all formats of cricket including Test matches, ODIs, T20 Internationals, domestic leagues like BPL, BBL, CPL, and local tournaments. Our coverage includes men's cricket."
                    />

                    <FAQItem
                        question="Do you have a mobile app?"
                        answer="Currently, we're a web-based platform optimized for desktop browser only. Mobile app might be launched if decided to do so."
                    />
                </div>
            </section>
        </div>
    );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className="faq-icon">+</span>
            </button>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default Home;