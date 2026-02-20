import React from 'react';

const RankingCard = ({ player, rankChange }) => {
    return (
        <div className={`ranking-card-player-rankings rank-${player.rank <= 3 ? player.rank : 'other'}`}>
            {/* Rank Badge */}
            <div className="rank-badge-player-rankings">
                <span className="rank-number-player-rankings">{player.rank}</span>
            </div>

            {/* Player Image*/}
            <div className="player-image-container-player-rankings">
                <img
                    src={player.image || 'https://via.placeholder.com/150?text=' + player.player.charAt(0)}
                    alt={player.player}
                    className="player-image-player-rankings"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150?text=' + player.player.charAt(0);
                    }}
                />
            </div>

            {/* Player Info - FLAG MOVED HERE */}
            <div className="player-info-player-rankings">
                <div className="player-name-with-flag-player-rankings">
                    <h3 className="player-name-player-rankings">{player.player}</h3>
                    {/* Flag next to name */}
                    {typeof player.flag === 'string' && player.flag.startsWith('/') ? (
                        <img
                            src={player.flag}
                            alt={player.country}
                            className="flag-image-inline-player-rankings"
                        />
                    ) : (
                        <span className="flag-emoji-inline-player-rankings">{player.flag}</span>
                    )}
                </div>
                <span className="player-country-player-rankings">{player.country}</span>
            </div>

            {/* Rating */}
            <div className="rating-section-player-rankings">
                <div className="rating-value-player-rankings">{player.rating}</div>
                <div className="rating-label-player-rankings">Rating</div>
                {player.rating !== player.previousRating && (
                    <div className={`rating-change-player-rankings ${player.rating > player.previousRating ? 'positive' : 'negative'}`}>
                        <i className={`ri-arrow-${player.rating > player.previousRating ? 'up' : 'down'}-line`}></i>
                        {Math.abs(player.rating - player.previousRating)}
                    </div>
                )}
            </div>

            {/* Rank Change Indicator */}
            <div className="rank-change-section-player-rankings">
                {rankChange.type === 'up' && (
                    <div className="rank-change-player-rankings rank-up-player-rankings">
                        <i className="ri-arrow-up-line"></i>
                        <span>{rankChange.value}</span>
                    </div>
                )}
                {rankChange.type === 'down' && (
                    <div className="rank-change-player-rankings rank-down-player-rankings">
                        <i className="ri-arrow-down-line"></i>
                        <span>{rankChange.value}</span>
                    </div>
                )}
                {rankChange.type === 'same' && (
                    <div className="rank-change-player-rankings rank-same-player-rankings">
                        <i className="ri-subtract-line"></i>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RankingCard;