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
import zimFlag from '../assets/flag/zim.png';
import uaeFlag from '../assets/flag/uae.png';
import scoFlag from '../assets/flag/sco.png';
import nedFlag from '../assets/flag/ned.png';
import alzarri from '../assets/player_profile/aj08.png';
import markram from '../assets/player_profile/am02.png';
import nortje from '../assets/player_profile/an20.png';
import babar from '../assets/player_profile/ba56.png';
import bas from '../assets/player_profile/bdl05.png';
import muzarabani from '../assets/player_profile/bm40.png';
import bm21 from '../assets/player_profile/bm21.png';
import stokes from '../assets/player_profile/bs55.png';
import starc from '../assets/player_profile/ms56.png';
import campher from '../assets/player_profile/cc61.png';
import ervine from '../assets/player_profile/ce77.png';
import cg13 from '../assets/player_profile/cg13.png';
import cprizwan from '../assets/player_profile/cpr86.png';
import conway from '../assets/player_profile/dc88.png';
import silva from '../assets/player_profile/dds75.png';
import warner from '../assets/player_profile/dw31.png';
import farooqi from '../assets/player_profile/ff05.png';
import dockrell from '../assets/player_profile/gd50.png';
import james from '../assets/player_profile/ja09.png';
import buttler from '../assets/player_profile/jb63.png';
import bumrah from '../assets/player_profile/jb93.png';
import jason from '../assets/player_profile/jh98.png';
import joeRoot from '../assets/player_profile/jr03.png';
import junaid from '../assets/player_profile/js31.png';
import kusal from '../assets/player_profile/km13.png';
import rabada from '../assets/player_profile/kr25.png';
import williamson from '../assets/player_profile/kw22.png';
import das from '../assets/player_profile/lkd16.png';
import tucker from '../assets/player_profile/lt03.png';
import beek from '../assets/player_profile/lvb11.png';
import temba from '../assets/player_profile/tb11.png';
import adair from '../assets/player_profile/ma32.png';
import cross from '../assets/player_profile/mc09.png';
import nabi from '../assets/player_profile/mdn7.png';
import rizwan from '../assets/player_profile/mdr16.png';
import miraz from '../assets/player_profile/mhm53.png';
import max from '../assets/player_profile/mod04.png';
import mushfiqur from '../assets/player_profile/mr15.png';
import maheesh from '../assets/player_profile/mt61.png';
import waseem from '../assets/player_profile/mw10.png';
import wood from '../assets/player_profile/mw33.png';
import watt from '../assets/player_profile/mw51.png';
import pooran from '../assets/player_profile/np29.png';
import shah from '../assets/player_profile/ns71.png';
import naveen from '../assets/player_profile/nuh78.png';
import patCummins from '../assets/player_profile/pc30.png';
import pathum from '../assets/player_profile/pn18.png';
import paul from '../assets/player_profile/ps1.png';
import meekeren from '../assets/player_profile/pvm47.png';
import quinton from '../assets/player_profile/qdk12.png';
import ravi from '../assets/player_profile/ra99.png';
import regis from '../assets/player_profile/rb05.png';
import pant from '../assets/player_profile/rb17.png';
import richie from '../assets/player_profile/rb44.png';
import gurbaz from '../assets/player_profile/rg21.png';
import rashidKhan from '../assets/player_profile/rk19.png';
import rohan from '../assets/player_profile/rm88.png';
import rovman from '../assets/player_profile/rp52.png';
import rohit from '../assets/player_profile/rs45.png';
import shakib from '../assets/player_profile/sah75.png';
import shaheen from '../assets/player_profile/ssa40.png';
import scott from '../assets/player_profile/se35.png';
import shai from '../assets/player_profile/sh04.png';
import shadab from '../assets/player_profile/sk07.png';
import raza from '../assets/player_profile/sr24.png';
import smith from '../assets/player_profile/ss49.png';
import sean from '../assets/player_profile/sw14.png';
import taskin from '../assets/player_profile/ta03.png';
import boult from '../assets/player_profile/tb18.png';
import travis from '../assets/player_profile/th62.png';
import tom from '../assets/player_profile/tl48.png';
import tim from '../assets/player_profile/ts38.png';
import aravind from '../assets/player_profile/va33.png';
import kohli from '../assets/player_profile/vk18.png';
import hasaranga from '../assets/player_profile/wh49.png';

// Mock data for Team Statistics
const teamStatsData = {
    IND: {
        team: 'India',
        country: 'IND',
        image: indFlag,
        color: '#0e71faff',
        test: {
            overview: {
                totalMatches: 580,
                won: 174,
                lost: 178,
                drawn: 228,
                winPercentage: 30.0,
                currentStreak: { type: 'winning', count: 5 },
                currentForm: ['W', 'W', 'W', 'L', 'D', 'W', 'W', 'W', 'L', 'W']
            },
            batting: {
                totalRuns: 258432,
                averageScore: 321.5,
                highestTotal: { score: 759, against: 'England', venue: 'Chennai', year: 2016 },
                lowestTotal: { score: 36, against: 'Australia', venue: 'Adelaide', year: 2020 },
                scoresOver400: 45,
                centuries: 289,
                sixes: 1234
            },
            bowling: {
                totalWickets: 8532,
                averageWickets: 14.7,
                bestFigures: { wickets: 10, runs: 74, player: 'A. Kumble', against: 'Pakistan', year: 1999 },
                fiveWicketHauls: 156,
                tenWicketHauls: 34
            },
            records: {
                biggestWin: { margin: 'innings and 262 runs', against: 'Australia', venue: 'Mumbai', year: 2023 },
                highestChase: { score: 406, against: 'West Indies', venue: 'Trinidad', year: 1976 },
                longestWinStreak: 11,
                longestLossStreak: 8
            }
        },
        odi: {
            overview: {
                totalMatches: 1026,
                won: 548,
                lost: 437,
                tied: 9,
                noResult: 32,
                winPercentage: 55.6,
                currentStreak: { type: 'winning', count: 3 },
                currentForm: ['W', 'W', 'L', 'W', 'W', 'W', 'L', 'W', 'W', 'W']
            },
            batting: {
                totalRuns: 267891,
                averageScore: 261.2,
                highestTotal: { score: 418, against: 'West Indies', venue: 'Indore', year: 2011 },
                lowestTotal: { score: 54, against: 'Sri Lanka', venue: 'Sharjah', year: 2000 },
                scoresOver300: 287,
                centuries: 892,
                sixes: 3421
            },
            bowling: {
                totalWickets: 9234,
                averageWickets: 9.0,
                bestFigures: { wickets: 6, runs: 4, player: 'S. Agarkar', against: 'Australia', year: 2004 },
                fiveWicketHauls: 98,
                economyRate: 4.82
            },
            records: {
                biggestWin: { margin: '257 runs', against: 'Bermuda', venue: 'Trinidad', year: 2007 },
                highestChase: { score: 362, against: 'Australia', venue: 'Jaipur', year: 2013 },
                longestWinStreak: 17,
                longestLossStreak: 7
            }
        },
        t20i: {
            overview: {
                totalMatches: 224,
                won: 141,
                lost: 77,
                tied: 3,
                noResult: 3,
                winPercentage: 63.2,
                currentStreak: { type: 'winning', count: 2 },
                currentForm: ['W', 'L', 'W', 'W', 'W', 'L', 'W', 'W', 'L', 'W']
            },
            batting: {
                totalRuns: 34521,
                averageScore: 154.1,
                highestTotal: { score: 260, against: 'Sri Lanka', venue: 'Indore', year: 2017 },
                lowestTotal: { score: 74, against: 'Australia', venue: 'Melbourne', year: 2008 },
                scoresOver200: 45,
                centuries: 12,
                sixes: 1234
            },
            bowling: {
                totalWickets: 1876,
                averageWickets: 8.4,
                bestFigures: { wickets: 5, runs: 6, player: 'Y. Chahal', against: 'England', year: 2017 },
                fiveWicketHauls: 3,
                economyRate: 7.41
            },
            records: {
                biggestWin: { margin: '143 runs', against: 'Sri Lanka', venue: 'Indore', year: 2017 },
                highestChase: { score: 212, against: 'England', venue: 'Birmingham', year: 2018 },
                longestWinStreak: 12,
                longestLossStreak: 5
            }
        },
        recentMatches: [
            { date: '2024-10-25', opponent: 'AUS', opponentFlag: ausFlag, venue: 'Perth', format: 'Test', result: 'Won', margin: '295 runs' },
            { date: '2024-10-18', opponent: 'NZ', opponentFlag: nzFlag, venue: 'Mumbai', format: 'Test', result: 'Won', margin: '8 wickets' },
            { date: '2024-10-10', opponent: 'BAN', opponentFlag: banFlag, venue: 'Pune', format: 'Test', result: 'Won', margin: '7 wickets' },
            { date: '2024-09-29', opponent: 'BAN', opponentFlag: banFlag, venue: 'Chennai', format: 'Test', result: 'Won', margin: '280 runs' },
            { date: '2024-09-19', opponent: 'BAN', opponentFlag: banFlag, venue: 'Kanpur', format: 'Test', result: 'Won', margin: '7 wickets' }
        ],
        squad: [
            { name: 'Rohit Sharma', role: 'Batsman', matches: 478, photo: rohit },
            { name: 'Virat Kohli', role: 'Batsman', matches: 535, photo: kohli },
            { name: 'Jasprit Bumrah', role: 'Bowler', matches: 314, photo: bumrah },
            { name: 'Rishabh Pant', role: 'Wicket Keeper', matches: 178, photo: pant },
            { name: 'R. Ashwin', role: 'All-rounder', matches: 428, photo: ravi }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Virat Kohli', runs: 13423, average: 53.4, centuries: 80 },
                { name: 'Rohit Sharma', runs: 11267, average: 48.9, centuries: 48 },
                { name: 'Shubman Gill', runs: 3421, average: 51.5, centuries: 8 }
            ],
            bowlers: [
                { name: 'Jasprit Bumrah', wickets: 467, average: 20.3, fiveWickets: 18 },
                { name: 'R. Ashwin', wickets: 765, average: 23.9, fiveWickets: 45 },
                { name: 'Mohammed Shami', wickets: 443, average: 22.1, fiveWickets: 17 }
            ]
        }
    },
    AUS: {
        team: 'Australia',
        country: 'AUS',
        image: ausFlag,
        color: '#FFC800',
        test: {
            overview: {
                totalMatches: 853,
                won: 403,
                lost: 231,
                drawn: 219,
                winPercentage: 47.2,
                currentStreak: { type: 'winning', count: 3 },
                currentForm: ['W', 'W', 'L', 'W', 'W', 'D', 'W', 'L', 'W', 'W']
            },
            batting: {
                totalRuns: 389234,
                averageScore: 342.1,
                highestTotal: { score: 735, against: 'Zimbabwe', venue: 'Perth', year: 2003 },
                lowestTotal: { score: 36, against: 'South Africa', venue: 'Johannesburg', year: 1902 },
                scoresOver400: 89,
                centuries: 578,
                sixes: 2341
            },
            bowling: {
                totalWickets: 12453,
                averageWickets: 14.6,
                bestFigures: { wickets: 9, runs: 121, player: 'D. Lillee', against: 'Pakistan', year: 1981 },
                fiveWicketHauls: 287,
                tenWicketHauls: 56
            },
            records: {
                biggestWin: { margin: 'innings and 360 runs', against: 'England', venue: 'The Oval', year: 1938 },
                highestChase: { score: 404, against: 'England', venue: 'Leeds', year: 1948 },
                longestWinStreak: 16,
                longestLossStreak: 9
            }
        },
        odi: {
            overview: {
                totalMatches: 982,
                won: 608,
                lost: 340,
                tied: 9,
                noResult: 25,
                winPercentage: 64.1,
                currentStreak: { type: 'winning', count: 4 },
                currentForm: ['W', 'W', 'W', 'L', 'W', 'W', 'W', 'W', 'L', 'W']
            },
            batting: {
                totalRuns: 289432,
                averageScore: 294.8,
                highestTotal: { score: 434, against: 'South Africa', venue: 'Johannesburg', year: 2006 },
                lowestTotal: { score: 70, against: 'England', venue: 'Birmingham', year: 1977 },
                scoresOver300: 376,
                centuries: 1045,
                sixes: 4234
            },
            bowling: {
                totalWickets: 10234,
                averageWickets: 10.4,
                bestFigures: { wickets: 7, runs: 15, player: 'G. McGrath', against: 'Namibia', year: 2003 },
                fiveWicketHauls: 145,
                economyRate: 4.95
            },
            records: {
                biggestWin: { margin: '275 runs', against: 'Afghanistan', venue: 'Perth', year: 2015 },
                highestChase: { score: 363, against: 'India', venue: 'Jaipur', year: 2013 },
                longestWinStreak: 21,
                longestLossStreak: 9
            }
        },
        t20i: {
            overview: {
                totalMatches: 181,
                won: 103,
                lost: 74,
                tied: 2,
                noResult: 2,
                winPercentage: 58.2,
                currentStreak: { type: 'winning', count: 1 },
                currentForm: ['W', 'L', 'W', 'L', 'W', 'W', 'L', 'W', 'W', 'L']
            },
            batting: {
                totalRuns: 28432,
                averageScore: 157.1,
                highestTotal: { score: 263, against: 'Sri Lanka', venue: 'Pallekele', year: 2016 },
                lowestTotal: { score: 79, against: 'England', venue: 'Southampton', year: 2005 },
                scoresOver200: 34,
                centuries: 8,
                sixes: 978
            },
            bowling: {
                totalWickets: 1543,
                averageWickets: 8.5,
                bestFigures: { wickets: 5, runs: 6, player: 'A. Zampa', against: 'Bangladesh', year: 2021 },
                fiveWicketHauls: 2,
                economyRate: 7.62
            },
            records: {
                biggestWin: { margin: '100 runs', against: 'Sri Lanka', venue: 'Pallekele', year: 2016 },
                highestChase: { score: 212, against: 'India', venue: 'Mohali', year: 2016 },
                longestWinStreak: 10,
                longestLossStreak: 6
            }
        },
        recentMatches: [
            { date: '2024-10-28', opponent: 'IND', opponentFlag: indFlag, venue: 'Perth', format: 'Test', result: 'Lost', margin: '295 runs' },
            { date: '2024-10-14', opponent: 'NZ', opponentFlag: nzFlag, venue: 'Sydney', format: 'ODI', result: 'Won', margin: '6 wickets' },
            { date: '2024-10-07', opponent: 'ENG', opponentFlag: engFlag, venue: 'Melbourne', format: 'T20I', result: 'Won', margin: '28 runs' },
            { date: '2024-09-25', opponent: 'PAK', opponentFlag: pakFlag, venue: 'Brisbane', format: 'Test', result: 'Won', margin: '7 wickets' },
            { date: '2024-09-18', opponent: 'WI', opponentFlag: wiFlag, venue: 'Adelaide', format: 'ODI', result: 'Won', margin: '89 runs' }
        ],
        squad: [
            { name: 'Pat Cummins', role: 'Bowler', matches: 456, photo: patCummins },
            { name: 'Steve Smith', role: 'Batsman', matches: 524, photo: smith },
            { name: 'David Warner', role: 'Batsman', matches: 498, photo: warner },
            { name: 'Mitchell Starc', role: 'Bowler', matches: 387, photo: starc },
            { name: 'Travis Head', role: 'All-rounder', matches: 234, photo: travis }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Steve Smith', runs: 15234, average: 61.2, centuries: 48 },
                { name: 'David Warner', runs: 13567, average: 49.3, centuries: 45 },
                { name: 'Marnus Labuschagne', runs: 5432, average: 57.8, centuries: 12 }
            ],
            bowlers: [
                { name: 'Pat Cummins', wickets: 543, average: 21.9, fiveWickets: 24 },
                { name: 'Mitchell Starc', wickets: 678, average: 23.5, fiveWickets: 28 },
                { name: 'Nathan Lyon', wickets: 534, average: 29.3, fiveWickets: 25 }
            ]
        }
    },
    ENG: {
        team: 'England',
        country: 'ENG',
        image: engFlag,
        color: '#0A4595',
        test: {
            overview: {
                totalMatches: 1067,
                won: 396,
                lost: 327,
                drawn: 344,
                winPercentage: 37.1,
                currentStreak: { type: 'winning', count: 2 },
                currentForm: ['W', 'L', 'W', 'W', 'L', 'D', 'W', 'L', 'W', 'L']
            },
            batting: {
                totalRuns: 412345,
                averageScore: 298.4,
                highestTotal: { score: 903, against: 'Australia', venue: 'The Oval', year: 1938 },
                lowestTotal: { score: 45, against: 'Australia', venue: 'Sydney', year: 1887 },
                scoresOver400: 76,
                centuries: 534,
                sixes: 1987
            },
            bowling: {
                totalWickets: 13234,
                averageWickets: 12.4,
                bestFigures: { wickets: 10, runs: 53, player: 'J. Laker', against: 'Australia', year: 1956 },
                fiveWicketHauls: 298,
                tenWicketHauls: 48
            },
            records: {
                biggestWin: { margin: 'innings and 579 runs', against: 'Australia', venue: 'The Oval', year: 1938 },
                highestChase: { score: 332, against: 'Australia', venue: 'Melbourne', year: 1928 },
                longestWinStreak: 13,
                longestLossStreak: 12
            }
        },
        odi: {
            overview: {
                totalMatches: 782,
                won: 405,
                lost: 346,
                tied: 9,
                noResult: 22,
                winPercentage: 53.9,
                currentStreak: { type: 'winning', count: 3 },
                currentForm: ['W', 'W', 'L', 'W', 'W', 'L', 'W', 'W', 'W', 'L']
            },
            batting: {
                totalRuns: 234567,
                averageScore: 300.2,
                highestTotal: { score: 481, against: 'Australia', venue: 'Nottingham', year: 2018 },
                lowestTotal: { score: 86, against: 'Australia', venue: 'Manchester', year: 2001 },
                scoresOver300: 189,
                centuries: 678,
                sixes: 3567
            },
            bowling: {
                totalWickets: 7234,
                averageWickets: 9.3,
                bestFigures: { wickets: 8, runs: 15, player: 'C. Woakes', against: 'Sri Lanka', year: 2021 },
                fiveWicketHauls: 87,
                economyRate: 5.21
            },
            records: {
                biggestWin: { margin: '242 runs', against: 'Netherlands', venue: 'Nagpur', year: 2011 },
                highestChase: { score: 350, against: 'New Zealand', venue: 'Nottingham', year: 2015 },
                longestWinStreak: 14,
                longestLossStreak: 8
            }
        },
        t20i: {
            overview: {
                totalMatches: 198,
                won: 107,
                lost: 84,
                tied: 3,
                noResult: 4,
                winPercentage: 56.0,
                currentStreak: { type: 'losing', count: 1 },
                currentForm: ['W', 'L', 'W', 'W', 'L', 'W', 'W', 'L', 'W', 'L']
            },
            batting: {
                totalRuns: 31234,
                averageScore: 157.7,
                highestTotal: { score: 267, against: 'West Indies', venue: 'St. Lucia', year: 2024 },
                lowestTotal: { score: 80, against: 'India', venue: 'Manchester', year: 2014 },
                scoresOver200: 38,
                centuries: 9,
                sixes: 1123
            },
            bowling: {
                totalWickets: 1678,
                averageWickets: 8.5,
                bestFigures: { wickets: 5, runs: 3, player: 'C. Jordan', against: 'USA', year: 2024 },
                fiveWicketHauls: 4,
                economyRate: 7.87
            },
            records: {
                biggestWin: { margin: '137 runs', against: 'West Indies', venue: 'St. Lucia', year: 2024 },
                highestChase: { score: 194, against: 'South Africa', venue: 'Cape Town', year: 2020 },
                longestWinStreak: 9,
                longestLossStreak: 5
            }
        },
        recentMatches: [
            { date: '2024-10-22', opponent: 'PAK', opponentFlag: pakFlag, venue: 'Multan', format: 'Test', result: 'Won', margin: '8 wickets' },
            { date: '2024-10-09', opponent: 'AUS', opponentFlag: ausFlag, venue: 'Melbourne', format: 'T20I', result: 'Lost', margin: '28 runs' },
            { date: '2024-09-28', opponent: 'WI', opponentFlag: wiFlag, venue: 'St. Lucia', format: 'T20I', result: 'Won', margin: '137 runs' },
            { date: '2024-09-16', opponent: 'SL', opponentFlag: slFlag, venue: 'Lord\'s', format: 'Test', result: 'Won', margin: '190 runs' },
            { date: '2024-09-01', opponent: 'WI', opponentFlag: wiFlag, venue: 'Antigua', format: 'ODI', result: 'Won', margin: '6 wickets' }
        ],
        squad: [
            { name: 'Ben Stokes', role: 'All-rounder', matches: 412, photo: stokes },
            { name: 'Joe Root', role: 'Batsman', matches: 487, photo: joeRoot },
            { name: 'James Anderson', role: 'Bowler', matches: 576, photo: james },
            { name: 'Jos Buttler', role: 'Wicket Keeper', matches: 367, photo: buttler },
            { name: 'Mark Wood', role: 'Bowler', matches: 234, photo: wood }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Joe Root', runs: 17234, average: 55.4, centuries: 52 },
                { name: 'Ben Stokes', runs: 9876, average: 41.2, centuries: 28 },
                { name: 'Jonny Bairstow', runs: 8765, average: 39.8, centuries: 24 }
            ],
            bowlers: [
                { name: 'James Anderson', wickets: 703, average: 26.8, fiveWickets: 32 },
                { name: 'Stuart Broad', wickets: 604, average: 27.9, fiveWickets: 20 },
                { name: 'Mark Wood', wickets: 287, average: 29.4, fiveWickets: 8 }
            ]
        }
    },
    RSA: {
        team: 'South Africa',
        country: 'RSA',
        image: saFlag,
        color: '#007A4D',
        test: {
            overview: {
                totalMatches: 468,
                won: 172,
                lost: 163,
                drawn: 133,
                winPercentage: 36.8,
                currentStreak: { type: 'winning', count: 1 },
                currentForm: ['W', 'L', 'W', 'L', 'D', 'W', 'L', 'W', 'L', 'W']
            },
            batting: {
                totalRuns: 189234,
                averageScore: 289.7,
                highestTotal: { score: 682, against: 'England', venue: 'Lord\'s', year: 2003 },
                lowestTotal: { score: 30, against: 'England', venue: 'Port Elizabeth', year: 1896 },
                scoresOver400: 38,
                centuries: 267,
                sixes: 1456
            },
            bowling: {
                totalWickets: 6789,
                averageWickets: 14.5,
                bestFigures: { wickets: 9, runs: 113, player: 'K. Rabada', against: 'England', year: 2016 },
                fiveWicketHauls: 187,
                tenWicketHauls: 31
            },
            records: {
                biggestWin: { margin: 'innings and 254 runs', against: 'Bangladesh', venue: 'Dhaka', year: 2008 },
                highestChase: { score: 414, against: 'Australia', venue: 'Perth', year: 2008 },
                longestWinStreak: 9,
                longestLossStreak: 7
            }
        },
        odi: {
            overview: {
                totalMatches: 645,
                won: 401,
                lost: 220,
                tied: 8,
                noResult: 16,
                winPercentage: 64.6,
                currentStreak: { type: 'winning', count: 2 },
                currentForm: ['W', 'W', 'L', 'W', 'W', 'L', 'W', 'W', 'L', 'W']
            },
            batting: {
                totalRuns: 198765,
                averageScore: 308.1,
                highestTotal: { score: 439, against: 'West Indies', venue: 'Johannesburg', year: 2015 },
                lowestTotal: { score: 69, against: 'Australia', venue: 'Sydney', year: 1993 },
                scoresOver300: 167,
                centuries: 589,
                sixes: 2987
            },
            bowling: {
                totalWickets: 5987,
                averageWickets: 9.3,
                bestFigures: { wickets: 6, runs: 12, player: 'A. Nel', against: 'West Indies', year: 2005 },
                fiveWicketHauls: 67,
                economyRate: 4.89
            },
            records: {
                biggestWin: { margin: '258 runs', against: 'Zimbabwe', venue: 'Benoni', year: 2010 },
                highestChase: { score: 372, against: 'Australia', venue: 'Melbourne', year: 2006 },
                longestWinStreak: 17,
                longestLossStreak: 6
            }
        },
        t20i: {
            overview: {
                totalMatches: 173,
                won: 95,
                lost: 72,
                tied: 3,
                noResult: 3,
                winPercentage: 56.9,
                currentStreak: { type: 'winning', count: 1 },
                currentForm: ['W', 'L', 'W', 'L', 'W', 'W', 'L', 'W', 'L', 'W']
            },
            batting: {
                totalRuns: 26789,
                averageScore: 154.8,
                highestTotal: { score: 259, against: 'West Indies', venue: 'Centurion', year: 2023 },
                lowestTotal: { score: 69, against: 'Australia', venue: 'Sydney', year: 2006 },
                scoresOver200: 28,
                centuries: 7,
                sixes: 987
            },
            bowling: {
                totalWickets: 1456,
                averageWickets: 8.4,
                bestFigures: { wickets: 5, runs: 4, player: 'T. Shamsi', against: 'West Indies', year: 2021 },
                fiveWicketHauls: 3,
                economyRate: 7.53
            },
            records: {
                biggestWin: { margin: '119 runs', against: 'West Indies', venue: 'Centurion', year: 2023 },
                highestChase: { score: 211, against: 'England', venue: 'Cape Town', year: 2020 },
                longestWinStreak: 11,
                longestLossStreak: 5
            }
        },
        recentMatches: [
            { date: '2024-10-20', opponent: 'BAN', opponentFlag: banFlag, venue: 'Dhaka', format: 'Test', result: 'Won', margin: '7 wickets' },
            { date: '2024-10-05', opponent: 'IND', opponentFlag: indFlag, venue: 'Bangalore', format: 'T20I', result: 'Lost', margin: '11 runs' },
            { date: '2024-09-22', opponent: 'WI', opponentFlag: wiFlag, venue: 'Centurion', format: 'T20I', result: 'Won', margin: '119 runs' },
            { date: '2024-09-10', opponent: 'AUS', opponentFlag: ausFlag, venue: 'Cape Town', format: 'ODI', result: 'Lost', margin: '5 wickets' },
            { date: '2024-08-28', opponent: 'PAK', opponentFlag: pakFlag, venue: 'Johannesburg', format: 'Test', result: 'Won', margin: '139 runs' }
        ],
        squad: [
            { name: 'Temba Bavuma', role: 'Batsman', matches: 345, photo: temba },
            { name: 'Kagiso Rabada', role: 'Bowler', matches: 398, photo: rabada },
            { name: 'Quinton de Kock', role: 'Wicket Keeper', matches: 412, photo: quinton },
            { name: 'Anrich Nortje', role: 'Bowler', matches: 234, photo: nortje },
            { name: 'Aiden Markram', role: 'All-rounder', matches: 287, photo: markram }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Quinton de Kock', runs: 11234, average: 44.3, centuries: 29 },
                { name: 'Aiden Markram', runs: 7654, average: 38.9, centuries: 18 },
                { name: 'Temba Bavuma', runs: 6543, average: 36.2, centuries: 12 }
            ],
            bowlers: [
                { name: 'Kagiso Rabada', wickets: 478, average: 22.1, fiveWickets: 19 },
                { name: 'Anrich Nortje', wickets: 298, average: 24.3, fiveWickets: 11 },
                { name: 'Keshav Maharaj', wickets: 345, average: 31.5, fiveWickets: 14 }
            ]
        }
    },
    NZ: {
        team: 'New Zealand',
        country: 'NZ',
        image: nzFlag,
        color: '#000000',
        test: {
            overview: {
                totalMatches: 471,
                won: 115,
                lost: 188,
                drawn: 168,
                winPercentage: 24.4,
                currentStreak: { type: 'losing', count: 2 },
                currentForm: ['L', 'W', 'L', 'W', 'D', 'L', 'W', 'L', 'W', 'L']
            },
            batting: {
                totalRuns: 167234,
                averageScore: 276.8,
                highestTotal: { score: 690, against: 'Pakistan', venue: 'Sharjah', year: 2014 },
                lowestTotal: { score: 26, against: 'England', venue: 'Auckland', year: 1955 },
                scoresOver400: 32,
                centuries: 198,
                sixes: 1123
            },
            bowling: {
                totalWickets: 5678,
                averageWickets: 12.1,
                bestFigures: { wickets: 10, runs: 119, player: 'R. Hadlee', against: 'Australia', year: 1985 },
                fiveWicketHauls: 156,
                tenWicketHauls: 23
            },
            records: {
                biggestWin: { margin: 'innings and 301 runs', against: 'Zimbabwe', venue: 'Napier', year: 2012 },
                highestChase: { score: 451, against: 'England', venue: 'Nottingham', year: 2004 },
                longestWinStreak: 9,
                longestLossStreak: 10
            }
        },
        odi: {
            overview: {
                totalMatches: 796,
                won: 395,
                lost: 366,
                tied: 9,
                noResult: 26,
                winPercentage: 51.9,
                currentStreak: { type: 'winning', count: 1 },
                currentForm: ['W', 'L', 'W', 'W', 'L', 'W', 'L', 'W', 'W', 'L']
            },
            batting: {
                totalRuns: 234567,
                averageScore: 294.7,
                highestTotal: { score: 402, against: 'Ireland', venue: 'Aberdeen', year: 2008 },
                lowestTotal: { score: 64, against: 'Pakistan', venue: 'Sharjah', year: 1993 },
                scoresOver300: 134,
                centuries: 487,
                sixes: 2345
            },
            bowling: {
                totalWickets: 7345,
                averageWickets: 9.2,
                bestFigures: { wickets: 7, runs: 33, player: 'T. Boult', against: 'West Indies', year: 2015 },
                fiveWicketHauls: 79,
                economyRate: 5.12
            },
            records: {
                biggestWin: { margin: '290 runs', against: 'Ireland', venue: 'Aberdeen', year: 2008 },
                highestChase: { score: 351, against: 'Australia', venue: 'Hamilton', year: 2007 },
                longestWinStreak: 13,
                longestLossStreak: 8
            }
        },
        t20i: {
            overview: {
                totalMatches: 210,
                won: 108,
                lost: 95,
                tied: 4,
                noResult: 3,
                winPercentage: 53.2,
                currentStreak: { type: 'winning', count: 2 },
                currentForm: ['W', 'W', 'L', 'W', 'L', 'W', 'W', 'L', 'W', 'L']
            },
            batting: {
                totalRuns: 32456,
                averageScore: 154.5,
                highestTotal: { score: 254, against: 'West Indies', venue: 'Mount Maunganui', year: 2020 },
                lowestTotal: { score: 60, against: 'Sri Lanka', venue: 'Pallekele', year: 2019 },
                scoresOver200: 31,
                centuries: 6,
                sixes: 1098
            },
            bowling: {
                totalWickets: 1567,
                averageWickets: 7.5,
                bestFigures: { wickets: 5, runs: 21, player: 'T. Southee', against: 'Pakistan', year: 2010 },
                fiveWicketHauls: 2,
                economyRate: 7.89
            },
            records: {
                biggestWin: { margin: '119 runs', against: 'West Indies', venue: 'Mount Maunganui', year: 2020 },
                highestChase: { score: 244, against: 'West Indies', venue: 'Mount Maunganui', year: 2020 },
                longestWinStreak: 10,
                longestLossStreak: 6
            }
        },
        recentMatches: [
            { date: '2024-10-18', opponent: 'IND', opponentFlag: indFlag, venue: 'Mumbai', format: 'Test', result: 'Lost', margin: '8 wickets' },
            { date: '2024-10-14', opponent: 'AUS', opponentFlag: ausFlag, venue: 'Sydney', format: 'ODI', result: 'Lost', margin: '6 wickets' },
            { date: '2024-09-30', opponent: 'SL', opponentFlag: slFlag, venue: 'Galle', format: 'Test', result: 'Won', margin: '63 runs' },
            { date: '2024-09-15', opponent: 'BAN', opponentFlag: banFlag, venue: 'Christchurch', format: 'ODI', result: 'Won', margin: '7 wickets' },
            { date: '2024-09-01', opponent: 'ENG', opponentFlag: engFlag, venue: 'Wellington', format: 'T20I', result: 'Won', margin: '13 runs' }
        ],
        squad: [
            { name: 'Kane Williamson', role: 'Batsman', matches: 478, photo: williamson },
            { name: 'Tim Southee', role: 'Bowler', matches: 456, photo: tim },
            { name: 'Trent Boult', role: 'Bowler', matches: 423, photo: boult },
            { name: 'Tom Latham', role: 'Wicket Keeper', matches: 389, photo: tom },
            { name: 'Devon Conway', role: 'Batsman', matches: 167, photo: conway }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Kane Williamson', runs: 16234, average: 57.3, centuries: 48 },
                { name: 'Tom Latham', runs: 9876, average: 42.1, centuries: 22 },
                { name: 'Devon Conway', runs: 4567, average: 49.2, centuries: 11 }
            ],
            bowlers: [
                { name: 'Tim Southee', wickets: 687, average: 29.8, fiveWickets: 25 },
                { name: 'Trent Boult', wickets: 634, average: 27.9, fiveWickets: 28 },
                { name: 'Kyle Jamieson', wickets: 187, average: 22.1, fiveWickets: 9 }
            ]
        }
    },
    PAK: {
        team: 'Pakistan',
        country: 'PAK',
        image: pakFlag,
        color: '#01411C',
        test: {
            overview: {
                totalMatches: 447,
                won: 143,
                lost: 134,
                drawn: 170,
                winPercentage: 32.0,
                currentStreak: { type: 'losing', count: 1 },
                currentForm: ['L', 'W', 'L', 'W', 'D', 'L', 'W', 'W', 'L', 'D']
            },
            batting: {
                totalRuns: 178945,
                averageScore: 287.3,
                highestTotal: { score: 765, against: 'Sri Lanka', venue: 'Karachi', year: 2009 },
                lowestTotal: { score: 49, against: 'South Africa', venue: 'Johannesburg', year: 2013 },
                scoresOver400: 41,
                centuries: 245,
                sixes: 1345
            },
            bowling: {
                totalWickets: 6234,
                averageWickets: 13.9,
                bestFigures: { wickets: 10, runs: 77, player: 'A. Rehman', against: 'West Indies', year: 1990 },
                fiveWicketHauls: 178,
                tenWicketHauls: 29
            },
            records: {
                biggestWin: { margin: 'innings and 324 runs', against: 'Bangladesh', venue: 'Multan', year: 2001 },
                highestChase: { score: 377, against: 'Sri Lanka', venue: 'Pallekele', year: 2015 },
                longestWinStreak: 10,
                longestLossStreak: 9
            }
        },
        odi: {
            overview: {
                totalMatches: 965,
                won: 504,
                lost: 427,
                tied: 9,
                noResult: 25,
                winPercentage: 54.1,
                currentStreak: { type: 'winning', count: 2 },
                currentForm: ['W', 'W', 'L', 'W', 'L', 'W', 'W', 'L', 'W', 'W']
            },
            batting: {
                totalRuns: 267854,
                averageScore: 277.6,
                highestTotal: { score: 399, against: 'Zimbabwe', venue: 'Bulawayo', year: 2018 },
                lowestTotal: { score: 43, against: 'West Indies', venue: 'Cape Town', year: 1993 },
                scoresOver300: 145,
                centuries: 567,
                sixes: 2789
            },
            bowling: {
                totalWickets: 8765,
                averageWickets: 9.1,
                bestFigures: { wickets: 7, runs: 36, player: 'W. Akram', against: 'Kenya', year: 1996 },
                fiveWicketHauls: 89,
                economyRate: 4.93
            },
            records: {
                biggestWin: { margin: '255 runs', against: 'Zimbabwe', venue: 'Bulawayo', year: 2018 },
                highestChase: { score: 329, against: 'Bangladesh', venue: 'Mirpur', year: 2014 },
                longestWinStreak: 16,
                longestLossStreak: 8
            }
        },
        t20i: {
            overview: {
                totalMatches: 245,
                won: 150,
                lost: 88,
                tied: 4,
                noResult: 3,
                winPercentage: 63.0,
                currentStreak: { type: 'winning', count: 3 },
                currentForm: ['W', 'W', 'W', 'L', 'W', 'W', 'L', 'W', 'W', 'W']
            },
            batting: {
                totalRuns: 37654,
                averageScore: 153.7,
                highestTotal: { score: 248, against: 'Bangladesh', venue: 'Lahore', year: 2020 },
                lowestTotal: { score: 59, against: 'Australia', venue: 'Dubai', year: 2012 },
                scoresOver200: 32,
                centuries: 8,
                sixes: 1234
            },
            bowling: {
                totalWickets: 2034,
                averageWickets: 8.3,
                bestFigures: { wickets: 6, runs: 5, player: 'S. Afridi', against: 'Kenya', year: 2009 },
                fiveWicketHauls: 5,
                economyRate: 7.45
            },
            records: {
                biggestWin: { margin: '143 runs', against: 'West Indies', venue: 'Dubai', year: 2016 },
                highestChase: { score: 204, against: 'South Africa', venue: 'Centurion', year: 2021 },
                longestWinStreak: 11,
                longestLossStreak: 6
            }
        },
        recentMatches: [
            { date: '2024-10-22', opponent: 'ENG', opponentFlag: engFlag, venue: 'Multan', format: 'Test', result: 'Lost', margin: '8 wickets' },
            { date: '2024-09-25', opponent: 'AUS', opponentFlag: ausFlag, venue: 'Brisbane', format: 'Test', result: 'Lost', margin: '7 wickets' },
            { date: '2024-09-10', opponent: 'BAN', opponentFlag: banFlag, venue: 'Rawalpindi', format: 'Test', result: 'Won', margin: '6 wickets' },
            { date: '2024-08-28', opponent: 'RSA', opponentFlag: saFlag, venue: 'Johannesburg', format: 'Test', result: 'Lost', margin: '139 runs' },
            { date: '2024-08-15', opponent: 'AFG', opponentFlag: afgFlag, venue: 'Hambantota', format: 'ODI', result: 'Won', margin: '5 wickets' }
        ],
        squad: [
            { name: 'Babar Azam', role: 'Batsman', matches: 398, photo: babar },
            { name: 'Shaheen Afridi', role: 'Bowler', matches: 267, photo: shaheen },
            { name: 'Mohammad Rizwan', role: 'Wicket Keeper', matches: 312, photo: rizwan },
            { name: 'Naseem Shah', role: 'Bowler', matches: 156, photo: shah },
            { name: 'Shadab Khan', role: 'All-rounder', matches: 234, photo: shadab }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Babar Azam', runs: 13456, average: 52.3, centuries: 41 },
                { name: 'Mohammad Rizwan', runs: 8765, average: 44.2, centuries: 18 },
                { name: 'Fakhar Zaman', runs: 6543, average: 38.9, centuries: 12 }
            ],
            bowlers: [
                { name: 'Shaheen Afridi', wickets: 423, average: 23.8, fiveWickets: 16 },
                { name: 'Naseem Shah', wickets: 234, average: 26.3, fiveWickets: 8 },
                { name: 'Shadab Khan', wickets: 312, average: 28.7, fiveWickets: 9 }
            ]
        }
    },
    SL: {
        team: 'Sri Lanka',
        country: 'SL',
        image: slFlag,
        color: '#003DA5',
        test: {
            overview: {
                totalMatches: 301,
                won: 98,
                lost: 111,
                drawn: 92,
                winPercentage: 32.6,
                currentStreak: { type: 'winning', count: 1 },
                currentForm: ['W', 'L', 'W', 'L', 'D', 'L', 'W', 'L', 'W', 'D']
            },
            batting: {
                totalRuns: 145678,
                averageScore: 298.4,
                highestTotal: { score: 952, against: 'India', venue: 'Colombo', year: 1997 },
                lowestTotal: { score: 71, against: 'Pakistan', venue: 'Kandy', year: 1994 },
                scoresOver400: 36,
                centuries: 189,
                sixes: 1123
            },
            bowling: {
                totalWickets: 4567,
                averageWickets: 15.2,
                bestFigures: { wickets: 9, runs: 51, player: 'M. Muralitharan', against: 'Zimbabwe', year: 2002 },
                fiveWicketHauls: 145,
                tenWicketHauls: 22
            },
            records: {
                biggestWin: { margin: 'innings and 322 runs', against: 'Bangladesh', venue: 'Colombo', year: 2002 },
                highestChase: { score: 348, against: 'New Zealand', venue: 'Pallekele', year: 2019 },
                longestWinStreak: 8,
                longestLossStreak: 9
            }
        },
        odi: {
            overview: {
                totalMatches: 896,
                won: 419,
                lost: 431,
                tied: 10,
                noResult: 36,
                winPercentage: 49.3,
                currentStreak: { type: 'losing', count: 2 },
                currentForm: ['L', 'W', 'L', 'L', 'W', 'L', 'W', 'W', 'L', 'L']
            },
            batting: {
                totalRuns: 256789,
                averageScore: 286.6,
                highestTotal: { score: 443, against: 'Netherlands', venue: 'Amstelveen', year: 2006 },
                lowestTotal: { score: 43, against: 'South Africa', venue: 'Paarl', year: 2012 },
                scoresOver300: 156,
                centuries: 498,
                sixes: 2456
            },
            bowling: {
                totalWickets: 7654,
                averageWickets: 8.5,
                bestFigures: { wickets: 8, runs: 19, player: 'C. Vaas', against: 'Zimbabwe', year: 2001 },
                fiveWicketHauls: 76,
                economyRate: 4.98
            },
            records: {
                biggestWin: { margin: '246 runs', against: 'Netherlands', venue: 'Amstelveen', year: 2006 },
                highestChase: { score: 339, against: 'Zimbabwe', venue: 'Bulawayo', year: 2004 },
                longestWinStreak: 15,
                longestLossStreak: 10
            }
        },
        t20i: {
            overview: {
                totalMatches: 187,
                won: 88,
                lost: 95,
                tied: 2,
                noResult: 2,
                winPercentage: 48.1,
                currentStreak: { type: 'losing', count: 1 },
                currentForm: ['L', 'W', 'L', 'W', 'L', 'W', 'W', 'L', 'W', 'L']
            },
            batting: {
                totalRuns: 28765,
                averageScore: 153.8,
                highestTotal: { score: 260, against: 'Kenya', venue: 'Johannesburg', year: 2007 },
                lowestTotal: { score: 82, against: 'India', venue: 'Pune', year: 2016 },
                scoresOver200: 26,
                centuries: 5,
                sixes: 987
            },
            bowling: {
                totalWickets: 1432,
                averageWickets: 7.7,
                bestFigures: { wickets: 6, runs: 8, player: 'A. Mendis', against: 'Zimbabwe', year: 2010 },
                fiveWicketHauls: 3,
                economyRate: 7.67
            },
            records: {
                biggestWin: { margin: '172 runs', against: 'Kenya', venue: 'Johannesburg', year: 2007 },
                highestChase: { score: 208, against: 'West Indies', venue: 'Pallekele', year: 2020 },
                longestWinStreak: 9,
                longestLossStreak: 7
            }
        },
        recentMatches: [
            { date: '2024-09-30', opponent: 'NZ', opponentFlag: nzFlag, venue: 'Galle', format: 'Test', result: 'Lost', margin: '63 runs' },
            { date: '2024-09-16', opponent: 'ENG', opponentFlag: engFlag, venue: 'Lord\'s', format: 'Test', result: 'Lost', margin: '190 runs' },
            { date: '2024-09-01', opponent: 'IND', opponentFlag: indFlag, venue: 'Colombo', format: 'ODI', result: 'Lost', margin: '6 wickets' },
            { date: '2024-08-18', opponent: 'BAN', opponentFlag: banFlag, venue: 'Chattogram', format: 'T20I', result: 'Won', margin: '5 wickets' },
            { date: '2024-08-05', opponent: 'AFG', opponentFlag: afgFlag, venue: 'Hambantota', format: 'ODI', result: 'Lost', margin: '3 wickets' }
        ],
        squad: [
            { name: 'Dhananjaya de Silva', role: 'All-rounder', matches: 298, photo: silva },
            { name: 'Wanindu Hasaranga', role: 'All-rounder', matches: 234, photo: hasaranga },
            { name: 'Kusal Mendis', role: 'Wicket Keeper', matches: 345, photo: kusal },
            { name: 'Maheesh Theekshana', role: 'Bowler', matches: 156, photo: maheesh },
            { name: 'Pathum Nissanka', role: 'Batsman', matches: 134, photo: pathum }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Kusal Mendis', runs: 8765, average: 39.4, centuries: 19 },
                { name: 'Dhananjaya de Silva', runs: 7654, average: 42.1, centuries: 16 },
                { name: 'Pathum Nissanka', runs: 4321, average: 38.7, centuries: 9 }
            ],
            bowlers: [
                { name: 'Wanindu Hasaranga', wickets: 345, average: 25.8, fiveWickets: 12 },
                { name: 'Maheesh Theekshana', wickets: 234, average: 27.3, fiveWickets: 7 },
                { name: 'Dushmantha Chameera', wickets: 198, average: 29.1, fiveWickets: 5 }
            ]
        }
    },
    WI: {
        team: 'West Indies',
        country: 'WI',
        image: wiFlag,
        color: '#7B0041',
        test: {
            overview: {
                totalMatches: 580,
                won: 183,
                lost: 201,
                drawn: 196,
                winPercentage: 31.6,
                currentStreak: { type: 'losing', count: 3 },
                currentForm: ['L', 'L', 'W', 'L', 'D', 'L', 'W', 'L', 'L', 'D']
            },
            batting: {
                totalRuns: 234567,
                averageScore: 287.5,
                highestTotal: { score: 751, against: 'England', venue: 'St. John\'s', year: 2009 },
                lowestTotal: { score: 47, against: 'England', venue: 'Kingston', year: 2004 },
                scoresOver400: 48,
                centuries: 267,
                sixes: 1678
            },
            bowling: {
                totalWickets: 7234,
                averageWickets: 12.5,
                bestFigures: { wickets: 9, runs: 95, player: 'C. Walsh', against: 'Australia', year: 1988 },
                fiveWicketHauls: 198,
                tenWicketHauls: 31
            },
            records: {
                biggestWin: { margin: 'innings and 226 runs', against: 'Bangladesh', venue: 'Dhaka', year: 2002 },
                highestChase: { score: 418, against: 'Australia', venue: 'St. John\'s', year: 2003 },
                longestWinStreak: 11,
                longestLossStreak: 11
            }
        },
        odi: {
            overview: {
                totalMatches: 858,
                won: 436,
                lost: 394,
                tied: 8,
                noResult: 20,
                winPercentage: 52.5,
                currentStreak: { type: 'losing', count: 2 },
                currentForm: ['L', 'W', 'L', 'L', 'W', 'L', 'W', 'W', 'L', 'L']
            },
            batting: {
                totalRuns: 245678,
                averageScore: 286.3,
                highestTotal: { score: 421, against: 'Canada', venue: 'Dhaka', year: 2011 },
                lowestTotal: { score: 54, against: 'South Africa', venue: 'Cape Town', year: 2004 },
                scoresOver300: 167,
                centuries: 534,
                sixes: 3124
            },
            bowling: {
                totalWickets: 7234,
                averageWickets: 8.4,
                bestFigures: { wickets: 7, runs: 51, player: 'W. Davis', against: 'Australia', year: 1983 },
                fiveWicketHauls: 67,
                economyRate: 5.21
            },
            records: {
                biggestWin: { margin: '257 runs', against: 'Canada', venue: 'Dhaka', year: 2011 },
                highestChase: { score: 326, against: 'Sri Lanka', venue: 'Pallekele', year: 2020 },
                longestWinStreak: 14,
                longestLossStreak: 9
            }
        },
        t20i: {
            overview: {
                totalMatches: 201,
                won: 89,
                lost: 105,
                tied: 4,
                noResult: 3,
                winPercentage: 45.9,
                currentStreak: { type: 'losing', count: 1 },
                currentForm: ['L', 'W', 'L', 'W', 'L', 'L', 'W', 'W', 'L', 'W']
            },
            batting: {
                totalRuns: 31234,
                averageScore: 155.4,
                highestTotal: { score: 267, against: 'England', venue: 'St. Lucia', year: 2024 },
                lowestTotal: { score: 45, against: 'England', venue: 'Bridgetown', year: 2019 },
                scoresOver200: 28,
                centuries: 7,
                sixes: 1345
            },
            bowling: {
                totalWickets: 1543,
                averageWickets: 7.7,
                bestFigures: { wickets: 5, runs: 6, player: 'S. Narine', against: 'Sri Lanka', year: 2012 },
                fiveWicketHauls: 3,
                economyRate: 7.98
            },
            records: {
                biggestWin: { margin: '8 wickets', against: 'England', venue: 'Bridgetown', year: 2022 },
                highestChase: { score: 245, against: 'New Zealand', venue: 'Mount Maunganui', year: 2020 },
                longestWinStreak: 9,
                longestLossStreak: 8
            }
        },
        recentMatches: [
            { date: '2024-09-28', opponent: 'ENG', opponentFlag: engFlag, venue: 'St. Lucia', format: 'T20I', result: 'Lost', margin: '137 runs' },
            { date: '2024-09-22', opponent: 'RSA', opponentFlag: saFlag, venue: 'Centurion', format: 'T20I', result: 'Lost', margin: '119 runs' },
            { date: '2024-09-18', opponent: 'AUS', opponentFlag: ausFlag, venue: 'Adelaide', format: 'ODI', result: 'Lost', margin: '89 runs' },
            { date: '2024-09-01', opponent: 'ENG', opponentFlag: engFlag, venue: 'Antigua', format: 'ODI', result: 'Lost', margin: '6 wickets' },
            { date: '2024-08-15', opponent: 'BAN', opponentFlag: banFlag, venue: 'Kingstown', format: 'ODI', result: 'Won', margin: '4 wickets' }
        ],
        squad: [
            { name: 'Shai Hope', role: 'Wicket Keeper', matches: 345, photo: shai },
            { name: 'Jason Holder', role: 'All-rounder', matches: 398, photo: jason },
            { name: 'Alzarri Joseph', role: 'Bowler', matches: 234, photo: alzarri },
            { name: 'Nicholas Pooran', role: 'Wicket Keeper', matches: 289, photo: pooran },
            { name: 'Rovman Powell', role: 'All-rounder', matches: 198, photo: rovman }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Shai Hope', runs: 9876, average: 43.2, centuries: 23 },
                { name: 'Nicholas Pooran', runs: 6543, average: 38.9, centuries: 14 },
                { name: 'Rovman Powell', runs: 4321, average: 35.7, centuries: 9 }
            ],
            bowlers: [
                { name: 'Jason Holder', wickets: 456, average: 27.8, fiveWickets: 16 },
                { name: 'Alzarri Joseph', wickets: 312, average: 26.3, fiveWickets: 11 },
                { name: 'Kemar Roach', wickets: 387, average: 28.9, fiveWickets: 14 }
            ]
        }
    },
    BAN: {
        team: 'Bangladesh',
        country: 'BAN',
        image: banFlag,
        color: '#006A4E',
        test: {
            overview: {
                totalMatches: 143,
                won: 18,
                lost: 96,
                drawn: 29,
                winPercentage: 12.6,
                currentStreak: { type: 'losing', count: 4 },
                currentForm: ['L', 'L', 'L', 'W', 'L', 'L', 'D', 'L', 'L', 'D']
            },
            batting: {
                totalRuns: 89234,
                averageScore: 246.8,
                highestTotal: { score: 595, against: 'Zimbabwe', venue: 'Chittagong', year: 2018 },
                lowestTotal: { score: 62, against: 'Sri Lanka', venue: 'Colombo', year: 2007 },
                scoresOver400: 8,
                centuries: 67,
                sixes: 567
            },
            bowling: {
                totalWickets: 2345,
                averageWickets: 16.4,
                bestFigures: { wickets: 8, runs: 39, player: 'T. Ahmed', against: 'Zimbabwe', year: 2020 },
                fiveWicketHauls: 45,
                tenWicketHauls: 5
            },
            records: {
                biggestWin: { margin: '226 runs', against: 'Zimbabwe', venue: 'Sylhet', year: 2014 },
                highestChase: { score: 217, against: 'Sri Lanka', venue: 'Pallekele', year: 2017 },
                longestWinStreak: 3,
                longestLossStreak: 14
            }
        },
        odi: {
            overview: {
                totalMatches: 415,
                won: 150,
                lost: 250,
                tied: 5,
                noResult: 10,
                winPercentage: 37.5,
                currentStreak: { type: 'losing', count: 2 },
                currentForm: ['L', 'W', 'L', 'L', 'W', 'L', 'W', 'L', 'L', 'W']
            },
            batting: {
                totalRuns: 123456,
                averageScore: 297.5,
                highestTotal: { score: 338, against: 'Zimbabwe', venue: 'Harare', year: 2009 },
                lowestTotal: { score: 58, against: 'West Indies', venue: 'Mirpur', year: 2011 },
                scoresOver300: 23,
                centuries: 189,
                sixes: 1234
            },
            bowling: {
                totalWickets: 3456,
                averageWickets: 8.3,
                bestFigures: { wickets: 6, runs: 4, player: 'M. Mortaza', against: 'Kenya', year: 2006 },
                fiveWicketHauls: 23,
                economyRate: 5.45
            },
            records: {
                biggestWin: { margin: '160 runs', against: 'Afghanistan', venue: 'Mirpur', year: 2016 },
                highestChase: { score: 322, against: 'Pakistan', venue: 'Mirpur', year: 2015 },
                longestWinStreak: 7,
                longestLossStreak: 13
            }
        },
        t20i: {
            overview: {
                totalMatches: 158,
                won: 61,
                lost: 92,
                tied: 3,
                noResult: 2,
                winPercentage: 39.9,
                currentStreak: { type: 'losing', count: 1 },
                currentForm: ['L', 'W', 'L', 'W', 'L', 'L', 'W', 'L', 'W', 'L']
            },
            batting: {
                totalRuns: 23456,
                averageScore: 148.5,
                highestTotal: { score: 215, against: 'Sri Lanka', venue: 'Sylhet', year: 2018 },
                lowestTotal: { score: 58, against: 'New Zealand', venue: 'Kolkata', year: 2016 },
                scoresOver200: 11,
                centuries: 3,
                sixes: 678
            },
            bowling: {
                totalWickets: 1123,
                averageWickets: 7.1,
                bestFigures: { wickets: 6, runs: 7, player: 'A. Khan', against: 'West Indies', year: 2018 },
                fiveWicketHauls: 2,
                economyRate: 8.12
            },
            records: {
                biggestWin: { margin: '45 runs', against: 'Zimbabwe', venue: 'Mirpur', year: 2020 },
                highestChase: { score: 215, against: 'Sri Lanka', venue: 'Sylhet', year: 2018 },
                longestWinStreak: 6,
                longestLossStreak: 9
            }
        },
        recentMatches: [
            { date: '2024-10-10', opponent: 'IND', opponentFlag: indFlag, venue: 'Pune', format: 'Test', result: 'Lost', margin: '7 wickets' },
            { date: '2024-09-29', opponent: 'IND', opponentFlag: indFlag, venue: 'Chennai', format: 'Test', result: 'Lost', margin: '280 runs' },
            { date: '2024-09-19', opponent: 'IND', opponentFlag: indFlag, venue: 'Kanpur', format: 'Test', result: 'Lost', margin: '7 wickets' },
            { date: '2024-09-15', opponent: 'NZ', opponentFlag: nzFlag, venue: 'Christchurch', format: 'ODI', result: 'Lost', margin: '7 wickets' },
            { date: '2024-09-10', opponent: 'PAK', opponentFlag: pakFlag, venue: 'Rawalpindi', format: 'Test', result: 'Lost', margin: '6 wickets' }
        ],
        squad: [
            { name: 'Shakib Al Hasan', role: 'All-rounder', matches: 467, photo: shakib },
            { name: 'Mushfiqur Rahim', role: 'Wicket Keeper', matches: 489, photo: mushfiqur },
            { name: 'Taskin Ahmed', role: 'Bowler', matches: 234, photo: taskin },
            { name: 'Litton Das', role: 'Wicket Keeper', matches: 198, photo: das },
            { name: 'Mehidy Hasan', role: 'All-rounder', matches: 267, photo: miraz }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Mushfiqur Rahim', runs: 11234, average: 37.6, centuries: 19 },
                { name: 'Shakib Al Hasan', runs: 9876, average: 39.2, centuries: 16 },
                { name: 'Litton Das', runs: 4321, average: 35.8, centuries: 7 }
            ],
            bowlers: [
                { name: 'Shakib Al Hasan', wickets: 467, average: 31.2, fiveWickets: 19 },
                { name: 'Taskin Ahmed', wickets: 234, average: 32.5, fiveWickets: 8 },
                { name: 'Mehidy Hasan', wickets: 298, average: 34.1, fiveWickets: 11 }
            ]
        }
    },
    AFG: {
        team: 'Afghanistan',
        country: 'AFG',
        image: afgFlag,
        color: '#D32011',
        test: {
            overview: {
                totalMatches: 9,
                won: 3,
                lost: 5,
                drawn: 1,
                winPercentage: 33.3,
                currentStreak: { type: 'losing', count: 1 },
                currentForm: ['L', 'W', 'L', 'W', 'D', 'L', 'W', 'L', 'L', 'L']
            },
            batting: {
                totalRuns: 8234,
                averageScore: 274.5,
                highestTotal: { score: 545, against: 'Zimbabwe', venue: 'Abu Dhabi', year: 2021 },
                lowestTotal: { score: 103, against: 'India', venue: 'Bangalore', year: 2018 },
                scoresOver400: 2,
                centuries: 12,
                sixes: 234
            },
            bowling: {
                totalWickets: 267,
                averageWickets: 29.7,
                bestFigures: { wickets: 7, runs: 107, player: 'R. Khan', against: 'Bangladesh', year: 2019 },
                fiveWicketHauls: 8,
                tenWicketHauls: 1
            },
            records: {
                biggestWin: { margin: '7 wickets', against: 'Zimbabwe', venue: 'Abu Dhabi', year: 2021 },
                highestChase: { score: 114, against: 'Ireland', venue: 'Dehradun', year: 2019 },
                longestWinStreak: 1,
                longestLossStreak: 3
            }
        },
        odi: {
            overview: {
                totalMatches: 152,
                won: 76,
                lost: 72,
                tied: 1,
                noResult: 3,
                winPercentage: 51.4,
                currentStreak: { type: 'winning', count: 2 },
                currentForm: ['W', 'W', 'L', 'W', 'L', 'W', 'W', 'L', 'W', 'W']
            },
            batting: {
                totalRuns: 45678,
                averageScore: 300.5,
                highestTotal: { score: 378, against: 'Ireland', venue: 'Greater Noida', year: 2017 },
                lowestTotal: { score: 72, against: 'Australia', venue: 'Perth', year: 2015 },
                scoresOver300: 34,
                centuries: 89,
                sixes: 1123
            },
            bowling: {
                totalWickets: 1345,
                averageWickets: 8.8,
                bestFigures: { wickets: 7, runs: 18, player: 'R. Khan', against: 'West Indies', year: 2017 },
                fiveWicketHauls: 19,
                economyRate: 5.21
            },
            records: {
                biggestWin: { margin: '154 runs', against: 'Ireland', venue: 'Sharjah', year: 2021 },
                highestChase: { score: 279, against: 'Bangladesh', venue: 'Mirpur', year: 2016 },
                longestWinStreak: 9,
                longestLossStreak: 7
            }
        },
        t20i: {
            overview: {
                totalMatches: 134,
                won: 82,
                lost: 49,
                tied: 2,
                noResult: 1,
                winPercentage: 62.6,
                currentStreak: { type: 'winning', count: 3 },
                currentForm: ['W', 'W', 'W', 'L', 'W', 'W', 'L', 'W', 'W', 'W']
            },
            batting: {
                totalRuns: 20123,
                averageScore: 150.2,
                highestTotal: { score: 278, against: 'Ireland', venue: 'Dehradun', year: 2019 },
                lowestTotal: { score: 80, against: 'Sri Lanka', venue: 'Sharjah', year: 2012 },
                scoresOver200: 18,
                centuries: 4,
                sixes: 789
            },
            bowling: {
                totalWickets: 1067,
                averageWickets: 8.0,
                bestFigures: { wickets: 6, runs: 15, player: 'N. Zadran', against: 'Zimbabwe', year: 2018 },
                fiveWicketHauls: 4,
                economyRate: 7.34
            },
            records: {
                biggestWin: { margin: '154 runs', against: 'Ireland', venue: 'Dehradun', year: 2019 },
                highestChase: { score: 200, against: 'Zimbabwe', venue: 'Sharjah', year: 2018 },
                longestWinStreak: 12,
                longestLossStreak: 4
            }
        },
        recentMatches: [
            { date: '2024-08-15', opponent: 'PAK', opponentFlag: pakFlag, venue: 'Hambantota', format: 'ODI', result: 'Lost', margin: '5 wickets' },
            { date: '2024-08-05', opponent: 'SL', opponentFlag: slFlag, venue: 'Hambantota', format: 'ODI', result: 'Won', margin: '3 wickets' },
            { date: '2024-07-22', opponent: 'IRE', opponentFlag: ireFlag, venue: 'Greater Noida', format: 'T20I', result: 'Won', margin: '6 wickets' },
            { date: '2024-07-10', opponent: 'ZIM', opponentFlag: zimFlag, venue: 'Harare', format: 'ODI', result: 'Won', margin: '7 wickets' },
            { date: '2024-06-28', opponent: 'BAN', opponentFlag: banFlag, venue: 'Sharjah', format: 'T20I', result: 'Won', margin: '8 wickets' }
        ],
        squad: [
            { name: 'Rashid Khan', role: 'All-rounder', matches: 298, photo: rashidKhan },
            { name: 'Mohammad Nabi', role: 'All-rounder', matches: 345, photo: nabi },
            { name: 'Rahmanullah Gurbaz', role: 'Wicket Keeper', matches: 134, photo: gurbaz },
            { name: 'Fazalhaq Farooqi', role: 'Bowler', matches: 98, photo: farooqi },
            { name: 'Naveen-ul-Haq', role: 'Bowler', matches: 123, photo: naveen }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Rahmanullah Gurbaz', runs: 4567, average: 38.2, centuries: 9 },
                { name: 'Mohammad Nabi', runs: 5432, average: 34.8, centuries: 7 },
                { name: 'Ibrahim Zadran', runs: 3456, average: 32.1, centuries: 5 }
            ],
            bowlers: [
                { name: 'Rashid Khan', wickets: 378, average: 18.9, fiveWickets: 15 },
                { name: 'Fazalhaq Farooqi', wickets: 134, average: 21.3, fiveWickets: 6 },
                { name: 'Naveen-ul-Haq', wickets: 156, average: 22.7, fiveWickets: 4 }
            ]
        }
    },
    IRE: {
        team: 'Ireland',
        country: 'IRE',
        image: ireFlag,
        color: '#169B62',
        test: {
            overview: {
                totalMatches: 7,
                won: 1,
                lost: 5,
                drawn: 1,
                winPercentage: 14.3,
                currentStreak: { type: 'losing', count: 2 },
                currentForm: ['L', 'W', 'L', 'D', 'L', 'L', 'L', 'L', 'L', 'L']
            },
            batting: {
                totalRuns: 5678,
                averageScore: 234.5,
                highestTotal: { score: 339, against: 'Afghanistan', venue: 'Dehradun', year: 2019 },
                lowestTotal: { score: 98, against: 'England', venue: 'Lord\'s', year: 2019 },
                scoresOver400: 0,
                centuries: 4,
                sixes: 123
            },
            bowling: {
                totalWickets: 189,
                averageWickets: 27.0,
                bestFigures: { wickets: 5, runs: 66, player: 'T. Murtagh', against: 'England', year: 2019 },
                fiveWicketHauls: 3,
                tenWicketHauls: 0
            },
            records: {
                biggestWin: { margin: '143 runs', against: 'Afghanistan', venue: 'Dehradun', year: 2019 },
                highestChase: { score: 115, against: 'Afghanistan', venue: 'Dehradun', year: 2019 },
                longestWinStreak: 1,
                longestLossStreak: 5
            }
        },
        odi: {
            overview: {
                totalMatches: 182,
                won: 77,
                lost: 96,
                tied: 4,
                noResult: 5,
                winPercentage: 44.5,
                currentStreak: { type: 'losing', count: 1 },
                currentForm: ['L', 'W', 'W', 'L', 'W', 'L', 'W', 'L', 'W', 'L']
            },
            batting: {
                totalRuns: 54321,
                averageScore: 298.5,
                highestTotal: { score: 329, against: 'England', venue: 'Malahide', year: 2020 },
                lowestTotal: { score: 77, against: 'Pakistan', venue: 'Clontarf', year: 2013 },
                scoresOver300: 28,
                centuries: 67,
                sixes: 890
            },
            bowling: {
                totalWickets: 1234,
                averageWickets: 6.8,
                bestFigures: { wickets: 5, runs: 27, player: 'A. McBrine', against: 'Zimbabwe', year: 2021 },
                fiveWicketHauls: 8,
                economyRate: 5.67
            },
            records: {
                biggestWin: { margin: '122 runs', against: 'UAE', venue: 'Dublin', year: 2019 },
                highestChase: { score: 330, against: 'England', venue: 'Malahide', year: 2020 },
                longestWinStreak: 7,
                longestLossStreak: 9
            }
        },
        t20i: {
            overview: {
                totalMatches: 142,
                won: 62,
                lost: 75,
                tied: 3,
                noResult: 2,
                winPercentage: 45.3,
                currentStreak: { type: 'winning', count: 1 },
                currentForm: ['W', 'L', 'W', 'L', 'L', 'W', 'L', 'W', 'W', 'L']
            },
            batting: {
                totalRuns: 21234,
                averageScore: 149.5,
                highestTotal: { score: 225, against: 'Afghanistan', venue: 'Dehradun', year: 2019 },
                lowestTotal: { score: 68, against: 'West Indies', venue: 'Bridgetown', year: 2020 },
                scoresOver200: 12,
                centuries: 2,
                sixes: 567
            },
            bowling: {
                totalWickets: 987,
                averageWickets: 7.0,
                bestFigures: { wickets: 5, runs: 27, player: 'G. Dockrell', against: 'Afghanistan', year: 2017 },
                fiveWicketHauls: 2,
                economyRate: 8.23
            },
            records: {
                biggestWin: { margin: '88 runs', against: 'Scotland', venue: 'Belfast', year: 2019 },
                highestChase: { score: 195, against: 'Netherlands', venue: 'Abu Dhabi', year: 2021 },
                longestWinStreak: 6,
                longestLossStreak: 7
            }
        },
        recentMatches: [
            { date: '2024-07-22', opponent: 'AFG', opponentFlag: afgFlag, venue: 'Greater Noida', format: 'T20I', result: 'Lost', margin: '6 wickets' },
            { date: '2024-07-10', opponent: 'SCO', opponentFlag: scoFlag, venue: 'Belfast', format: 'ODI', result: 'Won', margin: '5 wickets' },
            { date: '2024-06-28', opponent: 'NED', opponentFlag: nedFlag, venue: 'Dublin', format: 'T20I', result: 'Won', margin: '7 wickets' },
            { date: '2024-06-15', opponent: 'ZIM', opponentFlag: zimFlag, venue: 'Harare', format: 'ODI', result: 'Lost', margin: '3 wickets' },
            { date: '2024-06-01', opponent: 'UAE', opponentFlag: uaeFlag, venue: 'Dublin', format: 'T20I', result: 'Won', margin: '6 wickets' }
        ],
        squad: [
            { name: 'Paul Stirling', role: 'Batsman', matches: 287, photo: paul },
            { name: 'Curtis Campher', role: 'All-rounder', matches: 123, photo: campher },
            { name: 'Lorcan Tucker', role: 'Wicket Keeper', matches: 156, photo: tucker },
            { name: 'Mark Adair', role: 'Bowler', matches: 145, photo: adair },
            { name: 'George Dockrell', role: 'All-rounder', matches: 234, photo: dockrell }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Paul Stirling', runs: 7654, average: 32.4, centuries: 12 },
                { name: 'Curtis Campher', runs: 3456, average: 28.9, centuries: 5 },
                { name: 'Harry Tector', runs: 4321, average: 35.6, centuries: 7 }
            ],
            bowlers: [
                { name: 'Mark Adair', wickets: 189, average: 28.7, fiveWickets: 4 },
                { name: 'George Dockrell', wickets: 234, average: 32.1, fiveWickets: 6 },
                { name: 'Josh Little', wickets: 156, average: 29.5, fiveWickets: 3 }
            ]
        }
    },
    ZIM: {
        team: 'Zimbabwe',
        country: 'ZIM',
        image: zimFlag,
        color: '#006400',
        test: {
            overview: {
                totalMatches: 112,
                won: 13,
                lost: 72,
                drawn: 27,
                winPercentage: 11.6,
                currentStreak: { type: 'losing', count: 5 },
                currentForm: ['L', 'L', 'L', 'W', 'L', 'L', 'D', 'L', 'L', 'L']
            },
            batting: {
                totalRuns: 67890,
                averageScore: 243.2,
                highestTotal: { score: 563, against: 'West Indies', venue: 'Harare', year: 2001 },
                lowestTotal: { score: 54, against: 'South Africa', venue: 'Cape Town', year: 2005 },
                scoresOver400: 5,
                centuries: 34,
                sixes: 456
            },
            bowling: {
                totalWickets: 1678,
                averageWickets: 15.0,
                bestFigures: { wickets: 8, runs: 71, player: 'A. Streak', against: 'New Zealand', year: 2000 },
                fiveWicketHauls: 34,
                tenWicketHauls: 3
            },
            records: {
                biggestWin: { margin: 'innings and 175 runs', against: 'Bangladesh', venue: 'Chittagong', year: 2001 },
                highestChase: { score: 326, against: 'Pakistan', venue: 'Bulawayo', year: 2013 },
                longestWinStreak: 3,
                longestLossStreak: 11
            }
        },
        odi: {
            overview: {
                totalMatches: 556,
                won: 170,
                lost: 360,
                tied: 8,
                noResult: 18,
                winPercentage: 32.1,
                currentStreak: { type: 'losing', count: 3 },
                currentForm: ['L', 'W', 'L', 'L', 'W', 'L', 'L', 'W', 'L', 'L']
            },
            batting: {
                totalRuns: 156789,
                averageScore: 281.9,
                highestTotal: { score: 351, against: 'Kenya', venue: 'Mombasa', year: 2009 },
                lowestTotal: { score: 35, against: 'Sri Lanka', venue: 'Harare', year: 2004 },
                scoresOver300: 45,
                centuries: 178,
                sixes: 1456
            },
            bowling: {
                totalWickets: 4567,
                averageWickets: 8.2,
                bestFigures: { wickets: 6, runs: 19, player: 'T. Panyangara', against: 'Kenya', year: 2009 },
                fiveWicketHauls: 23,
                economyRate: 5.34
            },
            records: {
                biggestWin: { margin: '257 runs', against: 'Namibia', venue: 'Harare', year: 2003 },
                highestChase: { score: 318, against: 'Bangladesh', venue: 'Bulawayo', year: 2009 },
                longestWinStreak: 8,
                longestLossStreak: 14
            }
        },
        t20i: {
            overview: {
                totalMatches: 127,
                won: 45,
                lost: 78,
                tied: 2,
                noResult: 2,
                winPercentage: 36.6,
                currentStreak: { type: 'losing', count: 2 },
                currentForm: ['L', 'W', 'L', 'L', 'W', 'L', 'W', 'L', 'L', 'W']
            },
            batting: {
                totalRuns: 18765,
                averageScore: 147.8,
                highestTotal: { score: 241, against: 'Namibia', venue: 'Windhoek', year: 2022 },
                lowestTotal: { score: 56, against: 'Sri Lanka', venue: 'Hambantota', year: 2016 },
                scoresOver200: 8,
                centuries: 2,
                sixes: 567
            },
            bowling: {
                totalWickets: 876,
                averageWickets: 6.9,
                bestFigures: { wickets: 5, runs: 3, player: 'C. Ervine', against: 'UAE', year: 2016 },
                fiveWicketHauls: 2,
                economyRate: 8.45
            },
            records: {
                biggestWin: { margin: '89 runs', against: 'Namibia', venue: 'Windhoek', year: 2022 },
                highestChase: { score: 167, against: 'Netherlands', venue: 'Sylhet', year: 2014 },
                longestWinStreak: 5,
                longestLossStreak: 10
            }
        },
        recentMatches: [
            { date: '2024-07-10', opponent: 'AFG', opponentFlag: afgFlag, venue: 'Harare', format: 'ODI', result: 'Lost', margin: '7 wickets' },
            { date: '2024-06-15', opponent: 'IRE', opponentFlag: ireFlag, venue: 'Harare', format: 'ODI', result: 'Won', margin: '3 wickets' },
            { date: '2024-06-01', opponent: 'NED', opponentFlag: nedFlag, venue: 'Bulawayo', format: 'T20I', result: 'Lost', margin: '6 wickets' },
            { date: '2024-05-18', opponent: 'BAN', opponentFlag: banFlag, venue: 'Harare', format: 'ODI', result: 'Won', margin: '5 wickets' },
            { date: '2024-05-05', opponent: 'UAE', opponentFlag: uaeFlag, venue: 'Harare', format: 'T20I', result: 'Won', margin: '7 wickets' }
        ],
        squad: [
            { name: 'Craig Ervine', role: 'Batsman', matches: 234, photo: ervine },
            { name: 'Sikandar Raza', role: 'All-rounder', matches: 278, photo: raza },
            { name: 'Sean Williams', role: 'All-rounder', matches: 289, photo: sean },
            { name: 'Blessing Muzarabani', role: 'Bowler', matches: 156, photo: muzarabani },
            { name: 'Regis Chakabva', role: 'Wicket Keeper', matches: 198, photo: regis }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Sikandar Raza', runs: 6543, average: 33.4, centuries: 9 },
                { name: 'Sean Williams', runs: 7654, average: 35.8, centuries: 11 },
                { name: 'Craig Ervine', runs: 5432, average: 31.2, centuries: 7 }
            ],
            bowlers: [
                { name: 'Blessing Muzarabani', wickets: 198, average: 31.5, fiveWickets: 5 },
                { name: 'Sikandar Raza', wickets: 234, average: 34.2, fiveWickets: 6 },
                { name: 'Sean Williams', wickets: 189, average: 36.8, fiveWickets: 4 }
            ]
        }
    },
    UAE: {
        team: 'United Arab Emirates',
        country: 'UAE',
        image: uaeFlag,
        color: '#00732F',
        test: {
            overview: {
                totalMatches: 0,
                won: 0,
                lost: 0,
                drawn: 0,
                winPercentage: 0,
                currentStreak: { type: 'winning', count: 0 },
                currentForm: []
            },
            batting: {
                totalRuns: 0,
                averageScore: 0,
                highestTotal: { score: 0, against: '-', venue: '-', year: 0 },
                lowestTotal: { score: 0, against: '-', venue: '-', year: 0 },
                scoresOver400: 0,
                centuries: 0,
                sixes: 0
            },
            bowling: {
                totalWickets: 0,
                averageWickets: 0,
                bestFigures: { wickets: 0, runs: 0, player: '-', against: '-', year: 0 },
                fiveWicketHauls: 0,
                tenWicketHauls: 0
            },
            records: {
                biggestWin: { margin: '-', against: '-', venue: '-', year: 0 },
                highestChase: { score: 0, against: '-', venue: '-', year: 0 },
                longestWinStreak: 0,
                longestLossStreak: 0
            }
        },
        odi: {
            overview: {
                totalMatches: 87,
                won: 34,
                lost: 50,
                tied: 1,
                noResult: 2,
                winPercentage: 40.5,
                currentStreak: { type: 'losing', count: 2 },
                currentForm: ['L', 'W', 'L', 'L', 'W', 'L', 'W', 'W', 'L', 'L']
            },
            batting: {
                totalRuns: 24567,
                averageScore: 282.4,
                highestTotal: { score: 307, against: 'Ireland', venue: 'Dublin', year: 2021 },
                lowestTotal: { score: 68, against: 'Scotland', venue: 'Abu Dhabi', year: 2019 },
                scoresOver300: 7,
                centuries: 23,
                sixes: 456
            },
            bowling: {
                totalWickets: 678,
                averageWickets: 7.8,
                bestFigures: { wickets: 5, runs: 24, player: 'R. Mustafa', against: 'Namibia', year: 2019 },
                fiveWicketHauls: 4,
                economyRate: 5.78
            },
            records: {
                biggestWin: { margin: '129 runs', against: 'Hong Kong', venue: 'Dubai', year: 2018 },
                highestChase: { score: 279, against: 'Netherlands', venue: 'Abu Dhabi', year: 2021 },
                longestWinStreak: 5,
                longestLossStreak: 9
            }
        },
        t20i: {
            overview: {
                totalMatches: 98,
                won: 41,
                lost: 54,
                tied: 2,
                noResult: 1,
                winPercentage: 43.2,
                currentStreak: { type: 'losing', count: 1 },
                currentForm: ['L', 'W', 'W', 'L', 'W', 'L', 'L', 'W', 'L', 'W']
            },
            batting: {
                totalRuns: 14567,
                averageScore: 148.6,
                highestTotal: { score: 220, against: 'Netherlands', venue: 'Abu Dhabi', year: 2021 },
                lowestTotal: { score: 73, against: 'Ireland', venue: 'Abu Dhabi', year: 2019 },
                scoresOver200: 5,
                centuries: 1,
                sixes: 345
            },
            bowling: {
                totalWickets: 678,
                averageWickets: 6.9,
                bestFigures: { wickets: 4, runs: 12, player: 'J. Siddique', against: 'Hong Kong', year: 2016 },
                fiveWicketHauls: 0,
                economyRate: 8.34
            },
            records: {
                biggestWin: { margin: '68 runs', against: 'Hong Kong', venue: 'Dubai', year: 2018 },
                highestChase: { score: 189, against: 'Netherlands', venue: 'Abu Dhabi', year: 2021 },
                longestWinStreak: 4,
                longestLossStreak: 7
            }
        },
        recentMatches: [
            { date: '2024-06-01', opponent: 'IRE', opponentFlag: ireFlag, venue: 'Dublin', format: 'T20I', result: 'Lost', margin: '6 wickets' },
            { date: '2024-05-18', opponent: 'NED', opponentFlag: nedFlag, venue: 'Abu Dhabi', format: 'ODI', result: 'Won', margin: '4 wickets' },
            { date: '2024-05-05', opponent: 'ZIM', opponentFlag: zimFlag, venue: 'Harare', format: 'T20I', result: 'Lost', margin: '7 wickets' },
            { date: '2024-04-22', opponent: 'SCO', opponentFlag: scoFlag, venue: 'Dubai', format: 'T20I', result: 'Won', margin: '5 wickets' },
            { date: '2024-04-10', opponent: 'NED', opponentFlag: nedFlag, venue: 'Amstelveen', format: 'ODI', result: 'Lost', margin: '6 wickets' }
        ],
        squad: [
            { name: 'Muhammad Waseem', role: 'Batsman', matches: 123, photo: waseem },
            { name: 'CP Rizwan', role: 'All-rounder', matches: 145, photo: cprizwan },
            { name: 'Vriitya Aravind', role: 'Wicket Keeper', matches: 98, photo: aravind },
            { name: 'Junaid Siddique', role: 'Bowler', matches: 134, photo: junaid },
            { name: 'Rohan Mustafa', role: 'All-rounder', matches: 167, photo: rohan }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Muhammad Waseem', runs: 3456, average: 28.4, centuries: 4 },
                { name: 'CP Rizwan', runs: 2987, average: 25.9, centuries: 3 },
                { name: 'Vriitya Aravind', runs: 2345, average: 24.2, centuries: 2 }
            ],
            bowlers: [
                { name: 'Rohan Mustafa', wickets: 134, average: 29.8, fiveWickets: 3 },
                { name: 'Junaid Siddique', wickets: 156, average: 31.2, fiveWickets: 2 },
                { name: 'Ahmed Raza', wickets: 123, average: 32.5, fiveWickets: 2 }
            ]
        }
    },
    NED: {
        team: 'Netherlands',
        country: 'NED',
        image: nedFlag,
        color: '#FF4F00',
        test: {
            overview: {
                totalMatches: 0,
                won: 0,
                lost: 0,
                drawn: 0,
                winPercentage: 0,
                currentStreak: { type: 'winning', count: 0 },
                currentForm: []
            },
            batting: {
                totalRuns: 0,
                averageScore: 0,
                highestTotal: { score: 0, against: '-', venue: '-', year: 0 },
                lowestTotal: { score: 0, against: '-', venue: '-', year: 0 },
                scoresOver400: 0,
                centuries: 0,
                sixes: 0
            },
            bowling: {
                totalWickets: 0,
                averageWickets: 0,
                bestFigures: { wickets: 0, runs: 0, player: '-', against: '-', year: 0 },
                fiveWicketHauls: 0,
                tenWicketHauls: 0
            },
            records: {
                biggestWin: { margin: '-', against: '-', venue: '-', year: 0 },
                highestChase: { score: 0, against: '-', venue: '-', year: 0 },
                longestWinStreak: 0,
                longestLossStreak: 0
            }
        },
        odi: {
            overview: {
                totalMatches: 165,
                won: 68,
                lost: 88,
                tied: 4,
                noResult: 5,
                winPercentage: 43.6,
                currentStreak: { type: 'winning', count: 1 },
                currentForm: ['W', 'L', 'W', 'L', 'W', 'L', 'L', 'W', 'W', 'L']
            },
            batting: {
                totalRuns: 48765,
                averageScore: 295.6,
                highestTotal: { score: 398, against: 'Ireland', venue: 'Amstelveen', year: 2022 },
                lowestTotal: { score: 39, against: 'Sri Lanka', venue: 'Amstelveen', year: 2006 },
                scoresOver300: 34,
                centuries: 56,
                sixes: 789
            },
            bowling: {
                totalWickets: 1234,
                averageWickets: 7.5,
                bestFigures: { wickets: 6, runs: 19, player: 'P. Seelaar', against: 'Ireland', year: 2021 },
                fiveWicketHauls: 9,
                economyRate: 5.45
            },
            records: {
                biggestWin: { margin: '146 runs', against: 'Ireland', venue: 'Amstelveen', year: 2022 },
                highestChase: { score: 280, against: 'UAE', venue: 'Abu Dhabi', year: 2021 },
                longestWinStreak: 6,
                longestLossStreak: 9
            }
        },
        t20i: {
            overview: {
                totalMatches: 113,
                won: 52,
                lost: 57,
                tied: 2,
                noResult: 2,
                winPercentage: 47.7,
                currentStreak: { type: 'winning', count: 2 },
                currentForm: ['W', 'W', 'L', 'W', 'L', 'W', 'L', 'L', 'W', 'W']
            },
            batting: {
                totalRuns: 16789,
                averageScore: 148.6,
                highestTotal: { score: 246, against: 'Ireland', venue: 'Sylhet', year: 2014 },
                lowestTotal: { score: 39, against: 'Sri Lanka', venue: 'Chittagong', year: 2014 },
                scoresOver200: 11,
                centuries: 2,
                sixes: 567
            },
            bowling: {
                totalWickets: 789,
                averageWickets: 7.0,
                bestFigures: { wickets: 5, runs: 19, player: 'P. van Meekeren', against: 'Ireland', year: 2021 },
                fiveWicketHauls: 2,
                economyRate: 8.12
            },
            records: {
                biggestWin: { margin: '89 runs', against: 'Scotland', venue: 'Dublin', year: 2021 },
                highestChase: { score: 196, against: 'Ireland', venue: 'Abu Dhabi', year: 2021 },
                longestWinStreak: 5,
                longestLossStreak: 7
            }
        },
        recentMatches: [
            { date: '2024-06-28', opponent: 'IRE', opponentFlag: ireFlag, venue: 'Dublin', format: 'T20I', result: 'Lost', margin: '7 wickets' },
            { date: '2024-06-01', opponent: 'ZIM', opponentFlag: zimFlag, venue: 'Bulawayo', format: 'T20I', result: 'Won', margin: '6 wickets' },
            { date: '2024-05-18', opponent: 'UAE', opponentFlag: uaeFlag, venue: 'Abu Dhabi', format: 'ODI', result: 'Lost', margin: '4 wickets' },
            { date: '2024-04-10', opponent: 'UAE', opponentFlag: uaeFlag, venue: 'Amstelveen', format: 'ODI', result: 'Won', margin: '6 wickets' },
            { date: '2024-03-28', opponent: 'SCO', opponentFlag: scoFlag, venue: 'Amstelveen', format: 'T20I', result: 'Won', margin: '5 wickets' }
        ],
        squad: [
            { name: 'Scott Edwards', role: 'Wicket Keeper', matches: 123, photo: scott },
            { name: 'Bas de Leede', role: 'All-rounder', matches: 98, photo: bas },
            { name: 'Paul van Meekeren', role: 'Bowler', matches: 134, photo: meekeren },
            { name: 'Logan van Beek', role: 'All-rounder', matches: 112, photo: beek },
            { name: 'Max O\'Dowd', role: 'Batsman', matches: 145, photo: max }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Max O\'Dowd', runs: 3456, average: 29.7, centuries: 4 },
                { name: 'Scott Edwards', runs: 2987, average: 27.3, centuries: 3 },
                { name: 'Bas de Leede', runs: 2345, average: 26.8, centuries: 2 }
            ],
            bowlers: [
                { name: 'Paul van Meekeren', wickets: 178, average: 28.4, fiveWickets: 4 },
                { name: 'Logan van Beek', wickets: 156, average: 30.2, fiveWickets: 3 },
                { name: 'Bas de Leede', wickets: 134, average: 31.5, fiveWickets: 2 }
            ]
        }
    },
    SCO: {
        team: 'Scotland',
        country: 'SCO',
        image: scoFlag,
        color: '#0065BF',
        test: {
            overview: {
                totalMatches: 0,
                won: 0,
                lost: 0,
                drawn: 0,
                winPercentage: 0,
                currentStreak: { type: 'winning', count: 0 },
                currentForm: []
            },
            batting: {
                totalRuns: 0,
                averageScore: 0,
                highestTotal: { score: 0, against: '-', venue: '-', year: 0 },
                lowestTotal: { score: 0, against: '-', venue: '-', year: 0 },
                scoresOver400: 0,
                centuries: 0,
                sixes: 0
            },
            bowling: {
                totalWickets: 0,
                averageWickets: 0,
                bestFigures: { wickets: 0, runs: 0, player: '-', against: '-', year: 0 },
                fiveWicketHauls: 0,
                tenWicketHauls: 0
            },
            records: {
                biggestWin: { margin: '-', against: '-', venue: '-', year: 0 },
                highestChase: { score: 0, against: '-', venue: '-', year: 0 },
                longestWinStreak: 0,
                longestLossStreak: 0
            }
        },
        odi: {
            overview: {
                totalMatches: 178,
                won: 71,
                lost: 98,
                tied: 4,
                noResult: 5,
                winPercentage: 42.0,
                currentStreak: { type: 'losing', count: 2 },
                currentForm: ['L', 'W', 'L', 'L', 'W', 'L', 'W', 'W', 'L', 'L']
            },
            batting: {
                totalRuns: 52345,
                averageScore: 294.1,
                highestTotal: { score: 371, against: 'Afghanistan', venue: 'Edinburgh', year: 2019 },
                lowestTotal: { score: 68, against: 'Pakistan', venue: 'Edinburgh', year: 2018 },
                scoresOver300: 29,
                centuries: 49,
                sixes: 678
            },
            bowling: {
                totalWickets: 1345,
                averageWickets: 7.6,
                bestFigures: { wickets: 5, runs: 33, player: 'M. Watt', against: 'UAE', year: 2019 },
                fiveWicketHauls: 7,
                economyRate: 5.67
            },
            records: {
                biggestWin: { margin: '136 runs', against: 'UAE', venue: 'Edinburgh', year: 2019 },
                highestChase: { score: 319, against: 'Afghanistan', venue: 'Edinburgh', year: 2019 },
                longestWinStreak: 6,
                longestLossStreak: 10
            }
        },
        t20i: {
            overview: {
                totalMatches: 134,
                won: 56,
                lost: 73,
                tied: 3,
                noResult: 2,
                winPercentage: 43.4,
                currentStreak: { type: 'losing', count: 1 },
                currentForm: ['L', 'W', 'W', 'L', 'W', 'L', 'L', 'W', 'L', 'W']
            },
            batting: {
                totalRuns: 19876,
                averageScore: 148.3,
                highestTotal: { score: 252, against: 'Netherlands', venue: 'Edinburgh', year: 2021 },
                lowestTotal: { score: 73, against: 'Afghanistan', venue: 'Sharjah', year: 2013 },
                scoresOver200: 9,
                centuries: 2,
                sixes: 589
            },
            bowling: {
                totalWickets: 898,
                averageWickets: 6.7,
                bestFigures: { wickets: 4, runs: 12, player: 'M. Watt', against: 'Oman', year: 2021 },
                fiveWicketHauls: 0,
                economyRate: 8.23
            },
            records: {
                biggestWin: { margin: '90 runs', against: 'Papua New Guinea', venue: 'Al Amerat', year: 2019 },
                highestChase: { score: 189, against: 'Netherlands', venue: 'Dubai', year: 2021 },
                longestWinStreak: 5,
                longestLossStreak: 8
            }
        },
        recentMatches: [
            { date: '2024-07-10', opponent: 'IRE', opponentFlag: ireFlag, venue: 'Belfast', format: 'ODI', result: 'Lost', margin: '5 wickets' },
            { date: '2024-04-22', opponent: 'UAE', opponentFlag: uaeFlag, venue: 'Dubai', format: 'T20I', result: 'Lost', margin: '5 wickets' },
            { date: '2024-03-28', opponent: 'NED', opponentFlag: nedFlag, venue: 'Amstelveen', format: 'T20I', result: 'Lost', margin: '5 wickets' },
            { date: '2024-03-15', opponent: 'ZIM', opponentFlag: zimFlag, venue: 'Edinburgh', format: 'ODI', result: 'Won', margin: '4 wickets' },
            { date: '2024-03-01', opponent: 'IRE', opponentFlag: ireFlag, venue: 'Edinburgh', format: 'T20I', result: 'Won', margin: '6 wickets' }
        ],
        squad: [
            { name: 'Richie Berrington', role: 'Batsman', matches: 234, photo: richie},
            { name: 'Mark Watt', role: 'Bowler', matches: 189, photo: watt },
            { name: 'Matthew Cross', role: 'Wicket Keeper', matches: 156, photo: cross },
            { name: 'Brandon McMullen', role: 'All-rounder', matches: 78, photo: bm21 },
            { name: 'Chris Greaves', role: 'All-rounder', matches: 92, photo: cg13 }
        ],
        topPerformers: {
            batsmen: [
                { name: 'Richie Berrington', runs: 5432, average: 28.9, centuries: 6 },
                { name: 'Matthew Cross', runs: 3456, average: 26.3, centuries: 4 },
                { name: 'Brandon McMullen', runs: 2345, average: 31.2, centuries: 3 }
            ],
            bowlers: [
                { name: 'Mark Watt', wickets: 198, average: 29.7, fiveWickets: 4 },
                { name: 'Chris Greaves', wickets: 134, average: 31.4, fiveWickets: 2 },
                { name: 'Safyaan Sharif', wickets: 156, average: 33.2, fiveWickets: 3 }
            ]
        }
    }
};

// Head to Head data
const headToHeadData = {
    // ========== INDIA MATCHUPS ==========
    'IND-AUS': {
        test: { played: 108, indWon: 32, ausWon: 45, drawn: 31, tied: 0, noResult: 0 },
        odi: { played: 153, indWon: 56, ausWon: 82, tied: 2, noResult: 13 },
        t20i: { played: 31, indWon: 17, ausWon: 14, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-10-25', format: 'Test', venue: 'Perth', winner: 'IND', margin: '295 runs' },
            { date: '2024-03-17', format: 'T20I', venue: 'Sydney', winner: 'AUS', margin: '5 wickets' },
            { date: '2024-01-14', format: 'ODI', venue: 'Mumbai', winner: 'IND', margin: '6 wickets' },
            { date: '2023-12-03', format: 'Test', venue: 'Adelaide', winner: 'AUS', margin: '10 wickets' },
            { date: '2023-11-19', format: 'ODI', venue: 'Ahmedabad', winner: 'AUS', margin: '6 wickets' }
        ]
    },
    'IND-BAN': {
        test: { played: 13, indWon: 10, ausWon: 1, drawn: 2, tied: 0, noResult: 0 },
        odi: { played: 38, indWon: 31, ausWon: 7, tied: 0, noResult: 0 },
        t20i: { played: 14, indWon: 12, ausWon: 2, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-09-22', format: 'Test', venue: 'Chennai', winner: 'IND', margin: '280 runs' },
            { date: '2024-09-19', format: 'Test', venue: 'Chennai', winner: 'IND', margin: 'Innings and 46 runs' },
            { date: '2023-12-17', format: 'ODI', venue: 'Dhaka', winner: 'IND', margin: '86 runs' },
            { date: '2023-12-10', format: 'ODI', venue: 'Dhaka', winner: 'BAN', margin: '5 wickets' },
            { date: '2023-12-07', format: 'ODI', venue: 'Dhaka', winner: 'IND', margin: '227 runs' }
        ]
    },
    'IND-ENG': {
        test: { played: 132, indWon: 32, ausWon: 51, drawn: 49, tied: 0, noResult: 0 },
        odi: { played: 107, indWon: 57, ausWon: 46, tied: 2, noResult: 2 },
        t20i: { played: 23, indWon: 13, ausWon: 10, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-07-14', format: 'Test', venue: 'Birmingham', winner: 'ENG', margin: '31 runs' },
            { date: '2024-06-30', format: 'T20I', venue: 'Manchester', winner: 'IND', margin: '7 wickets' },
            { date: '2024-06-20', format: 'ODI', venue: 'Lord\'s', winner: 'ENG', margin: '5 wickets' },
            { date: '2024-03-07', format: 'Test', venue: 'Rajkot', winner: 'IND', margin: '434 runs' },
            { date: '2024-02-15', format: 'Test', venue: 'Visakhapatnam', winner: 'IND', margin: '106 runs' }
        ]
    },
    'IND-NZ': {
        test: { played: 62, indWon: 22, ausWon: 13, drawn: 27, tied: 0, noResult: 0 },
        odi: { played: 115, indWon: 59, ausWon: 53, tied: 1, noResult: 2 },
        t20i: { played: 21, indWon: 13, ausWon: 8, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-10-24', format: 'Test', venue: 'Pune', winner: 'NZ', margin: '113 runs' },
            { date: '2024-10-16', format: 'Test', venue: 'Bangalore', winner: 'NZ', margin: '8 wickets' },
            { date: '2023-11-15', format: 'ODI', venue: 'Mumbai', winner: 'IND', margin: '70 runs' },
            { date: '2023-11-05', format: 'ODI', venue: 'Dharamsala', winner: 'IND', margin: '70 runs' },
            { date: '2023-01-27', format: 'ODI', venue: 'Hyderabad', winner: 'IND', margin: '12 runs' }
        ]
    },
    'IND-PAK': {
        test: { played: 59, indWon: 12, ausWon: 18, drawn: 28, tied: 1, noResult: 0 },
        odi: { played: 136, indWon: 57, ausWon: 73, tied: 2, noResult: 4 },
        t20i: { played: 12, indWon: 11, ausWon: 1, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-06-09', format: 'T20I', venue: 'New York', winner: 'IND', margin: '6 runs' },
            { date: '2023-10-14', format: 'ODI', venue: 'Ahmedabad', winner: 'IND', margin: '228 runs' },
            { date: '2023-09-10', format: 'ODI', venue: 'Pallekele', winner: 'IND', margin: '228 runs' },
            { date: '2022-10-23', format: 'T20I', venue: 'Melbourne', winner: 'IND', margin: '4 wickets' },
            { date: '2022-08-28', format: 'T20I', venue: 'Dubai', winner: 'IND', margin: '5 wickets' }
        ]
    },
    'IND-RSA': {
        test: { played: 45, indWon: 16, ausWon: 17, drawn: 12, tied: 0, noResult: 0 },
        odi: { played: 91, indWon: 49, ausWon: 37, tied: 2, noResult: 3 },
        t20i: { played: 25, indWon: 15, ausWon: 10, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-06-29', format: 'T20I', venue: 'Barbados', winner: 'IND', margin: '7 runs' },
            { date: '2023-12-21', format: 'Test', venue: 'Cape Town', winner: 'RSA', margin: 'Innings and 32 runs' },
            { date: '2023-12-17', format: 'ODI', venue: 'Johannesburg', winner: 'IND', margin: '78 runs' },
            { date: '2023-12-14', format: 'ODI', venue: 'Centurion', winner: 'RSA', margin: '9 wickets' },
            { date: '2023-01-03', format: 'Test', venue: 'Cape Town', winner: 'RSA', margin: '7 wickets' }
        ]
    },
    'IND-SL': {
        test: { played: 46, indWon: 23, ausWon: 8, drawn: 15, tied: 0, noResult: 0 },
        odi: { played: 168, indWon: 98, ausWon: 58, tied: 2, noResult: 10 },
        t20i: { played: 29, indWon: 19, ausWon: 9, tied: 0, noResult: 1 },
        lastFive: [
            { date: '2024-08-01', format: 'ODI', venue: 'Colombo', winner: 'IND', margin: '110 runs' },
            { date: '2024-07-30', format: 'T20I', venue: 'Colombo', winner: 'IND', margin: '43 runs' },
            { date: '2024-07-27', format: 'T20I', venue: 'Pallekele', winner: 'SL', margin: '9 wickets' },
            { date: '2023-03-15', format: 'Test', venue: 'Delhi', winner: 'IND', margin: '238 runs' },
            { date: '2023-03-12', format: 'Test', venue: 'Bangalore', winner: 'IND', margin: 'Innings and 222 runs' }
        ]
    },
    'IND-WI': {
        test: { played: 101, indWon: 20, ausWon: 30, drawn: 50, tied: 1, noResult: 0 },
        odi: { played: 142, indWon: 67, ausWon: 64, tied: 2, noResult: 9 },
        t20i: { played: 20, indWon: 13, ausWon: 6, tied: 0, noResult: 1 },
        lastFive: [
            { date: '2023-08-12', format: 'T20I', venue: 'Florida', winner: 'IND', margin: '4 wickets' },
            { date: '2023-07-27', format: 'ODI', venue: 'Port of Spain', winner: 'WI', margin: '6 runs' },
            { date: '2023-07-20', format: 'Test', venue: 'Port of Spain', winner: 'IND', margin: '257 runs' },
            { date: '2023-07-12', format: 'Test', venue: 'Dominica', winner: 'IND', margin: 'Innings and 141 runs' },
            { date: '2022-08-07', format: 'ODI', venue: 'Port of Spain', winner: 'IND', margin: '119 runs' }
        ]
    },

    // ========== AUSTRALIA MATCHUPS ==========
    'AUS-BAN': {
        test: { played: 7, indWon: 5, ausWon: 0, drawn: 2, tied: 0, noResult: 0 },
        odi: { played: 26, indWon: 21, ausWon: 5, tied: 0, noResult: 0 },
        t20i: { played: 11, indWon: 8, ausWon: 3, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-08-23', format: 'T20I', venue: 'Dhaka', winner: 'AUS', margin: '7 wickets' },
            { date: '2023-06-10', format: 'Test', venue: 'Dhaka', winner: 'AUS', margin: '10 wickets' },
            { date: '2021-08-06', format: 'ODI', venue: 'Dhaka', winner: 'BAN', margin: '5 wickets' },
            { date: '2021-08-04', format: 'T20I', venue: 'Dhaka', winner: 'AUS', margin: '3 wickets' },
            { date: '2017-08-27', format: 'Test', venue: 'Chittagong', winner: 'AUS', margin: '7 wickets' }
        ]
    },
    'AUS-ENG': {
        test: { played: 357, indWon: 151, ausWon: 110, drawn: 95, tied: 1, noResult: 0 },
        odi: { played: 156, indWon: 87, ausWon: 64, tied: 2, noResult: 3 },
        t20i: { played: 25, indWon: 11, ausWon: 10, tied: 0, noResult: 4 },
        lastFive: [
            { date: '2024-09-25', format: 'T20I', venue: 'Southampton', winner: 'AUS', margin: '28 runs' },
            { date: '2023-07-31', format: 'Test', venue: 'The Oval', winner: 'ENG', margin: '49 runs' },
            { date: '2023-07-27', format: 'Test', venue: 'Old Trafford', winner: 'Draw', margin: 'Match Drawn' },
            { date: '2023-07-19', format: 'Test', venue: 'Headingley', winner: 'AUS', margin: '3 wickets' },
            { date: '2023-07-12', format: 'Test', venue: 'Lord\'s', winner: 'AUS', margin: '43 runs' }
        ]
    },
    'AUS-NZ': {
        test: { played: 61, indWon: 35, ausWon: 14, drawn: 12, tied: 0, noResult: 0 },
        odi: { played: 149, indWon: 106, ausWon: 39, tied: 2, noResult: 2 },
        t20i: { played: 15, indWon: 9, ausWon: 6, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-03-03', format: 'Test', venue: 'Wellington', winner: 'AUS', margin: '172 runs' },
            { date: '2024-02-29', format: 'Test', venue: 'Christchurch', winner: 'AUS', margin: 'Innings and 58 runs' },
            { date: '2023-09-27', format: 'ODI', venue: 'Cairns', winner: 'AUS', margin: '6 wickets' },
            { date: '2023-09-23', format: 'T20I', venue: 'Brisbane', winner: 'NZ', margin: '8 wickets' },
            { date: '2022-09-08', format: 'ODI', venue: 'Cairns', winner: 'AUS', margin: '113 runs' }
        ]
    },
    'AUS-PAK': {
        test: { played: 69, indWon: 32, ausWon: 15, drawn: 22, tied: 0, noResult: 0 },
        odi: { played: 107, indWon: 69, ausWon: 34, tied: 1, noResult: 3 },
        t20i: { played: 26, indWon: 17, ausWon: 9, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-11-11', format: 'T20I', venue: 'Sydney', winner: 'AUS', margin: '29 runs' },
            { date: '2023-12-26', format: 'Test', venue: 'Perth', winner: 'AUS', margin: '360 runs' },
            { date: '2023-11-06', format: 'ODI', venue: 'Bangalore', winner: 'AUS', margin: '62 runs' },
            { date: '2022-11-08', format: 'T20I', venue: 'Adelaide', winner: 'ENG', margin: '5 wickets' },
            { date: '2022-03-08', format: 'Test', venue: 'Lahore', winner: 'Draw', margin: 'Match Drawn' }
        ]
    },
    'AUS-RSA': {
        test: { played: 108, indWon: 53, ausWon: 29, drawn: 26, tied: 0, noResult: 0 },
        odi: { played: 109, indWon: 67, ausWon: 39, tied: 1, noResult: 2 },
        t20i: { played: 21, indWon: 12, ausWon: 9, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-09-08', format: 'T20I', venue: 'Durban', winner: 'RSA', margin: '28 runs' },
            { date: '2023-01-04', format: 'Test', venue: 'Sydney', winner: 'AUS', margin: 'Innings and 182 runs' },
            { date: '2022-12-17', format: 'Test', venue: 'Melbourne', winner: 'AUS', margin: 'Innings and 182 runs' },
            { date: '2022-09-13', format: 'ODI', venue: 'Bloemfontein', winner: 'RSA', margin: '3 wickets' },
            { date: '2022-09-07', format: 'ODI', venue: 'Johannesburg', winner: 'AUS', margin: '111 runs' }
        ]
    },
    'AUS-SL': {
        test: { played: 32, indWon: 18, ausWon: 8, drawn: 6, tied: 0, noResult: 0 },
        odi: { played: 101, indWon: 63, ausWon: 35, tied: 1, noResult: 2 },
        t20i: { played: 20, indWon: 12, ausWon: 8, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-02-15', format: 'T20I', venue: 'Melbourne', winner: 'AUS', margin: '6 wickets' },
            { date: '2022-07-21', format: 'Test', venue: 'Galle', winner: 'SL', margin: 'Innings and 39 runs' },
            { date: '2022-06-24', format: 'ODI', venue: 'Colombo', winner: 'SL', margin: '4 wickets' },
            { date: '2022-06-19', format: 'ODI', venue: 'Pallekele', winner: 'AUS', margin: '10 wickets' },
            { date: '2022-06-16', format: 'T20I', venue: 'Colombo', winner: 'SL', margin: '4 wickets' }
        ]
    },
    'AUS-WI': {
        test: { played: 120, indWon: 57, ausWon: 34, drawn: 28, tied: 1, noResult: 0 },
        odi: { played: 148, indWon: 105, ausWon: 38, tied: 2, noResult: 3 },
        t20i: { played: 17, indWon: 11, ausWon: 6, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-02-11', format: 'T20I', venue: 'Perth', winner: 'AUS', margin: '34 runs' },
            { date: '2024-01-26', format: 'Test', venue: 'Adelaide', winner: 'AUS', margin: '10 wickets' },
            { date: '2024-01-17', format: 'Test', venue: 'Brisbane', winner: 'AUS', margin: '8 wickets' },
            { date: '2021-07-16', format: 'ODI', venue: 'Barbados', winner: 'AUS', margin: '133 runs' },
            { date: '2021-07-12', format: 'T20I', venue: 'St Lucia', winner: 'WI', margin: '4 wickets' }
        ]
    },

    // ========== BANGLADESH MATCHUPS ==========
    'BAN-ENG': {
        test: { played: 11, indWon: 1, ausWon: 9, drawn: 1, tied: 0, noResult: 0 },
        odi: { played: 21, indWon: 5, ausWon: 16, tied: 0, noResult: 0 },
        t20i: { played: 9, indWon: 3, ausWon: 6, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2023-03-14', format: 'ODI', venue: 'Mirpur', winner: 'ENG', margin: '3 wickets' },
            { date: '2023-03-09', format: 'T20I', venue: 'Mirpur', winner: 'ENG', margin: '4 wickets' },
            { date: '2016-10-28', format: 'Test', venue: 'Mirpur', winner: 'BAN', margin: '108 runs' },
            { date: '2016-10-14', format: 'ODI', venue: 'Mirpur', winner: 'ENG', margin: '21 runs' },
            { date: '2010-03-09', format: 'ODI', venue: 'Mirpur', winner: 'BAN', margin: '5 wickets' }
        ]
    },
    'BAN-NZ': {
        test: { played: 17, indWon: 1, ausWon: 13, drawn: 3, tied: 0, noResult: 0 },
        odi: { played: 39, indWon: 6, ausWon: 30, tied: 0, noResult: 3 },
        t20i: { played: 17, indWon: 5, ausWon: 12, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2023-12-06', format: 'Test', venue: 'Sylhet', winner: 'NZ', margin: '4 runs' },
            { date: '2023-09-26', format: 'ODI', venue: 'Mirpur', winner: 'NZ', margin: '86 runs' },
            { date: '2023-09-23', format: 'T20I', venue: 'Dhaka', winner: 'BAN', margin: '4 wickets' },
            { date: '2021-03-28', format: 'ODI', venue: 'Christchurch', winner: 'NZ', margin: '8 wickets' },
            { date: '2019-03-13', format: 'T20I', venue: 'Christchurch', winner: 'BAN', margin: '6 wickets' }
        ]
    },
    'BAN-PAK': {
        test: { played: 12, indWon: 1, ausWon: 10, drawn: 1, tied: 0, noResult: 0 },
        odi: { played: 39, indWon: 8, ausWon: 31, tied: 0, noResult: 0 },
        t20i: { played: 13, indWon: 4, ausWon: 9, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-08-27', format: 'Test', venue: 'Rawalpindi', winner: 'PAK', margin: '10 wickets' },
            { date: '2024-08-21', format: 'Test', venue: 'Rawalpindi', winner: 'BAN', margin: '6 wickets' },
            { date: '2024-04-25', format: 'T20I', venue: 'Lahore', winner: 'PAK', margin: '7 wickets' },
            { date: '2024-04-22', format: 'T20I', venue: 'Lahore', winner: 'BAN', margin: '10 wickets' },
            { date: '2020-01-27', format: 'Test', venue: 'Rawalpindi', winner: 'PAK', margin: 'Innings and 44 runs' }
        ]
    },
    'BAN-RSA': {
        test: { played: 10, indWon: 1, ausWon: 8, drawn: 1, tied: 0, noResult: 0 },
        odi: { played: 22, indWon: 5, ausWon: 17, tied: 0, noResult: 0 },
        t20i: { played: 8, indWon: 2, ausWon: 6, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2022-04-12', format: 'Test', venue: 'Durban', winner: 'RSA', margin: '220 runs' },
            { date: '2022-03-27', format: 'ODI', venue: 'Centurion', winner: 'RSA', margin: '9 wickets' },
            { date: '2022-03-23', format: 'T20I', venue: 'Johannesburg', winner: 'BAN', margin: '4 runs' },
            { date: '2017-10-06', format: 'Test', venue: 'Bloemfontein', winner: 'RSA', margin: 'Innings and 254 runs' },
            { date: '2017-07-20', format: 'ODI', venue: 'Kimberley', winner: 'RSA', margin: '104 runs' }
        ]
    },
    'BAN-SL': {
        test: { played: 23, indWon: 8, ausWon: 14, drawn: 1, tied: 0, noResult: 0 },
        odi: { played: 50, indWon: 19, ausWon: 30, tied: 0, noResult: 1 },
        t20i: { played: 15, indWon: 7, ausWon: 8, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-03-24', format: 'Test', venue: 'Chattogram', winner: 'BAN', margin: '192 runs' },
            { date: '2024-03-18', format: 'ODI', venue: 'Dhaka', winner: 'SL', margin: '28 runs' },
            { date: '2024-03-15', format: 'T20I', venue: 'Sylhet', winner: 'BAN', margin: '9 wickets' },
            { date: '2023-05-19', format: 'Test', venue: 'Mirpur', winner: 'SL', margin: '192 runs' },
            { date: '2021-05-28', format: 'ODI', venue: 'Dhaka', winner: 'BAN', margin: '33 runs' }
        ]
    },
    'BAN-WI': {
        test: { played: 14, indWon: 3, ausWon: 8, drawn: 3, tied: 0, noResult: 0 },
        odi: { played: 27, indWon: 11, ausWon: 16, tied: 0, noResult: 0 },
        t20i: { played: 12, indWon: 6, ausWon: 6, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-11-30', format: 'T20I', venue: 'St Lucia', winner: 'WI', margin: '27 runs' },
            { date: '2022-06-24', format: 'Test', venue: 'Gros Islet', winner: 'BAN', margin: '7 wickets' },
            { date: '2022-07-16', format: 'ODI', venue: 'Guyana', winner: 'WI', margin: '5 wickets' },
            { date: '2021-02-03', format: 'Test', venue: 'Chittagong', winner: 'BAN', margin: '3 wickets' },
            { date: '2018-12-14', format: 'T20I', venue: 'Mirpur', winner: 'WI', margin: '36 runs' }
        ]
    },

    // ========== ENGLAND MATCHUPS ==========
    'ENG-NZ': {
        test: { played: 111, indWon: 50, ausWon: 13, drawn: 48, tied: 0, noResult: 0 },
        odi: { played: 99, indWon: 46, ausWon: 42, tied: 1, noResult: 10 },
        t20i: { played: 24, indWon: 12, ausWon: 10, tied: 0, noResult: 2 },
        lastFive: [
            { date: '2024-11-30', format: 'Test', venue: 'Wellington', winner: 'NZ', margin: '8 wickets' },
            { date: '2023-02-18', format: 'Test', venue: 'Wellington', winner: 'ENG', margin: '267 runs' },
            { date: '2023-02-16', format: 'Test', venue: 'Auckland', winner: 'ENG', margin: 'Innings and 49 runs' },
            { date: '2022-11-29', format: 'T20I', venue: 'Auckland', winner: 'NZ', margin: '8 wickets' },
            { date: '2022-09-16', format: 'ODI', venue: 'The Oval', winner: 'ENG', margin: '181 runs' }
        ]
    },
    'ENG-PAK': {
        test: { played: 88, indWon: 28, ausWon: 21, drawn: 39, tied: 0, noResult: 0 },
        odi: { played: 92, indWon: 58, ausWon: 32, tied: 0, noResult: 2 },
        t20i: { played: 28, indWon: 18, ausWon: 10, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-05-30', format: 'T20I', venue: 'Birmingham', winner: 'ENG', margin: '23 runs' },
            { date: '2022-12-19', format: 'Test', venue: 'Karachi', winner: 'ENG', margin: '8 wickets' },
            { date: '2022-12-09', format: 'Test', venue: 'Multan', winner: 'ENG', margin: '26 runs' },
            { date: '2022-10-02', format: 'T20I', venue: 'Karachi', winner: 'PAK', margin: '6 wickets' },
            { date: '2022-09-28', format: 'T20I', venue: 'Lahore', winner: 'ENG', margin: '8 wickets' }
        ]
    },
    'ENG-RSA': {
        test: { played: 158, indWon: 65, ausWon: 36, drawn: 56, tied: 1, noResult: 0 },
        odi: { played: 68, indWon: 32, ausWon: 32, tied: 2, noResult: 2 },
        t20i: { played: 22, indWon: 11, ausWon: 11, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-08-24', format: 'Test', venue: 'The Oval', winner: 'ENG', margin: 'Innings and 12 runs' },
            { date: '2024-07-29', format: 'ODI', venue: 'Manchester', winner: 'ENG', margin: '5 wickets' },
            { date: '2022-09-17', format: 'T20I', venue: 'Southampton', winner: 'RSA', margin: '58 runs' },
            { date: '2022-08-30', format: 'Test', venue: 'The Oval', winner: 'Draw', margin: 'Match Drawn' },
            { date: '2022-08-25', format: 'Test', venue: 'Old Trafford', winner: 'ENG', margin: 'Innings and 85 runs' }
        ]
    },
    'ENG-SL': {
        test: { played: 35, indWon: 15, ausWon: 11, drawn: 9, tied: 0, noResult: 0 },
        odi: { played: 85, indWon: 46, ausWon: 35, tied: 0, noResult: 4 },
        t20i: { played: 19, indWon: 10, ausWon: 9, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-09-09', format: 'Test', venue: 'The Oval', winner: 'ENG', margin: '190 runs' },
            { date: '2024-06-27', format: 'T20I', venue: 'Southampton', winner: 'SL', margin: '7 wickets' },
            { date: '2021-07-01', format: 'T20I', venue: 'Southampton', winner: 'ENG', margin: '89 runs' },
            { date: '2021-06-23', format: 'ODI', venue: 'Bristol', winner: 'ENG', margin: '5 wickets' },
            { date: '2021-01-27', format: 'Test', venue: 'Galle', winner: 'ENG', margin: '7 wickets' }
        ]
    },
    'ENG-WI': {
        test: { played: 163, indWon: 52, ausWon: 60, drawn: 51, tied: 0, noResult: 0 },
        odi: { played: 113, indWon: 51, ausWon: 54, tied: 1, noResult: 7 },
        t20i: { played: 24, indWon: 16, ausWon: 8, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-07-21', format: 'Test', venue: 'Birmingham', winner: 'ENG', margin: 'Innings and 114 runs' },
            { date: '2024-07-10', format: 'Test', venue: 'Nottingham', winner: 'ENG', margin: '241 runs' },
            { date: '2023-12-17', format: 'T20I', venue: 'Bridgetown', winner: 'WI', margin: '4 wickets' },
            { date: '2022-07-27', format: 'Test', venue: 'Nottingham', winner: 'ENG', margin: '7 wickets' },
            { date: '2022-03-13', format: 'Test', venue: 'Grenada', winner: 'ENG', margin: '10 wickets' }
        ]
    },

    // ========== PAKISTAN MATCHUPS ==========
    'PAK-NZ': {
        test: { played: 56, indWon: 28, ausWon: 8, drawn: 20, tied: 0, noResult: 0 },
        odi: { played: 112, indWon: 56, ausWon: 51, tied: 2, noResult: 3 },
        t20i: { played: 28, indWon: 18, ausWon: 10, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-04-27', format: 'T20I', venue: 'Rawalpindi', winner: 'NZ', margin: '5 wickets' },
            { date: '2023-05-06', format: 'T20I', venue: 'Lahore', winner: 'PAK', margin: '6 wickets' },
            { date: '2023-04-27', format: 'ODI', venue: 'Karachi', winner: 'PAK', margin: '102 runs' },
            { date: '2023-01-05', format: 'Test', venue: 'Karachi', winner: 'NZ', margin: '101 runs' },
            { date: '2022-12-26', format: 'Test', venue: 'Karachi', winner: 'PAK', margin: 'Innings and 16 runs' }
        ]
    },
    'PAK-RSA': {
        test: { played: 27, indWon: 4, ausWon: 17, drawn: 6, tied: 0, noResult: 0 },
        odi: { played: 83, indWon: 29, ausWon: 49, tied: 2, noResult: 3 },
        t20i: { played: 21, indWon: 11, ausWon: 10, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-05-14', format: 'T20I', venue: 'Centurion', winner: 'RSA', margin: '11 runs' },
            { date: '2021-04-16', format: 'T20I', venue: 'Lahore', winner: 'PAK', margin: '4 wickets' },
            { date: '2021-04-04', format: 'ODI', venue: 'Centurion', winner: 'PAK', margin: '28 runs' },
            { date: '2019-01-19', format: 'Test', venue: 'Johannesburg', winner: 'RSA', margin: '107 runs' },
            { date: '2018-12-26', format: 'Test', venue: 'Centurion', winner: 'RSA', margin: '6 wickets' }
        ]
    },
    'PAK-SL': {
        test: { played: 54, indWon: 21, ausWon: 18, drawn: 15, tied: 0, noResult: 0 },
        odi: { played: 163, indWon: 94, ausWon: 64, tied: 2, noResult: 3 },
        t20i: { played: 23, indWon: 15, ausWon: 8, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-04-05', format: 'ODI', venue: 'Colombo', winner: 'SL', margin: '22 runs' },
            { date: '2023-10-13', format: 'ODI', venue: 'Hyderabad', winner: 'PAK', margin: '6 wickets' },
            { date: '2022-09-09', format: 'T20I', venue: 'Lahore', winner: 'SL', margin: '13 runs' },
            { date: '2022-07-24', format: 'Test', venue: 'Galle', winner: 'SL', margin: '246 runs' },
            { date: '2022-07-16', format: 'Test', venue: 'Galle', winner: 'SL', margin: '10 wickets' }
        ]
    },
    'PAK-WI': {
        test: { played: 53, indWon: 21, ausWon: 17, drawn: 15, tied: 0, noResult: 0 },
        odi: { played: 141, indWon: 81, ausWon: 55, tied: 1, noResult: 4 },
        t20i: { played: 25, indWon: 15, ausWon: 10, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-08-24', format: 'T20I', venue: 'Karachi', winner: 'PAK', margin: '120 runs' },
            { date: '2024-06-11', format: 'T20I', venue: 'Providence', winner: 'PAK', margin: '7 runs' },
            { date: '2021-08-01', format: 'Test', venue: 'Kingston', winner: 'PAK', margin: '109 runs' },
            { date: '2021-07-21', format: 'Test', venue: 'Kingston', winner: 'WI', margin: '1 wicket' },
            { date: '2021-07-13', format: 'ODI', venue: 'Barbados', winner: 'PAK', margin: '7 wickets' }
        ]
    },

    // ========== SOUTH AFRICA MATCHUPS ==========
    'NZ-RSA': {
        test: { played: 47, indWon: 9, ausWon: 28, drawn: 10, tied: 0, noResult: 0 },
        odi: { played: 91, indWon: 38, ausWon: 49, tied: 1, noResult: 3 },
        t20i: { played: 18, indWon: 8, ausWon: 10, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-02-18', format: 'Test', venue: 'Mount Maunganui', winner: 'NZ', margin: 'Innings and 58 runs' },
            { date: '2023-09-01', format: 'ODI', venue: 'Johannesburg', winner: 'RSA', margin: '190 runs' },
            { date: '2022-03-29', format: 'Test', venue: 'Christchurch', winner: 'NZ', margin: 'Innings and 276 runs' },
            { date: '2022-03-18', format: 'Test', venue: 'Christchurch', winner: 'Draw', margin: 'Match Drawn' },
            { date: '2021-09-11', format: 'T20I', venue: 'Paarl', winner: 'RSA', margin: '3 wickets' }
        ]
    },
    'RSA-SL': {
        test: { played: 28, indWon: 20, ausWon: 5, drawn: 3, tied: 0, noResult: 0 },
        odi: { played: 79, indWon: 50, ausWon: 25, tied: 1, noResult: 3 },
        t20i: { played: 21, indWon: 13, ausWon: 8, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-12-05', format: 'T20I', venue: 'Durban', winner: 'RSA', margin: '9 wickets' },
            { date: '2024-03-07', format: 'ODI', venue: 'Colombo', winner: 'SL', margin: '3 wickets' },
            { date: '2021-09-14', format: 'T20I', venue: 'Colombo', winner: 'SL', margin: '14 runs' },
            { date: '2021-09-07', format: 'ODI', venue: 'Colombo', winner: 'SL', margin: '78 runs' },
            { date: '2020-12-06', format: 'Test', venue: 'Centurion', winner: 'RSA', margin: 'Innings and 45 runs' }
        ]
    },
    'RSA-WI': {
        test: { played: 31, indWon: 19, ausWon: 7, drawn: 5, tied: 0, noResult: 0 },
        odi: { played: 65, indWon: 41, ausWon: 22, tied: 0, noResult: 2 },
        t20i: { played: 17, indWon: 10, ausWon: 7, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2024-05-28', format: 'T20I', venue: 'Antigua', winner: 'WI', margin: '28 runs' },
            { date: '2023-03-18', format: 'Test', venue: 'Centurion', winner: 'RSA', margin: 'Innings and 284 runs' },
            { date: '2023-03-08', format: 'Test', venue: 'Centurion', winner: 'RSA', margin: '87 runs' },
            { date: '2021-06-26', format: 'T20I', venue: 'St. George\'s', winner: 'WI', margin: '8 wickets' },
            { date: '2021-06-18', format: 'ODI', venue: 'North Sound', winner: 'RSA', margin: '49 runs' }
        ]
    },

    // ========== OTHER MATCHUPS ==========
    'NZ-SL': {
        test: { played: 35, indWon: 13, ausWon: 9, drawn: 13, tied: 0, noResult: 0 },
        odi: { played: 109, indWon: 60, ausWon: 44, tied: 1, noResult: 4 },
        t20i: { played: 17, indWon: 10, ausWon: 7, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2023-03-29', format: 'ODI', venue: 'Christchurch', winner: 'NZ', margin: 'Innings and 154 runs' },
            { date: '2023-04-02', format: 'T20I', venue: 'Auckland', winner: 'SL', margin: '4 wickets' },
            { date: '2022-12-27', format: 'Test', venue: 'Christchurch', winner: 'NZ', margin: '2 wickets' },
            { date: '2019-08-31', format: 'T20I', venue: 'Pallekele', winner: 'SL', margin: '37 runs' },
            { date: '2019-08-18', format: 'Test', venue: 'Galle', winner: 'SL', margin: '6 wickets' }
        ]
    },
    'NZ-WI': {
        test: { played: 50, indWon: 16, ausWon: 13, drawn: 21, tied: 0, noResult: 0 },
        odi: { played: 85, indWon: 44, ausWon: 34, tied: 1, noResult: 6 },
        t20i: { played: 13, indWon: 7, ausWon: 6, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2022-11-30', format: 'T20I', venue: 'Mount Maunganui', winner: 'NZ', margin: '72 runs' },
            { date: '2022-08-17', format: 'ODI', venue: 'Bridgetown', winner: 'NZ', margin: '50 runs' },
            { date: '2020-12-03', format: 'Test', venue: 'Wellington', winner: 'NZ', margin: 'Innings and 134 runs' },
            { date: '2020-11-27', format: 'Test', venue: 'Hamilton', winner: 'NZ', margin: 'Innings and 12 runs' },
            { date: '2017-12-23', format: 'T20I', venue: 'Nelson', winner: 'NZ', margin: '47 runs' }
        ]
    },
    'SL-WI': {
        test: { played: 31, indWon: 11, ausWon: 7, drawn: 13, tied: 0, noResult: 0 },
        odi: { played: 76, indWon: 43, ausWon: 29, tied: 2, noResult: 2 },
        t20i: { played: 8, indWon: 5, ausWon: 3, tied: 0, noResult: 0 },
        lastFive: [
            { date: '2021-03-14', format: 'T20I', venue: 'Coolidge', winner: 'WI', margin: '4 wickets' },
            { date: '2021-03-07', format: 'ODI', venue: 'North Sound', winner: 'SL', margin: '8 wickets' },
            { date: '2018-06-30', format: 'Test', venue: 'Gros Islet', winner: 'SL', margin: '4 wickets' },
            { date: '2018-06-14', format: 'Test', venue: 'Port of Spain', winner: 'SL', margin: 'Innings and 196 runs' },
            { date: '2018-06-06', format: 'Test', venue: 'Port of Spain', winner: 'WI', margin: '226 runs' }
        ]
    }
};

