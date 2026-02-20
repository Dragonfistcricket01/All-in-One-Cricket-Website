import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MLMatchPredictor.css';

const MLMatchPredictor = () => {
    const [teams, setTeams] = useState([]);
    const [modelInfo, setModelInfo] = useState(null);
    const [predictionInput, setPredictionInput] = useState({
        team1: '',
        team2: '',
        format: 'odi',
        venue: 'neutral',
        toss_winner: 'team1',
        toss_decision: 'bat',
        weather: 'sunny',
        pitch_type: 'balanced',
        team1_form: 10,
        team2_form: 10
    });

    const [predictionResult, setPredictionResult] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const API_BASE_URL = 'http://localhost:5001/api';

    // Fetch teams and model info on mount
    useEffect(() => {
        fetchTeams();
        fetchModelInfo();
    }, []);

    const fetchTeams = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/teams`);
            setTeams(response.data.teams);
        } catch (error) {
            console.error('Error fetching teams:', error);
        }
    };

    const fetchModelInfo = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/ml-model-info`);
            setModelInfo(response.data);
        } catch (error) {
            console.error('Error fetching model info:', error);
        }
    };

    // Handle input changes
    const handleInputChange = (field, value) => {
        setPredictionInput(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }));
        }
    };

    // Validate inputs
    const validateInputs = () => {
        const newErrors = {};

        if (!predictionInput.team1) {
            newErrors.team1 = 'Please select Team 1';
        }

        if (!predictionInput.team2) {
            newErrors.team2 = 'Please select Team 2';
        }

        if (predictionInput.team1 === predictionInput.team2) {
            newErrors.team2 = 'Teams must be different';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle prediction
    const handlePredict = async () => {
        if (!validateInputs()) {
            return;
        }

        if (!modelInfo?.available) {
            alert('ML Model is not available. Please check backend setup.');
            return;
        }

        setLoading(true);
        setShowResult(false);

        try {
            const response = await axios.post(`${API_BASE_URL}/ml-predict`, predictionInput);

            if (response.data.success) {
                setPredictionResult(response.data);
                setShowResult(true);
            } else {
                alert('Prediction failed: ' + (response.data.error || 'Unknown error'));
            }
        } catch (error) {
            console.error('Prediction error:', error);
            alert('Error making prediction. Please check if backend is running.');
        } finally {
            setLoading(false);
        }
    };

    // Reset form
    const handleReset = () => {
        setPredictionInput({
            team1: '',
            team2: '',
            format: 'odi',
            venue: 'neutral',
            toss_winner: 'team1',
            toss_decision: 'bat',
            weather: 'sunny',
            pitch_type: 'balanced',
            team1_form: 10,
            team2_form: 10
        });
        setPredictionResult(null);
        setShowResult(false);
        setErrors({});
    };

    // Get confidence color
    const getConfidenceColor = (confidence) => {
        const colors = {
            'very_high': '#29c07aff',
            'high': '#60a5fa',
            'medium': '#fbbf24',
            'low': '#f87171'
        };
        return colors[confidence] || '#9ca3af';
    };

    // Get team name display
    const getTeamDisplay = (teamId) => {
        const team = teams.find(t => t.id === teamId);
        return team ? team.name : teamId;
    };

    return (
        <div className="ml-predictor-container">
            {/* Header */}
            <div className="ml-predictor-header">
                <h1>🤖 AI Match Prediction (Machine Learning)</h1>
                <p>Advanced match outcome prediction using trained machine learning models</p>

                {/* Model Status Badge */}
                {modelInfo && (
                    <div className={`model-status-badge ${modelInfo.available ? 'available' : 'unavailable'}`}>
                        <span className="status-icon">{modelInfo.available ? '✅' : '❌'}</span>
                        <span className="status-text">
                            {modelInfo.available
                                ? `ML Model Active: ${modelInfo.model_type}`
                                : 'ML Model Not Loaded'}
                        </span>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="ml-predictor-content">
                {/* Input Section */}
                <div className="ml-input-section">
                    <h2>Match Configuration</h2>

                    {/* Team Selection */}
                    <div className="teams-selection">
                        <div className="input-group">
                            <label>Team 1 *</label>
                            <select
                                value={predictionInput.team1}
                                onChange={(e) => handleInputChange('team1', e.target.value)}
                                className={errors.team1 ? 'error' : ''}
                            >
                                <option value="">Select Team 1</option>
                                {teams.map(team => (
                                    <option key={team.id} value={team.id}>
                                        {team.name} (Rating: {team.rating})
                                    </option>
                                ))}
                            </select>
                            {errors.team1 && <span className="error-message">{errors.team1}</span>}
                        </div>

                        <div className="vs-divider-ml">
                            <span className="vs-text">VS</span>
                        </div>

                        <div className="input-group">
                            <label>Team 2 *</label>
                            <select
                                value={predictionInput.team2}
                                onChange={(e) => handleInputChange('team2', e.target.value)}
                                className={errors.team2 ? 'error' : ''}
                            >
                                <option value="">Select Team 2</option>
                                {teams.map(team => (
                                    <option key={team.id} value={team.id}>
                                        {team.name} (Rating: {team.rating})
                                    </option>
                                ))}
                            </select>
                            {errors.team2 && <span className="error-message">{errors.team2}</span>}
                        </div>
                    </div>

                    {/* Format Selection */}
                    <div className="input-group">
                        <label>Match Format</label>
                        <div className="format-buttons-ml">
                            <button
                                className={`format-btn-ml ${predictionInput.format === 'test' ? 'active' : ''}`}
                                onClick={() => handleInputChange('format', 'test')}
                            >
                                Test
                            </button>
                            <button
                                className={`format-btn-ml ${predictionInput.format === 'odi' ? 'active' : ''}`}
                                onClick={() => handleInputChange('format', 'odi')}
                            >
                                ODI
                            </button>
                            <button
                                className={`format-btn-ml ${predictionInput.format === 't20' ? 'active' : ''}`}
                                onClick={() => handleInputChange('format', 't20')}
                            >
                                T20
                            </button>
                        </div>
                    </div>

                    {/* Venue & Toss */}
                    <div className="input-row-ml">
                        <div className="input-group">
                            <label>Venue Advantage</label>
                            <select
                                value={predictionInput.venue}
                                onChange={(e) => handleInputChange('venue', e.target.value)}
                            >
                                <option value="team1">Team 1 Home</option>
                                <option value="team2">Team 2 Home</option>
                                <option value="neutral">Neutral Venue</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Toss Winner</label>
                            <select
                                value={predictionInput.toss_winner}
                                onChange={(e) => handleInputChange('toss_winner', e.target.value)}
                            >
                                <option value="team1">Team 1</option>
                                <option value="team2">Team 2</option>
                            </select>
                        </div>
                    </div>

                    {/* Toss Decision */}
                    <div className="input-group">
                        <label>Toss Decision</label>
                        <div className="toss-buttons">
                            <button
                                className={`toss-btn ${predictionInput.toss_decision === 'bat' ? 'active' : ''}`}
                                onClick={() => handleInputChange('toss_decision', 'bat')}
                            >
                                🏏 Bat First
                            </button>
                            <button
                                className={`toss-btn ${predictionInput.toss_decision === 'bowl' ? 'active' : ''}`}
                                onClick={() => handleInputChange('toss_decision', 'bowl')}
                            >
                                ⚾ Bowl First
                            </button>
                        </div>
                    </div>

                    {/* Weather & Pitch */}
                    <div className="input-row-ml">
                        <div className="input-group">
                            <label>Weather</label>
                            <select
                                value={predictionInput.weather}
                                onChange={(e) => handleInputChange('weather', e.target.value)}
                            >
                                <option value="sunny">☀️ Sunny</option>
                                <option value="cloudy">☁️ Cloudy</option>
                                <option value="overcast">🌥️ Overcast</option>
                                <option value="humid">💧 Humid</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Pitch Type</label>
                            <select
                                value={predictionInput.pitch_type}
                                onChange={(e) => handleInputChange('pitch_type', e.target.value)}
                            >
                                <option value="batting_paradise">Batting Paradise</option>
                                <option value="batting_friendly">Batting Friendly</option>
                                <option value="balanced">Balanced</option>
                                <option value="bowling_friendly">Bowling Friendly</option>
                                <option value="green_seamer">Green Seamer</option>
                                <option value="spin_friendly">Spin Friendly</option>
                            </select>
                        </div>
                    </div>

                    {/* Recent Form */}
                    <div className="form-sliders">
                        <div className="input-group">
                            <label>Team 1 Recent Form: <strong>{predictionInput.team1_form}/20</strong></label>
                            <input
                                type="range"
                                min="0"
                                max="20"
                                value={predictionInput.team1_form}
                                onChange={(e) => handleInputChange('team1_form', parseInt(e.target.value))}
                                className="range-slider-ml"
                            />
                            <div className="form-labels">
                                <span>Poor</span>
                                <span>Average</span>
                                <span>Excellent</span>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Team 2 Recent Form: <strong>{predictionInput.team2_form}/20</strong></label>
                            <input
                                type="range"
                                min="0"
                                max="20"
                                value={predictionInput.team2_form}
                                onChange={(e) => handleInputChange('team2_form', parseInt(e.target.value))}
                                className="range-slider-ml"
                            />
                            <div className="form-labels">
                                <span>Poor</span>
                                <span>Average</span>
                                <span>Excellent</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="ml-action-buttons">
                        <button
                            onClick={handlePredict}
                            className="ml-predict-button"
                            disabled={loading || !modelInfo?.available}
                        >
                            {loading ? '🔄 Analyzing...' : '🤖 Predict with AI'}
                        </button>
                        <button onClick={handleReset} className="ml-reset-button">
                            🔄 Reset
                        </button>
                    </div>
                </div>

                {/* Result Section */}
                {showResult && predictionResult && (
                    <div className="ml-result-section">
                        <h2>🎯 AI Prediction Results</h2>

                        {/* Main Prediction Card */}
                        <div className="ml-prediction-card">
                            <div className="prediction-header-ml">
                                <h3>Match Winner Prediction</h3>
                                <span
                                    className="confidence-badge-ml"
                                    style={{ backgroundColor: getConfidenceColor(predictionResult.confidence) }}
                                >
                                    {predictionResult.confidence.replace('_', ' ').toUpperCase()} CONFIDENCE
                                </span>
                            </div>

                            <div className="winner-display">
                                <div className={`team-result ${predictionResult.prediction === 'team1' ? 'winner' : 'loser'}`}>
                                    <h4>{getTeamDisplay(predictionResult.team1_name)}</h4>
                                    <div className="probability-circle">
                                        <svg viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8" />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="none"
                                                stroke={predictionResult.prediction === 'team1' ? '#10b981' : '#ef4444'}
                                                strokeWidth="8"
                                                strokeDasharray={`${predictionResult.team1_win_probability * 2.827} 282.7`}
                                                strokeLinecap="round"
                                                transform="rotate(-90 50 50)"
                                            />
                                        </svg>
                                        <div className="probability-text">
                                            <span className="probability-value">{predictionResult.team1_win_probability}%</span>
                                            <span className="probability-label">Win Chance</span>
                                        </div>
                                    </div>
                                    {predictionResult.prediction === 'team1' && (
                                        <div className="winner-badge">🏆 PREDICTED WINNER</div>
                                    )}
                                </div>

                                <div className="vs-divider-result">VS</div>

                                <div className={`team-result ${predictionResult.prediction === 'team2' ? 'winner' : 'loser'}`}>
                                    <h4>{getTeamDisplay(predictionResult.team2_name)}</h4>
                                    <div className="probability-circle">
                                        <svg viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8" />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="none"
                                                stroke={predictionResult.prediction === 'team2' ? '#10b981' : '#ef4444'}
                                                strokeWidth="8"
                                                strokeDasharray={`${predictionResult.team2_win_probability * 2.827} 282.7`}
                                                strokeLinecap="round"
                                                transform="rotate(-90 50 50)"
                                            />
                                        </svg>
                                        <div className="probability-text">
                                            <span className="probability-value">{predictionResult.team2_win_probability}%</span>
                                            <span className="probability-label">Win Chance</span>
                                        </div>
                                    </div>
                                    {predictionResult.prediction === 'team2' && (
                                        <div className="winner-badge">🏆 PREDICTED WINNER</div>
                                    )}
                                </div>
                            </div>

                            <div className="model-info">
                                <span className="model-label">🤖 ML Model:</span>
                                <span className="model-value">{predictionResult.model_type}</span>
                            </div>
                        </div>

                        {/* Confidence Explanation */}
                        <div className="confidence-explanation">
                            <h4>📊 Confidence Level Explanation</h4>
                            <p>
                                {predictionResult.confidence === 'very_high' && (
                                    "Very high confidence (>30% margin). The model strongly favors one team based on all input factors."
                                )}
                                {predictionResult.confidence === 'high' && (
                                    "High confidence (20-30% margin). Clear favorite identified, but the match could still be competitive."
                                )}
                                {predictionResult.confidence === 'medium' && (
                                    "Medium confidence (10-20% margin). Moderate advantage for one team, match outcome less certain."
                                )}
                                {predictionResult.confidence === 'low' && (
                                    "Low confidence (<10% margin). Very close match prediction. Either team has a realistic chance of winning."
                                )}
                            </p>
                        </div>

                        {/* Disclaimer */}
                        <div className="ml-disclaimer">
                            <p>
                                ⚠️ <strong>AI Prediction Disclaimer:</strong> This prediction is generated by a machine learning model
                                trained on historical match patterns. Actual match outcomes depend on many unpredictable factors including
                                player form, injuries, team tactics, and match-day conditions. Use for entertainment and analysis purposes only.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className="ml-info-section">
                <h2>🧠 How ML Prediction Works</h2>
                <div className="ml-info-grid">
                    <div className="ml-info-card">
                        <h4>📚 Training Data</h4>
                        <p>Model trained on 5,000+ synthetic matches based on historical cricket patterns and statistics</p>
                    </div>
                    <div className="ml-info-card">
                        <h4>🎯 Features</h4>
                        <p>Analyzes 24+ features including team ratings, form, venue, toss, weather, and pitch conditions</p>
                    </div>
                    <div className="ml-info-card">
                        <h4>🤖 Algorithm</h4>
                        <p>Uses ensemble learning with Random Forest or Gradient Boosting for optimal accuracy</p>
                    </div>
                    <div className="ml-info-card">
                        <h4>📊 Accuracy</h4>
                        <p>Model achieves 70-80% accuracy on test data with proper feature engineering</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MLMatchPredictor;