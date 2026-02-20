import React from 'react';
import { useTeamRankings } from '../../../context/TeamRankingsContext';
import './TeamRankings.css';

const TeamRankingCard = ({ team, format, onClick }) => {
    const { isFavorite, toggleFavorite, addToComparison, comparedTeams } = useTeamRankings();

    const favorite = isFavorite(team.country, format);
    const isInComparison = comparedTeams.some(t => t.key === `${team.country}-${format}`);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        toggleFavorite(team.country, format);
    };

    const handleCompareClick = (e) => {
        e.stopPropagation();
        addToComparison(team, format);
    };

    const getRankChange = () => {
        // Mock rank change (you can calculate based on previous data)
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        if (change > 0) return { value: change, direction: 'up' };
        if (change < 0) return { value: Math.abs(change), direction: 'down' };
        return { value: 0, direction: 'same' };
    };

    const rankChange = getRankChange();

    const getFormIcon = (result) => {
        switch (result) {
            case 'W': return { icon: 'ri-checkbox-circle-fill', color: '#10b981' };
            case 'L': return { icon: 'ri-close-circle-fill', color: '#ef4444' };
            case 'D': return { icon: 'ri-record-circle-fill', color: '#f59e0b' };
            case 'T': return { icon: 'ri-equal-fill', color: '#3b82f6' };
            default: return { icon: 'ri-record-circle-fill', color: '#6b7280' };
        }
    };

    return (
        <div className="team-ranking-card" onClick={onClick}>
            {/* Rank Badge */}
            <div className="rank-badge-team-rankings">
                <div className="rank-number-team-rankings">{team.rank}</div>
                {rankChange.direction !== 'same' && (
                    <div className={`rank-change-team-rankings ${rankChange.direction}`}>
                        <i className={rankChange.direction === 'up' ? 'ri-arrow-up-line' : 'ri-arrow-down-line'}></i>
                        <span>{rankChange.value}</span>
                    </div>
                )}
            </div>

            {/* Team Info */}
            <div className="team-info-team-rankings">
                <div className="team-flag-name-team-rankings">
                    <img
                        src={team.image}
                        alt={team.team}
                        className="team-flag-team-rankings"
                        style={{ width: '48px', height: '36px', objectFit: 'cover' }}
                    />
                    <div>
                        <h3 className="team-name-team-rankings">{team.team}</h3>
                        <span className="team-country-team-rankings">{team.country}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="team-actions-team-rankings">
                    <button
                        className={`action-icon-btn-team-rankings favorite ${favorite ? 'active' : ''}`}
                        onClick={handleFavoriteClick}
                        title={favorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        <i className={favorite ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                    </button>
                    <button
                        className={`action-icon-btn-team-rankings compare ${isInComparison ? 'active' : ''}`}
                        onClick={handleCompareClick}
                        title="Add to comparison"
                        disabled={isInComparison}
                    >
                        <i className="ri-bar-chart-horizontal-line"></i>
                    </button>
                </div>
            </div>

            {/* Rating & Points */}
            <div className="team-rating-section-team-rankings">
                <div className="rating-box-team-rankings">
                    <div className="rating-label-team-rankings">Rating</div>
                    <div className="rating-value-team-rankings">{team.rating}</div>
                </div>
                <div className="points-box-team-rankings">
                    <div className="points-label-team-rankings">Points</div>
                    <div className="points-value-team-rankings">{team.points.toLocaleString()}</div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="team-stats-grid-team-rankings">
                <div className="stat-item-team-rankings">
                    <span className="stat-label-team-rankings">Matches</span>
                    <span className="stat-value-team-rankings">{team.matches}</span>
                </div>
                <div className="stat-item-team-rankings">
                    <span className="stat-label-team-rankings">Won</span>
                    <span className="stat-value-team-rankings won">{team.won}</span>
                </div>
                <div className="stat-item-team-rankings">
                    <span className="stat-label-team-rankings">Lost</span>
                    <span className="stat-value-team-rankings lost">{team.lost}</span>
                </div>
                {team.drawn !== undefined && (
                    <div className="stat-item-team-rankings">
                        <span className="stat-label-team-rankings">Drawn</span>
                        <span className="stat-value-team-rankings drawn">{team.drawn}</span>
                    </div>
                )}
                {team.tied !== undefined && (
                    <div className="stat-item-team-rankings">
                        <span className="stat-label-team-rankings">Tied</span>
                        <span className="stat-value-team-rankings tied">{team.tied}</span>
                    </div>
                )}
            </div>

            {/* Recent Form */}
            <div className="recent-form-team-rankings">
                <span className="form-label-team-rankings">Recent Form</span>
                <div className="form-indicators-team-rankings">
                    {team.recentForm.map((result, index) => {
                        const { icon, color } = getFormIcon(result);
                        return (
                            <div
                                key={index}
                                className="form-indicator-team-rankings"
                                style={{ color }}
                                title={result === 'W' ? 'Win' : result === 'L' ? 'Loss' : result === 'D' ? 'Draw' : 'Tie'}
                            >
                                <i className={icon}></i>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TeamRankingCard;