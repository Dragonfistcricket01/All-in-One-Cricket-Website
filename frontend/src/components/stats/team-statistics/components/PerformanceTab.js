import React from 'react';
import '../TeamStatistics.css';

const PerformanceTab = ({ stats, format }) => {
    if (!stats || !stats[format]) return null;

    const batting = stats[format].batting;
    const bowling = stats[format].bowling;

    return (
        <div className="performance-tab">
            {/* Batting Statistics */}
            <div className="performance-section">
                <h2 className="section-title batting-title">
                    <i className="ri-cricket-line"></i>
                    Batting Statistics
                </h2>

                <div className="stats-grid">
                    <div className="stat-box-team-statistics">
                        <div className="stat-icon batting">
                            <i className="ri-bar-chart-fill"></i>
                        </div>
                        <div className="stat-info">
                            <h4>Total Runs</h4>
                            <p className="stat-value">{batting.totalRuns.toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="stat-box-team-statistics">
                        <div className="stat-icon batting">
                            <i className="ri-line-chart-line"></i>
                        </div>
                        <div className="stat-info">
                            <h4>Average Score</h4>
                            <p className="stat-value">{batting.averageScore}</p>
                        </div>
                    </div>

                    <div className="stat-box-team-statistics">
                        <div className="stat-icon batting">
                            <i className="ri-arrow-up-line"></i>
                        </div>
                        <div className="stat-info">
                            <h4>{format === 'test' ? '400+ Scores' : '300+ Scores'}</h4>
                            <p className="stat-value">{format === 'test' ? batting.scoresOver400 : batting.scoresOver300}</p>
                        </div>
                    </div>

                    <div className="stat-box-team-statistics">
                        <div className="stat-icon batting">
                            <i className="ri-medal-line"></i>
                        </div>
                        <div className="stat-info">
                            <h4>Centuries</h4>
                            <p className="stat-value">{batting.centuries}</p>
                        </div>
                    </div>

                    <div className="stat-box-team-statistics">
                        <div className="stat-icon batting">
                            <i className="ri-basketball-line"></i>
                        </div>
                        <div className="stat-info">
                            <h4>Total Sixes</h4>
                            <p className="stat-value">{batting.sixes}</p>
                        </div>
                    </div>
                </div>

                {/* Highest and Lowest Totals */}
                <div className="extremes-grid">
                    <div className="extreme-card highest">
                        <div className="extreme-header">
                            <i className="ri-arrow-up-circle-fill"></i>
                            <h3>Highest Total</h3>
                        </div>
                        <div className="extreme-score">{batting.highestTotal.score}</div>
                        <div className="extreme-details">
                            <p><strong>vs</strong> {batting.highestTotal.against}</p>
                            <p><i className="ri-map-pin-line"></i> {batting.highestTotal.venue}</p>
                            <p><i className="ri-calendar-line"></i> {batting.highestTotal.year}</p>
                        </div>
                    </div>

                    <div className="extreme-card lowest">
                        <div className="extreme-header">
                            <i className="ri-arrow-down-circle-fill"></i>
                            <h3>Lowest Total</h3>
                        </div>
                        <div className="extreme-score">{batting.lowestTotal.score}</div>
                        <div className="extreme-details">
                            <p><strong>vs</strong> {batting.lowestTotal.against}</p>
                            <p><i className="ri-map-pin-line"></i> {batting.lowestTotal.venue}</p>
                            <p><i className="ri-calendar-line"></i> {batting.lowestTotal.year}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bowling Statistics */}
            <div className="performance-section">
                <h2 className="section-title bowling-title">
                    <i className="ri-focus-3-line"></i>
                    Bowling Statistics
                </h2>

                <div className="stats-grid">
                    <div className="stat-box-team-statistics">
                        <div className="stat-icon bowling">
                            <i className="ri-flashlight-fill"></i>
                        </div>
                        <div className="stat-info">
                            <h4>Total Wickets</h4>
                            <p className="stat-value">{bowling.totalWickets.toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="stat-box-team-statistics">
                        <div className="stat-icon bowling">
                            <i className="ri-line-chart-line"></i>
                        </div>
                        <div className="stat-info">
                            <h4>Average Wickets</h4>
                            <p className="stat-value">{bowling.averageWickets}</p>
                        </div>
                    </div>

                    <div className="stat-box-team-statistics">
                        <div className="stat-icon bowling">
                            <i className="ri-trophy-fill"></i>
                        </div>
                        <div className="stat-info">
                            <h4>5 Wicket Hauls</h4>
                            <p className="stat-value">{bowling.fiveWicketHauls}</p>
                        </div>
                    </div>

                    {format === 'test' && bowling.tenWicketHauls !== undefined && (
                        <div className="stat-box-team-statistics">
                            <div className="stat-icon bowling">
                                <i className="ri-star-fill"></i>
                            </div>
                            <div className="stat-info">
                                <h4>10 Wicket Hauls</h4>
                                <p className="stat-value">{bowling.tenWicketHauls}</p>
                            </div>
                        </div>
                    )}

                    {(format === 'odi' || format === 't20i') && bowling.economyRate !== undefined && (
                        <div className="stat-box-team-statistics">
                            <div className="stat-icon bowling">
                                <i className="ri-speed-line"></i>
                            </div>
                            <div className="stat-info">
                                <h4>Economy Rate</h4>
                                <p className="stat-value">{bowling.economyRate}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Best Bowling Figures */}
                <div className="best-figures-card">
                    <div className="figures-header">
                        <i className="ri-award-fill"></i>
                        <h3>Best Bowling Figures</h3>
                    </div>
                    <div className="figures-content">
                        <div className="figures-score">
                            {bowling.bestFigures.wickets}/{bowling.bestFigures.runs}
                        </div>
                        <div className="figures-details">
                            <p><strong>{bowling.bestFigures.player}</strong></p>
                            <p><strong>vs</strong> {bowling.bestFigures.against}</p>
                            <p><i className="ri-calendar-line"></i> {bowling.bestFigures.year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceTab;