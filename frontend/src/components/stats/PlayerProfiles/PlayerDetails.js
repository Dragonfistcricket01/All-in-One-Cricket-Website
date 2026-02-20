import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlayerById } from '../../../services/cricketAPI';
import CareerTimeline from './CareerTimeline';
import './PlayerDetails.css';

const PlayerDetails = () => {
    const { playerId } = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeFormat, setActiveFormat] = useState('test');

    useEffect(() => {
        fetchPlayerDetails();
    }, [playerId]);

    const fetchPlayerDetails = async () => {
        setLoading(true);
        try {
            const data = await getPlayerById(playerId);
            setPlayer(data);
        } catch (error) {
            console.error('Error fetching player details:', error);
        }
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="player-details-page-player-profiles">
                <div className="loading-container-player-profiles">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading player details...</p>
                </div>
            </div>
        );
    }

    if (!player) {
        return (
            <div className="player-details-page-player-profiles">
                <div className="not-found-container-player-profiles">
                    <i className="ri-user-unfollow-line"></i>
                    <h2>Player Not Found</h2>
                    <button onClick={() => navigate('/stats/players')} className="back-btn-player-profiles">
                        <i className="ri-arrow-left-line"></i>
                        Back to Players
                    </button>
                </div>
            </div>
        );
    }

    const formatStats = player.careerStats[activeFormat];

    return (
        <div className="player-details-page-player-profiles">
            {/* Player Header */}
            <div className="player-header-player-profiles">
                <button onClick={() => navigate('/stats/players')} className="back-button-player-profiles">
                    <i className="ri-arrow-left-line"></i>
                    Back to Players
                </button>

                <div className="player-header-content-player-profiles">
                    <div className="player-header-left-player-profiles">
                        <div className="player-image-large-player-profiles">
                            <img
                                src={player.image || '/frontend/src/assets/player_profile/default.png'}
                                alt={player.name}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/400x400?text=' + player.name.charAt(0);
                                }}
                            />
                            {player.jerseyNumber && (
                                <div className="jersey-number-player-profiles">{player.jerseyNumber}</div>
                            )}
                        </div>
                    </div>

                    <div className="player-header-right-player-profiles">
                        <div className="player-country-info-player-profiles">
                            {player.flag ? (
                                <img
                                    src={player.flag}
                                    alt={player.country}
                                    className="flag-large-image-player-profiles"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        const fallback = document.createElement('span');
                                        fallback.className = 'flag-large-player-profiles';
                                        fallback.textContent = player.flagEmoji || '🏴';
                                        e.target.parentNode.insertBefore(fallback, e.target);
                                    }}
                                />
                            ) : (
                                <span className="flag-large-player-profiles">{player.flagEmoji || '🏴'}</span>
                            )}
                            <span className="country-name-player-profiles">{player.country}</span>
                        </div>
                        <h1 className="player-name-large-player-profiles">{player.name}</h1>
                        <div className="player-basic-info-player-profiles">
                            <div className="info-item-player-profiles">
                                <i className="ri-user-line"></i>
                                <span>{player.role}</span>
                            </div>
                            <div className="info-item-player-profiles">
                                <i className="ri-calendar-line"></i>
                                <span>{player.age} years</span>
                            </div>
                            <div className="info-item-player-profiles">
                                <i className="ri-cake-line"></i>
                                <span>{new Date(player.dateOfBirth).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                            </div>
                        </div>
                        <div className="player-styles-info-player-profiles">
                            <div className="style-box-player-profiles">
                                {/*<i className="ri-hand-heart-line"></i>*/}
                                <div>
                                    <span className="style-label-player-profiles">Batting</span>
                                    <span className="style-value-player-profiles">{player.battingStyle}</span>
                                </div>
                            </div>
                            {player.bowlingStyle !== 'N/A' && (
                                <div className="style-box-player-profiles">
                                    {/*<i className="ri-ball-pen-line"></i>*/}
                                    <div>
                                        <span className="style-label-player-profiles">Bowling</span>
                                        <span className="style-value-player-profiles">{player.bowlingStyle}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Debut Information */}
                        <div className="debut-info-player-profiles">
                            <h3>
                                <i className="ri-trophy-line"></i>
                                Debut Dates
                            </h3>
                            <div className="debut-grid-player-profiles">
                                {player.debut.test && (
                                    <div className="debut-item-player-profiles">
                                        <span className="debut-format-player-profiles">Test</span>
                                        <span className="debut-date-player-profiles">
                                            {new Date(player.debut.test).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                )}
                                {player.debut.odi && (
                                    <div className="debut-item-player-profiles">
                                        <span className="debut-format-player-profiles">ODI</span>
                                        <span className="debut-date-player-profiles">
                                            {new Date(player.debut.odi).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                )}
                                {player.debut.t20i && (
                                    <div className="debut-item-player-profiles">
                                        <span className="debut-format-player-profiles">T20I</span>
                                        <span className="debut-date-player-profiles">
                                            {new Date(player.debut.t20i).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Format Tabs */}
            <div className="format-tabs-player-profiles">
                <button
                    className={`format-tab-player-profiles ${activeFormat === 'test' ? 'active' : ''}`}
                    onClick={() => setActiveFormat('test')}
                >
                    <span className="tab-icon-player-profiles"></span>
                    <span>Test</span>
                </button>
                <button
                    className={`format-tab-player-profiles ${activeFormat === 'odi' ? 'active' : ''}`}
                    onClick={() => setActiveFormat('odi')}
                >
                    <span className="tab-icon-player-profiles"></span>
                    <span>ODI</span>
                </button>
                <button
                    className={`format-tab-player-profiles ${activeFormat === 't20i' ? 'active' : ''}`}
                    onClick={() => setActiveFormat('t20i')}
                >
                    <span className="tab-icon-player-profiles"></span>
                    <span>T20I</span>
                </button>
            </div>

            {/* Career Statistics */}
            <div className="stats-container-player-profiles">
                <div className="stats-section-player-profiles">
                    <h2>
                        <i className="ri-bar-chart-box-line"></i>
                        Career Statistics - {activeFormat.toUpperCase()}
                    </h2>

                    {/* Batting Stats */}
                    <div className="stats-category-player-profiles">
                        <h3>
                            {/*<i className="ri-user-3-line"></i>*/}
                            Batting Statistics
                        </h3>
                        <div className="stats-grid-player-profiles">
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Matches</span>
                                <span className="stat-value-player-profiles">{formatStats.matches}</span>
                            </div>
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Innings</span>
                                <span className="stat-value-player-profiles">{formatStats.innings}</span>
                            </div>
                            <div className="stat-card-player-profiles highlight">
                                <span className="stat-label-player-profiles">Runs</span>
                                <span className="stat-value-player-profiles">{formatStats.runs.toLocaleString()}</span>
                            </div>
                            <div className="stat-card-player-profiles highlight">
                                <span className="stat-label-player-profiles">Average</span>
                                <span className="stat-value-player-profiles">{formatStats.average}</span>
                            </div>
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Strike Rate</span>
                                <span className="stat-value-player-profiles">{formatStats.strikeRate}</span>
                            </div>
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Highest Score</span>
                                <span className="stat-value-player-profiles">{formatStats.highestScore}</span>
                            </div>
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Centuries</span>
                                <span className="stat-value-player-profiles">{formatStats.centuries}</span>
                            </div>
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Half Centuries</span>
                                <span className="stat-value-player-profiles">{formatStats.halfCenturies}</span>
                            </div>
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Fours</span>
                                <span className="stat-value-player-profiles">{formatStats.fours}</span>
                            </div>
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Sixes</span>
                                <span className="stat-value-player-profiles">{formatStats.sixes}</span>
                            </div>
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Balls Faced</span>
                                <span className="stat-value-player-profiles">{formatStats.ballsFaced.toLocaleString()}</span>
                            </div>
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Not Outs</span>
                                <span className="stat-value-player-profiles">{formatStats.notOuts}</span>
                            </div>
                        </div>
                    </div>

                    {/* Bowling Stats (if applicable) */}
                    {formatStats.wickets > 0 && (
                        <div className="stats-category-player-profiles">
                            <h3>
                                {/*<i className="ri-ball-pen-line"></i>*/}
                                Bowling Statistics
                            </h3>
                            <div className="stats-grid-player-profiles">
                                <div className="stat-card-player-profiles">
                                    <span className="stat-label-player-profiles">Wickets</span>
                                    <span className="stat-value-player-profiles">{formatStats.wickets}</span>
                                </div>
                                <div className="stat-card-player-profiles">
                                    <span className="stat-label-player-profiles">Average</span>
                                    <span className="stat-value-player-profiles">{formatStats.bowlingAverage}</span>
                                </div>
                                <div className="stat-card-player-profiles">
                                    <span className="stat-label-player-profiles">Economy</span>
                                    <span className="stat-value-player-profiles">{formatStats.economy}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Fielding Stats */}
                    <div className="stats-category-player-profiles">
                        <h3>
                            {/*<i className="ri-hand-coin-line"></i>*/}
                            Fielding Statistics
                        </h3>
                        <div className="stats-grid-player-profiles">
                            <div className="stat-card-player-profiles">
                                <span className="stat-label-player-profiles">Catches</span>
                                <span className="stat-value-player-profiles">{formatStats.catches}</span>
                            </div>
                            {formatStats.stumpings > 0 && (
                                <div className="stat-card-player-profiles">
                                    <span className="stat-label-player-profiles">Stumpings</span>
                                    <span className="stat-value-player-profiles">{formatStats.stumpings}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="achievements-section-player-profiles">
                    <h2>
                        <i className="ri-trophy-line"></i>
                        Career Achievements
                    </h2>
                    <div className="achievements-list-player-profiles">
                        {player.achievements.map((achievement, index) => (
                            <div key={index} className="achievement-item-player-profiles">
                                <i className="ri-medal-line"></i>
                                <span>{achievement}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Matches */}
                <div className="recent-matches-section-player-profiles">
                    <h2>
                        <i className="ri-time-line"></i>
                        Recent Matches
                    </h2>
                    <div className="matches-list-player-profiles">
                        {player.recentMatches.map((match, index) => (
                            <div key={index} className="match-item-player-profiles">
                                <div className="match-date-player-profiles">
                                    {new Date(match.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </div>
                                <div className="match-format-badge-player-profiles">{match.format}</div>
                                <div className="match-details-player-profiles">
                                    <div className="match-opponent-player-profiles">vs {match.opponent}</div>
                                    <div className="match-venue-player-profiles">{match.venue}</div>
                                </div>
                                <div className="match-score-player-profiles">{match.score}</div>
                                <div className={`match-result-player-profiles ${match.result.includes('Won') ? 'won' : match.result.includes('Lost') ? 'lost' : 'drawn'}`}>
                                    {match.result}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career Timeline */}
                <div className="timeline-section">
                    <CareerTimeline milestones={player.milestones} />
                </div>
            </div>
        </div>
    );
};

export default PlayerDetails;