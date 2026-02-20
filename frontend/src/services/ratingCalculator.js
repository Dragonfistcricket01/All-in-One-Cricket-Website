export const calculateBattingRating = (stats) => {
    const { runs, balls, isOut, boundaries, sixes, matchWon } = stats;

    let rating = 5.0;
    const strikeRate = (runs / balls) * 100;

    // Strike Rate Component
    if (strikeRate > 150) rating += 2.0;
    else if (strikeRate > 130) rating += 1.5;
    else if (strikeRate > 100) rating += 1.0;
    else if (strikeRate < 70) rating -= 1.5;

    // Runs Component
    if (runs >= 100) rating += 3.0;
    else if (runs >= 75) rating += 2.0;
    else if (runs >= 50) rating += 1.5;
    else if (runs >= 30) rating += 0.5;
    else if (runs < 10) rating -= 1.5;

    // Not Out Bonus
    if (!isOut && runs > 30) rating += 0.5;

    // Match Winner Bonus
    if (matchWon) rating += 1.0;

    return Math.min(10, Math.max(1, rating)).toFixed(1);
};

export const calculateBowlingRating = (stats) => {
    const { wickets, runs, overs, maidens, economy } = stats;

    let rating = 5.0;

    // Wickets Component
    if (wickets >= 5) rating += 3.5;
    else if (wickets >= 4) rating += 2.5;
    else if (wickets >= 3) rating += 2.0;
    else if (wickets >= 2) rating += 1.0;
    else if (wickets === 0) rating -= 1.0;

    // Economy Component
    if (economy < 4.5) rating += 2.0;
    else if (economy < 6.0) rating += 1.0;
    else if (economy > 10.0) rating -= 2.0;
    else if (economy > 8.5) rating -= 1.0;

    // Maidens Bonus
    rating += (maidens * 0.3);

    return Math.min(10, Math.max(1, rating)).toFixed(1);
};

export const getRatingStars = (rating) => {
    const numericRating = parseFloat(rating);
    if (numericRating >= 9.0) return '⭐⭐⭐⭐⭐';
    if (numericRating >= 8.0) return '⭐⭐⭐⭐⭐';
    if (numericRating >= 7.0) return '⭐⭐⭐⭐';
    if (numericRating >= 6.0) return '⭐⭐⭐';
    if (numericRating >= 5.0) return '⭐⭐';
    return '⭐';
};

export const getRatingColor = (rating) => {
    const numericRating = parseFloat(rating);
    if (numericRating >= 8.0) return '#22c55e'; // Green
    if (numericRating >= 6.0) return '#eab308'; // Yellow
    return '#ef4444'; // Red
};

export const getRatingLabel = (rating) => {
    const numericRating = parseFloat(rating);
    if (numericRating >= 9.0) return 'Outstanding';
    if (numericRating >= 8.0) return 'Excellent';
    if (numericRating >= 7.0) return 'Good';
    if (numericRating >= 6.0) return 'Average';
    if (numericRating >= 5.0) return 'Below Average';
    return 'Poor';
};