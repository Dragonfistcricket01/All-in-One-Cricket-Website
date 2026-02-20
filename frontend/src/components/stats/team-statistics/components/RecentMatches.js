import React from 'react';
import '../TeamStatistics.css';

const RecentMatches = ({ matches, currentTeam }) => {
    if (!matches || matches.length === 0) {
        return (
            <div className="no-data-message">
                <i className="ri-information-line"></i>
                <p>No recent matches available</p>
            </div>
        );
    }

    return (
        <div className="recent-matches-section">
            <h2 className="section-title">
                <i className="ri-time-line"></i>
                Recent Matches
            </h2>

            <div className="matches-timeline">
                {matches.map((match, index) => (
                    <div key={index} className="match-timeline-item">
                        <div className="match-date-badge">
                            <i className="ri-calendar-line"></i>
                            <span>{new Date(match.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}</span>
                        </div>

                        <div className={`match-card ${match.result.toLowerCase()}`}>
                            <div className="match-header">
                                <div className="match-teams">
                                    <img
                                        src={match.opponentFlag}
                                        alt={match.opponent}
                                        className="team-flag"
                                        style={{ width: '32px', height: '24px', objectFit: 'cover', borderRadius: '4px' }}
                                    />
                                    <span className="vs-text">vs {match.opponent}</span>
                                </div>
                                <div className="match-format-badge">{match.format}</div>
                            </div>

                            <div className="match-venue">
                                <i className="ri-map-pin-line"></i>
                                <span>{match.venue}</span>
                            </div>

                            <div className={`match-result ${match.result.toLowerCase()}`}>
                                {match.result === 'Won' ? (
                                    <>
                                        <i className="ri-trophy-fill"></i>
                                        <span>Won by {match.margin}</span>
                                    </>
                                ) : match.result === 'Lost' ? (
                                    <>
                                        <i className="ri-close-circle-fill"></i>
                                        <span>Lost by {match.margin}</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="ri-record-circle-fill"></i>
                                        <span>{match.result}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {index < matches.length - 1 && (
                            <div className="timeline-connector"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentMatches;