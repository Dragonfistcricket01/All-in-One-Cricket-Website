import React from 'react';

const WormChart = ({ data }) => {
    if (!data || data.length === 0) {
        return <div className="chart-empty">No data available</div>;
    }

    // Generate cumulative runs data
    const team1Data = [0, 15, 32, 48, 65, 78, 95, 112, 128, 145, 160, 180];
    const team2Data = [0, 12, 28, 42, 58, 72, 85, 98, 115, 132, 145];

    const maxRuns = Math.max(...team1Data, ...team2Data);
    const maxOvers = Math.max(team1Data.length, team2Data.length);

    return (
        <div className="worm-chart">
            <svg width="100%" height="200" viewBox="0 0 400 200">
                {/* Grid lines */}
                {[0, 50, 100, 150, 200].map((value, idx) => {
                    const y = 180 - (value / maxRuns) * 180;
                    return (
                        <g key={idx}>
                            <line
                                x1="30"
                                y1={y}
                                x2="390"
                                y2={y}
                                stroke="var(--border-color)"
                                strokeWidth="1"
                                strokeDasharray="2,2"
                            />
                            <text
                                x="10"
                                y={y + 5}
                                fill="var(--text-secondary)"
                                fontSize="10"
                            >
                                {value}
                            </text>
                        </g>
                    );
                })}

                {/* Team 1 Line */}
                <polyline
                    points={team1Data.map((runs, idx) => {
                        const x = 30 + (idx / (maxOvers - 1)) * 360;
                        const y = 180 - (runs / maxRuns) * 180;
                        return `${x},${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="var(--primary-color)"
                    strokeWidth="3"
                />

                {/* Team 2 Line */}
                <polyline
                    points={team2Data.map((runs, idx) => {
                        const x = 30 + (idx / (maxOvers - 1)) * 360;
                        const y = 180 - (runs / maxRuns) * 180;
                        return `${x},${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="var(--secondary-color)"
                    strokeWidth="3"
                />

                {/* X-axis labels */}
                {[0, 5, 10, 15, 20].map((over, idx) => {
                    const x = 30 + (over / 20) * 360;
                    return (
                        <text
                            key={idx}
                            x={x}
                            y="195"
                            fill="var(--text-secondary)"
                            fontSize="10"
                            textAnchor="middle"
                        >
                            {over}
                        </text>
                    );
                })}
            </svg>

            <div className="chart-legend">
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                    <span>Australia</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: 'var(--secondary-color)' }}></span>
                    <span>India</span>
                </div>
            </div>
        </div>
    );
};

export default WormChart;