import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLessonById, getRelatedLessons } from '../../../services/lessonsAPI';
import { useLessons } from '../../../context/LessonsContext';
//import { getLessonById, getRelatedLessons } from '../../../services/lessonsAPI';
//import { useLessons } from '../../../context/LessonsContext';
import LessonPlayer from './LessonPlayer';
//import LessonCard from './LessonCard';
import './Lessons.css';

const LessonDetail = () => {
    const { lessonId } = useParams();
    const navigate = useNavigate();
    const {
        isCompleted,
        isFavorite,
        toggleFavorite,
        markAsCompleted,
        getNote,
        saveNote,
        lessonNotes
    } = useLessons();

    const [lesson, setLesson] = useState(null);
    const [relatedLessons, setRelatedLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [note, setNote] = useState('');
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        fetchLesson();
        window.scrollTo(0, 0);
    }, [lessonId]);

    const fetchLesson = async () => {
        setLoading(true);
        try {
            const lessonData = await getLessonById(lessonId);
            const related = await getRelatedLessons(lessonId, 3);

            setLesson(lessonData);
            setRelatedLessons(related);
            setNote(getNote(lessonId));
        } catch (error) {
            console.error('Error fetching lesson:', error);
        }
        setLoading(false);
    };

    const handleComplete = () => {
        markAsCompleted(lessonId);
    };

    const handleFavorite = () => {
        toggleFavorite(lessonId);
    };

    const handleSaveNote = () => {
        saveNote(lessonId, note);

        // Show toast notification instead of alert
        const successMsg = document.createElement('div');
        successMsg.className = 'save-success-toast-lessons';
        successMsg.innerHTML = '<i class="ri-check-line"></i> Notes saved successfully!';
        document.body.appendChild(successMsg);

        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    };

    const handleDeleteNote = () => {
        if (window.confirm('Are you sure you want to delete your notes for this lesson?')) {
            setNote('');
            saveNote(lessonId, '');

            const successMsg = document.createElement('div');
            successMsg.className = 'save-success-toast-lessons delete';
            successMsg.innerHTML = '<i class="ri-delete-bin-line"></i> Notes deleted';
            document.body.appendChild(successMsg);

            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }
    };

    const handleRelatedClick = (relatedId) => {
        navigate(`/lessons/${relatedId}`);
    };

    if (loading) {
        return (
            <div className="lesson-detail-page">
                <div className="loading-container-lessons">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading lesson...</p>
                </div>
            </div>
        );
    }

    if (!lesson) {
        return (
            <div className="lesson-detail-page">
                <div className="error-container-lessons">
                    <i className="ri-error-warning-line"></i>
                    <h3>Lesson Not Found</h3>
                    <p>The lesson you're looking for doesn't exist.</p>
                    <button onClick={() => navigate('/lessons')} className="back-btn-lessons">
                        <i className="ri-arrow-left-line"></i>
                        Back to Lessons
                    </button>
                </div>
            </div>
        );
    }

    const completed = isCompleted(lessonId);
    const favorite = isFavorite(lessonId);

    return (
        <div className="lesson-detail-page">
            {/* Back Button */}
            <div className="lesson-back">
                <button onClick={() => navigate('/lessons')} className="back-button-lessons">
                    <i className="ri-arrow-left-line"></i>
                    Back to Lessons
                </button>
            </div>

            {/* Video Player Section */}
            <div className="lesson-player-section">
                <LessonPlayer
                    videoId={lesson.videoId}
                    title={lesson.title}
                    lessonId={lessonId}
                />
            </div>

            {/* Lesson Info */}
            <div className="lesson-info-container">
                <div className="lesson-info-main">
                    {/* Title and Actions */}
                    <div className="lesson-title-section">
                        <div>
                            <h1 className="lesson-detail-title">{lesson.title}</h1>
                            <div className="lesson-detail-meta">
                                <div className="meta-item-lessons">
                                    <i className="ri-user-line"></i>
                                    <span>{lesson.instructor}</span>
                                </div>
                                <div className="meta-item-lessons">
                                    <i className="ri-time-line"></i>
                                    <span>{lesson.duration}</span>
                                </div>
                                <div className="meta-item-lessons">
                                    <i className="ri-target-line"></i>
                                    <span>{lesson.views.toLocaleString()} views</span>
                                </div>
                                <div className="meta-item-lessons">
                                    <i className="ri-star-fill"></i>
                                    <span>{lesson.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="lesson-actions">
                            <button
                                className={`action-btn-lessons ${favorite ? 'active' : ''}`}
                                onClick={handleFavorite}
                            >
                                <i className={favorite ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                                {favorite ? 'Saved' : 'Save'}
                            </button>
                            <button
                                className={`action-btn-lessons complete-btn-lessons ${completed ? 'active' : ''}`}
                                onClick={handleComplete}
                            >
                                <i className={completed ? 'ri-check-double-line' : 'ri-checkbox-circle-line'}></i>
                                {completed ? 'Completed ✓' : 'Mark Complete'}
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="lesson-tabs">
                        <button
                            className={`tab-btn-lessons ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            <i className="ri-file-text-line"></i>
                            Overview
                        </button>
                        <button
                            className={`tab-btn-lessons ${activeTab === 'topics' ? 'active' : ''}`}
                            onClick={() => setActiveTab('topics')}
                        >
                            <i className="ri-list-check"></i>
                            Topics Covered
                        </button>
                        <button
                            className={`tab-btn-lessons ${activeTab === 'notes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('notes')}
                        >
                            <i className="ri-sticky-note-line"></i>
                            My Notes
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="lesson-tab-content">
                        {activeTab === 'overview' && (
                            <div className="overview-content">
                                <div className="content-section-lessons">
                                    <h3>About This Lesson</h3>
                                    <p className="lesson-full-description">{lesson.description}</p>
                                </div>

                                <div className="content-section-lessons">
                                    <h3>Difficulty Level</h3>
                                    <div className="difficulty-indicator-lessons">
                                        <span className={`difficulty-badge-large-lessons ${lesson.difficulty}`}>
                                            {lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}
                                        </span>
                                        <p className="difficulty-text-lessons">
                                            {lesson.difficulty === 'beginner' && 'Perfect for those just starting out in cricket'}
                                            {lesson.difficulty === 'intermediate' && 'Suitable for players with basic knowledge'}
                                            {lesson.difficulty === 'advanced' && 'For experienced players looking to refine skills'}
                                        </p>
                                    </div>
                                </div>

                                <div className="content-section-lessons">
                                    <h3>Category</h3>
                                    <div className="category-display-lessons">
                                        <span className="category-badge-large-lessons">
                                            {lesson.category.charAt(0).toUpperCase() + lesson.category.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'topics' && (
                            <div className="topics-content">
                                <h3>What You'll Learn</h3>
                                <div className="topics-list-lessons">
                                    {lesson.topics.map((topic, index) => (
                                        <div key={index} className="topic-item-lessons">
                                            <i className="ri-check-line"></i>
                                            <span>{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'notes' && (
                            <div className="notes-content-lessons">
                                <div className="notes-header-lessons">
                                    <h3>Personal Notes</h3>
                                    {lessonNotes[lessonId] && (
                                        <span className="notes-saved-indicator-lessons">
                                            <i className="ri-check-line"></i>
                                            Notes saved
                                        </span>
                                    )}
                                </div>
                                <p className="notes-hint-lessons">
                                    Take notes while watching to remember key points. Your notes are automatically saved to this device.
                                </p>
                                <div className="notes-editor-lessons">
                                    <textarea
                                        className="notes-textarea-lessons"
                                        placeholder="Write your notes here... Tips, techniques, things to practice, etc."
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        rows="12"
                                    ></textarea>
                                    <div className="notes-info-lessons">
                                        <span className="character-count-lessons">
                                            {note.length} characters
                                        </span>
                                    </div>
                                </div>
                                <div className="notes-actions-lessons">
                                    <button
                                        className="save-notes-btn-lessons"
                                        onClick={handleSaveNote}
                                        disabled={!note.trim()}
                                    >
                                        <i className="ri-save-line"></i>
                                        Save Notes
                                    </button>
                                    {note.trim() && (
                                        <button
                                            className="delete-notes-btn-lessons"
                                            onClick={handleDeleteNote}
                                        >
                                            <i className="ri-delete-bin-line"></i>
                                            Delete Notes
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lesson-sidebar">
                    {/* Instructor Card */}
                    <div className="sidebar-card-lessons instructor-card">
                        <h3>
                            <i className="ri-user-star-line"></i>
                            Instructor
                        </h3>
                        <div className="instructor-info-lessons">
                            <div className="instructor-avatar-lessons">
                                {lesson.instructor.charAt(0)}
                            </div>
                            <div className="instructor-details-lessons">
                                <h4>{lesson.instructor}</h4>
                                <p>Professional Cricket Coach</p>
                            </div>
                        </div>
                    </div>

                    {/* Related Lessons */}
                    {relatedLessons.length > 0 && (
                        <div className="sidebar-card-lessons related-lessons-card">
                            <h3>
                                <i className="ri-links-line"></i>
                                Related Lessons
                            </h3>
                            <div className="related-lessons-list">
                                {relatedLessons.map(related => (
                                    <div
                                        key={related.id}
                                        className="related-lesson-item"
                                        onClick={() => handleRelatedClick(related.id)}
                                    >
                                        <div className="related-thumbnail-lessons">
                                            <img
                                                src={related.thumbnail}
                                                alt={related.title}
                                                onError={(e) => {
                                                    e.target.src = `https://via.placeholder.com/120x68/1a1a2e/ff6300?text=Video`;
                                                }}
                                            />
                                            <div className="related-duration-lessons">
                                                {related.duration}
                                            </div>
                                        </div>
                                        <div className="related-info-lessons">
                                            <h4>{related.title}</h4>
                                            <p>{related.instructor}</p>
                                            <div className="related-meta-lessons">
                                                <span className="related-rating-lessons">
                                                    <i className="ri-star-fill"></i>
                                                    {related.rating}
                                                </span>
                                                <span className="related-difficulty-lessons">
                                                    {related.difficulty}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonDetail;