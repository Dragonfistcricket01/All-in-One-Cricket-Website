import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTeamRankingsByFormat } from '../../../services/teamRankingsAPI';
import { useTeamRankings } from '../../../context/TeamRankingsContext';
import TeamRankingCard from './TeamRankingCard';
import FormatFilter from './FormatFilter';
import TeamComparison from './TeamComparison';
import './TeamRankings.css';

const TeamRankings = () => {
    const navigate = useNavigate();
    const { getStats, comparedTeams, clearComparisons } = useTeamRankings();

    const [teams, setTeams] = useState([]);
    const [displayedTeams, setDisplayedTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFormat, setSelectedFormat] = useState('test');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('rank');
    const [viewMode, setViewMode] = useState('table'); 
    const [showComparison, setShowComparison] = useState(false);
    const stats = getStats();

    useEffect(() => {
        fetchTeams();
    }, [selectedFormat]);

    useEffect(() => {
        filterAndSortTeams();
    }, [teams, searchTerm, sortBy]);

    const fetchTeams = async () => {
        setLoading(true);
        try {
            const data = await getTeamRankingsByFormat(selectedFormat);
            console.log('Fetched teams:', data);
            console.log('Teams count:', data.length);
            setTeams(data);
            setDisplayedTeams(data);
        } catch (error) {
            console.error('Error fetching teams:', error);
        }
        setLoading(false);
    };

    const filterAndSortTeams = () => {
        let filtered = [...teams];

        if (searchTerm.trim()) {
            filtered = filtered.filter(team =>
                team.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
                team.country.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        switch (sortBy) {
            case 'rank':
                filtered.sort((a, b) => a.rank - b.rank);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'points':
                filtered.sort((a, b) => b.points - a.points);
                break;
            case 'matches':
                filtered.sort((a, b) => b.matches - a.matches);
                break;
            case 'winRate':
                filtered.sort((a, b) => {
                    const winRateA = (a.won / a.matches) * 100;
                    const winRateB = (b.won / b.matches) * 100;
                    return winRateB - winRateA;
                });
                break;
            default:
                break;
        }

        console.log('Displayed teams count:', filtered.length);
        console.log('First team:', filtered[0]);

        setDisplayedTeams(filtered);
    };

    const handleTeamClick = (team) => {
        navigate(`/stats/team-rankings/${team.country.toLowerCase()}/${selectedFormat}`);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    const getFormatName = (format) => {
        const names = {
            'test': 'Test',
            'odi': 'ODI',
            't20i': 'T20I',
            'wtc': 'WTC'
        };
        return names[format] || format;
    };

    if (loading) {
        return (
            <div className="team-rankings-page">
                <div className="loading-container-team-rankings">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading team rankings...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="team-rankings-page">
            {/* Hero Section */}
            <div className="rankings-hero-team-rankings">
                <div className="hero-content-team-rankings">
                    <div className="hero-text-team-rankings">
                        <h1>
                            <i className="ri-trophy-line"></i>
                            ICC Team Rankings
                        </h1>
                        <p>Official ICC rankings for Test, ODI, T20I and WTC</p>
                    </div>
                    <div className="hero-stats-team-rankings">
                        <div className="stat-card-team-rankings">
                            <i className="ri-team-line"></i>
                            <div>
                                <div className="stat-value-team-rankings">{teams.length}</div>
                                <div className="stat-label-team-rankings">Teams Ranked</div>
                            </div>
                        </div>
                        <div className="stat-card-team-rankings">
                            <i className="ri-heart-fill"></i>
                            <div>
                                <div className="stat-value-team-rankings">{stats.totalFavorites}</div>
                                <div className="stat-label-team-rankings">Favorites</div>
                            </div>
                        </div>
                        <div className="stat-card-team-rankings">
                            <i className="ri-bar-chart-horizontal-line"></i>
                            <div>
                                <div className="stat-value-team-rankings">{stats.totalCompared}</div>
                                <div className="stat-label-team-rankings">In Comparison</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Format Filter */}
            <FormatFilter selectedFormat={selectedFormat} onSelectFormat={setSelectedFormat} />

            {/* Comparison Bar */}
            {comparedTeams.length > 0 && (
                <div className="comparison-bar-team-rankings">
                    <div className="comparison-content-team-rankings">
                        <div className="comparison-header-team-rankings">
                            <i className="ri-bar-chart-horizontal-line"></i>
                            <span>Comparing {comparedTeams.length} team{comparedTeams.length > 1 ? 's' : ''}</span>
                        </div>
                        <div className="compared-teams-team-rankings">
                            {comparedTeams.map(team => (
                                <div key={team.key} className="compared-team-badge-team-rankings">
                                    <img
                                        src={team.image}
                                        alt={team.team}
                                        className="team-flag-team-rankings"
                                        style={{ width: '48px', height: '36px', objectFit: 'cover' }}
                                    />
                                    <span>{team.team}</span>
                                </div>
                            ))}
                        </div>
                        <div className="comparison-actions-team-rankings">
                            <button
                                className="view-comparison-btn-team-rankings"
                                onClick={() => setShowComparison(true)}
                            >
                                View Comparison
                            </button>
                            <button className="clear-comparison-btn-team-rankings" onClick={clearComparisons}>
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Controls */}
            <div className="rankings-controls-team-rankings">
                <div className="controls-container-team-rankings">
                    <div className="search-box-team-rankings">
                        <i className="ri-search-line"></i>
                        <input
                            type="text"
                            placeholder="Search teams..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button className="clear-search-team-rankings" onClick={handleClearSearch}>
                                <i className="ri-close-line"></i>
                            </button>
                        )}
                    </div>

                    <div className="sort-section-team-rankings">
                        <label>
                            <i className="ri-sort-desc"></i>
                            Sort By
                        </label>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="rank">Rank</option>
                            <option value="rating">Rating</option>
                            <option value="points">Points</option>
                            <option value="matches">Matches</option>
                            <option value="winRate">Win Rate</option>
                        </select>
                    </div>

                    <div className="view-toggle-team-rankings">
                        <button
                            className={`view-toggle-btn-team-rankings ${viewMode === 'table' ? 'active' : ''}`}
                            onClick={() => setViewMode('table')}
                        >
                            <i className="ri-table-line"></i>
                            Table
                        </button>
                        <button
                            className={`view-toggle-btn-team-rankings ${viewMode === 'cards' ? 'active' : ''}`}
                            onClick={() => setViewMode('cards')}
                        >
                            <i className="ri-layout-grid-line"></i>
                            Cards
                        </button>
                    </div>

                    <div className="results-info-team-rankings">
                        <span className="results-count-team-rankings">
                            {displayedTeams.length} {displayedTeams.length === 1 ? 'Team' : 'Teams'}
                        </span>
                        <span className="format-indicator-team-rankings">in {getFormatName(selectedFormat)}</span>
                    </div>
                </div>
            </div>

            {/* Rankings Content */}
            <div className="rankings-main-team-rankings">
                {displayedTeams.length > 0 ? (
                    viewMode === 'table' ? (
                        <div className="rankings-table-container-team-rankings">
                            <table className="rankings-table-team-rankings">
                                <thead>
                                    <tr>
                                        <th>Pos</th>
                                        <th>Team</th>
                                        <th>Matches</th>
                                        <th>Points</th>
                                        <th>Rating</th>
                                        {selectedFormat === 'wtc' && <th>PCT%</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedTeams.map(team => (
                                        <tr
                                            key={team.country}
                                            onClick={() => handleTeamClick(team)}
                                            className="table-row-clickable-team-rankings"
                                        >
                                            <td className="rank-cell-team-rankings">
                                                <div className="rank-display-team-rankings">{String(team.rank).padStart(2, '0')}</div>
                                            </td>
                                            <td className="team-cell-team-rankings">
                                                <img
                                                    src={team.image}
                                                    alt={team.team}
                                                    className="table-team-flag-team-rankings"
                                                    style={{ width: '32px', height: '24px', objectFit: 'cover' }}
                                                />
                                                <span className="table-team-name-team-rankings">{team.team}</span>
                                            </td>
                                            <td>{team.matches}</td>
                                            <td>{team.points.toLocaleString()}</td>
                                            <td className="rating-cell-team-rankings">{team.rating}</td>
                                            {selectedFormat === 'wtc' && (
                                                <td className="pct-cell-team-rankings">{team.pointsPercentage}%</td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="rankings-grid-team-rankings">
                            {displayedTeams.map(team => (
                                <TeamRankingCard
                                    key={team.country}
                                    team={team}
                                    format={selectedFormat}
                                    onClick={() => handleTeamClick(team)}
                                />
                            ))}
                        </div>
                    )
                ) : (
                    <div className="no-results-team-rankings">
                        <i className="ri-search-line"></i>
                        <h3>No Teams Found</h3>
                        <p>Try adjusting your search terms</p>
                        <button className="reset-btn-team-rankings" onClick={handleClearSearch}>
                            <i className="ri-restart-line"></i>
                            Clear Search
                        </button>
                    </div>
                )}
            </div>

            <div className="last-updated-team-rankings">
                <i className="ri-time-line"></i>
                <span>Rankings last updated: November 1, 2025</span>
            </div>

            {/* Comparison Modal */}
            {showComparison && (
                <TeamComparison
                    teams={comparedTeams}
                    onClose={() => setShowComparison(false)}
                />
            )}
        </div>
    );
};

export default TeamRankings;