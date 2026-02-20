import defaultImage from '../assets/player_profile/default.png';

export const contentCategories = [
    { id: 'article', name: 'Article', icon: '📝', description: 'Write detailed cricket articles' },
    { id: 'match-review', name: 'Match Review', icon: '🏏', description: 'Review recent matches' },
    { id: 'player-analysis', name: 'Player Analysis', icon: '👤', description: 'Analyze player performance' },
    { id: 'prediction', name: 'Prediction', icon: '💡', description: 'Predict match outcomes' },
    { id: 'opinion', name: 'Opinion', icon: '💭', description: 'Share your cricket opinions' },
    { id: 'news', name: 'News', icon: '📰', description: 'Share cricket news' }
];

export const tags = [
    'Test Cricket', 'ODI', 'T20', 'BPL', 'BBL', 'PSL', 'The Hundred', 'World Cup', 'Ashes',
    'Batting', 'Bowling', 'Fielding', 'Strategy', 'Records',
    'India', 'Australia', 'England', 'Pakistan', 'South Africa', 'Bangladesh', 'Afghanistan', 'New Zealand', 'Sri Lanka', 'West Indies'
];

export const initialContent = [
    {
        id: 1,
        title: 'The Rise of T20 Cricket: A Revolution in the Sport',
        category: 'article',
        content: `T20 cricket has completely transformed the landscape of international cricket. What started as a format for entertainment has now become the most popular version of the game globally.

The Indian Premier League (IPL) revolutionized cricket by combining sports with entertainment. Players from around the world compete together, creating a unique spectacle that attracts millions of viewers.

The format has also changed how players approach the game. Aggressive batting, innovative shots, and tactical bowling have become the norm. Young players now grow up watching T20 cricket, which influences their playing style even in longer formats.

However, some purists argue that T20 has negatively impacted Test cricket. The debate continues, but one thing is certain - T20 cricket is here to stay and will continue to shape the future of the sport.`,
        author: 'CricketAnalyst_Pro',
        authorAvatar: '👨‍💼',
        tags: ['T20', 'BPL', 'Opinion'],
        thumbnail: defaultImage,
        likes: 1234,
        likedBy: [],
        views: 5678,
        comments: [],
        status: 'published',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        readTime: '5 min read'
    },
    {
        id: 2,
        title: 'Virat Kohli vs Steve Smith: Statistical Comparison',
        category: 'player-analysis',
        content: `Two of the greatest batsmen of this generation, Virat Kohli and Steve Smith have dominated world cricket for over a decade.

**Test Match Statistics:**
Virat Kohli - Average: 49.15, Centuries: 29
Steve Smith - Average: 56.97, Centuries: 32

**ODI Statistics:**
Virat Kohli - Average: 58.18, Centuries: 50
Steve Smith - Average: 43.34, Centuries: 12

While Smith dominates in Test cricket with his unique technique, Kohli reigns supreme in ODIs with remarkable consistency. Both players have different strengths but equal impact on their teams.`,
        author: 'StatsGuru_99',
        authorAvatar: '📊',
        tags: ['Player Analysis', 'India', 'Australia'],
        thumbnail: defaultImage,
        likes: 892,
        likedBy: [],
        views: 3421,
        comments: [],
        status: 'published',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        readTime: '4 min read'
    },
    {
        id: 3,
        title: 'BPL 2025: Top Players to Watch',
        category: 'news',
        content: `The Bangladesh Premier League (BPL) 2025 season is set to showcase some of the world's finest T20 talent.

From explosive batsmen to cunning spinners, this season promises to be one of the most exciting yet. Local stars like Shakib Al Hasan and Mushfiqur Rahim will be joined by international superstars.

Key players to watch include franchise captains who will lead their teams through the intense tournament. The competition for the Orange and Purple caps will be fierce.

With improved pitches and upgraded facilities, BPL 2025 is expected to set new standards for cricket in Bangladesh.`,
        author: 'BPL_Insider',
        authorAvatar: '🎯',
        tags: ['BPL', 'T20', 'Bangladesh', 'News'],
        thumbnail: defaultImage,
        likes: 567,
        likedBy: [],
        views: 2103,
        comments: [],
        status: 'published',
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        readTime: '3 min read'
    }
];

export { defaultImage };