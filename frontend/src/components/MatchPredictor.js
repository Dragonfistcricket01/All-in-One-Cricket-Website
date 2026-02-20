import React, { useState } from 'react';
import { predictMatch } from '../utils/matchPredictor';
import { cricketTeams, venues, weatherConditions } from '../data/teamsData';
import './MatchPredictor.css';


// Add this function at the top of your component
//const getCountryFlag = (country) => {
//    const flagUrls = {
//        'india': 'https://i.ibb.co.com/QZzXjL4/ind.png',
//        'australia': 'https://i.ibb.co.com/0RH6trW0/aus.png',
//        'england': 'https://i.ibb.co.com/FkL04RvP/eng.png',
//        'pakistan': 'https://i.ibb.co.com/ZpXwTVdD/pak.png',
//        'bangladesh': 'https://i.ibb.co.com/Rp5y8VPW/ban.png',
//        'sri lanka': 'https://i.ibb.co.com/WWG1YGQc/sl.png',
//        'south africa': 'https://i.ibb.co.com/G1PnQY8/sa.png',
//        'new zealand': 'https://i.ibb.co.com/dwQFFv3y/nz.png',
//        'west indies': 'https://i.ibb.co.com/W4hBT0kB/wi.png',
//        'afghanistan': 'https://i.ibb.co.com/M5ZX9J0C/afg.png',
//        'zimbabwe': 'https://i.ibb.co.com/dJ2jK6kn/zim.png'
//    };
//
//    return flagUrls[country.toLowerCase()] || 'https://i.ibb.co/placeholder/flag.png';
//};

