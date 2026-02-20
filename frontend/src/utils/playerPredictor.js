import { cricketPlayers } from '../data/playersPerformanceData';

/**
 * Predict player performance based on multiple factors
 */
export const predictPlayerPerformance = (predictionData) => {
    const {
        playerId,
        format,
        venue,
        opposition,
        weather,
        pitchType,
        battingPosition, // For batsmen (1-11)
        bowlingPhase // For bowlers (powerplay, middle, death)
    } = predictionData;

    const player = cricketPlayers[playerId];
    if (!player || player.id === 'placeholder') {
        return null;
    }

    const isBatsman = player.role === 'batsman' || player.role === 'allrounder' || player.role === 'wicketkeeper';
    const isBowler = player.role === 'bowler' || player.role === 'allrounder';

    let prediction = {};

    if (isBatsman) {
        prediction.batting = predictBattingPerformance(player, predictionData);
    }

    if (isBowler) {
        prediction.bowling = predictBowlingPerformance(player, predictionData);
    }

    // Generate overall insights
    prediction.insights = generatePlayerInsights(player, predictionData, prediction);

    // Calculate confidence
    prediction.confidence = calculatePredictionConfidence(player, predictionData);

    prediction.playerInfo = {
        name: player.name,
        country: player.country,
        role: player.role,
        battingStyle: player.battingStyle,
        bowlingStyle: player.bowlingStyle
    };

    return prediction;
};

/**
 * Predict batting performance
 */
const predictBattingPerformance = (player, predictionData) => {
    const { format, venue, opposition, weather, pitchType, battingPosition } = predictionData;

    const careerStats = player.careerStats[format];
    let baseAverage = careerStats.average;
    let baseStrikeRate = careerStats.strikeRate;

    // 1. RECENT FORM ADJUSTMENT (25% weight)
    const formMultiplier = calculateFormMultiplier(player.recentForm[format]);
    baseAverage *= formMultiplier;
    baseStrikeRate *= formMultiplier;

    // 2. VENUE PERFORMANCE (20% weight)
    if (venue && player.venuePerformance[venue]) {
        const venuePerf = player.venuePerformance[venue];
        baseAverage = (baseAverage * 0.8) + (venuePerf.average * 0.2);
        baseStrikeRate = (baseStrikeRate * 0.8) + (venuePerf.strikeRate * 0.2);
    }

    // 3. OPPOSITION STRENGTH (20% weight)
    if (opposition && player.oppositionPerformance[opposition]) {
        const oppPerf = player.oppositionPerformance[opposition];
        baseAverage = (baseAverage * 0.8) + (oppPerf.average * 0.2);
        baseStrikeRate = (baseStrikeRate * 0.8) + (oppPerf.strikeRate * 0.2);
    }

    // 4. WEATHER CONDITIONS (15% weight)
    if (weather && player.conditionsPerformance[weather]) {
        const weatherPerf = player.conditionsPerformance[weather];
        baseAverage = (baseAverage * 0.85) + (weatherPerf.average * 0.15);
        baseStrikeRate = (baseStrikeRate * 0.85) + (weatherPerf.strikeRate * 0.15);
    }

    // 5. PITCH TYPE ADJUSTMENT (10% weight)
    const pitchMultiplier = getPitchMultiplierForBatting(pitchType);
    baseAverage *= pitchMultiplier.average;
    baseStrikeRate *= pitchMultiplier.strikeRate;

    // 6. BATTING POSITION ADJUSTMENT (10% weight)
    const positionMultiplier = getBattingPositionMultiplier(battingPosition, format);
    baseAverage *= positionMultiplier.average;
    baseStrikeRate *= positionMultiplier.strikeRate;

    // Calculate predicted runs
    const predictedRuns = calculatePredictedRuns(baseAverage, format);

    // Calculate probability ranges
    const runsRange = {
        low: Math.max(0, Math.round(predictedRuns * 0.5)),
        medium: Math.round(predictedRuns),
        high: Math.round(predictedRuns * 1.5)
    };

    // Probability of scoring milestones
    const milestones = calculateMilestoneProbabilities(
        baseAverage,
        baseStrikeRate,
        format,
        careerStats
    );

    return {
        predictedRuns: Math.round(predictedRuns),
        runsRange,
        predictedAverage: Math.round(baseAverage * 10) / 10,
        predictedStrikeRate: Math.round(baseStrikeRate * 10) / 10,
        milestones,
        formFactor: formMultiplier,
        careerAverage: careerStats.average,
        careerStrikeRate: careerStats.strikeRate
    };
};

