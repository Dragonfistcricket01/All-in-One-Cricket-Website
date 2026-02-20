import React, { useState, useEffect } from 'react';
import { teams, initialDiscussions } from '../data/fanClubs';
import './FanClub.css';

// Generate or retrieve persistent user ID
const getCurrentUser = () => {
    let userId = localStorage.getItem('currentUserId');
    if (!userId) {
        userId = 'User_' + Math.floor(Math.random() * 10000);
        localStorage.setItem('currentUserId', userId);
    }
    return userId;
};

const FanClub = () => {
    const [activeTab, setActiveTab] = useState('clubs');
    const [joinedClubs, setJoinedClubs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [discussions, setDiscussions] = useState([]);
    const [activities, setActivities] = useState([]);
    const [showNewDiscussion, setShowNewDiscussion] = useState(false);
    const [showDiscussionDetail, setShowDiscussionDetail] = useState(false);
    const [selectedDiscussion, setSelectedDiscussion] = useState(null);
    const [currentUser] = useState(getCurrentUser());

    // Load data from localStorage
    useEffect(() => {
        const savedClubs = localStorage.getItem('joinedClubs');
        const savedDiscussions = localStorage.getItem('fanClubDiscussions');
        const savedActivities = localStorage.getItem('fanClubActivities');

        if (savedClubs) {
            setJoinedClubs(JSON.parse(savedClubs));
        }

        if (savedDiscussions) {
            setDiscussions(JSON.parse(savedDiscussions));
        } else {
            setDiscussions(initialDiscussions);
            localStorage.setItem('fanClubDiscussions', JSON.stringify(initialDiscussions));
        }

        if (savedActivities) {
            setActivities(JSON.parse(savedActivities));
        } else {
            setActivities([]);
        }
    }, []);

    // Save data to localStorage
    useEffect(() => {
        localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
    }, [joinedClubs]);

    useEffect(() => {
        if (discussions.length > 0) {
            localStorage.setItem('fanClubDiscussions', JSON.stringify(discussions));
        }
    }, [discussions]);

    useEffect(() => {
        localStorage.setItem('fanClubActivities', JSON.stringify(activities));
    }, [activities]);

    // Add activity helper
    const addActivity = (action, team, content = null) => {
        const newActivity = {
            id: Date.now(),
            user: currentUser,
            action: action,
            team: team,
            content: content,
            timestamp: new Date().toISOString()
        };
        setActivities([newActivity, ...activities.slice(0, 49)]); // Keep last 50 activities
    };

    const toggleClub = (teamId) => {
        const team = teams.find(t => t.id === teamId);
        if (joinedClubs.includes(teamId)) {
            setJoinedClubs(joinedClubs.filter(id => id !== teamId));
            addActivity('left', team?.name);
        } else {
            setJoinedClubs([...joinedClubs, teamId]);
            addActivity('joined', team?.name);
        }
    };

    const filteredTeams = teams.filter(team =>
        team.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredDiscussions = selectedTeam
        ? discussions.filter(d => d.team === selectedTeam)
        : discussions;

    const toggleLike = (discussionId) => {
        setDiscussions(discussions.map(d => {
            if (d.id === discussionId) {
                const isLiked = d.likedBy.includes(currentUser);
                return {
                    ...d,
                    likes: isLiked ? d.likes - 1 : d.likes + 1,
                    likedBy: isLiked
                        ? d.likedBy.filter(user => user !== currentUser)
                        : [...d.likedBy, currentUser]
                };
            }
            return d;
        }));
    };

    const createDiscussion = (newDiscussion) => {
        const team = teams.find(t => t.id === newDiscussion.team);
        const discussion = {
            id: Date.now(),
            ...newDiscussion,
            author: currentUser,
            replies: 0,
            likes: 0,
            likedBy: [],
            timestamp: new Date().toISOString(),
            comments: []
        };
        setDiscussions([discussion, ...discussions]);
        addActivity('posted', team?.name, newDiscussion.title);
        setShowNewDiscussion(false);
    };

    const updateDiscussion = (discussionId, updatedData) => {
        setDiscussions(discussions.map(d =>
            d.id === discussionId ? { ...d, ...updatedData } : d
        ));
    };

    const deleteDiscussion = (discussionId) => {
        if (window.confirm('Are you sure you want to delete this discussion?')) {
            setDiscussions(discussions.filter(d => d.id !== discussionId));
            if (selectedDiscussion?.id === discussionId) {
                setShowDiscussionDetail(false);
                setSelectedDiscussion(null);
            }
        }
    };

    const addComment = (discussionId, commentText) => {
        setDiscussions(discussions.map(d => {
            if (d.id === discussionId) {
                const newComment = {
                    id: Date.now(),
                    author: currentUser,
                    content: commentText,
                    timestamp: new Date().toISOString(),
                    likes: 0
                };
                return {
                    ...d,
                    comments: [...d.comments, newComment],
                    replies: d.replies + 1
                };
            }
            return d;
        }));
    };

    const openDiscussion = (discussion) => {
        setSelectedDiscussion(discussion);
        setShowDiscussionDetail(true);
    };

    const formatTime = (timestamp) => {
        const now = new Date();
        const time = new Date(timestamp);
        const diff = Math.floor((now - time) / 1000); // seconds

        if (diff < 60) return `${diff} seconds ago`;
        if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
        if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
        return time.toLocaleDateString();
    };

    return (
        <div className="fan-club-container">
            {/* Hero Section */}
            <div className="fan-club-hero">
                <div className="hero-content-fan">
                    <h1 className="hero-title-fan">
                        🏆 Cricket Fan Clubs & Community
                    </h1>
                    <p className="hero-subtitle-fan">
                        Join your favorite team's fan club and connect with cricket enthusiasts worldwide
                    </p>
                    <div className="hero-stats-fan">
                        <div className="stat-item-fan">
                            <span className="stat-number-fan">{teams.reduce((sum, t) => sum + t.members, 0).toLocaleString()}</span>
                            <span className="stat-label-fan">Active Members</span>
                        </div>
                        <div className="stat-item-fan">
                            <span className="stat-number-fan">{teams.length}</span>
                            <span className="stat-label-fan">Team Clubs</span>
                        </div>
                        <div className="stat-item-fan">
                            <span className="stat-number-fan">{discussions.length}</span>
                            <span className="stat-label-fan">Discussions</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs-container-fan">
                <button
                    className={`tab-btn-fan ${activeTab === 'clubs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('clubs')}
                >
                    🏏 Fan Clubs
                </button>
                <button
                    className={`tab-btn-fan ${activeTab === 'discussions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('discussions')}
                >
                    💬 Discussions
                </button>
                <button
                    className={`tab-btn-fan ${activeTab === 'activity' ? 'active' : ''}`}
                    onClick={() => setActiveTab('activity')}
                >
                    📊 Activity Feed
                </button>
            </div>

            <div className="content-wrapper-fan">
                {/* Fan Clubs Tab */}
                {activeTab === 'clubs' && (
                    <div className="clubs-section-fan">
                        <div className="section-header-fan">
                            <h2>Join Your Favorite Team's Fan Club</h2>
                            <input
                                type="text"
                                placeholder="Search teams..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input-fan"
                            />
                        </div>

                        {filteredTeams.length === 0 ? (
                            <div className="no-results-fan">
                                <div className="no-results-icon-fan">🔍</div>
                                <h3>No teams found</h3>
                                <p>Try searching with a different keyword</p>
                            </div>
                        ) : (
                            <div className="clubs-grid-fan">
                                {filteredTeams.map(team => {
                                    const isJoined = joinedClubs.includes(team.id);
                                    return (
                                        <div
                                            key={team.id}
                                            className="club-card-fan"
                                            style={{ borderColor: team.color }}
                                        >
                                            <div className="club-header-fan">
                                                <img src={team.image} alt={team.name} className="club-icon-fan" />
                                                <h3 className="club-name-fan">{team.name}</h3>
                                            </div>
                                            <div className="club-stats-fan">
                                                <div className="stat-fan">
                                                    <span className="stat-value-fan">{team.members.toLocaleString()}</span>
                                                    <span className="stat-label-fan">Members</span>
                                                </div>
                                                <div className="stat-fan">
                                                    <span className="stat-value-fan">
                                                        {Math.floor(Math.random() * 50 + 20)}
                                                    </span>
                                                    <span className="stat-label-fan">Online</span>
                                                </div>
                                            </div>
                                            <button
                                                className={`join-btn-fan ${isJoined ? 'joined' : ''}`}
                                                onClick={() => toggleClub(team.id)}
                                                style={{
                                                    background: isJoined ? team.color : 'transparent',
                                                    borderColor: team.color,
                                                    color: isJoined ? 'white' : team.color
                                                }}
                                            >
                                                {isJoined ? '✓ Joined' : '+ Join Club'}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {joinedClubs.length > 0 && (
                            <div className="my-clubs-section-fan">
                                <h2>My Fan Clubs ({joinedClubs.length})</h2>
                                <div className="my-clubs-list-fan">
                                    {teams
                                        .filter(team => joinedClubs.includes(team.id))
                                        .map(team => (
                                            <div key={team.id} className="my-club-badge-fan">
                                                <img src={team.image} alt={team.name} style={{ width: '24px', height: '24px', objectFit: 'cover' }} />
                                                <span>{team.name}</span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Discussions Tab */}
                {activeTab === 'discussions' && (
                    <div className="discussions-section-fan">
                        <div className="section-header-fan">
                            <h2>Community Discussions</h2>
                            <div className="discussion-filters-fan">
                                <select
                                    value={selectedTeam || ''}
                                    onChange={(e) => setSelectedTeam(e.target.value || null)}
                                    className="filter-select-fan"
                                >
                                    <option value="">All Teams</option>
                                    {teams.map(team => (
                                        <option key={team.id} value={team.id}>
                                            {team.name}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    className="new-discussion-btn-fan"
                                    onClick={() => setShowNewDiscussion(true)}
                                >
                                    + New Discussion
                                </button>
                            </div>
                        </div>

                        {filteredDiscussions.length === 0 ? (
                            <div className="no-results-fan">
                                <div className="no-results-icon-fan">💬</div>
                                <h3>No discussions found</h3>
                                <p>Be the first to start a discussion for this team!</p>
                                <button
                                    className="new-discussion-btn-fan"
                                    onClick={() => setShowNewDiscussion(true)}
                                >
                                    + Create Discussion
                                </button>
                            </div>
                        ) : (
                            <div className="discussions-list-fan">
                                {filteredDiscussions.map(discussion => {
                                    const team = teams.find(t => t.id === discussion.team);
                                    const isLiked = discussion.likedBy.includes(currentUser);
                                    const isOwner = discussion.author === currentUser;
                                    return (
                                        <div
                                            key={discussion.id}
                                            className="discussion-card-fan"
                                            onClick={() => openDiscussion(discussion)}
                                        >
                                            <div className="discussion-icon-fan">
                                                <img src={team?.image} alt={team?.name} className="discussion-team-image-fan" />
                                            </div>
                                            <div className="discussion-content-fan">
                                                <div className="discussion-header-fan">
                                                    <h3 className="discussion-title-fan">{discussion.title}</h3>
                                                    <span className="discussion-category-fan">
                                                        {discussion.category}
                                                    </span>
                                                </div>
                                                <p className="discussion-preview-fan">
                                                    {discussion.content.substring(0, 150)}...
                                                </p>
                                                <div className="discussion-meta-fan">
                                                    <span className="discussion-author">
                                                        By {discussion.author}
                                                    </span>
                                                    <span className="discussion-team">
                                                        {team?.name}
                                                    </span>
                                                    <span className="discussion-time">
                                                        {formatTime(discussion.timestamp)}
                                                    </span>
                                                </div>
                                                <div className="discussion-actions-fan">
                                                    <button
                                                        className={`action-btn-fan ${isLiked ? 'liked' : ''}`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleLike(discussion.id);
                                                        }}
                                                    >
                                                        ❤️ {discussion.likes}
                                                    </button>
                                                    <button className="action-btn-fan">
                                                        💬 {discussion.replies}
                                                    </button>
                                                    {isOwner && (
                                                        <>
                                                            <button
                                                                className="action-btn-fan"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedDiscussion(discussion);
                                                                    setShowNewDiscussion(true);
                                                                }}
                                                            >
                                                                ✏️ Edit
                                                            </button>
                                                            <button
                                                                className="action-btn-fan"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    deleteDiscussion(discussion.id);
                                                                }}
                                                                style={{ background: '#ef4444', color: 'white', borderColor: '#ef4444' }}
                                                            >
                                                                🗑️ Delete
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}

                {/* Activity Feed Tab */}
                {activeTab === 'activity' && (
                    <div className="activity-section-fan">
                        <h2>Recent Activity</h2>
                        {activities.length === 0 ? (
                            <div className="no-results-fan">
                                <div className="no-results-icon-fan">📊</div>
                                <h3>No activity yet</h3>
                                <p>Start joining clubs and posting discussions to see activity here!</p>
                            </div>
                        ) : (
                            <div className="activity-feed-fan">
                                {activities.map(activity => (
                                    <div key={activity.id} className="activity-item-fan">
                                        <div className="activity-avatar-fan">
                                            {activity.user.charAt(activity.user.length - 1)}
                                        </div>
                                        <div className="activity-content-fan">
                                            <div className="activity-text-fan">
                                                <strong>{activity.user}</strong>
                                                {activity.action === 'joined' && (
                                                    <> joined <strong>{activity.team}</strong> fan club</>
                                                )}
                                                {activity.action === 'left' && (
                                                    <> left <strong>{activity.team}</strong> fan club</>
                                                )}
                                                {activity.action === 'posted' && (
                                                    <> posted: "{activity.content}" in <strong>{activity.team}</strong></>
                                                )}
                                                {activity.action === 'liked' && (
                                                    <> liked "{activity.content}"</>
                                                )}
                                            </div>
                                            <div className="activity-time-fan">{formatTime(activity.timestamp)}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* New Discussion Modal */}
            {showNewDiscussion && (
                <NewDiscussionModal
                    teams={teams}
                    discussion={selectedDiscussion}
                    onClose={() => {
                        setShowNewDiscussion(false);
                        setSelectedDiscussion(null);
                    }}
                    onCreate={createDiscussion}
                    onUpdate={(id, data) => {
                        updateDiscussion(id, data);
                        setShowNewDiscussion(false);
                        setSelectedDiscussion(null);
                    }}
                />
            )}

            {/* Discussion Detail Modal */}
            {showDiscussionDetail && selectedDiscussion && (
                <DiscussionDetailModal
                    discussion={discussions.find(d => d.id === selectedDiscussion.id)}
                    teams={teams}
                    currentUser={currentUser}
                    onClose={() => {
                        setShowDiscussionDetail(false);
                        setSelectedDiscussion(null);
                    }}
                    onAddComment={addComment}
                    onLike={toggleLike}
                    onDelete={deleteDiscussion}
                    formatTime={formatTime}
                />
            )}
        </div>
    );
};

// New Discussion Modal Component
const NewDiscussionModal = ({ teams, discussion, onClose, onCreate, onUpdate }) => {
    const [formData, setFormData] = useState({
        title: discussion?.title || '',
        content: discussion?.content || '',
        team: discussion?.team || '',
        category: discussion?.category || 'Discussion'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title && formData.content && formData.team) {
            if (discussion?.id) {
                onUpdate(discussion.id, formData);
            } else {
                onCreate(formData);
            }
        }
    };

    return (
        <div className="modal-overlay-fan" onClick={onClose}>
            <div className="modal-content-fan" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header-fan">
                    <h2>{discussion?.id ? 'Edit Discussion' : 'Create New Discussion'}</h2>
                    <button className="close-btn-fan" onClick={onClose}>✕</button>
                </div>
                <form onSubmit={handleSubmit} className="discussion-form-fan">
                    <div className="form-group-fan">
                        <label>Title *</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Enter discussion title..."
                            required
                        />
                    </div>
                    <div className="form-group-fan">
                        <label>Team *</label>
                        <select
                            value={formData.team}
                            onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                            required
                        >
                            <option value="">Select a team</option>
                            {teams.map(team => (
                                <option key={team.id} value={team.id}>
                                    {team.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group-fan">
                        <label>Category</label>
                        <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option value="Discussion">Discussion</option>
                            <option value="Debate">Debate</option>
                            <option value="BPL">BPL</option>
                            <option value="Tournament">Tournament</option>
                            <option value="News">News</option>
                        </select>
                    </div>
                    <div className="form-group-fan">
                        <label>Content *</label>
                        <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            placeholder="Share your thoughts..."
                            rows="6"
                            required
                        />
                    </div>
                    <div className="form-actions-fan">
                        <button type="button" className="cancel-btn-fan" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="submit-btn-fan">
                            {discussion?.id ? 'Update Discussion' : 'Post Discussion'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Discussion Detail Modal Component
const DiscussionDetailModal = ({ discussion, teams, currentUser, onClose, onAddComment, onLike, onDelete, formatTime }) => {
    const [commentText, setCommentText] = useState('');
    const team = teams.find(t => t.id === discussion.team);
    const isLiked = discussion.likedBy.includes(currentUser);
    const isOwner = discussion.author === currentUser;

    const handleAddComment = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            onAddComment(discussion.id, commentText);
            setCommentText('');
        }
    };

    return (
        <div className="modal-overlay-fan" onClick={onClose}>
            <div className="modal-content-fan large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header-fan">
                    <div>
                        <h2>{discussion.title}</h2>
                        <div className="discussion-meta-fan">
                            <span>{team?.name}</span>
                            <span>•</span>
                            <span>By {discussion.author}</span>
                            <span>•</span>
                            <span>{formatTime(discussion.timestamp)}</span>
                        </div>
                    </div>
                    <button className="close-btn-fan" onClick={onClose}>✕</button>
                </div>

                <div className="modal-body-fan">
                    <div className="discussion-full-content-fan">
                        <p>{discussion.content}</p>
                    </div>

                    <div className="discussion-actions-fan">
                        <button
                            className={`action-btn-fan ${isLiked ? 'liked' : ''}`}
                            onClick={() => onLike(discussion.id)}
                        >
                            ❤️ {discussion.likes} {isLiked ? 'Liked' : 'Like'}
                        </button>
                        <button className="action-btn-fan">
                            💬 {discussion.comments.length} Comments
                        </button>
                        {isOwner && (
                            <button
                                className="action-btn-fan"
                                onClick={() => {
                                    if (window.confirm('Delete this discussion?')) {
                                        onDelete(discussion.id);
                                    }
                                }}
                                style={{ background: '#ef4444', color: 'white', borderColor: '#ef4444' }}
                            >
                                🗑️ Delete
                            </button>
                        )}
                    </div>

                    <div className="comments-section-fan">
                        <h3>Comments ({discussion.comments.length})</h3>

                        <form onSubmit={handleAddComment} className="comment-form-fan">
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Write a comment..."
                                rows="3"
                            />
                            <button type="submit" className="submit-btn-fan">
                                Post Comment
                            </button>
                        </form>

                        <div className="comments-list-fan">
                            {discussion.comments.map(comment => (
                                <div key={comment.id} className="comment-item-fan">
                                    <div className="comment-avatar-fan">
                                        {comment.author.charAt(comment.author.length - 1)}
                                    </div>
                                    <div className="comment-content-fan">
                                        <div className="comment-header-fan">
                                            <strong>{comment.author}</strong>
                                            <span className="comment-time-fan">
                                                {formatTime(comment.timestamp)}
                                            </span>
                                        </div>
                                        <p>{comment.content}</p>
                                        <button className="comment-like-fan">
                                            ❤️ {comment.likes}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FanClub;