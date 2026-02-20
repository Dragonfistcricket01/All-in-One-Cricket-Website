import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import images
import img_1550 from '../assets/history/1550.jpg';
import img_1709 from '../assets/history/1709.jpg';
import img_1744 from '../assets/history/1744.jpg';
import img_1787 from '../assets/history/1787.jpg';
import img_1806 from '../assets/history/1806.jpeg';
import img_1844 from '../assets/history/1844.jpeg';
import img_1877 from '../assets/history/1877.jpeg';
import img_1882 from '../assets/history/1882.jpg';
import img_1909 from '../assets/history/1909.png';
import img_1928_1932 from '../assets/history/1928-1932.jpg';
import img_1963 from '../assets/history/1963.jpg';
import img_1971 from '../assets/history/1971.png';
import img_1975 from '../assets/history/1975.jpg';
import img_1977 from '../assets/history/1977.jpg';
import img_1980 from '../assets/history/1980.jpeg';
import img_1992 from '../assets/history/1992.jpg';
import img_2001_2005 from '../assets/history/2001-2005.jpg';
import img_2003 from '../assets/history/2003.jpg';
import img_2007 from '../assets/history/2007.jpg';
import img_2012 from '../assets/history/2012.jpg';
import img_2010 from '../assets/history/2010.jpeg';
import img_2017 from '../assets/history/2017.jpg';
import img_2019 from '../assets/history/2019.jpg';
import img_2020 from '../assets/history/2020.png';
import img_2025 from '../assets/history/2025.jpg';
import img_bat from '../assets/history/Historical_cricket_bat.jpg';

