import React from 'react';

const TermsOfService = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <i className="ri-file-text-line" style={{ color: '#ff7800' }}></i>
                        Terms of Service
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                        Last updated: October 12, 2025
                    </p>
                </div>

                <div style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>1. Agreement to Terms</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            By accessing and using All-in-One Cricket ("Service"), you agree to be bound by these Terms of Service.
                            If you disagree with any part of these terms, you may not access the Service.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>2. Use License</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            Permission is granted to temporarily access the materials on All-in-One Cricket for personal,
                            non-commercial use only. This license shall automatically terminate if you violate any of these restrictions.
                        </p>
                        <p style={{ fontWeight: '600', marginTop: '1rem', color: 'var(--text-primary)' }}>You may not:</p>
                        <ul style={{ marginLeft: '2rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for commercial purposes</li>
                            <li>Attempt to reverse engineer any software</li>
                            <li>Remove any copyright or proprietary notations</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>3. User Accounts</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            When you create an account with us, you must provide accurate and complete information.
                            You are responsible for:
                        </p>
                        <ul style={{ marginLeft: '2rem', color: 'var(--text-primary)' }}>
                            <li>Maintaining the security of your account</li>
                            <li>All activities that occur under your account</li>
                            <li>Immediately notifying us of any unauthorized use</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>4. User Content</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            Our Service allows you to post, link, and share content. You are responsible for the content
                            you post and must ensure it complies with our guidelines.
                        </p>
                        <p style={{ fontWeight: '600', marginTop: '1rem', color: 'var(--text-primary)' }}>You agree not to post content that:</p>
                        <ul style={{ marginLeft: '2rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>
                            <li>Is illegal, harmful, or offensive</li>
                            <li>Infringes on intellectual property rights</li>
                            <li>Contains spam or malicious code</li>
                            <li>Violates any applicable laws or regulations</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>5. Intellectual Property</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            The Service and its original content, features, and functionality are owned by All-in-One Cricket
                            and are protected by international copyright, trademark, and other intellectual property laws.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>6. Disclaimer</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            The materials on All-in-One Cricket are provided on an 'as is' basis. We make no warranties,
                            expressed or implied, and hereby disclaim all other warranties including merchantability or
                            fitness for a particular purpose.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>7. Limitations</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            In no event shall All-in-One Cricket or its suppliers be liable for any damages arising out of
                            the use or inability to use the materials on our Service.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>8. Termination</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            We may terminate or suspend your account and access to the Service immediately, without prior notice,
                            for any reason, including breach of these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff7800' }}>9. Contact Information</h2>
                        <p style={{ color: 'var(--text-primary)' }}>
                            If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;