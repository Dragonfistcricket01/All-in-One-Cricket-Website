// Mock data for tutorials
const tutorials = [
    // ========== STEP-BY-STEP GUIDES ==========
    {
        id: 'guide001',
        title: 'Complete Beginner\'s Guide to Cricket',
        type: 'step-by-step',
        category: 'beginner',
        subcategory: 'getting-started',
        difficulty: 'beginner',
        duration: '7:06',
        instructor: 'Mary Mullan Christie',
        views: 125000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/hEbOL09ACww/maxresdefault.jpg',
        videoId: 'hEbOL09ACww',
        description: 'Everything you need to know to start playing cricket. From basic rules to your first match.',
        featured: true,
        topics: [
            'Understanding cricket rules',
            'Basic equipment needed',
            'Field positions explained',
            'Scoring system',
            'Types of cricket formats'
        ],
        steps: [
            {
                stepNumber: 1,
                title: 'Understanding the Basics',
                content: 'Cricket is played between two teams of 11 players. The objective is to score more runs than the opposition.',
                duration: '2:00',
                imageUrl: 'https://via.placeholder.com/800x450/1a1a2e/ff6300?text=Cricket+Basics'
            },
            {
                stepNumber: 2,
                title: 'Essential Equipment',
                content: 'Learn about bat, ball, stumps, and protective gear required to play cricket safely.',
                duration: '3:00',
                imageUrl: 'https://via.placeholder.com/800x450/1a1a2e/ff6300?text=Equipment'
            },
            {
                stepNumber: 3,
                title: 'Field Positions',
                content: 'Understand the 11 fielding positions and their strategic importance in the game.',
                duration: '6:00',
                imageUrl: 'https://via.placeholder.com/800x450/1a1a2e/ff6300?text=Field+Positions'
            },
            {
                stepNumber: 4,
                title: 'Scoring and Rules',
                content: 'Learn how runs are scored, different ways to get out, and match formats.',
                duration: '7:00',
                imageUrl: 'https://via.placeholder.com/800x450/1a1a2e/ff6300?text=Scoring'
            }
        ]
    },
    {
        id: 'guide002',
        title: 'Intermediate Batting Techniques',
        type: 'step-by-step',
        category: 'intermediate',
        subcategory: 'batting',
        difficulty: 'intermediate',
        duration: '16:13',
        instructor: 'CRICKET LIFE STORIES',
        views: 89000,
        rating: 4.8,
        thumbnail: 'https://img.youtube.com/vi/rp77LQBJgGY/maxresdefault.jpg',
        videoId: 'rp77LQBJgGY',
        description: 'Master intermediate batting techniques to elevate your game to the next level.',
        featured: true,
        topics: [
            'Footwork fundamentals',
            'Shot selection',
            'Playing spin bowling',
            'Building innings',
            'Running between wickets'
        ],
        steps: [
            {
                stepNumber: 1,
                title: 'Advanced Footwork',
                content: 'Moving your feet properly is crucial for playing shots effectively.',
                duration: '9:00'
            },
            {
                stepNumber: 2,
                title: 'Shot Selection',
                content: 'Learn when to attack and when to defend based on the ball and field.',
                duration: '12:00'
            },
            {
                stepNumber: 3,
                title: 'Playing Spin',
                content: 'Techniques for reading and playing different types of spin bowling.',
                duration: '15:00'
            }
        ]
    },

    // ========== VIDEO DEMONSTRATIONS ==========
    {
        id: 'video001',
        title: 'Slow Motion: Perfect Cover Drive',
        type: 'video-demo',
        category: 'technique-analysis',
        subcategory: 'slow-motion',
        difficulty: 'intermediate',
        duration: '0:17',
        instructor: 'Virat Kohli',
        views: 250000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/uU4BMmdCd_I/maxresdefault.jpg',
        videoId: 'uU4BMmdCd_I',
        description: 'Frame-by-frame breakdown of the perfect cover drive technique.',
        featured: true,
        topics: [
            'Backlift technique',
            'Front foot movement',
            'Follow through'
        ],
        analysisPoints: [
            { time: '0:05', label: 'Backlift', description: 'Straight back towards the stumps' },
            { time: '0:07', label: 'Front Foot', description: 'Towards the line of the ball' },
            { time: '0:10', label: 'Impact Point', description: 'Under the eyes, full extension' },
            { time: '0:15', label: 'Follow Through', description: 'High elbow finish' }
        ]
    },
    {
        id: 'video002',
        title: 'Multiple Angles: Fast Bowling Action',
        type: 'video-demo',
        category: 'technique-analysis',
        subcategory: 'multiple-angles',
        difficulty: 'advanced',
        duration: '1:00',
        instructor: 'Athleteworld',
        views: 180000,
        rating: 4.8,
        thumbnail: 'https://img.youtube.com/vi/Xfm__h2DwGE/maxresdefault.jpg',
        videoId: 'Xfm__h2DwGE',
        description: 'Analyze fast bowling action from front, side, and top camera angles.',
        featured: false,
        topics: [
            'Run-up rhythm',
            'Loading position',
            'Delivery stride',
            'Arm action',
            'Follow through'
        ],
        cameraAngles: ['Front View', 'Side View', 'Top View', 'Behind Bowler', 'Behind Stumps']
    },
    {
        id: 'video003',
        title: 'Before & After: Fixing Your Batting Stance',
        type: 'video-demo',
        category: 'technique-analysis',
        subcategory: 'before-after',
        difficulty: 'beginner',
        duration: '12:30',
        instructor: 'Toby Radford',
        views: 95000,
        rating: 4.7,
        thumbnail: 'https://img.youtube.com/vi/U7pI9fHQnzY&t=1039s/maxresdefault.jpg',
        videoId: 'U7pI9fHQnzY&t=1039s',
        description: 'Real player transformation showing common batting stance issues and corrections.',
        featured: false,
        topics: [
            'Common stance problems',
            'Fixing weight distribution',
            'Head position correction',
            'Grip adjustments',
            'Practice drills'
        ]
    },

    // ========== PRACTICE PLANS ==========
    {
        id: 'plan001',
        title: 'Cricket Batting Masterclass',
        type: 'practice-plan',
        category: 'advanced',
        subcategory: 'batting',
        difficulty: 'advanced',
        duration: '38:35',
        instructor: 'Kane Williamson',
        views: 145000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/MoUeNGJeIvA/maxresdefault.jpg',
        videoId: 'MoUeNGJeIvA',
        description: 'Learn batting with Expert.',
        featured: true,
        topics: [
            'Kane Williamson joins Dinesh Karthik, Stuart Broad and Ian Ward to give us his best batting tips and advice at Lord’s.'
        ]
    },
    {
        id: 'plan002',
        title: 'Solo Practice: Only bat and ball',
        type: 'practice-plan',
        category: 'solo-practice',
        subcategory: 'home-training',
        difficulty: 'all',
        duration: '6:12',
        instructor: 'Richard Hindley',
        views: 210000,
        rating: 4.8,
        thumbnail: 'https://img.youtube.com/vi/KhKhlJpjW10/maxresdefault.jpg',
        videoId: 'KhKhlJpjW10',
        description: 'Practice cricket skills at home without any special equipment except cricket bat and ball.',
        featured: true,
        topics: [
            'Shadow batting drills',
            'Footwork exercises',
            'Fitness routines',
            'Hand-eye coordination',
            'Mental preparation'
        ]
    },

    // ========== EQUIPMENT GUIDES ==========
    {
        id: 'equip001',
        title: 'Complete Bat Selection Guide 2025',
        type: 'equipment',
        category: 'buying-guide',
        subcategory: 'bat-selection',
        difficulty: 'all',
        duration: '4:51',
        instructor: 'Byron Fraser',
        views: 175000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/NoO0FZCArK0/maxresdefault.jpg',
        videoId: 'NoO0FZCArK0',
        description: 'Everything you need to know about choosing the perfect cricket bat.',
        featured: true,
        topics: [
            'Bat weight and size',
            'Willow types explained',
            'Handle types',
            'Sweet spot location',
            'Price vs quality'
        ],
        equipmentSpecs: {
            weights: ['2lb 7oz - 2lb 9oz (Juniors)', '2lb 8oz - 2lb 10oz (Adults)', '2lb 10oz+ (Power hitters)'],
            willowTypes: ['Kashmir Willow', 'English Willow Grade 4', 'English Willow Grade 3', 'English Willow Grade 1'],
            priceRanges: ['Budget: $50-$100', 'Mid-Range: $100-$250', 'Premium: $250-$500', 'Pro: $500+']
        }
    },
    {
        id: 'equip002',
        title: 'Protective Gear: Complete Safety Guide',
        type: 'equipment',
        category: 'buying-guide',
        subcategory: 'protective-gear',
        difficulty: 'all',
        duration: '2:01',
        instructor: 'SIKANA English',
        views: 98000,
        rating: 4.7,
        thumbnail: 'https://img.youtube.com/vi/ZOVDMmvKi2k/maxresdefault.jpg',
        videoId: 'ZOVDMmvKi2k',
        description: 'Essential protective equipment for safe cricket playing.',
        featured: false,
        topics: [
            'Helmet standards',
            'Pads selection',
            'Gloves fitting',
            'Abdominal guard',
            'Thigh guards and arm guards'
        ]
    },

    // Add more tutorials (total: 21-30 tutorials covering all categories) if time permitted
    {
        id: 'guide003',
        title: 'Advanced Spin Bowling Masterclass',
        type: 'step-by-step',
        category: 'advanced',
        subcategory: 'bowling',
        difficulty: 'advanced',
        duration: '20:09',
        instructor: 'Muttiah Muralitharan',
        views: 156000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/SiHR-YTocGM/maxresdefault.jpg',
        videoId: 'SiHR-YTocGM',
        description: 'Master the art of spin bowling with legendary techniques.',
        featured: true,
        topics: ['Leg spin', 'Off spin', 'Googly', 'Doosra', 'Flight and drift'],
        steps: [
            { stepNumber: 1, title: 'Grip Variations', content: 'Different grips for different deliveries', duration: '5:00' },
            { stepNumber: 2, title: 'Wrist Position', content: 'Critical wrist movements', duration: '13:00' },
            { stepNumber: 3, title: 'Flight Control', content: 'Mastering trajectory', duration: '18:00' }
        ]
    },
    {
        id: 'video004',
        title: 'Common Batting Mistakes to Avoid',
        type: 'video-demo',
        category: 'common-mistakes',
        subcategory: 'batting-errors',
        difficulty: 'intermediate',
        duration: '5:26',
        instructor: 'Byron Fraser',
        views: 205000,
        rating: 4.8,
        thumbnail: 'https://img.youtube.com/vi/6YxOx6g2ISg&t=1s/maxresdefault.jpg',
        videoId: '6YxOx6g2ISg&t=1s',
        description: 'Identify and fix the most common batting mistakes.',
        featured: false,
        topics: ['Head falling over', 'Playing away from body', 'Poor footwork', 'Wrong shot selection', 'Grip issues']
    },
    {
        id: 'plan003',
        title: 'Weekly Net Session Structure',
        type: 'practice-plan',
        category: 'net-sessions',
        subcategory: 'group-practice',
        difficulty: 'intermediate',
        duration: '3:42',
        instructor: 'Dhruv',
        views: 112000,
        rating: 4.7,
        thumbnail: 'https://img.youtube.com/vi/8fMTNio8_ck/maxresdefault.jpg',
        videoId: '8fMTNio8_ck',
        description: 'Optimize your weekly net practice sessions for maximum improvement.',
        featured: false,
        topics: ['Warm-up routine', 'Batting drills', 'Bowling practice', 'Fielding exercises', 'Match simulation']
    },
    {
        id: 'equip003',
        title: 'Cricket Shoe Selection Guide',
        type: 'equipment',
        category: 'buying-guide',
        subcategory: 'footwear',
        difficulty: 'all',
        duration: '12:51',
        instructor: 'Richard Hindley and Neil',
        views: 76000,
        rating: 4.6,
        thumbnail: 'https://img.youtube.com/vi/wJ1N8FnwWSQ/maxresdefault.jpg',
        videoId: 'wJ1N8FnwWSQ',
        description: 'Choose the right cricket shoes for your playing style and surface.',
        featured: false,
        topics: ['Spikes vs rubber', 'Batting shoes', 'Bowling shoes', 'All-rounder shoes', 'Fitting guide']
    },
    {
        id: 'plan004',
        title: 'Match Day Preparation Routine',
        type: 'practice-plan',
        category: 'match-simulation',
        subcategory: 'game-day',
        difficulty: 'advanced',
        duration: '16:28',
        instructor: 'Steve Waugh and Ricky Ponting',
        views: 198000,
        rating: 4.9,
        thumbnail: 'https://img.youtube.com/vi/8exBx2a-4X0/maxresdefault.jpg',
        videoId: '8exBx2a-4X0',
        description: 'Complete pre-match preparation routine used by professionals.',
        featured: true,
        topics: ['Mental preparation', 'Physical warm-up', 'Practice drills', 'Nutrition timing', 'Equipment check']
    }
];

