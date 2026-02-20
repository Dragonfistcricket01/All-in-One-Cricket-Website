//import React, { useState } from 'react';
//import './FloatingLiveScoreWidget.css';
//
//const FloatingLiveScoreWidget = () => {
//    const [isExpanded, setIsExpanded] = useState(false);
//
//    const toggleWidget = () => {
//        setIsExpanded(!isExpanded);
//    };
//
//    return (
//        <>
//            {/* Floating Button */}
//            <div
//                className={`live-score-float-btn ${isExpanded ? 'hidden' : ''}`}
//                onClick={toggleWidget}
//                title="Live Cricket Scores"
//            >
//                <i className="ri-live-fill"></i>
//                <span className="live-pulse"></span>
//            </div>
//
//            {/* Expanded Widget */}
//            <div className={`live-score-widget ${isExpanded ? 'expanded' : ''}`}>
//                <div className="live-score-header">
//                    <div className="live-score-title">
//                        <i className="ri-live-fill"></i>
//                        <span>Live Cricket Scores</span>
//                    </div>
//                    <button
//                        className="live-score-close"
//                        onClick={toggleWidget}
//                        title="Minimize"
//                    >
//                        <i className="ri-close-line"></i>
//                    </button>
//                </div>
//
//                <div className="live-score-content">
//                    {/* CricketData.org Widget Script */}
//                    <script
//                        src="https://cdorgapi.b-cdn.net/widgets/score.js"
//                        async
//                    ></script>
//
//                    {/* You can choose different widgets: */}
//
//                    {/* Option 1: Scrolling Score Widget (300x300) */}
//                    <div className="widget-container">
//                        <script
//                            src="https://cdorgapi.b-cdn.net/widgets/score.js"
//                        ></script>
//                    </div>
//
//                    {/* Option 2: Vertical Match List Widget (250x600) */}
//                    {/* <div className="widget-container">
//                        <script
//                            src="https://cdorgapi.b-cdn.net/widgets/vmatchlist.js"
//                        ></script>
//                    </div> */}
//
//                    {/* Option 3: Horizontal Match List (400x300) */}
//                    {/* <div className="widget-container">
//                        <script
//                            src="https://cdorgapi.b-cdn.net/widgets/matchlist.js">
//                        </script>
//                    </div> */}
//                </div>
//
//                <div className="live-score-footer">
//                    <span>Powered by CricketData.org</span>
//                </div>
//            </div>
//        </>
//    );
//};
//
//export default FloatingLiveScoreWidget;

import React, { useState } from 'react';
import './FloatingLiveScoreWidget.css';

const FloatingLiveScoreWidget = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleWidget = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {/* Floating Button */}
            <div
                className={`live-score-float-btn ${isExpanded ? 'hidden' : ''}`}
                onClick={toggleWidget}
                title="Live Cricket Scores"
            >
                <i className="ri-live-fill"></i>
                <span className="live-pulse"></span>
            </div>

            {/* Expanded Widget */}
            <div className={`live-score-widget ${isExpanded ? 'expanded' : ''}`}>
                <div className="live-score-header">
                    <div className="live-score-title">
                        <i className="ri-live-fill"></i>
                        <span>Live Cricket Scores</span>
                    </div>
                    <button
                        className="live-score-close"
                        onClick={toggleWidget}
                        title="Minimize"
                    >
                        <i className="ri-close-line"></i>
                    </button>
                </div>

                <div className="live-score-content">
                    {isExpanded && (
                        <iframe
                            src="/cricket-widget.html"
                            title="Live Cricket Scores"
                            className="cricket-widget-iframe"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none'
                            }}
                        />
                    )}
                </div>

                <div className="live-score-footer">
                    <span>Powered by CricketData.org</span>
                </div>
            </div>
        </>
    );
};

export default FloatingLiveScoreWidget;