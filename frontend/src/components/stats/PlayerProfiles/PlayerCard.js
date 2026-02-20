import React from 'react';

const PlayerCard = ({ player, onClick }) => {
    return (
        <div className="player-card-player-profiles" onClick={onClick}>
            {/* Player Image */}
            <div className="player-image-container-player-profiles">
                <img
                    src={player.image || 'https://via.placeholder.com/300x300?text=Player'}
                    alt={player.name}
                    className="player-image-player-profiles"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=' + player.name.charAt(0);
                    }}
                />
                <div className="player-country-badge-player-profiles">
                    {/* FIXED: Simplified - just check if flag exists */}
                    {player.flag ? (
                        <img
                            src={player.flag}
                            alt={player.country}
                            className="flag-image-player-profiles"
                            onError={(e) => {
                                // Fallback to emoji if image fails
                                e.target.style.display = 'none';
                                const fallback = document.createElement('span');
                                fallback.className = 'flag-player-profiles';
                                fallback.textContent = player.flagEmoji || '🏴';
                                e.target.parentNode.insertBefore(fallback, e.target);
                            }}
                        />
                    ) : (
                        <span className="flag-player-profiles">{player.flagEmoji || '🏴'}</span>
                    )}
                    <span className="country-player-profiles">{player.country}</span>
                </div>
            </div>

            {/* Player Info */}
            <div className="player-info-player-profiles">
                <h3 className="player-name-player-profiles">{player.name}</h3>
                <div className="player-meta-player-profiles">
                    <span className="player-role-player-profiles">
                        <i className="ri-user-line"></i>
                        {player.role}
                    </span>
                    <span className="player-age-player-profiles">
                        <i className="ri-calendar-line"></i>
                        {player.age} years
                    </span>
                </div>

                {/* Batting Style */}
                <div className="player-style-player-profiles">
                    <div className="style-item-player-profiles">
                        <span>{player.battingStyle}</span>
                    </div>
                    {player.bowlingStyle !== 'N/A' && (
                        <div className="style-item-player-profiles">
                            <span>{player.bowlingStyle}</span>
                        </div>
                    )}
                </div>

                {/* Quick Stats */}
                <div className="player-quick-stats-player-profiles">
                    <div className="stat-item-player-profiles">
                        <span className="stat-label-player-profiles">Test</span>
                        <span className="stat-value-player-profiles">{player.careerStats?.test?.matches || 0}</span>
                    </div>
                    <div className="stat-item-player-profiles">
                        <span className="stat-label-player-profiles">ODI</span>
                        <span className="stat-value-player-profiles">{player.careerStats?.odi?.matches || 0}</span>
                    </div>
                    <div className="stat-item-player-profiles">
                        <span className="stat-label-player-profiles">T20I</span>
                        <span className="stat-value-player-profiles">{player.careerStats?.t20i?.matches || 0}</span>
                    </div>
                </div>

                {/* View Details Button */}
                <button className="view-details-btn-player-profiles">
                    View Full Profile
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
    );
};

export default PlayerCard;