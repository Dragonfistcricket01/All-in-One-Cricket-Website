import mr360 from '../assets/player_profile/abd17.png';
import russell from '../assets/player_profile/ar13.png';
import babar from '../assets/player_profile/ba56.png';
import stokes from '../assets/player_profile/bs55.png';
import warner from '../assets/player_profile/dw31.png';
import maxwell from '../assets/player_profile/gm32.png';
import hardik from '../assets/player_profile/hp33.png';
import jofra from '../assets/player_profile/ja22.png';
import buttler from '../assets/player_profile/jb63.png';
import bumrah from '../assets/player_profile/jb93.png';
import joeRoot from '../assets/player_profile/jr03.png';
import klRahul from '../assets/player_profile/klr1.png';
import rabada from '../assets/player_profile/kr25.png';
import williamson from '../assets/player_profile/kw22.png';
import malinga from '../assets/player_profile/lm99.png';
import nabi from '../assets/player_profile/mdn7.png';
import rizwan from '../assets/player_profile/mdr16.png';
import mushfiqur from '../assets/player_profile/mr15.png';
import starc from '../assets/player_profile/ms56.png';
import dhoni from '../assets/player_profile/msd7.png';
import pooran from '../assets/player_profile/np29.png';
import patCummins from '../assets/player_profile/pc30.png';
import quinton from '../assets/player_profile/qdk12.png';
import pant from '../assets/player_profile/rb17.png';
import jadeja from '../assets/player_profile/rj8.png';
import rashidKhan from '../assets/player_profile/rk19.png';
import rohit from '../assets/player_profile/rs45.png';
import shakib from '../assets/player_profile/sah75.png';
import steveSmith from '../assets/player_profile/ss49.png';
import shaheen from '../assets/player_profile/ssa40.png';
import boult from '../assets/player_profile/tb18.png';
import kohli from '../assets/player_profile/vk18.png';
import hasaranga from '../assets/player_profile/wh49.png';

