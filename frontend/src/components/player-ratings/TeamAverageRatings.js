import React from 'react';
import { getRatingColor } from '../../../services/ratingCalculator';

const TeamAverageRatings = ({ teams }) => {
    return (
        <div className="team-average-section">
            <div className="section-header">
                <h2>
                    <i className="ri-team-line"></i>
                    Team Performance - Last 10 Matches
                </h2>
                <p>Average player ratings by team</p>
            </div>

            <div className="team-ratings-grid">
                {teams.map((team, idx) => (
                    <div key={idx} className="team-rating-card">
                        <div className="team-rank">#{team.rank}</div>

                        <div className="team-header">
                            <span className="team-flag">{team.flag}</span>
                            <h3>{team.team}</h3>
                        </div>

                        <div className="team-rating-display">
                            <span
                                className="rating-value"
                                style={{ color: getRatingColor(team.avgRating) }}
                            >
                                {team.avgRating}/10
                            </span>
                            <span className="rating-label">Average Rating</span>
                        </div>

                        <div className="performance-bar">
                            <div
                                className="bar-fill"
                                style={{
                                    width: `${team.percentage}%`,
                                    backgroundColor: getRatingColor(team.avgRating)
                                }}
                            ></div>
                        </div>
                        <span className="percentage-label">{team.percentage}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamAverageRatings;