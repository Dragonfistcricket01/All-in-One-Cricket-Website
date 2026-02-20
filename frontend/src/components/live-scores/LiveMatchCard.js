import React from 'react';

const LiveMatchCard = ({ match, onClick }) => {
    const getFormatBadge = (type) => {
        const badges = {
            test: { label: 'Test', color: '#dc2626' },
            odi: { label: 'ODI', color: '#2563eb' },
            t20: { label: 'T20I', color: '#16a34a' }
        };
        return badges[type] || badges.t20;
    };

    const badge = getFormatBadge(match.matchType);
    const team1Score = match.score?.[1] || {};
    const team2Score = match.score?.[0] || {};

    return (
        <div className="live-match-card" onClick={onClick}>
            <div className="live-match-header">
                <div className="live-badge">
                    <span className="pulse-dot"></span>
                    LIVE
                </div>
                <span
                    className="format-badge"
                    style={{ backgroundColor: badge.color }}
                >
                    {badge.label}
                </span>
            </div>

            <div className="match-title">
                <h3>{match.name}</h3>
                <p className="venue">
                    <i className="ri-map-pin-line"></i>
                    {match.venue}
                </p>
            </div>

            <div className="live-score-display">
                <div className="team-score">
                    <span className="team-name">{match.teams[0]}</span>
                    <span className="score">
                        {team1Score.r}/{team1Score.w}
                        <span className="overs">({team1Score.o})</span>
                    </span>
                </div>
                <div className="team-score chasing">
                    <span className="team-name">{match.teams[1]}</span>
                    <span className="score">
                        {team2Score.r}/{team2Score.w}
                        <span className="overs">({team2Score.o})</span>
                    </span>
                </div>
            </div>

            <div className="match-status">
                <i className="ri-information-line"></i>
                <span>{match.status}</span>
            </div>
        </div>
    );
};

export default LiveMatchCard;