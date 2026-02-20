import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { players } from '../data/playersData';

const PlayerRankings = () => {
    const [selectedFormat, setSelectedFormat] = useState('test');
    const [selectedRole, setSelectedRole] = useState('all');

    const formats = ['test', 'odi', 't20'];
    const roles = ['all', 'Batsman', 'Bowler', 'All-rounder'];

    // Sort players by ranking for selected format
    const getSortedPlayers = () => {
        let filtered = players;

        if (selectedRole !== 'all') {
            filtered = players.filter(p => p.role === selectedRole);
        }

        return filtered
            .sort((a, b) => a.ranking[selectedFormat] - b.ranking[selectedFormat])
            .slice(0, 20);
    };

    const rankedPlayers = getSortedPlayers();

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
                        🏆 ICC Player Rankings
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)'
                    }}>
                        Official ICC rankings for cricket players worldwide
                    </p>
                </div>

                {/* Format Selector */}
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
                                    : '0 2px 8px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            {format}
                        </button>
                    ))}
                </div>

                {/* Role Filter */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {roles.map(role => (
                        <button
                            key={role}
                            onClick={() => setSelectedRole(role)}
                            style={{
                                padding: '0.8rem 1.5rem',
                                borderRadius: '25px',
                                border: '2px solid',
                                borderColor: selectedRole === role ? '#ff7800' : '#e5e7eb',
                                background: selectedRole === role ? '#ff7800' : 'transparent',
                                color: selectedRole === role ? 'white' : 'var(--text-primary)',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >
                            {role === 'all' ? 'All Roles' : role}
                        </button>
                    ))}
                </div>

                {/* Rankings Table */}
                <div style={{
                    background: 'var(--card-bg)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{
                        background: getFormatColor(selectedFormat),
                        color: 'white',
                        padding: '1.5rem 2rem',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        textTransform: 'uppercase'
                    }}>
                        {selectedFormat} Rankings - {selectedRole === 'all' ? 'All Players' : selectedRole}
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse'
                        }}>
                            <thead>
                                <tr style={{
                                    background: 'var(--body-bg)',
                                    borderBottom: '2px solid #e5e7eb'
                                }}>
                                    <th style={tableHeaderStyle}>Rank</th>
                                    <th style={{ ...tableHeaderStyle, textAlign: 'left' }}>Player</th>
                                    <th style={tableHeaderStyle}>Country</th>
                                    <th style={tableHeaderStyle}>Role</th>
                                    <th style={tableHeaderStyle}>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankedPlayers.map((player, index) => (
                                    <tr
                                        key={player.id}
                                        style={{
                                            borderBottom: '1px solid #e5e7eb',
                                            transition: 'all 0.3s',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'var(--body-bg)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                        }}
                                    >
                                        <td style={tableCellStyle}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                background: index < 3
                                                    ? `linear-gradient(135deg, ${getFormatColor(selectedFormat)} 0%, #764ba2 100%)`
                                                    : '#e5e7eb',
                                                color: index < 3 ? 'white' : 'var(--text-primary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: '700',
                                                fontSize: '1.1rem',
                                                margin: '0 auto'
                                            }}>
                                                {player.ranking[selectedFormat]}
                                            </div>
                                        </td>
                                        <td style={tableCellStyle}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1rem'
                                            }}>
                                                <img
                                                    src={player.image}
                                                    alt={player.name}
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <div>
                                                    <div style={{
                                                        fontWeight: '700',
                                                        color: 'var(--text-primary)',
                                                        fontSize: '1.1rem'
                                                    }}>
                                                        {player.name}
                                                    </div>
                                                    <div style={{
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-secondary)'
                                                    }}>
                                                        {player.battingStyle}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={tableCellStyle}>
                                            <span style={{
                                                padding: '0.4rem 1rem',
                                                background: 'var(--body-bg)',
                                                borderRadius: '20px',
                                                fontWeight: '600'
                                            }}>
                                                {player.country}
                                            </span>
                                        </td>
                                        <td style={tableCellStyle}>
                                            <span style={{
                                                padding: '0.4rem 1rem',
                                                background: '#ff780020',
                                                color: '#ff7800',
                                                borderRadius: '20px',
                                                fontWeight: '600',
                                                fontSize: '0.9rem'
                                            }}>
                                                {player.role}
                                            </span>
                                        </td>
                                        <td style={tableCellStyle}>
                                            <div style={{
                                                fontSize: '1.3rem',
                                                fontWeight: '700',
                                                color: getFormatColor(selectedFormat)
                                            }}>
                                                {(900 - player.ranking[selectedFormat] * 10).toFixed(0)}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Info Box */}
                <div style={{
                    marginTop: '2rem',
                    padding: '1.5rem',
                    background: '#ecfdf5',
                    borderRadius: '12px',
                    borderLeft: '4px solid #10b981'
                }}>
                    <div style={{
                        fontSize: '1rem',
                        color: '#065f46',
                        lineHeight: '1.6'
                    }}>
                        <strong>ℹ️ About ICC Rankings:</strong> The ICC Player Rankings are calculated based on
                        player performances in international cricket. Ratings are updated after each match and
                        reflect recent form and consistency. Players with higher ratings are ranked higher.
                    </div>
                </div>
            </div>
        </div>
    );
};

const tableHeaderStyle = {
    padding: '1rem',
    textAlign: 'center',
    fontWeight: '700',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
};

const tableCellStyle = {
    padding: '1.5rem 1rem',
    textAlign: 'center',
    color: 'var(--text-secondary)'
};

export default PlayerRankings;