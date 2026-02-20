import React from 'react';

const ResultCard = ({ result, onClick }) => {
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

    const badge = getFormatBadge(result.format);
    const isTeam1Winner = result.winner === result.team1.country;

    return (
        <div className="result-card" onClick={onClick}>
            <div className="result-header">
                <span
                    className="format-badge"
                    style={{ backgroundColor: badge.color }}
                >
                    {badge.label}
                </span>
                <span className="tournament-name">{result.tournament}</span>
            </div>

            <div className="result-teams">
                <div className={`team-result ${isTeam1Winner ? 'winner' : ''}`}>
                    <div className="team-info">
                        <span className="team-flag">{result.team1.flag}</span>
                        <span className="team-name">{result.team1.name}</span>
                        {isTeam1Winner && <i className="ri-trophy-fill winner-icon"></i>}
                    </div>
                    <div className="team-score">
                        <span className="score">{result.team1.score}</span>
                        <span className="overs">({result.team1.overs})</span>
                    </div>
                </div>

                <div className={`team-result ${!isTeam1Winner ? 'winner' : ''}`}>
                    <div className="team-info">
                        <span className="team-flag">{result.team2.flag}</span>
                        <span className="team-name">{result.team2.name}</span>
                        {!isTeam1Winner && <i className="ri-trophy-fill winner-icon"></i>}
                    </div>
                    <div className="team-score">
                        <span className="score">{result.team2.score}</span>
                        <span className="overs">({result.team2.overs})</span>
                    </div>
                </div>
            </div>

            <div className="result-summary">
                <p className="result-text">{result.result}</p>
                <div className="result-details">
                    <span className="detail-item">
                        <i className="ri-calendar-line"></i>
                        {formatDate(result.date)}
                    </span>
                    <span className="detail-item">
                        <i className="ri-map-pin-line"></i>
                        {result.venue}
                    </span>
                </div>
            </div>

            {result.playerOfMatch && (
                <div className="player-of-match">
                    <i className="ri-star-fill"></i>
                    <span>Player of Match: {result.playerOfMatch}</span>
                </div>
            )}
        </div>
    );
};

export default ResultCard;