import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FloatingChatButton.css';

const FloatingChatButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to="/ai-chat">
            <div
                className="floating-chat-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className="chat-icon">💬</span>
                {isHovered && <span className="chat-text">Ask CricBot</span>}
            </div>
        </Link>
    );
};

export default FloatingChatButton;