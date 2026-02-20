// Mock data for Player Ratings
const matchRatings = [
    {
        id: 'mr1',
        matchId: 'r1',
        matchTitle: 'IND vs AUS - 3rd T20I',
        date: '2024-11-02',
        venue: 'Perth',
        format: 't20i',
        result: 'IND won by 6 wickets',
        team1: 'IND',
        team2: 'AUS',
        topRated: [
            { name: 'Virat Kohli', team: 'IND', role: 'Batsman', performance: '82*(53)', rating: 9.5 },
            { name: 'Jasprit Bumrah', team: 'IND', role: 'Bowler', performance: '3/15(4)', rating: 9.0 },
            { name: 'Travis Head', team: 'AUS', role: 'Batsman', performance: '65(42)', rating: 7.5 }
        ],
        allRatings: {
            IND: {
                batting: [
                    { name: 'Rohit Sharma', score: '32(28)', rating: 6.5, stars: '⭐⭐⭐' },
                    { name: 'Virat Kohli', score: '82*(53)', rating: 9.5, stars: '⭐⭐⭐⭐⭐' },
                    { name: 'Suryakumar Yadav', score: '45(32)', rating: 8.0, stars: '⭐⭐⭐⭐' },
                    { name: 'KL Rahul', score: '5(8)', rating: 4.0, stars: '⭐⭐' },
                    { name: 'Hardik Pandya', score: '18*(12)', rating: 7.0, stars: '⭐⭐⭐⭐' }
                ],
                bowling: [
                    { name: 'Jasprit Bumrah', figures: '3/15(4)', rating: 9.0, stars: '⭐⭐⭐⭐⭐' },
                    { name: 'Arshdeep Singh', figures: '2/28(4)', rating: 7.5, stars: '⭐⭐⭐⭐' },
                    { name: 'Kuldeep Yadav', figures: '1/35(4)', rating: 6.0, stars: '⭐⭐⭐' },
                    { name: 'Hardik Pandya', figures: '1/22(3)', rating: 7.0, stars: '⭐⭐⭐⭐' }
                ]
            },
            AUS: {
                batting: [
                    { name: 'Travis Head', score: '65(42)', rating: 7.5, stars: '⭐⭐⭐⭐' },
                    { name: 'Mitchell Marsh', score: '32(28)', rating: 6.0, stars: '⭐⭐⭐' },
                    { name: 'Glenn Maxwell', score: '28(18)', rating: 6.5, stars: '⭐⭐⭐' },
                    { name: 'Marcus Stoinis', score: '22(16)', rating: 6.0, stars: '⭐⭐⭐' }
                ],
                bowling: [
                    { name: 'Mitchell Starc', figures: '1/38(4)', rating: 5.5, stars: '⭐⭐⭐' },
                    { name: 'Pat Cummins', figures: '1/34(3.2)', rating: 6.0, stars: '⭐⭐⭐' },
                    { name: 'Glenn Maxwell', figures: '1/42(4)', rating: 5.0, stars: '⭐⭐' },
                    { name: 'Adam Zampa', figures: '0/35(4)', rating: 5.0, stars: '⭐⭐' }
                ]
            }
        }
    },
    {
        id: 'mr2',
        matchId: 'r2',
        matchTitle: 'ENG vs PAK - 2nd Test',
        date: '2024-10-22',
        venue: 'Multan',
        format: 'test',
        result: 'ENG won by 71 runs',
        team1: 'ENG',
        team2: 'PAK',
        topRated: [
            { name: 'Ben Stokes', team: 'ENG', role: 'All-rounder', performance: '89 & 65', rating: 9.0 },
            { name: 'Joe Root', team: 'ENG', role: 'Batsman', performance: '145 & 42', rating: 8.5 },
            { name: 'Babar Azam', team: 'PAK', role: 'Batsman', performance: '78 & 92', rating: 8.0 }
        ]
    }
];

const playerHistory = {
    'Virat Kohli': [
        { date: '2024-11-02', opponent: 'AUS', score: '82*(53)', rating: 9.5, format: 't20i' },
        { date: '2024-10-28', opponent: 'NZ', score: '67(45)', rating: 8.5, format: 't20i' },
        { date: '2024-10-25', opponent: 'NZ', score: '89(56)', rating: 9.0, format: 't20i' },
        { date: '2024-10-20', opponent: 'BAN', score: '23(28)', rating: 5.5, format: 't20i' },
        { date: '2024-10-18', opponent: 'BAN', score: '12(15)', rating: 4.5, format: 't20i' }
    ],
    'Jasprit Bumrah': [
        { date: '2024-11-02', opponent: 'AUS', score: '3/15(4)', rating: 9.0, format: 't20i' },
        { date: '2024-10-28', opponent: 'NZ', score: '2/22(4)', rating: 8.0, format: 't20i' },
        { date: '2024-10-25', opponent: 'NZ', score: '4/18(4)', rating: 9.5, format: 't20i' },
        { date: '2024-10-20', opponent: 'BAN', score: '1/28(4)', rating: 6.5, format: 't20i' },
        { date: '2024-10-18', opponent: 'BAN', score: '2/25(4)', rating: 7.5, format: 't20i' }
    ]
};

const topRatedPlayers = [
    {
        rank: 1,
        name: 'Virat Kohli',
        team: 'IND',
        flag: '🇮🇳',
        avgRating: 8.7,
        matches: 5,
        ratingsAbove9: 3,
        percentage: 87
    },
    {
        rank: 2,
        name: 'Travis Head',
        team: 'AUS',
        flag: '🇦🇺',
        avgRating: 8.5,
        matches: 6,
        ratingsAbove9: 4,
        percentage: 85
    },
    {
        rank: 3,
        name: 'Jasprit Bumrah',
        team: 'IND',
        flag: '🇮🇳',
        avgRating: 8.3,
        matches: 4,
        ratingsAbove9: 2,
        percentage: 83
    },
    {
        rank: 4,
        name: 'Pat Cummins',
        team: 'AUS',
        flag: '🇦🇺',
        avgRating: 7.9,
        matches: 5,
        ratingsAbove9: 3,
        percentage: 79
    },
    {
        rank: 5,
        name: 'Kane Williamson',
        team: 'NZ',
        flag: '🇳🇿',
        avgRating: 7.8,
        matches: 4,
        ratingsAbove9: 2,
        percentage: 78
    }
];

const teamAverageRatings = [
    { rank: 1, team: 'India', flag: '🇮🇳', avgRating: 7.8, percentage: 78 },
    { rank: 2, team: 'Australia', flag: '🇦🇺', avgRating: 7.5, percentage: 75 },
    { rank: 3, team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', avgRating: 7.2, percentage: 72 },
    { rank: 4, team: 'South Africa', flag: '🇿🇦', avgRating: 7.0, percentage: 70 }
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getMatchRatings = async (filters = {}) => {
    await delay(300);
    let filtered = [...matchRatings];

    if (filters.format && filters.format !== 'all') {
        filtered = filtered.filter(m => m.format === filters.format);
    }

    if (filters.team && filters.team !== 'all') {
        filtered = filtered.filter(m => m.team1 === filters.team || m.team2 === filters.team);
    }

    return filtered;
};

export const getPlayerRatingHistory = async (playerName) => {
    await delay(300);
    return playerHistory[playerName] || [];
};

export const getTopRatedPlayers = async () => {
    await delay(300);
    return topRatedPlayers;
};

export const getTeamAverageRatings = async () => {
    await delay(300);
    return teamAverageRatings;
};