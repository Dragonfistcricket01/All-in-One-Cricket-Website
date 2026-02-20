/**
 * Comprehensive Pitch Data for Major Cricket Venues
 * Includes historical behavior, seasonal variations, and characteristics
 */

export const venuesPitchData = {
    // INDIA
    wankhede: {
        name: "Wankhede Stadium",
        location: "Mumbai, India",
        country: "India",
        established: 1974,
        capacity: 33000,

        pitchCharacteristics: {
            primaryType: "batting_friendly",
            secondaryType: "spin_friendly",
            paceAndBounce: 6, // out of 10
            spinAssist: 7,
            battingEase: 8,
            deterioration: 7, // How much it wears over days
            averageFirstInningsScore: {
                test: 385,
                odi: 285,
                t20: 180
            }
        },

        seasonalVariation: {
            winter: { // Oct-Feb
                type: "batting_friendly",
                spinAssist: 8,
                paceAndBounce: 5
            },
            summer: { // Mar-May
                type: "dusty_turner",
                spinAssist: 9,
                paceAndBounce: 4
            },
            monsoon: { // Jun-Sep
                type: "balanced",
                spinAssist: 6,
                paceAndBounce: 7
            }
        },

        grassCoverage: "minimal",
        soilType: "red_soil",

        historicalBehavior: {
            dayNightDifference: "significant", // dew factor
            tossAdvantage: "bat_first",
            chaseSuccessRate: 52,
            highScoringGames: 75, // percentage
            resultBias: "batting_friendly"
        },

        recentForm: [
            { date: "2024-01", result: "high_scoring", winner: "batting_team" },
            { date: "2023-12", result: "balanced", winner: "bowling_team" },
            { date: "2023-11", result: "batting_paradise", winner: "batting_team" }
        ]
    },

    eden: {
        name: "Eden Gardens",
        location: "Kolkata, India",
        country: "India",
        established: 1864,
        capacity: 66000,

        pitchCharacteristics: {
            primaryType: "spin_friendly",
            secondaryType: "low_bounce",
            paceAndBounce: 5,
            spinAssist: 8,
            battingEase: 7,
            deterioration: 8,
            averageFirstInningsScore: {
                test: 365,
                odi: 275,
                t20: 175
            }
        },

        seasonalVariation: {
            winter: {
                type: "spin_friendly",
                spinAssist: 9,
                paceAndBounce: 4
            },
            summer: {
                type: "dusty_turner",
                spinAssist: 10,
                paceAndBounce: 3
            },
            monsoon: {
                type: "slow_low",
                spinAssist: 7,
                paceAndBounce: 5
            }
        },

        grassCoverage: "light",
        soilType: "black_soil",

        historicalBehavior: {
            dayNightDifference: "moderate",
            tossAdvantage: "bat_first",
            chaseSuccessRate: 54,
            highScoringGames: 65,
            resultBias: "spin_friendly"
        },

        recentForm: [
            { date: "2024-01", result: "spin_friendly", winner: "spin_team" },
            { date: "2023-12", result: "low_scoring", winner: "bowling_team" },
            { date: "2023-11", result: "turning_track", winner: "spin_team" }
        ]
    },

    chinnaswamy: {
        name: "M. Chinnaswamy Stadium",
        location: "Bangalore, India",
        country: "India",
        established: 1969,
        capacity: 40000,

        pitchCharacteristics: {
            primaryType: "batting_paradise",
            secondaryType: "high_scoring",
            paceAndBounce: 7,
            spinAssist: 5,
            battingEase: 9,
            deterioration: 5,
            averageFirstInningsScore: {
                test: 425,
                odi: 295,
                t20: 185
            }
        },

        seasonalVariation: {
            winter: {
                type: "batting_friendly",
                spinAssist: 6,
                paceAndBounce: 7
            },
            summer: {
                type: "batting_paradise",
                spinAssist: 5,
                paceAndBounce: 8
            },
            monsoon: {
                type: "balanced",
                spinAssist: 6,
                paceAndBounce: 6
            }
        },

        grassCoverage: "minimal",
        soilType: "red_soil",

        historicalBehavior: {
            dayNightDifference: "minimal",
            tossAdvantage: "chase",
            chaseSuccessRate: 58,
            highScoringGames: 85,
            resultBias: "batting_paradise"
        },

        recentForm: [
            { date: "2024-01", result: "run_fest", winner: "batting_team" },
            { date: "2023-12", result: "high_scoring", winner: "batting_team" },
            { date: "2023-11", result: "batting_paradise", winner: "chasing_team" }
        ]
    },

    // AUSTRALIA
    mcg: {
        name: "Melbourne Cricket Ground",
        location: "Melbourne, Australia",
        country: "Australia",
        established: 1853,
        capacity: 100000,

        pitchCharacteristics: {
            primaryType: "balanced",
            secondaryType: "pace_friendly",
            paceAndBounce: 8,
            spinAssist: 4,
            battingEase: 7,
            deterioration: 6,
            averageFirstInningsScore: {
                test: 350,
                odi: 270,
                t20: 165
            }
        },

        seasonalVariation: {
            summer: { // Dec-Feb (Australian summer)
                type: "batting_friendly",
                spinAssist: 5,
                paceAndBounce: 7
            },
            winter: { // Jun-Aug
                type: "green_seamer",
                spinAssist: 3,
                paceAndBounce: 9
            },
            autumn: { // Mar-May
                type: "balanced",
                spinAssist: 4,
                paceAndBounce: 8
            }
        },

        grassCoverage: "medium",
        soilType: "clay_loam",

        historicalBehavior: {
            dayNightDifference: "moderate",
            tossAdvantage: "bat_first",
            chaseSuccessRate: 48,
            highScoringGames: 60,
            resultBias: "balanced"
        },

        recentForm: [
            { date: "2024-01", result: "balanced", winner: "better_team" },
            { date: "2023-12", result: "batting_friendly", winner: "batting_team" },
            { date: "2023-11", result: "pace_friendly", winner: "bowling_team" }
        ]
    },

    gabba: {
        name: "The Gabba",
        location: "Brisbane, Australia",
        country: "Australia",
        established: 1895,
        capacity: 42000,

        pitchCharacteristics: {
            primaryType: "pace_and_bounce",
            secondaryType: "result_oriented",
            paceAndBounce: 9,
            spinAssist: 3,
            battingEase: 6,
            deterioration: 7,
            averageFirstInningsScore: {
                test: 340,
                odi: 265,
                t20: 160
            }
        },

        seasonalVariation: {
            summer: {
                type: "pace_friendly",
                spinAssist: 4,
                paceAndBounce: 9
            },
            winter: {
                type: "green_top",
                spinAssist: 2,
                paceAndBounce: 10
            },
            autumn: {
                type: "balanced",
                spinAssist: 3,
                paceAndBounce: 8
            }
        },

        grassCoverage: "good",
        soilType: "clay",

        historicalBehavior: {
            dayNightDifference: "low",
            tossAdvantage: "bowl_first",
            chaseSuccessRate: 42,
            highScoringGames: 45,
            resultBias: "pace_friendly"
        },

        recentForm: [
            { date: "2024-01", result: "bowler_friendly", winner: "bowling_team" },
            { date: "2023-12", result: "pace_and_bounce", winner: "pace_team" },
            { date: "2023-11", result: "result_pitch", winner: "bowling_team" }
        ]
    },

    // ENGLAND
    lords: {
        name: "Lord's Cricket Ground",
        location: "London, England",
        country: "England",
        established: 1814,
        capacity: 30000,

        pitchCharacteristics: {
            primaryType: "balanced",
            secondaryType: "seam_friendly",
            paceAndBounce: 7,
            spinAssist: 5,
            battingEase: 6,
            deterioration: 6,
            averageFirstInningsScore: {
                test: 330,
                odi: 255,
                t20: 160
            }
        },

        seasonalVariation: {
            summer: { // Jun-Aug
                type: "batting_friendly",
                spinAssist: 6,
                paceAndBounce: 6
            },
            spring: { // Mar-May
                type: "seam_friendly",
                spinAssist: 4,
                paceAndBounce: 8
            },
            autumn: { // Sep-Nov
                type: "bowling_friendly",
                spinAssist: 5,
                paceAndBounce: 8
            }
        },

        grassCoverage: "good",
        soilType: "clay_heavy",

        historicalBehavior: {
            dayNightDifference: "low",
            tossAdvantage: "bat_first",
            chaseSuccessRate: 45,
            highScoringGames: 50,
            resultBias: "balanced"
        },

        recentForm: [
            { date: "2024-01", result: "seamer_friendly", winner: "bowling_team" },
            { date: "2023-12", result: "balanced", winner: "better_team" },
            { date: "2023-08", result: "batting_friendly", winner: "batting_team" }
        ]
    },

    oval: {
        name: "The Oval",
        location: "London, England",
        country: "England",
        established: 1845,
        capacity: 25000,

        pitchCharacteristics: {
            primaryType: "spin_friendly",
            secondaryType: "deteriorating",
            paceAndBounce: 6,
            spinAssist: 7,
            battingEase: 7,
            deterioration: 8,
            averageFirstInningsScore: {
                test: 355,
                odi: 268,
                t20: 168
            }
        },

        seasonalVariation: {
            summer: {
                type: "batting_friendly_early",
                spinAssist: 8,
                paceAndBounce: 5
            },
            spring: {
                type: "seam_friendly",
                spinAssist: 5,
                paceAndBounce: 7
            },
            autumn: {
                type: "spin_friendly",
                spinAssist: 9,
                paceAndBounce: 4
            }
        },

        grassCoverage: "light",
        soilType: "clay",

        historicalBehavior: {
            dayNightDifference: "low",
            tossAdvantage: "bat_first",
            chaseSuccessRate: 46,
            highScoringGames: 58,
            resultBias: "day5_spin"
        },

        recentForm: [
            { date: "2024-01", result: "turning_track", winner: "spin_team" },
            { date: "2023-09", result: "batting_then_spin", winner: "spin_team" },
            { date: "2023-08", result: "day5_turner", winner: "bowling_team" }
        ]
    },

    // Add more venues as needed
    neutral: {
        name: "Neutral Venue",
        location: "Unknown",
        country: "Neutral",
        established: 2000,
        capacity: 30000,

        pitchCharacteristics: {
            primaryType: "balanced",
            secondaryType: "neutral",
            paceAndBounce: 6,
            spinAssist: 6,
            battingEase: 6,
            deterioration: 6,
            averageFirstInningsScore: {
                test: 350,
                odi: 265,
                t20: 170
            }
        },

        seasonalVariation: {
            winter: { type: "balanced", spinAssist: 6, paceAndBounce: 6 },
            summer: { type: "balanced", spinAssist: 6, paceAndBounce: 6 },
            monsoon: { type: "balanced", spinAssist: 6, paceAndBounce: 6 }
        },

        grassCoverage: "medium",
        soilType: "mixed",

        historicalBehavior: {
            dayNightDifference: "moderate",
            tossAdvantage: "neutral",
            chaseSuccessRate: 50,
            highScoringGames: 55,
            resultBias: "balanced"
        },

        recentForm: []
    }
};

