import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPlayers, searchPlayers, filterPlayersByCountry, filterPlayersByRole } from '../../../services/cricketAPI';
import PlayerCard from './PlayerCard';
import './PlayerProfiles.css';

const PlayerProfiles = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [selectedRole, setSelectedRole] = useState('all');

    // Get unique countries and roles
    const countries = ['all', ...new Set(players.map(p => p.country))];
    const roles = ['all', 'Batsman', 'Bowler', 'All-rounder', 'Wicket-keeper'];

    useEffect(() => {
        fetchPlayers();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [searchTerm, selectedCountry, selectedRole, players]);

    const fetchPlayers = async () => {
        setLoading(true);
        try {
            const data = await getAllPlayers();
            setPlayers(data);
            setFilteredPlayers(data);
        } catch (error) {
            console.error('Error fetching players:', error);
        }
        setLoading(false);
    };

    const applyFilters = () => {
        let filtered = [...players];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(player =>
                player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.country.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Country filter
        if (selectedCountry !== 'all') {
            filtered = filtered.filter(player => player.country === selectedCountry);
        }

        // Role filter
        if (selectedRole !== 'all') {
            filtered = filtered.filter(player => player.role === selectedRole);
        }

        setFilteredPlayers(filtered);
    };

    const handlePlayerClick = (playerId) => {
        navigate(`/stats/players/${playerId}`);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCountry('all');
        setSelectedRole('all');
    };

    const hasActiveFilters = searchTerm || selectedCountry !== 'all' || selectedRole !== 'all';

    if (loading) {
        return (
            <div className="player-profiles-page">
                <div className="loading-container-player-profiles">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading players...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="player-profiles-page">
            {/* Page Header */}
            <div className="profiles-header-player-profiles">
                <div className="header-content-player-profiles">
                    <h1>
                        <i className="ri-user-star-line"></i>
                        Player Profiles
                    </h1>
                    <p>Explore detailed statistics and career information of cricket players</p>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="profiles-controls-player-profiles">
                <div className="controls-container-player-profiles">
                    {/* Search Bar */}
                    <div className="search-box-player-profiles">
                        <i className="ri-search-line"></i>
                        <input
                            type="text"
                            placeholder="Search players by name or country..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button
                                className="clear-search-player-profiles"
                                onClick={() => setSearchTerm('')}
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        )}
                    </div>

                    {/* Filters */}
                    <div className="filters-row-player-profiles">
                        <div className="filter-group-player-profiles">
                            <label>
                                <i className="ri-flag-line"></i>
                                Country
                            </label>
                            <select
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                            >
                                {countries.map(country => (
                                    <option key={country} value={country}>
                                        {country === 'all' ? 'All Countries' : country}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group-player-profiles">
                            <label>
                                <i className="ri-user-line"></i>
                                Role
                            </label>
                            <select
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                            >
                                {roles.map(role => (
                                    <option key={role} value={role}>
                                        {role === 'all' ? 'All Roles' : role}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {hasActiveFilters && (
                            <button className="clear-filters-btn-player-profiles" onClick={clearFilters}>
                                <i className="ri-close-circle-line"></i>
                                Clear Filters
                            </button>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="results-count-player-profiles">
                        <i className="ri-user-line"></i>
                        <span>{filteredPlayers.length} {filteredPlayers.length === 1 ? 'Player' : 'Players'} Found</span>
                    </div>
                </div>
            </div>

            {/* Players Grid */}
            <div className="profiles-container-player-profiles">
                {filteredPlayers.length > 0 ? (
                    <div className="players-grid-player-profiles">
                        {filteredPlayers.map(player => (
                            <PlayerCard
                                key={player.id}
                                player={player}
                                onClick={() => handlePlayerClick(player.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-players-player-profiles">
                        <i className="ri-user-search-line"></i>
                        <h3>No Players Found</h3>
                        <p>Try adjusting your search or filters</p>
                        {hasActiveFilters && (
                            <button className="reset-btn-player-profiles" onClick={clearFilters}>
                                <i className="ri-restart-line"></i>
                                Reset Filters
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlayerProfiles;