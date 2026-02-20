import afgLogo from '../assets/fan/acb.png';
import ausLogo from '../assets/fan/aussie.png';
import banLogo from '../assets/fan/bcb.png';
import engLogo from '../assets/fan/ecb.png';
import indLogo from '../assets/fan/bcci.png';
import ireLogo from '../assets/fan/icb.png';
import nedLogo from '../assets/fan/nedlogo.png';
import nzLogo from '../assets/fan/nz logo.png';
import pakLogo from '../assets/fan/pcb.png';
import saLogo from '../assets/fan/rsa logo.png';
import scoLogo from '../assets/fan/scb.png';
import slLogo from '../assets/fan/SLC.png';
import uaeLogo from '../assets/fan/uae.png';
import wiLogo from '../assets/fan/windies logo.png';
import zimLogo from '../assets/fan/zim.png';


export const teams = [
    { id: 'afghanistan', name: 'Team Afghanistan', image: afgLogo, color: 'var(--accent)', members: 45000 },
    { id: 'australia', name: 'Team Australia', image: ausLogo, color: 'var(--accent)', members: 85000 },
    { id: 'bangladesh', name: 'Team Bangladesh', image: banLogo, color: 'var(--accent)', members: 92000 },
    { id: 'england', name: 'Team England', image: engLogo, color: 'var(--accent)', members: 76000 },
    { id: 'india', name: 'Team India', image: indLogo, color: 'var(--accent)', members: 154000 },
    { id: 'ireland', name: 'Team Ireland', image: ireLogo, color: 'var(--accent)', members: 28000 },
    { id: 'netherlands', name: 'Team Netherlands', image: nedLogo, color: 'var(--accent)', members: 19000 },
    { id: 'new-zealand', name: 'Team New Zealand', image: nzLogo, color: 'var(--accent)', members: 58000 },
    { id: 'pakistan', name: 'Team Pakistan', image: pakLogo, color: 'var(--accent)', members: 110000 },
    { id: 'south-africa', name: 'Team South Africa', image: saLogo, color: 'var(--accent)', members: 61000 },
    { id: 'scotland', name: 'Team Scotland', image: scoLogo, color: 'var(--accent)', members: 21000 },
    { id: 'sri-lanka', name: 'Team Sri Lanka', image: slLogo, color: 'var(--accent)', members: 49000 },
    { id: 'uae', name: 'Team UAE', image: uaeLogo, color: 'var(--accent)', members: 24000 },
    { id: 'windies', name: 'Team Windies', image: wiLogo, color: 'var(--accent)', members: 67000 },
    { id: 'zimbabwe', name: 'Team Zimbabwe', image: zimLogo, color: 'var(--accent)', members: 33000 },
];

export const initialDiscussions = [
    {
        id: 1,
        title: 'Best ODI innings of all time?',
        content: 'In my opinion, Sachin\'s 200* against South Africa was the greatest ODI innings ever played. The composure, technique, and ability to accelerate when needed was simply phenomenal. What do you all think?',
        author: 'CricketFan123',
        team: 'india',
        replies: 247,
        likes: 1523,
        likedBy: [],
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        category: 'Discussion',
        comments: [
            {
                id: 101,
                author: 'AussieSupporter',
                content: 'Great innings but I think AB de Villiers\' 149 off 44 balls is more impressive!',
                timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
                likes: 45
            },
            {
                id: 102,
                author: 'IndianFan',
                content: 'Nothing beats Sachin\'s double century. Historical moment!',
                timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
                likes: 89
            }
        ]
    },
    {
        id: 2,
        title: 'IPL 2025 Predictions - Your thoughts?',
        content: 'With the mega auction coming up, which team do you think will win IPL 2025? CSK has been struggling, MI needs to rebuild, and RCB still searching for their first title.',
        author: 'IPLLover',
        team: 'india',
        replies: 189,
        likes: 892,
        likedBy: [],
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        category: 'IPL',
        comments: []
    },
    {
        id: 3,
        title: 'Greatest fast bowler debate: McGrath vs Steyn',
        content: 'Both legends of the game but who was better? McGrath\'s consistency or Steyn\'s aggression?',
        author: 'FastBowlingFan',
        team: 'australia',
        replies: 156,
        likes: 734,
        likedBy: [],
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        category: 'Discussion',
        comments: []
    },
    {
        id: 4,
        title: 'Root vs Kohli: Who is better in Tests?',
        content: 'Both modern greats but who has had the better Test career? Let\'s discuss stats, impact, and consistency.',
        author: 'TestCricketPurist',
        team: 'england',
        replies: 312,
        likes: 1876,
        likedBy: [],
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        category: 'Debate',
        comments: []
    }
];

export const activities = [
    {
        id: 1,
        user: 'Rahul_Sharma',
        action: 'joined',
        team: 'Team India',
        timestamp: '5 minutes ago'
    },
    {
        id: 2,
        user: 'Smith_Aussie',
        action: 'posted',
        content: 'New discussion about Ashes series',
        timestamp: '15 minutes ago'
    },
    {
        id: 3,
        user: 'Kohli_Fan_99',
        action: 'liked',
        content: 'Best ODI innings of all time?',
        timestamp: '30 minutes ago'
    }
];