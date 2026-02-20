import React from 'react';
import { Link } from 'react-router-dom';

const CricketLaws = () => {
    const laws = [
        {
            law: 'Law 1',
            title: 'The Players',
            content: 'A match is played between two sides, each of eleven players, one of whom shall be captain.'
        },
        {
            law: 'Law 2',
            title: 'The Umpires',
            content: 'There shall be two umpires who shall control the game according to the Laws, with absolute impartiality.'
        },
        {
            law: 'Law 3',
            title: 'The Scorers',
            content: 'Two scorers shall be appointed to record all runs scored, wickets taken, and overs bowled.'
        },
        {
            law: 'Law 4',
            title: 'The Ball',
            content: 'The ball shall be red for Test matches and white for limited-overs matches, with specific weight and circumference requirements.'
        },
        {
            law: 'Law 5',
            title: 'The Bat',
            content: 'The bat shall not exceed 38 inches in length and 4.25 inches in width, made primarily of wood.'
        },
        {
            law: 'Law 6',
            title: 'The Pitch',
            content: 'The pitch is a rectangular area of 22 yards (20.12 meters) between the wickets, carefully prepared and maintained.'
        },
        {
            law: 'Law 7',
            title: 'The Creases',
            content: 'Four creases are marked: bowling crease, popping crease, and two return creases at each end.'
        },
        {
            law: 'Law 8',
            title: 'The Wickets',
            content: 'Two sets of wickets shall be pitched opposite each other, each consisting of three stumps and two bails.'
        },
        {
            law: 'Law 9',
            title: 'Preparation & Maintenance',
            content: 'The pitch must be prepared according to Laws and maintained during the match under umpire supervision.'
        },
        {
            law: 'Law 10',
            title: 'Covering the Pitch',
            content: 'Covers may be used to protect the pitch before and during the match as per playing conditions.'
        },
        {
            law: 'Law 11',
            title: 'Intervals',
            content: 'Specific intervals for lunch, tea, and drinks breaks shall be taken as per playing conditions.'
        },
        {
            law: 'Law 12',
            title: 'Start of Play',
            content: 'Play shall not commence until the umpires are satisfied that all conditions are suitable.'
        }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Back Button */}
                <Link to="/rules-laws-regulations" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ff7800',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                }}>
                    ← Back to Rules, Laws & Regulations
                </Link>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        ⚖️ Cricket Laws
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Official laws of cricket as defined by the Marylebone Cricket Club (MCC)
                    </p>
                </div>

                {/* Laws Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {laws.map((law, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'var(--card-bg)',
                                padding: '1.8rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                borderTop: '3px solid #ff6300',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <div style={{
                                fontSize: '0.9rem',
                                color: '#ff6300',
                                fontWeight: '700',
                                marginBottom: '0.5rem'
                            }}>
                                {law.law}
                            </div>
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '0.8rem',
                                color: 'var(--text-primary)',
                                fontWeight: '700'
                            }}>
                                {law.title}
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                color: 'var(--text-secondary)'
                            }}>
                                {law.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <div style={{
                    marginTop: '3rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 120, 0, 0.1)',
                    borderRadius: '12px',
                    borderLeft: '4px solid #ff6300'
                }}>
                    <p style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>
                        📚 Note:
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        The Laws of Cricket are maintained by the Marylebone Cricket Club (MCC) and consist of 42 laws in total.
                        These are the fundamental laws that govern all forms of cricket worldwide.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CricketLaws;