// Venue performance data
const venueData = {
    IND: [
        { venue: 'Eden Gardens, Kolkata', matches: 42, won: 18, lost: 12, drawn: 12, winPercent: 42.9 },
        { venue: 'Wankhede, Mumbai', matches: 28, won: 15, lost: 7, drawn: 6, winPercent: 53.6 },
        { venue: 'M. Chinnaswamy, Bangalore', matches: 25, won: 11, lost: 8, drawn: 6, winPercent: 44.0 },
        { venue: 'Feroz Shah Kotla, Delhi', matches: 35, won: 14, lost: 10, drawn: 11, winPercent: 40.0 },
        { venue: 'MA Chidambaram, Chennai', matches: 34, won: 16, lost: 9, drawn: 9, winPercent: 47.1 }
    ],
    AUS: [
        { venue: 'MCG, Melbourne', matches: 61, won: 32, lost: 17, drawn: 12, winPercent: 52.5 },
        { venue: 'SCG, Sydney', matches: 58, won: 30, lost: 16, drawn: 12, winPercent: 51.7 },
        { venue: 'The Gabba, Brisbane', matches: 64, won: 45, lost: 10, drawn: 9, winPercent: 70.3 },
        { venue: 'Adelaide Oval', matches: 52, won: 27, lost: 14, drawn: 11, winPercent: 51.9 },
        { venue: 'WACA, Perth', matches: 47, won: 29, lost: 12, drawn: 6, winPercent: 61.7 }
    ],
    ENG: [
        { venue: 'Lord\'s, London', matches: 140, won: 47, lost: 51, drawn: 42, winPercent: 33.6 },
        { venue: 'The Oval, London', matches: 104, won: 41, lost: 35, drawn: 28, winPercent: 39.4 },
        { venue: 'Old Trafford, Manchester', matches: 84, won: 31, lost: 33, drawn: 20, winPercent: 36.9 },
        { venue: 'Edgbaston, Birmingham', matches: 56, won: 25, lost: 19, drawn: 12, winPercent: 44.6 },
        { venue: 'Headingley, Leeds', matches: 78, won: 29, lost: 28, drawn: 21, winPercent: 37.2 }
    ],
    RSA: [
        { venue: 'Wanderers, Johannesburg', matches: 48, won: 21, lost: 17, drawn: 10, winPercent: 43.8 },
        { venue: 'Newlands, Cape Town', matches: 52, won: 22, lost: 18, drawn: 12, winPercent: 42.3 },
        { venue: 'SuperSport Park, Centurion', matches: 34, won: 16, lost: 11, drawn: 7, winPercent: 47.1 },
        { venue: 'Kingsmead, Durban', matches: 44, won: 18, lost: 15, drawn: 11, winPercent: 40.9 },
        { venue: 'St George\'s Park, Port Elizabeth', matches: 40, won: 15, lost: 16, drawn: 9, winPercent: 37.5 }
    ],
    NZ: [
        { venue: 'Basin Reserve, Wellington', matches: 60, won: 19, lost: 22, drawn: 19, winPercent: 31.7 },
        { venue: 'Eden Park, Auckland', matches: 52, won: 15, lost: 20, drawn: 17, winPercent: 28.8 },
        { venue: 'Hagley Oval, Christchurch', matches: 28, won: 11, lost: 9, drawn: 8, winPercent: 39.3 },
        { venue: 'University Oval, Dunedin', matches: 18, won: 7, lost: 6, drawn: 5, winPercent: 38.9 },
        { venue: 'Seddon Park, Hamilton', matches: 32, won: 10, lost: 14, drawn: 8, winPercent: 31.3 }
    ],
    PAK: [
        { venue: 'National Stadium, Karachi', matches: 45, won: 17, lost: 15, drawn: 13, winPercent: 37.8 },
        { venue: 'Gaddafi Stadium, Lahore', matches: 42, won: 16, lost: 14, drawn: 12, winPercent: 38.1 },
        { venue: 'Rawalpindi Cricket Stadium', matches: 28, won: 12, lost: 9, drawn: 7, winPercent: 42.9 },
        { venue: 'Multan Cricket Stadium', matches: 15, won: 7, lost: 5, drawn: 3, winPercent: 46.7 },
        { venue: 'Peshawar Club Ground', matches: 8, won: 3, lost: 3, drawn: 2, winPercent: 37.5 }
    ],
    SL: [
        { venue: 'R Premadasa Stadium, Colombo', matches: 38, won: 16, lost: 12, drawn: 10, winPercent: 42.1 },
        { venue: 'Galle International Stadium', matches: 35, won: 15, lost: 11, drawn: 9, winPercent: 42.9 },
        { venue: 'Pallekele International Stadium', matches: 22, won: 9, lost: 8, drawn: 5, winPercent: 40.9 },
        { venue: 'Sinhalese Sports Club, Colombo', matches: 42, won: 17, lost: 14, drawn: 11, winPercent: 40.5 },
        { venue: 'P Sara Oval, Colombo', matches: 29, won: 12, lost: 10, drawn: 7, winPercent: 41.4 }
    ],
    WI: [
        { venue: 'Kensington Oval, Bridgetown', matches: 54, won: 20, lost: 21, drawn: 13, winPercent: 37.0 },
        { venue: 'Sabina Park, Kingston', matches: 50, won: 19, lost: 18, drawn: 13, winPercent: 38.0 },
        { venue: 'Queen\'s Park Oval, Port of Spain', matches: 62, won: 24, lost: 23, drawn: 15, winPercent: 38.7 },
        { venue: 'Antigua Recreation Ground', matches: 28, won: 11, lost: 10, drawn: 7, winPercent: 39.3 },
        { venue: 'Bourda, Georgetown', matches: 32, won: 12, lost: 13, drawn: 7, winPercent: 37.5 }
    ],
    BAN: [
        { venue: 'Shere Bangla National Stadium, Dhaka', matches: 48, won: 8, lost: 32, drawn: 8, winPercent: 16.7 },
        { venue: 'Zahur Ahmed Chowdhury Stadium, Chattogram', matches: 35, won: 6, lost: 24, drawn: 5, winPercent: 17.1 },
        { venue: 'MA Aziz Stadium, Chittagong', matches: 18, won: 3, lost: 13, drawn: 2, winPercent: 16.7 },
        { venue: 'Khan Shaheb Osman Ali Stadium, Fatullah', matches: 8, won: 1, lost: 6, drawn: 1, winPercent: 12.5 },
        { venue: 'Sylhet International Cricket Stadium', matches: 12, won: 2, lost: 8, drawn: 2, winPercent: 16.7 }
    ],
    AFG: [
        { venue: 'Sharjah Cricket Stadium, UAE', matches: 4, won: 2, lost: 2, drawn: 0, winPercent: 50.0 },
        { venue: 'Sheikh Zayed Stadium, Abu Dhabi', matches: 3, won: 1, lost: 2, drawn: 0, winPercent: 33.3 },
        { venue: 'Dehradun, India', matches: 2, won: 1, lost: 1, drawn: 0, winPercent: 50.0 }
    ],
    IRE: [
        { venue: 'The Village, Dublin', matches: 3, won: 1, lost: 2, drawn: 0, winPercent: 33.3 },
        { venue: 'Malahide Cricket Club, Dublin', matches: 2, won: 0, lost: 1, drawn: 1, winPercent: 0.0 },
        { venue: 'Stormont, Belfast', matches: 2, won: 0, lost: 2, drawn: 0, winPercent: 0.0 }
    ],
    ZIM: [
        { venue: 'Harare Sports Club', matches: 56, won: 7, lost: 39, drawn: 10, winPercent: 12.5 },
        { venue: 'Queens Sports Club, Bulawayo', matches: 42, won: 5, lost: 28, drawn: 9, winPercent: 11.9 },
        { venue: 'Harare Cricket Ground', matches: 8, won: 1, lost: 5, drawn: 2, winPercent: 12.5 }
    ],
    UAE: [
        { venue: 'Dubai International Cricket Stadium', matches: 0, won: 0, lost: 0, drawn: 0, winPercent: 0 },
        { venue: 'Sharjah Cricket Stadium', matches: 0, won: 0, lost: 0, drawn: 0, winPercent: 0 }
    ],
    NED: [
        { venue: 'VRA Ground, Amstelveen', matches: 0, won: 0, lost: 0, drawn: 0, winPercent: 0 },
        { venue: 'Hazelaarweg, Rotterdam', matches: 0, won: 0, lost: 0, drawn: 0, winPercent: 0 }
    ],
    SCO: [
        { venue: 'The Grange, Edinburgh', matches: 0, won: 0, lost: 0, drawn: 0, winPercent: 0 },
        { venue: 'Titwood, Glasgow', matches: 0, won: 0, lost: 0, drawn: 0, winPercent: 0 }
    ]
};

// API delay simulation
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to filter stats by time period
const filterStatsByTimePeriod = (stats, timePeriod) => {
    if (timePeriod === 'alltime') {
        return stats;
    }

    // For demo purposes, we'll adjust the numbers based on time period
    const multiplier = timePeriod === 'last12months' ? 0.15 : 0.4; // 15% for last 12 months, 40% for last 5 years

    const filtered = JSON.parse(JSON.stringify(stats)); // Deep clone

    // Adjust overview stats
    if (filtered.overview) {
        filtered.overview.totalMatches = Math.round(filtered.overview.totalMatches * multiplier);
        filtered.overview.won = Math.round(filtered.overview.won * multiplier);
        filtered.overview.lost = Math.round(filtered.overview.lost * multiplier);
        if (filtered.overview.drawn !== undefined) {
            filtered.overview.drawn = Math.round(filtered.overview.drawn * multiplier);
        }
        if (filtered.overview.tied !== undefined) {
            filtered.overview.tied = Math.round(filtered.overview.tied * multiplier);
        }
        if (filtered.overview.noResult !== undefined) {
            filtered.overview.noResult = Math.round(filtered.overview.noResult * multiplier);
        }
        // Recalculate win percentage
        if (filtered.overview.totalMatches > 0) {
            filtered.overview.winPercentage = parseFloat(
                ((filtered.overview.won / filtered.overview.totalMatches) * 100).toFixed(1)
            );
        }
    }

    // Adjust batting stats
    if (filtered.batting) {
        filtered.batting.totalRuns = Math.round(filtered.batting.totalRuns * multiplier);
        filtered.batting.centuries = Math.round(filtered.batting.centuries * multiplier);
        filtered.batting.sixes = Math.round(filtered.batting.sixes * multiplier);
        if (filtered.batting.scoresOver400 !== undefined) {
            filtered.batting.scoresOver400 = Math.round(filtered.batting.scoresOver400 * multiplier);
        }
        if (filtered.batting.scoresOver300 !== undefined) {
            filtered.batting.scoresOver300 = Math.round(filtered.batting.scoresOver300 * multiplier);
        }
        if (filtered.batting.scoresOver200 !== undefined) {
            filtered.batting.scoresOver200 = Math.round(filtered.batting.scoresOver200 * multiplier);
        }
    }

    // Adjust bowling stats
    if (filtered.bowling) {
        filtered.bowling.totalWickets = Math.round(filtered.bowling.totalWickets * multiplier);
        filtered.bowling.fiveWicketHauls = Math.round(filtered.bowling.fiveWicketHauls * multiplier);
        if (filtered.bowling.tenWicketHauls !== undefined) {
            filtered.bowling.tenWicketHauls = Math.round(filtered.bowling.tenWicketHauls * multiplier);
        }
    }

    return filtered;
};

