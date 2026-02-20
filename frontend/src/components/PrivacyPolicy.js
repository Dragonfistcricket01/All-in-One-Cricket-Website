import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <i className="ri-shield-check-line" style={{ color: '#ff7800' }}></i>
                        Privacy Policy
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                        Last updated: October 12, 2025
                    </p>
                </div>

                <div style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>1. Information We Collect</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            We collect information you provide directly to us, including:
                        </p>
                        <ul style={{ marginLeft: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            <li>Name and email address when you register</li>
                            <li>Profile information and preferences</li>
                            <li>Communications with us</li>
                            <li>Usage data and analytics</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>2. How We Use Your Information</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            We use the information we collect to:
                        </p>
                        <ul style={{ marginLeft: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            <li>Provide, maintain, and improve our services</li>
                            <li>Send you technical notices and support messages</li>
                            <li>Respond to your comments and questions</li>
                            <li>Personalize your experience</li>
                            <li>Monitor and analyze trends and usage</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>3. Information Sharing</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            We do not share your personal information with third parties except:
                        </p>
                        <ul style={{ marginLeft: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            <li>With your consent</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect our rights and safety</li>
                            <li>With service providers who assist us</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>4. Data Security</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            We implement appropriate technical and organizational measures to protect your personal information.
                            However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>5. Your Rights</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            You have the right to:
                        </p>
                        <ul style={{ marginLeft: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            <li>Access your personal information</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>6. Cookies</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            We use cookies and similar tracking technologies to track activity on our service.
                            You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>7. Changes to This Policy</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by
                            posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>8. Contact Us</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;