export const playerDatabase = [
    // Indian Players
    {
        id: 1,
        name: 'Virat Kohli',
        country: 'India',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        rating: 95,
        image: kohli,
        stats: {
            matches: 500,
            runs: 24000,
            wickets: 4,
            average: 52.5,
            strikeRate: 93.2
        },
        traits: ['Aggressive', 'Chase Master', 'Consistent'],
        specialty: 'Run Chase Expert'
    },
    {
        id: 2,
        name: 'Rohit Sharma',
        country: 'India',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off-break',
        rating: 94,
        image: rohit,
        stats: {
            matches: 450,
            runs: 18000,
            wickets: 8,
            average: 48.2,
            strikeRate: 88.9
        },
        traits: ['Big Hitter', 'Captain', 'Opener'],
        specialty: 'Double Century Specialist'
    },
    {
        id: 3,
        name: 'MS Dhoni',
        country: 'India',
        role: 'Wicket-Keeper',
        battingStyle: 'Right-hand bat',
        bowlingStyle: '-',
        rating: 92,
        image: dhoni,
        stats: {
            matches: 538,
            runs: 17000,
            wickets: 0,
            average: 50.6,
            strikeRate: 87.6
        },
        traits: ['Finisher', 'Captain Cool', 'Quick Stumping'],
        specialty: 'Death Overs Specialist'
    },
    {
        id: 4,
        name: 'Jasprit Bumrah',
        country: 'India',
        role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        rating: 96,
        image: bumrah,
        stats: {
            matches: 250,
            runs: 500,
            wickets: 350,
            average: 24.2,
            strikeRate: 30.5
        },
        traits: ['Death Overs', 'Yorker Master', 'Consistent'],
        specialty: 'Death Bowling Expert'
    },
    {
        id: 5,
        name: 'Ravindra Jadeja',
        country: 'India',
        role: 'All-Rounder',
        battingStyle: 'Left-hand bat',
        bowlingStyle: 'Left-arm orthodox',
        rating: 93,
        image: jadeja,
        stats: {
            matches: 350,
            runs: 8000,
            wickets: 280,
            average: 36.5,
            strikeRate: 85.2
        },
        traits: ['Gun Fielder', 'Spin Master', 'Lower Order Hitter'],
        specialty: 'Complete All-Rounder'
    },
    {
        id: 6,
        name: 'Hardik Pandya',
        country: 'India',
        role: 'All-Rounder',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast-medium',
        rating: 89,
        image: hardik,
        stats: {
            matches: 200,
            runs: 4500,
            wickets: 120,
            average: 32.8,
            strikeRate: 143.5
        },
        traits: ['Power Hitter', 'Death Bowler', 'Athletic'],
        specialty: 'Power Hitting'
    },
    {
        id: 7,
        name: 'KL Rahul',
        country: 'India',
        role: 'Wicket-Keeper',
        battingStyle: 'Right-hand bat',
        bowlingStyle: '-',
        rating: 90,
        image: klRahul,
        stats: {
            matches: 180,
            runs: 6500,
            wickets: 0,
            average: 45.2,
            strikeRate: 88.4
        },
        traits: ['Versatile', 'Stylish', 'Opener'],
        specialty: 'Versatile Batsman'
    },
    {
        id: 8,
        name: 'Rishabh Pant',
        country: 'India',
        role: 'Wicket-Keeper',
        battingStyle: 'Left-hand bat',
        bowlingStyle: '-',
        rating: 91,
        image: pant,
        stats: {
            matches: 150,
            runs: 5800,
            wickets: 0,
            average: 42.5,
            strikeRate: 126.4
        },
        traits: ['Aggressive', 'Match Winner', 'Quick Hands'],
        specialty: 'Aggressive Wicket-Keeper'
    },

    // Australian Players
    {
        id: 9,
        name: 'Steve Smith',
        country: 'Australia',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm leg-break',
        rating: 95,
        image: steveSmith,
        stats: {
            matches: 280,
            runs: 12000,
            wickets: 25,
            average: 56.9,
            strikeRate: 86.8
        },
        traits: ['Consistent', 'Technical', 'Unconventional'],
        specialty: 'Test Cricket Maestro'
    },
    {
        id: 10,
        name: 'David Warner',
        country: 'Australia',
        role: 'Batsman',
        battingStyle: 'Left-hand bat',
        bowlingStyle: 'Right-arm off-break',
        rating: 92,
        image: warner,
        stats: {
            matches: 350,
            runs: 15000,
            wickets: 2,
            average: 48.2,
            strikeRate: 95.4
        },
        traits: ['Aggressive Opener', 'Power Hitter', 'Quick Runner'],
        specialty: 'Opening Dominance'
    },
    {
        id: 11,
        name: 'Pat Cummins',
        country: 'Australia',
        role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        rating: 94,
        image: patCummins,
        stats: {
            matches: 200,
            runs: 2500,
            wickets: 380,
            average: 22.5,
            strikeRate: 32.8
        },
        traits: ['Captain', 'Consistent', 'All Conditions'],
        specialty: 'Complete Fast Bowler'
    },
    {
        id: 12,
        name: 'Glenn Maxwell',
        country: 'Australia',
        role: 'All-Rounder',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off-break',
        rating: 90,
        image: maxwell,
        stats: {
            matches: 280,
            runs: 8500,
            wickets: 145,
            average: 35.6,
            strikeRate: 154.8
        },
        traits: ['360° Shots', 'Match Winner', 'Big Hitter'],
        specialty: 'Innovative Batting'
    },
    {
        id: 13,
        name: 'Mitchell Starc',
        country: 'Australia',
        role: 'Bowler',
        battingStyle: 'Left-hand bat',
        bowlingStyle: 'Left-arm fast',
        rating: 93,
        image: starc,
        stats: {
            matches: 250,
            runs: 1800,
            wickets: 420,
            average: 23.8,
            strikeRate: 28.5
        },
        traits: ['Swing Master', 'Death Bowler', 'Yorker Expert'],
        specialty: 'Swing and Pace'
    },

    // English Players
    {
        id: 14,
        name: 'Joe Root',
        country: 'England',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off-break',
        rating: 94,
        image: joeRoot,
        stats: {
            matches: 320,
            runs: 14500,
            wickets: 35,
            average: 49.8,
            strikeRate: 84.2
        },
        traits: ['Consistent', 'Technical', 'Captain'],
        specialty: 'Test Cricket Excellence'
    },
    {
        id: 15,
        name: 'Ben Stokes',
        country: 'England',
        role: 'All-Rounder',
        battingStyle: 'Left-hand bat',
        bowlingStyle: 'Right-arm fast-medium',
        rating: 95,
        image: stokes,
        stats: {
            matches: 280,
            runs: 9500,
            wickets: 280,
            average: 38.5,
            strikeRate: 92.4
        },
        traits: ['Match Winner', 'All-Rounder', 'Clutch Player'],
        specialty: 'Complete All-Rounder'
    },
    {
        id: 16,
        name: 'Jos Buttler',
        country: 'England',
        role: 'Wicket-Keeper',
        battingStyle: 'Right-hand bat',
        bowlingStyle: '-',
        rating: 92,
        image: buttler,
        stats: {
            matches: 300,
            runs: 10500,
            wickets: 0,
            average: 40.2,
            strikeRate: 118.5
        },
        traits: ['Innovative', 'Aggressive', 'Finisher'],
        specialty: 'Aggressive Wicket-Keeping'
    },
    {
        id: 17,
        name: 'Jofra Archer',
        country: 'England',
        role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        rating: 91,
        image: jofra,
        stats: {
            matches: 120,
            runs: 800,
            wickets: 180,
            average: 24.5,
            strikeRate: 29.8
        },
        traits: ['Express Pace', 'Yorker Master', 'Aggressive'],
        specialty: 'Express Fast Bowling'
    },

    // Pakistani Players
    {
        id: 18,
        name: 'Babar Azam',
        country: 'Pakistan',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off-break',
        rating: 94,
        image: babar,
        stats: {
            matches: 250,
            runs: 11000,
            wickets: 8,
            average: 54.2,
            strikeRate: 89.5
        },
        traits: ['Elegant', 'Consistent', 'Captain'],
        specialty: 'Classical Batting'
    },
    {
        id: 19,
        name: 'Shaheen Afridi',
        country: 'Pakistan',
        role: 'Bowler',
        battingStyle: 'Left-hand bat',
        bowlingStyle: 'Left-arm fast',
        rating: 93,
        image: shaheen,
        stats: {
            matches: 150,
            runs: 600,
            wickets: 220,
            average: 23.2,
            strikeRate: 28.5
        },
        traits: ['Swing Expert', 'Yorker Master', 'Aggressive'],
        specialty: 'Swing and Pace'
    },
    {
        id: 20,
        name: 'Mohammad Rizwan',
        country: 'Pakistan',
        role: 'Wicket-Keeper',
        battingStyle: 'Right-hand bat',
        bowlingStyle: '-',
        rating: 90,
        image: rizwan,
        stats: {
            matches: 180,
            runs: 6800,
            wickets: 0,
            average: 42.5,
            strikeRate: 88.2
        },
        traits: ['Consistent', 'Quick Gloves', 'Reliable'],
        specialty: 'Consistent Performer'
    },

    // South African Players
    {
        id: 21,
        name: 'Quinton de Kock',
        country: 'South Africa',
        role: 'Wicket-Keeper',
        battingStyle: 'Left-hand bat',
        bowlingStyle: '-',
        rating: 91,
        image: quinton,
        stats: {
            matches: 300,
            runs: 12000,
            wickets: 0,
            average: 44.5,
            strikeRate: 95.2
        },
        traits: ['Aggressive Opener', 'Quick Hands', 'Consistent'],
        specialty: 'Aggressive Opening'
    },
    {
        id: 22,
        name: 'Kagiso Rabada',
        country: 'South Africa',
        role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        rating: 94,
        image: rabada,
        stats: {
            matches: 180,
            runs: 1200,
            wickets: 280,
            average: 22.8,
            strikeRate: 27.5
        },
        traits: ['Express Pace', 'Consistent', 'Wicket Taker'],
        specialty: 'Fast and Accurate'
    },
    {
        id: 23,
        name: 'AB de Villiers',
        country: 'South Africa',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        rating: 96,
        image: mr360,
        stats: {
            matches: 420,
            runs: 18000,
            wickets: 15,
            average: 50.2,
            strikeRate: 101.5
        },
        traits: ['360° Player', 'Innovative', 'Mr. Versatile'],
        specialty: 'Complete Batsman'
    },

    // New Zealand Players
    {
        id: 24,
        name: 'Kane Williamson',
        country: 'New Zealand',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off-break',
        rating: 95,
        image: williamson,
        stats: {
            matches: 320,
            runs: 14000,
            wickets: 28,
            average: 52.8,
            strikeRate: 82.5
        },
        traits: ['Consistent', 'Captain', 'Technical Master'],
        specialty: 'Classical Excellence'
    },
    {
        id: 25,
        name: 'Trent Boult',
        country: 'New Zealand',
        role: 'Bowler',
        battingStyle: 'Left-hand bat',
        bowlingStyle: 'Left-arm fast-medium',
        rating: 92,
        image: boult,
        stats: {
            matches: 280,
            runs: 1800,
            wickets: 380,
            average: 24.5,
            strikeRate: 31.2
        },
        traits: ['Swing Master', 'New Ball Expert', 'Consistent'],
        specialty: 'Swing Bowling'
    },

    // West Indies Players
    {
        id: 26,
        name: 'Andre Russell',
        country: 'West Indies',
        role: 'All-Rounder',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        rating: 90,
        image: russell,
        stats: {
            matches: 280,
            runs: 7500,
            wickets: 180,
            average: 32.5,
            strikeRate: 182.5
        },
        traits: ['Power Hitter', 'Death Bowler', 'Match Winner'],
        specialty: 'Power and Pace'
    },
    {
        id: 27,
        name: 'Nicholas Pooran',
        country: 'West Indies',
        role: 'Wicket-Keeper',
        battingStyle: 'Left-hand bat',
        bowlingStyle: '-',
        rating: 88,
        image: pooran,
        stats: {
            matches: 150,
            runs: 4800,
            wickets: 0,
            average: 35.8,
            strikeRate: 135.2
        },
        traits: ['Big Hitter', 'Quick Hands', 'Aggressive'],
        specialty: 'Power Hitting'
    },

    // Sri Lankan Players
    {
        id: 28,
        name: 'Lasith Malinga',
        country: 'Sri Lanka',
        role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        rating: 92,
        image: malinga,
        stats: {
            matches: 450,
            runs: 1200,
            wickets: 550,
            average: 25.5,
            strikeRate: 28.9
        },
        traits: ['Yorker King', 'Death Master', 'Unique Action'],
        specialty: 'Death Bowling Legend'
    },
    {
        id: 29,
        name: 'Wanindu Hasaranga',
        country: 'Sri Lanka',
        role: 'All-Rounder',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm leg-break',
        rating: 89,
        image: hasaranga,
        stats: {
            matches: 120,
            runs: 2800,
            wickets: 140,
            average: 28.5,
            strikeRate: 125.5
        },
        traits: ['Spin Wizard', 'Lower Order Hitter', 'Wicket Taker'],
        specialty: 'Leg Spin Excellence'
    },

    // Bangladesh Players
    {
        id: 30,
        name: 'Shakib Al Hasan',
        country: 'Bangladesh',
        role: 'All-Rounder',
        battingStyle: 'Left-hand bat',
        bowlingStyle: 'Left-arm orthodox',
        rating: 92,
        image: shakib,
        stats: {
            matches: 420,
            runs: 12500,
            wickets: 420,
            average: 38.5,
            strikeRate: 82.5
        },
        traits: ['Complete All-Rounder', 'Captain', 'Consistent'],
        specialty: 'World-Class All-Rounder'
    },
    {
        id: 31,
        name: 'Mushfiqur Rahim',
        country: 'Bangladesh',
        role: 'Wicket-Keeper',
        battingStyle: 'Right-hand bat',
        bowlingStyle: '-',
        rating: 87,
        image: mushfiqur,
        stats: {
            matches: 380,
            runs: 11000,
            wickets: 0,
            average: 38.2,
            strikeRate: 78.5
        },
        traits: ['Consistent', 'Experienced', 'Reliable'],
        specialty: 'Consistent Performer'
    },

    // Afghanistan Players
    {
        id: 32,
        name: 'Rashid Khan',
        country: 'Afghanistan',
        role: 'All-Rounder',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm leg-break',
        rating: 94,
        image: rashidKhan,
        stats: {
            matches: 250,
            runs: 3500,
            wickets: 380,
            average: 18.5,
            strikeRate: 120.5
        },
        traits: ['Spin Wizard', 'Captain', 'T20 Specialist'],
        specialty: 'World-Class Leg Spinner'
    },
    {
        id: 33,
        name: 'Mohammad Nabi',
        country: 'Afghanistan',
        role: 'All-Rounder',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm off-break',
        rating: 88,
        image: nabi,
        stats: {
            matches: 320,
            runs: 8500,
            wickets: 240,
            average: 32.8,
            strikeRate: 135.2
        },
        traits: ['Power Hitter', 'Off Spinner', 'Experienced'],
        specialty: 'Spin and Power'
    }
];

