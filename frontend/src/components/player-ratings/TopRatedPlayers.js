import React from 'react';
import { getRatingColor } from '../../../services/ratingCalculator';

const TopRatedPlayers = ({ players, onPlayerClick }) => {
    return (
        <div className="top-rated-players-section">
            <div className="section-header">
                <h2>
                    <i className="ri-medal-line"></i>
                    Top Rated Players - Last 30 Days
                </h2>
                <p>Players with the highest average ratings</p>
            </div>

            <div className="players-leaderboard">
                {players.map((player, idx) => (
                    <div
                        key={idx}
                        className="player-leaderboard-card"
                        onClick={() => onPlayerClick(player.name)}
                    >
                        <div className="rank-badge">
                            {player.rank === 1 && <span className="medal gold">🥇</span>}
                            {player.rank === 2 && <span className="medal silver">🥈</span>}
                            {player.rank === 3 && <span className="medal bronze">🥉</span>}
                            {player.rank > 3 && <span className="rank-number">#{player.rank}</span>}
                        </div>

                        <div className="player-info">
                            <div className="player-header">
                                <span className="player-name">{player.name}</span>
                                <span className="team-flag">{player.flag}</span>
                            </div>
                            <span className="team-name">{player.team}</span>
                        </div>

                        <div className="player-stats">
                            <div className="stat-item">
                                <span className="stat-label">Avg Rating</span>
                                <span
                                    className="stat-value"
                                    style={{ color: getRatingColor(player.avgRating) }}
                                >
                                    {player.avgRating}/10
                                </span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Matches</span>
                                <span className="stat-value">{player.matches}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">9.0+ Ratings</span>
                                <span className="stat-value">{player.ratingsAbove9}</span>
                            </div>
                        </div>

                        <div className="consistency-bar">
                            <div className="consistency-label">
                                <span>Consistency</span>
                                <span className="fire-emoji">🔥</span>
                            </div>
                            <div className="bar-container">
                                <div
                                    className="bar-fill"
                                    style={{
                                        width: `${player.percentage}%`,
                                        backgroundColor: getRatingColor(player.avgRating)
                                    }}
                                ></div>
                            </div>
                            <span className="percentage">{player.percentage}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatedPlayers;