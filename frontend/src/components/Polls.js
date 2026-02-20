import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Features.css';

function Polls({ user, onLogout }) {
    const [polls, setPolls] = useState([]);
    const [votedPolls, setVotedPolls] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchPolls();
    }, []);

    const fetchPolls = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/polls');
            setPolls(response.data);

            // Check which polls user has voted on
            const voteChecks = {};
            for (const poll of response.data) {
                try {
                    const voteCheck = await axios.get(
                        `http://localhost:5000/api/polls/${poll.id}/check-vote`,
                        { headers: { Authorization: `Bearer ${token}` } }
                    );
                    if (voteCheck.data.hasVoted) {
                        voteChecks[poll.id] = voteCheck.data.optionId;
                    }
                } catch (err) {
                    console.error('Error checking vote:', err);
                }
            }
            setVotedPolls(voteChecks);
            setLoading(false);
        } catch (err) {
            setError('Failed to load polls');
            setLoading(false);
        }
    };

    const handleVote = async (pollId, optionId) => {
        if (votedPolls[pollId]) return;

        try {
            const token = localStorage.getItem('token');
            await axios.post(
                `http://localhost:5000/api/polls/${pollId}/vote`,
                { optionId },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Refresh polls
            fetchPolls();
        } catch (err) {
            alert(err.response?.data?.error || 'Failed to vote');
        }
    };

    const getTotalVotes = (options) => {
        return options.reduce((sum, opt) => sum + opt.votes, 0);
    };

    const getPercentage = (votes, total) => {
        return total === 0 ? 0 : Math.round((votes / total) * 100);
    };

    if (loading) return <div className="loading">Loading polls...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div>
            <div className="content-container">
                {/* Back Button */}
                <Link to="/dashboard" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ff7800',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                }}>
                    ← Back to Dashboard
                </Link>

                <h1 className="page-title">📊 Cricket Polls</h1>
                <p className="page-subtitle">Vote on your favorite cricket topics</p>

                <div className="polls-container">
                    {polls.map((poll) => {
                        const totalVotes = getTotalVotes(poll.options);
                        const hasVoted = votedPolls[poll.id];

                        return (
                            <div key={poll.id} className="poll-card">
                                <h3 className="poll-question">{poll.question}</h3>

                                <div className="poll-options">
                                    {poll.options.map((option) => {
                                        const percentage = getPercentage(option.votes, totalVotes);
                                        const isSelected = hasVoted === option.id;

                                        return (
                                            <div
                                                key={option.id}
                                                className={`poll-option ${hasVoted ? 'voted' : 'hoverable'} ${isSelected ? 'selected' : ''}`}
                                                onClick={() => !hasVoted && handleVote(poll.id, option.id)}
                                            >
                                                <div className="option-content">
                                                    <span className="option-text">{option.text}</span>
                                                    {hasVoted && (
                                                        <span className="option-percentage">{percentage}%</span>
                                                    )}
                                                </div>
                                                {hasVoted && (
                                                    <div className="option-bar">
                                                        <div
                                                            className="option-bar-fill"
                                                            style={{ width: `${percentage}%` }}
                                                        ></div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {hasVoted && (
                                    <p className="poll-total">Total votes: {totalVotes}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Polls;