/**
 * Predict bowling performance
 */
const predictBowlingPerformance = (player, predictionData) => {
    const { format, venue, opposition, weather, pitchType, bowlingPhase } = predictionData;

    const careerStats = player.careerStats[format];
    let baseAverage = careerStats.average;
    let baseEconomy = careerStats.economy;
    let baseStrikeRate = careerStats.strikeRate;

    // 1. RECENT FORM (25% weight)
    const formMultiplier = calculateBowlingFormMultiplier(player.recentForm[format]);
    baseAverage *= formMultiplier.average;
    baseEconomy *= formMultiplier.economy;

    // 2. VENUE PERFORMANCE (20% weight)
    if (venue && player.venuePerformance[venue]) {
        const venuePerf = player.venuePerformance[venue];
        baseAverage = (baseAverage * 0.8) + (venuePerf.average * 0.2);
        baseEconomy = (baseEconomy * 0.8) + (venuePerf.economy * 0.2);
    }

    // 3. OPPOSITION STRENGTH (20% weight)
    if (opposition && player.oppositionPerformance[opposition]) {
        const oppPerf = player.oppositionPerformance[opposition];
        baseAverage = (baseAverage * 0.8) + (oppPerf.average * 0.2);
        baseEconomy = (baseEconomy * 0.8) + (oppPerf.economy * 0.2);
    }

    // 4. WEATHER CONDITIONS (15% weight)
    if (weather && player.conditionsPerformance[weather]) {
        const weatherPerf = player.conditionsPerformance[weather];
        baseAverage = (baseAverage * 0.85) + (weatherPerf.average * 0.15);
        baseEconomy = (baseEconomy * 0.85) + (weatherPerf.economy * 0.15);
    }

    // 5. PITCH TYPE (10% weight)
    const pitchMultiplier = getPitchMultiplierForBowling(pitchType, player.bowlingStyle);
    baseAverage *= pitchMultiplier.average;
    baseEconomy *= pitchMultiplier.economy;

    // 6. BOWLING PHASE (10% weight - for limited overs)
    if (format !== 'test' && bowlingPhase) {
        const phaseMultiplier = getBowlingPhaseMultiplier(bowlingPhase);
        baseEconomy *= phaseMultiplier;
    }

    // Calculate predicted wickets
    const predictedWickets = calculatePredictedWickets(baseAverage, baseStrikeRate, format);

    // Wickets probability
    const wicketsRange = {
        low: Math.max(0, Math.round(predictedWickets * 0.5)),
        medium: Math.round(predictedWickets),
        high: Math.min(10, Math.round(predictedWickets * 1.8))
    };

    // Milestone probabilities
    const milestones = calculateBowlingMilestones(baseAverage, format, careerStats);

    return {
        predictedWickets: Math.round(predictedWickets),
        wicketsRange,
        predictedAverage: Math.round(baseAverage * 10) / 10,
        predictedEconomy: Math.round(baseEconomy * 100) / 100,
        milestones,
        formFactor: formMultiplier,
        careerAverage: careerStats.average,
        careerEconomy: careerStats.economy
    };
};

/**
 * Calculate form multiplier from recent performances
 */
const calculateFormMultiplier = (recentScores) => {
    if (!recentScores || recentScores.length === 0) return 1.0;

    const weights = [0.3, 0.25, 0.2, 0.15, 0.1]; // Recent matches weighted more
    let weightedSum = 0;
    let totalWeight = 0;

    recentScores.forEach((score, index) => {
        weightedSum += score * weights[index];
        totalWeight += weights[index];
    });

    const averageRecent = weightedSum / totalWeight;

    // Convert to multiplier (0.7 to 1.3 range)
    if (averageRecent >= 70) return 1.25;
    if (averageRecent >= 50) return 1.15;
    if (averageRecent >= 30) return 1.05;
    if (averageRecent >= 20) return 0.95;
    if (averageRecent >= 10) return 0.85;
    return 0.75;
};

/**
 * Calculate bowling form multiplier
 */
const calculateBowlingFormMultiplier = (recentWickets) => {
    if (!recentWickets || recentWickets.length === 0) {
        return { average: 1.0, economy: 1.0 };
    }

    const avgWickets = recentWickets.reduce((a, b) => a + b, 0) / recentWickets.length;

    let averageMultiplier = 1.0;
    let economyMultiplier = 1.0;

    if (avgWickets >= 4) {
        averageMultiplier = 0.85;
        economyMultiplier = 0.90;
    } else if (avgWickets >= 3) {
        averageMultiplier = 0.92;
        economyMultiplier = 0.95;
    } else if (avgWickets >= 2) {
        averageMultiplier = 1.0;
        economyMultiplier = 1.0;
    } else if (avgWickets >= 1) {
        averageMultiplier = 1.08;
        economyMultiplier = 1.05;
    } else {
        averageMultiplier = 1.15;
        economyMultiplier = 1.10;
    }

    return { average: averageMultiplier, economy: economyMultiplier };
};

/**
 * Get pitch multipliers for batting
 */
const getPitchMultiplierForBatting = (pitchType) => {
    const multipliers = {
        batting_paradise: { average: 1.25, strikeRate: 1.15 },
        batting_friendly: { average: 1.15, strikeRate: 1.10 },
        balanced: { average: 1.0, strikeRate: 1.0 },
        bowling_friendly: { average: 0.85, strikeRate: 0.90 },
        green_seamer: { average: 0.80, strikeRate: 0.85 },
        spin_friendly: { average: 0.88, strikeRate: 0.92 },
        dusty_turner: { average: 0.82, strikeRate: 0.88 },
        pace_and_bounce: { average: 0.90, strikeRate: 0.95 }
    };

    return multipliers[pitchType] || { average: 1.0, strikeRate: 1.0 };
};

/**
 * Get pitch multipliers for bowling
 */
const getPitchMultiplierForBowling = (pitchType, bowlingStyle) => {
    const isPace = bowlingStyle.includes('fast') || bowlingStyle.includes('medium');
    const isSpin = bowlingStyle.includes('spin') || bowlingStyle.includes('break');

    let multiplier = { average: 1.0, economy: 1.0 };

    if (pitchType === 'green_seamer' || pitchType === 'bowling_friendly') {
        if (isPace) {
            multiplier = { average: 0.85, economy: 0.90 };
        }
    } else if (pitchType === 'spin_friendly' || pitchType === 'dusty_turner') {
        if (isSpin) {
            multiplier = { average: 0.82, economy: 0.88 };
        }
    } else if (pitchType === 'batting_paradise') {
        multiplier = { average: 1.20, economy: 1.15 };
    }

    return multiplier;
};

/**
 * Get batting position multiplier
 */
const getBattingPositionMultiplier = (position, format) => {
    if (!position) return { average: 1.0, strikeRate: 1.0 };

    if (format === 'test') {
        if (position <= 3) return { average: 1.05, strikeRate: 0.95 };
        if (position <= 6) return { average: 1.0, strikeRate: 1.0 };
        return { average: 0.85, strikeRate: 1.10 };
    } else {
        // Limited overs
        if (position <= 2) return { average: 0.95, strikeRate: 1.10 };
        if (position <= 5) return { average: 1.0, strikeRate: 1.0 };
        return { average: 0.90, strikeRate: 1.15 };
    }
};

/**
 * Get bowling phase multiplier (limited overs)
 */
const getBowlingPhaseMultiplier = (phase) => {
    const multipliers = {
        powerplay: 1.15, // Higher economy in powerplay
        middle: 0.95,
        death: 1.25 // Highest economy at death
    };

    return multipliers[phase] || 1.0;
};

/**
 * Calculate predicted runs
 */
const calculatePredictedRuns = (average, format) => {
    // Average represents runs per dismissal
    // Adjust based on format
    if (format === 'test') {
        return average * 0.8; // Less aggressive
    } else if (format === 'odi') {
        return average * 0.7;
    } else {
        return average * 0.5; // T20 - fewer balls
    }
};

/**
 * Calculate predicted wickets
 */
const calculatePredictedWickets = (average, strikeRate, format) => {
    // Based on typical overs bowled
    let oversLikely = 0;

    if (format === 'test') {
        oversLikely = 20; // ~20 overs per innings for main bowler
    } else if (format === 'odi') {
        oversLikely = 8;
    } else {
        oversLikely = 4;
    }

    const ballsLikely = oversLikely * 6;
    const wicketsExpected = ballsLikely / strikeRate;

    return Math.min(wicketsExpected, 5); // Cap at 5 wickets
};

/**
 * Calculate milestone probabilities for batsmen
 */
const calculateMilestoneProbabilities = (average, strikeRate, format, careerStats) => {
    const centuryRate = (careerStats.centuries / careerStats.innings) * 100;
    const fiftyRate = (careerStats.fifties / careerStats.innings) * 100;

    let century = 0;
    let fifty = 0;
    let dismissalUnder10 = 0;

    if (format === 'test') {
        century = Math.min(95, centuryRate * (average / 50));
        fifty = Math.min(95, fiftyRate * (average / 40));
        dismissalUnder10 = Math.max(5, 25 - (average / 4));
    } else if (format === 'odi') {
        century = Math.min(90, centuryRate * (average / 55) * (strikeRate / 85));
        fifty = Math.min(90, fiftyRate * (average / 45) * (strikeRate / 85));
        dismissalUnder10 = Math.max(8, 30 - (average / 3));
    } else {
        century = Math.min(85, centuryRate * 0.3 * (strikeRate / 130));
        fifty = Math.min(85, fiftyRate * (average / 35) * (strikeRate / 130));
        dismissalUnder10 = Math.max(12, 35 - (average / 2.5));
    }

    return {
        century: Math.round(century),
        fifty: Math.round(fifty),
        dismissalUnder10: Math.round(dismissalUnder10)
    };
};

/**
 * Calculate bowling milestones
 */
const calculateBowlingMilestones = (average, format, careerStats) => {
    const fiveWicketRate = careerStats.fiveWickets ?
        (careerStats.fiveWickets / careerStats.innings) * 100 : 0;

    let fiveWickets = 0;
    let threeWickets = 0;
    let wicketless = 0;

    if (format === 'test') {
        fiveWickets = Math.min(90, fiveWicketRate * (25 / average));
        threeWickets = Math.min(90, 40 * (25 / average));
        wicketless = Math.max(5, 25 - (50 / average));
    } else if (format === 'odi') {
        fiveWickets = Math.min(85, fiveWicketRate * 0.8);
        threeWickets = Math.min(85, 35 * (28 / average));
        wicketless = Math.max(10, 30 - (45 / average));
    } else {
        fiveWickets = Math.min(75, fiveWicketRate * 0.5);
        threeWickets = Math.min(80, 30 * (24 / average));
        wicketless = Math.max(15, 35 - (40 / average));
    }

    return {
        fiveWickets: Math.round(fiveWickets),
        threeWickets: Math.round(threeWickets),
        wicketless: Math.round(wicketless)
    };
};

/**
 * Calculate prediction confidence
 */
const calculatePredictionConfidence = (player, predictionData) => {
    let confidenceScore = 50; // Base

    // Has venue data
    if (predictionData.venue && player.venuePerformance[predictionData.venue]) {
        confidenceScore += 15;
    }

    // Has opposition data
    if (predictionData.opposition && player.oppositionPerformance[predictionData.opposition]) {
        confidenceScore += 15;
    }

    // Recent form data available
    const format = predictionData.format;
    if (player.recentForm[format] && player.recentForm[format].length >= 5) {
        confidenceScore += 10;
    }

    // Has weather condition data
    if (predictionData.weather && player.conditionsPerformance[predictionData.weather]) {
        confidenceScore += 10;
    }

    if (confidenceScore >= 80) return "Very High";
    if (confidenceScore >= 65) return "High";
    if (confidenceScore >= 50) return "Medium";
    return "Low";
};

/**
 * Generate insights
 */
const generatePlayerInsights = (player, predictionData, prediction) => {
    const insights = [];
    const { format, opposition, venue, weather, pitchType } = predictionData;

    // Form analysis
    const recentForm = player.recentForm[format];
    if (recentForm && recentForm.length > 0) {
        const avgRecent = recentForm.reduce((a, b) => a + b, 0) / recentForm.length;
        if (avgRecent >= 70) {
            insights.push(`🔥 Exceptional recent form with average of ${Math.round(avgRecent)} in last 5 innings`);
        } else if (avgRecent <= 20) {
            insights.push(`📉 Poor recent form - averaging only ${Math.round(avgRecent)} in last 5 innings`);
        }
    }

    // Opposition strength
    if (opposition && player.oppositionPerformance[opposition]) {
        const oppPerf = player.oppositionPerformance[opposition];
        if (player.role === 'batsman') {
            if (oppPerf.average >= player.careerStats[format].average * 1.1) {
                insights.push(`💪 Strong record against ${opposition} with average of ${oppPerf.average.toFixed(1)}`);
            } else if (oppPerf.average <= player.careerStats[format].average * 0.9) {
                insights.push(`⚠️ Struggles against ${opposition} - below career average`);
            }
        }
    }

    // Venue familiarity
    if (venue && player.venuePerformance[venue]) {
        insights.push(`🏟️ Familiar conditions at ${venue} with ${player.venuePerformance[venue].matches} matches`);
    }

    // Pitch conditions
    if (player.role === 'batsman') {
        if (pitchType === 'batting_paradise' || pitchType === 'batting_friendly') {
            insights.push(`✅ Pitch conditions favor batting - expect aggressive play`);
        } else if (pitchType === 'green_seamer' || pitchType === 'bowling_friendly') {
            insights.push(`⚠️ Challenging batting conditions - technical skills crucial`);
        }
    } else if (player.role === 'bowler') {
        const isPace = player.bowlingStyle.includes('fast') || player.bowlingStyle.includes('medium');
        if (pitchType === 'green_seamer' && isPace) {
            insights.push(`🎯 Ideal conditions for pace bowling - seam movement expected`);
        } else if ((pitchType === 'spin_friendly' || pitchType === 'dusty_turner') && !isPace) {
            insights.push(`🌀 Perfect conditions for spin - grip and turn available`);
        }
    }

    // Player strengths
    if (player.strengthsWeaknesses.strengths.length > 0) {
        insights.push(`💡 Key strengths: ${player.strengthsWeaknesses.strengths.slice(0, 2).join(', ')}`);
    }

    return insights;
};

/**
 * Get all players for dropdown
 */
export const getAllPlayers = () => {
    return Object.entries(cricketPlayers)
        .filter(([key]) => key !== 'placeholder')
        .map(([key, player]) => ({
            id: key,
            name: player.name,
            country: player.country,
            role: player.role
        }));
};