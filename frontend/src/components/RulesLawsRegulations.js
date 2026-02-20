import React from 'react';
import { useNavigate } from 'react-router-dom';

const RulesLawsRegulations = () => {
    const navigate = useNavigate();

    const sections = [
        {
            title: 'Cricket Rules',
            icon: '📋',
            emoji: '📋',
            gradient: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
            description: 'Learn the fundamental rules that govern the game of cricket',
            path: '/cricket-rules'
        },
        {
            title: 'Cricket Laws',
            icon: '⚖️',
            emoji: '⚖️',
            gradient: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
            description: 'Explore the official laws as defined by the MCC',
            path: '/cricket-laws'
        },
        {
            title: 'Cricket Regulations',
            icon: '📜',
            emoji: '📜',
            gradient: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
            description: 'Understand tournament and match regulations',
            path: '/cricket-regulations'
        }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        🏏 Cricket Rules, Laws & Regulations
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        Choose a section to explore and understand the game better
                    </p>
                </div>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(section.path)}
                            style={{
                                background: 'var(--card-bg)',
                                borderRadius: '20px',
                                padding: '2.5rem',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                minHeight: '300px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                                e.currentTarget.style.borderColor = '#ff7800';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                e.currentTarget.style.borderColor = 'transparent';
                            }}
                        >
                            {/* Icon Circle */}
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: section.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                                marginBottom: '1.5rem',
                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                            }}>
                                {section.emoji}
                            </div>

                            {/* Title */}
                            <h2 style={{
                                fontSize: '1.8rem',
                                marginBottom: '1rem',
                                color: 'var(--text-primary)',
                                fontWeight: '700'
                            }}>
                                {section.title}
                            </h2>

                            {/* Description */}
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-secondary)',
                                lineHeight: '1.6',
                                marginBottom: '2rem'
                            }}>
                                {section.description}
                            </p>

                            {/* Button */}
                            <button style={{
                                marginTop: 'auto',
                                padding: '0.8rem 2rem',
                                background: section.gradient,
                                color: 'white',
                                border: 'none',
                                borderRadius: '25px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                            }}>
                                Learn More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RulesLawsRegulations;