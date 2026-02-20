import React from 'react';
import { useLessons } from '../../../context/LessonsContext';

const LessonCard = ({ lesson, onClick, featured = false }) => {
    const { isCompleted, isFavorite, toggleFavorite, getProgress } = useLessons();

    const completed = isCompleted(lesson.id);
    const favorite = isFavorite(lesson.id);
    const progress = getProgress(lesson.id);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        toggleFavorite(lesson.id);
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'beginner': return '#10b981';
            case 'intermediate': return '#f59e0b';
            case 'advanced': return '#ef4444';
            default: return '#6b7280';
        }
    };

    return (
        <div
            className={`lesson-card ${featured ? 'featured-card-lessons' : ''} ${completed ? 'completed-card-lessons' : ''}`}
            onClick={onClick}
        >
            {/* Thumbnail */}
            <div className="lesson-thumbnail">
                <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    onError={(e) => {
                        e.target.src = `https://via.placeholder.com/640x360/1a1a2e/ff6300?text=${encodeURIComponent(lesson.title)}`;
                    }}
                />
                <div className="thumbnail-overlay-lessons">
                    <div className="play-button-lessons">
                        <i className="ri-play-circle-fill"></i>
                    </div>
                    <div className="duration-badge-lessons">
                        <i className="ri-time-line"></i>
                        {lesson.duration}
                    </div>
                </div>
                {featured && (
                    <div className="featured-badge-lessons">
                        <i className="ri-star-fill"></i>
                        Featured
                    </div>
                )}
                {completed && (
                    <div className="completed-badge-lessons">
                        <i className="ri-check-double-line"></i>
                        Completed
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="lesson-content">
                {/* Header */}
                <div className="lesson-header">
                    <div className="lesson-meta">
                        <span
                            className="difficulty-badge-lessons"
                            style={{
                                backgroundColor: `${getDifficultyColor(lesson.difficulty)}20`,
                                color: getDifficultyColor(lesson.difficulty),
                                border: `1px solid ${getDifficultyColor(lesson.difficulty)}40`
                            }}
                        >
                            {lesson.difficulty}
                        </span>
                        <span className="category-badge-lessons">
                            {lesson.category}
                        </span>
                    </div>
                    <button
                        className={`favorite-btn-lessons ${favorite ? 'active' : ''}`}
                        onClick={handleFavoriteClick}
                        aria-label="Toggle Favorite"
                    >
                        <i className={favorite ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                    </button>
                </div>

                {/* Title */}
                <h3 className="lesson-title">{lesson.title}</h3>

                {/* Instructor */}
                <div className="lesson-instructor">
                    <i className="ri-user-line"></i>
                    <span>{lesson.instructor}</span>
                </div>

                {/* Description */}
                <p className="lesson-description">{lesson.description}</p>

                {/* Topics */}
                <div className="lesson-topics">
                    {lesson.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="topic-tag-lessons">
                            {topic}
                        </span>
                    ))}
                    {lesson.topics.length > 3 && (
                        <span className="topic-tag-lessons more-lessons">
                            +{lesson.topics.length - 3}
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="lesson-footer">
                    <div className="lesson-stats">
                        <div className="stat-item-lessons">
                            <i className="ri-target-line"></i>
                            <span>{(lesson.views / 1000).toFixed(1)}K</span>
                        </div>
                        <div className="stat-item-lessons rating-lessons">
                            <i className="ri-star-fill"></i>
                            <span>{lesson.rating}</span>
                        </div>
                    </div>
                    {progress > 0 && (
                        <div className="progress-indicator-lessons">
                            <div className="progress-bar-lessons">
                                <div
                                    className="progress-fill-lessons"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <span className="progress-text-lessons">{Math.round(progress)}%</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonCard;