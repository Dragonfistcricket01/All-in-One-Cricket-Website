import React from 'react';
import '../TeamStatistics.css';

const SquadSection = ({ stats }) => {
    if (!stats || !stats.squad || !stats.topPerformers) return null;

    const squad = stats.squad;
    const topBatsmen = stats.topPerformers.batsmen;
    const topBowlers = stats.topPerformers.bowlers;

    return (
        <div className="squad-section">
            {/* Player Spotlight */}
            <div className="squad-subsection">
                <h2 className="section-title">
                    <i className="ri-team-line"></i>
                    Player Spotlight
                </h2>
                <div className="squad-grid">
                    {squad.map((player, index) => (
                        <div key={index} className="squad-card">
                            <div className="player-photo">
                                <img
                                src={player.photo}
                                alt={player.name}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'cover',
                                    borderRadius: '50%'
                                }}
                                />
                            </div>
                            <div className="player-info">
                                <h3>{player.name}</h3>
                                <p className="player-role">{player.role}</p>
                                <p className="player-matches">
                                    <i className="ri-trophy-line"></i>
                                    {player.matches} Matches
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Performers */}
            <div className="top-performers-section">
                {/* Top Batsmen */}
                <div className="performers-subsection">
                    <h3 className="section-title batting-title">
                        <i className="ri-cricket-line"></i>
                        Top Run Scorers (Last 12 Months)
                    </h3>
                    <div className="performers-list">
                        {topBatsmen.map((batsman, index) => (
                            <div key={index} className="performer-card">
                                <div className="performer-rank">#{index + 1}</div>
                                <div className="performer-info">
                                    <h4>{batsman.name}</h4>
                                    <div className="performer-stats">
                                        <span className="stat-item">
                                            <i className="ri-bar-chart-line"></i>
                                            {batsman.runs} runs
                                        </span>
                                        <span className="stat-item">
                                            <i className="ri-line-chart-line"></i>
                                            Avg: {batsman.average}
                                        </span>
                                        <span className="stat-item">
                                            <i className="ri-medal-line"></i>
                                            {batsman.centuries} 100s
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Bowlers */}
                <div className="performers-subsection">
                    <h3 className="section-title bowling-title">
                        <i className="ri-focus-3-line"></i>
                        Top Wicket Takers (Last 12 Months)
                    </h3>
                    <div className="performers-list">
                        {topBowlers.map((bowler, index) => (
                            <div key={index} className="performer-card">
                                <div className="performer-rank">#{index + 1}</div>
                                <div className="performer-info">
                                    <h4>{bowler.name}</h4>
                                    <div className="performer-stats">
                                        <span className="stat-item">
                                            <i className="ri-flashlight-line"></i>
                                            {bowler.wickets} wickets
                                        </span>
                                        <span className="stat-item">
                                            <i className="ri-line-chart-line"></i>
                                            Avg: {bowler.average}
                                        </span>
                                        <span className="stat-item">
                                            <i className="ri-trophy-line"></i>
                                            {bowler.fiveWickets} 5-fers
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

export default SquadSection;