const HistoryOfCricket = () => {
    // ✅ STATE MANAGEMENT
    const [scrollProgress, setScrollProgress] = useState(0);
    const [currentYear, setCurrentYear] = useState('1550s');
    const [lightboxImage, setLightboxImage] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [visibleItems, setVisibleItems] = useState(new Set());

    const timelineRef = useRef(null);
    const itemRefs = useRef([]);

    const timeline = [
        {
            year: '1550s',
            title: 'Origins of Cricket',
            description: 'The earliest definite reference to cricket dates back to around 1550, in Guildford, England. It is believed that the game was invented by children in southeast England, especially in the counties of Kent, Sussex, and Surrey. They used a crooked stick as a bat, a wool or rags ball, and tree stumps or sheep pens as wickets.',
            side: 'left',
            image: img_1550
        },
        {
            year: '1709',
            title: 'First Recorded County Match',
            description: 'The first known inter-county match was played in 1709 between Kent and Surrey. By this time, cricket had spread widely in southern England, and betting became a major part of the sport, attracting large crowds and money.',
            side: 'right',
            image: img_1709
        },
        {
            year: '1744',
            title: 'First Laws of Cricket',
            description: 'The first known version of the Laws of Cricket was drawn up by members of London Cricket Club. These laws established many of the game\'s basic rules which is now the foundation of the modern game.',
            side: 'left',
            image: img_1744
        },
        {
            year: '1787',
            title: 'Formation of MCC',
            description: 'The Marylebone Cricket Club (MCC) was founded. It became the guardian of the Laws of Cricket, standardizing the rules worldwide and promoting organized competition and remained so until 1993 when the International Cricket Council took over.',
            side: 'right',
            image: img_1787
        },
        {
            year: '1806',
            title: 'Gentlemen vs Players',
            description: 'The first Gentlemen vs Players match took place in 1806, marking the start of a famous amateur vs professional rivalry in England. Gentlemen were amateurs (usually wealthy men), while Players were professionals (working-class cricketers).',
            side: 'left',
            image: img_1806
        },
        {
            year: '1844',
            title: 'First International Match',
            description: 'The first international cricket match was played between Canada and the United States in New York. This marked the beginning of international cricket.',
            side: 'right',
            image: img_1844
        },
        {
            year: '1877',
            title: 'First Test Match',
            description: 'The first-ever official Test match took place in March 1877 between England and Australia at the Melbourne Cricket Ground (MCG). Australia won by 45 runs. This marked the beginning of Test cricket, now considered the purest form of the game.',
            side: 'left',
            image: img_1877
        },
        {
            year: '1882',
            title: 'Birth of The Ashes Cricket',
            description: 'In 1882, England lost to Australia at The Oval, and a satirical newspaper claimed that "English cricket has died, and the body will be cremated and the ashes taken to Australia." Thus, The Ashes series was born — the most famous rivalry in cricket history.',
            side: 'right',
            image: img_1882
        },
        {
            year: '1909',
            title: 'Formation of ICC',
            description: 'The Imperial Cricket Conference (ICC) was formed in 1909 by England, Australia, and South Africa. It later became the International Cricket Council, which governs world cricket today.',
            side: 'left',
            image: img_1909
        },
        {
            year: '1928 to 1932',
            title: 'Expansion of Test Nations',
            description: 'The West Indies (1928), New Zealand (1930), and India (1932) joined the Test-playing nations, marking the spread of cricket across the British Empire.',
            side: 'right',
            image: img_1928_1932
        },
        {
            year: '1963',
            title: 'Limited Overs Cricket Introduced',
            description: 'In 1963, England introduced one-day (limited overs) cricket to make matches more exciting and suitable for television. Each team had a set number of overs — usually 50 or 60.',
            side: 'left',
            image: img_1963
        },
        {
            year: '1971',
            title: 'First One Day International',
            description: 'The first One Day International was played between Australia and England at the Melbourne Cricket Ground. This new format revolutionized cricket.',
            side: 'right',
            image: img_1971
        },
        {
            year: '1975',
            title: 'First Cricket World Cup',
            description: 'The first-ever Cricket World Cup was held in England in 1975, using the 60-over format. West Indies, led by Clive Lloyd, won the inaugural tournament, defeating Australia in the final at Lord\'s. This launched cricket into the global sports scene.',
            side: 'left',
            image: img_1975
        },
        {
            year: '1977',
            title: 'Kerry Packer and World Series Cricket',
            description: 'In 1977, Australian media tycoon Kerry Packer started the World Series Cricket (WSC). He introduced colored clothing, white balls, night matches, and TV coverage innovations, all of which later became part of mainstream cricket.',
            side: 'right',
            image: img_1977
        },
        {
            year: '1980s',
            title: 'West Indies Dominance',
            description: 'During the 1980s, the West Indies became the world\'s most feared team, thanks to legendary players like Viv Richards, Malcolm Marshall, and Clive Lloyd. They dominated both Tests and ODIs with aggressive batting and fast bowling.',
            side: 'left',
            image: img_1980
        },
        {
            year: '1992',
            title: 'Modern Cricket Era Begins',
            description: 'The 1992 World Cup introduced colored kits, white balls, night matches, and fielding restrictions. Pakistan, led by Imran Khan, won the tournament, marking the start of the modern one-day era.',
            side: 'right',
            image: img_1992
        },
        {
            year: '2001 to 2005',
            title: 'Technology Enters Cricket',
            description: 'In the early 2000s, TV replays, Hawk-Eye, and third umpires were introduced to help make accurate decisions. The game also became more global through satellite broadcasting and internet streaming.',
            side: 'left',
            image: img_2001_2005
        },
        {
            year: '2003',
            title: 'Introduction of T20',
            description: 'Twenty20 cricket was introduced in England. The format was designed to attract new audiences with shorter, more exciting matches.',
            side: 'right',
            image: img_2003
        },
        {
            year: '2007',
            title: 'Birth of T20 Cricket',
            description: 'The first ICC T20 World Cup was held in 2007 in South Africa. India, led by MS Dhoni, won the tournament. This victory sparked a revolution, making T20 the most popular and entertaining format worldwide.',
            side: 'left',
            image: img_2007
        },
        {
            year: '2012',
            title: 'Launch of the Bangladesh Premier League (BPL)',
            description: 'The Bangladesh Premier League (BPL) was launched in 2012, bringing the global T20 franchise excitement to Bangladesh. Modeled after the success of leagues like the IPL, it aimed to promote local cricket talent and attract international stars. The BPL quickly became one of the top professional T20 leagues in the world, featuring city-based franchises such as Dhaka Gladiators, Chittagong Kings, and Rangpur Riders. With passionate fans, thrilling matches, and an electric atmosphere, the BPL boosted the popularity of cricket in Bangladesh and strengthened the country\'s presence on the global cricket stage.',
            side: 'right',
            image: img_2012
        },
        {
            year: '2010s',
            title: 'Global Expansion and Innovations',
            description: 'The 2010s saw the rise of T20 leagues around the world — like the Big Bash (Australia), PSL (Pakistan), CPL (Caribbean), and The Hundred (England).',
            side: 'left',
            image: img_2010
        },
        {
            year: '2017',
            title: 'Day-Night Test Cricket',
            description: 'Day-night Test matches with pink balls became more common, bringing Test cricket to evening audiences and increasing viewership.',
            side: 'right',
            image: img_2017
        },
        {
            year: '2019',
            title: 'Cricket World Cup Drama',
            description: 'England won their first Cricket World Cup in a historic final against New Zealand at Lord\'s. The match ended in a tie after regular play and Super Over.',
            side: 'left',
            image: img_2019
        },
        {
            year: '2020',
            title: 'The Era of Analytics and Technology',
            description: 'Cricket became deeply data-driven, with AI analytics, DRS (Decision Review System), player tracking, smart bats, and real-time stats. Matches continued even during the COVID-19 pandemic, played in "bio-bubbles" without spectators.',
            side: 'right',
            image: img_2020
        },
        {
            year: '2023 to Present',
            title: 'Modern and Globalized Cricket',
            description: 'By 2023, cricket had expanded across continents, with franchise leagues in the U.S., UAE, and South Africa. The 2023 ODI World Cup, hosted by India, was the most-watched cricket event ever. The ICC continues to promote the game globally, with efforts to include cricket in the 2028 Los Angeles Olympics.',
            side: 'left',
            image: img_2025
        }
    ];

    // SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
    useEffect(() => {
        const observers = [];

        itemRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setVisibleItems(prev => new Set([...prev, index]));
                            setCurrentYear(timeline[index].year);
                        }
                    });
                },
                { threshold: 0.2, rootMargin: '-50px' }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => observers.forEach(obs => obs.disconnect());
    }, []);

    // SCROLL PROGRESS TRACKER
    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            const scrollableHeight = documentHeight - windowHeight;
            const progress = (scrollTop / scrollableHeight) * 100;

            setScrollProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // IMAGE LIGHTBOX HANDLERS
    const openLightbox = (image, index) => {
        setLightboxImage(image);
        setLightboxIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        setLightboxIndex(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        const nextIndex = (lightboxIndex + 1) % timeline.length;
        setLightboxImage(timeline[nextIndex]);
        setLightboxIndex(nextIndex);
    };

    const prevImage = () => {
        const prevIndex = (lightboxIndex - 1 + timeline.length) % timeline.length;
        setLightboxImage(timeline[prevIndex]);
        setLightboxIndex(prevIndex);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!lightboxImage) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [lightboxImage, lightboxIndex]);

    return (
        <div style={{
            minHeight: '100vh',
            padding: '3rem 1rem',
            position: 'relative',
            overflow: 'hidden',
            // BACKGROUND PATTERN
            background: `
                radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 120, 0, 0.05) 0%, transparent 50%),
                var(--body-bg)
            `
        }}>
            {/* PROGRESS BAR */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'rgba(0, 0, 0, 0.1)',
                zIndex: 1000
            }}>
                <div style={{
                    height: '100%',
                    width: `${scrollProgress}%`,
                    background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                    transition: 'width 0.1s ease-out',
                    boxShadow: '0 0 10px rgba(255, 152, 0, 0.5)'
                }}></div>
            </div>

            {/* Back Button */}
            <div style={{
                maxWidth: '1600px',
                margin: '0 auto',
                padding: '0 2rem'
            }}>
                <Link to="/dashboard" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ff7800',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    // LARGER TOUCH TARGET
                    padding: '0.8rem 1.2rem',
                    borderRadius: '8px'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 120, 0, 0.1)';
                        e.currentTarget.style.transform = 'translateX(-5px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'translateX(0)';
                    }}
                >
                    ← Back to Dashboard
                </Link>
            </div>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)', // RESPONSIVE FONT
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    fontWeight: '700'
                }}>
                    📜 History of Cricket
                </h1>
                <p style={{
                    fontSize: 'clamp(1rem, 3vw, 1.1rem)', // RESPONSIVE FONT
                    color: 'var(--text-secondary)',
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '0 1rem'
                }}>
                    Journey through time from cricket's origins to the modern era
                </p>
            </div>

            {/* Timeline Container */}
            <div
                ref={timelineRef}
                style={{
                    maxWidth: '1600px',
                    margin: '0 auto',
                    position: 'relative',
                    padding: '2rem 2rem'
                }}
            >
                {/* Vertical Line with Parallax Effect */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: `translateX(-50%) translateY(${scrollProgress * -0.5}px)`, // PARALLAX
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #ff3300 0%, #ff9a00 100%)',
                    zIndex: 0,
                    transition: 'transform 0.05s linear'
                }}></div>

                {/* Timeline Items */}
                {timeline.map((item, index) => {
                    const isVisible = visibleItems.has(index);
                    const isLeft = item.side === 'left';

                    return (
                        <div
                            key={index}
                            ref={el => itemRefs.current[index] = el}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(0, 1fr) 40px minmax(0, 1fr)',
                                gap: 'clamp(1rem, 3vw, 3rem)', // RESPONSIVE GAP
                                alignItems: 'center',
                                marginBottom: 'clamp(3rem, 5vw, 5rem)',
                                position: 'relative',
                                // SCROLL ANIMATION
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                            }}
                        >
                            {/* LEFT SIDE */}
                            {isLeft ? (
                                // Text on LEFT
                                <div style={{
                                    justifySelf: 'end',
                                    width: '100%',
                                    maxWidth: '600px',
                                    // LIDE IN FROM LEFT
                                    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                                    transition: 'transform 0.8s ease-out 0.2s'
                                }}>
                                    <div
                                        style={{
                                            background: 'var(--card-bg)',
                                            padding: 'clamp(1.5rem, 3vw, 2rem)',
                                            borderRadius: '12px',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                                            border: '2px solid transparent',
                                            transition: 'all 0.4s ease',
                                            //  BETTER MOBILE PADDING
                                            minHeight: '250px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.03) translateY(-5px)';
                                            e.currentTarget.style.borderColor = '#ff7800';
                                            e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 120, 0, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                            e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                                        }}
                                    >
                                        <div style={{
                                            display: 'inline-block',
                                            background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                                            color: 'white',
                                            padding: '0.5rem 1.5rem',
                                            borderRadius: '25px',
                                            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                                            fontWeight: '700',
                                            marginBottom: '1rem',
                                            boxShadow: '0 4px 15px rgba(255, 152, 0, 0.4)'
                                        }}>
                                            {item.year}
                                        </div>
                                        <h3 style={{
                                            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                                            marginBottom: '1rem',
                                            color: 'var(--text-primary)',
                                            fontWeight: '700'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                            lineHeight: '1.7',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // Image on LEFT
                                <div style={{
                                    justifySelf: 'end',
                                    width: '100%',
                                    maxWidth: '600px',
                                    // SLIDE IN FROM LEFT
                                    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                                    transition: 'transform 0.8s ease-out 0.2s'
                                }}>
                                    <div
                                        onClick={() => openLightbox(item, index)}
                                        style={{
                                            width: '100%',
                                            height: 'clamp(250px, 40vw, 350px)',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                                            transition: 'all 0.4s ease',
                                            cursor: 'pointer',
                                            position: 'relative'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                            e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 120, 0, 0.5)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                objectPosition: 'center'
                                            }}
                                        />
                                        {/* CLICK TO EXPAND HINT */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: 'rgba(0, 0, 0, 0.7)',
                                            color: 'white',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            opacity: 0,
                                            transition: 'opacity 0.3s'
                                        }}
                                            className="expand-hint"
                                        >
                                            🔍 Click to expand
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* CENTER - Timeline Dot */}
                            <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: isVisible ? '#ff7800' : '#ccc',
                                border: '4px solid var(--bg-primary)',
                                boxShadow: isVisible ? '0 0 0 4px rgba(255, 120, 0, 0.3), 0 0 20px rgba(255, 120, 0, 0.5)' : '0 0 0 4px rgba(0, 0, 0, 0.1)',
                                zIndex: 2,
                                justifySelf: 'center',
                                transition: 'all 0.5s ease',
                                transform: isVisible ? 'scale(1.2)' : 'scale(1)'
                            }}></div>

                            {/* RIGHT SIDE */}
                            {!isLeft ? (
                                // Text on RIGHT
                                <div style={{
                                    justifySelf: 'start',
                                    width: '100%',
                                    maxWidth: '600px',
                                    // SLIDE IN FROM RIGHT
                                    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                                    transition: 'transform 0.8s ease-out 0.2s'
                                }}>
                                    <div
                                        style={{
                                            background: 'var(--card-bg)',
                                            padding: 'clamp(1.5rem, 3vw, 2rem)',
                                            borderRadius: '12px',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                                            border: '2px solid transparent',
                                            transition: 'all 0.4s ease',
                                            minHeight: '250px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.03) translateY(-5px)';
                                            e.currentTarget.style.borderColor = '#ff7800';
                                            e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 120, 0, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                            e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                                        }}
                                    >
                                        <div style={{
                                            display: 'inline-block',
                                            background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                                            color: 'white',
                                            padding: '0.5rem 1.5rem',
                                            borderRadius: '25px',
                                            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                                            fontWeight: '700',
                                            marginBottom: '1rem',
                                            boxShadow: '0 4px 15px rgba(255, 152, 0, 0.4)'
                                        }}>
                                            {item.year}
                                        </div>
                                        <h3 style={{
                                            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                                            marginBottom: '1rem',
                                            color: 'var(--text-primary)',
                                            fontWeight: '700'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                            lineHeight: '1.7',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // Image on RIGHT
                                <div style={{
                                    justifySelf: 'start',
                                    width: '100%',
                                    maxWidth: '600px',
                                    // SLIDE IN FROM RIGHT
                                    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                                    transition: 'transform 0.8s ease-out 0.2s'
                                }}>
                                    <div
                                        onClick={() => openLightbox(item, index)}
                                        style={{
                                            width: '100%',
                                            height: 'clamp(250px, 40vw, 350px)',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                                            transition: 'all 0.4s ease',
                                            cursor: 'pointer',
                                            position: 'relative'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                            e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 120, 0, 0.5)';
                                            const hint = e.currentTarget.querySelector('.expand-hint');
                                            if (hint) hint.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                                            const hint = e.currentTarget.querySelector('.expand-hint');
                                            if (hint) hint.style.opacity = '0';
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                objectPosition: 'center'
                                            }}
                                        />
                                        {/* CLICK TO EXPAND HINT */}
                                        <div
                                            className="expand-hint"
                                            style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                background: 'rgba(0, 0, 0, 0.7)',
                                                color: 'white',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '20px',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                opacity: 0,
                                                transition: 'opacity 0.3s'
                                            }}
                                        >
                                            🔍 Click to expand
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* End Marker */}
            <div style={{
                textAlign: 'center',
                marginTop: '3rem',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                borderRadius: '12px',
                color: 'white',
                maxWidth: '1600px',
                margin: '3rem auto 2rem'
            }}>
                <h3 style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    marginBottom: '0.5rem',
                    fontWeight: '700'
                }}>
                    🏏 The Journey Continues
                </h3>
                <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', opacity: 0.95 }}>
                    Cricket's rich history spans over 450 years, and the game continues to evolve and captivate millions worldwide.
                </p>
            </div>

            {/* Historical Cricket Bat Image Section */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem 3rem'
            }}>
                <div
                    onClick={() => openLightbox({ image: img_bat, title: 'Historical Cricket Bat Evolution', year: 'Evolution' }, timeline.length)}
                    style={{
                        background: 'var(--card-bg)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                        border: '2px solid transparent',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.borderColor = '#ff7800';
                        e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 120, 0, 0.3)';
                        const hint = e.currentTarget.querySelector('.expand-hint');
                        if (hint) hint.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
                        const hint = e.currentTarget.querySelector('.expand-hint');
                        if (hint) hint.style.opacity = '0';
                    }}
                >
                    <img
                        src={img_bat}
                        alt="Historical Cricket Bat Evolution"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'contain'
                        }}
                    />
                    <div
                        className="expand-hint"
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            opacity: 0,
                            transition: 'opacity 0.3s'
                        }}
                    >
                        🔍 Click to expand
                    </div>
                </div>
            </div>

            {/* IMAGE LIGHTBOX MODAL */}
            {lightboxImage && (
                <div
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        animation: 'fadeIn 0.3s ease-out'
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            zIndex: 10001
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#ff7800';
                            e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'scale(1) rotate(0)';
                        }}
                    >
                        ×
                    </button>

                    {/* Navigation Arrows */}
                    {lightboxIndex !== null && lightboxIndex < timeline.length && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                                style={{
                                    position: 'absolute',
                                    left: '20px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '50%',
                                    width: '50px',
                                    height: '50px',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    zIndex: 10001
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#ff7800';
                                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                }}
                            >
                                ‹
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                                style={{
                                    position: 'absolute',
                                    right: '20px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '50%',
                                    width: '50px',
                                    height: '50px',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    zIndex: 10001
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#ff7800';
                                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                }}
                            >
                                ›
                            </button>
                        </>
                    )}

                    {/* Image Container */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            position: 'relative',
                            animation: 'scaleIn 0.3s ease-out'
                        }}
                    >
                        <img
                            src={lightboxImage.image}
                            alt={lightboxImage.title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '85vh',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                            }}
                        />

                        {/* Image Caption */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-60px',
                            left: 0,
                            right: 0,
                            textAlign: 'center',
                            color: 'white'
                        }}>
                            <div style={{
                                fontSize: '1.2rem',
                                fontWeight: '700',
                                marginBottom: '0.5rem',
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                            }}>
                                {lightboxImage.year}
                            </div>
                            <div style={{
                                fontSize: '1rem',
                                opacity: 0.9,
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                            }}>
                                {lightboxImage.title}
                            </div>
                        </div>

                        {/* Keyboard Navigation Hint */}
                        {lightboxIndex !== null && lightboxIndex < timeline.length && (
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                left: 0,
                                right: 0,
                                textAlign: 'center',
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: '0.85rem'
                            }}>
                                Use ← → arrow keys or click buttons to navigate • Press ESC to close
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* MOBILE RESPONSIVE STYLES */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scaleIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                {/*MOBILE LAYOUT */}
                @media (max-width: 768px) {
                    div[style*="gridTemplateColumns: minmax"] {
                        grid-template-columns: 1fr !important;
                        gap: 1rem !important;
                    }
                    
                    /* Hide center dot on mobile */
                    div[style*="width: 24px"][style*="height: 24px"] {
                        display: none !important;
                    }
                    
                    /* Hide vertical line on mobile */
                    div[style*="width: 4px"][style*="height: 100%"] {
                        display: none !important;
                    }
                    
                    /* Stack items vertically on mobile */
                    div[style*="justifySelf"] {
                        justify-self: center !important;
                        max-width: 100% !important;
                    }
                    
                    /* Adjust lightbox buttons on mobile */
                    button[style*="position: absolute"][style*="left: 20px"],
                    button[style*="position: absolute"][style*="right: 20px"] {
                        width: 40px !important;
                        height: 40px !important;
                        font-size: 1.2rem !important;
                    }
                }

                @media (max-width: 480px) {
                    /* Even smaller screens */
                    div[style*="padding: clamp"] {
                        padding: 1rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default HistoryOfCricket;