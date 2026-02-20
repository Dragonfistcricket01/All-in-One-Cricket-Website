import React from 'react';

const ManhattanChart = ({ data }) => {
    if (!data || data.length === 0) {
        return <div className="chart-empty">No data available</div>;
    }

    const maxRuns = Math.max(...data, 15);

    return (
        <div className="manhattan-chart">
            <div className="chart-bars">
                {data.map((runs, idx) => {
                    const height = (runs / maxRuns) * 100;
                    const colorClass = runs >= 15 ? 'high' : runs >= 10 ? 'medium-high' : runs >= 6 ? 'medium' : 'low';

                    return (
                        <div key={idx} className="bar-wrapper">
                            <div
                                className={`bar ${colorClass}`}
                                style={{ height: `${height}%` }}
                            >
                                <span className="bar-value">{runs}</span>
                            </div>
                            <span className="bar-label">{idx + 1}</span>
                        </div>
                    );
                })}
            </div>
            <div className="chart-axis">
                <span>Overs</span>
            </div>
        </div>
    );
};

export default ManhattanChart;