const MatchPredictor = () => {
    const [predictionInput, setPredictionInput] = useState({
        team1: '',
        team2: '',
        format: 'odi',
        venue: 'neutral',
        tossWinner: '',
        tossDecision: '',
        weather: 'sunny',
        isNeutralVenue: true
    });

    const [predictionResult, setPredictionResult] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleInputChange = (field, value) => {
        setPredictionInput(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error for this field
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }));
        }

        // Auto-detect neutral venue
        if (field === 'venue') {
            const selectedVenue = venues[value];
            const isNeutral = !selectedVenue ||
                selectedVenue.country === 'neutral' ||
                (predictionInput.team1 && predictionInput.team2 &&
                    selectedVenue.country !== predictionInput.team1 &&
                    selectedVenue.country !== predictionInput.team2);

            setPredictionInput(prev => ({
                ...prev,
                isNeutralVenue: isNeutral
            }));
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

        if (predictionInput.team1 && predictionInput.team2 &&
            predictionInput.team1 === predictionInput.team2) {
            newErrors.team2 = 'Teams must be different';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle prediction
    const handlePredict = () => {
        if (!validateInputs()) {
            return;
        }

        const result = predictMatch(predictionInput);
        setPredictionResult(result);
        setShowResult(true);
    };

    // Reset form
    const handleReset = () => {
        setPredictionInput({
            team1: '',
            team2: '',
            format: 'odi',
            venue: 'neutral',
            tossWinner: '',
            tossDecision: '',
            weather: 'sunny',
            isNeutralVenue: true
        });
        setPredictionResult(null);
        setShowResult(false);
        setErrors({});
    };

    // Get probability color
    const getProbabilityColor = (probability) => {
        if (probability >= 65) return '#4ade80';
        if (probability >= 55) return '#fbbf24';
        if (probability >= 45) return '#fb923c';
        return '#ef4444';
    };

    // Get confidence badge color
    const getConfidenceBadgeColor = (confidence) => {
        if (confidence === 'Very High') return '#4ade80';
        if (confidence === 'High') return '#60a5fa';
        if (confidence === 'Medium') return '#fbbf24';
        return '#f87171';
    };

    return (
        <div className="match-predictor-container">
            {/* Header */}
            <div className="predictor-header">
                <h1>🎯 Match Prediction Calculator</h1>
                <p>Predict match outcomes using advanced statistical analysis</p>
            </div>

            {/* Main Content */}
            <div className="predictor-content">
                {/* Input Section */}
                <div className="prediction-input-section">
                    <h2>Match Details</h2>

                    {/* Team Selection */}
                    <div className="input-row">
                        <div className="input-group">
                            <label>Team 1 *</label>
                            <select
                                value={predictionInput.team1}
                                onChange={(e) => handleInputChange('team1', e.target.value)}
                                className={errors.team1 ? 'error' : ''}
                            >
                                <option value="">Select Team 1</option>
                                {Object.entries(cricketTeams).map(([key, team]) => (
                                    <option key={key} value={key}>
                                        {team.flag} {team.name}
                                    </option>
                                ))}
                            </select>
                            {errors.team1 && <span className="error-message">{errors.team1}</span>}
                        </div>

                        <div className="vs-separator">VS</div>

                        <div className="input-group">
                            <label>Team 2 *</label>
                            <select
                                value={predictionInput.team2}
                                onChange={(e) => handleInputChange('team2', e.target.value)}
                                className={errors.team2 ? 'error' : ''}
                            >
                                <option value="">Select Team 2</option>
                                {Object.entries(cricketTeams).map(([key, team]) => (
                                    <option key={key} value={key}>
                                        {team.flag} {team.name}
                                    </option>
                                ))}
                            </select>
                            {errors.team2 && <span className="error-message">{errors.team2}</span>}
                        </div>
                    </div>

                    {/* Format Selection */}
                    <div className="input-group">
                        <label>Match Format</label>
                        <div className="format-buttons">
                            <button
                                className={`format-button ${predictionInput.format === 'test' ? 'active' : ''}`}
                                onClick={() => handleInputChange('format', 'test')}
                            >
                                Test
                            </button>
                            <button
                                className={`format-button ${predictionInput.format === 'odi' ? 'active' : ''}`}
                                onClick={() => handleInputChange('format', 'odi')}
                            >
                                ODI
                            </button>
                            <button
                                className={`format-button ${predictionInput.format === 't20' ? 'active' : ''}`}
                                onClick={() => handleInputChange('format', 't20')}
                            >
                                T20
                            </button>
                        </div>
                    </div>

                    {/* Venue Selection */}
                    <div className="input-group">
                        <label>Venue</label>
                        <select
                            value={predictionInput.venue}
                            onChange={(e) => handleInputChange('venue', e.target.value)}
                        >
                            <option value="neutral">Neutral Venue</option>
                            {Object.entries(venues).map(([key, venue]) => (
                                key !== 'neutral' && (
                                    <option key={key} value={key}>
                                        {venue.name} ({venue.location})
                                    </option>
                                )
                            ))}
                        </select>
                        {predictionInput.isNeutralVenue && (
                            <span className="info-text">🌍 Neutral venue - no home advantage</span>
                        )}
                    </div>

                    {/* Toss Details */}
                    <div className="input-row">
                        <div className="input-group">
                            <label>Toss Winner (Optional)</label>
                            <select
                                value={predictionInput.tossWinner}
                                onChange={(e) => handleInputChange('tossWinner', e.target.value)}
                                disabled={!predictionInput.team1 || !predictionInput.team2}
                            >
                                <option value="">Not decided yet</option>
                                {predictionInput.team1 && (
                                    <option value={predictionInput.team1}>
                                        {cricketTeams[predictionInput.team1]?.name}
                                    </option>
                                )}
                                {predictionInput.team2 && (
                                    <option value={predictionInput.team2}>
                                        {cricketTeams[predictionInput.team2]?.name}
                                    </option>
                                )}
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Toss Decision</label>
                            <select
                                value={predictionInput.tossDecision}
                                onChange={(e) => handleInputChange('tossDecision', e.target.value)}
                                disabled={!predictionInput.tossWinner}
                            >
                                <option value="">Select decision</option>
                                <option value="bat_first">Bat First</option>
                                <option value="chase">Bowl First (Chase)</option>
                            </select>
                        </div>
                    </div>

                    {/* Weather Conditions */}
                    <div className="input-group">
                        <label>Weather Conditions</label>
                        <div className="weather-buttons">
                            {Object.entries(weatherConditions).map(([key, weather]) => (
                                <button
                                    key={key}
                                    className={`weather-button ${predictionInput.weather === key ? 'active' : ''}`}
                                    onClick={() => handleInputChange('weather', key)}
                                >
                                    {weather.icon} {weather.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button onClick={handlePredict} className="predict-button">
                            🎯 Predict Match Outcome
                        </button>
                        <button onClick={handleReset} className="reset-button">
                            🔄 Reset
                        </button>
                    </div>
                </div>

                {/* Result Section */}
                {showResult && predictionResult && (
                    <div className="prediction-result-section">
                        <h2>Prediction Results</h2>

                        {/* Win Probability Display */}
                        <div className="probability-display-match">
                            <div className="team-probability-match">
                                <div className="team-info">
                                    <span className="team-flag">{predictionResult.team1.flag}</span>
                                    <h3>{predictionResult.team1.name}</h3>
                                </div>
                                <div
                                    className="probability-circle-match"
                                    style={{
                                        background: `conic-gradient(${getProbabilityColor(predictionResult.team1.winProbability)} ${predictionResult.team1.winProbability}%, #e5e7eb 0)`
                                    }}
                                >
                                    <div className="probability-value-match">
                                        {predictionResult.team1.winProbability}%
                                    </div>
                                </div>
                            </div>

                            <div className="vs-divider-match">
                                <span>VS</span>
                            </div>

                            <div className="team-probability-match">
                                <div className="team-info">
                                    <span className="team-flag">{predictionResult.team2.flag}</span>
                                    <h3>{predictionResult.team2.name}</h3>
                                </div>
                                <div
                                    className="probability-circle-match"
                                    style={{
                                        background: `conic-gradient(${getProbabilityColor(predictionResult.team2.winProbability)} ${predictionResult.team2.winProbability}%, #e5e7eb 0)`
                                    }}
                                >
                                    <div className="probability-value-match">
                                        {predictionResult.team2.winProbability}%
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Prediction Summary */}
                        <div className="prediction-summary">
                            <div className="summary-card winner-card">
                                <h4>🏆 Predicted Winner</h4>
                                <p className="winner-name">{predictionResult.prediction}</p>
                            </div>

                            <div className="summary-card confidence-card">
                                <h4>📊 Confidence Level</h4>
                                <span
                                    className="confidence-badge"
                                    style={{ backgroundColor: getConfidenceBadgeColor(predictionResult.confidence) }}
                                >
                                    {predictionResult.confidence}
                                </span>
                            </div>
                        </div>

                        {/* Match Metadata */}
                        <div className="match-metadata">
                            <div className="metadata-item">
                                <span className="metadata-label">Format:</span>
                                <span className="metadata-value">{predictionResult.metadata.format.toUpperCase()}</span>
                            </div>
                            <div className="metadata-item">
                                <span className="metadata-label">Venue:</span>
                                <span className="metadata-value">{predictionResult.metadata.venue}</span>
                            </div>
                            <div className="metadata-item">
                                <span className="metadata-label">Weather:</span>
                                <span className="metadata-value">{predictionResult.metadata.weather}</span>
                            </div>
                            {predictionResult.metadata.tossWinner && (
                                <>
                                    <div className="metadata-item">
                                        <span className="metadata-label">Toss Winner:</span>
                                        <span className="metadata-value">{predictionResult.metadata.tossWinner}</span>
                                    </div>
                                    <div className="metadata-item">
                                        <span className="metadata-label">Decision:</span>
                                        <span className="metadata-value">
                                            {predictionResult.metadata.tossDecision === 'bat_first' ? 'Bat First' : 'Bowl First'}
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Insights */}
                        <div className="prediction-insights">
                            <h3>🔍 Key Insights</h3>
                            <ul className="insights-list">
                                {predictionResult.insights.map((insight, index) => (
                                    <li key={index} className="insight-item">{insight}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Disclaimer */}
                        <div className="prediction-disclaimer">
                            <p>
                                ⚠️ <strong>Disclaimer:</strong> This prediction is based on statistical analysis and historical data.
                                Actual match results may vary due to player form, injuries, pitch conditions, and other unpredictable factors.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* How It Works Section */}
            <div className="how-it-works">
                <h2>📖 How Prediction Works</h2>
                <div className="factors-grid">
                    <div className="factor-card">
                        <div className="factor-icon">📊</div>
                        <h4>Win Percentage</h4>
                        <p>30% weight</p>
                        <span>Overall historical win rate</span>
                    </div>

                    <div className="factor-card">
                        <div className="factor-icon">🔥</div>
                        <h4>Recent Form</h4>
                        <p>20% weight</p>
                        <span>Last 5 match results</span>
                    </div>

                    <div className="factor-card">
                        <div className="factor-icon">🏠</div>
                        <h4>Home Advantage</h4>
                        <p>15% weight</p>
                        <span>Performance at venue</span>
                    </div>

                    <div className="factor-card">
                        <div className="factor-icon">🎯</div>
                        <h4>Toss Impact</h4>
                        <p>10% weight</p>
                        <span>Decision & chase success</span>
                    </div>

                    <div className="factor-card">
                        <div className="factor-icon">🌤️</div>
                        <h4>Weather</h4>
                        <p>10% weight</p>
                        <span>Batting vs bowling conditions</span>
                    </div>

                    <div className="factor-card">
                        <div className="factor-icon">🏟️</div>
                        <h4>Venue History</h4>
                        <p>10% weight</p>
                        <span>Team performance at ground</span>
                    </div>

                    <div className="factor-card">
                        <div className="factor-icon">🌟</div>
                        <h4>Team Strength</h4>
                        <p>5% weight</p>
                        <span>Batting & bowling average</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchPredictor;