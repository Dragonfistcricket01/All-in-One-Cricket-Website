import React, { useState } from 'react';
import { predictPitchBehavior, getAllVenues } from '../utils/pitchPredictor';
import { weatherImpact } from '../data/pitchData';
import './PitchPredictor.css';

const PitchPredictor = () => {
    const [predictionInput, setPredictionInput] = useState({
        venue: '',
        format: 'odi',
        month: new Date().getMonth() + 1,
        weather: 'sunny',
        daysSinceLastMatch: 14,
        matchDay: 1,
        timeOfDay: 'afternoon'
    });

    const [predictionResult, setPredictionResult] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [errors, setErrors] = useState({});

    const venues = getAllVenues();
    const months = [
        { value: 1, name: 'January' },
        { value: 2, name: 'February' },
        { value: 3, name: 'March' },
        { value: 4, name: 'April' },
        { value: 5, name: 'May' },
        { value: 6, name: 'June' },
        { value: 7, name: 'July' },
        { value: 8, name: 'August' },
        { value: 9, name: 'September' },
        { value: 10, name: 'October' },
        { value: 11, name: 'November' },
        { value: 12, name: 'December' }
    ];

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
    };

    // Validate inputs
    const validateInputs = () => {
        const newErrors = {};

        if (!predictionInput.venue) {
            newErrors.venue = 'Please select a venue';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle prediction
    const handlePredict = () => {
        if (!validateInputs()) {
            return;
        }

        const result = predictPitchBehavior(predictionInput);
        setPredictionResult(result);
        setShowResult(true);
    };

    // Reset form
    const handleReset = () => {
        setPredictionInput({
            venue: '',
            format: 'odi',
            month: new Date().getMonth() + 1,
            weather: 'sunny',
            daysSinceLastMatch: 14,
            matchDay: 1,
            timeOfDay: 'afternoon'
        });
        setPredictionResult(null);
        setShowResult(false);
        setErrors({});
    };

    // Get rating color
    const getRatingColor = (rating) => {
        if (rating >= 8) return '#4ade80';
        if (rating >= 6) return '#60a5fa';
        if (rating >= 4) return '#fbbf24';
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
        <div className="pitch-predictor-container">
            {/* Header */}
            <div className="pitch-predictor-header">
                <h1>🏟️ Pitch Behavior Prediction</h1>
                <p>Advanced pitch analysis using venue history, weather, and seasonal patterns</p>
            </div>

            {/* Main Content */}
            <div className="pitch-predictor-content">
                {/* Input Section */}
                <div className="pitch-input-section">
                    <h2>Match Conditions</h2>

                    {/* Venue Selection */}
                    <div className="input-group">
                        <label>Cricket Venue *</label>
                        <select
                            value={predictionInput.venue}
                            onChange={(e) => handleInputChange('venue', e.target.value)}
                            className={errors.venue ? 'error' : ''}
                        >
                            <option value="">Select a venue</option>
                            {venues.filter(v => v.key !== 'neutral').map(venue => (
                                <option key={venue.key} value={venue.key}>
                                    {venue.name} - {venue.location}
                                </option>
                            ))}
                        </select>
                        {errors.venue && <span className="error-message">{errors.venue}</span>}
                    </div>

                    {/* Format & Month */}
                    <div className="input-row-two">
                        <div className="input-group">
                            <label>Match Format</label>
                            <div className="format-buttons-pitch">
                                <button
                                    className={`format-btn ${predictionInput.format === 'test' ? 'active' : ''}`}
                                    onClick={() => handleInputChange('format', 'test')}
                                >
                                    Test
                                </button>
                                <button
                                    className={`format-btn ${predictionInput.format === 'odi' ? 'active' : ''}`}
                                    onClick={() => handleInputChange('format', 'odi')}
                                >
                                    ODI
                                </button>
                                <button
                                    className={`format-btn ${predictionInput.format === 't20' ? 'active' : ''}`}
                                    onClick={() => handleInputChange('format', 't20')}
                                >
                                    T20
                                </button>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Month of Match</label>
                            <select
                                value={predictionInput.month}
                                onChange={(e) => handleInputChange('month', parseInt(e.target.value))}
                            >
                                {months.map(month => (
                                    <option key={month.value} value={month.value}>
                                        {month.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Weather Selection */}
                    <div className="input-group">
                        <label>Weather Conditions</label>
                        <div className="weather-grid-pitch">
                            {Object.entries(weatherImpact).map(([key, weather]) => (
                                <button
                                    key={key}
                                    className={`weather-btn-pitch ${predictionInput.weather === key ? 'active' : ''}`}
                                    onClick={() => handleInputChange('weather', key)}
                                >
                                    <span className="weather-icon-large">{weather.icon}</span>
                                    <span className="weather-name">{weather.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Test Match Specific */}
                    {predictionInput.format === 'test' && (
                        <div className="input-group">
                            <label>Match Day (Test Cricket)</label>
                            <div className="day-selector">
                                {[1, 2, 3, 4, 5].map(day => (
                                    <button
                                        key={day}
                                        className={`day-btn ${predictionInput.matchDay === day ? 'active' : ''}`}
                                        onClick={() => handleInputChange('matchDay', day)}
                                    >
                                        Day {day}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Time of Day (for limited overs) */}
                    {predictionInput.format !== 'test' && (
                        <div className="input-group">
                            <label>Time of Day</label>
                            <div className="time-buttons">
                                <button
                                    className={`time-btn ${predictionInput.timeOfDay === 'morning' ? 'active' : ''}`}
                                    onClick={() => handleInputChange('timeOfDay', 'morning')}
                                >
                                    🌅 Morning
                                </button>
                                <button
                                    className={`time-btn ${predictionInput.timeOfDay === 'afternoon' ? 'active' : ''}`}
                                    onClick={() => handleInputChange('timeOfDay', 'afternoon')}
                                >
                                    ☀️ Afternoon
                                </button>
                                <button
                                    className={`time-btn ${predictionInput.timeOfDay === 'evening' ? 'active' : ''}`}
                                    onClick={() => handleInputChange('timeOfDay', 'evening')}
                                >
                                    🌙 Evening
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Days Since Last Match */}
                    <div className="input-group">
                        <label>Days Since Last Match at Venue</label>
                        <div className="slider-container-fixed">
                            <input
                                type="range"
                                min="0"
                                max="90"
                                value={predictionInput.daysSinceLastMatch}
                                onChange={(e) => handleInputChange('daysSinceLastMatch', parseInt(e.target.value))}
                                className="pitch-slider"
                            />
                            <div className="slider-value-display">
                                <span className="slider-current-value">{predictionInput.daysSinceLastMatch} days</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pitch-action-buttons">
                        <button onClick={handlePredict} className="pitch-predict-button">
                            🎯 Analyze Pitch
                        </button>
                        <button onClick={handleReset} className="pitch-reset-button">
                            🔄 Reset
                        </button>
                    </div>
                </div>

                {/* Result Section */}
                {showResult && predictionResult && (
                    <div className="pitch-result-section">
                        <h2>Pitch Analysis Report</h2>

                        {/* Predicted Pitch Type */}
                        <div className="predicted-pitch-card">
                            <div className="pitch-type-header">
                                <span className="pitch-icon-large">{predictionResult.typeInfo.icon}</span>
                                <div className="pitch-type-info">
                                    <h3>{predictionResult.typeInfo.name}</h3>
                                    <p>{predictionResult.typeInfo.description}</p>
                                </div>
                            </div>

                            <div className="pitch-confidence-row">
                                <div className="confidence-item">
                                    <span className="confidence-label">Probability:</span>
                                    <span className="confidence-value">{predictionResult.probability}%</span>
                                </div>
                                <div className="confidence-item">
                                    <span className="confidence-label">Confidence:</span>
                                    <span
                                        className="confidence-badge-pitch"
                                        style={{ backgroundColor: getConfidenceBadgeColor(predictionResult.confidence) }}
                                    >
                                        {predictionResult.confidence}
                                    </span>
                                </div>
                            </div>

                            <div className="pitch-characteristics-tags">
                                {predictionResult.typeInfo.characteristics.map((char, index) => (
                                    <span key={index} className="char-tag">{char}</span>
                                ))}
                            </div>
                        </div>

                        {/* Top 3 Predictions */}
                        <div className="top-predictions">
                            <h3>Pitch Type Probabilities</h3>
                            <div className="predictions-grid">
                                {predictionResult.topThree.map((prediction, index) => (
                                    <div key={index} className="prediction-card">
                                        <div className="prediction-rank">#{index + 1}</div>
                                        <span className="prediction-icon">{prediction.info.icon}</span>
                                        <h4>{prediction.info.name}</h4>
                                        <div className="probability-bar">
                                            <div
                                                className="probability-fill"
                                                style={{
                                                    width: `${prediction.probability}%`,
                                                    backgroundColor: prediction.info.color
                                                }}
                                            />
                                        </div>
                                        <span className="probability-text">{prediction.probability}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pitch Characteristics */}
                        <div className="pitch-characteristics">
                            <h3>Detailed Pitch Characteristics</h3>
                            <div className="characteristics-grid">
                                {predictionResult.characteristics.map((char, index) => (
                                    <div key={index} className="characteristic-card">
                                        <div className="char-header">
                                            <h4>{char.category}</h4>
                                            <span className="char-rating">{char.rating}/10</span>
                                        </div>
                                        <div className="rating-bar">
                                            <div
                                                className="rating-fill"
                                                style={{
                                                    width: `${char.rating * 10}%`,
                                                    backgroundColor: getRatingColor(char.rating)
                                                }}
                                            />
                                        </div>
                                        <p className="char-description">{char.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Venue Information */}
                        <div className="venue-info-card">
                            <h3>📍 Venue Information</h3>
                            <div className="venue-details">
                                <div className="venue-detail-item">
                                    <span className="detail-label">Stadium:</span>
                                    <span className="detail-value">{predictionResult.venueInfo.name}</span>
                                </div>
                                <div className="venue-detail-item">
                                    <span className="detail-label">Location:</span>
                                    <span className="detail-value">{predictionResult.venueInfo.location}</span>
                                </div>
                                <div className="venue-detail-item">
                                    <span className="detail-label">Capacity:</span>
                                    <span className="detail-value">{predictionResult.venueInfo.capacity.toLocaleString()}</span>
                                </div>
                                <div className="venue-detail-item">
                                    <span className="detail-label">Grass Coverage:</span>
                                    <span className="detail-value">{predictionResult.venueInfo.grassCoverage}</span>
                                </div>
                                <div className="venue-detail-item">
                                    <span className="detail-label">Soil Type:</span>
                                    <span className="detail-value">{predictionResult.venueInfo.soilType}</span>
                                </div>
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div className="recommendations-section">
                            <h3>💡 Strategic Recommendations</h3>
                            <div className="recommendations-grid">
                                {predictionResult.recommendations.map((rec, index) => (
                                    <div key={index} className="recommendation-card">
                                        <span className="rec-icon">{rec.icon}</span>
                                        <h4>{rec.title}</h4>
                                        <p>{rec.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Conditions Summary */}
                        <div className="conditions-summary">
                            <h4>🌐 Analysis Conditions</h4>
                            <div className="conditions-grid">
                                <div className="condition-item">
                                    <span className="condition-label">Format:</span>
                                    <span className="condition-value">{predictionResult.conditions.format.toUpperCase()}</span>
                                </div>
                                <div className="condition-item">
                                    <span className="condition-label">Season:</span>
                                    <span className="condition-value">{predictionResult.conditions.season}</span>
                                </div>
                                <div className="condition-item">
                                    <span className="condition-label">Weather:</span>
                                    <span className="condition-value">{predictionResult.conditions.weather}</span>
                                </div>
                                {predictionResult.conditions.matchDay && (
                                    <div className="condition-item">
                                        <span className="condition-label">Match Day:</span>
                                        <span className="condition-value">Day {predictionResult.conditions.matchDay}</span>
                                    </div>
                                )}
                                <div className="condition-item">
                                    <span className="condition-label">Time:</span>
                                    <span className="condition-value">{predictionResult.conditions.timeOfDay}</span>
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="pitch-disclaimer">
                            <p>
                                ⚠️ <strong>Note:</strong> Pitch predictions are based on historical data and typical conditions.
                                Actual pitch behavior may vary due to groundsman preparation, recent weather patterns, and other factors.
                                This analysis should be used as a guide alongside expert local knowledge.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className="pitch-info-section">
                <h2>🎓 Understanding Pitch Behavior</h2>
                <div className="info-cards-grid">
                    <div className="info-card">
                        <h4>🏟️ Venue History</h4>
                        <p>Historical pitch characteristics and typical behavior at the venue over time.</p>
                    </div>
                    <div className="info-card">
                        <h4>🌡️ Seasonal Impact</h4>
                        <p>Weather and seasonal patterns significantly affect pitch preparation and behavior.</p>
                    </div>
                    <div className="info-card">
                        <h4>📊 Statistical Analysis</h4>
                        <p>Data-driven approach using decades of match statistics and venue records.</p>
                    </div>
                    <div className="info-card">
                        <h4>⏱️ Deterioration</h4>
                        <p>Pitches wear over time, especially in Test cricket, favoring spinners later.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PitchPredictor;