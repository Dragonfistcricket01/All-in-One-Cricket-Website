import React, { useState, useEffect } from 'react';
import {
    getMatchRatings,
    getTopRatedPlayers,
    getTeamAverageRatings
} from '../../../services/playerRatingsAPI';
import { getAllTeams } from '../../../services/teamStatsAPI';
import MatchRatingCard from './MatchRatingCard';
import TopRatedPlayers from './TopRatedPlayers';
import TeamAverageRatings from './TeamAverageRatings';
import RatingScale from './RatingScale';
import PlayerHistoryModal from './PlayerHistoryModal';
import './PlayerRatings.css';

const PlayerRatings = () => {
    const [activeTab, setActiveTab] = useState('matches');
    const [matchRatings, setMatchRatings] = useState([]);
    const [topPlayers, setTopPlayers] = useState([]);
    const [teamRatings, setTeamRatings] = useState([]);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [showPlayerModal, setShowPlayerModal] = useState(false);

    const [filters, setFilters] = useState({
        format: 'all',
        team: 'all',
        dateRange: '30days',
        ratingFilter: 'all'
    });

    useEffect(() => {
        fetchData();
        fetchTeams();
    }, [filters, activeTab]);

    const fetchData = async () => {
        setLoading(true);

        if (activeTab === 'matches') {
            const data = await getMatchRatings(filters);
            setMatchRatings(data);
        } else if (activeTab === 'top-players') {
            const data = await getTopRatedPlayers();
            setTopPlayers(data);
        } else if (activeTab === 'team-ratings') {
            const data = await getTeamAverageRatings();
            setTeamRatings(data);
        }

        setLoading(false);
    };

    const fetchTeams = async () => {
        const teamsData = await getAllTeams();
        setTeams(teamsData);
    };

    const handlePlayerClick = (playerName) => {
        setSelectedPlayer(playerName);
        setShowPlayerModal(true);
    };

    const formats = [
        { id: 'all', name: 'All', icon: 'ri-ball-pen-line' },
        { id: 'test', name: 'Test', icon: 'ri-trophy-line' },
        { id: 'odi', name: 'ODI', icon: 'ri-trophy-fill' },
        { id: 't20i', name: 'T20I', icon: 'ri-flashlight-fill' }
    ];

    const dateRanges = [
        { id: '7days', name: 'Last 7 Days' },
        { id: '30days', name: 'Last 30 Days' },
        { id: '3months', name: 'Last 3 Months' },
        { id: '6months', name: 'Last 6 Months' }
    ];

    const ratingFilters = [
        { id: 'all', name: 'All Ratings' },
        { id: '9+', name: '9.0+ (Outstanding)' },
        { id: '8+', name: '8.0+ (Excellent)' },
        { id: '7+', name: '7.0+ (Good)' },
        { id: 'below5', name: 'Below 5.0 (Poor)' }
    ];

    return (
        <div className="player-ratings-container">
            {/* Header */}
            <div className="ratings-header">
                <div className="header-content">
                    <h1>
                        <i className="ri-star-line"></i>
                        Player Ratings
                    </h1>
                    <p>Match performance ratings out of 10</p>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="ratings-tabs">
                <button
                    className={`tab-btn ${activeTab === 'matches' ? 'active' : ''}`}
                    onClick={() => setActiveTab('matches')}
                >
                    <i className="ri-trophy-line"></i>
                    Match Ratings
                </button>
                <button
                    className={`tab-btn ${activeTab === 'top-players' ? 'active' : ''}`}
                    onClick={() => setActiveTab('top-players')}
                >
                    <i className="ri-medal-line"></i>
                    Top Rated Players
                </button>
                <button
                    className={`tab-btn ${activeTab === 'team-ratings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('team-ratings')}
                >
                    <i className="ri-team-line"></i>
                    Team Averages
                </button>
                <button
                    className={`tab-btn ${activeTab === 'scale' ? 'active' : ''}`}
                    onClick={() => setActiveTab('scale')}
                >
                    <i className="ri-information-line"></i>
                    Rating Scale
                </button>
            </div>

            {/* Filters (only for matches tab) */}
            {activeTab === 'matches' && (
                <div className="ratings-filters">
                    {/* Format Filter */}
                    <div className="filter-group">
                        <label>Format</label>
                        <div className="format-buttons">
                            {formats.map(format => (
                                <button
                                    key={format.id}
                                    className={`format-btn ${filters.format === format.id ? 'active' : ''}`}
                                    onClick={() => setFilters({ ...filters, format: format.id })}
                                >
                                    <i className={format.icon}></i>
                                    <span>{format.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Team Filter */}
                    <div className="filter-group">
                        <label>Team</label>
                        <select
                            value={filters.team}
                            onChange={(e) => setFilters({ ...filters, team: e.target.value })}
                            className="filter-select"
                        >
                            <option value="all">All Teams</option>
                            {teams.map(team => (
                                <option key={team.country} value={team.country}>
                                    {team.flag} {team.team}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Date Range */}
                    <div className="filter-group">
                        <label>Date Range</label>
                        <select
                            value={filters.dateRange}
                            onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                            className="filter-select"
                        >
                            {dateRanges.map(range => (
                                <option key={range.id} value={range.id}>
                                    {range.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Rating Filter */}
                    <div className="filter-group">
                        <label>Rating</label>
                        <select
                            value={filters.ratingFilter}
                            onChange={(e) => setFilters({ ...filters, ratingFilter: e.target.value })}
                            className="filter-select"
                        >
                            {ratingFilters.map(rating => (
                                <option key={rating.id} value={rating.id}>
                                    {rating.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="ratings-content">
                {loading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading ratings...</p>
                    </div>
                ) : (
                    <>
                        {activeTab === 'matches' && (
                            <div className="match-ratings-grid">
                                {matchRatings.length > 0 ? (
                                    matchRatings.map(match => (
                                        <MatchRatingCard
                                            key={match.id}
                                            match={match}
                                            onPlayerClick={handlePlayerClick}
                                        />
                                    ))
                                ) : (
                                    <div className="empty-state">
                                        <i className="ri-star-line"></i>
                                        <p>No match ratings found</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'top-players' && (
                            <TopRatedPlayers
                                players={topPlayers}
                                onPlayerClick={handlePlayerClick}
                            />
                        )}

                        {activeTab === 'team-ratings' && (
                            <TeamAverageRatings teams={teamRatings} />
                        )}

                        {activeTab === 'scale' && (
                            <RatingScale />
                        )}
                    </>
                )}
            </div>

            {/* Player History Modal */}
            {showPlayerModal && selectedPlayer && (
                <PlayerHistoryModal
                    playerName={selectedPlayer}
                    onClose={() => setShowPlayerModal(false)}
                />
            )}
        </div>
    );
};

export default PlayerRatings;