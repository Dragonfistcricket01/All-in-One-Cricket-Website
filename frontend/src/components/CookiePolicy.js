import React from 'react';

const CookiePolicy = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <i className="ri-cookie-line" style={{ color: '#ff7800' }}></i>
                        Cookie Policy
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                        Last updated: October 12, 2025
                    </p>
                </div>

                <div style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>What Are Cookies?</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            Cookies are small text files that are placed on your device when you visit our website.
                            They help us provide you with a better experience by remembering your preferences and
                            understanding how you use our site.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>Types of Cookies We Use</h2>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>1. Essential Cookies</h3>
                        <p style={{ color: 'var(--text-primary)' }}>
                            These cookies are necessary for the website to function properly. They enable core functionality
                            such as security, network management, and accessibility.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>2. Preference Cookies</h3>
                        <p style={{ color: 'var(--text-primary)' }}>
                            These cookies allow our website to remember your preferences, such as your language choice or
                            theme preference (light/dark mode).
                        </p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>3. Analytics Cookies</h3>
                        <p style={{ color: 'var(--text-primary)' }}>
                            These cookies help us understand how visitors interact with our website by collecting and
                            reporting information anonymously.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>4. Marketing Cookies</h3>
                        <p style={{ color: 'var(--text-primary)' }}>
                            These cookies track your online activity to help us deliver more relevant advertising or
                            to limit how many times you see an ad.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>How We Use Cookies</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            We use cookies to:
                        </p>
                        <ul style={{ marginLeft: '2rem', color: 'var(--text-primary)' }}>
                            <li>Keep you signed in to your account</li>
                            <li>Remember your preferences and settings</li>
                            <li>Understand how you use our website</li>
                            <li>Improve our services and user experience</li>
                            <li>Provide personalized content and features</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>Managing Cookies</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            You can control and manage cookies in various ways:
                        </p>
                        <ul style={{ marginLeft: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            <li>Through your browser settings (disable or delete cookies)</li>
                            <li>Through our cookie consent banner</li>
                            <li>Using browser extensions that block cookies</li>
                        </ul>
                        <p style={{ background: 'rgba(255, 120, 0, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ff7800', color: 'var(--text-primary)' }}>
                            <strong>Note:</strong> Disabling cookies may affect the functionality of our website
                            and limit your access to certain features.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>Third-Party Cookies</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            We may use third-party services that also set cookies on our website. These services help us
                            with analytics, advertising, and social media integration. We do not control these third-party cookies.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>Updates to This Policy</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            We may update this Cookie Policy from time to time. Any changes will be posted on this page
                            with an updated revision date.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>Contact Us</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            If you have any questions about our use of cookies, please contact us at:
                        </p>
                        <p style={{ marginTop: '1rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                            Email: info@allinonecricket.com<br />
                            Phone: +880 1234567891
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;