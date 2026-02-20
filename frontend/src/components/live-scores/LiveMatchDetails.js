import React, { useEffect, useState } from 'react';
import { cricAPI } from '../../../services/cricAPI';
import ManhattanChart from './ManhattanChart';
import WormChart from './WormChart';

const LiveMatchDetails = ({ match: initialMatch, onBack }) => {
    const [match, setMatch] = useState(initialMatch);
    const [lastUpdate, setLastUpdate] = useState(new Date());

    useEffect(() => {
        // Auto-refresh every 10 seconds
        const interval = setInterval(async () => {
            const result = await cricAPI.getLiveScore(initialMatch.id);
            if (result.status === 'success') {
                setMatch(result.data);
                setLastUpdate(new Date());
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [initialMatch.id]);

    const formatLastUpdate = () => {
        const now = new Date();
        const diff = Math.floor((now - lastUpdate) / 1000);
        if (diff < 60) return `${diff}s ago`;
        return `${Math.floor(diff / 60)}m ago`;
    };

    const matchInfo = match.matchInfo || {};
    const currentBatsmen = match.currentBatsmen || [];
    const currentBowler = match.currentBowler || {};
    const recentOvers = match.recentOvers || [];
    const commentary = match.commentary || [];

    return (
        <div className="live-match-details">
            {/* Back Button */}
            <button className="back-btn" onClick={onBack}>
                <i className="ri-arrow-left-line"></i>
                Back to Live Matches
            </button>

            {/* Match Header */}
            <div className="match-details-header">
                <div className="match-title-section">
                    <h2>{match.name}</h2>
                    <div className="match-meta">
                        <span><i className="ri-map-pin-line"></i> {match.venue}</span>
                        <span className="live-badge">
                            <span className="pulse-dot"></span>
                            LIVE
                        </span>
                    </div>
                </div>
                <div className="last-update-info">
                    <i className="ri-refresh-line spinning"></i>
                    Updated {formatLastUpdate()}
                </div>
            </div>

            {/* Score Panel */}
            <div className="score-panel">
                <div className="teams-scores">
                    {match.score && match.score.map((innings, idx) => (
                        <div key={idx} className={`team-score-card ${idx === 1 ? 'batting' : ''}`}>
                            <div className="team-header">
                                <span className="team-flag">{match.teamInfo?.[idx === 0 ? 1 : 0]?.img}</span>
                                <span className="team-name">{innings.inning.replace(' Inning 1', '')}</span>
                            </div>
                            <div className="score-display">
                                <span className="runs-wickets">{innings.r}/{innings.w}</span>
                                <span className="overs">({innings.o} overs)</span>
                            </div>
                            {innings.extras > 0 && (
                                <span className="extras">Extras: {innings.extras}</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Match Situation */}
                {matchInfo.situation && (
                    <div className="match-situation">
                        <div className="situation-text">
                            <i className="ri-information-line"></i>
                            <span>{matchInfo.situation}</span>
                        </div>
                        <div className="run-rate-display">
                            <div className="rate-item">
                                <span className="label">CRR</span>
                                <span className="value">{matchInfo.crr}</span>
                            </div>
                            <div className="rate-item required">
                                <span className="label">RRR</span>
                                <span className="value">{matchInfo.rrr}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Current Batsmen */}
            <div className="current-players-section">
                <h3>
                    <i className="ri-user-line"></i>
                    Current Batsmen
                </h3>
                <div className="batsmen-grid">
                    {currentBatsmen.map((batsman, idx) => (
                        <div key={idx} className="batsman-card">
                            <div className="player-name">{batsman.name}</div>
                            <div className="player-stats">
                                <span className="runs">{batsman.r}*</span>
                                <span className="balls">({batsman.b})</span>
                            </div>
                            <div className="player-details">
                                <span>SR: {batsman.sr}</span>
                                <span>4s: {batsman['4s']}</span>
                                <span>6s: {batsman['6s']}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Current Bowler */}
            <div className="current-bowler-section">
                <h3>
                    <i className="ri-basketball-line"></i>
                    Current Bowler
                </h3>
                <div className="bowler-card">
                    <div className="player-name">{currentBowler.name}</div>
                    <div className="bowling-figures">
                        <span>{currentBowler.o} - {currentBowler.m} - {currentBowler.r} - {currentBowler.w}</span>
                        <span className="economy">Economy: {currentBowler.eco}</span>
                    </div>
                </div>
            </div>

            {/* Recent Overs */}
            {recentOvers.length > 0 && (
                <div className="recent-overs-section">
                    <h3>
                        <i className="ri-bar-chart-line"></i>
                        Recent Overs
                    </h3>
                    <div className="overs-visualization">
                        {recentOvers.map((runs, idx) => (
                            <div key={idx} className={`over-bar ${runs >= 10 ? 'high' : runs >= 6 ? 'medium' : 'low'}`}>
                                <span className="runs-label">{runs}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Charts */}
            <div className="charts-section">
                <div className="chart-container">
                    <h3>Manhattan Chart</h3>
                    <ManhattanChart data={recentOvers} />
                </div>
                <div className="chart-container">
                    <h3>Run Flow</h3>
                    <WormChart data={match.score} />
                </div>
            </div>

            {/* Partnerships */}
            {match.partnerships && match.partnerships.length > 0 && (
                <div className="partnerships-section">
                    <h3>
                        <i className="ri-links-line"></i>
                        Partnerships
                    </h3>
                    <div className="partnerships-list">
                        {match.partnerships.map((partnership, idx) => (
                            <div key={idx} className="partnership-card">
                                <div className="partnership-header">
                                    <span className="wicket">
                                        {partnership.wicket === 'Current' ? '⚡ Current' : `${partnership.wicket}${getOrdinal(partnership.wicket)} wicket`}
                                    </span>
                                    <span className="runs">{partnership.runs} runs</span>
                                </div>
                                <div className="partnership-details">
                                    <span>{partnership.batsmen}</span>
                                    <span>{partnership.balls} balls</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Fall of Wickets */}
            {match.fallOfWickets && match.fallOfWickets.length > 0 && (
                <div className="fow-section">
                    <h3>
                        <i className="ri-arrow-down-line"></i>
                        Fall of Wickets
                    </h3>
                    <div className="fow-timeline">
                        {match.fallOfWickets.map((wicket, idx) => (
                            <div key={idx} className="fow-item">
                                <div className="fow-score">{wicket.score}/{wicket.wicket}</div>
                                <div className="fow-details">
                                    <span className="player">{wicket.player}</span>
                                    <span className="over">({wicket.over} ov)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Commentary */}
            <div className="commentary-section">
                <h3>
                    <i className="ri-message-line"></i>
                    Ball-by-Ball Commentary
                </h3>
                <div className="commentary-feed">
                    {commentary.map((ball, idx) => (
                        <div key={idx} className="commentary-item">
                            <div className="ball-number">
                                {ball.over}
                            </div>
                            <div className="commentary-text">
                                <div className="ball-info">
                                    <span className="bowler">{ball.bowler}</span> to <span className="batsman">{ball.batsman}</span>
                                    {ball.runs === 'W' ? (
                                        <span className="wicket-badge">WICKET 🎯</span>
                                    ) : ball.runs === 6 ? (
                                        <span className="six-badge">SIX ⚡</span>
                                    ) : ball.runs === 4 ? (
                                        <span className="four-badge">FOUR 🔥</span>
                                    ) : (
                                        <span className="runs-badge">{ball.runs} run{ball.runs !== 1 ? 's' : ''}</span>
                                    )}
                                </div>
                                <p className="commentary">{ball.commentary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const getOrdinal = (n) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
};

export default LiveMatchDetails;