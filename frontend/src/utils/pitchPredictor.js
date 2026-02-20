import { venuesPitchData, pitchTypes, weatherImpact, monthToSeason, monthToSeasonSouthern } from '../data/pitchData';

/**
 * Predict pitch behavior based on multiple factors
 */
export const predictPitchBehavior = (predictionData) => {
    const {
        venue,
        format,
        month,
        weather,
        daysSinceLastMatch,
        matchDay, // For Test cricket (Day 1-5)
        timeOfDay // morning, afternoon, evening
    } = predictionData;

    // Get venue data
    const venueData = venuesPitchData[venue] || venuesPitchData.neutral;
    const weatherData = weatherImpact[weather] || weatherImpact.sunny;

    // Determine season based on venue location
    const isSouthernHemisphere = ['Australia', 'South Africa', 'New Zealand'].includes(venueData.country);
    const seasonMap = isSouthernHemisphere ? monthToSeasonSouthern : monthToSeason;
    const currentSeason = seasonMap[month] || 'summer';

    // Get seasonal characteristics
    const seasonalChar = venueData.seasonalVariation[currentSeason] || venueData.seasonalVariation.summer;

    // Initialize scores for each pitch type
    let pitchScores = {
        batting_paradise: 0,
        batting_friendly: 0,
        balanced: 0,
        bowling_friendly: 0,
        green_seamer: 0,
        spin_friendly: 0,
        dusty_turner: 0,
        pace_and_bounce: 0
    };

    // 1. BASE VENUE CHARACTERISTICS (40% weight)
    const basePitchType = venueData.pitchCharacteristics.primaryType;
    pitchScores[basePitchType] += 40;

    // Add secondary characteristic
    const secondaryType = venueData.pitchCharacteristics.secondaryType;
    if (pitchScores.hasOwnProperty(secondaryType)) {
        pitchScores[secondaryType] += 20;
    }

    // 2. SEASONAL VARIATION (25% weight)
    const seasonalType = seasonalChar.type;
    if (pitchScores.hasOwnProperty(seasonalType)) {
        pitchScores[seasonalType] += 25;
    }

    // Adjust based on seasonal spin/pace assistance
    if (seasonalChar.spinAssist >= 8) {
        pitchScores.spin_friendly += 10;
        pitchScores.dusty_turner += 5;
    } else if (seasonalChar.paceAndBounce >= 8) {
        pitchScores.pace_and_bounce += 10;
        pitchScores.green_seamer += 5;
    }

    // 3. WEATHER CONDITIONS (15% weight)
    if (weather === 'sunny' || weather === 'humid') {
        // Favors batting and spin
        pitchScores.batting_friendly += 8;
        pitchScores.spin_friendly += 7;
    } else if (weather === 'overcast' || weather === 'rainy' || weather === 'cloudy') {
        // Favors seam bowling
        pitchScores.green_seamer += 10;
        pitchScores.bowling_friendly += 5;
    }

    // 4. FORMAT SPECIFIC (10% weight)
    if (format === 'test') {
        // Test matches see more deterioration
        if (matchDay >= 4) {
            pitchScores.spin_friendly += 10;
            pitchScores.dusty_turner += 5;
            pitchScores.batting_paradise -= 10;
        } else if (matchDay === 1) {
            // Day 1 usually better for batting
            pitchScores.batting_friendly += 5;
        }
    } else if (format === 't20') {
        // T20 pitches tend to be flatter
        pitchScores.batting_paradise += 5;
        pitchScores.batting_friendly += 5;
    }

    // 5. REST PERIOD (5% weight)
    if (daysSinceLastMatch) {
        if (daysSinceLastMatch < 7) {
            // Fresh pitch not fully recovered
            pitchScores.bowling_friendly += 3;
        } else if (daysSinceLastMatch > 30) {
            // Well rested pitch
            pitchScores.batting_friendly += 5;
        }
    }

    // 6. TIME OF DAY (5% for limited overs)
    if (format !== 'test' && timeOfDay === 'evening') {
        // Dew factor
        pitchScores.batting_friendly += 5;
    }

    // Remove negative scores
    Object.keys(pitchScores).forEach(key => {
        if (pitchScores[key] < 0) pitchScores[key] = 0;
    });

    // Find top 3 pitch types
    const sortedTypes = Object.entries(pitchScores)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3);

    const topPitchType = sortedTypes[0][0];
    const topScore = sortedTypes[0][1];

    // Normalize to percentage
    const total = Object.values(pitchScores).reduce((sum, score) => sum + score, 0);
    const predictions = {};
    Object.entries(pitchScores).forEach(([type, score]) => {
        predictions[type] = Math.round((score / total) * 100);
    });

    // Calculate confidence
    const confidence = calculatePitchConfidence(topScore, sortedTypes);

    // Generate characteristics
    const characteristics = generatePitchCharacteristics(
        topPitchType,
        venueData,
        seasonalChar,
        weatherData,
        format,
        matchDay
    );

    // Generate recommendations
    const recommendations = generateRecommendations(
        topPitchType,
        venueData,
        format,
        weatherData
    );

    return {
        predictedType: topPitchType,
        typeInfo: pitchTypes[topPitchType],
        probability: predictions[topPitchType],
        confidence: confidence,
        allPredictions: predictions,
        topThree: sortedTypes.map(([type, score]) => ({
            type,
            info: pitchTypes[type],
            probability: predictions[type]
        })),
        characteristics: characteristics,
        recommendations: recommendations,
        venueInfo: {
            name: venueData.name,
            location: venueData.location,
            grassCoverage: venueData.grassCoverage,
            soilType: venueData.soilType,
            capacity: venueData.capacity
        },
        conditions: {
            format,
            season: currentSeason,
            weather: weatherData.name,
            matchDay: format === 'test' ? matchDay : null,
            timeOfDay
        }
    };
};

