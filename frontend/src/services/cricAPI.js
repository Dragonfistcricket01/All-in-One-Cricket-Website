const API_KEY = process.env.REACT_APP_CRICAPI_KEY /*||**************** */ /*  <--Your cric api token  */
const BASE_URL = 'https://api.cricapi.com/v1';

// Mock live match data (for development without API)
const mockLiveMatches = [
    {
        id: 'live1',
        name: 'India vs Australia, 3rd T20I',
        matchType: 't20',
        status: 'Live',
        venue: 'Perth Stadium',
        date: '2024-11-02',
        teams: ['India', 'Australia'],
        score: [
            {
                r: 145,
                w: 3,
                o: 16.2,
                inning: 'India Inning 1'
            },
            {
                r: 180,
                w: 7,
                o: 20,
                inning: 'Australia Inning 1'
            }
        ]
    }
];

const mockMatchDetails = {
    live1: {
        id: 'live1',
        name: 'India vs Australia, 3rd T20I',
        matchType: 't20',
        status: 'Live',
        venue: 'Perth Stadium',
        date: '2024-11-02',
        teams: ['India', 'Australia'],
        teamInfo: [
            { name: 'India', shortname: 'IND', img: '🇮🇳' },
            { name: 'Australia', shortname: 'AUS', img: '🇦🇺' }
        ],
        score: [
            {
                r: 180,
                w: 7,
                o: 20,
                inning: 'Australia Inning 1',
                extras: 9
            },
            {
                r: 145,
                w: 3,
                o: 16.2,
                inning: 'India Inning 1',
                extras: 6
            }
        ],
        currentBatsmen: [
            {
                name: 'Virat Kohli',
                r: 67,
                b: 52,
                '4s': 8,
                '6s': 2,
                sr: 128.8
            },
            {
                name: 'Hardik Pandya',
                r: 18,
                b: 12,
                '4s': 1,
                '6s': 1,
                sr: 150.0
            }
        ],
        currentBowler: {
            name: 'Mitchell Starc',
            o: 3.2,
            m: 0,
            r: 34,
            w: 1,
            eco: 10.20
        },
        recentOvers: [6, 8, 12, 4, 9, 7],
        commentary: [
            {
                over: 16.2,
                bowler: 'M Starc',
                batsman: 'V Kohli',
                runs: 4,
                commentary: 'FOUR! Short ball, pulled magnificently over square leg for a boundary'
            },
            {
                over: 16.1,
                bowler: 'M Starc',
                batsman: 'V Kohli',
                runs: 1,
                commentary: 'Single to mid-wicket'
            },
            {
                over: 15.6,
                bowler: 'P Cummins',
                batsman: 'H Pandya',
                runs: 0,
                commentary: 'DOT ball, defended back to bowler'
            },
            {
                over: 15.5,
                bowler: 'P Cummins',
                batsman: 'H Pandya',
                runs: 6,
                commentary: 'SIX! What a shot! Smashed over long-on'
            },
            {
                over: 15.4,
                bowler: 'P Cummins',
                batsman: 'S Yadav',
                runs: 'W',
                commentary: 'WICKET! Caught at deep mid-wicket'
            }
        ],
        partnerships: [
            { wicket: 'Current', runs: 67, balls: 48, batsmen: 'Kohli-Pandya' },
            { wicket: 2, runs: 67, balls: 54, batsmen: 'Kohli-Yadav' },
            { wicket: 1, runs: 45, balls: 32, batsmen: 'Rohit-Kohli' }
        ],
        fallOfWickets: [
            { wicket: 1, score: 45, over: 4.2, player: 'Rohit Sharma' },
            { wicket: 2, score: 112, over: 13.0, player: 'Suryakumar Yadav' },
            { wicket: 3, score: 125, over: 15.3, player: 'KL Rahul' }
        ],
        matchInfo: {
            target: 181,
            needed: 36,
            balls: 22,
            crr: 8.87,
            rrr: 9.82,
            situation: 'Need 36 runs from 22 balls'
        }
    }
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const cricAPI = {
    // Get all live matches
    getLiveMatches: async () => {
        try {
            await delay(500);
            // In production, use actual API:
            // const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/cricapi/matches/current`);
            // return response.json();

            // For now, return mock data
            return {
                status: 'success',
                data: mockLiveMatches
            };
        } catch (error) {
            console.error('Error fetching live matches:', error);
            return { status: 'error', data: [] };
        }
    },

    // Get specific match details
    getMatchDetails: async (matchId) => {
        try {
            await delay(400);
            // In production:
            // const response = await fetch(`${BASE_URL}/match_info?apikey=${API_KEY}&id=${matchId}`);
            // return response.json();

            return {
                status: 'success',
                data: mockMatchDetails[matchId] || null
            };
        } catch (error) {
            console.error('Error fetching match details:', error);
            return { status: 'error', data: null };
        }
    },

    // Get live score for a match
    getLiveScore: async (matchId) => {
        try {
            await delay(300);
            // In production:
            // const response = await fetch(`${BASE_URL}/match_scorecard?apikey=${API_KEY}&id=${matchId}`);
            // return response.json();

            // Simulate live updates by slightly changing scores
            const match = { ...mockMatchDetails[matchId] };
            if (match && match.score && match.score[1]) {
                // Randomly add 0-6 runs to simulate live scoring
                const additionalRuns = Math.floor(Math.random() * 7);
                match.score[1].r += additionalRuns;

                // Update current batsman
                if (match.currentBatsmen && match.currentBatsmen[0]) {
                    match.currentBatsmen[0].r += additionalRuns;
                    match.currentBatsmen[0].b += 1;
                    match.currentBatsmen[0].sr = ((match.currentBatsmen[0].r / match.currentBatsmen[0].b) * 100).toFixed(1);
                }
            }

            return {
                status: 'success',
                data: match
            };
        } catch (error) {
            console.error('Error fetching live score:', error);
            return { status: 'error', data: null };
        }
    }
};

// Custom hook for live score polling
export const useLiveScore = (matchId, interval = 10000) => {
    const [score, setScore] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if (!matchId) return;

        const fetchScore = async () => {
            try {
                const result = await cricAPI.getLiveScore(matchId);
                if (result.status === 'success') {
                    setScore(result.data);
                    setLoading(false);
                } else {
                    setError('Failed to fetch score');
                    setLoading(false);
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        // Initial fetch
        fetchScore();

        // Set up polling
        const intervalId = setInterval(fetchScore, interval);

        // Cleanup
        return () => clearInterval(intervalId);
    }, [matchId, interval]);

    return { score, loading, error };
};