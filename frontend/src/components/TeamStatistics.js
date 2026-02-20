import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../data/playersData';

const TeamStatistics = () => {
    const [selectedTeam, setSelectedTeam] = useState(teams[0].id);
    const [selectedFormat, setSelectedFormat] = useState('test');

    const team = teams.find(t => t.id === selectedTeam);
    const formats = ['test', 'odi', 't20'];

    const getFormatColor = (format) => {
        const colors = {
            test: '#667eea',
            odi: '#10b981',
            t20: '#f59e0b'
        };
        return colors[format];
    };

    return (
        <div style={{
            minHeight: '100vh',
            padding: '3rem 1rem',
            background: 'var(--body-bg)'
        }}>
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
                    fontWeight: '600'
                }}>
                    ← Back to Dashboard
                </Link>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                    }}>
                        📊 Team Statistics
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)'
                    }}>
                        Detailed performance statistics for international cricket teams
                    </p>
                </div>

                {/* Team Selector */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                }}>
                    {teams.map(t => (
                        <button
                            key={t.id}
                            onClick={() => setSelectedTeam(t.id)}
                            style={{
                                padding: '1rem 1.5rem',
                                borderRadius: '12px',
                                border: selectedTeam === t.id ? '3px solid #ff7800' : '2px solid #e5e7eb',
                                background: selectedTeam === t.id ? '#ff780020' : 'var(--card-bg)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>{t.flag}</span>
                            <span>{t.name}</span>
                        </button>
                    ))}
                </div>

                {/* Team Header Card */}
                <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '20px',
                    padding: '3rem',
                    marginBottom: '3rem',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>
                        {team.flag}
                    </div>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        marginBottom: '1rem'
                    }}>
                        {team.name}
                    </h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        fontSize: '1.1rem',
                        marginTop: '1.5rem',
                        flexWrap: 'wrap'
                    }}>
                        <div>
                            <strong>Captain:</strong> {team.captain}
                        </div>
                        <div>
                            <strong>Coach:</strong> {team.coach}
                        </div>
                        <div>
                            <strong>World Cups:</strong> {team.worldCups.odi + team.worldCups.t20}
                        </div>
                    </div>
                </div>

                {/* Format Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                }}>
                    {formats.map(format => (
                        <button
                            key={format}
                            onClick={() => setSelectedFormat(format)}
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '12px',
                                border: 'none',
                                background: selectedFormat === format
                                    ? getFormatColor(format)
                                    : 'var(--card-bg)',
                                color: selectedFormat === format ? 'white' : 'var(--text-primary)',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                textTransform: 'uppercase',
                                boxShadow: selectedFormat === format
                                    ? `0 4px 15px ${getFormatColor(format)}40`
                                    : 'none'
                            }}
                        >
                            {format}
                        </button>
                    ))}
                </div>

                {/* Current Ranking */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    marginBottom: '2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                    }}>
                        Current ICC Ranking
                    </h3>
                    <div style={{
                        fontSize: '4rem',
                        fontWeight: '700',
                        color: getFormatColor(selectedFormat)
                    }}>
                        #{team.ranking[selectedFormat]}
                    </div>
                </div>

                {/* Detailed Statistics */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    marginBottom: '2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                    }}>
                        {selectedFormat.toUpperCase()} Statistics
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem'
                    }}>
                        <StatCard
                            label="Total Matches"
                            value={team.stats[selectedFormat].matches}
                            color="#667eea"
                        />
                        <StatCard
                            label="Matches Won"
                            value={team.stats[selectedFormat].won}
                            color="#10b981"
                        />
                        <StatCard
                            label="Matches Lost"
                            value={team.stats[selectedFormat].lost}
                            color="#ef4444"
                        />
                        {team.stats[selectedFormat].draw !== undefined && (
                            <StatCard
                                label="Draws"
                                value={team.stats[selectedFormat].draw}
                                color="#f59e0b"
                            />
                        )}
                        <StatCard
                            label="Win Rate"
                            value={`${team.stats[selectedFormat].winRate}%`}
                            color="#8b5cf6"
                        />
                    </div>
                </div>

                {/* Win Rate Visualization */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    marginBottom: '2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                    }}>
                        Performance Breakdown
                    </h3>

                    {/* Win/Loss Bar */}
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{
                            display: 'flex',
                            height: '60px',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div style={{
                                width: `${(team.stats[selectedFormat].won / team.stats[selectedFormat].matches) * 100}%`,
                                background: '#10b981',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '1.1rem'
                            }}>
                                Won {team.stats[selectedFormat].won}
                            </div>
                            {team.stats[selectedFormat].draw !== undefined && (
                                <div style={{
                                    width: `${(team.stats[selectedFormat].draw / team.stats[selectedFormat].matches) * 100}%`,
                                    background: '#f59e0b',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: '700',
                                    fontSize: '1.1rem'
                                }}>
                                    Draw {team.stats[selectedFormat].draw}
                                </div>
                            )}
                            <div style={{
                                width: `${(team.stats[selectedFormat].lost / team.stats[selectedFormat].matches) * 100}%`,
                                background: '#ef4444',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '1.1rem'
                            }}>
                                Lost {team.stats[selectedFormat].lost}
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginTop: '1rem',
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)'
                        }}>
                            <div>✓ Wins: {team.stats[selectedFormat].won}</div>
                            {team.stats[selectedFormat].draw !== undefined && (
                                <div>≈ Draws: {team.stats[selectedFormat].draw}</div>
                            )}
                            <div>✗ Losses: {team.stats[selectedFormat].lost}</div>
                        </div>
                    </div>
                </div>

                {/* World Cup Achievements */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        🏆 World Cup Achievements
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '2rem'
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
                                ODI World Cups
                            </div>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                color: '#10b981'
                            }}>
                                {team.worldCups.odi}
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
                                T20 World Cups
                            </div>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                color: '#f59e0b'
                            }}>
                                {team.worldCups.t20}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                        }}>
                            Championship Titles
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            {team.worldCups.champions.map((title, index) => (
                                <li key={index} style={{
                                    padding: '1rem',
                                    background: index % 2 === 0 ? 'var(--body-bg)' : 'transparent',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontSize: '1rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '0.5rem'
                                }}>
                                    <span style={{ fontSize: '1.5rem' }}>🏆</span>
                                    <span>{title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ label, value, color }) => (
    <div style={{
        padding: '2rem',
        background: 'var(--body-bg)',
        borderRadius: '12px',
        textAlign: 'center',
        border: `3px solid ${color}20`,
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '100px',
            height: '100px',
            background: color,
            opacity: 0.1,
            borderRadius: '50%'
        }}></div>
        <div style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        }}>
            {label}
        </div>
        <div style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: color
        }}>
            {value}
        </div>
    </div>
);

export default TeamStatistics;