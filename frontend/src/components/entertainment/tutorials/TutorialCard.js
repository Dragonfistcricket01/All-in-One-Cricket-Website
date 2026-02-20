import React from 'react';
import { useTutorials } from '../../../context/TutorialsContext';
import './Tutorials.css';

const TutorialCard = ({ tutorial, onClick, featured = false }) => {
    const { isCompleted, isFavorite, toggleFavorite, bookmarkedSteps } = useTutorials();

    const completed = isCompleted(tutorial.id);
    const favorite = isFavorite(tutorial.id);

    // Check if this tutorial has any bookmarked steps
    const hasBookmarks = bookmarkedSteps[tutorial.id] && bookmarkedSteps[tutorial.id].length > 0;
    const bookmarkCount = hasBookmarks ? bookmarkedSteps[tutorial.id].length : 0;

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        toggleFavorite(tutorial.id);
    };

    const getTypeIcon = (type) => {
        switch (type) {
            case 'step-by-step': return 'ri-list-ordered';
            case 'video-demo': return 'ri-vidicon-line';
            case 'practice-plan': return 'ri-calendar-check-line';
            case 'equipment': return 'ri-tools-line';
            default: return 'ri-play-circle-line';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'step-by-step': return 'Step-by-Step';
            case 'video-demo': return 'Video Demo';
            case 'practice-plan': return 'Practice Plan';
            case 'equipment': return 'Equipment';
            default: return 'Tutorial';
        }
    };

    return (
        <div
            className={`tutorial-card ${featured ? 'featured-card-tutorials' : ''}`}
            onClick={onClick}
        >
            {/* Thumbnail */}
            <div className="tutorial-thumbnail">
                <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x225/1a1a2e/ff6300?text=Tutorial`;
                    }}
                />
                <div className="tutorial-duration">{tutorial.duration}</div>

                {/* Favorite Button */}
                <button
                    className={`favorite-btn-tutorials ${favorite ? 'active' : ''}`}
                    onClick={handleFavoriteClick}
                >
                    <i className={favorite ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                </button>

                {/* Completed Badge */}
                {completed && (
                    <div className="completed-badge-tutorials">
                        <i className="ri-check-double-line"></i>
                    </div>
                )}

                {/* Bookmark Badge - NEW! */}
                {hasBookmarks && (
                    <div className="bookmark-badge-tutorials">
                        <i className="ri-bookmark-fill"></i>
                        <span>{bookmarkCount}</span>
                    </div>
                )}

                {/* Featured Badge */}
                {featured && (
                    <div className="featured-badge-tutorial">
                        <i className="ri-star-fill"></i>
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="tutorial-card-content">
                {/* Type Badge */}
                <div className="tutorial-type-badge">
                    <i className={getTypeIcon(tutorial.type)}></i>
                    {getTypeLabel(tutorial.type)}
                </div>

                {/* Title */}
                <h3 className="tutorial-card-title">{tutorial.title}</h3>

                {/* Instructor */}
                <div className="tutorial-instructor">
                    <i className="ri-user-star-line"></i>
                    <span>{tutorial.instructor}</span>
                </div>

                {/* Meta Info */}
                <div className="tutorial-meta">
                    <div className="meta-item-tutorials">
                        <i className=""></i>
                        <span>{(tutorial.views / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="meta-item-tutorials">
                        <i className="ri-star-fill"></i>
                        <span>{tutorial.rating}</span>
                    </div>
                    <div className={`difficulty-badge-tutorials ${tutorial.difficulty}`}>
                        {tutorial.difficulty}
                    </div>
                </div>

                {/* Topics Preview */}
                <div className="tutorial-topics-preview">
                    {tutorial.topics.slice(0, 2).map((topic, index) => (
                        <span key={index} className="topic-tag-tutorials">
                            {topic}
                        </span>
                    ))}
                    {tutorial.topics.length > 2 && (
                        <span className="topic-tag-tutorials more">
                            +{tutorial.topics.length - 2} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TutorialCard;