import React, { useState, useEffect } from 'react';
import { getVenuePerformance } from '../../../../services/teamStatsAPI';
import '../TeamStatistics.css';

const VenueAnalysisTab = ({ currentTeam }) => {
    const [venues, setVenues] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchVenues();
    }, [currentTeam]);

    const fetchVenues = async () => {
        setLoading(true);
        const data = await getVenuePerformance(currentTeam);
        setVenues(data);
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <i className="ri-loader-4-line spinner"></i>
                <p>Loading venue data...</p>
            </div>
        );
    }

    const getPerformanceRating = (winPercent) => {
        if (winPercent >= 60) return { label: 'Excellent', color: '#10b981' };
        if (winPercent >= 50) return { label: 'Good', color: '#3b82f6' };
        if (winPercent >= 40) return { label: 'Average', color: '#f59e0b' };
        return { label: 'Poor', color: '#ef4444' };
    };

    return (
        <div className="venue-analysis-tab">
            {/* Summary Cards */}
            <div className="venue-summary-grid">
                <div className="venue-summary-card">
                    <div className="summary-icon home">
                        <i className="ri-home-4-line"></i>
                    </div>
                    <div className="summary-content">
                        <h4>Home Venues</h4>
                        <p className="summary-value">{venues.length}</p>
                        <p className="summary-label">Major Stadiums</p>
                    </div>
                </div>

                <div className="venue-summary-card">
                    <div className="summary-icon best">
                        <i className="ri-trophy-line"></i>
                    </div>
                    <div className="summary-content">
                        <h4>Best Venue</h4>
                        <p className="summary-value">
                            {venues.length > 0 ? venues[0].venue.split(',')[0] : 'N/A'}
                        </p>
                        <p className="summary-label">
                            {venues.length > 0 ? `${venues[0].winPercent}% Win Rate` : ''}
                        </p>
                    </div>
                </div>

                <div className="venue-summary-card">
                    <div className="summary-icon total">
                        <i className="ri-bar-chart-box-line"></i>
                    </div>
                    <div className="summary-content">
                        <h4>Total Home Matches</h4>
                        <p className="summary-value">
                            {venues.reduce((sum, v) => sum + v.matches, 0)}
                        </p>
                        <p className="summary-label">All Venues Combined</p>
                    </div>
                </div>
            </div>

            {/* Venues List */}
            <div className="venues-list-section">
                <h3 className="section-title">
                    <i className="ri-map-pin-line"></i>
                    Performance by Venue
                </h3>

                <div className="venues-table-container">
                    <table className="venues-table">
                        <thead>
                            <tr>
                                <th>Venue</th>
                                <th>Matches</th>
                                <th>Won</th>
                                <th>Lost</th>
                                <th>Drawn</th>
                                <th>Win %</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {venues.map((venue, index) => {
                                const rating = getPerformanceRating(venue.winPercent);
                                return (
                                    <tr key={index}>
                                        <td className="venue-name">
                                            <i className="ri-building-line"></i>
                                            {venue.venue}
                                        </td>
                                        <td>{venue.matches}</td>
                                        <td className="won-cell">{venue.won}</td>
                                        <td className="lost-cell">{venue.lost}</td>
                                        <td className="drawn-cell">{venue.drawn}</td>
                                        <td className="win-percent-cell">
                                            <div className="percent-wrapper">
                                                <span>{venue.winPercent}%</span>
                                                <div className="percent-bar">
                                                    <div
                                                        className="percent-fill"
                                                        style={{
                                                            width: `${venue.winPercent}%`,
                                                            backgroundColor: rating.color
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span
                                                className="rating-badge"
                                                style={{
                                                    backgroundColor: `${rating.color}20`,
                                                    color: rating.color,
                                                    border: `1px solid ${rating.color}`
                                                }}
                                            >
                                                {rating.label}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Venue Cards (Alternative Mobile View) */}
            <div className="venue-cards-mobile">
                {venues.map((venue, index) => {
                    const rating = getPerformanceRating(venue.winPercent);
                    return (
                        <div key={index} className="venue-card-mobile">
                            <div className="venue-card-header">
                                <h4>{venue.venue}</h4>
                                <span
                                    className="rating-badge"
                                    style={{
                                        backgroundColor: `${rating.color}20`,
                                        color: rating.color
                                    }}
                                >
                                    {rating.label}
                                </span>
                            </div>
                            <div className="venue-card-stats">
                                <div className="venue-stat">
                                    <span className="stat-label">Matches</span>
                                    <span className="stat-value">{venue.matches}</span>
                                </div>
                                <div className="venue-stat">
                                    <span className="stat-label">Won</span>
                                    <span className="stat-value won">{venue.won}</span>
                                </div>
                                <div className="venue-stat">
                                    <span className="stat-label">Lost</span>
                                    <span className="stat-value lost">{venue.lost}</span>
                                </div>
                                <div className="venue-stat">
                                    <span className="stat-label">Win %</span>
                                    <span className="stat-value highlight">{venue.winPercent}%</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VenueAnalysisTab;