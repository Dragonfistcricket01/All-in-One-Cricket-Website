import React from 'react';
import './TeamRankings.css';

const TeamComparison = ({ teams, onClose }) => {
    if (teams.length === 0) return null;

    return (
        <div className="comparison-modal-overlay-team-rankings" onClick={onClose}>
            <div className="comparison-modal-team-rankings" onClick={(e) => e.stopPropagation()}>
                <div className="comparison-modal-header-team-rankings">
                    <h2>
                        <i className="ri-bar-chart-horizontal-line"></i>
                        Team Comparison
                    </h2>
                    <button className="close-modal-btn-team-rankings" onClick={onClose}>
                        <i className="ri-close-line"></i>
                    </button>
                </div>

                <div className="comparison-modal-content-team-rankings">
                    <div className="comparison-teams-grid-team-rankings">
                        {teams.map(team => (
                            <div key={team.key} className="comparison-team-column-team-rankings">
                                <div className="comparison-team-header-team-rankings">
                                    <img
                                        src={team.image}
                                        alt={team.team}
                                        className="comparison-team-flag-team-rankings"
                                        style={{ width: '40px', height: '30px', objectFit: 'cover' }}
                                    />
                                    <h3>{team.team}</h3>
                                    <span className="comparison-rank-team-rankings">#{team.rank}</span>
                                </div>

                                <div className="comparison-stats-list-team-rankings">
                                    <div className="comparison-stat-row-team-rankings">
                                        <span className="stat-label-team-rankings">Rating</span>
                                        <span className="stat-value-team-rankings highlight">{team.rating}</span>
                                    </div>
                                    <div className="comparison-stat-row-team-rankings">
                                        <span className="stat-label-team-rankings">Points</span>
                                        <span className="stat-value-team-rankings">{team.points.toLocaleString()}</span>
                                    </div>
                                    <div className="comparison-stat-row-team-rankings">
                                        <span className="stat-label-team-rankings">Matches</span>
                                        <span className="stat-value-team-rankings">{team.matches}</span>
                                    </div>
                                    <div className="comparison-stat-row-team-rankings">
                                        <span className="stat-label-team-rankings">Won</span>
                                        <span className="stat-value-team-rankings success">{team.won}</span>
                                    </div>
                                    <div className="comparison-stat-row-team-rankings">
                                        <span className="stat-label-team-rankings">Lost</span>
                                        <span className="stat-value-team-rankings danger">{team.lost}</span>
                                    </div>
                                    {team.drawn !== undefined && (
                                        <div className="comparison-stat-row-team-rankings">
                                            <span className="stat-label-team-rankings">Drawn</span>
                                            <span className="stat-value-team-rankings warning">{team.drawn}</span>
                                        </div>
                                    )}
                                    {team.tied !== undefined && (
                                        <div className="comparison-stat-row-team-rankings">
                                            <span className="stat-label-team-rankings">Tied</span>
                                            <span className="stat-value-team-rankings info">{team.tied}</span>
                                        </div>
                                    )}
                                    <div className="comparison-stat-row-team-rankings">
                                        <span className="stat-label-team-rankings">Win Rate</span>
                                        <span className="stat-value-team-rankings highlight">
                                            {((team.won / team.matches) * 100).toFixed(1)}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamComparison;