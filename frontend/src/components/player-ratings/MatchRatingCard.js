import React, { useState } from 'react';
import { getRatingColor } from '../../../services/ratingCalculator';

const MatchRatingCard = ({ match, onPlayerClick }) => {
    const [showFullRatings, setShowFullRatings] = useState(false);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const getFormatBadge = (format) => {
        const badges = {
            test: { label: 'Test', color: '#dc2626' },
            odi: { label: 'ODI', color: '#2563eb' },
            t20i: { label: 'T20I', color: '#16a34a' }
        };
        return badges[format] || badges.t20i;
    };

    const badge = getFormatBadge(match.format);

    return (
        <div className="match-rating-card">
            <div className="match-rating-header">
                <div className="match-info">
                    <span
                        className="format-badge"
                        style={{ backgroundColor: badge.color }}
                    >
                        {badge.label}
                    </span>
                    <h3>{match.matchTitle}</h3>
                </div>
                <div className="match-meta">
                    <span><i className="ri-calendar-line"></i> {formatDate(match.date)}</span>
                    <span><i className="ri-map-pin-line"></i> {match.venue}</span>
                </div>
            </div>

            <div className="match-result">
                <i className="ri-trophy-fill"></i>
                <span>{match.result}</span>
            </div>

            {/* Top Rated Players */}
            <div className="top-rated-section">
                <h4>
                    <i className="ri-star-fill"></i>
                    Top Rated Performances
                </h4>
                <div className="top-performers">
                    {match.topRated.map((player, idx) => (
                        <div
                            key={idx}
                            className="performer-card"
                            onClick={() => onPlayerClick(player.name)}
                        >
                            <div className="performer-header">
                                <span className="player-name">{player.name}</span>
                                <span className="team-badge">{player.team}</span>
                            </div>
                            <div className="performer-stats">
                                <span className="performance">{player.performance}</span>
                                <div
                                    className="rating-display"
                                    style={{ color: getRatingColor(player.rating) }}
                                >
                                    <span className="stars">⭐⭐⭐⭐⭐</span>
                                    <span className="rating-value">{player.rating}/10</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Show All Ratings Button */}
            {match.allRatings && (
                <button
                    className="show-all-btn"
                    onClick={() => setShowFullRatings(!showFullRatings)}
                >
                    {showFullRatings ? 'Hide' : 'Show'} All Player Ratings
                    <i className={`ri-arrow-${showFullRatings ? 'up' : 'down'}-s-line`}></i>
                </button>
            )}

            {/* Full Ratings */}
            {showFullRatings && match.allRatings && (
                <div className="full-ratings-section">
                    {/* Team 1 Ratings */}
                    <div className="team-ratings">
                        <h5>{match.team1} Ratings</h5>

                        {/* Batting */}
                        <div className="ratings-category">
                            <h6>Batting</h6>
                            <div className="ratings-table">
                                {match.allRatings[match.team1].batting.map((player, idx) => (
                                    <div
                                        key={idx}
                                        className="rating-row"
                                        onClick={() => onPlayerClick(player.name)}
                                    >
                                        <span className="player-name">{player.name}</span>
                                        <span className="performance">{player.score}</span>
                                        <div className="rating-cell">
                                            <span className="stars">{player.stars}</span>
                                            <span
                                                className="rating-value"
                                                style={{ color: getRatingColor(player.rating) }}
                                            >
                                                {player.rating}/10
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bowling */}
                        {match.allRatings[match.team1].bowling && (
                            <div className="ratings-category">
                                <h6>Bowling</h6>
                                <div className="ratings-table">
                                    {match.allRatings[match.team1].bowling.map((player, idx) => (
                                        <div
                                            key={idx}
                                            className="rating-row"
                                            onClick={() => onPlayerClick(player.name)}
                                        >
                                            <span className="player-name">{player.name}</span>
                                            <span className="performance">{player.figures}</span>
                                            <div className="rating-cell">
                                                <span className="stars">{player.stars}</span>
                                                <span
                                                    className="rating-value"
                                                    style={{ color: getRatingColor(player.rating) }}
                                                >
                                                    {player.rating}/10
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Team 2 Ratings */}
                    <div className="team-ratings">
                        <h5>{match.team2} Ratings</h5>

                        {/* Batting */}
                        <div className="ratings-category">
                            <h6>Batting</h6>
                            <div className="ratings-table">
                                {match.allRatings[match.team2].batting.map((player, idx) => (
                                    <div
                                        key={idx}
                                        className="rating-row"
                                        onClick={() => onPlayerClick(player.name)}
                                    >
                                        <span className="player-name">{player.name}</span>
                                        <span className="performance">{player.score}</span>
                                        <div className="rating-cell">
                                            <span className="stars">{player.stars}</span>
                                            <span
                                                className="rating-value"
                                                style={{ color: getRatingColor(player.rating) }}
                                            >
                                                {player.rating}/10
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bowling */}
                        {match.allRatings[match.team2].bowling && (
                            <div className="ratings-category">
                                <h6>Bowling</h6>
                                <div className="ratings-table">
                                    {match.allRatings[match.team2].bowling.map((player, idx) => (
                                        <div
                                            key={idx}
                                            className="rating-row"
                                            onClick={() => onPlayerClick(player.name)}
                                        >
                                            <span className="player-name">{player.name}</span>
                                            <span className="performance">{player.figures}</span>
                                            <div className="rating-cell">
                                                <span className="stars">{player.stars}</span>
                                                <span
                                                    className="rating-value"
                                                    style={{ color: getRatingColor(player.rating) }}
                                                >
                                                    {player.rating}/10
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MatchRatingCard;