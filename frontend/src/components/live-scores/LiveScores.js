import React, { useState, useEffect } from 'react';
import { cricAPI } from '../../../services/cricAPI';
import LiveMatchCard from './LiveMatchCard';
import LiveMatchDetails from './LiveMatchDetails';
import './LiveScores.css';

const LiveScores = () => {
    const [liveMatches, setLiveMatches] = useState([]);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lastUpdate, setLastUpdate] = useState(new Date());

    useEffect(() => {
        fetchLiveMatches();

        // Auto-refresh every 10 seconds
        const interval = setInterval(() => {
            fetchLiveMatches();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const fetchLiveMatches = async () => {
        const result = await cricAPI.getLiveMatches();
        if (result.status === 'success') {
            setLiveMatches(result.data);
            setLastUpdate(new Date());
        }
        setLoading(false);
    };

    const handleMatchSelect = async (matchId) => {
        const result = await cricAPI.getMatchDetails(matchId);
        if (result.status === 'success') {
            setSelectedMatch(result.data);
        }
    };

    const formatLastUpdate = () => {
        const now = new Date();
        const diff = Math.floor((now - lastUpdate) / 1000);
        if (diff < 60) return `${diff}s ago`;
        return `${Math.floor(diff / 60)}m ago`;
    };

    return (
        <div className="live-scores-container">
            {/* Header */}
            <div className="live-scores-header">
                <div className="header-content">
                    <h1>
                        <i className="ri-live-line"></i>
                        Live Scores
                        <span className="live-indicator">
                            <span className="pulse"></span>
                            LIVE
                        </span>
                    </h1>
                    <p>Real-time cricket match updates</p>
                </div>
                <div className="last-update">
                    <i className="ri-refresh-line"></i>
                    Updated {formatLastUpdate()}
                </div>
            </div>

            {loading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading live matches...</p>
                </div>
            ) : (
                <>
                    {/* Live Matches Grid */}
                    {!selectedMatch && (
                        <div className="live-matches-section">
                            {liveMatches.length > 0 ? (
                                <div className="live-matches-grid">
                                    {liveMatches.map(match => (
                                        <LiveMatchCard
                                            key={match.id}
                                            match={match}
                                            onClick={() => handleMatchSelect(match.id)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <i className="ri-live-line"></i>
                                    <h3>No Live Matches</h3>
                                    <p>There are no live cricket matches at the moment</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Match Details View */}
                    {selectedMatch && (
                        <LiveMatchDetails
                            match={selectedMatch}
                            onBack={() => setSelectedMatch(null)}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default LiveScores;