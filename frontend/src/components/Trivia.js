import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Trivia = () => {
    const [revealedCards, setRevealedCards] = useState({});

    const triviaFacts = [
        // Bangladesh Facts (5 total)
        {
            category: 'Bangladesh Records',
            icon: '🏆',
            fact: 'Shakib Al Hasan is the only player in cricket history to score 4000+ runs and take 250+ wickets in both Tests and ODIs.',
            color: '#ff7800'
        },
        {
            category: 'Historic Moment',
            icon: '🎉',
            fact: 'Bangladesh gained Test status on June 26, 2000, becoming the 10th Test-playing nation in cricket history.',
            color: '#ff7800'
        },
        {
            category: 'Bangladesh Glory',
            icon: '🏏',
            fact: 'Bangladesh reached their first Cricket World Cup quarter-final in 2015, defeating England in a historic group stage match.',
            color: '#ff7800'
        },
        {
            category: 'Bangladesh Star',
            icon: '⚡',
            fact: 'Mustafizur Rahman took 5 wickets for 50 runs on his ODI debut against India in 2015, earning the nickname "The Fizz".',
            color: '#ff7800'
        },
        {
            category: 'Bangladesh Venue',
            icon: '🏟️',
            fact: 'The Shere Bangla National Stadium in Mirpur has a capacity of 26,000 and is the home ground of the Bangladesh national team.',
            color: '#ff7800'
        },

        // Australia Facts (3 total)
        {
            category: 'Australian Legend',
            icon: '🎖️',
            fact: 'Don Bradman has the highest Test batting average in history at 99.94, a record that has stood for over 70 years.',
            color: '#ff7800'
        },
        {
            category: 'Australian Record',
            icon: '🏆',
            fact: 'Australia has won the Cricket World Cup 5 times (1987, 1999, 2003, 2007, 2015), more than any other nation.',
            color: '#ff7800'
        },
        {
            category: 'MCG',
            icon: '🏟️',
            fact: 'The Melbourne Cricket Ground (MCG) is the largest cricket stadium in the world with a capacity of 100,024.',
            color: '#ff7800'
        },

        // Pakistan Facts (2 total)
        {
            category: 'Pakistan Speed',
            icon: '⚡',
            fact: 'Shoaib Akhtar from Pakistan bowled the fastest ball in cricket history at 161.3 km/h (100.2 mph) in 2003.',
            color: '#ff7800'
        },
        {
            category: 'Pakistan World Cup',
            icon: '🏆',
            fact: 'Pakistan won the 1992 Cricket World Cup under Imran Khan\'s captaincy after a dramatic comeback in the tournament.',
            color: '#ff7800'
        },

        // Sri Lanka Facts (2 total)
        {
            category: 'Sri Lankan Record',
            icon: '🎯',
            fact: 'Muttiah Muralitharan from Sri Lanka holds the record for most wickets in Test cricket with 800 wickets.',
            color: '#ff7800'
        },
        {
            category: 'Sri Lankan Triumph',
            icon: '🏆',
            fact: 'Sri Lanka won the 1996 Cricket World Cup, with Aravinda de Silva scoring a match-winning century in the final.',
            color: '#ff7800'
        },

        // England Facts (2 total)
        {
            category: 'England Heritage',
            icon: '🏛️',
            fact: 'Lord\'s Cricket Ground in London, known as the "Home of Cricket", was established in 1814 and is the oldest cricket ground.',
            color: '#ff7800'
        },
        {
            category: 'England Glory',
            icon: '🏆',
            fact: 'England won their first Cricket World Cup in 2019 in a dramatic super over against New Zealand at Lord\'s.',
            color: '#ff7800'
        },

        // West Indies Facts (2 total)
        {
            category: 'West Indies Power',
            icon: '💪',
            fact: 'Brian Lara from West Indies holds the record for the highest individual Test score of 400 not out against England in 2004.',
            color: '#ff7800'
        },
        {
            category: 'West Indies Legacy',
            icon: '🏆',
            fact: 'West Indies won the first two Cricket World Cups in 1975 and 1979, dominating world cricket in that era.',
            color: '#ff7800'
        },

        // South Africa Facts (2 total)
        {
            category: 'South African Star',
            icon: '⚡',
            fact: 'AB de Villiers from South Africa scored the fastest ODI century off just 31 balls against West Indies in 2015.',
            color: '#ff7800'
        },
        {
            category: 'South African Venue',
            icon: '🏔️',
            fact: 'Newlands Cricket Ground in Cape Town is considered one of the most scenic cricket venues with Table Mountain as a backdrop.',
            color: '#ff7800'
        },

        // New Zealand Facts (2 total)
        {
            category: 'New Zealand Hero',
            icon: '🎖️',
            fact: 'Kane Williamson led New Zealand to their first World Test Championship title in 2021, defeating India in the final.',
            color: '#ff7800'
        },
        {
            category: 'New Zealand Spirit',
            icon: '🏏',
            fact: 'New Zealand are known for their sportsmanship and have won the ICC Spirit of Cricket award multiple times.',
            color: '#ff7800'
        }
    ];

    const toggleCard = (index) => {
        setRevealedCards({
            ...revealedCards,
            [index]: !revealedCards[index]
        });
    };

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Back Button */}
                <Link to="/dashboard" style={{
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
                    ← Back to Dashboard
                </Link>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        ✨ Cricket Trivia
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Discover 20 fascinating cricket facts from around the world! Click cards to reveal.
                    </p>
                </div>

                {/* Trivia Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {triviaFacts.map((trivia, index) => {
                        const isRevealed = revealedCards[index];

                        return (
                            <div
                                key={index}
                                onClick={() => toggleCard(index)}
                                style={{
                                    background: 'var(--card-bg)',
                                    borderRadius: '20px',
                                    padding: '2rem',
                                    minHeight: '250px',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s ease',
                                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                                    border: '2px solid transparent',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
                                    e.currentTarget.style.borderColor = trivia.color;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                }}
                            >
                                {!isRevealed ? (
                                    // Front of card
                                    <>
                                        <div style={{
                                            fontSize: '4rem',
                                            marginBottom: '1rem',
                                            animation: 'float 3s ease-in-out infinite'
                                        }}>
                                            {trivia.icon}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.5rem',
                                            color: trivia.color,
                                            fontWeight: '700',
                                            marginBottom: '1rem'
                                        }}>
                                            {trivia.category}
                                        </h3>
                                        <p style={{
                                            fontSize: '1rem',
                                            color: 'var(--text-secondary)',
                                            fontWeight: '600'
                                        }}>
                                            Click to reveal
                                        </p>
                                    </>
                                ) : (
                                    // Back of card (revealed)
                                    <>
                                        <div style={{
                                            fontSize: '2.5rem',
                                            marginBottom: '1rem'
                                        }}>
                                            {trivia.icon}
                                        </div>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '0.5rem 1rem',
                                            background: trivia.color,
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '700',
                                            marginBottom: '1rem'
                                        }}>
                                            {trivia.category}
                                        </div>
                                        <p style={{
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            color: 'var(--text-primary)',
                                            animation: 'fadeIn 0.5s ease'
                                        }}>
                                            {trivia.fact}
                                        </p>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)',
                                            fontWeight: '600',
                                            marginTop: '1rem'
                                        }}>
                                            Click to hide
                                        </p>
                                    </>
                                )}

                                {/* Decorative corner element */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '-20px',
                                    width: '80px',
                                    height: '80px',
                                    background: trivia.color,
                                    opacity: 0.1,
                                    borderRadius: '50%',
                                    transition: 'all 0.3s ease'
                                }}></div>
                            </div>
                        );
                    })}
                </div>

                {/* Fun Fact */}
                <div style={{
                    marginTop: '3rem',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                    borderRadius: '20px',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>
                        🌍 Cricket Around the World
                    </h3>
                    <p style={{ fontSize: '1rem', opacity: 0.95 }}>
                        Cricket is the second most popular sport in the world with over 2.5 billion fans globally,
                        played in more than 100 countries across all continents!
                    </p>
                </div>

                {/* Animations */}
                <style>{`
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }

                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: scale(0.95);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Trivia;