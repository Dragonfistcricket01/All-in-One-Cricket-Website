import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import LiveScoreTicker from './LiveScoreTicker';
import { useCart } from '../context/CartContext';
import ProductSearch from './ProductSearch';
import '../styles/Header.css';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { getCartCount } = useCart();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    };

    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setShowMobileMenu(false);
        setShowAccountDropdown(false);
        navigate('/login');
    };

    const handleMenuClick = () => {
        setShowMobileMenu(!showMobileMenu);
        setActiveSubmenu(null);
        if (!showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showAccountDropdown) {
                const accountBtn = document.querySelector('.account-btn');
                const accountDropdown = document.querySelector('.account-dropdown');

                if (accountBtn && accountDropdown) {
                    if (!accountBtn.contains(event.target) && !accountDropdown.contains(event.target)) {
                        setShowAccountDropdown(false);
                    }
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showAccountDropdown]);

    const handleSubmenuToggle = (menu) => {
        setActiveSubmenu(activeSubmenu === menu ? null : menu);
    };

    const closeMenu = () => {
        setShowMobileMenu(false);
        setActiveSubmenu(null);
        document.body.style.overflow = 'auto';
    };

    const user = JSON.parse(localStorage.getItem('user'));

    const menuItems = [
        {
            name: 'Home',
            link: '/',
            hasSubmenu: false
        },
        {
            name: 'Information',
            hasSubmenu: true,
            submenu: [
                { name: 'Cricket News', link: '/news' },
                { name: 'Cricket Rules + Laws + Regulations', link: '/rules-laws-regulations' },
                { name: 'History of Cricket', link: '/history-of-cricket' },
                { name: 'Stadium Information', link: '/stadium-information' },
                { name: 'Find Cricket Club Nearby', link: '/find-club' }
            ]
        },
        {
            name: 'Entertainment',
            hasSubmenu: true,
            submenu: [
//                {
//                    category: 'Talk with AI',
//                    items: [
//                        { name: 'AI Chat', link: '/ai-chat' },
//                        { name: 'Cricket Bot', link: '/cricket-bot' },
//                    ]
//                },
                {
                    category: 'Interactive Features',
                    items: [
                        { name: 'Quiz with AI', link: '/ai-quiz' },
                        { name: 'Polls', link: '/polls' },
                        { name: 'Quiz', link: '/quiz' },
                        { name: 'Trivia', link: '/trivia' }
                    ]
                },
                {
                    category: 'Social',
                    items: [
                        { name: 'Fan Club and Community', link: '/fan-club' },
                        { name: 'User Content Generator', link: '/content-generator' }
                    ]
                },
                {
                    category: 'Masterclass',
                    items: [
                        { name: 'Lessons', link: '/lessons' },
                        { name: 'Tutorials', link: '/tutorials' },
                        { name: 'Analysis', link: '/analysis' }
                    ]
                },
                {
                    category: 'Gaming',
                    items: [
                        { name: 'Ultimate Team 11 Builder', link: '/team-builder' },
                        { name: 'Interactive Games', link: '/games' },
                        { name: 'Daily Rewards', link: '/daily-rewards' }
                    ]
                },
                {
                    category: 'Events',
                    items: [
                        { name: 'Fixtures and Results', link: '/fixtures-results' },
                        { name: 'Live Scores', link: '/live-scores' },
                        { name: 'Player Ratings', link: '/player-ratings' }
                    ]
                }
            ]
        },
        {
            name: 'Stats',
            hasSubmenu: true,
            submenu: [
                {
                    category: 'Player Stats',
                    items: [
                        { name: 'Player Profiles', link: '/stats/players' },
                        { name: 'Player Rankings', link: '/stats/player-rankings' }
                    ]
                },
                {
                    category: 'Team Stats',
                    items: [
                        { name: 'Team Rankings', link: '/stats/team-rankings' },
                        { name: 'Team Statistics', link: '/stats/team-statistics' }
                    ]
                },
                {
                    category: 'Analytics',
                    items: [
                        //{ name: 'Advanced Analytics', link: '/stats/analytics' },
                        { name: 'Match Predictor', link: '/match-predictor' },
                        { name: 'Pitch Predictor', link: '/pitch-predictor' },
                        { name: 'Player Performance', link: '/player-predictor' },
                        { name: 'AI Match Predictor', link: '/ml-predictor' }
                    ]
                }
            ]
        },
        {
            name: 'Cricket Store',
            hasSubmenu: true,
            submenu: [
                {
                    category: 'Shop All',
                    items: [
                        { name: 'View All Products', link: '/cricket-store' }
                    ]
                },
                {
                    category: 'Equipment',
                    items: [
                        { name: 'Cricket Bats', link: '/cricket-store/cricket-bats' },
                        { name: 'Cricket Balls', link: '/cricket-store/cricket-balls' },
                        { name: 'Stumps & Bails', link: '/cricket-store/stumps-bails' },
                        { name: 'Batting Gloves', link: '/cricket-store/batting-gloves' },
                        { name: 'Wicket Keeping Gloves', link: '/cricket-store/wicket-keeping-gloves' }
                    ]
                },
                {
                    category: 'Protection',
                    items: [
                        { name: 'Helmets', link: '/cricket-store/helmets' },
                        { name: 'Pads', link: '/cricket-store/pads' },
                        { name: 'Thigh Guards', link: '/cricket-store/thigh-guards' },
                        { name: 'Chest Guards', link: '/cricket-store/chest-guards' },
                        { name: 'Abdominal Guards', link: '/cricket-store/abdominal-guards' }
                    ]
                },
                {
                    category: 'Apparel',
                    items: [
                        { name: 'Jerseys', link: '/cricket-store/jerseys' },
                        { name: 'Casual Wear', link: '/cricket-store/casual-wear' },
                        { name: 'Training Wear', link: '/cricket-store/training-wear' },
                        { name: 'Caps & Hats', link: '/cricket-store/caps-hats' }
                    ]
                },
                {
                    category: 'Accessories',
                    items: [
                        { name: 'Cricket Bags', link: '/cricket-store/cricket-bags' },
                        { name: 'Bat Care', link: '/cricket-store/bat-care' },
                        { name: 'Grips & Tapes', link: '/cricket-store/grips-tapes' },
                        { name: 'Scorebooks', link: '/cricket-store/scorebooks' }
                    ]
                }
            ]
        },
        {
            name: 'About',
            hasSubmenu: true,
            submenu: [
                { name: 'About Us', link: '/about-us' },
                { name: 'Our Team', link: '/our-team' },
                { name: 'Careers', link: '/careers' },
                { name: 'Privacy Policy', link: '/privacy-policy' },
                { name: 'Terms of Service', link: '/terms-of-service' },
                { name: 'Cookie Policy', link: '/cookie-policy' },
                
                
//              {/* Testing Purpose*/ }
                { name: 'Admin Sync Logs', link: '/admin/sync-logs' },
            ]
        },
        {
            name: 'Contact',
            link: '/contact',
            hasSubmenu: false
        }
    ];

    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <img src="/resource/All-in-One Cricket Website Logo.png" alt="All-in-One Cricket" />
            </Link>

            <LiveScoreTicker />

            <div className="header-right">
                <div className="time-container">
                    <div className="clock">{formatTime(currentTime)}</div>
                    <div className="date">{formatDate(currentTime)}</div>
                </div>

                <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                    <i className={isDarkMode ? 'ri-moon-line' : 'ri-sun-line'}></i>
                </button>

                {/* ACCOUNT BUTTON WITH CART IN DROPDOWN */}
                <div className="account-wrapper">
                    <button
                        className="account-btn"
                        onClick={() => setShowAccountDropdown(!showAccountDropdown)}
                        title="Account"
                    >
                        <i className="ri-user-line"></i>
                    </button>

                    {showAccountDropdown && (
                        <div className="account-dropdown active">
                            <div className="account-header">
                                <i className="ri-user-3-fill"></i>
                                <span>{user ? user.username : 'Guest user'}</span>
                            </div>
                            {user ? (
                                <>
                                    <Link to="/dashboard" className="dropdown-item" onClick={() => setShowAccountDropdown(false)}>
                                        <i className="ri-dashboard-line"></i>
                                        Dashboard
                                    </Link>

                                    {/* CART IN DROPDOWN */}
                                    <Link to="/cart" className="dropdown-item" onClick={() => setShowAccountDropdown(false)}>
                                        <i className="ri-shopping-cart-line"></i>
                                        Shopping Cart
                                        {getCartCount() > 0 && (
                                            <span style={{
                                                marginLeft: 'auto',
                                                background: '#ef4444',
                                                color: 'white',
                                                borderRadius: '12px',
                                                padding: '0.2rem 0.5rem',
                                                fontSize: '0.75rem',
                                                fontWeight: '700'
                                            }}>
                                                {getCartCount()}
                                            </span>
                                        )}
                                    </Link>

                                    <Link to="/wishlist" className="dropdown-item" onClick={() => setShowAccountDropdown(false)}>
                                        <i className="ri-heart-line"></i>
                                        Wishlist
                                    </Link>

                                    <Link to="/orders" className="dropdown-item" onClick={() => setShowAccountDropdown(false)}>
                                        <i className="ri-file-list-line"></i>
                                        My Orders
                                    </Link>

                                    <Link to="/profile" className="dropdown-item" onClick={() => setShowAccountDropdown(false)}>
                                        <i className="ri-user-settings-line"></i>
                                        Settings
                                    </Link>

                                    <button onClick={handleLogout} className="dropdown-item">
                                        <i className="ri-logout-box-line"></i>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="dropdown-item" onClick={() => setShowAccountDropdown(false)}>
                                        <i className="ri-login-box-line"></i>
                                        Login
                                    </Link>
                                    <Link to="/register" className="dropdown-item" onClick={() => setShowAccountDropdown(false)}>
                                        <i className="ri-user-add-line"></i>
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>

                <div
                    className="menu-icon-wrapper"
                    onClick={handleMenuClick}
                >
                    <button
                        className={`menu-icon ${showMobileMenu ? 'close' : ''}`}
                    >
                        <span></span>
                    </button>
                </div>

            </div>

            <nav className={`nav-overlay ${showMobileMenu ? 'reveal-nav' : ''}`}>
                <div className="nav-content">
                    <ul className={`menu ${showMobileMenu ? 'reveal-items' : ''}`}>
                        {menuItems.map((item, index) => (
                            <li key={index} className="menu-item-wrapper">
                                {item.hasSubmenu ? (
                                    <>
                                        <button
                                            className="menu-item menu-item-with-sub"
                                            onClick={() => handleSubmenuToggle(item.name)}
                                        >
                                            {item.name}
                                            <i className={`ri-arrow-${activeSubmenu === item.name ? 'up' : 'down'}-s-line`}></i>
                                        </button>

                                        <div className={`submenu ${activeSubmenu === item.name ? 'submenu-active' : ''}`}>
                                            {item.submenu.map((sub, subIndex) => (
                                                sub.category ? (
                                                    <div key={subIndex} className="submenu-category">
                                                        <h4 className="submenu-category-title">{sub.category}</h4>
                                                        <ul className="submenu-list">
                                                            {sub.items.map((subItem, itemIndex) => (
                                                                <li key={itemIndex}>
                                                                    <Link
                                                                        to={subItem.link}
                                                                        className="submenu-link"
                                                                        onClick={closeMenu}
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : (
                                                    <Link
                                                        key={subIndex}
                                                        to={sub.link}
                                                        className="submenu-link submenu-link-single"
                                                        onClick={closeMenu}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={item.link}
                                        className="menu-item"
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;