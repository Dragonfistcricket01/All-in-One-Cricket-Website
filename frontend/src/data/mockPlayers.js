// Import all player images
import vk18 from '../assets/player_profile/vk18.png';
import ss49 from '../assets/player_profile/ss49.png';
import kw22 from '../assets/player_profile/kw22.png';
import ba56 from '../assets/player_profile/ba56.png';
import jr03 from '../assets/player_profile/jr03.png';
import rs45 from '../assets/player_profile/rs45.png';
import sah75 from '../assets/player_profile/sah75.png';
import ssa40 from '../assets/player_profile/ssa40.png';
import mdr16 from '../assets/player_profile/mdr16.png';
import mdn7 from '../assets/player_profile/mdn7.png';
import mr15 from '../assets/player_profile/mr15.png';
import gm32 from '../assets/player_profile/gm32.png';
import rg21 from '../assets/player_profile/rg21.png';
import ta03 from '../assets/player_profile/ta03.png';
import rk19 from '../assets/player_profile/rk19.png';


// Import all flag images
import indFlag from '../assets/flag/ind.png';
import ausFlag from '../assets/flag/aus.png';
import nzFlag from '../assets/flag/nz.png';
import pakFlag from '../assets/flag/pak.png';
import engFlag from '../assets/flag/eng.png';
import banFlag from '../assets/flag/ban.png';
import afgFlag from '../assets/flag/afg.png';

