import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { players } from '../data/playersData';

const PlayerBiography = () => {
    const { id } = useParams();
    const player = players.find(p => p.id === parseInt(id));

    if (!player) {
        return (
            <div style={{ minHeight: '100vh', padding: '3rem', textAlign: 'center' }}>
                <h2>Player not found</h2>
                <Link to="/player-profiles">← Back to Player Profiles</Link>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: '100vh',
            padding: '3rem 1rem',
            background: 'var(--body-bg)'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Back Button */}
                <Link to="/player-profiles" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ff7800',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                }}>
                    ← Back to Player Profiles
                </Link>

                {/* Player Header */}
                <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '20px',
                    padding: '3rem',
                    marginBottom: '3rem',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr',
                        gap: '3rem',
                        alignItems: 'center'
                    }}>
                        {/* Player Image */}
                        <div style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '5px solid white',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                        }}>
                            <img
                                src={player.image}
                                alt={player.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        {/* Player Info */}
                        <div>
                            <h1 style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                marginBottom: '0.5rem'
                            }}>
                                {player.name}
                            </h1>
                            <div style={{
                                fontSize: '1.3rem',
                                marginBottom: '1rem',
                                opacity: 0.9
                            }}>
                                {player.country} • {player.role}
                            </div>
                            <div style={{
                                display: 'flex',
                                gap: '2rem',
                                fontSize: '1rem',
                                opacity: 0.9
                            }}>
                                <div>
                                    <strong>Batting:</strong> {player.battingStyle}
                                </div>
                                <div>
                                    <strong>Bowling:</strong> {player.bowlingStyle}
                                </div>
                                <div>
                                    <strong>Age:</strong> {player.age}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Biography */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    marginBottom: '2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                    }}>
                        📖 Biography
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)'
                    }}>
                        {player.bio}
                    </p>
                </div>

                {/* Debut Information */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    marginBottom: '2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        🎯 International Debut
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        <div style={{
                            padding: '1.5rem',
                            background: 'var(--body-bg)',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '0.5rem'
                            }}>
                                Test Debut
                            </div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#667eea'
                            }}>
                                {player.debut.test}
                            </div>
                        </div>
                        <div style={{
                            padding: '1.5rem',
                            background: 'var(--body-bg)',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '0.5rem'
                            }}>
                                ODI Debut
                            </div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#10b981'
                            }}>
                                {player.debut.odi}
                            </div>
                        </div>
                        <div style={{
                            padding: '1.5rem',
                            background: 'var(--body-bg)',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '0.5rem'
                            }}>
                                T20 Debut
                            </div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#f59e0b'
                            }}>
                                {player.debut.t20}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Career Statistics */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    marginBottom: '2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        📊 Career Statistics
                    </h2>

                    {/* Test Stats */}
                    {player.stats.test && (
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                color: '#667eea',
                                marginBottom: '1rem'
                            }}>
                                Test Cricket
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '1rem'
                            }}>
                                {player.role !== 'Bowler' ? (
                                    <>
                                        <StatCard label="Matches" value={player.stats.test.matches} />
                                        <StatCard label="Runs" value={player.stats.test.runs} />
                                        <StatCard label="Average" value={player.stats.test.average} />
                                        <StatCard label="Centuries" value={player.stats.test.centuries} />
                                        <StatCard label="Fifties" value={player.stats.test.fifties} />
                                        <StatCard label="High Score" value={player.stats.test.highScore} />
                                    </>
                                ) : (
                                    <>
                                        <StatCard label="Matches" value={player.stats.test.matches} />
                                        <StatCard label="Wickets" value={player.stats.test.wickets} />
                                        <StatCard label="Average" value={player.stats.test.average} />
                                        <StatCard label="Best Bowling" value={player.stats.test.bestBowling} />
                                        <StatCard label="5 Wickets" value={player.stats.test.fiveWickets} />
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    {/* ODI Stats */}
                    {player.stats.odi && (
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                color: '#10b981',
                                marginBottom: '1rem'
                            }}>
                                ODI Cricket
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '1rem'
                            }}>
                                {player.role !== 'Bowler' ? (
                                    <>
                                        <StatCard label="Matches" value={player.stats.odi.matches} />
                                        <StatCard label="Runs" value={player.stats.odi.runs} />
                                        <StatCard label="Average" value={player.stats.odi.average} />
                                        <StatCard label="Centuries" value={player.stats.odi.centuries} />
                                        <StatCard label="Fifties" value={player.stats.odi.fifties} />
                                        <StatCard label="High Score" value={player.stats.odi.highScore} />
                                    </>
                                ) : (
                                    <>
                                        <StatCard label="Matches" value={player.stats.odi.matches} />
                                        <StatCard label="Wickets" value={player.stats.odi.wickets} />
                                        <StatCard label="Average" value={player.stats.odi.average} />
                                        <StatCard label="Best Bowling" value={player.stats.odi.bestBowling} />
                                        <StatCard label="5 Wickets" value={player.stats.odi.fiveWickets} />
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    {/* T20 Stats */}
                    {player.stats.t20 && (
                        <div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                color: '#f59e0b',
                                marginBottom: '1rem'
                            }}>
                                T20 Cricket
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '1rem'
                            }}>
                                {player.role !== 'Bowler' ? (
                                    <>
                                        <StatCard label="Matches" value={player.stats.t20.matches} />
                                        <StatCard label="Runs" value={player.stats.t20.runs} />
                                        <StatCard label="Average" value={player.stats.t20.average} />
                                        <StatCard label="Centuries" value={player.stats.t20.centuries} />
                                        <StatCard label="Fifties" value={player.stats.t20.fifties} />
                                        <StatCard label="High Score" value={player.stats.t20.highScore} />
                                    </>
                                ) : (
                                    <>
                                        <StatCard label="Matches" value={player.stats.t20.matches} />
                                        <StatCard label="Wickets" value={player.stats.t20.wickets} />
                                        <StatCard label="Average" value={player.stats.t20.average} />
                                        <StatCard label="Best Bowling" value={player.stats.t20.bestBowling} />
                                        <StatCard label="5 Wickets" value={player.stats.t20.fiveWickets} />
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Current Rankings */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    marginBottom: '2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        🏆 ICC Rankings
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        <RankingCard format="Test" rank={player.ranking.test} color="#667eea" />
                        <RankingCard format="ODI" rank={player.ranking.odi} color="#10b981" />
                        <RankingCard format="T20" rank={player.ranking.t20} color="#f59e0b" />
                    </div>
                </div>

                {/* Achievements */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        🏅 Career Achievements
                    </h2>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        {player.achievements.map((achievement, index) => (
                            <li key={index} style={{
                                padding: '1rem',
                                background: index % 2 === 0 ? 'var(--body-bg)' : 'transparent',
                                borderRadius: '8px',
                                marginBottom: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                fontSize: '1rem',
                                color: 'var(--text-secondary)'
                            }}>
                                <span style={{
                                    fontSize: '1.5rem',
                                    flexShrink: 0
                                }}>
                                    ✓
                                </span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const StatCard = ({ label, value }) => (
    <div style={{
        padding: '1rem',
        background: 'var(--body-bg)',
        borderRadius: '8px',
        textAlign: 'center'
    }}>
        <div style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            marginBottom: '0.5rem'
        }}>
            {label}
        </div>
        <div style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)'
        }}>
            {value}
        </div>
    </div>
);

const RankingCard = ({ format, rank, color }) => (
    <div style={{
        padding: '2rem',
        background: 'var(--body-bg)',
        borderRadius: '10px',
        textAlign: 'center',
        border: `3px solid ${color}20`,
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '80px',
            height: '80px',
            background: color,
            opacity: 0.1,
            borderRadius: '50%'
        }}></div>
        <div style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            marginBottom: '0.5rem'
        }}>
            {format} Ranking
        </div>
        <div style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: color
        }}>
            #{rank}
        </div>
    </div>
);

export default PlayerBiography;