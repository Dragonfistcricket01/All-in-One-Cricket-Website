// Mock data for Fixtures and Results
const upcomingFixtures = [
    {
        id: 'f1',
        tournament: 'ICC T20 World Cup',
        format: 't20i',
        team1: { country: 'IND', name: 'India', flag: '🇮🇳' },
        team2: { country: 'AUS', name: 'Australia', flag: '🇦🇺' },
        date: '2024-11-15',
        time: '19:00',
        venue: 'MCG, Melbourne',
        status: 'upcoming'
    },
    {
        id: 'f2',
        tournament: 'Border-Gavaskar Trophy',
        format: 'test',
        team1: { country: 'IND', name: 'India', flag: '🇮🇳' },
        team2: { country: 'AUS', name: 'Australia', flag: '🇦🇺' },
        date: '2024-11-22',
        time: '09:30',
        venue: 'Optus Stadium, Perth',
        status: 'upcoming'
    },
    {
        id: 'f3',
        tournament: 'ODI Series',
        format: 'odi',
        team1: { country: 'ENG', name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        team2: { country: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
        date: '2024-11-18',
        time: '14:00',
        venue: 'Lord\'s, London',
        status: 'upcoming'
    },
    {
        id: 'f4',
        tournament: 'T20I Series',
        format: 't20i',
        team1: { country: 'PAK', name: 'Pakistan', flag: '🇵🇰' },
        team2: { country: 'RSA', name: 'South Africa', flag: '🇿🇦' },
        date: '2024-11-20',
        time: '18:30',
        venue: 'Gaddafi Stadium, Lahore',
        status: 'upcoming'
    },
    {
        id: 'f5',
        tournament: 'ODI Series',
        format: 'odi',
        team1: { country: 'SL', name: 'Sri Lanka', flag: '🇱🇰' },
        team2: { country: 'BAN', name: 'Bangladesh', flag: '🇧🇩' },
        date: '2024-11-25',
        time: '14:30',
        venue: 'R Premadasa Stadium, Colombo',
        status: 'upcoming'
    }
];

const recentResults = [
    {
        id: 'r1',
        tournament: '3rd T20I',
        format: 't20i',
        team1: {
            country: 'IND',
            name: 'India',
            flag: '🇮🇳',
            score: '183/4',
            overs: '18.2'
        },
        team2: {
            country: 'AUS',
            name: 'Australia',
            flag: '🇦🇺',
            score: '180/7',
            overs: '20'
        },
        date: '2024-11-02',
        venue: 'Perth',
        result: 'India won by 6 wickets',
        winner: 'IND',
        playerOfMatch: 'Virat Kohli',
        status: 'completed',
        scorecard: {
            team1Innings: {
                total: '180/7',
                overs: '20',
                batting: [
                    { name: 'Travis Head', runs: 65, balls: 42, fours: 8, sixes: 2, sr: 154.8, out: 'b Bumrah' },
                    { name: 'Mitchell Marsh', runs: 32, balls: 28, fours: 4, sixes: 1, sr: 114.3, out: 'c Pant b Arshdeep' },
                    { name: 'Glenn Maxwell', runs: 28, balls: 18, fours: 2, sixes: 2, sr: 155.6, out: 'c Rohit b Kuldeep' },
                    { name: 'Marcus Stoinis', runs: 22, balls: 16, fours: 2, sixes: 1, sr: 137.5, out: 'run out' },
                    { name: 'Tim David', runs: 15, balls: 10, fours: 1, sixes: 1, sr: 150.0, out: 'not out' },
                    { name: 'Matthew Wade', runs: 8, balls: 5, fours: 1, sixes: 0, sr: 160.0, out: 'c Hardik b Bumrah' },
                    { name: 'Pat Cummins', runs: 5, balls: 3, fours: 0, sixes: 0, sr: 166.7, out: 'b Arshdeep' },
                    { name: 'Mitchell Starc', runs: 2, balls: 1, fours: 0, sixes: 0, sr: 200.0, out: 'not out' }
                ],
                bowling: [
                    { name: 'Jasprit Bumrah', overs: 4, maidens: 0, runs: 15, wickets: 3, economy: 3.75 },
                    { name: 'Arshdeep Singh', overs: 4, maidens: 0, runs: 28, wickets: 2, economy: 7.00 },
                    { name: 'Kuldeep Yadav', overs: 4, maidens: 0, runs: 35, wickets: 1, economy: 8.75 },
                    { name: 'Hardik Pandya', overs: 3, maidens: 0, runs: 22, wickets: 1, economy: 7.33 },
                    { name: 'Axar Patel', overs: 3, maidens: 0, runs: 38, wickets: 0, economy: 12.67 },
                    { name: 'Washington Sundar', overs: 2, maidens: 0, runs: 28, wickets: 0, economy: 14.00 }
                ],
                extras: { wides: 4, noBalls: 2, byes: 1, legByes: 2, total: 9 },
                fow: [
                    { wicket: 1, score: 45, over: 4.2, player: 'Mitchell Marsh' },
                    { wicket: 2, score: 98, over: 11.3, player: 'Travis Head' },
                    { wicket: 3, score: 125, over: 15.2, player: 'Glenn Maxwell' },
                    { wicket: 4, score: 145, over: 17.4, player: 'Marcus Stoinis' },
                    { wicket: 5, score: 165, over: 19.1, player: 'Matthew Wade' },
                    { wicket: 6, score: 175, over: 19.5, player: 'Pat Cummins' }
                ]
            },
            team2Innings: {
                total: '183/4',
                overs: '18.2',
                batting: [
                    { name: 'Rohit Sharma', runs: 32, balls: 28, fours: 5, sixes: 1, sr: 114.3, out: 'c Starc b Cummins' },
                    { name: 'Virat Kohli', runs: 82, balls: 53, fours: 8, sixes: 2, sr: 154.7, out: 'not out' },
                    { name: 'Suryakumar Yadav', runs: 45, balls: 32, fours: 6, sixes: 2, sr: 140.6, out: 'b Maxwell' },
                    { name: 'KL Rahul', runs: 5, balls: 8, fours: 0, sixes: 0, sr: 62.5, out: 'c Wade b Starc' },
                    { name: 'Hardik Pandya', runs: 18, balls: 12, fours: 1, sixes: 1, sr: 150.0, out: 'not out' }
                ],
                bowling: [
                    { name: 'Mitchell Starc', overs: 4, maidens: 0, runs: 38, wickets: 1, economy: 9.50 },
                    { name: 'Pat Cummins', overs: 3.2, maidens: 0, runs: 34, wickets: 1, economy: 10.20 },
                    { name: 'Glenn Maxwell', overs: 4, maidens: 0, runs: 42, wickets: 1, economy: 10.50 },
                    { name: 'Adam Zampa', overs: 4, maidens: 0, runs: 35, wickets: 0, economy: 8.75 },
                    { name: 'Marcus Stoinis', overs: 3, maidens: 0, runs: 28, wickets: 1, economy: 9.33 }
                ],
                extras: { wides: 3, noBalls: 1, byes: 0, legByes: 2, total: 6 },
                fow: [
                    { wicket: 1, score: 45, over: 4.2, player: 'Rohit Sharma' },
                    { wicket: 2, score: 112, over: 13.0, player: 'Suryakumar Yadav' },
                    { wicket: 3, score: 125, over: 15.3, player: 'KL Rahul' }
                ]
            },
            toss: 'Australia won the toss and elected to bat',
            matchSummary: 'India chased down 181 with 10 balls to spare. Virat Kohli played a match-winning knock.'
        }
    },
    {
        id: 'r2',
        tournament: '2nd Test',
        format: 'test',
        team1: {
            country: 'ENG',
            name: 'England',
            flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            score: '425 & 287',
            overs: '120 & 78'
        },
        team2: {
            country: 'PAK',
            name: 'Pakistan',
            flag: '🇵🇰',
            score: '380 & 261',
            overs: '118 & 89.3'
        },
        date: '2024-10-22',
        venue: 'Multan',
        result: 'England won by 71 runs',
        winner: 'ENG',
        playerOfMatch: 'Ben Stokes',
        status: 'completed'
    },
    {
        id: 'r3',
        tournament: 'ODI Series - 1st Match',
        format: 'odi',
        team1: {
            country: 'NZ',
            name: 'New Zealand',
            flag: '🇳🇿',
            score: '285/8',
            overs: '50'
        },
        team2: {
            country: 'SL',
            name: 'Sri Lanka',
            flag: '🇱🇰',
            score: '256/10',
            overs: '47.2'
        },
        date: '2024-10-30',
        venue: 'Galle',
        result: 'New Zealand won by 29 runs',
        winner: 'NZ',
        playerOfMatch: 'Kane Williamson',
        status: 'completed'
    },
    {
        id: 'r4',
        tournament: 'T20I Series - 2nd Match',
        format: 't20i',
        team1: {
            country: 'RSA',
            name: 'South Africa',
            flag: '🇿🇦',
            score: '189/5',
            overs: '20'
        },
        team2: {
            country: 'WI',
            name: 'West Indies',
            flag: '🇻🇨',
            score: '165/9',
            overs: '20'
        },
        date: '2024-10-28',
        venue: 'Centurion',
        result: 'South Africa won by 24 runs',
        winner: 'RSA',
        playerOfMatch: 'Quinton de Kock',
        status: 'completed'
    }
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getUpcomingFixtures = async (filters = {}) => {
    await delay(300);
    let filtered = [...upcomingFixtures];

    if (filters.format && filters.format !== 'all') {
        filtered = filtered.filter(f => f.format === filters.format);
    }

    if (filters.tournament && filters.tournament !== 'all') {
        filtered = filtered.filter(f => f.tournament.includes(filters.tournament));
    }

    if (filters.team && filters.team !== 'all') {
        filtered = filtered.filter(f =>
            f.team1.country === filters.team || f.team2.country === filters.team
        );
    }

    return filtered;
};

export const getRecentResults = async (filters = {}) => {
    await delay(300);
    let filtered = [...recentResults];

    if (filters.format && filters.format !== 'all') {
        filtered = filtered.filter(f => f.format === filters.format);
    }

    if (filters.result && filters.result !== 'all') {
        if (filters.result === 'won') {
            filtered = filtered.filter(f => f.result.includes('won'));
        } else if (filters.result === 'lost') {
            filtered = filtered.filter(f => f.result.includes('lost'));
        } else if (filters.result === 'draw') {
            filtered = filtered.filter(f => f.result.includes('draw') || f.result.includes('tie'));
        }
    }

    if (filters.team && filters.team !== 'all') {
        filtered = filtered.filter(f =>
            f.team1.country === filters.team || f.team2.country === filters.team
        );
    }

    return filtered;
};

export const getMatchDetails = async (matchId) => {
    await delay(400);
    const match = recentResults.find(m => m.id === matchId);
    return match || null;
};