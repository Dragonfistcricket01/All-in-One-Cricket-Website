import React, { useState, useEffect } from 'react';
import '../styles/CookieConsent.css';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            // Show banner after 1 second delay
            setTimeout(() => {
                setShowBanner(true);
            }, 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
        // Here you can enable analytics, tracking, etc.
        console.log('Cookies accepted - Enable analytics');
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setShowBanner(false);
        // Here you can disable non-essential cookies
        console.log('Cookies rejected - Disable non-essential tracking');
    };

    const handleCustomize = () => {
        // You can open a modal here to let users customize cookie preferences
        alert('Cookie customization coming soon! For now, you can Accept (all cookies) or Reject (essential only).');
    };

    if (!showBanner) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-banner">
                <div className="cookie-icon">
                    <i className="ri-cookie-line"></i>
                </div>

                <div className="cookie-content">
                    <h3>🍪 We Value Your Privacy</h3>
                    <p>
                        We use cookies to enhance your browsing experience, serve personalized content,
                        and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                    </p>
                    <p className="cookie-learn-more">
                        <a href="#" onClick={(e) => { e.preventDefault(); alert('Cookie Policy page - Coming soon!'); }}>
                            Learn more about our Cookie Policy
                        </a>
                    </p>
                </div>

                <div className="cookie-actions">
                    <button className="cookie-btn cookie-btn-reject" onClick={handleReject}>
                        <i className="ri-close-circle-line"></i>
                        Reject All
                    </button>
                    <button className="cookie-btn cookie-btn-customize" onClick={handleCustomize}>
                        <i className="ri-settings-3-line"></i>
                        Customize
                    </button>
                    <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
                        <i className="ri-checkbox-circle-line"></i>
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;