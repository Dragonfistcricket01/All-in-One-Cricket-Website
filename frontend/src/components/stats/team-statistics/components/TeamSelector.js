import React, { useState, useEffect } from 'react';
import { getAllTeams } from '../../../../services/teamStatsAPI';
import '../TeamStatistics.css';

const TeamSelector = ({ selectedTeam, onTeamChange, selectedFormat, onFormatChange, filters, onFiltersChange }) => {
    const [teams, setTeams] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        const data = await getAllTeams();
        setTeams(data);
    };

    const handleTeamSelect = (team) => {
        onTeamChange(team);
        setIsDropdownOpen(false);
    };

    const formats = [
        { id: 'test', name: 'Test', icon: 'ri-trophy-line' },
        { id: 'odi', name: 'ODI', icon: 'ri-trophy-fill' },
        { id: 't20i', name: 'T20I', icon: 'ri-flashlight-fill' }
    ];

    const timePeriods = [
        { id: 'last12months', name: 'Last 12 Months' },
        { id: 'last5years', name: 'Last 5 Years' },
        { id: 'alltime', name: 'All Time' }
    ];

    const venueTypes = [
        { id: 'all', name: 'All Venues' },
        { id: 'home', name: 'Home' },
        { id: 'away', name: 'Away' },
        { id: 'neutral', name: 'Neutral' }
    ];

    const currentTeam = teams.find(t => t.country === selectedTeam) || teams[0];

    return (
        <div className="team-selector-section">
            <div className="team-selector-container">
                {/* Team Dropdown */}
                <div className="team-selector-dropdown">
                    <label>Select Team</label>
                    <div className="team-dropdown-wrapper">
                        <button
                            className="team-dropdown-btn"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <img
                                src={currentTeam?.image}
                                alt={currentTeam?.team}
                                className="selected-team-flag"
                                style={{ width: '40px', height: '30px', objectFit: 'cover', borderRadius: '4px' }}
                            />
                            <span className="selected-team-name">{currentTeam?.team}</span>
                            <i className={`ri-arrow-${isDropdownOpen ? 'up' : 'down'}-s-line`}></i>
                        </button>

                        {isDropdownOpen && (
                            <div className="team-dropdown-menu">
                                {teams.map(team => (
                                    <div
                                        key={team.country}
                                        className={`team-dropdown-item ${team.country === selectedTeam ? 'active' : ''}`}
                                        onClick={() => handleTeamSelect(team.country)}
                                    >
                                        <img
                                            src={team.image}
                                            alt={team.team}
                                            className="team-flag"
                                            style={{ width: '32px', height: '24px', objectFit: 'cover', borderRadius: '4px' }}
                                        />
                                        <span className="team-name">{team.team}</span>
                                        {team.country === selectedTeam && (
                                            <i className="ri-check-line"></i>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Format Toggle */}
                <div className="format-selector">
                    <label>Format</label>
                    <div className="format-buttons">
                        {formats.map(format => (
                            <button
                                key={format.id}
                                className={`format-btn ${selectedFormat === format.id ? 'active' : ''}`}
                                onClick={() => onFormatChange(format.id)}
                            >
                                <i className={format.icon}></i>
                                <span>{format.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Time Period */}
                <div className="filter-selector">
                    <label>
                        <i className="ri-time-line"></i>
                        Time Period
                    </label>
                    <select
                        value={filters.timePeriod}
                        onChange={(e) => onFiltersChange({ ...filters, timePeriod: e.target.value })}
                        className="filter-select"
                    >
                        {timePeriods.map(period => (
                            <option key={period.id} value={period.id}>
                                {period.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Venue Type */}
                <div className="filter-selector">
                    <label>
                        <i className="ri-map-pin-line"></i>
                        Venue
                    </label>
                    <select
                        value={filters.venueType}
                        onChange={(e) => onFiltersChange({ ...filters, venueType: e.target.value })}
                        className="filter-select"
                    >
                        {venueTypes.map(venue => (
                            <option key={venue.id} value={venue.id}>
                                {venue.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TeamSelector;