// Categories for filtering
const categories = [
    { id: 'all', name: 'All Tutorials', icon: 'ri-apps-line' },
    { id: 'step-by-step', name: 'Step-by-Step Guides', icon: 'ri-list-ordered' },
    { id: 'video-demo', name: 'Video Demonstrations', icon: 'ri-vidicon-line' },
    { id: 'practice-plan', name: 'Practice Plans', icon: 'ri-calendar-check-line' },
    { id: 'equipment', name: 'Equipment Guides', icon: 'ri-tools-line' }
];

const subcategories = {
    'step-by-step': [
        { id: 'getting-started', name: 'Getting Started' },
        { id: 'batting', name: 'Batting Skills' },
        { id: 'bowling', name: 'Bowling Skills' },
        { id: 'fielding', name: 'Fielding Skills' }
    ],
    'video-demo': [
        { id: 'slow-motion', name: 'Slow Motion Analysis' },
        { id: 'multiple-angles', name: 'Multiple Angles' },
        { id: 'before-after', name: 'Before & After' },
        { id: 'common-mistakes', name: 'Common Mistakes' }
    ],
    'practice-plan': [
        { id: 'daily-routine', name: 'Daily Routines' },
        { id: 'solo-practice', name: 'Solo Practice' },
        { id: 'net-sessions', name: 'Net Sessions' },
        { id: 'match-simulation', name: 'Match Simulation' }
    ],
    'equipment': [
        { id: 'bat-selection', name: 'Bat Selection' },
        { id: 'protective-gear', name: 'Protective Gear' },
        { id: 'footwear', name: 'Footwear' },
        { id: 'maintenance', name: 'Maintenance' }
    ]
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API Functions
export const getAllTutorials = async () => {
    await delay(500);
    return tutorials;
};

export const getTutorialById = async (id) => {
    await delay(300);
    return tutorials.find(t => t.id === id);
};

export const getCategories = async () => {
    await delay(200);
    return categories;
};

export const getSubcategories = async (categoryId) => {
    await delay(200);
    return subcategories[categoryId] || [];
};

export const getFeaturedTutorials = async () => {
    await delay(300);
    return tutorials.filter(t => t.featured);
};

export const getTutorialsByType = async (type) => {
    await delay(300);
    return tutorials.filter(t => t.type === type);
};

export const searchTutorials = async (query) => {
    await delay(400);
    return tutorials.filter(t =>
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.description.toLowerCase().includes(query.toLowerCase()) ||
        t.instructor.toLowerCase().includes(query.toLowerCase()) ||
        t.topics.some(topic => topic.toLowerCase().includes(query.toLowerCase()))
    );
};

export const getRelatedTutorials = async (tutorialId, limit = 3) => {
    await delay(300);
    const tutorial = tutorials.find(t => t.id === tutorialId);
    if (!tutorial) return [];

    // Get tutorials from same category, excluding current one
    return tutorials
        .filter(t =>
            t.id !== tutorialId &&
            (t.type === tutorial.type || t.category === tutorial.category)
        )
        .slice(0, limit);
};