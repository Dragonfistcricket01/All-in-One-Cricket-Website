import React from 'react';

const MatchDetailsModal = ({ match, onClose }) => {
    const hasScorecard = match.scorecard !== undefined;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{match.tournament}</h2>
                    <button className="close-btn" onClick={onClose}>
                        <i className="ri-close-line"></i>
                    </button>
                </div>

                <div className="modal-body">
                    {/* Match Summary */}
                    <div className="match-summary-section">
                        <div className="teams-display">
                            <div className="team">
                                <span className="flag">{match.team1.flag}</span>
                                <span className="name">{match.team1.name}</span>
                                {match.team1.score && (
                                    <span className="score">{match.team1.score}</span>
                                )}
                            </div>
                            <div className="vs">vs</div>
                            <div className="team">
                                <span className="flag">{match.team2.flag}</span>
                                <span className="name">{match.team2.name}</span>
                                {match.team2.score && (
                                    <span className="score">{match.team2.score}</span>
                                )}
                            </div>
                        </div>

                        {match.result && (
                            <div className="result-banner">
                                <i className="ri-trophy-fill"></i>
                                <span>{match.result}</span>
                            </div>
                        )}

                        <div className="match-info-grid">
                            <div className="info-item">
                                <i className="ri-calendar-line"></i>
                                <span>{match.date}</span>
                            </div>
                            <div className="info-item">
                                <i className="ri-map-pin-line"></i>
                                <span>{match.venue}</span>
                            </div>
                            {match.playerOfMatch && (
                                <div className="info-item">
                                    <i className="ri-star-fill"></i>
                                    <span>Player of Match: {match.playerOfMatch}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Scorecard */}
                    {hasScorecard && match.scorecard && (
                        <div className="scorecard-section">
                            <h3>Full Scorecard</h3>

                            {/* Toss */}
                            {match.scorecard.toss && (
                                <div className="toss-info">
                                    <i className="ri-coin-line"></i>
                                    <span>{match.scorecard.toss}</span>
                                </div>
                            )}

                            {/* First Innings */}
                            <div className="innings-card">
                                <div className="innings-header">
                                    <h4>{match.team2.flag} {match.team2.name} - {match.scorecard.team1Innings.total}</h4>
                                    <span className="overs">({match.scorecard.team1Innings.overs} overs)</span>
                                </div>

                                {/* Batting */}
                                <div className="batting-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Batsman</th>
                                                <th>R</th>
                                                <th>B</th>
                                                <th>4s</th>
                                                <th>6s</th>
                                                <th>SR</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {match.scorecard.team1Innings.batting.map((player, idx) => (
                                                <tr key={idx}>
                                                    <td>
                                                        {player.name}
                                                        {player.out && <span className="out-info"> {player.out}</span>}
                                                    </td>
                                                    <td>{player.runs}</td>
                                                    <td>{player.balls}</td>
                                                    <td>{player.fours}</td>
                                                    <td>{player.sixes}</td>
                                                    <td>{player.sr}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Extras */}
                                {match.scorecard.team1Innings.extras && (
                                    <div className="extras-info">
                                        Extras: {match.scorecard.team1Innings.extras.total}
                                        (wd {match.scorecard.team1Innings.extras.wides},
                                        nb {match.scorecard.team1Innings.extras.noBalls},
                                        b {match.scorecard.team1Innings.extras.byes},
                                        lb {match.scorecard.team1Innings.extras.legByes})
                                    </div>
                                )}

                                {/* Bowling */}
                                <div className="bowling-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Bowler</th>
                                                <th>O</th>
                                                <th>M</th>
                                                <th>R</th>
                                                <th>W</th>
                                                <th>Econ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {match.scorecard.team1Innings.bowling.map((player, idx) => (
                                                <tr key={idx}>
                                                    <td>{player.name}</td>
                                                    <td>{player.overs}</td>
                                                    <td>{player.maidens}</td>
                                                    <td>{player.runs}</td>
                                                    <td>{player.wickets}</td>
                                                    <td>{player.economy}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Fall of Wickets */}
                                {match.scorecard.team1Innings.fow && (
                                    <div className="fow-section">
                                        <h5>Fall of Wickets</h5>
                                        <div className="fow-list">
                                            {match.scorecard.team1Innings.fow.map((wicket, idx) => (
                                                <span key={idx} className="fow-item">
                                                    {wicket.score}/{wicket.wicket} ({wicket.player}, {wicket.over} ov)
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Second Innings */}
                            <div className="innings-card">
                                <div className="innings-header">
                                    <h4>{match.team1.flag} {match.team1.name} - {match.scorecard.team2Innings.total}</h4>
                                    <span className="overs">({match.scorecard.team2Innings.overs} overs)</span>
                                </div>

                                {/* Batting */}
                                <div className="batting-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Batsman</th>
                                                <th>R</th>
                                                <th>B</th>
                                                <th>4s</th>
                                                <th>6s</th>
                                                <th>SR</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {match.scorecard.team2Innings.batting.map((player, idx) => (
                                                <tr key={idx}>
                                                    <td>
                                                        {player.name}
                                                        {player.out && <span className="out-info"> {player.out}</span>}
                                                    </td>
                                                    <td>{player.runs}</td>
                                                    <td>{player.balls}</td>
                                                    <td>{player.fours}</td>
                                                    <td>{player.sixes}</td>
                                                    <td>{player.sr}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Extras */}
                                {match.scorecard.team2Innings.extras && (
                                    <div className="extras-info">
                                        Extras: {match.scorecard.team2Innings.extras.total}
                                        (wd {match.scorecard.team2Innings.extras.wides},
                                        nb {match.scorecard.team2Innings.extras.noBalls},
                                        b {match.scorecard.team2Innings.extras.byes},
                                        lb {match.scorecard.team2Innings.extras.legByes})
                                    </div>
                                )}

                                {/* Bowling */}
                                <div className="bowling-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Bowler</th>
                                                <th>O</th>
                                                <th>M</th>
                                                <th>R</th>
                                                <th>W</th>
                                                <th>Econ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {match.scorecard.team2Innings.bowling.map((player, idx) => (
                                                <tr key={idx}>
                                                    <td>{player.name}</td>
                                                    <td>{player.overs}</td>
                                                    <td>{player.maidens}</td>
                                                    <td>{player.runs}</td>
                                                    <td>{player.wickets}</td>
                                                    <td>{player.economy}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Fall of Wickets */}
                                {match.scorecard.team2Innings.fow && (
                                    <div className="fow-section">
                                        <h5>Fall of Wickets</h5>
                                        <div className="fow-list">
                                            {match.scorecard.team2Innings.fow.map((wicket, idx) => (
                                                <span key={idx} className="fow-item">
                                                    {wicket.score}/{wicket.wicket} ({wicket.player}, {wicket.over} ov)
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Match Summary */}
                            {match.scorecard.matchSummary && (
                                <div className="match-summary-text">
                                    <i className="ri-information-line"></i>
                                    <p>{match.scorecard.matchSummary}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MatchDetailsModal;