import React, { useState, useEffect } from 'react';
import { useTutorials } from '../../../context/TutorialsContext';
import './Tutorials.css';

const TutorialPlayer = ({ videoId, title, tutorialId }) => {
    const { updateProgress } = useTutorials();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Simulate progress tracking
        if (isPlaying) {
            const interval = setInterval(() => {
                // In production, get actual video progress from YouTube API
                updateProgress(tutorialId, Math.min(Math.random() * 100, 100));
            }, 30000); // Update every 30 seconds

            return () => clearInterval(interval);
        }
    }, [isPlaying, tutorialId, updateProgress]);

    return (
        <div className="tutorial-player">
            <div className="player-wrapper-tutorials">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                ></iframe>
            </div>
        </div>
    );
};

export default TutorialPlayer;