const mockPlayers = {
    "players": [
        {
            "id": "1",
            "name": "Virat Kohli",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "role": "Batsman",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm medium",
            "jerseyNumber": 18,
            "age": 35,
            "dateOfBirth": "1988-11-05",
            "image": vk18,
            "debut": {
                "test": "2011-06-20",
                "odi": "2008-08-18",
                "t20i": "2010-06-12"
            },
            "careerStats": {
                "test": {
                    "matches": 113,
                    "innings": 197,
                    "runs": 8848,
                    "average": 49.15,
                    "strikeRate": 54.97,
                    "highestScore": "254*",
                    "centuries": 29,
                    "halfCenturies": 30,
                    "fours": 896,
                    "sixes": 23,
                    "notOuts": 11,
                    "ducks": 8,
                    "ballsFaced": 16099,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 115,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 292,
                    "innings": 283,
                    "runs": 13848,
                    "average": 58.18,
                    "strikeRate": 93.54,
                    "highestScore": "183",
                    "centuries": 50,
                    "halfCenturies": 72,
                    "fours": 1234,
                    "sixes": 158,
                    "notOuts": 45,
                    "ducks": 6,
                    "ballsFaced": 14802,
                    "wickets": 4,
                    "bowlingAverage": 166.25,
                    "economy": 6.14,
                    "catches": 149,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 125,
                    "innings": 117,
                    "runs": 4188,
                    "average": 52.73,
                    "strikeRate": 137.96,
                    "highestScore": "122*",
                    "centuries": 1,
                    "halfCenturies": 38,
                    "fours": 356,
                    "sixes": 117,
                    "notOuts": 38,
                    "ducks": 1,
                    "ballsFaced": 3035,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 64,
                    "stumpings": 0
                }
            },
            "achievements": [
                "ICC ODI Player of the Year (2012, 2017, 2018)",
                "Sir Garfield Sobers Trophy (2017, 2018)",
                "Wisden Leading Cricketer in the World (2016, 2017, 2018)",
                "Fastest to 8,000, 9,000, 10,000, 11,000, 12,000, and 13,000 ODI runs",
                "Most centuries in ODI cricket while chasing (27)",
                "Most double centuries in Test cricket as captain (7)"
            ],
            "milestones": [
                {
                    "date": "2008-08-18",
                    "title": "ODI Debut",
                    "description": "Made ODI debut against Sri Lanka"
                },
                {
                    "date": "2011-06-20",
                    "title": "Test Debut",
                    "description": "Made Test debut against West Indies"
                },
                {
                    "date": "2012-12-31",
                    "title": "First ODI Century",
                    "description": "Scored 106 vs Sri Lanka in Hobart"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-20",
                    "format": "Test",
                    "opponent": "Australia",
                    "venue": "Melbourne",
                    "score": "87 (145)",
                    "result": "Won by 5 wickets"
                }
            ]
        },
        {
            "id": "2",
            "name": "Steve Smith",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "role": "Batsman",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm leg spin",
            "jerseyNumber": 49,
            "age": 34,
            "dateOfBirth": "1989-06-02",
            "image": ss49,
            "debut": {
                "test": "2010-07-13",
                "odi": "2010-02-19",
                "t20i": "2010-02-06"
            },
            "careerStats": {
                "test": {
                    "matches": 105,
                    "innings": 193,
                    "runs": 9685,
                    "average": 56.97,
                    "strikeRate": 56.06,
                    "highestScore": "239",
                    "centuries": 32,
                    "halfCenturies": 41,
                    "fours": 1086,
                    "sixes": 43,
                    "notOuts": 23,
                    "ducks": 8,
                    "ballsFaced": 17276,
                    "wickets": 17,
                    "bowlingAverage": 54.82,
                    "economy": 3.21,
                    "catches": 197,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 155,
                    "innings": 146,
                    "runs": 5082,
                    "average": 44.12,
                    "strikeRate": 87.86,
                    "highestScore": "164",
                    "centuries": 12,
                    "halfCenturies": 29,
                    "fours": 456,
                    "sixes": 86,
                    "notOuts": 31,
                    "ducks": 4,
                    "ballsFaced": 5783,
                    "wickets": 29,
                    "bowlingAverage": 49.55,
                    "economy": 5.42,
                    "catches": 74,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 67,
                    "innings": 62,
                    "runs": 1093,
                    "average": 27.32,
                    "strikeRate": 128.76,
                    "highestScore": "90",
                    "centuries": 0,
                    "halfCenturies": 7,
                    "fours": 85,
                    "sixes": 38,
                    "notOuts": 22,
                    "ducks": 2,
                    "ballsFaced": 849,
                    "wickets": 8,
                    "bowlingAverage": 28.25,
                    "economy": 7.32,
                    "catches": 28,
                    "stumpings": 0
                }
            },
            "achievements": [
                "ICC Test Player of the Year (2015, 2017)",
                "Allan Border Medal (2015, 2018, 2021)",
                "Wisden Leading Cricketer in the World (2015)",
                "Fastest Australian to 7,000 Test runs"
            ],
            "milestones": [
                {
                    "date": "2010-07-13",
                    "title": "Test Debut",
                    "description": "Made Test debut against Pakistan"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-20",
                    "format": "Test",
                    "opponent": "India",
                    "venue": "Melbourne",
                    "score": "145 (276)",
                    "result": "Lost by 5 wickets"
                }
            ]
        },
        {
            "id": "3",
            "name": "Kane Williamson",
            "country": "New Zealand",
            "flag": nzFlag,
            "flagEmoji": "🇳🇿",
            "role": "Batsman",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm off break",
            "jerseyNumber": 22,
            "age": 34,
            "dateOfBirth": "1990-08-08",
            "image": kw22,
            "debut": {
                "test": "2010-11-24",
                "odi": "2010-08-10",
                "t20i": "2011-02-25"
            },
            "careerStats": {
                "test": {
                    "matches": 98,
                    "innings": 179,
                    "runs": 8743,
                    "average": 54.33,
                    "strikeRate": 51.42,
                    "highestScore": "251",
                    "centuries": 32,
                    "halfCenturies": 34,
                    "fours": 1012,
                    "sixes": 22,
                    "notOuts": 18,
                    "ducks": 7,
                    "ballsFaced": 17003,
                    "wickets": 2,
                    "bowlingAverage": 108.00,
                    "economy": 4.05,
                    "catches": 141,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 169,
                    "innings": 161,
                    "runs": 6949,
                    "average": 47.58,
                    "strikeRate": 82.21,
                    "highestScore": "148",
                    "centuries": 16,
                    "halfCenturies": 42,
                    "fours": 641,
                    "sixes": 93,
                    "notOuts": 15,
                    "ducks": 4,
                    "ballsFaced": 8453,
                    "wickets": 37,
                    "bowlingAverage": 36.43,
                    "economy": 5.13,
                    "catches": 95,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 98,
                    "innings": 91,
                    "runs": 2369,
                    "average": 32.60,
                    "strikeRate": 127.72,
                    "highestScore": "95",
                    "centuries": 0,
                    "halfCenturies": 18,
                    "fours": 212,
                    "sixes": 68,
                    "notOuts": 18,
                    "ducks": 3,
                    "ballsFaced": 1855,
                    "wickets": 12,
                    "bowlingAverage": 32.41,
                    "economy": 7.45,
                    "catches": 51,
                    "stumpings": 0
                }
            },
            "achievements": [
                "ICC Spirit of Cricket Award (2019)",
                "Led New Zealand to first WTC final (2021)",
                "Sir Richard Hadlee Medal (2013, 2015, 2016, 2020)"
            ],
            "milestones": [
                {
                    "date": "2010-11-24",
                    "title": "Test Debut",
                    "description": "Made Test debut against India"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-18",
                    "format": "Test",
                    "opponent": "England",
                    "venue": "Lord's",
                    "score": "134 (245)",
                    "result": "Won by 8 wickets"
                }
            ]
        },
        {
            "id": "4",
            "name": "Babar Azam",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "role": "Batsman",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm off break",
            "jerseyNumber": 56,
            "age": 30,
            "dateOfBirth": "1994-10-15",
            "image": ba56,
            "debut": {
                "test": "2016-10-13",
                "odi": "2015-05-31",
                "t20i": "2016-09-01"
            },
            "careerStats": {
                "test": {
                    "matches": 56,
                    "innings": 98,
                    "runs": 4276,
                    "average": 45.01,
                    "strikeRate": 53.78,
                    "highestScore": "196",
                    "centuries": 10,
                    "halfCenturies": 27,
                    "fours": 512,
                    "sixes": 12,
                    "notOuts": 3,
                    "ducks": 3,
                    "ballsFaced": 7950,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 48,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 119,
                    "innings": 115,
                    "runs": 5729,
                    "average": 56.42,
                    "strikeRate": 88.52,
                    "highestScore": "158",
                    "centuries": 19,
                    "halfCenturies": 31,
                    "fours": 542,
                    "sixes": 73,
                    "notOuts": 14,
                    "ducks": 1,
                    "ballsFaced": 6472,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 51,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 122,
                    "innings": 118,
                    "runs": 4192,
                    "average": 41.50,
                    "strikeRate": 129.43,
                    "highestScore": "122",
                    "centuries": 3,
                    "halfCenturies": 33,
                    "fours": 341,
                    "sixes": 94,
                    "notOuts": 17,
                    "ducks": 2,
                    "ballsFaced": 3238,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 57,
                    "stumpings": 0
                }
            },
            "achievements": [
                "ICC ODI Player of the Year (2022)",
                "No.1 ranked ODI batsman (2021-2023)",
                "Most centuries in T20I cricket (3)"
            ],
            "milestones": [
                {
                    "date": "2016-10-13",
                    "title": "Test Debut",
                    "description": "Made Test debut against West Indies"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-19",
                    "format": "Test",
                    "opponent": "South Africa",
                    "venue": "Karachi",
                    "score": "102 (189)",
                    "result": "Drawn"
                }
            ]
        },
        {
            "id": "5",
            "name": "Joe Root",
            "country": "England",
            "flag": engFlag,
            "flagEmoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "role": "Batsman",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm off break",
            "jerseyNumber": 3,
            "age": 34,
            "dateOfBirth": "1990-12-30",
            "image": jr03,
            "debut": {
                "test": "2012-12-13",
                "odi": "2013-01-11",
                "t20i": "2012-06-25"
            },
            "careerStats": {
                "test": {
                    "matches": 147,
                    "innings": 268,
                    "runs": 12377,
                    "average": 49.70,
                    "strikeRate": 54.42,
                    "highestScore": "254",
                    "centuries": 33,
                    "halfCenturies": 64,
                    "fours": 1423,
                    "sixes": 48,
                    "notOuts": 19,
                    "ducks": 12,
                    "ballsFaced": 22741,
                    "wickets": 52,
                    "bowlingAverage": 45.90,
                    "economy": 3.15,
                    "catches": 185,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 171,
                    "innings": 159,
                    "runs": 6491,
                    "average": 47.36,
                    "strikeRate": 86.46,
                    "highestScore": "133*",
                    "centuries": 16,
                    "halfCenturies": 37,
                    "fours": 556,
                    "sixes": 86,
                    "notOuts": 22,
                    "ducks": 3,
                    "ballsFaced": 7508,
                    "wickets": 28,
                    "bowlingAverage": 52.03,
                    "economy": 5.45,
                    "catches": 75,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 32,
                    "innings": 28,
                    "runs": 893,
                    "average": 35.72,
                    "strikeRate": 126.16,
                    "highestScore": "90*",
                    "centuries": 0,
                    "halfCenturies": 5,
                    "fours": 72,
                    "sixes": 26,
                    "notOuts": 3,
                    "ducks": 1,
                    "ballsFaced": 708,
                    "wickets": 5,
                    "bowlingAverage": 38.60,
                    "economy": 7.72,
                    "catches": 15,
                    "stumpings": 0
                }
            },
            "achievements": [
                "England's second-highest Test run-scorer",
                "Most Test centuries by an England batsman (33)",
                "Fastest Englishman to 10,000 Test runs"
            ],
            "milestones": [
                {
                    "date": "2012-12-13",
                    "title": "Test Debut",
                    "description": "Made Test debut against India"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-18",
                    "format": "Test",
                    "opponent": "New Zealand",
                    "venue": "Lord's",
                    "score": "156 (287)",
                    "result": "Lost by 8 wickets"
                }
            ]
        },
        {
            "id": "6",
            "name": "Rohit Sharma",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "role": "Batsman",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm off break",
            "jerseyNumber": 45,
            "age": 37,
            "dateOfBirth": "1987-04-30",
            "image": rs45,
            "debut": {
                "test": "2013-11-06",
                "odi": "2007-06-23",
                "t20i": "2007-09-19"
            },
            "careerStats": {
                "test": {
                    "matches": 63,
                    "innings": 112,
                    "runs": 4301,
                    "average": 43.01,
                    "strikeRate": 55.88,
                    "highestScore": "212",
                    "centuries": 11,
                    "halfCenturies": 17,
                    "fours": 518,
                    "sixes": 41,
                    "notOuts": 12,
                    "ducks": 7,
                    "ballsFaced": 7697,
                    "wickets": 2,
                    "bowlingAverage": 43.00,
                    "economy": 3.82,
                    "catches": 71,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 262,
                    "innings": 252,
                    "runs": 10866,
                    "average": 49.16,
                    "strikeRate": 90.30,
                    "highestScore": "264",
                    "centuries": 31,
                    "halfCenturies": 56,
                    "fours": 1005,
                    "sixes": 331,
                    "notOuts": 31,
                    "ducks": 5,
                    "ballsFaced": 12030,
                    "wickets": 8,
                    "bowlingAverage": 60.62,
                    "economy": 5.49,
                    "catches": 93,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 159,
                    "innings": 151,
                    "runs": 4231,
                    "average": 32.31,
                    "strikeRate": 140.35,
                    "highestScore": "121*",
                    "centuries": 5,
                    "halfCenturies": 29,
                    "fours": 326,
                    "sixes": 190,
                    "notOuts": 20,
                    "ducks": 4,
                    "ballsFaced": 3014,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 62,
                    "stumpings": 0
                }
            },
            "achievements": [
                "Only player with 3 ODI double centuries",
                "Highest individual score in ODIs (264)",
                "Most T20I centuries (5)",
                "Led India to 2024 T20 World Cup victory"
            ],
            "milestones": [
                {
                    "date": "2013-11-06",
                    "title": "Test Debut",
                    "description": "Made Test debut against West Indies"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-20",
                    "format": "Test",
                    "opponent": "Australia",
                    "venue": "Melbourne",
                    "score": "76 (132)",
                    "result": "Won by 5 wickets"
                }
            ]
        },
        {
            "id": "7",
            "name": "Shakib Al Hasan",
            "country": "Bangladesh",
            "flag": banFlag,
            "flagEmoji": "🇧🇩",
            "role": "All-rounder",
            "battingStyle": "Left-handed",
            "bowlingStyle": "Left-arm orthodox",
            "jerseyNumber": 75,
            "age": 37,
            "dateOfBirth": "1987-03-24",
            "image": sah75,
            "debut": {
                "test": "2007-05-06",
                "odi": "2006-08-06",
                "t20i": "2006-11-28"
            },
            "careerStats": {
                "test": {
                    "matches": 71,
                    "innings": 126,
                    "runs": 4505,
                    "average": 38.51,
                    "strikeRate": 55.21,
                    "highestScore": "217",
                    "centuries": 7,
                    "halfCenturies": 28,
                    "fours": 468,
                    "sixes": 15,
                    "notOuts": 9,
                    "ducks": 4,
                    "ballsFaced": 8162,
                    "wickets": 237,
                    "bowlingAverage": 31.17,
                    "economy": 2.87,
                    "catches": 64,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 247,
                    "innings": 229,
                    "runs": 7570,
                    "average": 37.66,
                    "strikeRate": 84.02,
                    "highestScore": "134*",
                    "centuries": 14,
                    "halfCenturies": 48,
                    "fours": 645,
                    "sixes": 127,
                    "notOuts": 28,
                    "ducks": 6,
                    "ballsFaced": 9009,
                    "wickets": 317,
                    "bowlingAverage": 29.65,
                    "economy": 4.91,
                    "catches": 127,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 129,
                    "innings": 114,
                    "runs": 2551,
                    "average": 24.29,
                    "strikeRate": 122.09,
                    "highestScore": "84*",
                    "centuries": 0,
                    "halfCenturies": 11,
                    "fours": 199,
                    "sixes": 67,
                    "notOuts": 9,
                    "ducks": 5,
                    "ballsFaced": 2090,
                    "wickets": 149,
                    "bowlingAverage": 20.96,
                    "economy": 6.83,
                    "catches": 60,
                    "stumpings": 0
                }
            },
            "achievements": [
                "No.1 ranked ODI all-rounder (2015-2019)",
                "First cricketer to score 6,000+ runs and take 250+ wickets in ODIs",
                "ICC ODI Player of the Year (2009)",
                "Most valuable player in T20 cricket"
            ],
            "milestones": [
                {
                    "date": "2006-08-06",
                    "title": "ODI Debut",
                    "description": "Made ODI debut against Zimbabwe"
                },
                {
                    "date": "2007-05-06",
                    "title": "Test Debut",
                    "description": "Made Test debut against India"
                },
                {
                    "date": "2017-05-01",
                    "title": "All-round Double",
                    "description": "Reached 5000 runs and 250 wickets in ODIs"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-15",
                    "format": "Test",
                    "opponent": "Pakistan",
                    "venue": "Dhaka",
                    "score": "78 (142) & 3/45",
                    "result": "Won by 6 wickets"
                }
            ]
        },
        {
            "id": "8",
            "name": "Mushfiqur Rahim",
            "country": "Bangladesh",
            "flag": banFlag,
            "flagEmoji": "🇧🇩",
            "role": "Wicketkeeper-Batsman",
            "battingStyle": "Right-handed",
            "bowlingStyle": "N/A",
            "jerseyNumber": 15,
            "age": 37,
            "dateOfBirth": "1987-06-09",
            "image": mr15,
            "debut": {
                "test": "2005-05-26",
                "odi": "2006-03-02",
                "t20i": "2006-11-28"
            },
            "careerStats": {
                "test": {
                    "matches": 92,
                    "innings": 156,
                    "runs": 5856,
                    "average": 39.15,
                    "strikeRate": 47.28,
                    "highestScore": "219*",
                    "centuries": 11,
                    "halfCenturies": 25,
                    "fours": 615,
                    "sixes": 9,
                    "notOuts": 7,
                    "ducks": 8,
                    "ballsFaced": 12386,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 186,
                    "stumpings": 37
                },
                "odi": {
                    "matches": 265,
                    "innings": 242,
                    "runs": 7656,
                    "average": 36.74,
                    "strikeRate": 74.44,
                    "highestScore": "144",
                    "centuries": 9,
                    "halfCenturies": 47,
                    "fours": 665,
                    "sixes": 81,
                    "notOuts": 34,
                    "ducks": 10,
                    "ballsFaced": 10286,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 174,
                    "stumpings": 66
                },
                "t20i": {
                    "matches": 103,
                    "innings": 93,
                    "runs": 1795,
                    "average": 23.32,
                    "strikeRate": 118.47,
                    "highestScore": "72*",
                    "centuries": 0,
                    "halfCenturies": 6,
                    "fours": 147,
                    "sixes": 48,
                    "notOuts": 16,
                    "ducks": 5,
                    "ballsFaced": 1515,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 46,
                    "stumpings": 25
                }
            },
            "achievements": [
                "First Bangladesh batsman to score Test double century",
                "Most runs for Bangladesh in Test cricket",
                "Most dismissals as wicketkeeper for Bangladesh"
            ],
            "milestones": [
                {
                    "date": "2005-05-26",
                    "title": "Test Debut",
                    "description": "Made Test debut against England at 17 years old"
                },
                {
                    "date": "2013-03-06",
                    "title": "First Test Double Century",
                    "description": "Scored 200* vs Sri Lanka in Galle"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-15",
                    "format": "Test",
                    "opponent": "Pakistan",
                    "venue": "Dhaka",
                    "score": "92 (178)",
                    "result": "Won by 6 wickets"
                }
            ]
        },
        {
            "id": "9",
            "name": "Mohammad Rizwan",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "role": "Wicketkeeper-Batsman",
            "battingStyle": "Right-handed",
            "bowlingStyle": "N/A",
            "jerseyNumber": 16,
            "age": 32,
            "dateOfBirth": "1992-06-01",
            "image": mdr16,
            "debut": {
                "test": "2019-11-21",
                "odi": "2015-09-01",
                "t20i": "2015-11-07"
            },
            "careerStats": {
                "test": {
                    "matches": 33,
                    "innings": 53,
                    "runs": 2346,
                    "average": 47.88,
                    "strikeRate": 67.19,
                    "highestScore": "171",
                    "centuries": 4,
                    "halfCenturies": 15,
                    "fours": 238,
                    "sixes": 12,
                    "notOuts": 4,
                    "ducks": 1,
                    "ballsFaced": 3492,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 98,
                    "stumpings": 10
                },
                "odi": {
                    "matches": 78,
                    "innings": 70,
                    "runs": 2473,
                    "average": 42.64,
                    "strikeRate": 86.42,
                    "highestScore": "131*",
                    "centuries": 4,
                    "halfCenturies": 17,
                    "fours": 198,
                    "sixes": 44,
                    "notOuts": 12,
                    "ducks": 2,
                    "ballsFaced": 2862,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 51,
                    "stumpings": 14
                },
                "t20i": {
                    "matches": 108,
                    "innings": 100,
                    "runs": 3261,
                    "average": 46.58,
                    "strikeRate": 127.65,
                    "highestScore": "104*",
                    "centuries": 1,
                    "halfCenturies": 28,
                    "fours": 238,
                    "sixes": 100,
                    "notOuts": 30,
                    "ducks": 1,
                    "ballsFaced": 2554,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 59,
                    "stumpings": 23
                }
            },
            "achievements": [
                "Most runs in T20Is in a calendar year (2021 - 1326 runs)",
                "Fastest to 1000 T20I runs for Pakistan",
                "ICC T20I Cricketer of the Year (2021)"
            ],
            "milestones": [
                {
                    "date": "2019-11-21",
                    "title": "Test Debut",
                    "description": "Made Test debut against Australia"
                },
                {
                    "date": "2021-12-31",
                    "title": "Record T20I Year",
                    "description": "Scored 1326 runs in T20Is in 2021"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-19",
                    "format": "T20I",
                    "opponent": "New Zealand",
                    "venue": "Lahore",
                    "score": "89 (58)",
                    "result": "Won by 7 wickets"
                }
            ]
        },
        {
            "id": "10",
            "name": "Rashid Khan",
            "country": "Afghanistan",
            "flag": afgFlag,
            "flagEmoji": "🇦🇫",
            "role": "Bowler",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm leg spin",
            "jerseyNumber": 19,
            "age": 26,
            "dateOfBirth": "1998-09-20",
            "image": rk19,
            "debut": {
                "test": "2018-06-14",
                "odi": "2015-10-18",
                "t20i": "2015-12-16"
            },
            "careerStats": {
                "test": {
                    "matches": 6,
                    "innings": 9,
                    "runs": 244,
                    "average": 27.11,
                    "strikeRate": 68.72,
                    "highestScore": "51",
                    "centuries": 0,
                    "halfCenturies": 1,
                    "fours": 25,
                    "sixes": 6,
                    "notOuts": 0,
                    "ducks": 2,
                    "ballsFaced": 355,
                    "wickets": 34,
                    "bowlingAverage": 22.03,
                    "economy": 3.48,
                    "catches": 2,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 99,
                    "innings": 61,
                    "runs": 1082,
                    "average": 20.41,
                    "strikeRate": 103.05,
                    "highestScore": "60*",
                    "centuries": 0,
                    "halfCenturies": 2,
                    "fours": 77,
                    "sixes": 45,
                    "notOuts": 8,
                    "ducks": 9,
                    "ballsFaced": 1050,
                    "wickets": 170,
                    "bowlingAverage": 26.52,
                    "economy": 4.49,
                    "catches": 25,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 92,
                    "innings": 46,
                    "runs": 467,
                    "average": 14.59,
                    "strikeRate": 131.18,
                    "highestScore": "48",
                    "centuries": 0,
                    "halfCenturies": 0,
                    "fours": 26,
                    "sixes": 28,
                    "notOuts": 14,
                    "ducks": 8,
                    "ballsFaced": 356,
                    "wickets": 149,
                    "bowlingAverage": 13.15,
                    "economy": 6.16,
                    "catches": 18,
                    "stumpings": 0
                }
            },
            "achievements": [
                "Youngest player to reach No.1 in ICC T20I bowling rankings",
                "First Afghanistan player to take 100 ODI wickets",
                "ICC T20I Cricketer of the Decade"
            ],
            "milestones": [
                {
                    "date": "2015-10-18",
                    "title": "ODI Debut",
                    "description": "Made ODI debut against Zimbabwe"
                },
                {
                    "date": "2017-02-08",
                    "title": "No.1 T20I Bowler",
                    "description": "Became world's No.1 T20I bowler at age 18"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-17",
                    "format": "T20I",
                    "opponent": "Bangladesh",
                    "venue": "Sharjah",
                    "score": "4/18",
                    "result": "Won by 45 runs"
                }
            ]
        },
        {
            "id": "11",
            "name": "Taskin Ahmed",
            "country": "Bangladesh",
            "flag": banFlag,
            "flagEmoji": "🇧🇩",
            "role": "Bowler",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm fast",
            "jerseyNumber": 3,
            "age": 29,
            "dateOfBirth": "1995-04-03",
            "image": ta03,
            "debut": {
                "test": "2017-09-30",
                "odi": "2014-02-27",
                "t20i": "2014-03-28"
            },
            "careerStats": {
                "test": {
                    "matches": 14,
                    "innings": 19,
                    "runs": 114,
                    "average": 7.60,
                    "strikeRate": 48.72,
                    "highestScore": "23",
                    "centuries": 0,
                    "halfCenturies": 0,
                    "fours": 9,
                    "sixes": 3,
                    "notOuts": 4,
                    "ducks": 4,
                    "ballsFaced": 234,
                    "wickets": 53,
                    "bowlingAverage": 30.88,
                    "economy": 3.60,
                    "catches": 4,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 71,
                    "innings": 34,
                    "runs": 188,
                    "average": 9.89,
                    "strikeRate": 78.01,
                    "highestScore": "25",
                    "centuries": 0,
                    "halfCenturies": 0,
                    "fours": 14,
                    "sixes": 8,
                    "notOuts": 15,
                    "ducks": 8,
                    "ballsFaced": 241,
                    "wickets": 101,
                    "bowlingAverage": 32.67,
                    "economy": 5.49,
                    "catches": 14,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 57,
                    "innings": 17,
                    "runs": 62,
                    "average": 6.20,
                    "strikeRate": 118.10,
                    "highestScore": "14",
                    "centuries": 0,
                    "halfCenturies": 0,
                    "fours": 3,
                    "sixes": 4,
                    "notOuts": 7,
                    "ducks": 5,
                    "ballsFaced": 52,
                    "wickets": 74,
                    "bowlingAverage": 20.21,
                    "economy": 7.41,
                    "catches": 10,
                    "stumpings": 0
                }
            },
            "achievements": [
                "Bangladesh's leading fast bowler",
                "First Bangladesh bowler to take 5 wickets in a T20I",
                "Key member of Bangladesh's 2024 T20 World Cup squad"
            ],
            "milestones": [
                {
                    "date": "2014-02-27",
                    "title": "ODI Debut",
                    "description": "Made ODI debut against Sri Lanka"
                },
                {
                    "date": "2016-03-16",
                    "title": "T20 World Cup Performance",
                    "description": "Took 5/28 vs Pakistan in T20 World Cup"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-15",
                    "format": "Test",
                    "opponent": "Pakistan",
                    "venue": "Dhaka",
                    "score": "4/76",
                    "result": "Won by 6 wickets"
                }
            ]
        },
        {
            "id": "12",
            "name": "Rahmanullah Gurbaz",
            "country": "Afghanistan",
            "flag": afgFlag,
            "flagEmoji": "🇦🇫",
            "role": "Wicketkeeper-Batsman",
            "battingStyle": "Right-handed",
            "bowlingStyle": "N/A",
            "jerseyNumber": 21,
            "age": 22,
            "dateOfBirth": "2001-11-28",
            "image": rg21,
            "debut": {
                "test": "2021-03-02",
                "odi": "2019-07-09",
                "t20i": "2019-08-29"
            },
            "careerStats": {
                "test": {
                    "matches": 5,
                    "innings": 9,
                    "runs": 297,
                    "average": 33.00,
                    "strikeRate": 61.24,
                    "highestScore": "70",
                    "centuries": 0,
                    "halfCenturies": 3,
                    "fours": 35,
                    "sixes": 5,
                    "notOuts": 0,
                    "ducks": 1,
                    "ballsFaced": 485,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 8,
                    "stumpings": 2
                },
                "odi": {
                    "matches": 51,
                    "innings": 51,
                    "runs": 1861,
                    "average": 38.77,
                    "strikeRate": 108.61,
                    "highestScore": "151",
                    "centuries": 4,
                    "halfCenturies": 11,
                    "fours": 174,
                    "sixes": 73,
                    "notOuts": 3,
                    "ducks": 2,
                    "ballsFaced": 1713,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 38,
                    "stumpings": 17
                },
                "t20i": {
                    "matches": 52,
                    "innings": 52,
                    "runs": 1502,
                    "average": 30.04,
                    "strikeRate": 137.98,
                    "highestScore": "80",
                    "centuries": 0,
                    "halfCenturies": 11,
                    "fours": 123,
                    "sixes": 70,
                    "notOuts": 2,
                    "ducks": 4,
                    "ballsFaced": 1089,
                    "wickets": 0,
                    "bowlingAverage": 0,
                    "economy": 0,
                    "catches": 28,
                    "stumpings": 12
                }
            },
            "achievements": [
                "Youngest Afghan cricketer to score an ODI century",
                "Afghanistan's leading run-scorer in T20Is",
                "Explosive opening batsman"
            ],
            "milestones": [
                {
                    "date": "2019-07-09",
                    "title": "ODI Debut",
                    "description": "Made ODI debut against Ireland"
                },
                {
                    "date": "2022-01-25",
                    "title": "First ODI Century",
                    "description": "Scored 127 vs Netherlands"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-17",
                    "format": "T20I",
                    "opponent": "Bangladesh",
                    "venue": "Sharjah",
                    "score": "76 (45)",
                    "result": "Won by 45 runs"
                }
            ]
        },
        {
            "id": "13",
            "name": "Glenn Maxwell",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "role": "All-rounder",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm off break",
            "jerseyNumber": 32,
            "age": 36,
            "dateOfBirth": "1988-10-14",
            "image": gm32,
            "debut": {
                "test": "2013-10-01",
                "odi": "2012-08-18",
                "t20i": "2012-08-08"
            },
            "careerStats": {
                "test": {
                    "matches": 7,
                    "innings": 11,
                    "runs": 339,
                    "average": 33.90,
                    "strikeRate": 90.64,
                    "highestScore": "104",
                    "centuries": 1,
                    "halfCenturies": 1,
                    "fours": 42,
                    "sixes": 8,
                    "notOuts": 1,
                    "ducks": 0,
                    "ballsFaced": 374,
                    "wickets": 4,
                    "bowlingAverage": 70.00,
                    "economy": 5.00,
                    "catches": 2,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 145,
                    "innings": 126,
                    "runs": 4174,
                    "average": 35.16,
                    "strikeRate": 125.78,
                    "highestScore": "201*",
                    "centuries": 4,
                    "halfCenturies": 23,
                    "fours": 295,
                    "sixes": 180,
                    "notOuts": 7,
                    "ducks": 8,
                    "ballsFaced": 3319,
                    "wickets": 53,
                    "bowlingAverage": 48.15,
                    "economy": 5.07,
                    "catches": 68,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 112,
                    "innings": 95,
                    "runs": 2404,
                    "average": 28.90,
                    "strikeRate": 154.54,
                    "highestScore": "145*",
                    "centuries": 1,
                    "halfCenturies": 11,
                    "fours": 159,
                    "sixes": 145,
                    "notOuts": 12,
                    "ducks": 6,
                    "ballsFaced": 1556,
                    "wickets": 29,
                    "bowlingAverage": 39.89,
                    "economy": 7.81,
                    "catches": 49,
                    "stumpings": 0
                }
            },
            "achievements": [
                "Fastest century in ODI World Cup history (51 balls)",
                "Highest individual T20I score by Australian (145*)",
                "ICC T20I Team of the Decade"
            ],
            "milestones": [
                {
                    "date": "2012-08-18",
                    "title": "ODI Debut",
                    "description": "Made ODI debut against Afghanistan"
                },
                {
                    "date": "2023-11-08",
                    "title": "Record World Cup Innings",
                    "description": "Scored 201* vs Afghanistan in World Cup"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-18",
                    "format": "ODI",
                    "opponent": "India",
                    "venue": "Sydney",
                    "score": "87 (52)",
                    "result": "Lost by 5 wickets"
                }
            ]
        },
        {
            "id": "14",
            "name": "Shaheen Afridi",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "role": "Bowler",
            "battingStyle": "Left-handed",
            "bowlingStyle": "Left-arm fast",
            "jerseyNumber": 10,
            "age": 24,
            "dateOfBirth": "2000-04-06",
            "image": ssa40,
            "debut": {
                "test": "2018-12-26",
                "odi": "2019-04-06",
                "t20i": "2018-04-03"
            },
            "careerStats": {
                "test": {
                    "matches": 31,
                    "innings": 42,
                    "runs": 333,
                    "average": 9.26,
                    "strikeRate": 67.27,
                    "highestScore": "51",
                    "centuries": 0,
                    "halfCenturies": 1,
                    "fours": 31,
                    "sixes": 8,
                    "notOuts": 6,
                    "ducks": 8,
                    "ballsFaced": 495,
                    "wickets": 112,
                    "bowlingAverage": 25.36,
                    "economy": 3.02,
                    "catches": 10,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 58,
                    "innings": 25,
                    "runs": 178,
                    "average": 11.87,
                    "strikeRate": 93.19,
                    "highestScore": "21",
                    "centuries": 0,
                    "halfCenturies": 0,
                    "fours": 15,
                    "sixes": 7,
                    "notOuts": 10,
                    "ducks": 6,
                    "ballsFaced": 191,
                    "wickets": 103,
                    "bowlingAverage": 24.17,
                    "economy": 5.34,
                    "catches": 13,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 73,
                    "innings": 19,
                    "runs": 76,
                    "average": 7.60,
                    "strikeRate": 118.75,
                    "highestScore": "19",
                    "centuries": 0,
                    "halfCenturies": 0,
                    "fours": 6,
                    "sixes": 3,
                    "notOuts": 9,
                    "ducks": 4,
                    "ballsFaced": 64,
                    "wickets": 102,
                    "bowlingAverage": 20.31,
                    "economy": 7.82,
                    "catches": 18,
                    "stumpings": 0
                }
            },
            "achievements": [
                "Youngest Pakistani to take 5 wickets in a Test innings",
                "ICC Emerging Cricketer of the Year (2021)",
                "Fastest to 50 ODI wickets for Pakistan"
            ],
            "milestones": [
                {
                    "date": "2018-12-26",
                    "title": "Test Debut",
                    "description": "Made Test debut against New Zealand"
                },
                {
                    "date": "2019-06-26",
                    "title": "6 Wickets on Test Debut Series",
                    "description": "Took 6/35 vs Bangladesh in first series"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-19",
                    "format": "T20I",
                    "opponent": "New Zealand",
                    "venue": "Lahore",
                    "score": "3/22",
                    "result": "Won by 7 wickets"
                }
            ]
        },
        {
            "id": "15",
            "name": "Mohammad Nabi",
            "country": "Afghanistan",
            "flag": afgFlag,
            "flagEmoji": "🇦🇫",
            "role": "All-rounder",
            "battingStyle": "Right-handed",
            "bowlingStyle": "Right-arm off break",
            "jerseyNumber": 7,
            "age": 39,
            "dateOfBirth": "1985-01-01",
            "image": mdn7,
            "debut": {
                "test": "2019-06-14",
                "odi": "2009-04-19",
                "t20i": "2010-02-01"
            },
            "careerStats": {
                "test": {
                    "matches": 4,
                    "innings": 7,
                    "runs": 303,
                    "average": 50.50,
                    "strikeRate": 69.87,
                    "highestScore": "126",
                    "centuries": 1,
                    "halfCenturies": 1,
                    "fours": 27,
                    "sixes": 7,
                    "notOuts": 1,
                    "ducks": 0,
                    "ballsFaced": 434,
                    "wickets": 7,
                    "bowlingAverage": 44.00,
                    "economy": 3.24,
                    "catches": 5,
                    "stumpings": 0
                },
                "odi": {
                    "matches": 160,
                    "innings": 149,
                    "runs": 3549,
                    "average": 27.28,
                    "strikeRate": 88.07,
                    "highestScore": "116",
                    "centuries": 3,
                    "halfCenturies": 17,
                    "fours": 277,
                    "sixes": 98,
                    "notOuts": 19,
                    "ducks": 10,
                    "ballsFaced": 4029,
                    "wickets": 158,
                    "bowlingAverage": 31.61,
                    "economy": 4.68,
                    "catches": 60,
                    "stumpings": 0
                },
                "t20i": {
                    "matches": 117,
                    "innings": 106,
                    "runs": 1916,
                    "average": 24.56,
                    "strikeRate": 134.17,
                    "highestScore": "89*",
                    "centuries": 0,
                    "halfCenturies": 9,
                    "fours": 131,
                    "sixes": 93,
                    "notOuts": 28,
                    "ducks": 7,
                    "ballsFaced": 1428,
                    "wickets": 92,
                    "bowlingAverage": 24.31,
                    "economy": 7.01,
                    "catches": 43,
                    "stumpings": 0
                }
            },
            "achievements": [
                "Afghanistan's most experienced player",
                "First Afghan cricketer to play 100 ODIs",
                "Captain of Afghanistan's T20 team"
            ],
            "milestones": [
                {
                    "date": "2009-04-19",
                    "title": "ODI Debut",
                    "description": "Made ODI debut vs Scotland"
                },
                {
                    "date": "2019-06-14",
                    "title": "Test Debut Century",
                    "description": "Scored 126 on Test debut vs Bangladesh"
                }
            ],
            "recentMatches": [
                {
                    "date": "2025-10-17",
                    "format": "T20I",
                    "opponent": "Bangladesh",
                    "venue": "Sharjah",
                    "score": "45 (28) & 2/25",
                    "result": "Won by 45 runs"
                }
            ]
        }
    ]
};

export default mockPlayers;