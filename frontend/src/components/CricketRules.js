import React from 'react';
import { Link } from 'react-router-dom';

const CricketRules = () => {
    const rules = [
        {
            title: 'The Players',
            content: 'A cricket match is played between two teams of eleven players each. One team bats while the other bowls and fields.'
        },
        {
            title: 'The Toss',
            content: 'Before the match, the captains toss a coin. The winner decides whether to bat or bowl first.'
        },
        {
            title: 'Innings',
            content: 'Each team has one or two innings to bat, depending on the format. An innings ends when 10 batsmen are out or overs are completed.'
        },
        {
            title: 'Scoring Runs',
            content: 'Batsmen score runs by hitting the ball and running between wickets. A ball crossing the boundary scores 4 runs (along ground) or 6 runs (over boundary).'
        },
        {
            title: 'Getting Out',
            content: 'Batsmen can be dismissed in various ways: bowled, caught, LBW (leg before wicket), run out, stumped, hit wicket, and more.'
        },
        {
            title: 'Overs',
            content: 'An over consists of six legal deliveries bowled by one bowler. After each over, a different bowler must bowl from the opposite end.'
        },
        {
            title: 'No Ball',
            content: 'If the bowler oversteps the crease or bowls improperly, it\'s called a no ball. The batting team gets an extra run and the ball must be re-bowled.'
        },
        {
            title: 'Wide Ball',
            content: 'If the ball is bowled too far from the batsman to hit, it\'s called a wide. The batting team gets an extra run.'
        },
        {
            title: 'Dead Ball',
            content: 'The ball becomes dead when it\'s finally settled in the hands of the wicket-keeper or bowler, or when a boundary is scored.'
        },
        {
            title: 'Win Condition',
            content: 'The team that scores the most runs wins. If runs are equal, the match is a tie or draw depending on the format.'
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
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                }}>
                    ← Back to Rules, Laws & Regulations
                </Link>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        📋 Cricket Rules
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Fundamental rules that govern the game of cricket
                    </p>
                </div>

                {/* Rules List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {rules.map((rule, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                borderLeft: '4px solid #ff6300',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(5px)';
                                e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.3rem',
                                marginBottom: '0.8rem',
                                color: 'var(--text-primary)',
                                fontWeight: '700'
                            }}>
                                {index + 1}. {rule.title}
                            </h3>
                            <p style={{
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)'
                            }}>
                                {rule.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CricketRules;