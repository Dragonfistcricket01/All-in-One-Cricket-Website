// Mock data for analysis
const analysisData = [
    // ========== MATCH ANALYSIS ==========
    {
        id: 'match001',
        title: 'Kohli\'s 133* vs Sri Lanka - A Masterclass',
        type: 'match-analysis',
        category: 'famous-innings',
        subcategory: 'batting',
        match: 'India vs Sri Lanka, 2012',
        venue: 'Bellerive Oval, Hobart, Australia  ',
        date: 'February 28, 2012',
        format: 'ODI',
        views: 450000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/ZRe4j-UUifM/maxresdefault.jpg',
        videoId: 'ZRe4j-UUifM',  // Full Analysis - Kohli chase master video
        highlightVideoId: 'LeNYAF_nqSk',  // Match Highlights - Different video
        duration: '6:12',
        featured: true,
        description: 'An in-depth analysis of Virat Kohli\'s unbeaten 133 against Sri Lanka, showcasing his chase mastery and shot selection under pressure.',
        tags: ['Virat Kohli', 'Chase Master', 'ODI', 'Run Chase', 'Shot Selection'],
        
        keyMoments: [
            {
                time: '02:30',
                title: 'Early Aggression',
                description: 'Kohli targets the spinners in the powerplay',
                score: '15/0 (3.2 overs)'
            },
            {
                time: '08:45',
                title: 'Rebuilding Phase',
                description: 'Kohli rotates strike masterfully after losing partners',
                score: '89/4 (18.5 overs)'
            },
            {
                time: '18:20',
                title: 'The Acceleration',
                description: 'Kohli shifts gears in the death overs',
                score: '220/5 (42.1 overs)'
            },
            {
                time: '23:10',
                title: 'Match-Winning Six',
                description: 'The final blow to seal the chase',
                score: '322/6 (48.3 overs)'
            }
        ],
        analysis: {
            totalRuns: 133,
            ballsFaced: 86,
            strikeRate: 154.65,
            fours: 16,
            sixes: 2,
            innings: 'Not Out',
            matchResult: 'India won by 3 wickets'
        },
        tacticalInsights: [
            'Kohli targeted the spinners early to get quick runs',
            'Used the depth of the crease to play both pace and spin',
            'Rotated strike consistently in middle overs',
            'Accelerated without taking unnecessary risks',
            'Maintained composure despite losing partners'
        ],
        shotBreakdown: {
            onSide: 65,
            offSide: 68,
            front: 75,
            back: 58
        },
        wagonWheel: [
            { angle: 45, distance: 75, runs: 4 },
            { angle: 90, distance: 85, runs: 6 },
            { angle: 135, distance: 60, runs: 4 },
            { angle: 180, distance: 70, runs: 4 },
            { angle: 225, distance: 65, runs: 4 },
            { angle: 270, distance: 80, runs: 4 },
            { angle: 315, distance: 55, runs: 2 },
            { angle: 0, distance: 90, runs: 6 }
        ],
        heatMap: {
            zones: [
                { x: 50, y: 20, intensity: 45 },
                { x: 70, y: 30, intensity: 65 },
                { x: 80, y: 50, intensity: 55 },
                { x: 60, y: 70, intensity: 40 },
                { x: 40, y: 70, intensity: 50 },
                { x: 30, y: 50, intensity: 35 },
                { x: 50, y: 10, intensity: 70 }
            ]
        }
    },
    {
        id: 'match002',
        title: '2019 World Cup Final - England\'s Triumph',
        type: 'match-analysis',
        category: 'historic-matches',
        subcategory: 'world-cup',
        match: 'England vs New Zealand, 2019',
        venue: 'Lord\'s, London',
        date: 'July 14, 2019',
        format: 'ODI',
        views: 890000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/5soKorAENVI/maxresdefault.jpg',
        videoId: 'pdklA5mEFSc',  // Full Analysis
        highlightVideoId: '5soKorAENVI',  // Highlights
        duration: '45:00',
        featured: true,
        description: 'Complete tactical breakdown of the most dramatic World Cup final ever - from Super Over to boundary count rule.',
        tags: ['World Cup', 'Finals', 'Super Over', 'England', 'New Zealand', 'Lord\'s'],
        keyMoments: [
            {
                time: '05:30',
                title: 'Early Wickets',
                description: 'New Zealand\'s disciplined bowling',
                score: '86/4 (23 overs)'
            },
            {
                time: '15:45',
                title: 'Buttler-Stokes Partnership',
                description: 'England\'s crucial recovery',
                score: '196/6 (45 overs)'
            },
            {
                time: '28:20',
                title: 'The Overthrow',
                description: 'Stokes\' deflection changes everything',
                score: '233/8 (49.1 overs)'
            },
            {
                time: '38:10',
                title: 'Super Over Drama',
                description: 'Both teams tie on 15 runs',
                score: 'Tied - 241 all out'
            }
        ],
        analysis: {
            matchResult: 'England won on boundary count',
            englandScore: '241 (50 overs)',
            newZealandScore: '241/8 (50 overs)',
            superOver: 'Tied at 15',
            boundaries: 'England 26, New Zealand 17'
        },
        tacticalInsights: [
            'New Zealand\'s early wicket pressure strategy',
            'England\'s middle-order resilience',
            'Field placement in the death overs',
            'Super Over tactics and execution',
            'Boundary count controversy'
        ]
    },

    // ========== PLAYER ANALYSIS ==========
    {
        id: 'player001',
        title: 'AB de Villiers - 360° Batting Mastery',
        type: 'player-analysis',
        category: 'technique-breakdown',
        subcategory: 'batting',
        player: 'AB de Villiers',
        country: 'South Africa',
        views: 620000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/HK6B2da3DPA/maxresdefault.jpg',
        videoId: 'P43EHrx4LVM',  // Full Analysis
        highlightVideoId: 'HK6B2da3DPA',  // Highlights
        duration: '11:52',
        featured: true,
        description: 'Complete breakdown of AB de Villiers\' revolutionary 360-degree batting technique and shot innovation.',
        tags: ['AB de Villiers', '360 Batting', 'Innovation', 'Technique', 'T20'],
        playerProfile: {
            role: 'Batsman / Wicket-keeper',
            battingStyle: 'Right-hand bat',
            career: '2004-2018 (International)',
            tests: { matches: 114, runs: 8765, average: 50.66, hundreds: 22 },
            odis: { matches: 228, runs: 9577, average: 53.50, hundreds: 25 },
            t20is: { matches: 78, runs: 1672, average: 26.12, sixes: 37 }
        },
        strengthsWeaknesses: {
            strengths: [
                'Unorthodox shot-making ability',
                'Exceptional hand-eye coordination',
                'Mental flexibility and adaptability',
                'Power hitting to all parts',
                'Innovative stroke play'
            ],
            weaknesses: [
                'Occasional over-aggression',
                'Susceptible to early swing',
                'Risk of getting out to new bowlers'
            ]
        },
        signatureShots: [
            {
                name: 'Reverse Scoop',
                description: 'Pre-meditated shot over keeper',
                effectiveness: 95,
                riskLevel: 'High'
            },
            {
                name: 'Switch Hit',
                description: 'Changing stance mid-delivery',
                effectiveness: 90,
                riskLevel: 'High'
            },
            {
                name: 'Inside-Out Loft',
                description: 'Over extra cover against spin',
                effectiveness: 92,
                riskLevel: 'Medium'
            }
        ],
        careerEvolution: [
            {
                period: '2004-2008',
                phase: 'Early Career',
                description: 'Traditional technique, building foundation'
            },
            {
                period: '2009-2012',
                phase: 'Innovation Phase',
                description: 'Developing 360-degree shots'
            },
            {
                period: '2013-2015',
                phase: 'Peak Years',
                description: 'Dominating all formats'
            },
            {
                period: '2016-2018',
                phase: 'T20 Specialist',
                description: 'Focusing on franchise cricket'
            }
        ]
    },
    {
        id: 'player002',
        title: 'Jasprit Bumrah - Death Bowling Analysis',
        type: 'player-analysis',
        category: 'bowling-actions',
        subcategory: 'bowling',
        player: 'Jasprit Bumrah',
        country: 'India',
        views: 480000,
        rating: 4.8,
        thumbnail: 'https://img.youtube.com/vi/Z63EngdPgzk/maxresdefault.jpg',
        videoId: '1NQc9_IWfy8',  // Full Analysis
        highlightVideoId: 'Z63EngdPgzk',  // Highlights
        duration: '2:06',
        featured: true,
        description: 'Analyzing Jasprit Bumrah\'s unique bowling action and his mastery of death overs bowling.',
        tags: ['Jasprit Bumrah', 'Death Bowling', 'Yorkers', 'Bowling Action', 'Fast Bowling'],
        playerProfile: {
            role: 'Fast Bowler',
            bowlingStyle: 'Right-arm fast',
            career: '2016-Present',
            tests: { matches: 36, wickets: 159, average: 20.69, economy: 2.69 },
            odis: { matches: 79, wickets: 149, average: 23.55, economy: 4.63 },
            t20is: { matches: 70, wickets: 89, average: 20.22, economy: 6.62 }
        },
        strengthsWeaknesses: {
            strengths: [
                'Unorthodox slinging action',
                'Pinpoint yorker accuracy',
                'Variations: slower ball, knuckle ball',
                'Mental toughness under pressure',
                'Consistent line and length'
            ],
            weaknesses: [
                'Workload management needed',
                'Occasional no-ball issues',
                'Can be expensive if yorker misses'
            ]
        },
        bowlingVariations: [
            {
                name: 'Yorker',
                description: 'Full-length delivery at stumps',
                effectiveness: 98,
                usage: '40%'
            },
            {
                name: 'Slower Ball',
                description: 'Change of pace delivery',
                effectiveness: 92,
                usage: '30%'
            },
            {
                name: 'Bouncer',
                description: 'Short-pitched delivery',
                effectiveness: 85,
                usage: '15%'
            },
            {
                name: 'Wide Yorker',
                description: 'Full outside off-stump',
                effectiveness: 90,
                usage: '15%'
            }
        ],
        bowlingMap: {
            lengths: [
                { type: 'Full', percentage: 45, economy: 4.2 },
                { type: 'Good Length', percentage: 30, economy: 5.1 },
                { type: 'Short', percentage: 15, economy: 6.8 },
                { type: 'Yorker', percentage: 10, economy: 3.5 }
            ],
            lines: [
                { type: 'Off Stump', percentage: 35, wickets: 45 },
                { type: 'Middle Stump', percentage: 40, wickets: 68 },
                { type: 'Leg Stump', percentage: 15, wickets: 22 },
                { type: 'Wide', percentage: 10, wickets: 14 }
            ]
        }
    },

    // ========== STRATEGIC ANALYSIS ==========
    {
        id: 'strategy001',
        title: 'Powerplay Tactics - Modern Approach',
        type: 'strategic-analysis',
        category: 'powerplay-tactics',
        subcategory: 'batting',
        format: 'T20',
        views: 340000,
        rating: 4.7,
        thumbnail: 'https://img.youtube.com/vi/PpAlxrr6Qu4/maxresdefault.jpg',
        videoId: 'PpAlxrr6Qu4',  // Full Analysis
        highlightVideoId: '5Mabv1GyPTE',  // Highlights
        duration: '4:03',
        featured: false,
        description: 'Complete breakdown of modern powerplay batting and bowling strategies in T20 cricket.',
        tags: ['Powerplay', 'T20', 'Strategy', 'Field Settings', 'Tactics'],
        strategicPoints: [
            {
                title: 'Attacking Philosophy',
                description: 'Modern teams target 50+ runs in powerplay',
                impact: 'High'
            },
            {
                title: 'Field Restrictions',
                description: 'Only 2 fielders outside 30-yard circle',
                impact: 'Critical'
            },
            {
                title: 'Matchup Strategy',
                description: 'Left-right batting combinations',
                impact: 'Medium'
            },
            {
                title: 'Bowling Changes',
                description: 'When to use pace vs spin',
                impact: 'High'
            }
        ],
        fieldSettings: [
            {
                phase: 'Overs 1-2',
                setting: 'Aggressive slip and gully',
                reason: 'Capitalize on new ball swing'
            },
            {
                phase: 'Overs 3-4',
                setting: 'One slip, covers pushed back',
                reason: 'Prevent boundary flow'
            },
            {
                phase: 'Overs 5-6',
                setting: 'All attacking fields removed',
                reason: 'Contain and build pressure'
            }
        ],
        dataInsights: {
            averageScore: 52,
            wicketsLost: 1.8,
            boundaryPercentage: 45,
            dotBallPercentage: 28
        }
    },
    {
        id: 'strategy002',
        title: 'Death Overs Mastery - Bowling',
        type: 'strategic-analysis',
        category: 'death-overs',
        subcategory: 'bowling',
        format: 'T20',
        views: 425000,
        rating: 4.8,
        thumbnail: 'https://img.youtube.com/vi/MpBSx9104WY/maxresdefault.jpg',
        videoId: 'dJeAPwt_Xw0',  // Full Analysis
        highlightVideoId: 'MpBSx9104WY',  // Highlights
        duration: '16:51',
        featured: true,
        description: 'Comprehensive analysis of death overs strategy from both batting and bowling perspectives.',
        tags: ['Death Overs', 'T20', 'Strategy', 'Saving Runs', 'Yorkers'],
        strategicPoints: [
            {
                title: 'Target Setting',
                description: 'Restrict runs per over',
                impact: 'Critical'
            },
            {
                title: 'Yorker Execution',
                description: 'Most effective death bowling weapon',
                impact: 'Critical'
            },
            {
                title: 'Field Placement',
                description: 'Saving boundaries vs saving singles',
                impact: 'High'
            },
            {
                title: 'Match Situation',
                description: 'Adapting to required run rate',
                impact: 'Critical'
            }
        ],
        bowlingApproach: [
            'Yorker as primary weapon',
            'Slower balls as variation',
            'Wide yorkers to limit scoring',
            'Change of pace to break rhythm',
            'Maintain calm under pressure'
        ]
    },

    // Add match003 with different video IDs
    {
        id: 'match003',
        title: 'Stokes\' Headingley Miracle - 2019 Ashes',
        type: 'match-analysis',
        category: 'turning-points',
        subcategory: 'test',
        match: 'England vs Australia, 2019',
        venue: 'Headingley, Leeds',
        date: 'August 25, 2019',
        format: 'Test',
        views: 380000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/k3WwMmfETb4/maxresdefault.jpg',
        videoId: 'wamtTEVFDiA',  // Full Analysis
        highlightVideoId: 'k3WwMmfETb4',  // Highlights
        duration: '20:40',
        featured: true,
        description: 'Ben Stokes\' unbeaten 135 in a seemingly impossible chase - one of Test cricket\'s greatest innings.',
        tags: ['Ben Stokes', 'Ashes', 'Test Cricket', 'Impossible Chase', 'England'],
        keyMoments: [
            { time: '04:20', title: 'Early Collapse', description: 'England 15/3, target 359', score: '15/3' },
            { time: '10:45', title: 'Stokes Digs In', description: 'Rebuilding with tail', score: '156/7' },
            { time: '15:10', title: 'The Partnership', description: 'Stokes and Leach partnership', score: '245/9' },
            { time: '20:30', title: 'Winning Runs', description: 'Match-winning boundary', score: '362/9' }
        ],
        analysis: {
            target: 359,
            stokesScore: '135*',
            ballsFaced: 219,
            fours: 11,
            sixes: 8,
            matchResult: 'England won by 1 wicket'
        },
        tacticalInsights: [
            'Stokes\' calculated risk-taking',
            'Partnership management with tail-enders',
            'Shot selection under pressure',
            'Mental fortitude in impossible situation',
            'Australia\'s bowling strategies'
        ]
    }
];