export const pitchTypes = {
    batting_paradise: {
        name: "Batting Paradise",
        icon: "🏏",
        color: "#4ade80",
        description: "Flat pitch with minimal assistance for bowlers. High scores expected.",
        characteristics: ["High scoring", "True bounce", "Minimal seam/spin", "Batsman's delight"]
    },
    batting_friendly: {
        name: "Batting Friendly",
        icon: "✅",
        color: "#60a5fa",
        description: "Good for batting with some assistance for bowlers later.",
        characteristics: ["Good for batting", "Even bounce", "Some deterioration", "Balanced contest"]
    },
    balanced: {
        name: "Balanced",
        icon: "⚖️",
        color: "#a78bfa",
        description: "Equal opportunity for both batsmen and bowlers.",
        characteristics: ["Fair contest", "Good bounce", "Equal assistance", "True pitch"]
    },
    bowling_friendly: {
        name: "Bowling Friendly",
        icon: "🎯",
        color: "#fb923c",
        description: "Assists bowlers with movement and variable bounce.",
        characteristics: ["Movement available", "Variable bounce", "Low scores", "Bowler's pitch"]
    },
    green_seamer: {
        name: "Green Seamer",
        icon: "🌱",
        color: "#10b981",
        description: "Grass covering assists fast bowlers with seam movement.",
        characteristics: ["Seam movement", "Pace and bounce", "Early advantage", "Green top"]
    },
    spin_friendly: {
        name: "Spin Friendly",
        icon: "🌀",
        color: "#f59e0b",
        description: "Assists spinners with turn and variable bounce.",
        characteristics: ["Turn available", "Grip for spinners", "Slow bounce", "Dusty surface"]
    },
    dusty_turner: {
        name: "Dusty Turner",
        icon: "🏜️",
        color: "#d97706",
        description: "Dry, dusty pitch offering significant turn for spinners.",
        characteristics: ["Sharp turn", "Uneven bounce", "Very spin friendly", "Day 3+ turner"]
    },
    pace_and_bounce: {
        name: "Pace & Bounce",
        icon: "⚡",
        color: "#ef4444",
        description: "Hard pitch offering pace, bounce, and carry to fast bowlers.",
        characteristics: ["Extra bounce", "Good pace", "Carry to keeper", "Fast bowler's dream"]
    }
};

