import React from 'react';
import './TeamRankings.css';

const FormatFilter = ({ selectedFormat, onSelectFormat }) => {
    const formats = [
        { id: 'test', name: 'Test', icon: 'ri-trophy-line', color: 'var(--accent)' },
        { id: 'odi', name: 'ODI', icon: 'ri-trophy-fill', color: 'var(--accent)' },
        { id: 't20i', name: 'T20I', icon: 'ri-flashlight-fill', color: 'var(--accent)' },
        { id: 'wtc', name: 'WTC', icon: 'ri-trophy-fill', color: 'var(--accent)' }
    ];

    return (
        <div className="format-filter-team-rankings">
            <div className="format-filter-container-team-rankings">
                {formats.map(format => (
                    <button
                        key={format.id}
                        className={`format-btn-team-rankings ${selectedFormat === format.id ? 'active' : ''}`}
                        onClick={() => onSelectFormat(format.id)}
                        style={{
                            '--format-color': format.color
                        }}
                    >
                        <i className={format.icon}></i>
                        <span>{format.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FormatFilter;