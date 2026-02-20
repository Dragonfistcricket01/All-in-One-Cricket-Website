import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ user, onLogout }) {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/dashboard" className="nav-logo">
                    🏏 Cricket Hub
                </Link>

                <div className="nav-menu">
                    <Link
                        to="/dashboard"
                        className={location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </Link>
                    <Link
                        to="/polls"
                        className={location.pathname === '/polls' ? 'nav-link active' : 'nav-link'}
                    >
                        Polls
                    </Link>
                    <Link
                        to="/quiz"
                        className={location.pathname === '/quiz' ? 'nav-link active' : 'nav-link'}
                    >
                        Quiz
                    </Link>
                    <Link
                        to="/trivia"
                        className={location.pathname === '/trivia' ? 'nav-link active' : 'nav-link'}
                    >
                        Trivia
                    </Link>
                </div>

                <div className="nav-user">
                    <span className="username">👤 {user?.username}</span>
                    <button onClick={onLogout} className="btn-logout">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;