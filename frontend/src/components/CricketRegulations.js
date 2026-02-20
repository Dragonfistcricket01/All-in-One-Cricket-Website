import React from 'react';
import { Link } from 'react-router-dom';

const CricketRegulations = () => {
    const regulations = [
        {
            category: 'Match Regulations',
            items: [
                'Match duration and timing',
                'Number of overs per match',
                'Powerplay overs restrictions',
                'Field restrictions during different phases',
                'Substitute player rules'
            ]
        },
        {
            category: 'Player Regulations',
            items: [
                'Player eligibility requirements',
                'Maximum squad size',
                'Overseas player limits',
                'Player registration process',
                'Transfer window rules'
            ]
        },
        {
            category: 'Equipment Regulations',
            items: [
                'Approved bat specifications',
                'Protective gear requirements',
                'Ball testing and approval',
                'Pitch preparation standards',
                'Boundary dimensions'
            ]
        },
        {
            category: 'Conduct Regulations',
            items: [
                'Code of conduct for players',
                'Anti-corruption measures',
                'Doping and anti-doping policies',
                'Social media guidelines',
                'Disciplinary procedures'
            ]
        },
        {
            category: 'Tournament Regulations',
            items: [
                'Qualification criteria',
                'Points system',
                'Net run rate calculations',
                'Tiebreaker rules',
                'Weather-affected match procedures'
            ]
        },
        {
            category: 'Broadcasting Regulations',
            items: [
                'Media rights and restrictions',
                'Player interview protocols',
                'Camera placement guidelines',
                'Broadcast time-outs',
                'Commercial break rules'
            ]
        }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
                        📜 Cricket Regulations
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Tournament and match regulations for modern cricket
                    </p>
                </div>

                {/* Regulations Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {regulations.map((regulation, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(255, 120, 0, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                                e.currentTarget.style.borderColor = '#ff6300';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(255, 120, 0, 0.3)';
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.4rem',
                                marginBottom: '1.5rem',
                                color: 'var(--text-primary)',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <span style={{ color: '#ff6300' }}>▸</span>
                                {regulation.category}
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.8rem'
                            }}>
                                {regulation.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        style={{
                                            fontSize: '1rem',
                                            color: 'var(--text-secondary)',
                                            paddingLeft: '1.5rem',
                                            position: 'relative',
                                            lineHeight: '1.5'
                                        }}
                                    >
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: '#ff6300',
                                            fontWeight: 'bold'
                                        }}>
                                            •
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div style={{
                    marginTop: '3rem',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                    borderRadius: '12px',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>
                        Important Notice
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.95 }}>
                        Regulations may vary by tournament and cricket board. Always refer to the specific
                        tournament's playing conditions and regulations document for accurate information.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CricketRegulations;