export const weatherImpact = {
    sunny: {
        name: "Sunny",
        icon: "☀️",
        pitchEffect: "Pitch hardens, cracks develop faster",
        battingImpact: 1.05,
        paceImpact: 1.0,
        spinImpact: 1.08
    },
    cloudy: {
        name: "Cloudy",
        icon: "☁️",
        pitchEffect: "Moisture retained, seam movement available",
        battingImpact: 0.95,
        paceImpact: 1.08,
        spinImpact: 0.95
    },
    overcast: {
        name: "Overcast",
        icon: "🌥️",
        pitchEffect: "Ideal conditions for swing bowling",
        battingImpact: 0.90,
        paceImpact: 1.12,
        spinImpact: 0.92
    },
    rainy: {
        name: "Rainy/Damp",
        icon: "🌧️",
        pitchEffect: "Pitch soft, unpredictable bounce",
        battingImpact: 0.85,
        paceImpact: 1.15,
        spinImpact: 0.88
    },
    humid: {
        name: "Humid",
        icon: "💧",
        pitchEffect: "Dew factor, ball gets wet, batting easier at night",
        battingImpact: 1.1,
        paceImpact: 0.92,
        spinImpact: 0.85
    }
};

export const monthToSeason = {
    1: "winter", 2: "winter", 3: "summer", 4: "summer", 5: "summer",
    6: "monsoon", 7: "monsoon", 8: "monsoon", 9: "autumn",
    10: "autumn", 11: "winter", 12: "winter"
};

// For Southern Hemisphere (Australia, South Africa, New Zealand)
export const monthToSeasonSouthern = {
    1: "summer", 2: "summer", 3: "autumn", 4: "autumn", 5: "autumn",
    6: "winter", 7: "winter", 8: "winter", 9: "spring",
    10: "spring", 11: "summer", 12: "summer"
};