/**
 * Calculate confidence level for prediction
 */
const calculatePitchConfidence = (topScore, sortedTypes) => {
    const secondScore = sortedTypes.length > 1 ? sortedTypes[1][1] : 0;
    const difference = topScore - secondScore;

    if (difference >= 30) return "Very High";
    if (difference >= 20) return "High";
    if (difference >= 10) return "Medium";
    return "Low";
};

/**
 * Generate detailed pitch characteristics
 */
const generatePitchCharacteristics = (
    pitchType,
    venueData,
    seasonalChar,
    weatherData,
    format,
    matchDay
) => {
    const chars = venueData.pitchCharacteristics;
    const characteristics = [];

    // Pace and Bounce
    const paceRating = seasonalChar.paceAndBounce || chars.paceAndBounce;
    characteristics.push({
        category: "Pace & Bounce",
        rating: paceRating,
        description: getPaceDescription(paceRating)
    });

    // Spin Assistance
    const spinRating = seasonalChar.spinAssist || chars.spinAssist;
    characteristics.push({
        category: "Spin Assistance",
        rating: spinRating,
        description: getSpinDescription(spinRating)
    });

    // Batting Ease
    let battingRating = chars.battingEase;
    if (format === 'test' && matchDay >= 4) {
        battingRating = Math.max(3, battingRating - 2);
    }
    characteristics.push({
        category: "Batting Ease",
        rating: battingRating,
        description: getBattingDescription(battingRating)
    });

    // Deterioration
    if (format === 'test') {
        characteristics.push({
            category: "Deterioration",
            rating: chars.deterioration,
            description: getDeteriorationDescription(chars.deterioration)
        });
    }

    // Expected Score
    const expectedScore = calculateExpectedScore(
        chars.averageFirstInningsScore[format],
        weatherData,
        pitchType
    );

    characteristics.push({
        category: "Expected Score",
        rating: Math.min(10, Math.round(expectedScore / (format === 'test' ? 40 : format === 'odi' ? 30 : 20))),
        description: `Around ${expectedScore} in first innings`
    });

    return characteristics;
};

/**
 * Get descriptions for ratings
 */
const getPaceDescription = (rating) => {
    if (rating >= 8) return "Excellent pace and bounce - fast bowlers' paradise";
    if (rating >= 6) return "Good pace with consistent bounce";
    if (rating >= 4) return "Moderate pace, true bounce";
    return "Slow pitch with low bounce";
};

