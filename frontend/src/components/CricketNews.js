import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CricketNews = () => {
    const [selectedNews, setSelectedNews] = useState(null);
    const [filterCategory, setFilterCategory] = useState('All');
    const [newsArticles, setNewsArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('latest');

    useEffect(() => {
        fetchRSSNews();
    }, []);

    const fetchRSSNews = async () => {
        setLoading(true);
        try {
            const feeds = [
                'http://newsrss.bbc.co.uk/rss/sportonline_uk_edition/cricket/rss.xml',
                'https://www.espncricinfo.com/rss/content/story/feeds/0.xml',
                //'https://static.cricinfo.com/rss/livescores.xml'   <-- This one is the score. dont forget to switch to live fixture or something
            ];

            let allNews = [];
            const MAX_ARTICLES = 108;

            for (const feedUrl of feeds) {
                if (allNews.length >= MAX_ARTICLES) break;

                try {
                    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
                    const response = await fetch(proxyUrl);
                    const data = await response.json();

                    const parser = new DOMParser();
                    const xml = parser.parseFromString(data.contents, 'text/xml');
                    const items = xml.querySelectorAll('item');

                    let feedArticleCount = 0;

                    items.forEach((item, index) => {
                        if (feedArticleCount >= 36 || allNews.length >= MAX_ARTICLES) return;

                        const title = item.querySelector('title')?.textContent || 'No Title';
                        const description = item.querySelector('description')?.textContent || '';
                        const link = item.querySelector('link')?.textContent || '';
                        const pubDate = item.querySelector('pubDate')?.textContent || new Date().toISOString();
                        const creator = item.querySelector('creator')?.textContent || 'Cricket Correspondent';

                        const titleLower = title.toLowerCase();
                        const descLower = description.toLowerCase();

                        // 🚫 FILTER OUT WOMEN'S CRICKET
                        if (titleLower.includes('women') || titleLower.includes("women's")) {
                            return;
                        }

                        // Extract image
                        let imageUrl = 'https://i.ibb.co.com/1J4XqmGm/Image-Not-Found.png';
                        const mediaContent = item.querySelector('content, media\\:content, enclosure');
                        if (mediaContent) {
                            imageUrl = mediaContent.getAttribute('url') || imageUrl;
                        }

                        // AWARDS CHECKED FIRST!
                        let category = 'Cricket News';

                        // 🏆 CHECK AWARDS FIRST (before Player News!)
                        if (
                            titleLower.includes('award') || titleLower.includes('honour') ||
                            titleLower.includes('honor') ||
                            titleLower.includes('player of the month') ||
                            titleLower.includes('player of the year') ||
                            titleLower.includes('cricketer of the year') ||
                            titleLower.includes('cricketer of the month') ||
                            titleLower.includes('ranking') ||
                            titleLower.includes('icc player') ||
                            titleLower.includes('trophy') && titleLower.includes('win') ||
                            titleLower.includes('medal') ||
                            titleLower.includes('prize') ||
                            titleLower.includes('accolade')
                        ) {
                            category = 'Awards';
                        }
                        // 👤 Player News (checked AFTER Awards!)
                        else if (
                            // Specific player names
                            titleLower.includes('kohli') || titleLower.includes('rohit') ||
                            titleLower.includes('dhoni') || titleLower.includes('bumrah') ||
                            titleLower.includes('cummins') || titleLower.includes('smith') ||
                            titleLower.includes('williamson') || titleLower.includes('root') ||
                            titleLower.includes('babar') || titleLower.includes('stokes') ||
                            // Generic player keywords (but NOT awards!)
                            titleLower.includes('batsman') ||
                            titleLower.includes('batter') || titleLower.includes('bowler') ||
                            titleLower.includes('captain') || titleLower.includes('debut') ||
                            // Player status keywords
                            titleLower.includes('injury') || titleLower.includes('injured') ||
                            titleLower.includes('fitness') || titleLower.includes('update on') ||
                            titleLower.includes('return') || titleLower.includes('comeback') ||
                            titleLower.includes('ruled out') || titleLower.includes('doubtful') ||
                            titleLower.includes('available') || titleLower.includes('milestone') ||
                            titleLower.includes('record') || titleLower.includes('achievement')
                        ) {
                            category = 'Player News';
                        }
                        // Team News
                        else if (
                            titleLower.includes('squad') || titleLower.includes('selection') ||
                            titleLower.includes('announce') || titleLower.includes('call-up') ||
                            (titleLower.includes('team') && !titleLower.includes('vs'))
                        ) {
                            category = 'Team News';
                        }
                        // Tournament News
                        else if (
                            titleLower.includes('world cup') || titleLower.includes('worldcup') ||
                            titleLower.includes('championship') && !titleLower.includes('player of') ||
                            (titleLower.includes('tournament') && !titleLower.includes('vs'))
                        ) {
                            category = 'Tournament';
                        }
                        // League News
                        else if (
                            titleLower.includes('ipl') || titleLower.includes('bpl') ||
                            titleLower.includes('psl') || titleLower.includes('cpl') ||
                            titleLower.includes('bbl') || titleLower.includes('league')
                        ) {
                            category = 'League';
                        }
                        // Match Reports (check this LAST!)
                        else if (
                            // Actual match indicators
                            titleLower.includes(' vs ') || titleLower.includes(' v ') ||
                            titleLower.includes('innings') || titleLower.includes('wicket') ||
                            titleLower.includes('century') || titleLower.includes('win') ||
                            titleLower.includes('beat') || titleLower.includes('defeat') ||
                            titleLower.includes('scores') || titleLower.includes('chase') ||
                            titleLower.includes('bowled out') || titleLower.includes('declare') ||
                            // Match formats (only if describing actual match)
                            (titleLower.includes('odi') && (titleLower.includes('vs') || titleLower.includes('win'))) ||
                            (titleLower.includes('t20') && (titleLower.includes('vs') || titleLower.includes('win'))) ||
                            (titleLower.includes('test') && (titleLower.includes('vs') || titleLower.includes('win') || titleLower.includes('day')))
                        ) {
                            category = 'Match Report';
                        }

                        const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 200);

                        allNews.push({
                            id: `${feedUrl}-${index}`,
                            title: title,
                            summary: cleanDescription || 'Read the full article for more details.',
                            category: category,
                            date: pubDate,
                            author: creator,
                            image: imageUrl,
                            content: cleanDescription || 'Click the link below to read the full article.',
                            link: link
                        });

                        feedArticleCount++;
                    });
                } catch (error) {
                    console.error(`Error fetching feed ${feedUrl}:`, error);
                }
            }

            if (allNews.length === 0) {
                allNews = getFallbackNews();
            }

            // SORT ALL NEWS BY DATE!
            allNews.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
            });

            setNewsArticles(allNews);
        } catch (error) {
            console.error('Error fetching RSS feeds:', error);
            setNewsArticles(getFallbackNews());
        } finally {
            setLoading(false);
        }
    };

    const getFallbackNews = () => {
        return [
            {
                id: 1,
                title: 'Shakib, Mahmudullah stun New Zealand',
                summary: 'A magnificent batting display under extreme pressure from Shakib Al Hasan and Mahmudullah gave Bangladesh a famous win against New Zealand in a thrilling Group B match of the ICC Champions Trophy 2017, keeping their team alive in the tournament while New Zealand was knocked out.',
                category: 'Match Report',
                date: '2017-06-09',
                author: 'ICC Staff',
                image: '/resource/shakib-mahmudullah vs NZ.jpg',
                content: 'The five-wicket win on Friday at Cardiff Wales Stadium meant that the whole of Bangladesh would be praying for England, the tournament favourite, to beat the old enemies Australia on Saturday, which will put Bangladesh in the semi-finals of the tournament, the furthest it would have ever gone in an ICC event.',
                link: 'https://www.icc-cricket.com/news/shakib-mahmudullah-stun-new-zealand'
            },
            {
                id: 2,
                title: 'Virat Kohli Reaches 50 ODI Centuries Milestone',
                summary: 'India batsman becomes the first to score 50 ODI hundreds, and also breaks Tendulkar\'s record for most runs in a World Cup',
                category: 'Player News',
                date: '2023-11-15',
                author: 'ICC Staff',
                image: '/resource/VK18 50th centuries.jpg',
                content: 'Kohli\’s 117 against the Black Caps was his 50th ODI century, surpassing Sachin Tendulkar\’s record in the format at the home ground of the Indian legend.',
                link: 'https://www.icc-cricket.com/tournaments/cricketworldcup/news/how-virat-kohlis-world-cup-excellence-broke-sachin-tendulkars-odi-record'
            },
            {
                id: 3,
                title: 'Jasprit Bumrah Named ICC Cricketer of the Year',
                summary: 'India\'s pace spearhead Jasprit Bumrah has been awarded the prestigious Sir Garfield Sobers Trophy for ICC Men\'s Cricketer of the Year.',
                category: 'Awards',
                date: '2025-01-28',
                author: 'ICC Staff',
                image: '/resource/JB93.jpg',
                content: 'ICC AWARDS 2024: Bumrah crowned ICC Men\’s Cricketer of the Year',
                link: 'https://www.icc-cricket.com/media-releases/icc-awards-2024-bumrah-crowned-icc-men-s-cricketer-of-the-year'
            },
            {
                id: 4,
                title: 'Cricket Enters New Era With Launch Of Test Twenty, The Fourth Format',
                summary: 'AB de Villiers, Sir Clive Lloyd, Matthew Hayden and Harbhajan Singh hail Test Twenty as cricket\’s defining evolution',
                category: 'League',
                date: '2025-10-17',
                author: 'ETV Bharat Sports Team',
                image: '/resource/test-twenty.jpeg',
                content: 'Cricket welcomes its boldest evolution yet with the unveiling of Test Twenty, a revolutionary 80-over format that fuses the strategic depth of Test cricket with the thrill of T20.',
                link: 'https://www.etvbharat.com/en/sports/cricket-enters-new-era-with-launch-of-test-twenty-the-fourth-format-enn25101706308'
            },
            {
                id: 5,
                title: 'Men\’s Asia Cup in UAE from September 9 to 28',
                summary: 'The men\'s Asia Cup 2025 will be held from September 9 to 28 in the UAE.India and Pakistan will compete at neutral venues until 2027 due to cross- border tensions.The tournament will follow a T20 format, aligning with the upcoming ICC T20 World Cup.',
                category: 'Team News',
                date: '2025-07-27',
                author: 'India TodayNe',
                image: '/resource/asia-cup-2025.jpeg',
                content: 'The men\'s Asia Cup will be held in the United Arab Emirates(UAE) from September 9 to 28, Asian Cricket Council chairman Mohsin Naqvi announced on July 26.',
                link: 'https://www.indiatodayne.in/sport/story/asia-cup-2025-uae-india-pakistan-neutral-venue-t20-1251024-2025-07-26'
            },
            {
                id: 6,
                title: 'Rashid Khan Becomes Fastest to 500 T20 Wickets',
                summary: 'Afghanistan leg-spinner Rashid Khan has set a new world record by becoming the fastest bowler to claim 500 wickets in T20 cricket.',
                category: 'Player News',
                date: '2023-01-24',
                author: 'Anmol Sharma',
                image: '/resource/rashid-khan_19.jpg',
                content: 'Rashid Khan has achieved yet another milestone in his illustrious T20 career by becoming the fastest bowler to reach 500 wickets in the format.',
                link: 'https://www.crictracker.com/twitter-reactions-cricket/sa20-rashid-khans-magnificent-milestone-gets-eclipsed-as-pretoria-capitals-humble-mi-cape-town/?amp=1&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts'
            },
            {
                id: 7,
                title: 'Bangladesh Premier League Announces New Franchise',
                summary: 'Ten franchises show interest in joining next BPL season',
                category: 'League',
                date: '2025-10-29',
                author: 'Khan Mutasim Billah Life',
                image: '/resource/BPLT20.jpg',
                content: 'A total of ten franchises have shown interest in taking part in the upcoming season of the Bangladesh Premier League (BPL). While a few familiar names have re-entered the scene, most of the interested parties are new to the tournament\’s franchise lineup.',
                link: 'https://bdcrictime.com/ten-franchises-show-interest-in-joining-next-bpl-season'
            },
            {
                id: 8,
                title: 'Pakistan Announces New Coach for Test Series',
                summary: 'Pakistan name Azhar Mahmood as latest red-ball head coach',
                category: 'Team News',
                date: '2025-06-30',
                author: 'AFP, Karachi',
                image: '/resource/azhar_mahmood_1.jpg',
                content: 'The Pakistan Cricket Board has made a significant announcement regarding their coaching staff for the upcoming Test series.',
                link: 'https://www.thedailystar.net/sports/cricket/news/pakistan-name-azhar-mahmood-latest-red-ball-head-coach-3929146'
            },
            {
                id: 9,
                title: 'Favourites Dhaka win second BPL title',
                summary: 'Mosharraf Hossain, Anamul Haque and Alfonso Thomas helped Dhaka Gladiators to a second consecutive BPL title with a 43-run win over Chittagong Kings',
                category: 'League',
                date: '2013-02-19',
                author: 'Mohammad Isam',
                image: '/resource/dhaka-win.jpg',
                content: 'A mix of the unheralded, the young and a Twenty20 stalwart in Mosharraf Hossain, Anamul Haque and Alfonso Thomas helped Dhaka Gladiators to a second consecutive BPL title with a 43-run win over Chittagong Kings.',
                link: 'https://www.espncricinfo.com/series/bangladesh-premier-league-2012-13-586487/dhaka-gladiators-vs-chittagong-kings-final-599910/match-report'
            }
        ];
    };

    const categories = ['All', 'Match Report', 'Player News', 'Tournament', 'Awards', 'League', 'Team News', 'Cricket News'];

    //  Apply both category filter AND date sorting
    const filteredAndSortedNews = React.useMemo(() => {
        // First, filter by category
        let filtered = filterCategory === 'All'
            ? newsArticles
            : newsArticles.filter(news => news.category === filterCategory);

        // Then, sort by date based on sortOrder
        return filtered.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (sortOrder === 'latest') {
                return dateB - dateA; // Newest first
            } else {
                return dateA - dateB; // Oldest first
            }
        });
    }, [newsArticles, filterCategory, sortOrder]);

    const getCategoryColor = (category) => {
        const colors = {
            'Match Report': '#ef4444',
            'Player News': '#3b82f6',
            'Tournament': '#8b5cf6',
            'Awards': '#f59e0b',
            'League': '#10b981',
            'Team News': '#06b6d4',
            'Cricket News': '#667eea'
        };
        return colors[category] || '#667eea';
    };

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 1rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Link to="/dashboard" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ff7800',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                }}>
                    ← Back to Dashboard
                </Link>

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        color: 'var(--text-primary)',
                        fontWeight: '700'
                    }}>
                        📰 Cricket News
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        {loading ? 'Fetching latest cricket news...' : `Showing ${newsArticles.length} latest men's cricket articles`}
                    </p>
                </div>

                {loading && (
                    <div style={{ textAlign: 'center', padding: '3rem' }}>
                        <div style={{
                            display: 'inline-block',
                            width: '50px',
                            height: '50px',
                            border: '5px solid rgba(102, 126, 234, 0.3)',
                            borderTop: '5px solid #667eea',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                            Loading real cricket news...
                        </p>
                        <style>{`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}</style>
                    </div>
                )}

                {!loading && (
                    <>
                        {/* ✅ NEW: SORT BUTTONS */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            <button
                                onClick={() => setSortOrder('latest')}
                                style={{
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '25px',
                                    border: 'none',
                                    background: sortOrder === 'latest'
                                        ? 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
                                        : 'var(--card-bg)',
                                    color: sortOrder === 'latest' ? 'white' : 'var(--text-primary)',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: sortOrder === 'latest'
                                        ? '0 4px 15px rgba(255, 120, 0, 0.4)'
                                        : '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                    if (sortOrder !== 'latest') {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (sortOrder !== 'latest') {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                                    }
                                }}
                            >
                                Latest
                            </button>

                            <button
                                onClick={() => setSortOrder('oldest')}
                                style={{
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '25px',
                                    border: 'none',
                                    background: sortOrder === 'oldest'
                                        ? 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
                                        : 'var(--card-bg)',
                                    color: sortOrder === 'oldest' ? 'white' : 'var(--text-primary)',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: sortOrder === 'oldest'
                                        ? '0 4px 15px rgba(255, 120, 0, 0.4)'
                                        : '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                    if (sortOrder !== 'oldest') {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (sortOrder !== 'oldest') {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                                    }
                                }}
                            >
                                Oldest
                            </button>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.8rem',
                            marginBottom: '3rem',
                            flexWrap: 'wrap',
                            padding: '0 1rem'
                        }}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setFilterCategory(category)}
                                    style={{
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '20px',
                                        border: 'none',
                                        background: filterCategory === category
                                            ? 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
                                            : 'var(--card-bg)',
                                        color: filterCategory === category ? 'white' : 'var(--text-primary)',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: filterCategory === category
                                            ? '0 4px 15px rgba(255, 120, 0, 0.4)'
                                            : '0 2px 8px rgba(0, 0, 0, 0.1)'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (filterCategory !== category) {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (filterCategory !== category) {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                                        }
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                            gap: '2rem',
                            marginBottom: '3rem'
                        }}>
                            {/* Use filteredAndSortedNews instead of filteredNews */}
                            {filteredAndSortedNews.map((news) => (
                                <div
                                    key={news.id}
                                    onClick={() => setSelectedNews(news)}
                                    style={{
                                        background: 'var(--card-bg)',
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
                                        e.currentTarget.style.borderColor = '#ff7800';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = 'transparent';
                                    }}
                                >
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#1a1a1a' }}>
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/800x450/1a1a1a/ffffff?text=Cricket+News';
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '15px',
                                            left: '15px',
                                            background: getCategoryColor(news.category),
                                            color: 'white',
                                            padding: '0.4rem 0.9rem',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            fontWeight: '700',
                                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                                        }}>
                                            {news.category}
                                        </div>
                                    </div>

                                    <div style={{ padding: '1.5rem' }}>
                                        <div style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            marginBottom: '1rem',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            <span>📅 {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            <span>✍️ {news.author}</span>
                                        </div>

                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            marginBottom: '0.8rem',
                                            color: 'var(--text-primary)',
                                            fontWeight: '700',
                                            lineHeight: '1.4'
                                        }}>
                                            {news.title}
                                        </h3>

                                        <p style={{
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6',
                                            color: 'var(--text-secondary)',
                                            marginBottom: '1rem'
                                        }}>
                                            {news.summary}
                                        </p>

                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: '#ff7800',
                                            fontSize: '0.95rem',
                                            fontWeight: '600'
                                        }}>
                                            Read Full Story →
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                            padding: '2rem',
                            borderRadius: '15px',
                            color: 'white',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>
                                🏏 Real-Time Cricket News
                            </h3>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.95 }}>
                                Showing {newsArticles.length} latest articles from multiple cricket sources!
                            </p>
                        </div>
                    </>
                )}

                {selectedNews && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            padding: '2rem',
                            overflow: 'hidden'
                        }}
                        onClick={() => setSelectedNews(null)}
                    >
                        <div
                            style={{
                                maxWidth: '900px',
                                maxHeight: '90vh',
                                width: '100%',
                                background: 'var(--card-bg)',
                                borderRadius: '15px',
                                overflow: 'auto',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                                position: 'relative'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedNews(null)}
                                style={{
                                    position: 'sticky',
                                    top: '20px',
                                    left: 'calc(100% - 65px)',
                                    background: '#ff7800',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '45px',
                                    height: '45px',
                                    fontSize: '1.8rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    zIndex: 10,
                                    boxShadow: '0 4px 15px rgba(255, 120, 0, 0.4)',
                                    marginBottom: '-45px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#ff9500';
                                    e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#ff7800';
                                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                                }}
                            >
                                ×
                            </button>

                            <img
                                src={selectedNews.image}
                                alt={selectedNews.title}
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'cover'
                                }}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/900x400/1a1a1a/ffffff?text=Cricket+News';
                                }}
                            />

                            <div style={{ padding: '2.5rem' }}>
                                <div style={{
                                    display: 'inline-block',
                                    background: getCategoryColor(selectedNews.category),
                                    color: 'white',
                                    padding: '0.5rem 1.2rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    marginBottom: '1rem'
                                }}>
                                    {selectedNews.category}
                                </div>

                                <h1 style={{
                                    fontSize: '2.2rem',
                                    marginBottom: '1rem',
                                    color: 'var(--text-primary)',
                                    fontWeight: '700',
                                    lineHeight: '1.3'
                                }}>
                                    {selectedNews.title}
                                </h1>

                                <p style={{
                                    fontSize: '1.05rem',
                                    lineHeight: '1.9',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1.5rem'
                                }}>
                                    {selectedNews.content}
                                </p>

                                {selectedNews.link && (

                                <a href = { selectedNews.link }
                                        target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '0.8rem 2rem',
                                    background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                                    color: 'white',
                                    borderRadius: '25px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(255, 120, 0, 0.4)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 120, 0, 0.6)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 120, 0, 0.4)';
                                }}
                                    >
                                📖 Read Full Article on Source Website
                            </a>
                                )}
                        </div>
                    </div>
                    </div>
                )}
        </div>
        </div >
    );
};

export default CricketNews;