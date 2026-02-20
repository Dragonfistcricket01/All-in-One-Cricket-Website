import React from 'react';
import '../TeamStatistics.css';

const OverviewTab = ({ stats, format }) => {
    if (!stats || !stats[format]) return null;

    const overview = stats[format].overview;

    const getResultPercentage = (count) => {
        return ((count / overview.totalMatches) * 100).toFixed(1);
    };

    const getFormIcon = (result) => {
        switch (result) {
            case 'W': return { icon: 'ri-checkbox-circle-fill', color: '#10b981', label: 'Won' };
            case 'L': return { icon: 'ri-close-circle-fill', color: '#ef4444', label: 'Lost' };
            case 'D': return { icon: 'ri-record-circle-fill', color: '#f59e0b', label: 'Drawn' };
            case 'T': return { icon: 'ri-equal-fill', color: '#3b82f6', label: 'Tied' };
            default: return { icon: 'ri-record-circle-fill', color: '#6b7280', label: 'No Result' };
        }
    };

    return (
        <div className="overview-tab">
            {/* Quick Stats Cards */}
            <div className="quick-stats-grid">
                <div className="quick-stat-card">
                    <div className="stat-icon matches">
                        <i className="ri-bar-chart-box-line"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{overview.totalMatches}</h3>
                        <p>Total Matches</p>
                    </div>
                </div>

                <div className="quick-stat-card">
                    <div className="stat-icon wins">
                        <i className="ri-trophy-line"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{overview.won}</h3>
                        <p>Matches Won</p>
                    </div>
                </div>

                <div className="quick-stat-card">
                    <div className="stat-icon percentage">
                        <i className="ri-percent-line"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{overview.winPercentage}%</h3>
                        <p>Win Percentage</p>
                    </div>
                </div>

                <div className="quick-stat-card">
                    <div className="stat-icon streak">
                        <i className="ri-fire-line"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{overview.currentStreak.count}</h3>
                        <p>{overview.currentStreak.type === 'winning' ? 'Win' : 'Loss'} Streak</p>
                    </div>
                </div>
            </div>

            {/* Results Breakdown */}
            <div className="results-section">
                <h2 className="section-title">
                    <i className="ri-pie-chart-line"></i>
                    Results Breakdown
                </h2>
                <div className="results-grid">
                    <div className="result-card won">
                        <div className="result-header">
                            <i className="ri-checkbox-circle-fill"></i>
                            <h3>Won</h3>
                        </div>
                        <div className="result-stats">
                            <div className="result-count">{overview.won}</div>
                            <div className="result-percent">{getResultPercentage(overview.won)}%</div>
                        </div>
                        <div className="result-bar">
                            <div
                                className="result-fill won-fill"
                                style={{ width: `${getResultPercentage(overview.won)}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="result-card lost">
                        <div className="result-header">
                            <i className="ri-close-circle-fill"></i>
                            <h3>Lost</h3>
                        </div>
                        <div className="result-stats">
                            <div className="result-count">{overview.lost}</div>
                            <div className="result-percent">{getResultPercentage(overview.lost)}%</div>
                        </div>
                        <div className="result-bar">
                            <div
                                className="result-fill lost-fill"
                                style={{ width: `${getResultPercentage(overview.lost)}%` }}
                            ></div>
                        </div>
                    </div>

                    {overview.drawn !== undefined && (
                        <div className="result-card drawn">
                            <div className="result-header">
                                <i className="ri-record-circle-fill"></i>
                                <h3>Drawn</h3>
                            </div>
                            <div className="result-stats">
                                <div className="result-count">{overview.drawn}</div>
                                <div className="result-percent">{getResultPercentage(overview.drawn)}%</div>
                            </div>
                            <div className="result-bar">
                                <div
                                    className="result-fill drawn-fill"
                                    style={{ width: `${getResultPercentage(overview.drawn)}%` }}
                                ></div>
                            </div>
                        </div>
                    )}

                    {overview.tied !== undefined && (
                        <div className="result-card tied">
                            <div className="result-header">
                                <i className="ri-equal-fill"></i>
                                <h3>Tied</h3>
                            </div>
                            <div className="result-stats">
                                <div className="result-count">{overview.tied}</div>
                                <div className="result-percent">{getResultPercentage(overview.tied)}%</div>
                            </div>
                            <div className="result-bar">
                                <div
                                    className="result-fill tied-fill"
                                    style={{ width: `${getResultPercentage(overview.tied)}%` }}
                                ></div>
                            </div>
                        </div>
                    )}

                    {overview.noResult !== undefined && overview.noResult > 0 && (
                        <div className="result-card no-result">
                            <div className="result-header">
                                <i className="ri-time-line"></i>
                                <h3>No Result</h3>
                            </div>
                            <div className="result-stats">
                                <div className="result-count">{overview.noResult}</div>
                                <div className="result-percent">{getResultPercentage(overview.noResult)}%</div>
                            </div>
                            <div className="result-bar">
                                <div
                                    className="result-fill no-result-fill"
                                    style={{ width: `${getResultPercentage(overview.noResult)}%` }}
                                ></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Current Form */}
            <div className="current-form-section">
                <h2 className="section-title">
                    <i className="ri-pulse-line"></i>
                    Current Form (Last 10 Matches)
                </h2>
                <div className="form-indicators-large">
                    {overview.currentForm.map((result, index) => {
                        const formData = getFormIcon(result);
                        return (
                            <div
                                key={index}
                                className="form-indicator-large"
                                style={{ borderColor: formData.color }}
                                title={formData.label}
                            >
                                <i className={formData.icon} style={{ color: formData.color }}></i>
                                <span className="form-label">{result}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OverviewTab;