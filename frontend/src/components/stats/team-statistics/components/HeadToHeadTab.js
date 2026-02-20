import React, { useState, useEffect } from 'react';
import { getAllTeams, getHeadToHead } from '../../../../services/teamStatsAPI';
import '../TeamStatistics.css';

const HeadToHeadTab = ({ currentTeam, currentFormat }) => {
    const [teams, setTeams] = useState([]);
    const [selectedOpponent, setSelectedOpponent] = useState('AUS');
    const [h2hData, setH2hData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTeams();
    }, []);

    useEffect(() => {
        if (selectedOpponent && currentTeam !== selectedOpponent) {
            fetchH2HData();
        }
    }, [selectedOpponent, currentTeam]);

    const fetchTeams = async () => {
        const data = await getAllTeams();
        setTeams(data);
        // Set default opponent (first team that's not current team)
        const defaultOpponent = data.find(t => t.country !== currentTeam);
        if (defaultOpponent) {
            setSelectedOpponent(defaultOpponent.country);
        }
    };

    const fetchH2HData = async () => {
        setLoading(true);
        const data = await getHeadToHead(currentTeam, selectedOpponent);
        setH2hData(data);
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <i className="ri-loader-4-line spinner"></i>
                <p>Loading head-to-head data...</p>
            </div>
        );
    }

    if (!h2hData) {
        return (
            <div className="no-data-message">
                <i className="ri-information-line"></i>
                <p>No head-to-head data available</p>
            </div>
        );
    }

    const currentTeamData = teams.find(t => t.country === currentTeam);
    const opponentData = teams.find(t => t.country === selectedOpponent);
    const formatData = h2hData[currentFormat];

    // ✅ FIXED: Dynamically calculate wins based on alphabetical team order
    const sortedTeams = [currentTeam, selectedOpponent].sort();
    const isCurrentTeamFirst = currentTeam === sortedTeams[0];

    const team1Wins = isCurrentTeamFirst
        ? formatData.indWon
        : formatData.ausWon;
    const team2Wins = isCurrentTeamFirst
        ? formatData.ausWon
        : formatData.indWon;

    return (
        <div className="head-to-head-tab">
            {/* Opponent Selector */}
            <div className="opponent-selector-section">
                <label>Select Opponent</label>
                <div className="opponent-selector">
                    {teams
                        .filter(t => t.country !== currentTeam)
                        .map(team => (
                            <button
                                key={team.country}
                                className={`opponent-btn ${selectedOpponent === team.country ? 'active' : ''}`}
                                onClick={() => setSelectedOpponent(team.country)}
                            >
                                <img
                                    src={team.image}
                                    alt={team.team}
                                    className="opponent-flag"
                                    style={{ width: '28px', height: '20px', objectFit: 'cover', borderRadius: '3px' }}
                                />
                                <span className="opponent-name">{team.team}</span>
                            </button>
                        ))}
                </div>
            </div>

            {/* VS Header */}
            <div className="vs-header">
                <div className="team-side">
                    <img
                        src={currentTeamData?.image}
                        alt={currentTeamData?.team}
                        className="team-flag-large"
                        style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <h2>{currentTeamData?.team}</h2>
                </div>
                <div className="vs-divider">
                    <span className="vs-text">VS</span>
                </div>
                <div className="team-side">
                    <img
                        src={opponentData?.image}
                        alt={opponentData?.team}
                        className="team-flag-large"
                        style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <h2>{opponentData?.team}</h2>
                </div>
            </div>

            {/* Overall Record */}
            <div className="h2h-overall-record">
                <h3 className="section-title">
                    <i className="ri-trophy-line"></i>
                    Overall Record ({currentFormat.toUpperCase()})
                </h3>

                <div className="h2h-stats-grid">
                    <div className="h2h-stat-card">
                        <div className="h2h-stat-value">{formatData.played}</div>
                        <div className="h2h-stat-label">Matches Played</div>
                    </div>

                    <div className="h2h-stat-card wins">
                        <div className="h2h-stat-value">{team1Wins}</div>
                        <div className="h2h-stat-label">{currentTeamData?.team} Wins</div>
                    </div>

                    <div className="h2h-stat-card losses">
                        <div className="h2h-stat-value">{team2Wins}</div>
                        <div className="h2h-stat-label">{opponentData?.team} Wins</div>
                    </div>

                    {formatData.drawn !== undefined && (
                        <div className="h2h-stat-card draws">
                            <div className="h2h-stat-value">{formatData.drawn}</div>
                            <div className="h2h-stat-label">Drawn</div>
                        </div>
                    )}

                    {formatData.tied !== undefined && formatData.tied > 0 && (
                        <div className="h2h-stat-card ties">
                            <div className="h2h-stat-value">{formatData.tied}</div>
                            <div className="h2h-stat-label">Tied</div>
                        </div>
                    )}

                    {formatData.noResult !== undefined && formatData.noResult > 0 && (
                        <div className="h2h-stat-card no-result">
                            <div className="h2h-stat-value">{formatData.noResult}</div>
                            <div className="h2h-stat-label">No Result</div>
                        </div>
                    )}
                </div>

                {/* Win Percentage Bars */}
                <div className="win-percentage-section">
                    <div className="win-bar-container">
                        <div className="win-bar-team">
                            <img
                                src={currentTeamData?.image}
                                alt={currentTeamData?.team}
                                style={{ width: '32px', height: '24px', objectFit: 'cover', borderRadius: '4px' }}
                            />
                            <span className="win-percent">{((team1Wins / formatData.played) * 100).toFixed(1)}%</span>
                        </div>
                        <div className="win-bar">
                            <div
                                className="win-bar-fill team1"
                                style={{ width: `${(team1Wins / formatData.played) * 100}%` }}
                            ></div>
                            <div
                                className="win-bar-fill team2"
                                style={{ width: `${(team2Wins / formatData.played) * 100}%` }}
                            ></div>
                        </div>
                        <div className="win-bar-team">
                            <span className="win-percent">{((team2Wins / formatData.played) * 100).toFixed(1)}%</span>
                            <img
                                src={opponentData?.image}
                                alt={opponentData?.team}
                                style={{ width: '32px', height: '24px', objectFit: 'cover', borderRadius: '4px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Last 5 Encounters */}
            <div className="last-encounters-section">
                <h3 className="section-title">
                    <i className="ri-history-line"></i>
                    Last 5 Encounters
                </h3>
                <div className="encounters-list">
                    {h2hData.lastFive.map((match, index) => (
                        <div key={index} className="encounter-card">
                            <div className="encounter-date">
                                <i className="ri-calendar-line"></i>
                                {new Date(match.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className="encounter-format-badge">{match.format}</div>
                            <div className="encounter-venue">
                                <i className="ri-map-pin-line"></i>
                                {match.venue}
                            </div>
                            <div className={`encounter-result ${match.winner === currentTeam ? 'won' : 'lost'}`}>
                                {match.winner === currentTeam ? (
                                    <>
                                        <i className="ri-trophy-fill"></i>
                                        <span>Won by {match.margin}</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="ri-close-circle-fill"></i>
                                        <span>Lost by {match.margin}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeadToHeadTab;