//import React, { useState, useEffect, useRef, useCallback } from 'react';
//import './DoodleCricket.css';
//
//// Shot types with different runs and animations
//const SHOT_TYPES = {
//    DEFENSIVE: { runs: 0, name: 'Defensive', emoji: '🛡️', probability: 0.1 },
//    SINGLE: { runs: 1, name: 'Single', emoji: '👍', probability: 0.25 },
//    DOUBLE: { runs: 2, name: 'Double', emoji: '✌️', probability: 0.20 },
//    THREE: { runs: 3, name: 'Three', emoji: '👏', probability: 0.15 },
//    FOUR: { runs: 4, name: 'FOUR!', emoji: '💥', probability: 0.20 },
//    SIX: { runs: 6, name: 'SIX!', emoji: '🔥', probability: 0.10 },
//};
//
//const GAME_MODES = {
//    QUICK_PLAY: { name: 'Quick Play', overs: 5, wickets: 10 },
//    TOURNAMENT: { name: 'Tournament', overs: 10, wickets: 10 },
//    CHALLENGE: { name: 'Challenge Mode', overs: 3, wickets: 5, target: 50 },
//    SURVIVAL: { name: 'Survival Mode', overs: 999, wickets: 1 }
//};
//
//const POWER_UPS = [
//    { id: 'double_runs', name: 'Double Runs', emoji: '✨', duration: 10000 },
//    { id: 'slow_mo', name: 'Slow Motion', emoji: '⏱️', duration: 15000 },
//    { id: 'shield', name: 'Shield', emoji: '🛡️', duration: 8000 }
//];
//
//const ACHIEVEMENTS = [
//    { id: 'first_six', name: 'First Six!', description: 'Hit your first six', emoji: '🔥' },
//    { id: 'century', name: 'Century!', description: 'Score 100+ runs', emoji: '💯' },
//    { id: 'half_century', name: 'Half Century', description: 'Score 50+ runs', emoji: '5️⃣0️⃣' },
//    { id: 'perfect_timing', name: 'Perfect Timing', description: 'Hit 5 consecutive sixes', emoji: '⚡' },
//    { id: 'survivor', name: 'Survivor', description: 'Face 50+ balls without getting out', emoji: '🏆' },
//];
//
//const COMMENTARY = {
//    SIX: ["What a shot!", "That's gone into the crowd!", "Maximum!", "Massive hit!", "Out of the park!"],
//    FOUR: ["Beautiful boundary!", "Perfectly timed!", "Four runs!", "Glorious shot!", "Sweet timing!"],
//    OUT: ["Bowled!", "Clean bowled!", "Timber!", "Gone!", "What a delivery!"],
//    MISS: ["Beaten!", "Close call!", "Lucky escape!", "So close!", "Just missed!"],
//    SINGLE: ["Quick single!", "Good running!", "Easy single!", "Well judged!"],
//    DEFENSIVE: ["Solid defense!", "Good technique!", "Well blocked!", "Watchful play!"]
//};
//
//const DoodleCricket = () => {
//    // Game State
//    const [gameState, setGameState] = useState('menu'); // menu, mode-select, playing, gameover
//    const [gameMode, setGameMode] = useState(GAME_MODES.QUICK_PLAY);
//    const [score, setScore] = useState(0);
//    const [wickets, setWickets] = useState(0);
//    const [balls, setBalls] = useState(0);
//    const [currentOver, setCurrentOver] = useState(0);
//    const [ballsInOver, setBallsInOver] = useState(0);
//    const [highScore, setHighScore] = useState(0);
//    const [difficulty, setDifficulty] = useState('medium');
//
//    // Gameplay State
//    const [ballPosition, setBallPosition] = useState({ x: 50, y: 10 });
//    const [ballSpeed, setBallSpeed] = useState({ x: 0, y: 0 });
//    const [batPosition, setBatPosition] = useState(50);
//    const [isSwinging, setIsSwinging] = useState(false);
//    const [showBallAnimation, setShowBallAnimation] = useState(false);
//    const [lastShot, setLastShot] = useState(null);
//    const [commentary, setCommentary] = useState('');
//    const [comboCount, setComboCount] = useState(0);
//    const [sixStreak, setSixStreak] = useState(0);
//
//    // Power-ups
//    const [activePowerUps, setActivePowerUps] = useState([]);
//    const [availablePowerUp, setAvailablePowerUp] = useState(null);
//
//    // Achievements
//    const [unlockedAchievements, setUnlockedAchievements] = useState([]);
//    const [showAchievement, setShowAchievement] = useState(null);
//
//    // Leaderboard
//    const [leaderboard, setLeaderboard] = useState([]);
//    const [playerName, setPlayerName] = useState('');
//    const [showNameInput, setShowNameInput] = useState(false);
//
//    // Ball Physics
//    const [ballType, setBallType] = useState('fast'); // fast, spin, swing
//    const [ballSwing, setBallSwing] = useState(0);
//
//    const gameAreaRef = useRef(null);
//    const ballTimerRef = useRef(null);
//    const animationRef = useRef(null);
//
//    // Difficulty settings
//    const difficultySettings = {
//        easy: { speed: 2000, hitWindow: 18, swingAmount: 5 },
//        medium: { speed: 1500, hitWindow: 15, swingAmount: 10 },
//        hard: { speed: 1200, hitWindow: 12, swingAmount: 15 },
//        expert: { speed: 900, hitWindow: 9, swingAmount: 20 }
//    };
//
//    // Load data
//    useEffect(() => {
//        const savedHighScore = localStorage.getItem('cricketHighScore');
//        if (savedHighScore) setHighScore(parseInt(savedHighScore));
//
//        const savedAchievements = localStorage.getItem('cricketAchievements');
//        if (savedAchievements) setUnlockedAchievements(JSON.parse(savedAchievements));
//
//        loadLeaderboard();
//    }, []);
//
//    // Load leaderboard
//    const loadLeaderboard = async () => {
//        try {
//            const response = await fetch('http://localhost:5000/api/doodle-cricket/leaderboard');
//            const data = await response.json();
//            if (data.success) setLeaderboard(data.leaderboard);
//        } catch (error) {
//            console.error('Error loading leaderboard:', error);
//        }
//    };
//
//    // Save score
//    const saveScoreToBackend = async (finalScore) => {
//        if (!playerName.trim()) return;
//
//        try {
//            const response = await fetch('http://localhost:5000/api/doodle-cricket/score', {
//                method: 'POST',
//                headers: { 'Content-Type': 'application/json' },
//                body: JSON.stringify({
//                    playerName: playerName.trim(),
//                    score: finalScore,
//                    balls: balls,
//                    difficulty: difficulty
//                })
//            });
//
//            const data = await response.json();
//            if (data.success) loadLeaderboard();
//        } catch (error) {
//            console.error('Error saving score:', error);
//        }
//    };
//
//    // Start game
//    const startGame = () => {
//        setGameState('playing');
//        setScore(0);
//        setWickets(0);
//        setBalls(0);
//        setCurrentOver(0);
//        setBallsInOver(0);
//        setComboCount(0);
//        setSixStreak(0);
//        setLastShot(null);
//        setCommentary('');
//        setActivePowerUps([]);
//        deliverBall();
//    };
//
//    // Random commentary
//    const getCommentary = (type) => {
//        const comments = COMMENTARY[type] || [];
//        return comments[Math.floor(Math.random() * comments.length)];
//    };
//
//    // Check achievements
//    const checkAchievements = (shotType, currentScore, currentBalls) => {
//        const newAchievements = [];
//
//        // First Six
//        if (shotType === 'SIX' && !unlockedAchievements.includes('first_six')) {
//            newAchievements.push('first_six');
//        }
//
//        // Century
//        if (currentScore >= 100 && !unlockedAchievements.includes('century')) {
//            newAchievements.push('century');
//        }
//
//        // Half Century
//        if (currentScore >= 50 && !unlockedAchievements.includes('half_century')) {
//            newAchievements.push('half_century');
//        }
//
//        // Perfect Timing (5 sixes in a row)
//        if (sixStreak >= 5 && !unlockedAchievements.includes('perfect_timing')) {
//            newAchievements.push('perfect_timing');
//        }
//
//        // Survivor
//        if (currentBalls >= 50 && wickets === 0 && !unlockedAchievements.includes('survivor')) {
//            newAchievements.push('survivor');
//        }
//
//        if (newAchievements.length > 0) {
//            const updated = [...unlockedAchievements, ...newAchievements];
//            setUnlockedAchievements(updated);
//            localStorage.setItem('cricketAchievements', JSON.stringify(updated));
//
//            // Show first achievement
//            const achievement = ACHIEVEMENTS.find(a => a.id === newAchievements[0]);
//            setShowAchievement(achievement);
//            setTimeout(() => setShowAchievement(null), 3000);
//        }
//    };
//
//    // Deliver ball with physics
//    const deliverBall = useCallback(() => {
//        if (gameState !== 'playing') return;
//
//        // Random ball type
//        const types = ['fast', 'spin', 'swing'];
//        const randomType = types[Math.floor(Math.random() * types.length)];
//        setBallType(randomType);
//
//        // Random position with swing
//        const randomX = Math.random() * 60 + 20;
//        const swing = (Math.random() - 0.5) * difficultySettings[difficulty].swingAmount;
//        setBallSwing(swing);
//        setBallPosition({ x: randomX, y: 10 });
//        setShowBallAnimation(true);
//
//        // Random power-up (10% chance)
//        if (Math.random() < 0.1) {
//            const randomPowerUp = POWER_UPS[Math.floor(Math.random() * POWER_UPS.length)];
//            setAvailablePowerUp(randomPowerUp);
//        } else {
//            setAvailablePowerUp(null);
//        }
//
//        // Calculate speed with difficulty and power-ups
//        let speed = difficultySettings[difficulty].speed;
//        if (activePowerUps.includes('slow_mo')) {
//            speed *= 1.5; // Slower ball
//        }
//
//        // Progressive difficulty
//        const progressiveSpeed = speed - (Math.floor(balls / 12) * 100);
//        const actualSpeed = Math.max(progressiveSpeed, 600);
//
//        ballTimerRef.current = setTimeout(() => {
//            setShowBallAnimation(false);
//            handleMiss();
//        }, actualSpeed);
//    }, [gameState, balls, difficulty, activePowerUps]);
//
//    // Handle bat swing
//    const handleSwing = (e) => {
//        if (gameState !== 'playing' || isSwinging || !showBallAnimation) return;
//
//        setIsSwinging(true);
//
//        const rect = gameAreaRef.current.getBoundingClientRect();
//        const clickX = e.clientX || e.touches?.[0]?.clientX;
//        const swingPosition = ((clickX - rect.left) / rect.width) * 100;
//
//        setBatPosition(swingPosition);
//
//        // Check hit with swing physics
//        const hitWindow = difficultySettings[difficulty].hitWindow;
//        const ballX = ballPosition.x + ballSwing;
//
//        if (Math.abs(swingPosition - ballX) < hitWindow) {
//            clearTimeout(ballTimerRef.current);
//            setShowBallAnimation(false);
//            const accuracy = swingPosition - ballX;
//            handleHit(accuracy);
//        }
//
//        setTimeout(() => setIsSwinging(false), 300);
//    };
//
//    // Handle successful hit
//    const handleHit = (accuracy) => {
//        const shotType = determineShotType(accuracy);
//        const runs = shotType.runs;
//
//        // Apply power-up
//        const finalRuns = activePowerUps.includes('double_runs') ? runs * 2 : runs;
//
//        setScore(prev => prev + finalRuns);
//        setBalls(prev => prev + 1);
//        setBallsInOver(prev => {
//            const newBalls = prev + 1;
//            if (newBalls === 6) {
//                setCurrentOver(o => o + 1);
//                return 0;
//            }
//            return newBalls;
//        });
//
//        setLastShot({ runs: finalRuns, type: shotType.name, emoji: shotType.emoji });
//        setCommentary(getCommentary(shotType.name.toUpperCase()));
//        setComboCount(prev => prev + 1);
//
//        // Track six streak
//        if (runs === 6) {
//            setSixStreak(prev => prev + 1);
//        } else {
//            setSixStreak(0);
//        }
//
//        // Check achievements
//        checkAchievements(shotType.name.toUpperCase(), score + finalRuns, balls + 1);
//
//        // Collect power-up if available
//        if (availablePowerUp && !activePowerUps.includes(availablePowerUp.id)) {
//            activatePowerUp(availablePowerUp);
//        }
//
//        setTimeout(() => {
//            setLastShot(null);
//            setCommentary('');
//        }, 2000);
//
//        // Check game mode conditions
//        if (gameMode.name === 'Challenge Mode' && score + finalRuns >= gameMode.target) {
//            setTimeout(() => endGame(true), 2000);
//            return;
//        }
//
//        if (currentOver >= gameMode.overs && ballsInOver + 1 === 6) {
//            setTimeout(() => endGame(false), 2000);
//            return;
//        }
//
//        setTimeout(() => deliverBall(), 2000);
//    };
//
//    // Determine shot type based on timing
//    const determineShotType = (accuracy) => {
//        const absAccuracy = Math.abs(accuracy);
//
//        if (absAccuracy < 2) return SHOT_TYPES.SIX;
//        if (absAccuracy < 5) return SHOT_TYPES.FOUR;
//        if (absAccuracy < 8) return SHOT_TYPES.THREE;
//        if (absAccuracy < 11) return SHOT_TYPES.DOUBLE;
//        if (absAccuracy < 14) return SHOT_TYPES.SINGLE;
//        return SHOT_TYPES.DEFENSIVE;
//    };
//
//    // Activate power-up
//    const activatePowerUp = (powerUp) => {
//        setActivePowerUps(prev => [...prev, powerUp.id]);
//        setTimeout(() => {
//            setActivePowerUps(prev => prev.filter(p => p !== powerUp.id));
//        }, powerUp.duration);
//    };
//
//    // Handle miss
//    const handleMiss = () => {
//        // Shield protects from one miss
//        if (activePowerUps.includes('shield')) {
//            setActivePowerUps(prev => prev.filter(p => p !== 'shield'));
//            setCommentary("Shield saved you!");
//            setTimeout(() => setCommentary(''), 2000);
//            setTimeout(() => deliverBall(), 2000);
//            return;
//        }
//
//        setWickets(prev => prev + 1);
//        setBalls(prev => prev + 1);
//        setBallsInOver(prev => {
//            const newBalls = prev + 1;
//            if (newBalls === 6) {
//                setCurrentOver(o => o + 1);
//                return 0;
//            }
//            return newBalls;
//        });
//        setComboCount(0);
//        setSixStreak(0);
//        setLastShot({ runs: 0, type: 'OUT!', emoji: '😢' });
//        setCommentary(getCommentary('OUT'));
//
//        setTimeout(() => {
//            setLastShot(null);
//            setCommentary('');
//        }, 2000);
//
//        if (wickets + 1 >= gameMode.wickets) {
//            setTimeout(() => endGame(false), 2000);
//        } else {
//            setTimeout(() => deliverBall(), 2000);
//        }
//    };
//
//    // End game
//    const endGame = (won = false) => {
//        clearTimeout(ballTimerRef.current);
//        setGameState('gameover');
//        setShowBallAnimation(false);
//
//        if (score > highScore) {
//            setHighScore(score);
//            localStorage.setItem('cricketHighScore', score.toString());
//        }
//
//        setShowNameInput(true);
//    };
//
//    // Submit score
//    const submitScore = () => {
//        if (playerName.trim()) {
//            saveScoreToBackend(score);
//            setShowNameInput(false);
//        }
//    };
//
//    // Cleanup
//    useEffect(() => {
//        return () => {
//            if (ballTimerRef.current) clearTimeout(ballTimerRef.current);
//            if (animationRef.current) cancelAnimationFrame(animationRef.current);
//        };
//    }, []);
//
//    return (
//        <div className="doodle-cricket-advanced">
//            {/* Header */}
//            <div className="game-header">
//                <h1>🏏 Advanced Cricket Game</h1>
//                <div className="header-stats">
//                    <div className="stat-box">
//                        <span className="stat-label">High Score</span>
//                        <span className="stat-value">{highScore}</span>
//                    </div>
//                    <div className="stat-box">
//                        <span className="stat-label">Achievements</span>
//                        <span className="stat-value">{unlockedAchievements.length}/{ACHIEVEMENTS.length}</span>
//                    </div>
//                </div>
//            </div>
//
//            {/* Menu Screen */}
//            {gameState === 'menu' && (
//                <div className="menu-screen">
//                    <div className="menu-card">
//                        <h2>🏆 Welcome to Advanced Cricket!</h2>
//                        <p className="menu-subtitle">Production-Ready Cricket Game with Realistic Physics</p>
//
//                        <div className="difficulty-selector">
//                            <label>Select Difficulty:</label>
//                            <div className="difficulty-buttons">
//                                {Object.keys(difficultySettings).map(level => (
//                                    <button
//                                        key={level}
//                                        className={`diff-btn ${difficulty === level ? 'active' : ''}`}
//                                        onClick={() => setDifficulty(level)}
//                                    >
//                                        {level.toUpperCase()}
//                                    </button>
//                                ))}
//                            </div>
//                        </div>
//
//                        <button
//                            className="start-button"
//                            onClick={() => setGameState('mode-select')}
//                        >
//                            🎮 Select Game Mode
//                        </button>
//
//                        <div className="features-grid">
//                            <div className="feature-item">✨ Realistic Physics</div>
//                            <div className="feature-item">🎯 Multiple Shot Types</div>
//                            <div className="feature-item">⚡ Power-ups</div>
//                            <div className="feature-item">🏆 Achievements</div>
//                            <div className="feature-item">📊 Progressive Difficulty</div>
//                            <div className="feature-item">🎪 Stadium Graphics</div>
//                        </div>
//                    </div>
//
//                    {/* Achievements Display */}
//                    {unlockedAchievements.length > 0 && (
//                        <div className="achievements-sidebar">
//                            <h3>🏆 Your Achievements</h3>
//                            <div className="achievements-list">
//                                {ACHIEVEMENTS.filter(a => unlockedAchievements.includes(a.id)).map(achievement => (
//                                    <div key={achievement.id} className="achievement-badge">
//                                        <span className="achievement-emoji">{achievement.emoji}</span>
//                                        <div className="achievement-info">
//                                            <div className="achievement-name">{achievement.name}</div>
//                                            <div className="achievement-desc">{achievement.description}</div>
//                                        </div>
//                                    </div>
//                                ))}
//                            </div>
//                        </div>
//                    )}
//                </div>
//            )}
//
//            {/* Mode Selection Screen */}
//            {gameState === 'mode-select' && (
//                <div className="mode-select-screen">
//                    <h2>Choose Game Mode</h2>
//                    <div className="game-modes-grid">
//                        {Object.values(GAME_MODES).map(mode => (
//                            <div
//                                key={mode.name}
//                                className="mode-card"
//                                onClick={() => {
//                                    setGameMode(mode);
//                                    startGame();
//                                }}
//                            >
//                                <h3>{mode.name}</h3>
//                                <p>{mode.overs} overs</p>
//                                <p>{mode.wickets} wickets</p>
//                                {mode.target && <p className="target">Target: {mode.target}</p>}
//                            </div>
//                        ))}
//                    </div>
//                    <button onClick={() => setGameState('menu')} className="back-btn">
//                        ← Back
//                    </button>
//                </div>
//            )}
//
//            {/* Playing Screen */}
//            {gameState === 'playing' && (
//                <div className="playing-screen">
//                    {/* Enhanced Scoreboard */}
//                    <div className="scoreboard-advanced">
//                        <div className="score-main">
//                            <span className="score-number">{score}</span>
//                            <span className="score-label">RUNS</span>
//                        </div>
//                        <div className="score-details">
//                            <div className="detail-item">
//                                <span className="detail-label">Wickets</span>
//                                <span className="detail-value">{wickets}/{gameMode.wickets}</span>
//                            </div>
//                            <div className="detail-item">
//                                <span className="detail-label">Overs</span>
//                                <span className="detail-value">{currentOver}.{ballsInOver}</span>
//                            </div>
//                            <div className="detail-item">
//                                <span className="detail-label">Combo</span>
//                                <span className="detail-value">🔥 {comboCount}</span>
//                            </div>
//                            {gameMode.target && (
//                                <div className="detail-item target">
//                                    <span className="detail-label">Target</span>
//                                    <span className="detail-value">{gameMode.target - score}</span>
//                                </div>
//                            )}
//                        </div>
//                    </div>
//
//                    {/* Active Power-ups */}
//                    {activePowerUps.length > 0 && (
//                        <div className="active-powerups">
//                            {activePowerUps.map(powerUpId => {
//                                const powerUp = POWER_UPS.find(p => p.id === powerUpId);
//                                return (
//                                    <div key={powerUpId} className="powerup-badge">
//                                        {powerUp.emoji} {powerUp.name}
//                                    </div>
//                                );
//                            })}
//                        </div>
//                    )}
//
//                    {/* Commentary */}
//                    {commentary && (
//                        <div className="commentary-box">
//                            💬 {commentary}
//                        </div>
//                    )}
//
//                    {/* Last Shot */}
//                    {lastShot && (
//                        <div className={`last-shot-advanced ${lastShot.runs === 0 ? 'out' : ''}`}>
//                            {lastShot.emoji} {lastShot.type}
//                            {lastShot.runs > 0 && ` +${lastShot.runs}`}
//                        </div>
//                    )}
//
//                    {/* Achievement Unlock */}
//                    {showAchievement && (
//                        <div className="achievement-unlock">
//                            <div className="unlock-content">
//                                <span className="unlock-emoji">{showAchievement.emoji}</span>
//                                <div className="unlock-text">
//                                    <div className="unlock-title">Achievement Unlocked!</div>
//                                    <div className="unlock-name">{showAchievement.name}</div>
//                                </div>
//                            </div>
//                        </div>
//                    )}
//
//                    {/* Game Area with Stadium */}
//                    <div
//                        ref={gameAreaRef}
//                        className="game-area-advanced"
//                        onClick={handleSwing}
//                        onTouchStart={handleSwing}
//                    >
//                        {/* Stadium Background */}
//                        <div className="stadium-bg">
//                            <div className="crowd left-crowd"></div>
//                            <div className="crowd right-crowd"></div>
//                            <div className="scoreboard-display">
//                                <div>{score}/{wickets}</div>
//                            </div>
//                        </div>
//
//                        {/* Ball with physics */}
//                        {showBallAnimation && (
//                            <div
//                                className={`cricket-ball-advanced ${ballType}`}
//                                style={{
//                                    left: `${ballPosition.x}%`,
//                                    animation: `ballFallAdvanced ${difficultySettings[difficulty].speed}ms linear`,
//                                    transform: `translateX(calc(-50% + ${ballSwing}px))`
//                                }}
//                            >
//                                🔴
//                            </div>
//                        )}
//
//                        {/* Power-up indicator */}
//                        {availablePowerUp && showBallAnimation && (
//                            <div className="powerup-indicator">
//                                {availablePowerUp.emoji}
//                            </div>
//                        )}
//
//                        {/* Bat */}
//                        <div
//                            className={`cricket-bat-advanced ${isSwinging ? 'swinging' : ''}`}
//                            style={{ left: `${batPosition}%` }}
//                        >
//                            🏏
//                        </div>
//
//                        {/* Stumps */}
//                        <div className="stumps-advanced">⚡⚡⚡</div>
//
//                        {/* Pitch */}
//                        <div className="pitch-line"></div>
//                        <div className="crease-line"></div>
//                    </div>
//
//                    <div className="game-hint-advanced">
//                        💡 {ballType === 'swing' ? 'Watch the swing!' : ballType === 'spin' ? 'Spinning delivery!' : 'Fast ball!'}
//                    </div>
//                </div>
//            )}
//
//            {/* Game Over Screen */}
//            {gameState === 'gameover' && (
//                <div className="gameover-screen-advanced">
//                    <div className="gameover-card-advanced">
//                        <h2>🏏 Match Complete!</h2>
//                        <div className="final-score-advanced">
//                            <span className="final-score-label">Final Score</span>
//                            <span className="final-score-value">{score}/{wickets}</span>
//                        </div>
//
//                        <div className="match-stats">
//                            <div className="stat-row">
//                                <span className="stat-icon">🎯</span>
//                                <span>Balls Faced: {balls}</span>
//                            </div>
//                            <div className="stat-row">
//                                <span className="stat-icon">⚡</span>
//                                <span>Strike Rate: {balls > 0 ? ((score / balls) * 100).toFixed(1) : 0}</span>
//                            </div>
//                            <div className="stat-row">
//                                <span className="stat-icon">🔥</span>
//                                <span>Best Combo: {comboCount}</span>
//                            </div>
//                            {score > highScore && (
//                                <div className="stat-row new-record">
//                                    <span className="stat-icon">🏆</span>
//                                    <span>NEW HIGH SCORE!</span>
//                                </div>
//                            )}
//                        </div>
//
//                        {/* Name Input */}
//                        {showNameInput && (
//                            <div className="name-input-section">
//                                <p>Save your score!</p>
//                                <input
//                                    type="text"
//                                    placeholder="Enter your name..."
//                                    value={playerName}
//                                    onChange={(e) => setPlayerName(e.target.value)}
//                                    maxLength={20}
//                                    className="name-input"
//                                />
//                                <button onClick={submitScore} className="submit-score-btn">
//                                    Submit Score
//                                </button>
//                                <button onClick={() => setShowNameInput(false)} className="skip-btn">
//                                    Skip
//                                </button>
//                            </div>
//                        )}
//
//                        <div className="gameover-actions">
//                            <button onClick={startGame} className="play-again-btn">
//                                🔄 Play Again
//                            </button>
//                            <button onClick={() => setGameState('menu')} className="menu-btn">
//                                🏠 Main Menu
//                            </button>
//                        </div>
//                    </div>
//                </div>
//            )}
//        </div>
//    );
//};
//
//export default DoodleCricket;