import React, { useState, useEffect } from 'react';
import './DailyRewards.css';

const DailyRewards = () => {
    const [rewardData, setRewardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [claiming, setClaiming] = useState(false);
    const [showClaimAnimation, setShowClaimAnimation] = useState(false);
    const [claimedReward, setClaimedReward] = useState(null);
    const [error, setError] = useState(null);

    // Hardcode user ID for testing
    const userId = '1'; // Using user ID 1 from your database

    // Reward calendar (7 days)
    const rewardCalendar = [
        { day: 1, coins: 10, badge: null, emoji: '🪙', color:'var(--text-primary)'},
        { day: 2, coins: 15, badge: null, emoji: '🪙', color:'var(--text-primary)'},
        { day: 3, coins: 20, badge: '🥉', emoji: '🪙', color:'var(--text-primary)'},
        { day: 4, coins: 25, badge: null, emoji: '🪙', color:'var(--text-primary)'},
        { day: 5, coins: 30, badge: '🥈', emoji: '🪙', color:'var(--text-primary)'},
        { day: 6, coins: 40, badge: null, emoji: '🪙', color:'var(--text-primary)'},
        { day: 7, coins: 100, badge: '🏆', emoji: '💰', color:'var(--text-primary)'}
    ];

    // Load reward status
    useEffect(() => {
        loadRewardStatus();
    }, []);

    const loadRewardStatus = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`http://localhost:5000/api/daily-rewards/status/${userId}`);
            const data = await response.json();

            console.log('API Response:', data);

            if (data.success) {
                setRewardData(data.data);
            } else {
                setError(data.error || 'Failed to load rewards');
            }

            {/*----------// ADD THIS LINE TO FORCE NULL FOR NO DATA TESTING:
            setRewardData(null);  // ← Forces null state-----------------*/}

        } catch (error) {
            console.error('Error loading rewards:', error);
            setError('Failed to connect to server. Please check if backend is running.');
        } finally {
            setLoading(false);
        }
    };

    const handleClaimReward = async () => {
        if (!rewardData || !rewardData.canClaim || claiming) return;

        try {
            setClaiming(true);
            const response = await fetch(`http://localhost:5000/api/daily-rewards/claim/${userId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await response.json();

            if (data.success) {
                setClaimedReward(data.data.reward);
                setShowClaimAnimation(true);

                // Hide animation after 3 seconds
                setTimeout(() => {
                    setShowClaimAnimation(false);
                }, 3000);

                // Reload status
                setTimeout(() => {
                    loadRewardStatus();
                    setClaimedReward(null);
                }, 3100);
            } else {
                alert(data.error || 'Failed to claim reward');
            }
        } catch (error) {
            console.error('Error claiming reward:', error);
            alert('Failed to claim reward. Please try again.');
        } finally {
            setClaiming(false);
        }
    };

    // Loading state
    if (loading) {
        return (
            <div className="daily-rewards-container">
                <div className="loading-spinner-rewards">
                    <div className="spinner-rewards"></div>
                    <p>Loading rewards...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="daily-rewards-container">
                <div className="error-message-rewards">
                    <h2>⚠️ Error</h2>
                    <p>{error}</p>
                    <button onClick={loadRewardStatus} className="retry-button-rewards">
                        🔄 Retry
                    </button>
                </div>
            </div>
        );
    }

    // No data state (shouldn't happen, but safety check)
    if (!rewardData) {
        return (
            <div className="daily-rewards-container">
                <div className="error-message-rewards">
                    <h2>⚠️ No Data</h2>
                    <p>Unable to load reward data</p>
                    <button onClick={loadRewardStatus} className="retry-button-rewards">
                        🔄 Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="daily-rewards-container">
            {/* Header */}
            <div className="rewards-header">
                <h1>🎁 Daily Rewards</h1>
                <p className="rewards-subtitle">Login every day to claim amazing rewards!</p>
            </div>

            {/* Streak Display */}
            <div className="streak-display">
                <div className="streak-card">
                    <div className="streak-icon">🔥</div>
                    <div className="streak-info">
                        <div className="streak-label">Current Streak</div>
                        <div className="streak-value">{rewardData.currentStreak} Days</div>
                    </div>
                </div>
                <div className="streak-card">
                    <div className="streak-icon">🏆</div>
                    <div className="streak-info">
                        <div className="streak-label">Longest Streak</div>
                        <div className="streak-value">{rewardData.longestStreak} Days</div>
                    </div>
                </div>
                <div className="streak-card">
                    <div className="streak-icon">🪙</div>
                    <div className="streak-info">
                        <div className="streak-label">Total Coins</div>
                        <div className="streak-value">{rewardData.totalCoins}</div>
                    </div>
                </div>
            </div>

            {/* Streak Broken Warning */}
            {rewardData.streakBroken && (
                <div className="streak-broken-alert">
                    ⚠️ Your streak was broken! Start a new one today!
                </div>
            )}

            {/* Reward Calendar */}
            <div className="reward-calendar">
                <h2>7-Day Reward Calendar</h2>
                <div className="calendar-grid-rewards">
                    {rewardCalendar.map((reward) => {
                        const dayNumber = reward.day;
                        const isClaimed = rewardData.currentStreak >= dayNumber && !rewardData.canClaim;
                        const isToday = rewardData.nextRewardDay === dayNumber && rewardData.canClaim;
                        const isLocked = dayNumber > rewardData.nextRewardDay;

                        return (
                            <div
                                key={dayNumber}
                                className={`calendar-day-rewards ${isClaimed ? 'claimed' : ''} ${isToday ? 'today' : ''} ${isLocked ? 'locked' : ''}`}
                                style={{ borderColor: reward.color }}
                            >
                                <div className="day-number-rewards">Day {dayNumber}</div>
                                <div className="day-emoji-rewards">{reward.emoji}</div>
                                <div className="day-reward">
                                    {reward.coins} Coins
                                    {reward.badge && <div className="day-badge">{reward.badge}</div>}
                                </div>
                                {isClaimed && <div className="claimed-check">✓</div>}
                                {isToday && <div className="today-pulse-rewards">!</div>}
                                {isLocked && <div className="locked-icon-rewards">🔒</div>}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Claim Button */}
            <div className="claim-section">
                {rewardData.canClaim ? (
                    <button
                        className="claim-button"
                        onClick={handleClaimReward}
                        disabled={claiming}
                    >
                        {claiming ? 'Claiming...' : '🎉 Claim Today\'s Reward 🎉'}
                    </button>
                ) : (
                    <div className="already-claimed">
                        <div className="claimed-icon">✅</div>
                        <div className="claimed-text">Already claimed today!</div>
                        <div className="next-claim">Come back tomorrow for Day {rewardData.nextRewardDay}</div>
                    </div>
                )}
            </div>

            {/* Badges Section */}
            {rewardData.badges && rewardData.badges.length > 0 && (
                <div className="badges-section">
                    <h2>🏅 Your Badges</h2>
                    <div className="badges-grid">
                        {rewardData.badges.map((badge, index) => (
                            <div key={index} className="badge-card">
                                <div className="badge-emoji">{badge.badge_emoji}</div>
                                <div className="badge-name">{badge.badge_name}</div>
                                <div className="badge-date">
                                    {new Date(badge.earned_date).toLocaleDateString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Recent Claims */}
            {rewardData.recentClaims && rewardData.recentClaims.length > 0 && (
                <div className="recent-claims">
                    <h2>📜 Recent Claims</h2>
                    <div className="claims-list">
                        {rewardData.recentClaims.slice(0, 5).map((claim, index) => (
                            <div key={index} className="claim-item">
                                <span className="claim-date">
                                    {new Date(claim.claim_date).toLocaleDateString()}
                                </span>
                                <span className="claim-day">Day {claim.day_number}</span>
                                <span className="claim-reward">+{claim.reward_amount} 🪙</span>
                                <span className="claim-streak">Streak: {claim.streak_at_claim}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Claim Animation */}
            {showClaimAnimation && claimedReward && (
                <div className="claim-animation-overlay">
                    <div className="claim-animation-content">
                        <div className="confetti-rewards">🎉🎊🎉🎊🎉</div>
                        <div className="reward-claimed-text">Reward Claimed!</div>
                        <div className="reward-details">
                            <div className="reward-coins">+{claimedReward.coins} 🪙</div>
                            {claimedReward.badge && (
                                <div className="reward-badge-earned">
                                    <div className="badge-earned-icon">{claimedReward.badge.emoji}</div>
                                    <div className="badge-earned-text">Badge Unlocked!</div>
                                    <div className="badge-earned-name">{claimedReward.badge.name}</div>
                                </div>
                            )}
                        </div>
                        <div className="coin-rain">
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="coin" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }}>
                                    🪙
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DailyRewards;