export const formations = [
    { id: 1, name: '1-4-3-3 (Balanced)', wk: 1, bat: 4, ar: 3, bowl: 3, description: 'Perfect balance of batting and bowling' },
    { id: 2, name: '2-4-2-3 (Dual Keeper)', wk: 2, bat: 4, ar: 2, bowl: 3, description: 'Extra batting depth with two keepers' },
    { id: 3, name: '1-3-4-3 (All-Rounder Heavy)', wk: 1, bat: 3, ar: 4, bowl: 3, description: 'Maximum flexibility with all-rounders' },
    { id: 4, name: '1-5-2-3 (Batting Heavy)', wk: 1, bat: 5, ar: 2, bowl: 3, description: 'Strong batting lineup' },
    { id: 5, name: '1-4-2-4 (Bowling Heavy)', wk: 1, bat: 4, ar: 2, bowl: 4, description: 'Strong bowling attack' },
    { id: 6, name: '1-3-3-4 (Balanced Attack)', wk: 1, bat: 3, ar: 3, bowl: 4, description: 'Focus on bowling strength' },
    { id: 7, name: '2-3-3-3 (Flexible)', wk: 2, bat: 3, ar: 3, bowl: 3, description: 'Flexible team composition' },
    { id: 8, name: '1-6-1-3 (Ultra Batting)', wk: 1, bat: 6, ar: 1, bowl: 3, description: 'Maximum batting strength' },
    { id: 9, name: '1-2-4-4 (Bowling Focus)', wk: 1, bat: 2, ar: 4, bowl: 4, description: 'Strong bowling with all-rounder support' },
    { id: 10, name: 'Custom', wk: 0, bat: 0, ar: 0, bowl: 0, description: 'Create your own formation' }
];