const getSpinDescription = (rating) => {
    if (rating >= 8) return "Significant turn and grip for spinners";
    if (rating >= 6) return "Reasonable assistance for spin bowlers";
    if (rating >= 4) return "Some turn available, especially later";
    return "Minimal assistance for spinners";
};

const getBattingDescription = (rating) => {
    if (rating >= 8) return "Very easy for batting - high scores expected";
    if (rating >= 6) return "Good for batting with some challenges";
    if (rating >= 4) return "Challenging for batsmen, skill required";
    return "Very difficult batting conditions";
};

const getDeteriorationDescription = (rating) => {
    if (rating >= 8) return "Significant wear expected by day 4-5";
    if (rating >= 6) return "Moderate deterioration over 5 days";
    if (rating >= 4) return "Slow to break up, stays true longer";
    return "Minimal deterioration expected";
};

/**
 * Calculate expected score based on conditions
 */
const calculateExpectedScore = (baseScore, weatherData, pitchType) => {
    let score = baseScore;

    // Weather adjustment
    score *= weatherData.battingImpact;

    // Pitch type adjustment
    if (pitchType === 'batting_paradise') score *= 1.1;
    if (pitchType === 'bowling_friendly') score *= 0.85;
    if (pitchType === 'green_seamer') score *= 0.80;

    return Math.round(score);
};

/**
 * Generate strategic recommendations
 */
const generateRecommendations = (pitchType, venueData, format, weatherData) => {
    const recommendations = [];

    // Toss recommendation
    if (pitchType === 'batting_paradise' || pitchType === 'batting_friendly') {
        recommendations.push({
            icon: "🎯",
            title: "Toss Strategy",
            text: "Bat first to set a big total. Pitch likely to deteriorate."
        });
    } else if (pitchType === 'green_seamer' || pitchType === 'bowling_friendly') {
        recommendations.push({
            icon: "🎯",
            title: "Toss Strategy",
            text: "Bowl first to exploit early conditions. Batting might get easier."
        });
    } else {
        recommendations.push({
            icon: "🎯",
            title: "Toss Strategy",
            text: `${venueData.historicalBehavior.tossAdvantage === 'bat_first' ? 'Bat first' : 'Bowl first'} based on venue history.`
        });
    }

    // Team composition
    if (pitchType.includes('spin')) {
        recommendations.push({
            icon: "🏏",
            title: "Team Balance",
            text: "Include 2-3 quality spinners. They will be crucial."
        });
    } else if (pitchType.includes('pace') || pitchType.includes('green')) {
        recommendations.push({
            icon: "🏏",
            title: "Team Balance",
            text: "Play 3-4 pace bowlers. Fast bowling will be key."
        });
    } else {
        recommendations.push({
            icon: "🏏",
            title: "Team Balance",
            text: "Balanced attack with 2 pacers and 2 spinners."
        });
    }

    // Batting strategy
    if (pitchType === 'batting_paradise') {
        recommendations.push({
            icon: "⚡",
            title: "Batting Approach",
            text: "Play positively. Conditions favor aggressive batting."
        });
    } else if (pitchType === 'bowling_friendly') {
        recommendations.push({
            icon: "⚡",
            title: "Batting Approach",
            text: "Play cautiously early. Respect bowling conditions."
        });
    }

    // Format-specific
    if (format === 't20') {
        recommendations.push({
            icon: "💡",
            title: "T20 Strategy",
            text: "Powerplay crucial. Utilize field restrictions well."
        });
    }

    // Weather consideration
    if (weatherData.name === 'Humid') {
        recommendations.push({
            icon: "💧",
            title: "Dew Factor",
            text: "Expect dew in second innings. Bowling will be challenging."
        });
    }

    return recommendations;
};

/**
 * Get all venues for dropdown
 */
export const getAllVenues = () => {
    return Object.entries(venuesPitchData).map(([key, venue]) => ({
        key,
        name: venue.name,
        location: venue.location,
        country: venue.country
    }));
};