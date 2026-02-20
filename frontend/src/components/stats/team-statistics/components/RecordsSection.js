import React from 'react';
import '../TeamStatistics.css';

const RecordsSection = ({ stats, format }) => {
    if (!stats || !stats[format] || !stats[format].records) return null;

    const records = stats[format].records;

    return (
        <div className="records-section">
            <h2 className="section-title">
                <i className="ri-award-line"></i>
                Team Records & Achievements
            </h2>

            <div className="records-grid">
                {/* Biggest Win */}
                <div className="record-card highlight">
                    <div className="record-icon">
                        <i className="ri-trophy-fill"></i>
                    </div>
                    <div className="record-content">
                        <h3>Biggest Win</h3>
                        <p className="record-value">{records.biggestWin.margin}</p>
                        <div className="record-details">
                            <p><strong>vs</strong> {records.biggestWin.against}</p>
                            <p><i className="ri-map-pin-line"></i> {records.biggestWin.venue}</p>
                            <p><i className="ri-calendar-line"></i> {records.biggestWin.year}</p>
                        </div>
                    </div>
                </div>

                {/* Highest Chase */}
                <div className="record-card highlight">
                    <div className="record-icon">
                        <i className="ri-arrow-up-circle-fill"></i>
                    </div>
                    <div className="record-content">
                        <h3>Highest Successful Chase</h3>
                        <p className="record-value">{records.highestChase.score}</p>
                        <div className="record-details">
                            <p><strong>vs</strong> {records.highestChase.against}</p>
                            <p><i className="ri-map-pin-line"></i> {records.highestChase.venue}</p>
                            <p><i className="ri-calendar-line"></i> {records.highestChase.year}</p>
                        </div>
                    </div>
                </div>

                {/* Longest Win Streak */}
                <div className="record-card">
                    <div className="record-icon win">
                        <i className="ri-fire-fill"></i>
                    </div>
                    <div className="record-content">
                        <h3>Longest Win Streak</h3>
                        <p className="record-value">{records.longestWinStreak}</p>
                        <p className="record-label">Consecutive Wins</p>
                    </div>
                </div>

                {/* Longest Loss Streak */}
                <div className="record-card">
                    <div className="record-icon loss">
                        <i className="ri-shut-down-line"></i>
                    </div>
                    <div className="record-content">
                        <h3>Longest Loss Streak</h3>
                        <p className="record-value">{records.longestLossStreak}</p>
                        <p className="record-label">Consecutive Losses</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecordsSection;