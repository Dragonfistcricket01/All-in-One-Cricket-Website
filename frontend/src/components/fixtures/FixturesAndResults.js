import React, { useState, useEffect } from 'react';
import { getUpcomingFixtures, getRecentResults, getAllTeams } from '../../../services/teamStatsAPI';
import FixtureCard from './FixtureCard';
import ResultCard from './ResultCard';
import MatchDetailsModal from './MatchDetailsModal';
import './FixturesAndResults.css';

const FixturesAndResults = () => {
    const [activeTab, setActiveTab] = useState('fixtures');
    const [fixtures, setFixtures] = useState([]);
    const [results, setResults] = useState([]);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [filters, setFilters] = useState({
        format: 'all',
        tournament: 'all',
        team: 'all',
        result: 'all',
        dateRange: '7days'
    });

    useEffect(() => {
        fetchData();
        fetchTeams();
    }, [filters, activeTab]);

    const fetchData = async () => {
        setLoading(true);
        if (activeTab === 'fixtures') {
            const data = await getUpcomingFixtures(filters);
            setFixtures(data);
        } else {
            const data = await getRecentResults(filters);
            setResults(data);
        }
        setLoading(false);
    };

    const fetchTeams = async () => {
        const teamsData = await getAllTeams();
        setTeams(teamsData);
    };

    const handleMatchClick = (match) => {
        setSelectedMatch(match);
        setShowModal(true);
    };

    const formats = [
        { id: 'all', name: 'All', icon: 'ri-ball-pen-line' },
        { id: 'test', name: 'Test', icon: 'ri-trophy-line' },
        { id: 'odi', name: 'ODI', icon: 'ri-trophy-fill' },
        { id: 't20i', name: 'T20I', icon: 'ri-flashlight-fill' }
    ];

    const dateRanges = [
        { id: '7days', name: 'Last 7 Days' },
        { id: '1month', name: 'Last Month' },
        { id: '3months', name: 'Last 3 Months' },
        { id: 'custom', name: 'Custom' }
    ];

    return (
        <div className="fixtures-results-container">
            {/* Header */}
            <div className="fixtures-header">
                <div className="header-content">
                    <h1>
                        <i className="ri-calendar-line"></i>
                        Fixtures & Results
                    </h1>
                    <p>View upcoming matches and recent results</p>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="fixtures-tabs">
                <button
                    className={`tab-btn ${activeTab === 'fixtures' ? 'active' : ''}`}
                    onClick={() => setActiveTab('fixtures')}
                >
                    <i className="ri-calendar-event-line"></i>
                    Upcoming Fixtures
                </button>
                <button
                    className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
                    onClick={() => setActiveTab('results')}
                >
                    <i className="ri-trophy-line"></i>
                    Recent Results
                </button>
            </div>

            {/* Filters Section */}
            <div className="fixtures-filters">
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

                {/* Date Range (for results) */}
                {activeTab === 'results' && (
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
                )}

                {/* Result Filter (for results) */}
                {activeTab === 'results' && (
                    <div className="filter-group">
                        <label>Result</label>
                        <select
                            value={filters.result}
                            onChange={(e) => setFilters({ ...filters, result: e.target.value })}
                            className="filter-select"
                        >
                            <option value="all">All Results</option>
                            <option value="won">Won</option>
                            <option value="lost">Lost</option>
                            <option value="draw">Draw/Tie</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="fixtures-content">
                {loading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading {activeTab}...</p>
                    </div>
                ) : (
                    <>
                        {activeTab === 'fixtures' ? (
                            <div className="fixtures-grid">
                                {fixtures.length > 0 ? (
                                    fixtures.map(fixture => (
                                        <FixtureCard
                                            key={fixture.id}
                                            fixture={fixture}
                                            onClick={() => handleMatchClick(fixture)}
                                        />
                                    ))
                                ) : (
                                    <div className="empty-state">
                                        <i className="ri-calendar-line"></i>
                                        <p>No upcoming fixtures found</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="results-grid">
                                {results.length > 0 ? (
                                    results.map(result => (
                                        <ResultCard
                                            key={result.id}
                                            result={result}
                                            onClick={() => handleMatchClick(result)}
                                        />
                                    ))
                                ) : (
                                    <div className="empty-state">
                                        <i className="ri-trophy-line"></i>
                                        <p>No results found</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Match Details Modal */}
            {showModal && selectedMatch && (
                <MatchDetailsModal
                    match={selectedMatch}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default FixturesAndResults;