// Categories for filtering
const categories = [
    { id: 'all', name: 'All Analysis', icon: 'ri-apps-line' },
    { id: 'match-analysis', name: 'Match Analysis', icon: 'ri-trophy-line' },
    { id: 'player-analysis', name: 'Player Analysis', icon: 'ri-user-star-line' },
    { id: 'strategic-analysis', name: 'Strategic Analysis', icon: 'ri-focus-3-line' },
    { id: 'data-insights', name: 'Data Insights', icon: 'ri-bar-chart-box-line' }
];

const subcategories = {
    'match-analysis': [
        { id: 'famous-innings', name: 'Famous Innings' },
        { id: 'historic-matches', name: 'Historic Matches' },
        { id: 'world-cup', name: 'World Cup Moments' },
        { id: 'tactical-battles', name: 'Tactical Battles' },
        { id: 'turning-points', name: 'Turning Points' }
    ],
    'player-analysis': [
        { id: 'technique-breakdown', name: 'Technique Breakdown' },
        { id: 'shot-analysis', name: 'Shot Analysis' },
        { id: 'bowling-actions', name: 'Bowling Actions' },
        { id: 'career-evolution', name: 'Career Evolution' }
    ],
    'strategic-analysis': [
        { id: 'powerplay-tactics', name: 'Powerplay Tactics' },
        { id: 'middle-overs', name: 'Middle Overs Strategy' },
        { id: 'death-overs', name: 'Death Overs' },
        { id: 'spin-vs-pace', name: 'Spin vs Pace' },
        { id: 'pitch-reading', name: 'Pitch Reading' }
    ],
    'data-insights': [
        { id: 'heat-maps', name: 'Heat Maps' },
        { id: 'wagon-wheels', name: 'Wagon Wheels' },
        { id: 'bowling-maps', name: 'Bowling Maps' },
        { id: 'win-probability', name: 'Win Probability' },
        { id: 'statistical', name: 'Performance Metrics' }
    ]
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API Functions
export const getAllAnalysis = async () => {
    await delay(500);
    return analysisData;
};

export const getAnalysisById = async (id) => {
    await delay(300);
    return analysisData.find(a => a.id === id);
};

export const getCategories = async () => {
    await delay(200);
    return categories;
};

export const getSubcategories = async (categoryId) => {
    await delay(200);
    return subcategories[categoryId] || [];
};

export const getFeaturedAnalysis = async () => {
    await delay(300);
    return analysisData.filter(a => a.featured);
};

export const getAnalysisByType = async (type) => {
    await delay(300);
    return analysisData.filter(a => a.type === type);
};

export const searchAnalysis = async (query) => {
    await delay(400);
    return analysisData.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.description.toLowerCase().includes(query.toLowerCase()) ||
        (a.tags && a.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
    );
};

export const getRelatedAnalysis = async (analysisId, limit = 3) => {
    await delay(300);
    const analysis = analysisData.find(a => a.id === analysisId);
    if (!analysis) return [];

    return analysisData
        .filter(a =>
            a.id !== analysisId &&
            (a.type === analysis.type || a.category === analysis.category)
        )
        .slice(0, limit);
};