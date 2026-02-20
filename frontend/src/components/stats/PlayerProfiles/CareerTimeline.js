import React from 'react';
import './CareerTimeline.css';

const CareerTimeline = ({ milestones }) => {
    return (
        <div className="career-timeline-player-profiles">
            <h2>
                <i className="ri-time-line"></i>
                Career Timeline
            </h2>
            <p className="timeline-subtitle-player-profiles">Major milestones and achievements throughout the career</p>

            <div className="timeline-container-player-profiles">
                {milestones.map((milestone, index) => (
                    <div key={index} className="timeline-item-player-profiles">
                        <div className="timeline-marker-player-profiles">
                            <div className="marker-dot-player-profiles"></div>
                            {index !== milestones.length - 1 && <div className="marker-line-player-profiles"></div>}
                        </div>
                        <div className="timeline-content-player-profiles">
                            <div className="timeline-date-player-profiles">
                                <i className="ri-calendar-event-line"></i>
                                {new Date(milestone.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <h3 className="timeline-title-player-profiles">{milestone.title}</h3>
                            <p className="timeline-description-player-profiles">{milestone.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerTimeline;