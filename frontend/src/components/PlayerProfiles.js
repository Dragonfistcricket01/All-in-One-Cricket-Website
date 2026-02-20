import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { players } from '../data/playersData';

const PlayerProfiles = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [selectedRole, setSelectedRole] = useState('all');

    const countries = ['all', ...new Set(players.map(p => p.country))];
    const roles = ['all', 'Batsman', 'Bowler', 'All-rounder', 'Wicket-keeper'];

    const filteredPlayers = players.filter(player => {
        const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            player.country.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCountry = selectedCountry === 'all' || player.country === selectedCountry;
        const matchesRole = selectedRole === 'all' || player.role === selectedRole;

        return matchesSearch && matchesCountry && matchesRole;
    });

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
                        👤 Player Profiles
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)'
                    }}>
                        Explore profiles of top cricket players from around the world
                    </p>
                </div>

                {/* Search and Filters */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    marginBottom: '3rem'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {/* Search */}
                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>
                                🔍 Search Player
                            </label>
                            <input
                                type="text"
                                placeholder="Search by name or country..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '2px solid #e5e7eb',
                                    fontSize: '1rem',
                                    background: 'var(--body-bg)',
                                    color: 'var(--text-primary)'
                                }}
                            />
                        </div>

                        {/* Country Filter */}
                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>
                                🌍 Country
                            </label>
                            <select
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '2px solid #e5e7eb',
                                    fontSize: '1rem',
                                    background: 'var(--body-bg)',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer'
                                }}
                            >
                                {countries.map(country => (
                                    <option key={country} value={country}>
                                        {country === 'all' ? 'All Countries' : country}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Role Filter */}
                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>
                                🏏 Role
                            </label>
                            <select
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '2px solid #e5e7eb',
                                    fontSize: '1rem',
                                    background: 'var(--body-bg)',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer'
                                }}
                            >
                                {roles.map(role => (
                                    <option key={role} value={role}>
                                        {role === 'all' ? 'All Roles' : role}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div style={{
                        marginTop: '1rem',
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        textAlign: 'center'
                    }}>
                        Showing {filteredPlayers.length} of {players.length} players
                    </div>
                </div>

                {/* Players Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredPlayers.map(player => (
                        <div
                            key={player.id}
                            onClick={() => navigate(`/player-biography/${player.id}`)}
                            style={{
                                background: 'var(--card-bg)',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 120, 0, 0.3)';
                                e.currentTarget.style.borderColor = '#ff7800';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                                e.currentTarget.style.borderColor = 'transparent';
                            }}
                        >
                            {/* Player Image */}
                            <div style={{
                                height: '250px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
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

                                {/* Country Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'rgba(0, 0, 0, 0.7)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600'
                                }}>
                                    {player.country}
                                </div>

                                {/* Role Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '10px',
                                    background: '#ff7800',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600'
                                }}>
                                    {player.role}
                                </div>
                            </div>

                            {/* Player Info */}
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: 'var(--text-primary)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {player.name}
                                </h3>

                                <div style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1rem'
                                }}>
                                    {player.battingStyle} • {player.bowlingStyle}
                                </div>

                                {/* Stats Quick View */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '1rem',
                                    padding: '1rem',
                                    background: 'var(--body-bg)',
                                    borderRadius: '10px'
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--text-secondary)',
                                            marginBottom: '0.3rem'
                                        }}>
                                            TEST
                                        </div>
                                        <div style={{
                                            fontSize: '1.2rem',
                                            fontWeight: '700',
                                            color: '#667eea'
                                        }}>
                                            #{player.ranking.test}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--text-secondary)',
                                            marginBottom: '0.3rem'
                                        }}>
                                            ODI
                                        </div>
                                        <div style={{
                                            fontSize: '1.2rem',
                                            fontWeight: '700',
                                            color: '#10b981'
                                        }}>
                                            #{player.ranking.odi}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--text-secondary)',
                                            marginBottom: '0.3rem'
                                        }}>
                                            T20
                                        </div>
                                        <div style={{
                                            fontSize: '1.2rem',
                                            fontWeight: '700',
                                            color: '#f59e0b'
                                        }}>
                                            #{player.ranking.t20}
                                        </div>
                                    </div>
                                </div>

                                {/* View Profile Button */}
                                <button
                                    style={{
                                        width: '100%',
                                        marginTop: '1rem',
                                        padding: '0.8rem',
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    View Full Profile →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredPlayers.length === 0 && (
                    <div style={{
                        textAlign: 'center',
                        padding: '4rem 2rem',
                        background: 'var(--card-bg)',
                        borderRadius: '15px'
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-primary)',
                            marginBottom: '0.5rem'
                        }}>
                            No players found
                        </h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Try adjusting your search or filters
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlayerProfiles;