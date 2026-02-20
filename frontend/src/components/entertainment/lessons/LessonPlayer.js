import React, { useEffect, useRef, useState } from 'react';
import { useLessons } from '../../../context/LessonsContext';

const LessonPlayer = ({ videoId, title, lessonId }) => {
    const { updateProgress } = useLessons();
    const playerRef = useRef(null);
    const intervalRef = useRef(null);
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        // Load YouTube IFrame API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                initializePlayer();
            };
        } else {
            initializePlayer();
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (player) {
                player.destroy();
            }
        };
    }, [videoId]);

    const initializePlayer = () => {
        const newPlayer = new window.YT.Player(playerRef.current, {
            videoId: videoId,
            playerVars: {
                autoplay: 0,
                controls: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0
            },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange
            }
        });
        setPlayer(newPlayer);
    };

    const onPlayerReady = (event) => {
        // Player is ready
    };

    const onPlayerStateChange = (event) => {
        // Playing
        if (event.data === window.YT.PlayerState.PLAYING) {
            startProgressTracking();
        }
        // Paused or Ended
        else {
            stopProgressTracking();
            if (event.data === window.YT.PlayerState.ENDED) {
                updateProgress(lessonId, 100);
            }
        }
    };

    const startProgressTracking = () => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            if (player && typeof player.getCurrentTime === 'function') {
                const currentTime = player.getCurrentTime();
                const duration = player.getDuration();
                if (duration > 0) {
                    const progress = (currentTime / duration) * 100;
                    updateProgress(lessonId, Math.min(progress, 100));
                }
            }
        }, 5000); // Update every 5 seconds
    };

    const stopProgressTracking = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (
        <div className="lesson-player">
            <div className="player-wrapper-lessons">
                <div ref={playerRef} className="youtube-player-lessons"></div>
            </div>
        </div>
    );
};

export default LessonPlayer;