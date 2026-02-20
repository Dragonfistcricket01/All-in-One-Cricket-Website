import React, { useState } from 'react';
import { useAnalysis } from '../../../context/AnalysisContext';
import './Analysis.css';

const AnalysisPlayer = ({ videoId, highlightVideoId, title, analysisId }) => {
    const { addToWatchHistory } = useAnalysis();
    const [showHighlights, setShowHighlights] = useState(false);
    const [hasWatched, setHasWatched] = useState(false);

    // Track when video starts playing
    const handleVideoPlay = () => {
        if (!hasWatched) {
            addToWatchHistory(analysisId, title);
            setHasWatched(true);
        }
    };

    const currentVideoId = showHighlights ? highlightVideoId : videoId;

    return (
        <div className="analysis-player">
            {/* Video Toggle Buttons */}
            {highlightVideoId && (
                <div className="video-toggle-buttons-analysis">
                    <button
                        className={`toggle-btn-analysis ${!showHighlights ? 'active' : ''}`}
                        onClick={() => setShowHighlights(false)}
                    >
                        <i className="ri-play-circle-line"></i>
                        Full Analysis
                    </button>
                    <button
                        className={`toggle-btn-analysis ${showHighlights ? 'active' : ''}`}
                        onClick={() => setShowHighlights(true)}
                    >
                        <i className="ri-vidicon-line"></i>
                        Match Highlights
                    </button>
                </div>
            )}

            {/* Video Player */}
            <div className="player-wrapper-analysis">
                <iframe
                    src={`https://www.youtube.com/embed/${currentVideoId}?rel=0&modestbranding=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={handleVideoPlay}
                ></iframe>
            </div>

            {/* Video Info */}
            {showHighlights && (
                <div className="video-info-banner-analysis">
                    <i className="ri-information-line"></i>
                    <span>Watching match highlights - Switch to "Full Analysis" for detailed breakdown</span>
                </div>
            )}
        </div>
    );
};

export default AnalysisPlayer;