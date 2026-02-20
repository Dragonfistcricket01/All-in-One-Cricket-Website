import React, { useState, useEffect } from 'react';
import { getPlayerRatingHistory } from '../../../services/playerRatingsAPI';
import { getRatingColor } from '../../../services/ratingCalculator';

const PlayerHistoryModal = ({ playerName, onClose }) => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHistory();
    }, [playerName]);

    const fetchHistory = async () => {
        const data = await getPlayerRatingHistory(playerName);
        setHistory(data);
        setLoading(false);
    };

    const calculateAverage = () => {
        if (history.length === 0) return 0;
        const sum = history.reduce((acc, match) => acc + parseFloat(match.rating), 0);
        return (sum / history.length).toFixed(1);
    };

    const getHighRatings = () => {
        return history.filter(match => parseFloat(match.rating) >= 7.0).length;
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content player-history-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>
                        <i className="ri-user-line"></i>
                        {playerName} - Performance History
                    </h2>
                    <button className="close-btn" onClick={onClose}>
                        <i className="ri-close-line"></i>
                    </button>
                </div>

                <div className="modal-body">
                    {loading ? (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                            <p>Loading player history...</p>
                        </div>
                    ) : (
                        <>
                            {/* Stats Summary */}
                            <div className="player-stats-summary">
                                <div className="stat-box">
                                    <span className="stat-label">Average Rating</span>
                                    <span
                                        className="stat-value"
                                        style={{ color: getRatingColor(calculateAverage()) }}
                                    >
                                        {calculateAverage()}/10
                                    </span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Matches</span>
                                    <span className="stat-value">{history.length}</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Ratings Above 7.0</span>
                                    <span className="stat-value">
                                        {getHighRatings()} / {history.length}
                                    </span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Consistency</span>
                                    <span className="stat-value">
                                        {history.length > 0 ? Math.round((getHighRatings() / history.length) * 100) : 0}%
                                    </span>
                                </div>
                            </div>

                            {/* Rating History */}
                            <div className="rating-history-list">
                                <h3>Recent Performances</h3>
                                {history.map((match, idx) => (
                                    <div key={idx} className="history-item">
                                        <div className="history-date">
                                            <i className="ri-calendar-line"></i>
                                            {formatDate(match.date)}
                                        </div>
                                        <div className="history-details">
                                            <div className="match-opponent">
                                                vs {match.opponent}
                                                <span className="format-tag">{match.format.toUpperCase()}</span>
                                            </div>
                                            <div className="performance">{match.score}</div>
                                        </div>
                                        <div
                                            className="history-rating"
                                            style={{ backgroundColor: getRatingColor(match.rating) + '20' }}
                                        >
                                            <span
                                                className="rating-value"
                                                style={{ color: getRatingColor(match.rating) }}
                                            >
                                                {match.rating}/10
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Simple Rating Graph */}
                            <div className="rating-graph-section">
                                <h3>Rating Trend</h3>
                                <div className="simple-graph">
                                    {history.map((match, idx) => {
                                        const height = (parseFloat(match.rating) / 10) * 100;
                                        return (
                                            <div key={idx} className="graph-bar-wrapper">
                                                <div
                                                    className="graph-bar"
                                                    style={{
                                                        height: `${height}%`,
                                                        backgroundColor: getRatingColor(match.rating)
                                                    }}
                                                >
                                                    <span className="bar-value">{match.rating}</span>
                                                </div>
                                                <span className="bar-label">{idx + 1}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlayerHistoryModal;