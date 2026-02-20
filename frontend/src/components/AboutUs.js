import React from 'react';

const AboutUs = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <i className="ri-information-line" style={{ color: '#ff7800' }}></i>
                        About Us
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        Your ultimate destination for everything cricket
                    </p>
                </div>

                {/* Mission Section */}
                <div style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', marginBottom: '3rem', textAlign: 'center' }}>
                    <i className="ri-flag-line" style={{ fontSize: '4rem', color: '#ff7800', marginBottom: '1rem' }}></i>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Mission</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', color: 'var(--text-primary)' }}>
                        To create the ultimate cricket platform that brings together fans, players, and enthusiasts 
                        from around the world. I aim to provide comprehensive cricket coverage, interactive features, 
                        and a community where cricket lovers can connect and celebrate their passion for the game.
                    </p>
                </div>

                {/* Features Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                        <i className="ri-live-line" style={{ fontSize: '3rem', color: '#ff7800', marginBottom: '1rem' }}></i>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Live Scores</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Real-time cricket scores and updates from matches around the world, powered by reliable APIs.
                        </p>
                    </div>

                    <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                        <i className="ri-team-line" style={{ fontSize: '3rem', color: '#ff7800', marginBottom: '1rem' }}></i>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Community</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Connect with cricket fans worldwide through our interactive features, polls, quizzes, and forums.
                        </p>
                    </div>

                    <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                        <i className="ri-bar-chart-box-line" style={{ fontSize: '3rem', color: '#ff7800', marginBottom: '1rem' }}></i>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Statistics</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Comprehensive player and team statistics, historical data, and detailed analytics.
                        </p>
                    </div>
                </div>

                {/* Story Section */}
                <div style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#ff7800' }}>Our Story</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        All-in-One Cricket was founded in 2025 with a vision to revolutionize how cricket fans 
                        experience their favorite sport. I recognized the need for a comprehensive platform that 
                        combines live scores, news, statistics, and community features all in one place.
                    </p>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        It has evolved into a full-featured cricket platform 
                        serving thousands of users worldwide. Our team of a passionate cricket enthusiast and a skilled 
                        developer work tirelessly to bring you the best cricket experience possible.
                    </p>
                    <p style={{ color: 'var(--text-primary)' }}>
                        Today, I continue to innovate and expand our features, always keeping my users' needs at 
                        the forefront. Whether you're a casual fan or a cricket expert, All-in-One Cricket is your 
                        home for everything cricket.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;