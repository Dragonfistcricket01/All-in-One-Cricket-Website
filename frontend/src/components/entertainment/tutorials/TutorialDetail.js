import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTutorialById, getRelatedTutorials } from '../../../services/tutorialsAPI';
import { useTutorials } from '../../../context/TutorialsContext';
import TutorialPlayer from './TutorialPlayer';
import './Tutorials.css';

const TutorialDetail = () => {
    const { tutorialId } = useParams();
    const navigate = useNavigate();
    const {
        isCompleted,
        isFavorite,
        toggleFavorite,
        markAsCompleted,
        getNote,
        saveNote,
        tutorialNotes,
        isStepBookmarked,
        toggleStepBookmark
    } = useTutorials();

    const [tutorial, setTutorial] = useState(null);
    const [relatedTutorials, setRelatedTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [note, setNote] = useState('');
    const [activeTab, setActiveTab] = useState('overview');
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        fetchTutorial();
        window.scrollTo(0, 0);
    }, [tutorialId]);

    const fetchTutorial = async () => {
        setLoading(true);
        try {
            const tutorialData = await getTutorialById(tutorialId);
            const related = await getRelatedTutorials(tutorialId, 3);

            setTutorial(tutorialData);
            setRelatedTutorials(related);
            setNote(getNote(tutorialId));
        } catch (error) {
            console.error('Error fetching tutorial:', error);
        }
        setLoading(false);
    };

    const handleComplete = () => {
        markAsCompleted(tutorialId);
    };

    const handleFavorite = () => {
        toggleFavorite(tutorialId);
    };

    const handleSaveNote = () => {
        saveNote(tutorialId, note);

        const successMsg = document.createElement('div');
        successMsg.className = 'save-success-toast-tutorials';
        successMsg.innerHTML = '<i class="ri-check-line"></i> Notes saved successfully!';
        document.body.appendChild(successMsg);

        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    };

    const handleDeleteNote = () => {
        if (window.confirm('Are you sure you want to delete your notes for this tutorial?')) {
            setNote('');
            saveNote(tutorialId, '');

            const successMsg = document.createElement('div');
            successMsg.className = 'save-success-toast-tutorials delete';
            successMsg.innerHTML = '<i class="ri-delete-bin-line"></i> Notes deleted';
            document.body.appendChild(successMsg);

            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }
    };

    const handleStepBookmark = (stepNumber) => {
        toggleStepBookmark(tutorialId, stepNumber);
    };

    const handleRelatedClick = (relatedId) => {
        navigate(`/tutorials/${relatedId}`);
    };

    if (loading) {
        return (
            <div className="tutorial-detail-page">
                <div className="loading-container-tutorials">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading tutorial...</p>
                </div>
            </div>
        );
    }

    if (!tutorial) {
        return (
            <div className="tutorial-detail-page">
                <div className="error-container-tutorials">
                    <i className="ri-error-warning-line"></i>
                    <h3>Tutorial Not Found</h3>
                    <p>The tutorial you're looking for doesn't exist.</p>
                    <button onClick={() => navigate('/tutorials')} className="back-btn-tutorials">
                        <i className="ri-arrow-left-line"></i>
                        Back to Tutorials
                    </button>
                </div>
            </div>
        );
    }

    const completed = isCompleted(tutorialId);
    const favorite = isFavorite(tutorialId);

    return (
        <div className="tutorial-detail-page">
            {/* Back Button */}
            <div className="tutorial-back-tutorials">
                <button onClick={() => navigate('/tutorials')} className="back-button-tutorials">
                    <i className="ri-arrow-left-line"></i>
                    Back to Tutorials
                </button>
            </div>

            {/* Video Player Section */}
            <div className="tutorial-player-section">
                <TutorialPlayer
                    videoId={tutorial.videoId}
                    title={tutorial.title}
                    tutorialId={tutorialId}
                />
            </div>

            {/* Tutorial Info */}
            <div className="tutorial-info-container">
                <div className="tutorial-info-main">
                    {/* Title and Actions */}
                    <div className="tutorial-title-section">
                        <div>
                            <div className="tutorial-type-indicator">
                                <i className={
                                    tutorial.type === 'step-by-step' ? 'ri-list-ordered' :
                                        tutorial.type === 'video-demo' ? 'ri-vidicon-line' :
                                            tutorial.type === 'practice-plan' ? 'ri-calendar-check-line' :
                                                'ri-tools-line'
                                }></i>
                                <span>
                                    {tutorial.type === 'step-by-step' ? 'Step-by-Step Guide' :
                                        tutorial.type === 'video-demo' ? 'Video Demonstration' :
                                            tutorial.type === 'practice-plan' ? 'Practice Plan' :
                                                'Equipment Guide'}
                                </span>
                            </div>
                            <h1 className="tutorial-detail-title">{tutorial.title}</h1>
                            <div className="tutorial-detail-meta">
                                <div className="meta-item-tutorials">
                                    <i className="ri-user-line"></i>
                                    <span>{tutorial.instructor}</span>
                                </div>
                                <div className="meta-item-tutorials">
                                    <i className="ri-time-line"></i>
                                    <span>{tutorial.duration}</span>
                                </div>
                                <div className="meta-item-tutorials">
                                    <i className=""></i>
                                    <span>{tutorial.views.toLocaleString()} views</span>
                                </div>
                                <div className="meta-item-tutorials">
                                    <i className="ri-star-fill"></i>
                                    <span>{tutorial.rating}</span>
                                </div>
                                <div className={`difficulty-badge-tutorials ${tutorial.difficulty}`}>
                                    {tutorial.difficulty}
                                </div>
                            </div>
                        </div>
                        <div className="tutorial-actions">
                            <button
                                className={`action-btn-tutorials ${favorite ? 'active' : ''}`}
                                onClick={handleFavorite}
                            >
                                <i className={favorite ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                                {favorite ? 'Saved' : 'Save'}
                            </button>
                            <button
                                className={`action-btn-tutorials complete-btn-tutorials ${completed ? 'active' : ''}`}
                                onClick={handleComplete}
                            >
                                <i className={completed ? 'ri-check-double-line' : 'ri-checkbox-circle-line'}></i>
                                {completed ? 'Completed ✓' : 'Mark Complete'}
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="tutorial-tabs">
                        <button
                            className={`tab-btn-tutorials ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            <i className="ri-file-text-line"></i>
                            Overview
                        </button>
                        {tutorial.steps && tutorial.steps.length > 0 && (
                            <button
                                className={`tab-btn-tutorials ${activeTab === 'steps' ? 'active' : ''}`}
                                onClick={() => setActiveTab('steps')}
                            >
                                <i className="ri-list-ordered"></i>
                                Steps ({tutorial.steps.length})
                            </button>
                        )}
                        {tutorial.analysisPoints && tutorial.analysisPoints.length > 0 && (
                            <button
                                className={`tab-btn-tutorials ${activeTab === 'analysis' ? 'active' : ''}`}
                                onClick={() => setActiveTab('analysis')}
                            >
                                <i className="ri-focus-line"></i>
                                Key Points
                            </button>
                        )}
                        {tutorial.planSchedule && (
                            <button
                                className={`tab-btn-tutorials ${activeTab === 'schedule' ? 'active' : ''}`}
                                onClick={() => setActiveTab('schedule')}
                            >
                                <i className="ri-calendar-line"></i>
                                Schedule
                            </button>
                        )}
                        {tutorial.equipmentSpecs && (
                            <button
                                className={`tab-btn-tutorials ${activeTab === 'specs' ? 'active' : ''}`}
                                onClick={() => setActiveTab('specs')}
                            >
                                <i className="ri-information-line"></i>
                                Specifications
                            </button>
                        )}
                        <button
                            className={`tab-btn-tutorials ${activeTab === 'topics' ? 'active' : ''}`}
                            onClick={() => setActiveTab('topics')}
                        >
                            <i className="ri-list-check"></i>
                            Topics Covered
                        </button>
                        <button
                            className={`tab-btn-tutorials ${activeTab === 'notes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('notes')}
                        >
                            <i className="ri-sticky-note-line"></i>
                            My Notes
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="tutorial-tab-content">
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="overview-content-tutorials">
                                <div className="content-section-tutorials">
                                    <h3>About This Tutorial</h3>
                                    <p className="tutorial-full-description">{tutorial.description}</p>
                                </div>

                                <div className="content-section-tutorials">
                                    <h3>Difficulty Level</h3>
                                    <div className="difficulty-indicator-tutorials">
                                        <span className={`difficulty-badge-large-tutorials ${tutorial.difficulty}`}>
                                            {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
                                        </span>
                                        <p className="difficulty-text-tutorials">
                                            {tutorial.difficulty === 'beginner' && 'Perfect for those just starting out in cricket'}
                                            {tutorial.difficulty === 'intermediate' && 'Suitable for players with basic knowledge'}
                                            {tutorial.difficulty === 'advanced' && 'For experienced players looking to refine skills'}
                                            {tutorial.difficulty === 'all' && 'Suitable for all skill levels'}
                                        </p>
                                    </div>
                                </div>

                                <div className="content-section-tutorials">
                                    <h3>Tutorial Type</h3>
                                    <div className="category-display-tutorials">
                                        <span className="category-badge-large-tutorials">
                                            {tutorial.type === 'step-by-step' ? 'Step-by-Step Guide' :
                                                tutorial.type === 'video-demo' ? 'Video Demonstration' :
                                                    tutorial.type === 'practice-plan' ? 'Practice Plan' :
                                                        'Equipment Guide'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Steps Tab (for step-by-step tutorials) */}
                        {activeTab === 'steps' && tutorial.steps && (
                            <div className="steps-content-tutorials">
                                <h3>Follow These Steps</h3>
                                <div className="steps-list-tutorials">
                                    {tutorial.steps.map((step, index) => (
                                        <div key={index} className={`step-item-tutorials ${currentStep === index ? 'active' : ''}`}>
                                            <div className="step-header-tutorials" onClick={() => setCurrentStep(index)}>
                                                <div className="step-number-tutorials">
                                                    <span>{step.stepNumber}</span>
                                                </div>
                                                <div className="step-title-wrapper-tutorials">
                                                    <h4>{step.title}</h4>
                                                    {step.duration && (
                                                        <span className="step-duration-tutorials">
                                                            <i className="ri-time-line"></i>
                                                            {step.duration}
                                                        </span>
                                                    )}
                                                </div>
                                                <button
                                                    className={`bookmark-step-btn-tutorials ${isStepBookmarked(tutorialId, step.stepNumber) ? 'active' : ''}`}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleStepBookmark(step.stepNumber);
                                                    }}
                                                >
                                                    <i className={isStepBookmarked(tutorialId, step.stepNumber) ? 'ri-bookmark-fill' : 'ri-bookmark-line'}></i>
                                                </button>
                                            </div>
                                            {currentStep === index && (
                                                <div className="step-content-tutorials">
                                                    {step.imageUrl && (
                                                        <img src={step.imageUrl} alt={step.title} className="step-image-tutorials" />
                                                    )}
                                                    <p>{step.content}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Analysis Points Tab (for video demos) */}
                        {activeTab === 'analysis' && tutorial.analysisPoints && (
                            <div className="analysis-content-tutorials">
                                <h3>Key Analysis Points</h3>
                                <div className="analysis-points-list-tutorials">
                                    {tutorial.analysisPoints.map((point, index) => (
                                        <div key={index} className="analysis-point-item-tutorials">
                                            <div className="point-time-tutorials">
                                                <i className="ri-time-line"></i>
                                                {point.time}
                                            </div>
                                            <div className="point-details-tutorials">
                                                <h4>{point.label}</h4>
                                                <p>{point.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {tutorial.cameraAngles && (
                                    <div className="camera-angles-tutorials">
                                        <h4>Available Camera Angles:</h4>
                                        <div className="angles-list-tutorials">
                                            {tutorial.cameraAngles.map((angle, index) => (
                                                <span key={index} className="angle-badge-tutorials">
                                                    <i className="ri-camera-line"></i>
                                                    {angle}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Schedule Tab (for practice plans) */}
                        {activeTab === 'schedule' && tutorial.planSchedule && (
                            <div className="schedule-content-tutorials">
                                <h3>Training Schedule</h3>
                                {Object.entries(tutorial.planSchedule).map(([weekKey, weekData]) => (
                                    <div key={weekKey} className="week-section-tutorials">
                                        <h4 className="week-title-tutorials">{weekData.title}</h4>
                                        <div className="days-list-tutorials">
                                            {weekData.days.map((day, index) => (
                                                <div key={index} className="day-item-tutorials">
                                                    <div className="day-header-tutorials">
                                                        <span className="day-number-tutorials">Day {day.day}</span>
                                                        <span className="day-focus-tutorials">{day.focus}</span>
                                                        <span className="day-duration-tutorials">{day.duration}</span>
                                                    </div>
                                                    <ul className="exercises-list-tutorials">
                                                        {day.exercises.map((exercise, idx) => (
                                                            <li key={idx}>
                                                                <i className="ri-check-line"></i>
                                                                {exercise}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Equipment Specs Tab */}
                        {activeTab === 'specs' && tutorial.equipmentSpecs && (
                            <div className="specs-content-tutorials">
                                <h3>Equipment Specifications</h3>
                                {tutorial.equipmentSpecs.weights && (
                                    <div className="spec-section-tutorials">
                                        <h4>Weight Guidelines</h4>
                                        <ul>
                                            {tutorial.equipmentSpecs.weights.map((weight, index) => (
                                                <li key={index}>{weight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {tutorial.equipmentSpecs.willowTypes && (
                                    <div className="spec-section-tutorials">
                                        <h4>Willow Types</h4>
                                        <ul>
                                            {tutorial.equipmentSpecs.willowTypes.map((type, index) => (
                                                <li key={index}>{type}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {tutorial.equipmentSpecs.priceRanges && (
                                    <div className="spec-section-tutorials">
                                        <h4>Price Ranges</h4>
                                        <ul>
                                            {tutorial.equipmentSpecs.priceRanges.map((range, index) => (
                                                <li key={index}>{range}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Topics Tab */}
                        {activeTab === 'topics' && (
                            <div className="topics-content-tutorials">
                                <h3>What You'll Learn</h3>
                                <div className="topics-list-tutorials">
                                    {tutorial.topics.map((topic, index) => (
                                        <div key={index} className="topic-item-tutorials">
                                            <i className="ri-check-line"></i>
                                            <span>{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Notes Tab */}
                        {activeTab === 'notes' && (
                            <div className="notes-content-tutorials">
                                <div className="notes-header-tutorials">
                                    <h3>Personal Notes</h3>
                                    {tutorialNotes[tutorialId] && (
                                        <span className="notes-saved-indicator-tutorials">
                                            <i className="ri-check-line"></i>
                                            Notes saved
                                        </span>
                                    )}
                                </div>
                                <p className="notes-hint-tutorials">
                                    Take notes while learning to remember key points. Your notes are automatically saved to this device.
                                </p>
                                <div className="notes-editor-tutorials">
                                    <textarea
                                        className="notes-textarea-tutorials"
                                        placeholder="Write your notes here... Key points, practice reminders, questions, etc."
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        rows="12"
                                    ></textarea>
                                    <div className="notes-info-tutorials">
                                        <span className="character-count-tutorials">
                                            {note.length} characters
                                        </span>
                                    </div>
                                </div>
                                <div className="notes-actions-tutorials">
                                    <button
                                        className="save-notes-btn-tutorials"
                                        onClick={handleSaveNote}
                                        disabled={!note.trim()}
                                    >
                                        <i className="ri-save-line"></i>
                                        Save Notes
                                    </button>
                                    {note.trim() && (
                                        <button
                                            className="delete-notes-btn-tutorials"
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
                <div className="tutorial-sidebar">
                    {/* Instructor Card */}
                    <div className="sidebar-card-tutorials instructor-card-tutorials">
                        <h3>
                            <i className="ri-user-star-line"></i>
                            Instructor
                        </h3>
                        <div className="instructor-info-tutorials">
                            <div className="instructor-avatar-tutorials">
                                {tutorial.instructor.charAt(0)}
                            </div>
                            <div className="instructor-details-tutorials">
                                <h4>{tutorial.instructor}</h4>
                                <p>Professional Cricket Coach</p>
                            </div>
                        </div>
                    </div>

                    {/* Related Tutorials */}
                    {relatedTutorials.length > 0 && (
                        <div className="sidebar-card-tutorials related-tutorials-card">
                            <h3>
                                <i className="ri-links-line"></i>
                                Related Tutorials
                            </h3>
                            <div className="related-tutorials-list">
                                {relatedTutorials.map(related => (
                                    <div
                                        key={related.id}
                                        className="related-tutorial-item"
                                        onClick={() => handleRelatedClick(related.id)}
                                    >
                                        <div className="related-thumbnail-tutorials">
                                            <img
                                                src={related.thumbnail}
                                                alt={related.title}
                                                onError={(e) => {
                                                    e.target.src = `https://via.placeholder.com/120x68/1a1a2e/ff6300?text=Tutorial`;
                                                }}
                                            />
                                            <div className="related-duration-tutorials">
                                                {related.duration}
                                            </div>
                                        </div>
                                        <div className="related-info-tutorials">
                                            <h4>{related.title}</h4>
                                            <p>{related.instructor}</p>
                                            <div className="related-meta-tutorials">
                                                <span className="related-rating-tutorials">
                                                    <i className="ri-star-fill"></i>
                                                    {related.rating}
                                                </span>
                                                <span className="related-difficulty-tutorials">
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

export default TutorialDetail;