// API Functions
export const getTeamStats = async (country, format = 'all', timePeriod = 'alltime') => {
    await delay(300);
    const team = teamStatsData[country];
    if (!team) return null;

    if (format === 'all') {
        // Apply time period filter to all formats
        const filteredTeam = {
            ...team,
            test: filterStatsByTimePeriod(team.test, timePeriod),
            odi: filterStatsByTimePeriod(team.odi, timePeriod),
            t20i: filterStatsByTimePeriod(team.t20i, timePeriod)
        };
        return filteredTeam;
    }

    // Apply time period filter to specific format
    return {
        ...team,
        stats: filterStatsByTimePeriod(team[format], timePeriod)
    };
};

export const getHeadToHead = async (team1, team2) => {
    await delay(400);
    const key = `${team1}-${team2}`;
    const reverseKey = `${team2}-${team1}`;

    const data = headToHeadData[key] || headToHeadData[reverseKey];

    // If no specific H2H data, generate default
    if (!data) {
        return {
            test: { played: 0, indWon: 0, ausWon: 0, drawn: 0 },
            odi: { played: 0, indWon: 0, ausWon: 0, tied: 0, noResult: 0 },
            t20i: { played: 0, indWon: 0, ausWon: 0, tied: 0, noResult: 0 },
            lastFive: []
        };
    }

    return data;
};

export const getVenuePerformance = async (country) => {
    await delay(300);
    return venueData[country] || [];
};

export const getAllTeams = async () => {
    await delay(200);
    return Object.keys(teamStatsData).map(key => ({
        country: key,
        team: teamStatsData[key].team,
        image: teamStatsData[key].image,
        color: teamStatsData[key].color
    }));
};

export const compareTeams = async (teams) => {
    await delay(400);
    return teams.map(country => teamStatsData[country]).filter(Boolean);
};