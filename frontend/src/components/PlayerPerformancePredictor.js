import React, { useState } from 'react';
import { predictPlayerPerformance, getAllPlayers } from '../utils/playerPredictor';
import { oppositionTeams } from '../data/playersPerformanceData';
import { pitchTypes } from '../data/pitchData';
import { weatherImpact } from '../data/pitchData';
import './PlayerPerformancePredictor.css';

const PlayerPerformancePredictor = () => {
    const [predictionInput, setPredictionInput] = useState({
        playerId: '',
        format: 'odi',
        venue: '',
        opposition: '',
        weather: 'sunny',
        pitchType: 'balanced',
        battingPosition: 3,
        bowlingPhase: 'middle'
    });

    const [predictionResult, setPredictionResult] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [errors, setErrors] = useState({});
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const players = getAllPlayers();

    // Venue options (simplified from pitch data)
    const venues = [
        { key: 'wankhede', name: 'Wankhede Stadium, Mumbai' },
        { key: 'eden', name: 'Eden Gardens, Kolkata' },
        { key: 'chinnaswamy', name: 'M. Chinnaswamy Stadium, Bangalore' },
        { key: 'mcg', name: 'Melbourne Cricket Ground' },
        { key: 'gabba', name: 'The Gabba, Brisbane' },
        { key: 'scg', name: 'Sydney Cricket Ground' },
        { key: 'lords', name: "Lord's Cricket Ground, London" },
        { key: 'oval', name: 'The Oval, London' }
    ];

    // Handle input changes
    const handleInputChange = (field, value) => {
        setPredictionInput(prev => ({
            ...prev,
            [field]: value
        }));

        // Update selected player when player changes
        if (field === 'playerId') {
            const player = players.find(p => p.id === value);
            setSelectedPlayer(player);
        }

        // Clear error
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }));
        }
    };

    // Validate inputs
    const validateInputs = () => {
        const newErrors = {};

        if (!predictionInput.playerId) {
            newErrors.playerId = 'Please select a player';
        }

        if (!predictionInput.opposition) {
            newErrors.opposition = 'Please select opposition team';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle prediction
    const handlePredict = () => {
        if (!validateInputs()) {
            return;
        }

        const result = predictPlayerPerformance(predictionInput);

        if (result) {
            setPredictionResult(result);
            setShowResult(true);
        }
    };

    // Reset form
    const handleReset = () => {
        setPredictionInput({
            playerId: '',
            format: 'odi',
            venue: '',
            opposition: '',
            weather: 'sunny',
            pitchType: 'balanced',
            battingPosition: 3,
            bowlingPhase: 'middle'
        });
        setPredictionResult(null);
        setShowResult(false);
        setErrors({});
        setSelectedPlayer(null);
    };

    // Get confidence color
    const getConfidenceColor = (confidence) => {
        if (confidence === 'Very High') return '#4ade80';
        if (confidence === 'High') return '#60a5fa';
        if (confidence === 'Medium') return '#fbbf24';
        return '#f87171';
    };

    // Get probability color
    const getProbabilityColor = (probability) => {
        if (probability >= 60) return '#4ade80';
        if (probability >= 40) return '#fbbf24';
        return '#ef4444';
    };

    return (
        <div className="player-predictor-container">
            {/* Header */}
            <div className="player-predictor-header">
                <h1>👤 Player Performance Prediction</h1>
                <p>Predict individual player performance using statistical analysis and form data</p>
            </div>

            {/* Main Content */}
            <div className="player-predictor-content">
                {/* Input Section */}
                <div className="player-input-section">
                    <h2>Player & Match Details</h2>

                    {/* Player Selection */}
                    <div className="input-group">
                        <label>Select Player *</label>
                        <select
                            value={predictionInput.playerId}
                            onChange={(e) => handleInputChange('playerId', e.target.value)}
                            className={errors.playerId ? 'error' : ''}
                        >
                            <option value="">Choose a player</option>
                            {players.map(player => (
                                <option key={player.id} value={player.id}>
                                    {player.name} ({player.country}) - {player.role}
                                </option>
                            ))}
                        </select>
                        {errors.playerId && <span className="error-message">{errors.playerId}</span>}
                    </div>

                    {/* Player Info Card */}
                    {selectedPlayer && (
                        <div className="selected-player-card">
                            <div className="player-card-header">
                                <h3>{selectedPlayer.name}</h3>
                                <span className="player-role-badge">{selectedPlayer.role}</span>
                            </div>
                            <div className="player-card-details">
                                <div className="detail-item">
                                    <span className="detail-icon">🏴</span>
                                    <span>{selectedPlayer.country}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Format Selection */}
                    <div className="input-group">
                        <label>Match Format</label>
                        <div className="format-buttons-player">
                            <button
                                className={`format-btn-player ${predictionInput.format === 'test' ? 'active' : ''}`}
                                onClick={() => handleInputChange('format', 'test')}
                            >
                                Test
                            </button>
                            <button
                                className={`format-btn-player ${predictionInput.format === 'odi' ? 'active' : ''}`}
                                onClick={() => handleInputChange('format', 'odi')}
                            >
                                ODI
                            </button>
                            <button
                                className={`format-btn-player ${predictionInput.format === 't20' ? 'active' : ''}`}
                                onClick={() => handleInputChange('format', 't20')}
                            >
                                T20
                            </button>
                        </div>
                    </div>

                    {/* Opposition & Venue */}
                    <div className="input-row-player">
                        <div className="input-group">
                            <label>Opposition Team *</label>
                            <select
                                value={predictionInput.opposition}
                                onChange={(e) => handleInputChange('opposition', e.target.value)}
                                className={errors.opposition ? 'error' : ''}
                            >
                                <option value="">Select opposition</option>
                                {Object.entries(oppositionTeams).map(([key, name]) => (
                                    <option key={key} value={key}>{name}</option>
                                ))}
                            </select>
                            {errors.opposition && <span className="error-message">{errors.opposition}</span>}
                        </div>

                        <div className="input-group">
                            <label>Venue (Optional)</label>
                            <select
                                value={predictionInput.venue}
                                onChange={(e) => handleInputChange('venue', e.target.value)}
                            >
                                <option value="">Any venue</option>
                                {venues.map(venue => (
                                    <option key={venue.key} value={venue.key}>{venue.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Conditions */}
                    <div className="input-row-player">
                        <div className="input-group">
                            <label>Weather Conditions</label>
                            <select
                                value={predictionInput.weather}
                                onChange={(e) => handleInputChange('weather', e.target.value)}
                            >
                                {Object.entries(weatherImpact).map(([key, weather]) => (
                                    <option key={key} value={key}>
                                        {weather.icon} {weather.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Pitch Type</label>
                            <select
                                value={predictionInput.pitchType}
                                onChange={(e) => handleInputChange('pitchType', e.target.value)}
                            >
                                {Object.entries(pitchTypes).map(([key, pitch]) => (
                                    <option key={key} value={key}>
                                        {pitch.icon} {pitch.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Role-Specific Inputs */}
                    {selectedPlayer && (selectedPlayer.role === 'batsman' || selectedPlayer.role === 'allrounder' || selectedPlayer.role === 'wicketkeeper') && (
                        <div className="input-group">
                            <label>Batting Position</label>
                            <div className="position-selector">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(pos => (
                                    <button
                                        key={pos}
                                        className={`position-btn ${predictionInput.battingPosition === pos ? 'active' : ''}`}
                                        onClick={() => handleInputChange('battingPosition', pos)}
                                    >
                                        {pos}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedPlayer && (selectedPlayer.role === 'bowler' || selectedPlayer.role === 'allrounder') && predictionInput.format !== 'test' && (
                        <div className="input-group">
                            <label>Bowling Phase</label>
                            <div className="phase-buttons">
                                <button
                                    className={`phase-btn ${predictionInput.bowlingPhase === 'powerplay' ? 'active' : ''}`}
                                    onClick={() => handleInputChange('bowlingPhase', 'powerplay')}
                                >
                                    Powerplay
                                </button>
                                <button
                                    className={`phase-btn ${predictionInput.bowlingPhase === 'middle' ? 'active' : ''}`}
                                    onClick={() => handleInputChange('bowlingPhase', 'middle')}
                                >
                                    Middle Overs
                                </button>
                                <button
                                    className={`phase-btn ${predictionInput.bowlingPhase === 'death' ? 'active' : ''}`}
                                    onClick={() => handleInputChange('bowlingPhase', 'death')}
                                >
                                    Death Overs
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="player-action-buttons">
                        <button onClick={handlePredict} className="player-predict-button">
                            📊 Predict Performance
                        </button>
                        <button onClick={handleReset} className="player-reset-button">
                            🔄 Reset
                        </button>
                    </div>
                </div>

                {/* Result Section */}
                {showResult && predictionResult && (
                    <div className="player-result-section">
                        <h2>Performance Prediction</h2>

                        {/* Player Info Header */}
                        <div className="result-player-header">
                            <div className="result-player-info">
                                <h3>{predictionResult.playerInfo.name}</h3>
                                <div className="player-meta">
                                    <span className="meta-item">{predictionResult.playerInfo.country}</span>
                                    <span className="meta-separator">•</span>
                                    <span className="meta-item">{predictionResult.playerInfo.role}</span>
                                    <span className="meta-separator">•</span>
                                    <span className="meta-item">{predictionInput.format.toUpperCase()}</span>
                                </div>
                            </div>
                            <div className="confidence-display">
                                <span className="confidence-label">Confidence:</span>
                                <span
                                    className="confidence-badge-player"
                                    style={{ backgroundColor: getConfidenceColor(predictionResult.confidence) }}
                                >
                                    {predictionResult.confidence}
                                </span>
                            </div>
                        </div>

                        {/* Batting Prediction */}
                        {predictionResult.batting && (
                            <div className="performance-section batting-section">
                                <h3>Batting Performance</h3>

                                {/* Predicted Runs */}
                                <div className="primary-prediction-card">
                                    <div className="prediction-main">
                                        <span className="prediction-label">Predicted Runs</span>
                                        <span className="prediction-value">{predictionResult.batting.predictedRuns}</span>
                                    </div>
                                    <div className="prediction-range">
                                        <span className="range-label">Expected Range:</span>
                                        <div className="range-values">
                                            <span className="range-item">
                                                Low: <strong>{predictionResult.batting.runsRange.low}</strong>
                                            </span>
                                            <span className="range-item">
                                                Likely: <strong>{predictionResult.batting.runsRange.medium}</strong>
                                            </span>
                                            <span className="range-item">
                                                High: <strong>{predictionResult.batting.runsRange.high}</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Comparison */}
                                <div className="stats-comparison-predictor">
                                    <div className="stat-card-predictor">
                                        <h4>Predicted Average</h4>
                                        <div className="stat-values-predictor">
                                            <span className="predicted-stat-predictor">{predictionResult.batting.predictedAverage}</span>
                                            <span className="stat-vs-predictor">vs</span>
                                            <span className="career-stat-predictor">{predictionResult.batting.careerAverage.toFixed(1)}</span>
                                        </div>
                                        <span className="stat-label-predictor">Career Avg</span>
                                    </div>

                                    <div className="stat-card-predictor">
                                        <h4>Predicted Strike Rate</h4>
                                        <div className="stat-values-predictor">
                                            <span className="predicted-stat-predictor">{predictionResult.batting.predictedStrikeRate}</span>
                                            <span className="stat-vs-predictor">vs</span>
                                            <span className="career-stat-predictor">{predictionResult.batting.careerStrikeRate.toFixed(1)}</span>
                                        </div>
                                        <span className="stat-label">Career SR</span>
                                    </div>

                                    <div className="stat-card-predictor">
                                        <h4>Recent Form</h4>
                                        <div className="form-indicator">
                                            <div
                                                className="form-bar"
                                                style={{
                                                    width: `${Math.min(100, predictionResult.batting.formFactor * 100)}%`,
                                                    backgroundColor: predictionResult.batting.formFactor >= 1.1 ? '#4ade80' :
                                                        predictionResult.batting.formFactor >= 0.95 ? '#fbbf24' : '#ef4444'
                                                }}
                                            />
                                        </div>
                                        <span className="stat-label-predictor">
                                            {predictionResult.batting.formFactor >= 1.1 ? 'Excellent' :
                                                predictionResult.batting.formFactor >= 0.95 ? 'Good' : 'Poor'}
                                        </span>
                                    </div>
                                </div>

                                {/* Milestones */}
                                <div className="milestones-section">
                                    <h4>📊 Milestone Probabilities</h4>
                                    <div className="milestones-grid">
                                        <div className="milestone-card">
                                            <span className="milestone-icon">💯</span>
                                            <span className="milestone-name">Century</span>
                                            <div className="probability-display-bar">
                                                <div
                                                    className="probability-fill-bar"
                                                    style={{
                                                        width: `${predictionResult.batting.milestones.century}%`,
                                                        backgroundColor: getProbabilityColor(predictionResult.batting.milestones.century)
                                                    }}
                                                />
                                            </div>
                                            <span className="probability-percent">{predictionResult.batting.milestones.century}%</span>
                                        </div>

                                        <div className="milestone-card">
                                            <span className="milestone-icon">5️⃣0️⃣</span>
                                            <span className="milestone-name">Fifty</span>
                                            <div className="probability-display-bar">
                                                <div
                                                    className="probability-fill-bar"
                                                    style={{
                                                        width: `${predictionResult.batting.milestones.fifty}%`,
                                                        backgroundColor: getProbabilityColor(predictionResult.batting.milestones.fifty)
                                                    }}
                                                />
                                            </div>
                                            <span className="probability-percent">{predictionResult.batting.milestones.fifty}%</span>
                                        </div>

                                        <div className="milestone-card">
                                            <span className="milestone-icon">❌</span>
                                            <span className="milestone-name">Out &lt; 10</span>
                                            <div className="probability-display-bar">
                                                <div
                                                    className="probability-fill-bar"
                                                    style={{
                                                        width: `${predictionResult.batting.milestones.dismissalUnder10}%`,
                                                        backgroundColor: '#ef4444'
                                                    }}
                                                />
                                            </div>
                                            <span className="probability-percent">{predictionResult.batting.milestones.dismissalUnder10}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Bowling Prediction */}
                        {predictionResult.bowling && (
                            <div className="performance-section bowling-section">
                                <h3>Bowling Performance</h3>

                                {/* Predicted Wickets */}
                                <div className="primary-prediction-card">
                                    <div className="prediction-main">
                                        <span className="prediction-label">Predicted Wickets</span>
                                        <span className="prediction-value">{predictionResult.bowling.predictedWickets}</span>
                                    </div>
                                    <div className="prediction-range">
                                        <span className="range-label">Expected Range:</span>
                                        <div className="range-values">
                                            <span className="range-item">
                                                Low: <strong>{predictionResult.bowling.wicketsRange.low}</strong>
                                            </span>
                                            <span className="range-item">
                                                Likely: <strong>{predictionResult.bowling.wicketsRange.medium}</strong>
                                            </span>
                                            <span className="range-item">
                                                High: <strong>{predictionResult.bowling.wicketsRange.high}</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Comparison */}
                                <div className="stats-comparison-predictor">
                                    <div className="stat-card-predictor">
                                        <h4>Predicted Average</h4>
                                        <div className="stat-values-predictor">
                                            <span className="predicted-stat-predictor">{predictionResult.bowling.predictedAverage}</span>
                                            <span className="stat-vs-predictor">vs</span>
                                            <span className="career-stat-predictor">{predictionResult.bowling.careerAverage.toFixed(1)}</span>
                                        </div>
                                        <span className="stat-label-predictor">Career Avg</span>
                                    </div>

                                    <div className="stat-card-predictor">
                                        <h4>Predicted Economy</h4>
                                        <div className="stat-values-predictor">
                                            <span className="predicted-stat-predictor">{predictionResult.bowling.predictedEconomy}</span>
                                            <span className="stat-vs-predictor">vs</span>
                                            <span className="career-stat-predictor">{predictionResult.bowling.careerEconomy.toFixed(2)}</span>
                                        </div>
                                        <span className="stat-label">Career Econ</span>
                                    </div>

                                    <div className="stat-card-predictor">
                                        <h4>Recent Form</h4>
                                        <div className="form-indicator">
                                            <div
                                                className="form-bar"
                                                style={{
                                                    width: `${Math.min(100, (2 - predictionResult.bowling.formFactor.average) * 100)}%`,
                                                    backgroundColor: predictionResult.bowling.formFactor.average <= 0.90 ? '#4ade80' :
                                                        predictionResult.bowling.formFactor.average <= 1.05 ? '#fbbf24' : '#ef4444'
                                                }}
                                            />
                                        </div>
                                        <span className="stat-label-predictor">
                                            {predictionResult.bowling.formFactor.average <= 0.90 ? 'Excellent' :
                                                predictionResult.bowling.formFactor.average <= 1.05 ? 'Good' : 'Poor'}
                                        </span>
                                    </div>
                                </div>

                                {/* Milestones */}
                                <div className="milestones-section">
                                    <h4>📊 Milestone Probabilities</h4>
                                    <div className="milestones-grid">
                                        <div className="milestone-card">
                                            <span className="milestone-icon">5️⃣</span>
                                            <span className="milestone-name">5 Wickets</span>
                                            <div className="probability-display-bar">
                                                <div
                                                    className="probability-fill-bar"
                                                    style={{
                                                        width: `${predictionResult.bowling.milestones.fiveWickets}%`,
                                                        backgroundColor: getProbabilityColor(predictionResult.bowling.milestones.fiveWickets)
                                                    }}
                                                />
                                            </div>
                                            <span className="probability-percent">{predictionResult.bowling.milestones.fiveWickets}%</span>
                                        </div>

                                        <div className="milestone-card">
                                            <span className="milestone-icon">3️⃣</span>
                                            <span className="milestone-name">3 Wickets</span>
                                            <div className="probability-display-bar">
                                                <div
                                                    className="probability-fill-bar"
                                                    style={{
                                                        width: `${predictionResult.bowling.milestones.threeWickets}%`,
                                                        backgroundColor: getProbabilityColor(predictionResult.bowling.milestones.threeWickets)
                                                    }}
                                                />
                                            </div>
                                            <span className="probability-percent">{predictionResult.bowling.milestones.threeWickets}%</span>
                                        </div>

                                        <div className="milestone-card">
                                            <span className="milestone-icon">0️⃣</span>
                                            <span className="milestone-name">Wicketless</span>
                                            <div className="probability-display-bar">
                                                <div
                                                    className="probability-fill-bar"
                                                    style={{
                                                        width: `${predictionResult.bowling.milestones.wicketless}%`,
                                                        backgroundColor: '#ef4444'
                                                    }}
                                                />
                                            </div>
                                            <span className="probability-percent">{predictionResult.bowling.milestones.wicketless}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Insights */}
                        <div className="insights-section-player">
                            <h3>💡 Key Insights</h3>
                            <ul className="insights-list-player">
                                {predictionResult.insights.map((insight, index) => (
                                    <li key={index} className="insight-item-player">{insight}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Disclaimer */}
                        <div className="player-disclaimer">
                            <p>
                                ⚠️ <strong>Disclaimer:</strong> Predictions are based on historical statistics, recent form, and match conditions.
                                Actual performance may vary due to player fitness, match situation, team strategy, and other unpredictable factors.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className="player-info-section">
                <h2>📖 Prediction Methodology</h2>
                <div className="methodology-grid">
                    <div className="method-card">
                        <h4>📊 Career Statistics</h4>
                        <p>Comprehensive analysis of player's career performance across all formats</p>
                    </div>
                    <div className="method-card">
                        <h4>🔥 Recent Form</h4>
                        <p>Weighted analysis of last 5 innings with recent matches having higher impact</p>
                    </div>
                    <div className="method-card">
                        <h4>🏟️ Venue History</h4>
                        <p>Performance tracking at specific venues to identify comfort zones</p>
                    </div>
                    <div className="method-card">
                        <h4>🎯 Opposition Analysis</h4>
                        <p>Head-to-head record against specific opposition teams</p>
                    </div>
                    <div className="method-card">
                        <h4>🌤️ Conditions</h4>
                        <p>Impact of weather and pitch conditions on player performance</p>
                    </div>
                    <div className="method-card">
                        <h4>📈 Statistical Model</h4>
                        <p>Multi-factor weighted algorithm for accurate predictions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerPerformancePredictor;