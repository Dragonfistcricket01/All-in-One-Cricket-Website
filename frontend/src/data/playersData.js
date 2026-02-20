export const players = [
    {
        id: 1,
        name: 'Virat Kohli',
        country: 'India',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=400&fit=crop',
        age: 35,
        debut: {
            test: '2011',
            odi: '2008',
            t20: '2010'
        },
        stats: {
            test: { matches: 113, runs: 8848, average: 49.16, centuries: 29, fifties: 30, highScore: 254 },
            odi: { matches: 292, runs: 13906, average: 58.18, centuries: 50, fifties: 72, highScore: 183 },
            t20: { matches: 117, runs: 4008, average: 52.73, centuries: 1, fifties: 37, highScore: 122 }
        },
        ranking: {
            test: 15,
            odi: 5,
            t20: 12
        },
        bio: 'Virat Kohli is an Indian international cricketer and former captain of the Indian national team. Widely regarded as one of the greatest batsmen of all time, Kohli is known for his aggressive batting style and exceptional fitness.',
        achievements: [
            'ICC ODI Player of the Year (2012, 2017, 2018)',
            'ICC Test Player of the Year (2018)',
            'Wisden Leading Cricketer (2016, 2017, 2018)',
            '50+ ODI centuries',
            'Fastest to 8,000, 9,000, 10,000, 11,000, 12,000 and 13,000 ODI runs'
        ]
    },
    {
        id: 2,
        name: 'Steve Smith',
        country: 'Australia',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm leg break',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=400&fit=crop',
        age: 34,
        debut: {
            test: '2010',
            odi: '2010',
            t20: '2010'
        },
        stats: {
            test: { matches: 105, runs: 9685, average: 58.63, centuries: 32, fifties: 41, highScore: 239 },
            odi: { matches: 155, runs: 5022, average: 43.73, centuries: 12, fifties: 29, highScore: 164 },
            t20: { matches: 62, runs: 794, average: 25.61, centuries: 0, fifties: 2, highScore: 90 }
        },
        ranking: {
            test: 3,
            odi: 18,
            t20: 45
        },
        bio: 'Steve Smith is an Australian cricketer and former captain. Known for his unorthodox technique, he is considered one of the best Test batsmen of the modern era.',
        achievements: [
            'ICC Test Player of the Year (2015, 2017)',
            'Wisden Leading Cricketer (2015)',
            'Fastest Australian to 7,000 Test runs',
            '32 Test centuries',
            'Former Australian captain'
        ]
    },
    {
        id: 3,
        name: 'Kane Williamson',
        country: 'New Zealand',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off break',
        image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=400&h=400&fit=crop',
        age: 33,
        debut: {
            test: '2010',
            odi: '2010',
            t20: '2010'
        },
        stats: {
            test: { matches: 100, runs: 8743, average: 54.64, centuries: 32, fifties: 35, highScore: 251 },
            odi: { matches: 161, runs: 6554, average: 47.48, centuries: 13, fifties: 42, highScore: 148 },
            t20: { matches: 93, runs: 2369, average: 32.59, centuries: 0, fifties: 17, highScore: 95 }
        },
        ranking: {
            test: 8,
            odi: 12,
            t20: 28
        },
        bio: 'Kane Williamson is a New Zealand cricketer and captain. Known for his calm demeanor and classical batting technique, he is one of the most respected players in world cricket.',
        achievements: [
            'ICC ODI Player of the Year (2015)',
            'New Zealand Player of the Year (multiple times)',
            'Led NZ to WTC Final (2021)',
            'World Cup finalist (2019)',
            'Fastest NZ batsman to 6,000 Test runs'
        ]
    },
    {
        id: 4,
        name: 'Babar Azam',
        country: 'Pakistan',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off break',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=400&fit=crop',
        age: 29,
        debut: {
            test: '2016',
            odi: '2015',
            t20: '2016'
        },
        stats: {
            test: { matches: 53, runs: 3960, average: 45.98, centuries: 10, fifties: 26, highScore: 196 },
            odi: { matches: 114, runs: 5729, average: 56.72, centuries: 19, fifties: 31, highScore: 158 },
            t20: { matches: 119, runs: 3985, average: 41.51, centuries: 3, fifties: 33, highScore: 122 }
        },
        ranking: {
            test: 11,
            odi: 3,
            t20: 4
        },
        bio: 'Babar Azam is a Pakistani cricketer and current captain across all formats. Known for his elegant strokeplay and consistency, he is considered one of the best batsmen in modern cricket.',
        achievements: [
            'ICC ODI Player of the Year (2022)',
            'Fastest to 14 ODI centuries',
            'Most runs in T20Is in a calendar year',
            'Pakistan captain across all formats',
            'Number 1 ODI batsman (2021-2023)'
        ]
    },
    {
        id: 5,
        name: 'Joe Root',
        country: 'England',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off break',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=400&fit=crop',
        age: 33,
        debut: {
            test: '2012',
            odi: '2013',
            t20: '2012'
        },
        stats: {
            test: { matches: 144, runs: 12377, average: 50.31, centuries: 33, fifties: 63, highScore: 254 },
            odi: { matches: 169, runs: 6323, average: 47.55, centuries: 16, fifties: 39, highScore: 133 },
            t20: { matches: 32, runs: 893, average: 35.72, centuries: 0, fifties: 5, highScore: 90 }
        },
        ranking: {
            test: 6,
            odi: 22,
            t20: 67
        },
        bio: 'Joe Root is an English cricketer and former captain. One of England\'s greatest batsmen, Root has scored more Test runs than any other English player.',
        achievements: [
            'England\'s leading Test run-scorer',
            'ICC Test Player of the Year (2021)',
            'Most Test centuries by an English batsman',
            '33 Test centuries',
            'Former England captain'
        ]
    },
    {
        id: 6,
        name: 'Rohit Sharma',
        country: 'India',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off break',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=400&fit=crop',
        age: 37,
        debut: {
            test: '2013',
            odi: '2007',
            t20: '2007'
        },
        stats: {
            test: { matches: 59, runs: 4301, average: 46.25, centuries: 11, fifties: 17, highScore: 212 },
            odi: { matches: 262, runs: 10866, average: 49.16, centuries: 31, fifties: 56, highScore: 264 },
            t20: { matches: 148, runs: 3974, average: 31.32, centuries: 5, fifties: 29, highScore: 118 }
        },
        ranking: {
            test: 9,
            odi: 7,
            t20: 15
        },
        bio: 'Rohit Sharma is an Indian cricketer and current captain across formats. Known as "Hitman" for his explosive batting, he holds the record for the highest individual score in ODIs (264).',
        achievements: [
            'ICC ODI Player of the Year (2019)',
            'Only player with 3 ODI double centuries',
            'Highest ODI score (264)',
            '5 centuries in single World Cup',
            'IPL\'s most successful captain (5 titles)'
        ]
    },
    {
        id: 7,
        name: 'Ben Stokes',
        country: 'England',
        role: 'All-rounder',
        battingStyle: 'Left-hand bat',
        bowlingStyle: 'Right-arm fast-medium',
        image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=400&h=400&fit=crop',
        age: 33,
        debut: {
            test: '2013',
            odi: '2011',
            t20: '2011'
        },
        stats: {
            test: { matches: 103, runs: 6377, average: 35.77, centuries: 13, fifties: 30, highScore: 258 },
            odi: { matches: 113, runs: 3019, average: 38.96, centuries: 3, fifties: 21, highScore: 102 },
            t20: { matches: 38, runs: 352, average: 15.30, centuries: 0, fifties: 0, highScore: 47 }
        },
        ranking: {
            test: 20,
            odi: 35,
            t20: 88
        },
        bio: 'Ben Stokes is an English all-rounder and Test captain. Known for match-winning performances in pressure situations, he played pivotal roles in England\'s 2019 World Cup and 2022 T20 World Cup victories.',
        achievements: [
            'ICC Player of the Year (2019)',
            'World Cup winner (2019, 2022)',
            'Headingley miracle (2019 Ashes)',
            'England Test captain',
            'Wisden Leading Cricketer (2019)'
        ]
    },
    {
        id: 8,
        name: 'Jasprit Bumrah',
        country: 'India',
        role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=400&fit=crop',
        age: 30,
        debut: {
            test: '2018',
            odi: '2016',
            t20: '2016'
        },
        stats: {
            test: { matches: 36, wickets: 159, average: 20.69, bestBowling: '6/27', fiveWickets: 10 },
            odi: { matches: 89, wickets: 149, average: 23.55, bestBowling: '6/19', fiveWickets: 3 },
            t20: { matches: 70, wickets: 89, average: 19.68, bestBowling: '5/4', fiveWickets: 1 }
        },
        ranking: {
            test: 2,
            odi: 4,
            t20: 7
        },
        bio: 'Jasprit Bumrah is an Indian fast bowler known for his unique bowling action and exceptional death bowling skills. He is considered one of the best fast bowlers across all formats.',
        achievements: [
            'Fastest Indian to 100 Test wickets',
            'ICC Test Player of the Year nominee',
            'Best T20I bowling figures (5/4)',
            'IPL\'s best death bowler',
            'Hat-trick in Test cricket'
        ]
    }
];

export const teams = [
    {
        id: 1,
        name: 'India',
        flag: '🇮🇳',
        ranking: { test: 1, odi: 1, t20: 2 },
        captain: 'Rohit Sharma',
        coach: 'Rahul Dravid',
        stats: {
            test: { matches: 579, won: 178, lost: 178, draw: 223, winRate: 30.74 },
            odi: { matches: 1056, won: 556, lost: 440, winRate: 52.65 },
            t20: { matches: 222, won: 145, lost: 69, winRate: 65.31 }
        },
        worldCups: {
            odi: 2,
            t20: 1,
            champions: ['1983 ODI WC', '2007 T20 WC', '2011 ODI WC']
        }
    },
    {
        id: 2,
        name: 'Australia',
        flag: '🇦🇺',
        ranking: { test: 2, odi: 3, t20: 5 },
        captain: 'Pat Cummins',
        coach: 'Andrew McDonald',
        stats: {
            test: { matches: 867, won: 406, lost: 237, draw: 224, winRate: 46.83 },
            odi: { matches: 998, won: 609, lost: 346, winRate: 61.02 },
            t20: { matches: 180, won: 103, lost: 72, winRate: 57.22 }
        },
        worldCups: {
            odi: 6,
            t20: 1,
            champions: ['1987, 1999, 2003, 2007, 2015, 2023 ODI WC', '2021 T20 WC']
        }
    },
    {
        id: 3,
        name: 'England',
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        ranking: { test: 4, odi: 4, t20: 3 },
        captain: 'Ben Stokes',
        coach: 'Brendon McCullum',
        stats: {
            test: { matches: 1086, won: 403, lost: 330, draw: 353, winRate: 37.11 },
            odi: { matches: 795, won: 409, lost: 337, winRate: 51.45 },
            t20: { matches: 193, won: 105, lost: 81, winRate: 54.40 }
        },
        worldCups: {
            odi: 1,
            t20: 2,
            champions: ['2019 ODI WC', '2010 T20 WC', '2022 T20 WC']
        }
    },
    {
        id: 4,
        name: 'Pakistan',
        flag: '🇵🇰',
        ranking: { test: 6, odi: 5, t20: 4 },
        captain: 'Babar Azam',
        coach: 'Grant Bradburn',
        stats: {
            test: { matches: 452, won: 148, lost: 135, draw: 169, winRate: 32.74 },
            odi: { matches: 971, won: 515, lost: 420, winRate: 53.04 },
            t20: { matches: 235, won: 143, lost: 84, winRate: 60.85 }
        },
        worldCups: {
            odi: 1,
            t20: 1,
            champions: ['1992 ODI WC', '2009 T20 WC']
        }
    },
    {
        id: 5,
        name: 'New Zealand',
        flag: '🇳🇿',
        ranking: { test: 3, odi: 6, t20: 6 },
        captain: 'Kane Williamson',
        coach: 'Gary Stead',
        stats: {
            test: { matches: 478, won: 112, lost: 195, draw: 171, winRate: 23.43 },
            odi: { matches: 815, won: 388, lost: 384, winRate: 47.61 },
            t20: { matches: 199, won: 98, lost: 95, winRate: 49.25 }
        },
        worldCups: {
            odi: 0,
            t20: 0,
            champions: ['WTC Winner 2021']
        }
    }
];