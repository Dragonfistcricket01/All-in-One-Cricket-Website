import React, { useState, useEffect } from 'react';
import { getRankings, getTrendingPlayers, filterRankingsByCountry } from '../../../services/cricketAPI';
import RankingCard from './RankingCard';
import './PlayerRankings.css';

const PlayerRankings = () => {
    const [rankings, setRankings] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFormat, setActiveFormat] = useState('test');
    const [activeType, setActiveType] = useState('batsmen');
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Get unique countries from rankings
    const countries = ['all', ...new Set(rankings.map(r => r.country))];

    useEffect(() => {
        fetchRankings();
        fetchTrending();
    }, [activeFormat, activeType, selectedCountry]);

    const fetchRankings = async () => {
        setLoading(true);
        try {
            const data = await filterRankingsByCountry(activeFormat, activeType, selectedCountry);
            setRankings(data);
        } catch (error) {
            console.error('Error fetching rankings:', error);
        }
        setLoading(false);
    };

    const fetchTrending = async () => {
        try {
            const data = await getTrendingPlayers(activeFormat, activeType);
            setTrending(data);
        } catch (error) {
            console.error('Error fetching trending:', error);
        }
    };

    const filteredRankings = rankings.filter(player =>
        player.player.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getRankChange = (rank, previousRank) => {
        const change = previousRank - rank;
        if (change > 0) return { type: 'up', value: change };
        if (change < 0) return { type: 'down', value: Math.abs(change) };
        return { type: 'same', value: 0 };
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCountry('all');
    };

    const hasActiveFilters = searchTerm || selectedCountry !== 'all';

    if (loading) {
        return (
            <div className="player-rankings-page-player-rankings">
                <div className="loading-container-player-rankings">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading rankings...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="player-rankings-page-player-rankings">
            {/* Page Header */}
            <div className="rankings-header-player-rankings">
                <div className="header-content-player-rankings">
                    <h1>
                        <i className="ri-trophy-line"></i>
                        ICC Player Rankings
                    </h1>
                    <p>ICC rankings updated regularly</p>
                </div>
            </div>

            {/* Format Tabs */}
            <div className="format-tabs-player-rankings">
                <button
                    className={`format-tab-player-rankings ${activeFormat === 'test' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveFormat('test');
                        setSelectedCountry('all');
                        setSearchTerm('');
                    }}
                >
                    <span className="tab-icon-player-rankings"></span>
                    <span>Test</span>
                </button>
                <button
                    className={`format-tab-player-rankings ${activeFormat === 'odi' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveFormat('odi');
                        setSelectedCountry('all');
                        setSearchTerm('');
                    }}
                >
                    <span className="tab-icon-player-rankings"></span>
                    <span>ODI</span>
                </button>
                <button
                    className={`format-tab-player-rankings ${activeFormat === 't20i' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveFormat('t20i');
                        setSelectedCountry('all');
                        setSearchTerm('');
                    }}
                >
                    <span className="tab-icon-player-rankings"></span>
                    <span>T20I</span>
                </button>
            </div>

            {/* Type Tabs */}
            <div className="type-tabs-player-rankings">
                <button
                    className={`type-tab-player-rankings ${activeType === 'batsmen' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveType('batsmen');
                        setSelectedCountry('all');
                        setSearchTerm('');
                    }}
                >
                    Batsmen
                </button>
                <button
                    className={`type-tab-player-rankings ${activeType === 'bowlers' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveType('bowlers');
                        setSelectedCountry('all');
                        setSearchTerm('');
                    }}
                >
                    Bowlers
                </button>
                <button
                    className={`type-tab-player-rankings ${activeType === 'allRounders' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveType('allRounders');
                        setSelectedCountry('all');
                        setSearchTerm('');
                    }}
                >
                    All-Rounders
                </button>
            </div>

            {/* Controls */}
            <div className="rankings-controls-player-rankings">
                <div className="controls-container-player-rankings">
                    {/* Search */}
                    <div className="search-box-player-rankings">
                        <i className="ri-search-line"></i>
                        <input
                            type="text"
                            placeholder="Search players..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button
                                className="clear-search-player-rankings"
                                onClick={() => setSearchTerm('')}
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        )}
                    </div>

                    {/* Country Filter */}
                    <div className="filter-group-player-rankings">
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

                    {hasActiveFilters && (
                        <button className="clear-filters-btn-player-rankings" onClick={clearFilters}>
                            <i className="ri-close-circle-line"></i>
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="rankings-main-player-rankings">
                {/* Trending Players Sidebar*/}
                {trending.length > 0 && (
                    <div className="trending-sidebar-player-rankings">
                        <h3>
                            <i className="ri-fire-line"></i>
                            Trending Players
                        </h3>
                        <p className="trending-subtitle-player-rankings">Biggest movers this week</p>
                        <div className="trending-list-player-rankings">
                            {trending.map((player, index) => (
                                <div key={index} className="trending-item-player-rankings">
                                    <div className="trending-rank-player-rankings">#{player.rank}</div>
                                    <div className="trending-info-player-rankings">
                                        <div className="trending-player-player-rankings">
                                            {/* Handle both image and emoji flags */}
                                            {typeof player.flag === 'string' && player.flag.startsWith('/') ? (
                                                <img
                                                    src={player.flag}
                                                    alt={player.country}
                                                    className="trending-flag-image-player-rankings"
                                                />
                                            ) : (
                                                <span className="trending-flag-player-rankings">{player.flag}</span>
                                            )}
                                            <span className="trending-name-player-rankings">{player.player}</span>
                                        </div>
                                        <div className="trending-change-player-rankings">
                                            <i className="ri-arrow-up-line"></i>
                                            Up {player.rankChange} {player.rankChange === 1 ? 'place' : 'places'}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Rankings List */}
                <div className="rankings-content-player-rankings">
                    <div className="rankings-header-row-player-rankings">
                        <h2>
                            {activeFormat.toUpperCase()} {' '}
                            {activeType === 'batsmen' ? 'Batting' : activeType === 'bowlers' ? 'Bowling' : 'All-Rounder'} Rankings
                        </h2>
                        <span className="results-count-player-rankings">
                            {filteredRankings.length} {filteredRankings.length === 1 ? 'Player' : 'Players'}
                        </span>
                    </div>

                    {filteredRankings.length > 0 ? (
                        <div className="rankings-list-player-rankings">
                            {filteredRankings.map((player) => {
                                const rankChange = getRankChange(player.rank, player.previousRank);
                                return (
                                    <RankingCard
                                        key={player.rank}
                                        player={player}
                                        rankChange={rankChange}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div className="no-results-player-rankings">
                            <i className="ri-user-search-line"></i>
                            <h3>No Players Found</h3>
                            <p>Try adjusting your search or filters</p>
                            {hasActiveFilters && (
                                <button className="reset-btn-player-rankings" onClick={clearFilters}>
                                    <i className="ri-restart-line"></i>
                                    Reset Filters
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Info Footer */}
            <div className="rankings-footer-player-rankings">
                <div className="footer-content-player-rankings">
                    <div className="footer-note-player-rankings">
                        <i className="ri-information-line"></i>
                        <p>Rankings are updated weekly based on recent performances. Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerRankings;