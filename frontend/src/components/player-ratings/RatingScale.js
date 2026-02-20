import React from 'react';

const RatingScale = () => {
    const scale = [
        { range: '9.0 - 10.0', label: 'Outstanding', stars: '⭐⭐⭐⭐⭐', color: '#22c55e', description: 'Match-winning performance, exceptional contribution' },
        { range: '8.0 - 8.9', label: 'Excellent', stars: '⭐⭐⭐⭐⭐', color: '#22c55e', description: 'Impressive performance, key contribution to team' },
        { range: '7.0 - 7.9', label: 'Good', stars: '⭐⭐⭐⭐', color: '#eab308', description: 'Solid performance, good contribution' },
        { range: '6.0 - 6.9', label: 'Average', stars: '⭐⭐⭐', color: '#eab308', description: 'Decent performance, average contribution' },
        { range: '5.0 - 5.9', label: 'Below Average', stars: '⭐⭐', color: '#ef4444', description: 'Below par performance, minimal impact' },
        { range: 'Below 5.0', label: 'Poor', stars: '⭐', color: '#ef4444', description: 'Poor performance, negative impact' }
    ];

    const battingCriteria = [
        { factor: 'Runs Scored', weight: 'High', description: '100+ runs: +3.0, 50+ runs: +1.5, 30+ runs: +0.5' },
        { factor: 'Strike Rate', weight: 'High', description: '150+: +2.0, 130+: +1.5, 100+: +1.0, <70: -1.5' },
        { factor: 'Not Out Bonus', weight: 'Medium', description: '+0.5 if not out with 30+ runs' },
        { factor: 'Match Winner', weight: 'High', description: '+1.0 if performance led to team victory' }
    ];

    const bowlingCriteria = [
        { factor: 'Wickets', weight: 'High', description: '5+ wickets: +3.5, 3+ wickets: +2.0, 2 wickets: +1.0' },
        { factor: 'Economy Rate', weight: 'High', description: '<4.5: +2.0, <6.0: +1.0, >10: -2.0, >8.5: -1.0' },
        { factor: 'Maidens', weight: 'Low', description: '+0.3 per maiden over bowled' },
        { factor: 'Match Winner', weight: 'High', description: '+1.0 if performance led to team victory' }
    ];

    return (
        <div className="rating-scale-section">
            <div className="section-header">
                <h2>
                    <i className="ri-information-line"></i>
                    Rating Scale Guide
                </h2>
                <p>Understanding how player ratings are calculated</p>
            </div>

            {/* Rating Scale */}
            <div className="scale-container">
                <h3>Rating Scale</h3>
                <div className="scale-grid">
                    {scale.map((item, idx) => (
                        <div key={idx} className="scale-card">
                            <div className="scale-header" style={{ borderColor: item.color }}>
                                <span className="scale-range">{item.range}</span>
                                <span className="scale-stars">{item.stars}</span>
                            </div>
                            <div className="scale-body">
                                <h4 style={{ color: item.color }}>{item.label}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Batting Criteria */}
            <div className="criteria-container">
                <h3>
                    <i className="ri-ball-pen-line"></i>
                    Batting Rating Criteria
                </h3>
                <div className="criteria-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Factor</th>
                                <th>Weight</th>
                                <th>Impact on Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {battingCriteria.map((criteria, idx) => (
                                <tr key={idx}>
                                    <td><strong>{criteria.factor}</strong></td>
                                    <td>
                                        <span className={`weight-badge ${criteria.weight.toLowerCase()}`}>
                                            {criteria.weight}
                                        </span>
                                    </td>
                                    <td>{criteria.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bowling Criteria */}
            <div className="criteria-container">
                <h3>
                    <i className="ri-basketball-line"></i>
                    Bowling Rating Criteria
                </h3>
                <div className="criteria-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Factor</th>
                                <th>Weight</th>
                                <th>Impact on Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bowlingCriteria.map((criteria, idx) => (
                                <tr key={idx}>
                                    <td><strong>{criteria.factor}</strong></td>
                                    <td>
                                        <span className={`weight-badge ${criteria.weight.toLowerCase()}`}>
                                            {criteria.weight}
                                        </span>
                                    </td>
                                    <td>{criteria.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Additional Notes */}
            <div className="notes-container">
                <h3>
                    <i className="ri-file-list-line"></i>
                    Additional Notes
                </h3>
                <div className="notes-grid">
                    <div className="note-card">
                        <h4>Base Rating</h4>
                        <p>All players start with a base rating of 5.0 out of 10</p>
                    </div>
                    <div className="note-card">
                        <h4>Maximum Rating</h4>
                        <p>The highest possible rating is 10.0, minimum is 1.0</p>
                    </div>
                    <div className="note-card">
                        <h4>Context Matters</h4>
                        <p>Ratings consider match situation, pressure, and impact on result</p>
                    </div>
                    <div className="note-card">
                        <h4>Format Variation</h4>
                        <p>Criteria may vary slightly between Test, ODI, and T20I formats</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingScale;