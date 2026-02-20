import afgFlag from '../assets/flag/afg.png';
import ausFlag from '../assets/flag/aus.png';
import banFlag from '../assets/flag/ban.png';
import engFlag from '../assets/flag/eng.png';
import indFlag from '../assets/flag/ind.png';
import ireFlag from '../assets/flag/ire.png';
import nzFlag from '../assets/flag/nz.png';
import pakFlag from '../assets/flag/pak.png';
import saFlag from '../assets/flag/sa.png';
import slFlag from '../assets/flag/sl.png';
import wiFlag from '../assets/flag/wi.png';

// Mock data for Team Rankings
const teamRankingsData = {
    test: [
        {
            rank: 1,
            team: 'India',
            country: 'IND',
            rating: 122,
            points: 3354,
            matches: 28,
            won: 18,
            lost: 7,
            drawn: 3,
            recentForm: ['W', 'W', 'D', 'W', 'L'],
            image: indFlag,
            color: '#0e71faff'
        },
        {
            rank: 2,
            team: 'Australia',
            country: 'AUS',
            rating: 116,
            points: 3224,
            matches: 28,
            won: 16,
            lost: 8,
            drawn: 4,
            recentForm: ['W', 'L', 'W', 'W', 'W'],
            image: ausFlag,
            color: '#FFC800'
        },
        {
            rank: 3,
            team: 'England',
            country: 'ENG',
            rating: 111,
            points: 2890,
            matches: 26,
            won: 14,
            lost: 9,
            drawn: 3,
            recentForm: ['W', 'W', 'L', 'D', 'W'],
            image: engFlag,
            color: '#0A4595'
        },
        {
            rank: 4,
            team: 'South Africa',
            country: 'RSA',
            rating: 107,
            points: 2783,
            matches: 26,
            won: 13,
            lost: 10,
            drawn: 3,
            recentForm: ['L', 'W', 'W', 'L', 'W'],
            image: saFlag,
            color: '#007A4D'
        },
        {
            rank: 5,
            team: 'New Zealand',
            country: 'NZ',
            rating: 104,
            points: 2496,
            matches: 24,
            won: 12,
            lost: 9,
            drawn: 3,
            recentForm: ['W', 'D', 'L', 'W', 'W'],
            image: nzFlag,
            color: '#000000'
        },
        {
            rank: 6,
            team: 'Pakistan',
            country: 'PAK',
            rating: 97,
            points: 2328,
            matches: 24,
            won: 10,
            lost: 11,
            drawn: 3,
            recentForm: ['L', 'W', 'L', 'D', 'W'],
            image: pakFlag,
            color: '#01411C'
        },
        {
            rank: 7,
            team: 'Sri Lanka',
            country: 'SL',
            rating: 92,
            points: 2116,
            matches: 23,
            won: 9,
            lost: 11,
            drawn: 3,
            recentForm: ['W', 'L', 'L', 'W', 'D'],
            image: slFlag,
            color: '#003DA5'
        },
        {
            rank: 8,
            team: 'West Indies',
            country: 'WI',
            rating: 79,
            points: 1896,
            matches: 24,
            won: 7,
            lost: 14,
            drawn: 3,
            recentForm: ['L', 'L', 'W', 'L', 'D'],
            image: wiFlag,
            color: '#7B0041'
        },
        {
            rank: 9,
            team: 'Bangladesh',
            country: 'BAN',
            rating: 71,
            points: 1562,
            matches: 22,
            won: 5,
            lost: 14,
            drawn: 3,
            recentForm: ['L', 'D', 'L', 'L', 'W'],
            image: banFlag,
            color: '#006A4E'
        },
        {
            rank: 10,
            team: 'Afghanistan',
            country: 'AFG',
            rating: 65,
            points: 780,
            matches: 12,
            won: 3,
            lost: 8,
            drawn: 1,
            recentForm: ['L', 'L', 'W', 'D', 'L'],
            image: afgFlag,
            color: '#D32011'
        }
    ],
    odi: [
        {
            rank: 1,
            team: 'India',
            country: 'IND',
            rating: 119,
            points: 6764,
            matches: 57,
            won: 45,
            lost: 9,
            tied: 1,
            noResult: 2,
            recentForm: ['W', 'W', 'W', 'L', 'W'],
            image: indFlag,
            color: '#0e71faff'
        },
        {
            rank: 2,
            team: 'Australia',
            country: 'AUS',
            rating: 116,
            points: 6245,
            matches: 54,
            won: 40,
            lost: 12,
            tied: 0,
            noResult: 2,
            recentForm: ['W', 'W', 'L', 'W', 'W'],
            image: ausFlag,
            color: '#FFC800'
        },
        {
            rank: 3,
            team: 'South Africa',
            country: 'RSA',
            rating: 113,
            points: 5876,
            matches: 52,
            won: 38,
            lost: 11,
            tied: 1,
            noResult: 2,
            recentForm: ['W', 'L', 'W', 'W', 'W'],
            image: saFlag,
            color: '#007A4D'
        },
        {
            rank: 4,
            team: 'England',
            country: 'ENG',
            rating: 109,
            points: 5634,
            matches: 52,
            won: 36,
            lost: 14,
            tied: 0,
            noResult: 2,
            recentForm: ['W', 'W', 'W', 'L', 'L'],
            image: engFlag,
            color: '#0A4595'
        },
        {
            rank: 5,
            team: 'New Zealand',
            country: 'NZ',
            rating: 106,
            points: 5123,
            matches: 48,
            won: 32,
            lost: 14,
            tied: 0,
            noResult: 2,
            recentForm: ['L', 'W', 'W', 'W', 'L'],
            image: nzFlag,
            color: '#000000'
        },
        {
            rank: 6,
            team: 'Pakistan',
            country: 'PAK',
            rating: 102,
            points: 4896,
            matches: 48,
            won: 30,
            lost: 16,
            tied: 1,
            noResult: 1,
            recentForm: ['W', 'L', 'W', 'W', 'L'],
            image: pakFlag,
            color: '#01411C'
        },
        {
            rank: 7,
            team: 'Sri Lanka',
            country: 'SL',
            rating: 95,
            points: 4332,
            matches: 46,
            won: 26,
            lost: 18,
            tied: 0,
            noResult: 2,
            recentForm: ['L', 'L', 'W', 'L', 'W'],
            image: slFlag,
            color: '#003DA5'
        },
        {
            rank: 8,
            team: 'Bangladesh',
            country: 'BAN',
            rating: 88,
            points: 3784,
            matches: 43,
            won: 21,
            lost: 20,
            tied: 0,
            noResult: 2,
            recentForm: ['L', 'W', 'L', 'L', 'W'],
            image: banFlag,
            color: '#006A4E'
        },
        {
            rank: 9,
            team: 'West Indies',
            country: 'WI',
            rating: 82,
            points: 3452,
            matches: 42,
            won: 18,
            lost: 22,
            tied: 0,
            noResult: 2,
            recentForm: ['L', 'L', 'W', 'L', 'L'],
            image: wiFlag,
            color: '#7B0041'
        },
        {
            rank: 10,
            team: 'Afghanistan',
            country: 'AFG',
            rating: 76,
            points: 2964,
            matches: 39,
            won: 15,
            lost: 22,
            tied: 0,
            noResult: 2,
            recentForm: ['L', 'W', 'L', 'L', 'W'],
            image: afgFlag,
            color: '#D32011'
        }
    ],
    t20i: [
        {
            rank: 1,
            team: 'India',
            country: 'IND',
            rating: 267,
            points: 10147,
            matches: 38,
            won: 30,
            lost: 7,
            tied: 0,
            noResult: 1,
            recentForm: ['W', 'W', 'W', 'L', 'W'],
            image: indFlag,
            color: '#0e71faff'
        },
        {
            rank: 2,
            team: 'England',
            country: 'ENG',
            rating: 263,
            points: 9456,
            matches: 36,
            won: 27,
            lost: 8,
            tied: 0,
            noResult: 1,
            recentForm: ['W', 'L', 'W', 'W', 'W'],
            image: engFlag,
            color: '#0A4595'
        },
        {
            rank: 3,
            team: 'Australia',
            country: 'AUS',
            rating: 258,
            points: 9124,
            matches: 35,
            won: 25,
            lost: 9,
            tied: 0,
            noResult: 1,
            recentForm: ['W', 'W', 'L', 'W', 'W'],
            image: ausFlag,
            color: '#FFC800'
        },
        {
            rank: 4,
            team: 'Pakistan',
            country: 'PAK',
            rating: 254,
            points: 8876,
            matches: 35,
            won: 24,
            lost: 10,
            tied: 0,
            noResult: 1,
            recentForm: ['L', 'W', 'W', 'W', 'L'],
            image: pakFlag,
            color: '#01411C'
        },
        {
            rank: 5,
            team: 'South Africa',
            country: 'RSA',
            rating: 251,
            points: 8532,
            matches: 34,
            won: 23,
            lost: 10,
            tied: 0,
            noResult: 1,
            recentForm: ['W', 'W', 'L', 'W', 'W'],
            image: saFlag,
            color: '#007A4D'
        },
        {
            rank: 6,
            team: 'New Zealand',
            country: 'NZ',
            rating: 244,
            points: 8012,
            matches: 33,
            won: 21,
            lost: 11,
            tied: 0,
            noResult: 1,
            recentForm: ['W', 'L', 'W', 'L', 'W'],
            image: nzFlag,
            color: '#000000'
        },
        {
            rank: 7,
            team: 'West Indies',
            country: 'WI',
            rating: 237,
            points: 7534,
            matches: 32,
            won: 19,
            lost: 12,
            tied: 0,
            noResult: 1,
            recentForm: ['L', 'W', 'W', 'L', 'W'],
            image: wiFlag,
            color: '#7B0041'
        },
        {
            rank: 8,
            team: 'Sri Lanka',
            country: 'SL',
            rating: 229,
            points: 6876,
            matches: 30,
            won: 17,
            lost: 12,
            tied: 0,
            noResult: 1,
            recentForm: ['L', 'L', 'W', 'W', 'L'],
            image: slFlag,
            color: '#003DA5'
        },
        {
            rank: 9,
            team: 'Bangladesh',
            country: 'BAN',
            rating: 218,
            points: 6234,
            matches: 29,
            won: 15,
            lost: 13,
            tied: 0,
            noResult: 1,
            recentForm: ['L', 'W', 'L', 'W', 'L'],
            image: banFlag,
            color: '#006A4E'
        },
        {
            rank: 10,
            team: 'Afghanistan',
            country: 'AFG',
            rating: 211,
            points: 5876,
            matches: 28,
            won: 14,
            lost: 13,
            tied: 0,
            noResult: 1,
            recentForm: ['W', 'L', 'L', 'W', 'L'],
            image: afgFlag,
            color: '#D32011'
        }
    ],
    wtc: [
        {
            rank: 1,
            team: 'Australia',
            country: 'AUS',
            rating: 124,
            points: 3732,
            matches: 30,
            won: 21,
            lost: 7,
            drawn: 2,
            pointsPercentage: 62.50,
            recentForm: ['W', 'W', 'L', 'W', 'W'],
            image: ausFlag,
            color: '#FFC800'
        },
        {
            rank: 2,
            team: 'India',
            country: 'IND',
            rating: 122,
            points: 3881,
            matches: 36,
            won: 24,
            lost: 10,
            drawn: 2,
            pointsPercentage: 54.17,
            recentForm: ['W', 'W', 'D', 'W', 'L'],
            image: indFlag,
            color: '#0e71faff'
        },
        {
            rank: 3,
            team: 'England',
            country: 'ENG',
            rating: 112,
            points: 4469,
            matches: 40,
            won: 28,
            lost: 10,
            drawn: 2,
            pointsPercentage: 55.86,
            recentForm: ['W', 'W', 'L', 'D', 'W'],
            image: engFlag,
            color: '#0A4595'
        },
        {
            rank: 4,
            team: 'South Africa',
            country: 'RSA',
            rating: 111,
            points: 3107,
            matches: 28,
            won: 18,
            lost: 8,
            drawn: 2,
            pointsPercentage: 55.56,
            recentForm: ['L', 'W', 'W', 'L', 'W'],
            image: saFlag,
            color: '#007A4D'
        },
        {
            rank: 5,
            team: 'New Zealand',
            country: 'NZ',
            rating: 96,
            points: 2409,
            matches: 25,
            won: 14,
            lost: 9,
            drawn: 2,
            pointsPercentage: 48.18,
            recentForm: ['W', 'D', 'L', 'W', 'W'],
            image: nzFlag,
            color: '#000000'
        },
        {
            rank: 6,
            team: 'Sri Lanka',
            country: 'SL',
            rating: 88,
            points: 2364,
            matches: 27,
            won: 13,
            lost: 12,
            drawn: 2,
            pointsPercentage: 43.83,
            recentForm: ['W', 'L', 'L', 'W', 'D'],
            image: slFlag,
            color: '#003DA5'
        },
        {
            rank: 7,
            team: 'Pakistan',
            country: 'PAK',
            rating: 82,
            points: 2050,
            matches: 25,
            won: 11,
            lost: 12,
            drawn: 2,
            pointsPercentage: 41.00,
            recentForm: ['L', 'W', 'L', 'D', 'W'],
            image: pakFlag,
            color: '#01411C'
        },
        {
            rank: 8,
            team: 'West Indies',
            country: 'WI',
            rating: 70,
            points: 2036,
            matches: 29,
            won: 11,
            lost: 16,
            drawn: 2,
            pointsPercentage: 35.17,
            recentForm: ['L', 'L', 'W', 'L', 'D'],
            image: wiFlag,
            color: '#7B0041'
        },
        {
            rank: 9,
            team: 'Bangladesh',
            country: 'BAN',
            rating: 61,
            points: 1648,
            matches: 27,
            won: 7,
            lost: 18,
            drawn: 2,
            pointsPercentage: 30.56,
            recentForm: ['L', 'D', 'L', 'L', 'W'],
            image: banFlag,
            color: '#006A4E'
        },
        {
            rank: 10,
            team: 'Ireland',
            country: 'IRE',
            rating: 30,
            points: 152,
            matches: 5,
            won: 1,
            lost: 4,
            drawn: 0,
            pointsPercentage: 15.20,
            recentForm: ['L', 'L', 'W', 'L', 'L'],
            image: ireFlag,
            color: '#169B62'
        }
    ]
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API Functions
export const getAllTeamRankings = async (format = 'all') => {
    await delay(500);
    if (format === 'all') {
        return {
            test: teamRankingsData.test,
            odi: teamRankingsData.odi,
            t20i: teamRankingsData.t20i
        };
    }
    return teamRankingsData[format] || [];
};

export const getTeamRankingsByFormat = async (format) => {
    await delay(300);
    return teamRankingsData[format] || [];
};

export const searchTeams = async (query, format = 'all') => {
    await delay(400);

    if (format === 'all') {
        const results = {};
        Object.keys(teamRankingsData).forEach(fmt => {
            results[fmt] = teamRankingsData[fmt].filter(team =>
                team.team.toLowerCase().includes(query.toLowerCase()) ||
                team.country.toLowerCase().includes(query.toLowerCase())
            );
        });
        return results;
    }

    return teamRankingsData[format].filter(team =>
        team.team.toLowerCase().includes(query.toLowerCase()) ||
        team.country.toLowerCase().includes(query.toLowerCase())
    );
};

export const getTeamByCountry = async (country, format) => {
    await delay(300);
    return teamRankingsData[format].find(team =>
        team.country.toLowerCase() === country.toLowerCase()
    );
};

export const getTopTeams = async (format, limit = 5) => {
    await delay(300);
    return teamRankingsData[format].slice(0, limit);
};