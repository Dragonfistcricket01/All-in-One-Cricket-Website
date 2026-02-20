/**
 * Comprehensive Player Database with Statistics
 * Includes batting, bowling, and all-round performance data
 */

export const cricketPlayers = {
    // INDIAN PLAYERS
    virat_kohli: {
        id: "virat_kohli",
        name: "Virat Kohli",
        country: "India",
        role: "batsman",
        battingStyle: "right_hand",
        bowlingStyle: "right_arm_medium",

        careerStats: {
            test: {
                matches: 113,
                innings: 193,
                runs: 8848,
                average: 49.15,
                strikeRate: 55.47,
                centuries: 29,
                fifties: 30,
                highestScore: 254,
                ballsFaced: 15942,
                fours: 959,
                sixes: 28
            },
            odi: {
                matches: 292,
                innings: 283,
                runs: 13906,
                average: 58.18,
                strikeRate: 93.54,
                centuries: 50,
                fifties: 72,
                highestScore: 183,
                ballsFaced: 14865,
                fours: 1253,
                sixes: 161
            },
            t20: {
                matches: 125,
                innings: 117,
                runs: 4188,
                average: 52.35,
                strikeRate: 137.96,
                centuries: 1,
                fifties: 38,
                highestScore: 122,
                ballsFaced: 3035,
                fours: 356,
                sixes: 117
            }
        },

        recentForm: {
            test: [89, 45, 12, 76, 156], // Last 5 innings
            odi: [113, 56, 85, 0, 42],
            t20: [82, 48, 3, 70, 29]
        },

        venuePerformance: {
            wankhede: { matches: 12, average: 68.5, strikeRate: 62.3 },
            eden: { matches: 8, average: 52.3, strikeRate: 58.1 },
            chinnaswamy: { matches: 15, average: 75.2, strikeRate: 65.8 },
            mcg: { matches: 7, average: 42.8, strikeRate: 52.4 },
            lords: { matches: 5, average: 48.6, strikeRate: 54.2 }
        },

        oppositionPerformance: {
            australia: { matches: 42, average: 45.8, strikeRate: 56.2 },
            england: { matches: 38, average: 52.3, strikeRate: 58.4 },
            pakistan: { matches: 18, average: 55.4, strikeRate: 91.2 },
            newzealand: { matches: 25, average: 48.9, strikeRate: 54.8 },
            southafrica: { matches: 32, average: 51.2, strikeRate: 57.3 }
        },

        conditionsPerformance: {
            sunny: { average: 58.2, strikeRate: 92.4 },
            overcast: { average: 42.5, strikeRate: 85.6 },
            humid: { average: 62.1, strikeRate: 95.2 }
        },

        strengthsWeaknesses: {
            strengths: ["Chase master", "Exceptional against pace", "Great in pressure"],
            weaknesses: ["Struggles against quality spin early", "Outside off weakness"]
        }
    },

    rohit_sharma: {
        id: "rohit_sharma",
        name: "Rohit Sharma",
        country: "India",
        role: "batsman",
        battingStyle: "right_hand",
        bowlingStyle: "right_arm_offbreak",

        careerStats: {
            test: {
                matches: 59,
                innings: 101,
                runs: 4301,
                average: 46.25,
                strikeRate: 56.31,
                centuries: 11,
                fifties: 17,
                highestScore: 212,
                ballsFaced: 7640,
                fours: 525,
                sixes: 34
            },
            odi: {
                matches: 265,
                innings: 255,
                runs: 10866,
                average: 49.16,
                strikeRate: 90.62,
                centuries: 31,
                fifties: 56,
                highestScore: 264,
                ballsFaced: 11988,
                fours: 1058,
                sixes: 311
            },
            t20: {
                matches: 159,
                innings: 151,
                runs: 4231,
                average: 31.32,
                strikeRate: 140.31,
                centuries: 5,
                fifties: 31,
                highestScore: 118,
                ballsFaced: 3015,
                fours: 351,
                sixes: 190
            }
        },

        recentForm: {
            test: [52, 86, 18, 127, 65],
            odi: [140, 28, 83, 56, 0],
            t20: [105, 42, 68, 11, 32]
        },

        venuePerformance: {
            wankhede: { matches: 18, average: 72.4, strikeRate: 95.8 },
            eden: { matches: 11, average: 58.6, strikeRate: 88.3 },
            chinnaswamy: { matches: 13, average: 65.3, strikeRate: 92.1 }
        },

        oppositionPerformance: {
            australia: { matches: 38, average: 48.6, strikeRate: 88.4 },
            england: { matches: 35, average: 52.8, strikeRate: 90.2 },
            pakistan: { matches: 20, average: 58.3, strikeRate: 92.6 }
        },

        conditionsPerformance: {
            sunny: { average: 62.4, strikeRate: 94.8 },
            overcast: { average: 45.2, strikeRate: 84.5 },
            humid: { average: 55.8, strikeRate: 88.9 }
        },

        strengthsWeaknesses: {
            strengths: ["Pull shot master", "Six hitting ability", "Good against spin"],
            weaknesses: ["Early movement issues", "Inconsistent away from home"]
        }
    },

    jasprit_bumrah: {
        id: "jasprit_bumrah",
        name: "Jasprit Bumrah",
        country: "India",
        role: "bowler",
        battingStyle: "right_hand",
        bowlingStyle: "right_arm_fast",

        careerStats: {
            test: {
                matches: 36,
                innings: 70,
                wickets: 159,
                average: 20.69,
                economy: 2.69,
                strikeRate: 46.1,
                bestBowling: "6/27",
                fiveWickets: 11,
                tenWickets: 3
            },
            odi: {
                matches: 89,
                innings: 89,
                wickets: 149,
                average: 23.55,
                economy: 4.63,
                strikeRate: 30.5,
                bestBowling: "6/19",
                fiveWickets: 3
            },
            t20: {
                matches: 70,
                innings: 69,
                wickets: 89,
                average: 17.48,
                economy: 6.48,
                strikeRate: 16.2,
                bestBowling: "5/24",
                fiveWickets: 1
            }
        },

        recentForm: {
            test: [4, 3, 5, 2, 6], // wickets in last 5 innings
            odi: [3, 2, 4, 1, 3],
            t20: [2, 3, 1, 4, 2]
        },

        venuePerformance: {
            wankhede: { matches: 8, average: 18.5, economy: 2.45 },
            eden: { matches: 5, average: 22.3, economy: 2.78 },
            lords: { matches: 3, average: 19.8, economy: 2.62 }
        },

        oppositionPerformance: {
            australia: { matches: 18, average: 21.4, economy: 2.82 },
            england: { matches: 16, average: 19.8, economy: 2.65 },
            pakistan: { matches: 8, average: 22.5, economy: 4.45 }
        },

        conditionsPerformance: {
            sunny: { average: 23.5, economy: 2.85 },
            overcast: { average: 18.2, economy: 2.52 },
            humid: { average: 20.8, economy: 2.68 }
        },

        strengthsWeaknesses: {
            strengths: ["Yorker specialist", "Death overs expert", "Unique action"],
            weaknesses: ["Injury prone", "Can be expensive on flat tracks"]
        }
    },

    // AUSTRALIAN PLAYERS
    steve_smith: {
        id: "steve_smith",
        name: "Steve Smith",
        country: "Australia",
        role: "batsman",
        battingStyle: "right_hand",
        bowlingStyle: "right_arm_legbreak",

        careerStats: {
            test: {
                matches: 109,
                innings: 197,
                runs: 9685,
                average: 56.97,
                strikeRate: 54.42,
                centuries: 32,
                fifties: 41,
                highestScore: 239,
                ballsFaced: 17792,
                fours: 1089,
                sixes: 54
            },
            odi: {
                matches: 155,
                innings: 144,
                runs: 5404,
                average: 43.91,
                strikeRate: 87.86,
                centuries: 12,
                fifties: 29,
                highestScore: 164,
                ballsFaced: 6150,
                fours: 501,
                sixes: 86
            },
            t20: {
                matches: 62,
                innings: 58,
                runs: 1080,
                average: 26.34,
                strikeRate: 125.69,
                centuries: 0,
                fifties: 5,
                highestScore: 90,
                ballsFaced: 859,
                fours: 88,
                sixes: 37
            }
        },

        recentForm: {
            test: [91, 138, 34, 72, 55],
            odi: [63, 105, 28, 41, 18],
            t20: [52, 35, 21, 8, 66]
        },

        venuePerformance: {
            mcg: { matches: 12, average: 78.5, strikeRate: 58.3 },
            scg: { matches: 14, average: 82.3, strikeRate: 56.8 },
            gabba: { matches: 11, average: 68.4, strikeRate: 55.2 }
        },

        oppositionPerformance: {
            india: { matches: 42, average: 62.8, strikeRate: 52.4 },
            england: { matches: 48, average: 58.4, strikeRate: 54.6 },
            pakistan: { matches: 12, average: 54.2, strikeRate: 53.8 }
        },

        conditionsPerformance: {
            sunny: { average: 64.2, strikeRate: 56.8 },
            overcast: { average: 52.3, strikeRate: 52.1 },
            humid: { average: 48.6, strikeRate: 54.3 }
        },

        strengthsWeaknesses: {
            strengths: ["Exceptional technique", "Great against spin", "Mental toughness"],
            weaknesses: ["Struggles in T20s", "Outside off early in innings"]
        }
    },

    pat_cummins: {
        id: "pat_cummins",
        name: "Pat Cummins",
        country: "Australia",
        role: "bowler",
        battingStyle: "right_hand",
        bowlingStyle: "right_arm_fast",

        careerStats: {
            test: {
                matches: 60,
                innings: 120,
                wickets: 269,
                average: 21.82,
                economy: 2.82,
                strikeRate: 46.4,
                bestBowling: "6/23",
                fiveWickets: 14,
                tenWickets: 2
            },
            odi: {
                matches: 84,
                innings: 83,
                wickets: 138,
                average: 26.84,
                economy: 5.22,
                strikeRate: 30.8,
                bestBowling: "5/70",
                fiveWickets: 1
            },
            t20: {
                matches: 58,
                innings: 57,
                wickets: 66,
                average: 22.62,
                economy: 7.42,
                strikeRate: 18.3,
                bestBowling: "4/23",
                fiveWickets: 0
            }
        },

        recentForm: {
            test: [5, 3, 4, 6, 2],
            odi: [3, 4, 2, 1, 3],
            t20: [2, 1, 3, 2, 1]
        },

        venuePerformance: {
            mcg: { matches: 9, average: 19.5, economy: 2.65 },
            gabba: { matches: 8, average: 18.2, economy: 2.48 },
            scg: { matches: 7, average: 21.8, economy: 2.85 }
        },

        oppositionPerformance: {
            india: { matches: 15, average: 24.5, economy: 2.95 },
            england: { matches: 22, average: 20.8, economy: 2.72 },
            pakistan: { matches: 8, average: 22.3, economy: 2.88 }
        },

        conditionsPerformance: {
            sunny: { average: 24.2, economy: 2.95 },
            overcast: { average: 19.5, economy: 2.65 },
            humid: { average: 21.8, economy: 2.78 }
        },

        strengthsWeaknesses: {
            strengths: ["Consistent line", "Great bounce", "Leadership"],
            weaknesses: ["Can be expensive in T20s", "Injury concerns"]
        }
    },

    // Add placeholder for more players
    placeholder: {
        id: "placeholder",
        name: "Select Player",
        country: "Unknown",
        role: "unknown",
        battingStyle: "unknown",
        bowlingStyle: "unknown",
        careerStats: { test: {}, odi: {}, t20: {} },
        recentForm: { test: [], odi: [], t20: [] },
        venuePerformance: {},
        oppositionPerformance: {},
        conditionsPerformance: {},
        strengthsWeaknesses: { strengths: [], weaknesses: [] }
    }
};

// Player roles
export const playerRoles = {
    batsman: "Batsman",
    bowler: "Bowler",
    allrounder: "All-Rounder",
    wicketkeeper: "Wicketkeeper-Batsman"
};

// Opposition teams for dropdown
export const oppositionTeams = {
    india: "India",
    australia: "Australia",
    england: "England",
    pakistan: "Pakistan",
    newzealand: "New Zealand",
    southafrica: "South Africa",
    srilanka: "Sri Lanka",
    westindies: "West Indies",
    bangladesh: "Bangladesh",
    afghanistan: "Afghanistan"
};