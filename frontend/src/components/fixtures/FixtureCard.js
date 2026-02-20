import React from 'react';

const FixtureCard = ({ fixture, onClick }) => {
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

    const badge = getFormatBadge(fixture.format);

    return (
        <div className="fixture-card" onClick={onClick}>
            <div className="fixture-header">
                <span
                    className="format-badge"
                    style={{ backgroundColor: badge.color }}
                >
                    {badge.label}
                </span>
                <span className="tournament-name">{fixture.tournament}</span>
            </div>

            <div className="fixture-teams">
                <div className="team">
                    <span className="team-flag">{fixture.team1.flag}</span>
                    <span className="team-name">{fixture.team1.name}</span>
                </div>
                <div className="vs-divider">vs</div>
                <div className="team">
                    <span className="team-flag">{fixture.team2.flag}</span>
                    <span className="team-name">{fixture.team2.name}</span>
                </div>
            </div>

            <div className="fixture-details">
                <div className="detail-item">
                    <i className="ri-calendar-line"></i>
                    <span>{formatDate(fixture.date)}</span>
                </div>
                <div className="detail-item">
                    <i className="ri-time-line"></i>
                    <span>{fixture.time}</span>
                </div>
                <div className="detail-item">
                    <i className="ri-map-pin-line"></i>
                    <span>{fixture.venue}</span>
                </div>
            </div>
        </div>
    );
};

export default FixtureCard;