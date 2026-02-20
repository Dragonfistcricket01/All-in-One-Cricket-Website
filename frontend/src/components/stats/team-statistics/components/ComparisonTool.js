import React, { useState, useEffect } from 'react';
import { getAllTeams, compareTeams } from '../../../../services/teamStatsAPI';
import '../TeamStatistics.css';

const ComparisonTool = ({ currentFormat }) => {
    const [teams, setTeams] = useState([]);
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [comparisonData, setComparisonData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        const data = await getAllTeams();
        setTeams(data);
        // Default: Select first 2 teams
        if (data.length >= 2) {
            setSelectedTeams([data[0].country, data[1].country]);
            fetchComparisonData([data[0].country, data[1].country]);
        }
    };

    const fetchComparisonData = async (teamCountries) => {
        setLoading(true);
        const data = await compareTeams(teamCountries);
        setComparisonData(data);
        setLoading(false);
    };

    const handleTeamToggle = (country) => {
        let updated;
        if (selectedTeams.includes(country)) {
            updated = selectedTeams.filter(t => t !== country);
        } else {
            if (selectedTeams.length >= 4) {
                alert('You can compare up to 4 teams at once!');
                return;
            }
            updated = [...selectedTeams, country];
        }
        setSelectedTeams(updated);
        if (updated.length > 0) {
            fetchComparisonData(updated);
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <i className="ri-loader-4-line spinner"></i>
                <p>Loading comparison data...</p>
            </div>
        );
    }

    return (
        <div className="comparison-tool">
            {/* Team Selector */}
            <div className="comparison-team-selector">
                <h3 className="section-title">
                    <i className="ri-checkbox-multiple-line"></i>
                    Select Teams to Compare (Max 4)
                </h3>
                <div className="comparison-teams-grid">
                    {teams.map(team => (
                        <button
                            key={team.country}
                            className={`comparison-team-btn ${selectedTeams.includes(team.country) ? 'selected' : ''}`}
                            onClick={() => handleTeamToggle(team.country)}
                        >
                            <span className="team-flag">{team.flag}</span>
                            <span className="team-name">{team.team}</span>
                            {selectedTeams.includes(team.country) && (
                                <i className="ri-check-line"></i>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Comparison Table */}
            {comparisonData.length > 0 && (
                <div className="comparison-results">
                    <h3 className="section-title">
                        <i className="ri-bar-chart-horizontal-line"></i>
                        Comparison Results ({currentFormat.toUpperCase()})
                    </h3>

                    <div className="comparison-table-container">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Metric</th>
                                    {comparisonData.map(team => (
                                        <th key={team.country}>
                                            <span className="team-flag">{team.flag}</span>
                                            {team.team}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="metric-label">Matches Played</td>
                                    {comparisonData.map(team => (
                                        <td key={team.country}>{team[currentFormat]?.overview.totalMatches || 'N/A'}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="metric-label">Matches Won</td>
                                    {comparisonData.map(team => (
                                        <td key={team.country} className="won-cell">
                                            {team[currentFormat]?.overview.won || 'N/A'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="metric-label">Matches Lost</td>
                                    {comparisonData.map(team => (
                                        <td key={team.country} className="lost-cell">
                                            {team[currentFormat]?.overview.lost || 'N/A'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="metric-label">Win Percentage</td>
                                    {comparisonData.map(team => (
                                        <td key={team.country} className="highlight-cell">
                                            {team[currentFormat]?.overview.winPercentage || 'N/A'}%
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="metric-label">Total Runs Scored</td>
                                    {comparisonData.map(team => (
                                        <td key={team.country}>
                                            {team[currentFormat]?.batting.totalRuns.toLocaleString() || 'N/A'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="metric-label">Average Score</td>
                                    {comparisonData.map(team => (
                                        <td key={team.country}>
                                            {team[currentFormat]?.batting.averageScore || 'N/A'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="metric-label">Highest Total</td>
                                    {comparisonData.map(team => (
                                        <td key={team.country} className="highlight-cell">
                                            {team[currentFormat]?.batting.highestTotal.score || 'N/A'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="metric-label">Total Wickets</td>
                                    {comparisonData.map(team => (
                                        <td key={team.country}>
                                            {team[currentFormat]?.bowling.totalWickets.toLocaleString() || 'N/A'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="metric-label">5 Wicket Hauls</td>
                                    {comparisonData.map(team => (
                                        <td key={team.country}>
                                            {team[currentFormat]?.bowling.fiveWicketHauls || 'N/A'}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComparisonTool;