import { cricketTeams, venues, weatherConditions } from '../data/teamsData';

/**
 * ========================================
 * STATISTICAL MATCH PREDICTION SYSTEM
 * ========================================
 * Uses weighted factors to predict match outcomes:
 * - Win Percentage (30%)
 * - Recent Form (20%)
 * - Home/Away Advantage (15%)
 * - Toss Advantage (10%)
 * - Weather Impact (10%)
 * - Venue Performance (10%)
 * - Team Strength (5%)
 */

/**
 * Main prediction function
 * @param {Object} predictionData - Match details
 * @returns {Object} Prediction results
 */
export const predictMatch = (predictionData) => {
    const {
        team1,
        team2,
        format,
        venue,
        tossWinner,
        tossDecision,
        weather,
        isNeutralVenue
    } = predictionData;

    // Validate inputs
    if (!team1 || !team2 || !format || !venue) {
        throw new Error('Missing required prediction parameters');
    }

    // Get team data
    const team1Data = cricketTeams[team1];
    const team2Data = cricketTeams[team2];
    const venueData = venues[venue] || venues.neutral;
    const weatherData = weatherConditions[weather] || weatherConditions.sunny;

    if (!team1Data || !team2Data) {
        throw new Error('Invalid team selection');
    }

    // Initialize scores (start at 50-50)
    let team1Score = 50;
    let team2Score = 50;

    // ========================================
    // 1. HEAD-TO-HEAD WIN PERCENTAGE (30%)
    // ========================================
    const team1WinRate = team1Data.stats[format].winPercentage;
    const team2WinRate = team2Data.stats[format].winPercentage;

    const totalWinRate = team1WinRate + team2WinRate;
    const h2hFactor1 = (team1WinRate / totalWinRate) * 30;
    const h2hFactor2 = (team2WinRate / totalWinRate) * 30;

    team1Score += h2hFactor1;
    team2Score += h2hFactor2;

    // ========================================
    // 2. RECENT FORM (20%)
    // ========================================
    const team1FormScore = calculateFormScore(team1Data.recentForm);
    const team2FormScore = calculateFormScore(team2Data.recentForm);

    const totalFormScore = team1FormScore + team2FormScore;
    if (totalFormScore > 0) {
        const formFactor1 = (team1FormScore / totalFormScore) * 20;
        const formFactor2 = (team2FormScore / totalFormScore) * 20;

        team1Score += formFactor1;
        team2Score += formFactor2;
    } else {
        // If no form data, split evenly
        team1Score += 10;
        team2Score += 10;
    }

    // ========================================
    // 3. HOME/AWAY ADVANTAGE (15%)
    // ========================================
    let homeAwayFactor1 = 7.5;
    let homeAwayFactor2 = 7.5;

    if (!isNeutralVenue && venueData.country) {
        if (venueData.country === team1) {
            // Team 1 is home
            homeAwayFactor1 = (team1Data.stats[format].homeWinRate / 100) * 15;
            homeAwayFactor2 = (team2Data.stats[format].awayWinRate / 100) * 15;
        } else if (venueData.country === team2) {
            // Team 2 is home
            homeAwayFactor1 = (team1Data.stats[format].awayWinRate / 100) * 15;
            homeAwayFactor2 = (team2Data.stats[format].homeWinRate / 100) * 15;
        }
    }

    team1Score += homeAwayFactor1;
    team2Score += homeAwayFactor2;

    // ========================================
    // 4. TOSS ADVANTAGE (10%)
    // ========================================
    if (tossWinner && tossDecision) {
        const tossAdvantageScore = calculateTossAdvantage(
            tossWinner,
            tossDecision,
            team1,
            team2,
            team1Data,
            team2Data,
            venueData,
            format
        );

        if (tossWinner === team1) {
            team1Score += tossAdvantageScore;
            team2Score += (10 - tossAdvantageScore);
        } else {
            team2Score += tossAdvantageScore;
            team1Score += (10 - tossAdvantageScore);
        }
    } else {
        // No toss info - split evenly
        team1Score += 5;
        team2Score += 5;
    }

    // ========================================
    // 5. WEATHER CONDITIONS (10%)
    // ========================================
    const weatherFactor = calculateWeatherImpact(
        team1Data,
        team2Data,
        weatherData,
        format
    );

    team1Score += weatherFactor.team1;
    team2Score += weatherFactor.team2;

    // ========================================
    // 6. VENUE-SPECIFIC PERFORMANCE (10%)
    // ========================================
    const venueFactor = calculateVenueAdvantage(
        team1Data,
        team2Data,
        venueData,
        team1,
        team2
    );

    team1Score += venueFactor.team1;
    team2Score += venueFactor.team2;

    // ========================================
    // 7. BATTING/BOWLING STRENGTH (5%)
    // ========================================
    const strengthFactor = calculateStrengthFactor(
        team1Data,
        team2Data,
        format
    );

    team1Score += strengthFactor.team1;
    team2Score += strengthFactor.team2;

    // ========================================
    // NORMALIZE TO 100%
    // ========================================
    const total = team1Score + team2Score;
    const team1Probability = (team1Score / total) * 100;
    const team2Probability = (team2Score / total) * 100;

    // ========================================
    // CALCULATE CONFIDENCE LEVEL
    // ========================================
    const confidence = calculateConfidence(team1Probability, team2Probability);

    // ========================================
    // GENERATE INSIGHTS
    // ========================================
    const insights = generateInsights(predictionData, {
        team1Probability,
        team2Probability,
        team1Data,
        team2Data,
        venueData,
        weatherData
    });

    // ========================================
    // RETURN RESULTS
    // ========================================
    return {
        team1: {
            name: team1Data.name,
            code: team1Data.code,
            flag: team1Data.flag,
            winProbability: Math.round(team1Probability * 10) / 10,
            rawScore: team1Score
        },
        team2: {
            name: team2Data.name,
            code: team2Data.code,
            flag: team2Data.flag,
            winProbability: Math.round(team2Probability * 10) / 10,
            rawScore: team2Score
        },
        prediction: team1Probability > team2Probability ? team1Data.name : team2Data.name,
        confidence: confidence,
        insights: insights,
        metadata: {
            format,
            venue: venueData.name,
            weather: weatherData.name,
            tossWinner: tossWinner ? cricketTeams[tossWinner].name : null,
            tossDecision,
            isNeutralVenue
        }
    };
};

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Calculate form score from recent matches
 * Recent matches have higher weight
 */
const calculateFormScore = (recentForm) => {
    if (!recentForm || recentForm.length === 0) return 0;

    // Weights: [0.3, 0.25, 0.2, 0.15, 0.1]
    // Last match = highest weight
    const weights = [0.3, 0.25, 0.2, 0.15, 0.1];

    let score = 0;
    recentForm.forEach((result, index) => {
        if (index < weights.length) {
            score += result * weights[index];
        }
    });

    return score;
};

/**
 * Calculate toss advantage
 */
const calculateTossAdvantage = (
    tossWinner,
    tossDecision,
    team1,
    team2,
    team1Data,
    team2Data,
    venueData,
    format
) => {
    let advantageScore = 5; // Base score

    const winnerData = tossWinner === team1 ? team1Data : team2Data;

    // If team chose to chase
    if (tossDecision === 'chase') {
        const chaseRate = winnerData.stats[format].chaseSuccessRate || 50;
        const venueChaseRate = venueData.chaseSuccessRate || 50;

        // Average of team's chase success and venue chase success
        const combinedRate = (chaseRate + venueChaseRate) / 2;
        advantageScore = (combinedRate / 100) * 10;
    }

    // If team chose to bat first
    if (tossDecision === 'bat_first') {
        const venueChaseRate = venueData.chaseSuccessRate || 50;
        advantageScore = ((100 - venueChaseRate) / 100) * 10;
    }

    return advantageScore;
};

/**
 * Calculate weather impact
 */
const calculateWeatherImpact = (team1Data, team2Data, weatherData, format) => {
    // Teams with better bowling attack benefit more in bowling conditions
    const team1BowlingStrength = Math.max(0, 100 - (team1Data.stats[format].avgScoreConceded / 3));
    const team2BowlingStrength = Math.max(0, 100 - (team2Data.stats[format].avgScoreConceded / 3));

    let team1Impact = 5;
    let team2Impact = 5;

    if (weatherData.bowlingAdvantage > 1) {
        // Bowling conditions - favor teams with better bowling
        const totalBowling = team1BowlingStrength + team2BowlingStrength;
        if (totalBowling > 0) {
            team1Impact = (team1BowlingStrength / totalBowling) * 10;
            team2Impact = (team2BowlingStrength / totalBowling) * 10;
        }
    } else {
        // Batting conditions - favor teams with better batting
        const team1BattingStrength = team1Data.stats[format].avgScoreBatting / 3;
        const team2BattingStrength = team2Data.stats[format].avgScoreBatting / 3;
        const totalBatting = team1BattingStrength + team2BattingStrength;

        if (totalBatting > 0) {
            team1Impact = (team1BattingStrength / totalBatting) * 10;
            team2Impact = (team2BattingStrength / totalBatting) * 10;
        }
    }

    return { team1: team1Impact, team2: team2Impact };
};

/**
 * Calculate venue-specific advantage
 */
const calculateVenueAdvantage = (team1Data, team2Data, venueData, team1, team2) => {
    let team1Advantage = 5;
    let team2Advantage = 5;

    // Check if venue is a strong venue for either team
    if (team1Data.strongVenues && team1Data.strongVenues.includes(venueData.name)) {
        team1Advantage = 8;
        team2Advantage = 2;
    } else if (team2Data.strongVenues && team2Data.strongVenues.includes(venueData.name)) {
        team1Advantage = 2;
        team2Advantage = 8;
    }

    return { team1: team1Advantage, team2: team2Advantage };
};

/**
 * Calculate team strength factor
 */
const calculateStrengthFactor = (team1Data, team2Data, format) => {
    const team1Batting = team1Data.stats[format].avgScoreBatting;
    const team2Batting = team2Data.stats[format].avgScoreBatting;

    const team1Bowling = 300 - team1Data.stats[format].avgScoreConceded;
    const team2Bowling = 300 - team2Data.stats[format].avgScoreConceded;

    const team1Total = team1Batting + team1Bowling;
    const team2Total = team2Batting + team2Bowling;

    const totalStrength = team1Total + team2Total;

    if (totalStrength === 0) {
        return { team1: 2.5, team2: 2.5 };
    }

    return {
        team1: (team1Total / totalStrength) * 5,
        team2: (team2Total / totalStrength) * 5
    };
};

/**
 * Calculate confidence level
 */
const calculateConfidence = (prob1, prob2) => {
    const difference = Math.abs(prob1 - prob2);

    if (difference >= 30) return "Very High";
    if (difference >= 20) return "High";
    if (difference >= 10) return "Medium";
    return "Low";
};

/**
 * Generate prediction insights
 */
const generateInsights = (predictionData, results) => {
    const insights = [];
    const { team1Data, team2Data, venueData, weatherData } = results;
    const { format, tossWinner, tossDecision, isNeutralVenue } = predictionData;

    // Form analysis
    const team1FormWins = team1Data.recentForm ? team1Data.recentForm.filter(r => r === 1).length : 0;
    const team2FormWins = team2Data.recentForm ? team2Data.recentForm.filter(r => r === 1).length : 0;

    if (team1FormWins >= 4) {
        insights.push(`🔥 ${team1Data.name} is in excellent form with ${team1FormWins}/5 recent wins`);
    } else if (team1FormWins <= 1) {
        insights.push(`📉 ${team1Data.name} is struggling with only ${team1FormWins}/5 recent wins`);
    }

    if (team2FormWins >= 4) {
        insights.push(`🔥 ${team2Data.name} is in excellent form with ${team2FormWins}/5 recent wins`);
    } else if (team2FormWins <= 1) {
        insights.push(`📉 ${team2Data.name} is struggling with only ${team2FormWins}/5 recent wins`);
    }

    // Home advantage
    if (!isNeutralVenue && venueData.country) {
        if (venueData.country === predictionData.team1) {
            insights.push(`🏠 ${team1Data.name} has home advantage with ${team1Data.stats[format].homeWinRate}% win rate`);
        } else if (venueData.country === predictionData.team2) {
            insights.push(`🏠 ${team2Data.name} has home advantage with ${team2Data.stats[format].homeWinRate}% win rate`);
        }
    }

    // Venue characteristics
    insights.push(`🏟️ ${venueData.name} is ${venueData.pitchType} with ${venueData.chaseSuccessRate}% chase success`);

    // Weather impact
    if (weatherData.bowlingAdvantage > 1.05) {
        insights.push(`🌧️ ${weatherData.name} conditions favor bowlers`);
    } else if (weatherData.battingAdvantage > 1.03) {
        insights.push(`☀️ ${weatherData.name} conditions favor batters`);
    }

    // Toss decision
    if (tossWinner && tossDecision) {
        const winner = tossWinner === predictionData.team1 ? team1Data.name : team2Data.name;
        if (tossDecision === 'chase') {
            insights.push(`🎯 ${winner} won toss and chose to chase`);
        } else {
            insights.push(`🎯 ${winner} won toss and chose to bat first`);
        }
    }

    // Head-to-head comparison
    const winRateDiff = Math.abs(team1Data.stats[format].winPercentage - team2Data.stats[format].winPercentage);
    if (winRateDiff > 10) {
        const stronger = team1Data.stats[format].winPercentage > team2Data.stats[format].winPercentage
            ? team1Data.name
            : team2Data.name;
        insights.push(`📊 ${stronger} has significantly better overall record in ${format.toUpperCase()}`);
    }

    return insights;
};

/**
 * Get team suggestions based on user input
 */
export const getTeamSuggestions = (searchTerm) => {
    if (!searchTerm) return [];

    const term = searchTerm.toLowerCase();
    return Object.entries(cricketTeams)
        .filter(([key, team]) =>
            team.name.toLowerCase().includes(term) ||
            team.code.toLowerCase().includes(term)
        )
        .map(([key, team]) => ({
            key,
            name: team.name,
            code: team.code,
            flag: team.flag
        }));
};

// Export for testing
export const testHelpers = {
    calculateFormScore,
    calculateTossAdvantage,
    calculateWeatherImpact,
    calculateVenueAdvantage,
    calculateStrengthFactor,
    calculateConfidence
};