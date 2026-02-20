import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAnalysisById, getRelatedAnalysis } from '../../../services/analysisAPI';
import { useAnalysis } from '../../../context/AnalysisContext';
import AnalysisPlayer from './AnalysisPlayer';
import './Analysis.css';

const AnalysisDetail = () => {
    const { analysisId } = useParams();
    const navigate = useNavigate();
    const {
        isCompleted,
        isFavorite,
        toggleFavorite,
        markAsCompleted,
        getNote,
        saveNote,
        analysisNotes,
        isMomentBookmarked,
        toggleMomentBookmark
    } = useAnalysis();

    const [analysis, setAnalysis] = useState(null);
    const [relatedAnalysis, setRelatedAnalysis] = useState([]);
    const [loading, setLoading] = useState(true);
    const [note, setNote] = useState('');
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        fetchAnalysis();
        window.scrollTo(0, 0);
    }, [analysisId]);

    const fetchAnalysis = async () => {
        setLoading(true);
        try {
            const analysisData = await getAnalysisById(analysisId);
            const related = await getRelatedAnalysis(analysisId, 3);

            setAnalysis(analysisData);
            setRelatedAnalysis(related);
            setNote(getNote(analysisId));
        } catch (error) {
            console.error('Error fetching analysis:', error);
        }
        setLoading(false);
    };

    const handleComplete = () => {
        markAsCompleted(analysisId);
    };

    const handleFavorite = () => {
        toggleFavorite(analysisId);
    };

    const handleSaveNote = () => {
        saveNote(analysisId, note);

        const successMsg = document.createElement('div');
        successMsg.className = 'save-success-toast-analysis';
        successMsg.innerHTML = '<i class="ri-check-line"></i> Notes saved successfully!';
        document.body.appendChild(successMsg);

        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    };

    const handleDeleteNote = () => {
        if (window.confirm('Are you sure you want to delete your notes?')) {
            setNote('');
            saveNote(analysisId, '');

            const successMsg = document.createElement('div');
            successMsg.className = 'save-success-toast-analysis delete';
            successMsg.innerHTML = '<i class="ri-delete-bin-line"></i> Notes deleted';
            document.body.appendChild(successMsg);

            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }
    };

    const handleMomentBookmark = (momentTime) => {
        toggleMomentBookmark(analysisId, momentTime);
    };

    const handleRelatedClick = (relatedId) => {
        navigate(`/analysis/${relatedId}`);
    };

    if (loading) {
        return (
            <div className="analysis-detail-page">
                <div className="loading-container-analysis">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading analysis...</p>
                </div>
            </div>
        );
    }

    if (!analysis) {
        return (
            <div className="analysis-detail-page">
                <div className="error-container-analysis">
                    <i className="ri-error-warning-line"></i>
                    <h3>Analysis Not Found</h3>
                    <p>The analysis you're looking for doesn't exist.</p>
                    <button onClick={() => navigate('/analysis')} className="back-btn-analysis">
                        <i className="ri-arrow-left-line"></i>
                        Back to Analysis
                    </button>
                </div>
            </div>
        );
    }

    const completed = isCompleted(analysisId);
    const favorite = isFavorite(analysisId);

    return (
        <div className="analysis-detail-page">
            {/* Back Button */}
            <div className="analysis-back">
                <button onClick={() => navigate('/analysis')} className="back-button-analysis">
                    <i className="ri-arrow-left-line"></i>
                    Back to Analysis
                </button>
            </div>

            {/* Video Player Section */}
            <div className="analysis-player-section">
                <AnalysisPlayer
                    videoId={analysis.videoId}
                    highlightVideoId={analysis.highlightVideoId}
                    title={analysis.title}
                    analysisId={analysisId}
                />
            </div>

            {/* Analysis Info */}
            <div className="analysis-info-container">
                <div className="analysis-info-main">
                    {/* Title and Actions */}
                    <div className="analysis-title-section">
                        <div>
                            <div className="analysis-type-indicator">
                                <i className={
                                    analysis.type === 'match-analysis' ? 'ri-trophy-line' :
                                        analysis.type === 'player-analysis' ? 'ri-user-star-line' :
                                            analysis.type === 'strategic-analysis' ? 'ri-focus-3-line' :
                                                'ri-bar-chart-box-line'
                                }></i>
                                <span>
                                    {analysis.type === 'match-analysis' ? 'Match Analysis' :
                                        analysis.type === 'player-analysis' ? 'Player Analysis' :
                                            analysis.type === 'strategic-analysis' ? 'Strategic Analysis' :
                                                'Data Insights'}
                                </span>
                                {analysis.format && (
                                    <span className="format-tag-analysis">{analysis.format}</span>
                                )}
                            </div>
                            <h1 className="analysis-detail-title">{analysis.title}</h1>
                            <div className="analysis-detail-meta">
                                {analysis.match && (
                                    <div className="meta-item-analysis">
                                        <i className="ri-trophy-line"></i>
                                        <span>{analysis.match}</span>
                                    </div>
                                )}
                                {analysis.player && (
                                    <div className="meta-item-analysis">
                                        <i className="ri-user-star-line"></i>
                                        <span>{analysis.player}</span>
                                    </div>
                                )}
                                {analysis.venue && (
                                    <div className="meta-item-analysis">
                                        <i className="ri-map-pin-line"></i>
                                        <span>{analysis.venue}</span>
                                    </div>
                                )}
                                {analysis.date && (
                                    <div className="meta-item-analysis">
                                        <i className="ri-calendar-line"></i>
                                        <span>{analysis.date}</span>
                                    </div>
                                )}
                                <div className="meta-item-analysis">
                                    <i className="ri-time-line"></i>
                                    <span>{analysis.duration}</span>
                                </div>
                                <div className="meta-item-analysis">
                                    <i className=""></i>
                                    <span>{analysis.views.toLocaleString()} views</span>
                                </div>
                                <div className="meta-item-analysis">
                                    <i className="ri-star-fill"></i>
                                    <span>{analysis.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="analysis-actions">
                            <button
                                className={`action-btn-analysis ${favorite ? 'active' : ''}`}
                                onClick={handleFavorite}
                            >
                                <i className={favorite ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                                {favorite ? 'Saved' : 'Save'}
                            </button>
                            <button
                                className={`action-btn-analysis complete-btn-analysis ${completed ? 'active' : ''}`}
                                onClick={handleComplete}
                            >
                                <i className={completed ? 'ri-check-double-line' : 'ri-checkbox-circle-line'}></i>
                                {completed ? 'Completed ✓' : 'Mark Complete'}
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="analysis-tabs">
                        <button
                            className={`tab-btn-analysis ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            <i className="ri-file-text-line"></i>
                            Overview
                        </button>
                        {analysis.keyMoments && analysis.keyMoments.length > 0 && (
                            <button
                                className={`tab-btn-analysis ${activeTab === 'moments' ? 'active' : ''}`}
                                onClick={() => setActiveTab('moments')}
                            >
                                <i className="ri-time-line"></i>
                                Key Moments ({analysis.keyMoments.length})
                            </button>
                        )}
                        {analysis.tacticalInsights && (
                            <button
                                className={`tab-btn-analysis ${activeTab === 'tactics' ? 'active' : ''}`}
                                onClick={() => setActiveTab('tactics')}
                            >
                                <i className="ri-focus-3-line"></i>
                                Tactical Insights
                            </button>
                        )}
                        {analysis.analysis && (
                            <button
                                className={`tab-btn-analysis ${activeTab === 'stats' ? 'active' : ''}`}
                                onClick={() => setActiveTab('stats')}
                            >
                                <i className="ri-bar-chart-line"></i>
                                Statistics
                            </button>
                        )}
                        {analysis.playerProfile && (
                            <button
                                className={`tab-btn-analysis ${activeTab === 'profile' ? 'active' : ''}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                <i className="ri-user-line"></i>
                                Player Profile
                            </button>
                        )}
                        {analysis.tags && analysis.tags.length > 0 && (
                            <button
                                className={`tab-btn-analysis ${activeTab === 'tags' ? 'active' : ''}`}
                                onClick={() => setActiveTab('tags')}
                            >
                                <i className="ri-price-tag-3-line"></i>
                                Tags
                            </button>
                        )}
                        <button
                            className={`tab-btn-analysis ${activeTab === 'notes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('notes')}
                        >
                            <i className="ri-sticky-note-line"></i>
                            My Notes
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="analysis-tab-content">
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="overview-content-analysis">
                                <div className="content-section-analysis">
                                    <h3>About This Analysis</h3>
                                    <p className="analysis-full-description">{analysis.description}</p>
                                </div>

                                {analysis.category && (
                                    <div className="content-section-analysis">
                                        <h3>Category</h3>
                                        <div className="category-display-analysis">
                                            <span className="category-badge-large-analysis">
                                                {analysis.category.split('-').map(word =>
                                                    word.charAt(0).toUpperCase() + word.slice(1)
                                                ).join(' ')}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Key Moments Tab */}
                        {activeTab === 'moments' && analysis.keyMoments && (
                            <div className="moments-content-analysis">
                                <h3>Key Moments Timeline</h3>
                                <div className="moments-list-analysis">
                                    {analysis.keyMoments.map((moment, index) => (
                                        <div key={index} className="moment-item-analysis">
                                            <div className="moment-header-analysis">
                                                <div className="moment-time-analysis">
                                                    <i className="ri-time-line"></i>
                                                    {moment.time}
                                                </div>
                                                <button
                                                    className={`bookmark-moment-btn-analysis ${isMomentBookmarked(analysisId, moment.time) ? 'active' : ''}`}
                                                    onClick={() => handleMomentBookmark(moment.time)}
                                                >
                                                    <i className={isMomentBookmarked(analysisId, moment.time) ? 'ri-bookmark-fill' : 'ri-bookmark-line'}></i>
                                                </button>
                                            </div>
                                            <div className="moment-content-analysis">
                                                <h4>{moment.title}</h4>
                                                <p>{moment.description}</p>
                                                {moment.score && (
                                                    <div className="moment-score-analysis">
                                                        <i className="ri-trophy-line"></i>
                                                        {moment.score}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tactical Insights Tab */}
                        {activeTab === 'tactics' && analysis.tacticalInsights && (
                            <div className="tactics-content-analysis">
                                <h3>Tactical Breakdown</h3>
                                <div className="tactics-list-analysis">
                                    {analysis.tacticalInsights.map((insight, index) => (
                                        <div key={index} className="tactic-item-analysis">
                                            <i className="ri-lightbulb-line"></i>
                                            <span>{insight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Shot Breakdown (Simplified) */}
                                {analysis.shotBreakdown && (
                                    <div className="shot-breakdown-section-analysis">
                                        <h4>Shot Distribution</h4>
                                        <div className="stats-grid-analysis">
                                            <div className="stat-box-analysis">
                                                <div className="stat-label-analysis">On Side</div>
                                                <div className="stat-value-analysis">{analysis.shotBreakdown.onSide}%</div>
                                                <div className="stat-bar-analysis">
                                                    <div className="stat-fill-analysis" style={{ width: `${analysis.shotBreakdown.onSide}%` }}></div>
                                                </div>
                                            </div>
                                            <div className="stat-box-analysis">
                                                <div className="stat-label-analysis">Off Side</div>
                                                <div className="stat-value-analysis">{analysis.shotBreakdown.offSide}%</div>
                                                <div className="stat-bar-analysis">
                                                    <div className="stat-fill-analysis" style={{ width: `${analysis.shotBreakdown.offSide}%` }}></div>
                                                </div>
                                            </div>
                                            <div className="stat-box-analysis">
                                                <div className="stat-label-analysis">Front Foot</div>
                                                <div className="stat-value-analysis">{analysis.shotBreakdown.front}%</div>
                                                <div className="stat-bar-analysis">
                                                    <div className="stat-fill-analysis" style={{ width: `${analysis.shotBreakdown.front}%` }}></div>
                                                </div>
                                            </div>
                                            <div className="stat-box-analysis">
                                                <div className="stat-label-analysis">Back Foot</div>
                                                <div className="stat-value-analysis">{analysis.shotBreakdown.back}%</div>
                                                <div className="stat-bar-analysis">
                                                    <div className="stat-fill-analysis" style={{ width: `${analysis.shotBreakdown.back}%` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Field Settings */}
                                {analysis.fieldSettings && (
                                    <div className="field-settings-section-analysis">
                                        <h4>Field Settings Strategy</h4>
                                        <div className="field-settings-list-analysis">
                                            {analysis.fieldSettings.map((setting, index) => (
                                                <div key={index} className="field-setting-item-analysis">
                                                    <div className="setting-phase-analysis">{setting.phase}</div>
                                                    <div className="setting-details-analysis">
                                                        <strong>{setting.setting}</strong>
                                                        <p>{setting.reason}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Statistics Tab */}
                        {activeTab === 'stats' && analysis.analysis && (
                            <div className="stats-content-analysis">
                                <h3>Match Statistics</h3>
                                <div className="stats-table-analysis">
                                    {Object.entries(analysis.analysis).map(([key, value]) => (
                                        <div key={key} className="stat-row-analysis">
                                            <div className="stat-key-analysis">
                                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                            </div>
                                            <div className="stat-value-display-analysis">{value}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Strategic Points */}
                                {analysis.strategicPoints && (
                                    <div className="strategic-points-section-analysis">
                                        <h4>Strategic Analysis</h4>
                                        <div className="strategic-points-list-analysis">
                                            {analysis.strategicPoints.map((point, index) => (
                                                <div key={index} className="strategic-point-item-analysis">
                                                    <div className="point-header-analysis">
                                                        <h5>{point.title}</h5>
                                                        <span className={`impact-badge-analysis ${point.impact.toLowerCase()}`}>
                                                            {point.impact} Impact
                                                        </span>
                                                    </div>
                                                    <p>{point.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Data Insights (Simplified) */}
                                {analysis.dataInsights && (
                                    <div className="data-insights-section-analysis">
                                        <h4>Performance Metrics</h4>
                                        <div className="metrics-grid-analysis">
                                            {Object.entries(analysis.dataInsights).map(([key, value]) => (
                                                <div key={key} className="metric-card-analysis">
                                                    <div className="metric-label-analysis">
                                                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                                    </div>
                                                    <div className="metric-value-analysis">{value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Player Profile Tab */}
                        {activeTab === 'profile' && analysis.playerProfile && (
                            <div className="profile-content-analysis">
                                <h3>Player Profile</h3>

                                {/* Basic Info */}
                                <div className="profile-basic-info-analysis">
                                    <div className="info-row-analysis">
                                        <span className="info-label-analysis">Role:</span>
                                        <span className="info-value-analysis">{analysis.playerProfile.role}</span>
                                    </div>
                                    {analysis.playerProfile.battingStyle && (
                                        <div className="info-row-analysis">
                                            <span className="info-label-analysis">Batting Style:</span>
                                            <span className="info-value-analysis">{analysis.playerProfile.battingStyle}</span>
                                        </div>
                                    )}
                                    {analysis.playerProfile.bowlingStyle && (
                                        <div className="info-row-analysis">
                                            <span className="info-label-analysis">Bowling Style:</span>
                                            <span className="info-value-analysis">{analysis.playerProfile.bowlingStyle}</span>
                                        </div>
                                    )}
                                    <div className="info-row-analysis">
                                        <span className="info-label-analysis">Career:</span>
                                        <span className="info-value-analysis">{analysis.playerProfile.career}</span>
                                    </div>
                                </div>

                                {/* Career Stats */}
                                <div className="career-stats-analysis">
                                    <h4>Career Statistics</h4>
                                    {analysis.playerProfile.tests && (
                                        <div className="format-stats-analysis">
                                            <h5>Test Cricket</h5>
                                            <div className="stats-grid-inline-analysis">
                                                {Object.entries(analysis.playerProfile.tests).map(([key, value]) => (
                                                    <div key={key} className="stat-inline-analysis">
                                                        <span className="stat-inline-label-analysis">
                                                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                                                        </span>
                                                        <span className="stat-inline-value-analysis">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {analysis.playerProfile.odis && (
                                        <div className="format-stats-analysis">
                                            <h5>ODI Cricket</h5>
                                            <div className="stats-grid-inline-analysis">
                                                {Object.entries(analysis.playerProfile.odis).map(([key, value]) => (
                                                    <div key={key} className="stat-inline-analysis">
                                                        <span className="stat-inline-label-analysis">
                                                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                                                        </span>
                                                        <span className="stat-inline-value-analysis">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {analysis.playerProfile.t20is && (
                                        <div className="format-stats-analysis">
                                            <h5>T20I Cricket</h5>
                                            <div className="stats-grid-inline-analysis">
                                                {Object.entries(analysis.playerProfile.t20is).map(([key, value]) => (
                                                    <div key={key} className="stat-inline-analysis">
                                                        <span className="stat-inline-label-analysis">
                                                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                                                        </span>
                                                        <span className="stat-inline-value-analysis">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Strengths & Weaknesses */}
                                {analysis.strengthsWeaknesses && (
                                    <div className="strengths-weaknesses-analysis">
                                        <div className="strengths-section-analysis">
                                            <h4>Strengths</h4>
                                            <ul>
                                                {analysis.strengthsWeaknesses.strengths.map((strength, index) => (
                                                    <li key={index}>
                                                        <i className="ri-checkbox-circle-fill"></i>
                                                        {strength}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="weaknesses-section-analysis">
                                            <h4>Areas for Improvement</h4>
                                            <ul>
                                                {analysis.strengthsWeaknesses.weaknesses.map((weakness, index) => (
                                                    <li key={index}>
                                                        <i className="ri-information-line"></i>
                                                        {weakness}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* Signature Shots / Bowling Variations */}
                                {analysis.signatureShots && (
                                    <div className="signature-shots-section-analysis">
                                        <h4>Signature Shots</h4>
                                        <div className="shots-list-analysis">
                                            {analysis.signatureShots.map((shot, index) => (
                                                <div key={index} className="shot-card-analysis">
                                                    <div className="shot-name-analysis">{shot.name}</div>
                                                    <p>{shot.description}</p>
                                                    <div className="shot-metrics-analysis">
                                                        <div className="metric-analysis">
                                                            <span>Effectiveness:</span>
                                                            <div className="progress-bar-analysis">
                                                                <div className="progress-fill-analysis" style={{ width: `${shot.effectiveness}%` }}></div>
                                                            </div>
                                                            <span>{shot.effectiveness}%</span>
                                                        </div>
                                                        <div className="risk-badge-analysis">
                                                            Risk: {shot.riskLevel}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {analysis.bowlingVariations && (
                                    <div className="bowling-variations-section-analysis">
                                        <h4>Bowling Variations</h4>
                                        <div className="variations-list-analysis">
                                            {analysis.bowlingVariations.map((variation, index) => (
                                                <div key={index} className="variation-card-analysis">
                                                    <div className="variation-name-analysis">{variation.name}</div>
                                                    <p>{variation.description}</p>
                                                    <div className="variation-stats-analysis">
                                                        <div className="var-stat-analysis">
                                                            <span>Effectiveness:</span>
                                                            <strong>{variation.effectiveness}%</strong>
                                                        </div>
                                                        <div className="var-stat-analysis">
                                                            <span>Usage:</span>
                                                            <strong>{variation.usage}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Tags Tab */}
                        {activeTab === 'tags' && analysis.tags && (
                            <div className="tags-content-analysis">
                                <h3>Related Tags</h3>
                                <div className="tags-list-analysis">
                                    {analysis.tags.map((tag, index) => (
                                        <div key={index} className="tag-item-large-analysis">
                                            <i className="ri-price-tag-3-line"></i>
                                            <span>{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Notes Tab */}
                        {activeTab === 'notes' && (
                            <div className="notes-content-analysis">
                                <div className="notes-header-analysis">
                                    <h3>Personal Notes</h3>
                                    {analysisNotes[analysisId] && (
                                        <span className="notes-saved-indicator-analysis">
                                            <i className="ri-check-line"></i>
                                            Notes saved
                                        </span>
                                    )}
                                </div>
                                <p className="notes-hint-analysis">
                                    Take notes while watching to remember key insights and tactical points.
                                </p>
                                <div className="notes-editor-analysis">
                                    <textarea
                                        className="notes-textarea-analysis"
                                        placeholder="Write your notes here... Key tactics, observations, questions, etc."
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        rows="12"
                                    ></textarea>
                                    <div className="notes-info-analysis">
                                        <span className="character-count-analysis">
                                            {note.length} characters
                                        </span>
                                    </div>
                                </div>
                                <div className="notes-actions-analysis">
                                    <button
                                        className="save-notes-btn-analysis"
                                        onClick={handleSaveNote}
                                        disabled={!note.trim()}
                                    >
                                        <i className="ri-save-line"></i>
                                        Save Notes
                                    </button>
                                    {note.trim() && (
                                        <button
                                            className="delete-notes-btn-analysis"
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
                <div className="analysis-sidebar">
                    {/* Related Analysis */}
                    {relatedAnalysis.length > 0 && (
                        <div className="sidebar-card-analysis related-analysis-card">
                            <h3>
                                <i className="ri-links-line"></i>
                                Related Analysis
                            </h3>
                            <div className="related-analysis-list">
                                {relatedAnalysis.map(related => (
                                    <div
                                        key={related.id}
                                        className="related-analysis-item"
                                        onClick={() => handleRelatedClick(related.id)}
                                    >
                                        <div className="related-thumbnail-analysis">
                                            <img
                                                src={related.thumbnail}
                                                alt={related.title}
                                                onError={(e) => {
                                                    e.target.src = `https://via.placeholder.com/120x68/1a1a2e/ff6300?text=Analysis`;
                                                }}
                                            />
                                            <div className="related-duration-analysis">
                                                {related.duration}
                                            </div>
                                        </div>
                                        <div className="related-info-analysis">
                                            <h4>{related.title}</h4>
                                            {related.match && <p>{related.match}</p>}
                                            {related.player && <p>{related.player}</p>}
                                            <div className="related-meta-analysis">
                                                <span className="related-rating-analysis">
                                                    <i className="ri-star-fill"></i>
                                                    {related.rating}
                                                </span>
                                                <span className="related-views-analysis">
                                                    {(related.views / 1000).toFixed(0)}K views
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

export default AnalysisDetail;