/**
 * Cricket Teams Data with Statistics
 * Real-world stats for accurate predictions
 */

export const cricketTeams = {
    india: {
        name: "India",
        code: "IND",
        flag: "🇮🇳",
        stats: {
            odi: {
                matchesPlayed: 1050,
                won: 550,
                lost: 450,
                winPercentage: 52.4,
                avgScoreBatting: 265,
                avgScoreConceded: 248,
                homeWinRate: 62.5,
                awayWinRate: 48.3,
                chaseSuccessRate: 56.2
            },
            t20: {
                matchesPlayed: 220,
                won: 140,
                lost: 75,
                winPercentage: 63.6,
                avgScoreBatting: 175,
                avgScoreConceded: 165,
                homeWinRate: 70.5,
                awayWinRate: 58.3,
                chaseSuccessRate: 62.0
            },
            test: {
                matchesPlayed: 570,
                won: 175,
                lost: 180,
                drawn: 215,
                winPercentage: 30.7,
                homeWinRate: 45.2,
                awayWinRate: 22.5,
                avgFirstInnings: 385,
                avgSecondInnings: 340
            }
        },
        recentForm: [1, 1, 0, 1, 1],
        strongVenues: ["Wankhede Stadium", "Eden Gardens", "M. Chinnaswamy Stadium"],
        keyPlayers: ["Virat Kohli", "Rohit Sharma", "Jasprit Bumrah"]
    },

    australia: {
        name: "Australia",
        code: "AUS",
        flag: "🇦🇺",
        stats: {
            odi: {
                matchesPlayed: 1000,
                won: 600,
                lost: 380,
                winPercentage: 60.0,
                avgScoreBatting: 272,
                avgScoreConceded: 245,
                homeWinRate: 68.5,
                awayWinRate: 54.2,
                chaseSuccessRate: 58.5
            },
            t20: {
                matchesPlayed: 180,
                won: 110,
                lost: 68,
                winPercentage: 61.1,
                avgScoreBatting: 172,
                avgScoreConceded: 160,
                homeWinRate: 72.0,
                awayWinRate: 55.0,
                chaseSuccessRate: 60.0
            },
            test: {
                matchesPlayed: 860,
                won: 405,
                lost: 235,
                drawn: 220,
                winPercentage: 47.1,
                homeWinRate: 58.3,
                awayWinRate: 40.5,
                avgFirstInnings: 395,
                avgSecondInnings: 360
            }
        },
        recentForm: [1, 1, 1, 0, 1],
        strongVenues: ["MCG", "SCG", "Perth Stadium"],
        keyPlayers: ["Steve Smith", "Pat Cummins", "Travis Head"]
    },

    england: {
        name: "England",
        code: "ENG",
        flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        stats: {
            odi: {
                matchesPlayed: 800,
                won: 420,
                lost: 360,
                winPercentage: 52.5,
                avgScoreBatting: 268,
                avgScoreConceded: 255,
                homeWinRate: 65.0,
                awayWinRate: 45.5,
                chaseSuccessRate: 54.0
            },
            t20: {
                matchesPlayed: 200,
                won: 115,
                lost: 82,
                winPercentage: 57.5,
                avgScoreBatting: 168,
                avgScoreConceded: 162,
                homeWinRate: 68.0,
                awayWinRate: 50.0,
                chaseSuccessRate: 55.0
            },
            test: {
                matchesPlayed: 1070,
                won: 395,
                lost: 325,
                drawn: 350,
                winPercentage: 36.9,
                homeWinRate: 52.5,
                awayWinRate: 28.5,
                avgFirstInnings: 375,
                avgSecondInnings: 340
            }
        },
        recentForm: [1, 0, 1, 1, 0],
        strongVenues: ["Lord's", "The Oval", "Edgbaston"],
        keyPlayers: ["Joe Root", "Ben Stokes", "Jos Buttler"]
    },

    pakistan: {
        name: "Pakistan",
        code: "PAK",
        flag: "🇵🇰",
        stats: {
            odi: {
                matchesPlayed: 970,
                won: 510,
                lost: 440,
                winPercentage: 52.6,
                avgScoreBatting: 258,
                avgScoreConceded: 252,
                homeWinRate: 64.0,
                awayWinRate: 46.0,
                chaseSuccessRate: 52.0
            },
            t20: {
                matchesPlayed: 230,
                won: 145,
                lost: 82,
                winPercentage: 63.0,
                avgScoreBatting: 170,
                avgScoreConceded: 165,
                homeWinRate: 70.0,
                awayWinRate: 58.0,
                chaseSuccessRate: 59.0
            },
            test: {
                matchesPlayed: 450,
                won: 145,
                lost: 140,
                drawn: 165,
                winPercentage: 32.2,
                homeWinRate: 48.0,
                awayWinRate: 22.0,
                avgFirstInnings: 365,
                avgSecondInnings: 330
            }
        },
        recentForm: [0, 1, 1, 0, 1],
        strongVenues: ["National Stadium Karachi", "Gaddafi Stadium"],
        keyPlayers: ["Babar Azam", "Shaheen Afridi", "Mohammad Rizwan"]
    },

    newzealand: {
        name: "New Zealand",
        code: "NZ",
        flag: "🇳🇿",
        stats: {
            odi: {
                matchesPlayed: 850,
                won: 450,
                lost: 380,
                winPercentage: 53.0,
                avgScoreBatting: 260,
                avgScoreConceded: 250,
                homeWinRate: 64.0,
                awayWinRate: 47.0,
                chaseSuccessRate: 54.0
            },
            t20: {
                matchesPlayed: 190,
                won: 110,
                lost: 78,
                winPercentage: 57.9,
                avgScoreBatting: 168,
                avgScoreConceded: 164,
                homeWinRate: 66.0,
                awayWinRate: 52.0,
                chaseSuccessRate: 56.0
            },
            test: {
                matchesPlayed: 480,
                won: 115,
                lost: 200,
                drawn: 165,
                winPercentage: 24.0,
                homeWinRate: 42.0,
                awayWinRate: 15.0,
                avgFirstInnings: 355,
                avgSecondInnings: 320
            }
        },
        recentForm: [1, 0, 1, 0, 1],
        strongVenues: ["Eden Park", "Hagley Oval"],
        keyPlayers: ["Kane Williamson", "Tim Southee", "Devon Conway"]
    },

    southafrica: {
        name: "South Africa",
        code: "SA",
        flag: "🇿🇦",
        stats: {
            odi: {
                matchesPlayed: 650,
                won: 390,
                lost: 245,
                winPercentage: 60.0,
                avgScoreBatting: 268,
                avgScoreConceded: 248,
                homeWinRate: 70.0,
                awayWinRate: 53.0,
                chaseSuccessRate: 57.0
            },
            t20: {
                matchesPlayed: 170,
                won: 95,
                lost: 73,
                winPercentage: 55.9,
                avgScoreBatting: 165,
                avgScoreConceded: 162,
                homeWinRate: 65.0,
                awayWinRate: 50.0,
                chaseSuccessRate: 54.0
            },
            test: {
                matchesPlayed: 470,
                won: 180,
                lost: 170,
                drawn: 120,
                winPercentage: 38.3,
                homeWinRate: 55.0,
                awayWinRate: 28.0,
                avgFirstInnings: 370,
                avgSecondInnings: 335
            }
        },
        recentForm: [1, 1, 0, 1, 0],
        strongVenues: ["Wanderers", "Newlands", "Centurion"],
        keyPlayers: ["Quinton de Kock", "Kagiso Rabada", "Aiden Markram"]
    },

    srilanka: {
        name: "Sri Lanka",
        code: "SL",
        flag: "🇱🇰",
        stats: {
            odi: {
                matchesPlayed: 900,
                won: 440,
                lost: 440,
                winPercentage: 48.9,
                avgScoreBatting: 252,
                avgScoreConceded: 258,
                homeWinRate: 62.0,
                awayWinRate: 40.0,
                chaseSuccessRate: 50.0
            },
            t20: {
                matchesPlayed: 180,
                won: 85,
                lost: 92,
                winPercentage: 47.2,
                avgScoreBatting: 160,
                avgScoreConceded: 168,
                homeWinRate: 58.0,
                awayWinRate: 40.0,
                chaseSuccessRate: 48.0
            },
            test: {
                matchesPlayed: 300,
                won: 95,
                lost: 115,
                drawn: 90,
                winPercentage: 31.7,
                homeWinRate: 48.0,
                awayWinRate: 20.0,
                avgFirstInnings: 350,
                avgSecondInnings: 315
            }
        },
        recentForm: [0, 1, 0, 0, 1],
        strongVenues: ["R. Premadasa Stadium", "Galle International"],
        keyPlayers: ["Kusal Mendis", "Wanindu Hasaranga", "Pathum Nissanka"]
    },

    westindies: {
        name: "West Indies",
        code: "WI",
        flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        stats: {
            odi: {
                matchesPlayed: 850,
                won: 430,
                lost: 400,
                winPercentage: 50.6,
                avgScoreBatting: 255,
                avgScoreConceded: 260,
                homeWinRate: 60.0,
                awayWinRate: 44.0,
                chaseSuccessRate: 49.0
            },
            t20: {
                matchesPlayed: 190,
                won: 105,
                lost: 82,
                winPercentage: 55.3,
                avgScoreBatting: 168,
                avgScoreConceded: 165,
                homeWinRate: 62.0,
                awayWinRate: 50.0,
                chaseSuccessRate: 53.0
            },
            test: {
                matchesPlayed: 580,
                won: 185,
                lost: 215,
                drawn: 180,
                winPercentage: 31.9,
                homeWinRate: 45.0,
                awayWinRate: 22.0,
                avgFirstInnings: 345,
                avgSecondInnings: 310
            }
        },
        recentForm: [1, 0, 0, 1, 0],
        strongVenues: ["Kensington Oval", "Queen's Park Oval"],
        keyPlayers: ["Jason Holder", "Shai Hope", "Alzarri Joseph"]
    },

    bangladesh: {
        name: "Bangladesh",
        code: "BAN",
        flag: "🇧🇩",
        stats: {
            odi: {
                matchesPlayed: 420,
                won: 145,
                lost: 265,
                winPercentage: 34.5,
                avgScoreBatting: 242,
                avgScoreConceded: 265,
                homeWinRate: 52.0,
                awayWinRate: 25.0,
                chaseSuccessRate: 38.0
            },
            t20: {
                matchesPlayed: 150,
                won: 65,
                lost: 83,
                winPercentage: 43.3,
                avgScoreBatting: 155,
                avgScoreConceded: 165,
                homeWinRate: 55.0,
                awayWinRate: 35.0,
                chaseSuccessRate: 42.0
            },
            test: {
                matchesPlayed: 140,
                won: 18,
                lost: 95,
                drawn: 27,
                winPercentage: 12.9,
                homeWinRate: 28.0,
                awayWinRate: 5.0,
                avgFirstInnings: 310,
                avgSecondInnings: 275
            }
        },
        recentForm: [0, 0, 1, 0, 0],
        strongVenues: ["Shere Bangla National Stadium", "Zahur Ahmed Chowdhury Stadium"],
        keyPlayers: ["Shakib Al Hasan", "Mushfiqur Rahim", "Taskin Ahmed"]
    },

    afghanistan: {
        name: "Afghanistan",
        code: "AFG",
        flag: "🇦🇫",
        stats: {
            odi: {
                matchesPlayed: 160,
                won: 72,
                lost: 85,
                winPercentage: 45.0,
                avgScoreBatting: 245,
                avgScoreConceded: 255,
                homeWinRate: 58.0,
                awayWinRate: 38.0,
                chaseSuccessRate: 44.0
            },
            t20: {
                matchesPlayed: 120,
                won: 65,
                lost: 53,
                winPercentage: 54.2,
                avgScoreBatting: 160,
                avgScoreConceded: 158,
                homeWinRate: 62.0,
                awayWinRate: 48.0,
                chaseSuccessRate: 52.0
            },
            test: {
                matchesPlayed: 10,
                won: 2,
                lost: 6,
                drawn: 2,
                winPercentage: 20.0,
                homeWinRate: 30.0,
                awayWinRate: 10.0,
                avgFirstInnings: 295,
                avgSecondInnings: 260
            }
        },
        recentForm: [1, 0, 1, 1, 0],
        strongVenues: ["Sharjah Cricket Stadium", "Greater Noida Stadium"],
        keyPlayers: ["Rashid Khan", "Mohammad Nabi", "Rahmanullah Gurbaz"]
    }
};

export const venues = {
    'Mirpur': {
        name: 'Shere Bangla National Stadium',
        city: 'Dhaka',
        country: 'Bangladesh',
        capacity: 25000,
        established: 2006,
        pitch_type: 'spin_friendly',
        typical_score: {
            t20: { first_innings: 165, second_innings: 155 },
            odi: { first_innings: 260, second_innings: 250 }
        },
        weather: 'humid',
        altitude: 8,
        boundaries: { straight: 60, square: 65 },
        recent_matches: 150,
        home_advantage: 15
    },
    'Chittagong': {
        name: 'Zahur Ahmed Chowdhury Stadium',
        city: 'Chittagong',
        country: 'Bangladesh',
        capacity: 20000,
        established: 2006,
        pitch_type: 'balanced',
        typical_score: {
            t20: { first_innings: 170, second_innings: 160 },
            odi: { first_innings: 270, second_innings: 260 }
        },
        weather: 'humid',
        altitude: 4,
        boundaries: { straight: 62, square: 67 },
        recent_matches: 100,
        home_advantage: 12
    },
    'MCG': {
        name: 'Melbourne Cricket Ground',
        city: 'Melbourne',
        country: 'Australia',
        capacity: 100000,
        established: 1853,
        pitch_type: 'batting_friendly',
        typical_score: {
            t20: { first_innings: 180, second_innings: 170 },
            odi: { first_innings: 300, second_innings: 285 }
        },
        weather: 'sunny',
        altitude: 28,
        boundaries: { straight: 75, square: 80 },
        recent_matches: 500,
        home_advantage: 20
    },
    'SCG': {
        name: 'Sydney Cricket Ground',
        city: 'Sydney',
        country: 'Australia',
        capacity: 48000,
        established: 1848,
        pitch_type: 'spin_friendly',
        typical_score: {
            t20: { first_innings: 175, second_innings: 165 },
            odi: { first_innings: 280, second_innings: 270 }
        },
        weather: 'sunny',
        altitude: 58,
        boundaries: { straight: 70, square: 75 },
        recent_matches: 450,
        home_advantage: 18
    },
    'Lords': {
        name: 'Lord\'s Cricket Ground',
        city: 'London',
        country: 'England',
        capacity: 31100,
        established: 1814,
        pitch_type: 'green_seamer',
        typical_score: {
            t20: { first_innings: 170, second_innings: 160 },
            odi: { first_innings: 275, second_innings: 265 }
        },
        weather: 'cloudy',
        altitude: 37,
        boundaries: { straight: 65, square: 70 },
        recent_matches: 600,
        home_advantage: 22
    },
    'Wankhede': {
        name: 'Wankhede Stadium',
        city: 'Mumbai',
        country: 'India',
        capacity: 33000,
        established: 1974,
        pitch_type: 'batting_paradise',
        typical_score: {
            t20: { first_innings: 185, second_innings: 175 },
            odi: { first_innings: 310, second_innings: 295 }
        },
        weather: 'humid',
        altitude: 14,
        boundaries: { straight: 68, square: 72 },
        recent_matches: 400,
        home_advantage: 25
    },
    'Eden Gardens': {
        name: 'Eden Gardens',
        city: 'Kolkata',
        country: 'India',
        capacity: 66000,
        pitch_type: 'spin_friendly',
        typical_score: {
            t20: { first_innings: 175, second_innings: 165 },
            odi: { first_innings: 280, second_innings: 270 }
        },
        weather: 'humid',
        altitude: 9,
        boundaries: { straight: 70, square: 75 },
        recent_matches: 450,
        home_advantage: 23
    },
    'Gaddafi Stadium': {
        name: 'Gaddafi Stadium',
        city: 'Lahore',
        country: 'Pakistan',
        capacity: 27000,
        established: 1959,
        pitch_type: 'batting_friendly',
        typical_score: {
            t20: { first_innings: 180, second_innings: 170 },
            odi: { first_innings: 290, second_innings: 280 }
        },
        weather: 'sunny',
        altitude: 217,
        boundaries: { straight: 72, square: 76 },
        recent_matches: 300,
        home_advantage: 20
    },
    'Newlands': {
        name: 'Newlands Cricket Ground',
        city: 'Cape Town',
        country: 'South Africa',
        capacity: 25000,
        established: 1888,
        pitch_type: 'green_seamer',
        typical_score: {
            t20: { first_innings: 165, second_innings: 155 },
            odi: { first_innings: 270, second_innings: 260 }
        },
        weather: 'windy',
        altitude: 10,
        boundaries: { straight: 68, square: 73 },
        recent_matches: 350,
        home_advantage: 18
    },
    'neutral': {
        name: 'Neutral Venue',
        city: 'Neutral',
        country: 'neutral',
        capacity: 0,
        established: 0,
        pitch_type: 'balanced',
        typical_score: {
            t20: { first_innings: 170, second_innings: 165 },
            odi: { first_innings: 275, second_innings: 270 }
        },
        weather: 'sunny',
        altitude: 0,
        boundaries: { straight: 65, square: 70 },
        recent_matches: 0,
        home_advantage: 0
    }
};

export const weatherConditions = {
    sunny: {
        name: "Sunny",
        icon: "☀️",
        battingAdvantage: 1.05,
        bowlingAdvantage: 0.95
    },
    cloudy: {
        name: "Cloudy",
        icon: "☁️",
        battingAdvantage: 0.98,
        bowlingAdvantage: 1.02
    },
    overcast: {
        name: "Overcast",
        icon: "🌥️",
        battingAdvantage: 0.95,
        bowlingAdvantage: 1.08
    },
    rainy: {
        name: "Rainy/Damp",
        icon: "🌧️",
        battingAdvantage: 0.90,
        bowlingAdvantage: 1.12
    }
};


export const playerDatabase = [
    // India Players
    { name: 'Virat Kohli', country: 'India', role: 'Batsman', rating: 93 },
    { name: 'Rohit Sharma', country: 'India', role: 'Batsman', rating: 92 },
    { name: 'Jasprit Bumrah', country: 'India', role: 'Bowler', rating: 95 },
    { name: 'Hardik Pandya', country: 'India', role: 'All-rounder', rating: 89 },
    { name: 'Shubman Gill', country: 'India', role: 'Batsman', rating: 87 },
    { name: 'KL Rahul', country: 'India', role: 'Wicketkeeper-Batsman', rating: 86 },
    { name: 'Ravindra Jadeja', country: 'India', role: 'All-rounder', rating: 90 },
    { name: 'Ravichandran Ashwin', country: 'India', role: 'Bowler', rating: 89 },
    { name: 'Mohammed Shami', country: 'India', role: 'Bowler', rating: 88 },
    { name: 'Kuldeep Yadav', country: 'India', role: 'Bowler', rating: 83 },
    { name: 'Yuzvendra Chahal', country: 'India', role: 'Bowler', rating: 82 },

    // Australia Players
    { name: 'Steve Smith', country: 'Australia', role: 'Batsman', rating: 94 },
    { name: 'Pat Cummins', country: 'Australia', role: 'Bowler', rating: 93 },
    { name: 'David Warner', country: 'Australia', role: 'Batsman', rating: 90 },
    { name: 'Mitchell Starc', country: 'Australia', role: 'Bowler', rating: 91 },
    { name: 'Glenn Maxwell', country: 'Australia', role: 'All-rounder', rating: 88 },
    { name: 'Travis Head', country: 'Australia', role: 'Batsman', rating: 86 },
    { name: 'Josh Hazlewood', country: 'Australia', role: 'Bowler', rating: 89 },
    { name: 'Marcus Stoinis', country: 'Australia', role: 'All-rounder', rating: 83 },
    { name: 'Adam Zampa', country: 'Australia', role: 'Bowler', rating: 84 },
    { name: 'Mitchell Marsh', country: 'Australia', role: 'All-rounder', rating: 85 },

    // England Players
    { name: 'Joe Root', country: 'England', role: 'Batsman', rating: 93 },
    { name: 'Ben Stokes', country: 'England', role: 'All-rounder', rating: 92 },
    { name: 'Jos Buttler', country: 'England', role: 'Wicketkeeper-Batsman', rating: 89 },
    { name: 'James Anderson', country: 'England', role: 'Bowler', rating: 90 },
    { name: 'Stuart Broad', country: 'England', role: 'Bowler', rating: 88 },
    { name: 'Jonny Bairstow', country: 'England', role: 'Wicketkeeper-Batsman', rating: 85 },
    { name: 'Sam Curran', country: 'England', role: 'All-rounder', rating: 83 },
    { name: 'Adil Rashid', country: 'England', role: 'Bowler', rating: 82 },
    { name: 'Harry Brook', country: 'England', role: 'Batsman', rating: 86 },

    // Pakistan Players
    { name: 'Babar Azam', country: 'Pakistan', role: 'Batsman', rating: 94 },
    { name: 'Shaheen Afridi', country: 'Pakistan', role: 'Bowler', rating: 92 },
    { name: 'Mohammad Rizwan', country: 'Pakistan', role: 'Wicketkeeper-Batsman', rating: 87 },
    { name: 'Shadab Khan', country: 'Pakistan', role: 'All-rounder', rating: 83 },
    { name: 'Haris Rauf', country: 'Pakistan', role: 'Bowler', rating: 82 },
    { name: 'Fakhar Zaman', country: 'Pakistan', role: 'Batsman', rating: 81 },
    { name: 'Naseem Shah', country: 'Pakistan', role: 'Bowler', rating: 80 },

    // Bangladesh Players
    { name: 'Shakib Al Hasan', country: 'Bangladesh', role: 'All-rounder', rating: 91 },
    { name: 'Mushfiqur Rahim', country: 'Bangladesh', role: 'Wicketkeeper-Batsman', rating: 85 },
    { name: 'Tamim Iqbal', country: 'Bangladesh', role: 'Batsman', rating: 84 },
    { name: 'Mustafizur Rahman', country: 'Bangladesh', role: 'Bowler', rating: 82 },
    { name: 'Mehidy Hasan Miraz', country: 'Bangladesh', role: 'All-rounder', rating: 80 },
    { name: 'Litton Das', country: 'Bangladesh', role: 'Wicketkeeper-Batsman', rating: 79 },
    { name: 'Taskin Ahmed', country: 'Bangladesh', role: 'Bowler', rating: 78 },
    { name: 'Najmul Hossain Shanto', country: 'Bangladesh', role: 'Batsman', rating: 77 },

    // Afghanistan Players
    { name: 'Rashid Khan', country: 'Afghanistan', role: 'Bowler', rating: 93 },
    { name: 'Mohammad Nabi', country: 'Afghanistan', role: 'All-rounder', rating: 86 },
    { name: 'Mujeeb Ur Rahman', country: 'Afghanistan', role: 'Bowler', rating: 82 },
    { name: 'Rahmanullah Gurbaz', country: 'Afghanistan', role: 'Wicketkeeper-Batsman', rating: 80 },
    { name: 'Naveen-ul-Haq', country: 'Afghanistan', role: 'Bowler', rating: 78 },
    { name: 'Azmatullah Omarzai', country: 'Afghanistan', role: 'All-rounder', rating: 76 },

    // South Africa Players
    { name: 'Quinton de Kock', country: 'South Africa', role: 'Wicketkeeper-Batsman', rating: 88 },
    { name: 'Kagiso Rabada', country: 'South Africa', role: 'Bowler', rating: 92 },
    { name: 'Aiden Markram', country: 'South Africa', role: 'Batsman', rating: 85 },
    { name: 'David Miller', country: 'South Africa', role: 'Batsman', rating: 84 },
    { name: 'Temba Bavuma', country: 'South Africa', role: 'Batsman', rating: 81 },
    { name: 'Marco Jansen', country: 'South Africa', role: 'All-rounder', rating: 80 },
    { name: 'Keshav Maharaj', country: 'South Africa', role: 'Bowler', rating: 79 },
    { name: 'Anrich Nortje', country: 'South Africa', role: 'Bowler', rating: 87 },

    // New Zealand Players
    { name: 'Kane Williamson', country: 'New Zealand', role: 'Batsman', rating: 93 },
    { name: 'Trent Boult', country: 'New Zealand', role: 'Bowler', rating: 90 },
    { name: 'Tim Southee', country: 'New Zealand', role: 'Bowler', rating: 88 },
    { name: 'Devon Conway', country: 'New Zealand', role: 'Wicketkeeper-Batsman', rating: 85 },
    { name: 'Rachin Ravindra', country: 'New Zealand', role: 'All-rounder', rating: 83 },
    { name: 'Matt Henry', country: 'New Zealand', role: 'Bowler', rating: 81 },
    { name: 'Glenn Phillips', country: 'New Zealand', role: 'All-rounder', rating: 80 },

    // Sri Lanka Players
    { name: 'Kusal Mendis', country: 'Sri Lanka', role: 'Wicketkeeper-Batsman', rating: 83 },
    { name: 'Wanindu Hasaranga', country: 'Sri Lanka', role: 'All-rounder', rating: 87 },
    { name: 'Pathum Nissanka', country: 'Sri Lanka', role: 'Batsman', rating: 81 },
    { name: 'Dasun Shanaka', country: 'Sri Lanka', role: 'All-rounder', rating: 79 },
    { name: 'Maheesh Theekshana', country: 'Sri Lanka', role: 'Bowler', rating: 78 },

    // West Indies Players
    { name: 'Jason Holder', country: 'West Indies', role: 'All-rounder', rating: 87 },
    { name: 'Shai Hope', country: 'West Indies', role: 'Wicketkeeper-Batsman', rating: 83 },
    { name: 'Alzarri Joseph', country: 'West Indies', role: 'Bowler', rating: 81 },
    { name: 'Andre Russell', country: 'West Indies', role: 'All-rounder', rating: 86 },
    { name: 'Sunil Narine', country: 'West Indies', role: 'All-rounder', rating: 84 },
    { name: 'Rovman Powell', country: 'West Indies', role: 'All-rounder', rating: 82 },

    // Zimbabwe Players
    { name: 'Sikandar Raza', country: 'Zimbabwe', role: 'All-rounder', rating: 82 },
    { name: 'Craig Ervine', country: 'Zimbabwe', role: 'Batsman', rating: 76 },
    { name: 'Richard Ngarava', country: 'Zimbabwe', role: 'Bowler', rating: 75 }
];