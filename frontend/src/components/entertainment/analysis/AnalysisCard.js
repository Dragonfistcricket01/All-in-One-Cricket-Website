import React from 'react';
import { useAnalysis } from '../../../context/AnalysisContext';
import './Analysis.css';

const AnalysisCard = ({ analysis, onClick, featured = false }) => {
    const { isCompleted, isFavorite, toggleFavorite, bookmarkedMoments } = useAnalysis();

    const completed = isCompleted(analysis.id);
    const favorite = isFavorite(analysis.id);

    // Check if this analysis has any bookmarked moments
    const hasBookmarks = bookmarkedMoments[analysis.id] && bookmarkedMoments[analysis.id].length > 0;
    const bookmarkCount = hasBookmarks ? bookmarkedMoments[analysis.id].length : 0;

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        toggleFavorite(analysis.id);
    };

    const getTypeIcon = (type) => {
        switch (type) {
            case 'match-analysis': return 'ri-trophy-line';
            case 'player-analysis': return 'ri-user-star-line';
            case 'strategic-analysis': return 'ri-focus-3-line';
            case 'data-insights': return 'ri-bar-chart-box-line';
            default: return 'ri-file-list-3-line';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'match-analysis': return 'Match Analysis';
            case 'player-analysis': return 'Player Analysis';
            case 'strategic-analysis': return 'Strategic Analysis';
            case 'data-insights': return 'Data Insights';
            default: return 'Analysis';
        }
    };

    const getFormatBadge = () => {
        if (analysis.format) {
            return (
                <div className="format-badge-analysis">
                    {analysis.format}
                </div>
            );
        }
        return null;
    };

    return (
        <div
            className={`analysis-card ${featured ? 'featured-card-analysis' : ''}`}
            onClick={onClick}
        >
            {/* Thumbnail */}
            <div className="analysis-thumbnail">
                <img
                    src={analysis.thumbnail}
                    alt={analysis.title}
                    onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x225/1a1a2e/ff6300?text=Analysis`;
                    }}
                />
                <div className="analysis-duration">{analysis.duration}</div>

                {/* Format Badge */}
                {getFormatBadge()}

                {/* Favorite Button */}
                <button
                    className={`favorite-btn-analysis ${favorite ? 'active' : ''}`}
                    onClick={handleFavoriteClick}
                >
                    <i className={favorite ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                </button>

                {/* Completed Badge */}
                {completed && (
                    <div className="completed-badge-analysis">
                        <i className="ri-check-double-line"></i>
                    </div>
                )}

                {/* Bookmark Badge */}
                {hasBookmarks && (
                    <div className="bookmark-badge-analysis">
                        <i className="ri-bookmark-fill"></i>
                        <span>{bookmarkCount}</span>
                    </div>
                )}

                {/* Featured Badge */}
                {featured && (
                    <div className="featured-badge-analysis">
                        <i className="ri-star-fill"></i>
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="analysis-card-content">
                {/* Type Badge */}
                <div className="analysis-type-badge">
                    <i className={getTypeIcon(analysis.type)}></i>
                    {getTypeLabel(analysis.type)}
                </div>

                {/* Title */}
                <h3 className="analysis-card-title">{analysis.title}</h3>

                {/* Match/Player Info */}
                {analysis.match && (
                    <div className="analysis-match-info">
                        <i className="ri-trophy-line"></i>
                        <span>{analysis.match}</span>
                    </div>
                )}
                {analysis.player && (
                    <div className="analysis-player-info">
                        <i className="ri-user-star-line"></i>
                        <span>{analysis.player}</span>
                    </div>
                )}

                {/* Venue/Date */}
                {analysis.venue && (
                    <div className="analysis-venue">
                        <i className="ri-map-pin-line"></i>
                        <span>{analysis.venue}</span>
                    </div>
                )}

                {/* Meta Info */}
                <div className="analysis-meta">
                    <div className="meta-item-analysis">
                        <i className=""></i>
                        <span>{(analysis.views / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="meta-item-analysis">
                        <i className="ri-star-fill"></i>
                        <span>{analysis.rating}</span>
                    </div>
                </div>

                {/* Tags Preview */}
                {analysis.tags && analysis.tags.length > 0 && (
                    <div className="analysis-tags-preview">
                        {analysis.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="tag-item-analysis">
                                {tag}
                            </span>
                        ))}
                        {analysis.tags.length > 2 && (
                            <span className="tag-item-analysis more">
                                +{analysis.tags.length - 2}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnalysisCard;