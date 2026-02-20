import React, { useState, useEffect } from 'react';
import { contentCategories, tags, initialContent } from '../data/userContent';
import './ContentGenerator.css';

// Generate or retrieve persistent user ID
const getCurrentUser = () => {
    let userId = localStorage.getItem('currentUserId');
    if (!userId) {
        userId = 'User_' + Math.floor(Math.random() * 10000);
        localStorage.setItem('currentUserId', userId);
    }
    return userId;
};

const ContentGenerator = () => {
    const [activeTab, setActiveTab] = useState('browse');
    const [contents, setContents] = useState([]);
    const [showEditor, setShowEditor] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterTag, setFilterTag] = useState('all');
    const [sortBy, setSortBy] = useState('latest');
    const [currentUser] = useState(getCurrentUser());

    // Load content from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('userContents');
        if (saved) {
            try {
                const parsedContents = JSON.parse(saved);
                setContents(parsedContents);
            } catch (error) {
                console.error('Error loading contents:', error);
                setContents(initialContent);
                localStorage.setItem('userContents', JSON.stringify(initialContent));
            }
        } else {
            setContents(initialContent);
            localStorage.setItem('userContents', JSON.stringify(initialContent));
        }
    }, []);

    // Save to localStorage whenever contents change
    useEffect(() => {
        if (contents.length >= 0) {
            localStorage.setItem('userContents', JSON.stringify(contents));
        }
    }, [contents]);

    // Filter and sort content
    const filteredContents = contents
        .filter(content => {
            const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                content.content.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = filterCategory === 'all' || content.category === filterCategory;
            const matchesTag = filterTag === 'all' || content.tags.includes(filterTag);
            const matchesStatus = activeTab === 'browse' ? content.status === 'published' :
                activeTab === 'my-content' ? content.author === currentUser : true;
            return matchesSearch && matchesCategory && matchesTag && matchesStatus;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'latest':
                    return new Date(b.createdAt) - new Date(a.createdAt);
                case 'popular':
                    return b.likes - a.likes;
                case 'views':
                    return b.views - a.views;
                default:
                    return 0;
            }
        });

    const createContent = (newContent) => {
        const content = {
            ...newContent,
            id: Date.now(),
            author: currentUser,
            authorAvatar: '👤',
            likes: 0,
            likedBy: [],
            views: 0,
            comments: [],
            createdAt: new Date().toISOString()
        };
        setContents([content, ...contents]);
        setShowEditor(false);
    };

    const updateContent = (id, updatedContent) => {
        setContents(contents.map(c => c.id === id ? { ...c, ...updatedContent } : c));
        setShowEditor(false);
        setSelectedContent(null);
    };

    const deleteContent = (id) => {
        if (window.confirm('Are you sure you want to delete this content?')) {
            setContents(contents.filter(c => c.id !== id));
        }
    };

    const toggleLike = (id) => {
        setContents(contents.map(c => {
            if (c.id === id) {
                const isLiked = c.likedBy.includes(currentUser);
                return {
                    ...c,
                    likes: isLiked ? c.likes - 1 : c.likes + 1,
                    likedBy: isLiked
                        ? c.likedBy.filter(user => user !== currentUser)
                        : [...c.likedBy, currentUser]
                };
            }
            return c;
        }));
    };

    const incrementViews = (id) => {
        setContents(contents.map(c =>
            c.id === id ? { ...c, views: c.views + 1 } : c
        ));
    };

    const addComment = (contentId, commentText) => {
        setContents(contents.map(c => {
            if (c.id === contentId) {
                const newComment = {
                    id: Date.now(),
                    author: currentUser,
                    content: commentText,
                    timestamp: new Date().toISOString(),
                    likes: 0
                };
                return {
                    ...c,
                    comments: [...c.comments, newComment]
                };
            }
            return c;
        }));
    };

    const myContents = contents.filter(c => c.author === currentUser);
    const publishedCount = myContents.filter(c => c.status === 'published').length;
    const draftCount = myContents.filter(c => c.status === 'draft').length;
    const totalPublished = contents.filter(c => c.status === 'published').length;

    return (
        <div className="content-generator-container">
            {/* Hero Section */}
            <div className="content-hero-generator">
                <div className="hero-content-generator">
                    <h1 className="hero-title-generator">
                        ✍️ Content Creator Studio
                    </h1>
                    <p className="hero-subtitle-generator">
                        Share your cricket insights, analyses, and stories with the community
                    </p>
                    <button
                        className="create-content-btn-hero-generator"
                        onClick={() => {
                            setShowEditor(true);
                            setSelectedContent(null);
                        }}
                    >
                        <span className="btn-icon-generator">+</span>
                        Create New Content
                    </button>
                    <div className="hero-stats-generator">
                        <div className="stat-item-generator">
                            <span className="stat-number-generator">{totalPublished}</span>
                            <span className="stat-label-generator">Total Articles</span>
                        </div>
                        <div className="stat-item-generator">
                            <span className="stat-number-generator">{myContents.length}</span>
                            <span className="stat-label-generator">Your Content</span>
                        </div>
                        <div className="stat-item-generator">
                            <span className="stat-number-generator">
                                {contents.reduce((sum, c) => sum + c.views, 0)}
                            </span>
                            <span className="stat-label-generator">Total Views</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs-container-generator">
                <button
                    className={`tab-btn-generator ${activeTab === 'browse' ? 'active' : ''}`}
                    onClick={() => setActiveTab('browse')}
                >
                    🌐 Browse Content
                </button>
                <button
                    className={`tab-btn-generator ${activeTab === 'my-content' ? 'active' : ''}`}
                    onClick={() => setActiveTab('my-content')}
                >
                    📂 My Content ({myContents.length})
                </button>
                <button
                    className={`tab-btn-generator ${activeTab === 'categories' ? 'active' : ''}`}
                    onClick={() => setActiveTab('categories')}
                >
                    📑 Categories
                </button>
            </div>

            <div className="content-wrapper-generator">
                {/* Browse Content Tab */}
                {activeTab === 'browse' && (
                    <div className="browse-section-generator">
                        {/* Filters */}
                        <div className="filters-bar-generator">
                            <input
                                type="text"
                                placeholder="Search content..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input-generator"
                            />
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="filter-select-generator"
                            >
                                <option value="all">All Categories</option>
                                {contentCategories.map(cat => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.icon} {cat.name}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={filterTag}
                                onChange={(e) => setFilterTag(e.target.value)}
                                className="filter-select-generator"
                            >
                                <option value="all">All Tags</option>
                                {tags.map(tag => (
                                    <option key={tag} value={tag}>{tag}</option>
                                ))}
                            </select>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="filter-select-generator"
                            >
                                <option value="latest">Latest</option>
                                <option value="popular">Most Popular</option>
                                <option value="views">Most Viewed</option>
                            </select>
                        </div>

                        {/* Content Grid */}
                        {filteredContents.length === 0 ? (
                            <div className="no-results-generator">
                                <div className="no-results-icon-generator">📭</div>
                                <h3>No content found</h3>
                                <p>Try adjusting your filters or be the first to create content!</p>
                                <button
                                    className="create-btn-generator"
                                    onClick={() => setShowEditor(true)}
                                >
                                    Create Content
                                </button>
                            </div>
                        ) : (
                            <div className="content-grid-generator">
                                {filteredContents.map(content => (
                                    <ContentCard
                                        key={content.id}
                                        content={content}
                                        currentUser={currentUser}
                                        onView={() => {
                                            setSelectedContent(content);
                                            incrementViews(content.id);
                                        }}
                                        onLike={() => toggleLike(content.id)}
                                        categories={contentCategories}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* My Content Tab */}
                {activeTab === 'my-content' && (
                    <div className="my-content-section-generator">
                        <div className="my-content-header-generator">
                            <div className="stats-cards-generator">
                                <div className="stats-card-generator">
                                    <span className="card-icon-generator">✅</span>
                                    <div className="card-info-generator">
                                        <h3>{publishedCount}</h3>
                                        <p>Published</p>
                                    </div>
                                </div>
                                <div className="stats-card-generator">
                                    <span className="card-icon-generator">📝</span>
                                    <div className="card-info-generator">
                                        <h3>{draftCount}</h3>
                                        <p>Drafts</p>
                                    </div>
                                </div>
                                <div className="stats-card-generator">
                                    <span className="card-icon-generator">❤️</span>
                                    <div className="card-info-generator">
                                        <h3>{myContents.reduce((sum, c) => sum + c.likes, 0)}</h3>
                                        <p>Total Likes</p>
                                    </div>
                                </div>
                                <div className="stats-card-generator">
                                    <span className="card-icon-generator">⌚</span>
                                    <div className="card-info-generator">
                                        <h3>{myContents.reduce((sum, c) => sum + c.views, 0)}</h3>
                                        <p>Total Views</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="create-content-btn-generator"
                                onClick={() => {
                                    setShowEditor(true);
                                    setSelectedContent(null);
                                }}
                            >
                                + Create New
                            </button>
                        </div>

                        {myContents.length === 0 ? (
                            <div className="no-results-generator">
                                <div className="no-results-icon-generator">✍️</div>
                                <h3>You haven't created any content yet</h3>
                                <p>Start sharing your cricket insights with the community!</p>
                                <button
                                    className="create-btn-generator"
                                    onClick={() => setShowEditor(true)}
                                >
                                    Create Your First Content
                                </button>
                            </div>
                        ) : (
                            <div className="my-content-list-generator">
                                {myContents.map(content => (
                                    <MyContentCard
                                        key={content.id}
                                        content={content}
                                        onEdit={() => {
                                            setSelectedContent(content);
                                            setShowEditor(true);
                                        }}
                                        onDelete={() => deleteContent(content.id)}
                                        onView={() => {
                                            setSelectedContent(content);
                                            incrementViews(content.id);
                                        }}
                                        categories={contentCategories}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Categories Tab */}
                {activeTab === 'categories' && (
                    <div className="categories-section-generator">
                        <h2>Content Categories</h2>
                        <p className="section-subtitle-generator">Choose a category to start creating</p>
                        <div className="categories-grid-generator">
                            {contentCategories.map(category => {
                                const count = contents.filter(c => c.category === category.id && c.status === 'published').length;
                                return (
                                    <div key={category.id} className="category-card-large-generator">
                                        <div className="category-icon-large-generator">{category.icon}</div>
                                        <h3>{category.name}</h3>
                                        <p>{category.description}</p>
                                        <div className="category-count-generator">{count} articles</div>
                                        <button
                                            className="category-create-btn-generator"
                                            onClick={() => {
                                                setShowEditor(true);
                                                setSelectedContent({ category: category.id });
                                            }}
                                        >
                                            Create {category.name}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Content Editor Modal */}
            {showEditor && (
                <ContentEditor
                    content={selectedContent}
                    categories={contentCategories}
                    tags={tags}
                    onSave={(content) => {
                        if (selectedContent?.id) {
                            updateContent(selectedContent.id, content);
                        } else {
                            createContent(content);
                        }
                    }}
                    onClose={() => {
                        setShowEditor(false);
                        setSelectedContent(null);
                    }}
                />
            )}

            {/* Content Viewer Modal */}
            {selectedContent && !showEditor && (
                <ContentViewer
                    content={contents.find(c => c.id === selectedContent.id)}
                    currentUser={currentUser}
                    categories={contentCategories}
                    onClose={() => setSelectedContent(null)}
                    onLike={() => toggleLike(selectedContent.id)}
                    onAddComment={(text) => addComment(selectedContent.id, text)}
                />
            )}
        </div>
    );
};

// Content Card Component
const ContentCard = ({ content, currentUser, onView, onLike, categories }) => {
    const category = categories.find(c => c.id === content.category);
    const isLiked = content.likedBy.includes(currentUser);

    return (
        <div className="content-card-generator" onClick={onView}>
            <div
                className="content-thumbnail-generator"
                style={{ backgroundImage: `url(${content.thumbnail})` }}
            >
                <div className="content-category-badge-generator">
                    {category?.icon} {category?.name}
                </div>
            </div>
            <div className="content-card-body-generator">
                <h3 className="content-title-generator">{content.title}</h3>
                <p className="content-excerpt-generator">
                    {content.content.substring(0, 120)}...
                </p>
                <div className="content-tags-generator">
                    {content.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag-generator">{tag}</span>
                    ))}
                </div>
                <div className="content-meta-generator">
                    <div className="author-info-generator">
                        <span className="author-avatar-generator">{content.authorAvatar}</span>
                        <span className="author-name-generator">{content.author}</span>
                    </div>
                    <span className="read-time-generator">{content.readTime}</span>
                </div>
                <div className="content-stats-generator">
                    <button
                        className={`stat-btn-generator ${isLiked ? 'liked' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onLike();
                        }}
                    >
                        ❤️ {content.likes}
                    </button>
                    <span className="stat-btn-generator">👁️ {content.views}</span>
                    <span className="stat-btn-generator">💬 {content.comments.length}</span>
                </div>
            </div>
        </div>
    );
};

// My Content Card Component
const MyContentCard = ({ content, onEdit, onDelete, onView, categories }) => {
    const category = categories.find(c => c.id === content.category);

    return (
        <div className="my-content-card-generator">
            <div className="my-content-info-generator">
                <div className="content-header-row-generator">
                    <h3 onClick={onView} style={{ cursor: 'pointer' }}>
                        {content.title}
                    </h3>
                    <span className={`status-badge-generator ${content.status}`}>
                        {content.status === 'published' ? '✅ Published' : '📝 Draft'}
                    </span>
                </div>
                <div className="content-meta-row-generator">
                    <span className="category-label-generator">
                        {category?.icon} {category?.name}
                    </span>
                    <span className="date-label-generator">
                        {new Date(content.createdAt).toLocaleDateString()}
                    </span>
                </div>
                <div className="content-stats-row-generator">
                    <span>❤️ {content.likes} likes</span>
                    <span>👁️ {content.views} views</span>
                    <span>💬 {content.comments.length} comments</span>
                </div>
            </div>
            <div className="my-content-actions-generator">
                <button className="action-btn-edit-generator" onClick={onEdit}>
                    ✏️ Edit
                </button>
                <button className="action-btn-delete-generator" onClick={onDelete}>
                    🗑️ Delete
                </button>
            </div>
        </div>
    );
};

// Content Editor Component
const ContentEditor = ({ content, categories, tags, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        title: content?.title || '',
        category: content?.category || 'article',
        content: content?.content || '',
        tags: content?.tags || [],
        thumbnail: content?.thumbnail || '',
        status: content?.status || 'draft'
    });

    const handleSubmit = (e, status) => {
        e.preventDefault();
        const wordCount = formData.content.split(' ').filter(w => w).length;
        const readTime = Math.ceil(wordCount / 200) + ' min read';
        onSave({ ...formData, status, readTime });
    };

    const toggleTag = (tag) => {
        setFormData({
            ...formData,
            tags: formData.tags.includes(tag)
                ? formData.tags.filter(t => t !== tag)
                : [...formData.tags, tag]
        });
    };

    return (
        <div className="modal-overlay-generator" onClick={onClose}>
            <div className="modal-content-generator editor-modal-generator" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header-generator">
                    <h2>{content?.id ? 'Edit Content' : 'Create New Content'}</h2>
                    <button className="close-btn-generator" onClick={onClose}>✕</button>
                </div>
                <form className="editor-form-generator">
                    <div className="form-row-generator">
                        <div className="form-group-generator full-width">
                            <label>Title *</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Enter a captivating title..."
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row-generator">
                        <div className="form-group-generator">
                            <label>Category *</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                required
                            >
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.icon} {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group-generator">
                            <label>Thumbnail URL (optional)</label>
                            <input
                                type="url"
                                value={formData.thumbnail}
                                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>
                    </div>

                    <div className="form-group-generator">
                        <label>Content *</label>
                        <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            placeholder="Write your content here... You can use line breaks for paragraphs."
                            rows="15"
                            required
                        />
                        <div className="word-count-generator">
                            {formData.content.split(' ').filter(w => w).length} words
                        </div>
                    </div>

                    <div className="form-group-generator">
                        <label>Tags (Select up to 5)</label>
                        <div className="tags-selector-generator">
                            {tags.map(tag => (
                                <button
                                    key={tag}
                                    type="button"
                                    className={`tag-btn-generator ${formData.tags.includes(tag) ? 'selected' : ''}`}
                                    onClick={() => toggleTag(tag)}
                                    disabled={!formData.tags.includes(tag) && formData.tags.length >= 5}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-actions-generator">
                        <button
                            type="button"
                            className="btn-secondary-generator"
                            onClick={(e) => handleSubmit(e, 'draft')}
                        >
                            💾 Save as Draft
                        </button>
                        <button
                            type="button"
                            className="btn-primary-generator"
                            onClick={(e) => handleSubmit(e, 'published')}
                        >
                            📤 Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Content Viewer Component
const ContentViewer = ({ content, currentUser, categories, onClose, onLike, onAddComment }) => {
    const [commentText, setCommentText] = useState('');
    const category = categories.find(c => c.id === content.category);
    const isLiked = content.likedBy.includes(currentUser);

    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            onAddComment(commentText);
            setCommentText('');
        }
    };

    return (
        <div className="modal-overlay-generator" onClick={onClose}>
            <div className="modal-content-generator viewer-modal-generator" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn-float-generator" onClick={onClose}>✕</button>

                <div
                    className="viewer-thumbnail-generator"
                    style={{ backgroundImage: `url(${content.thumbnail})` }}
                />

                <div className="viewer-content-generator">
                    <div className="viewer-header-generator">
                        <span className="category-badge-large-generator">
                            {category?.icon} {category?.name}
                        </span>
                        <h1>{content.title}</h1>
                        <div className="viewer-meta-generator">
                            <div className="author-info-large-generator">
                                <span className="author-avatar-large-generator">{content.authorAvatar}</span>
                                <div>
                                    <div className="author-name-generator">{content.author}</div>
                                    <div className="publish-date">
                                        {new Date(content.createdAt).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="viewer-stats-top-generator">
                                <span>⏱️ {content.readTime}</span>
                                <span>👁️ {content.views} views</span>
                            </div>
                        </div>
                        <div className="content-tags-large-generator">
                            {content.tags.map(tag => (
                                <span key={tag} className="tag-large-generator">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="viewer-body-generator">
                        {content.content.split('\n').map((paragraph, index) => (
                            paragraph.trim() && <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="viewer-actions-generator">
                        <button
                            className={`action-btn-large-generator ${isLiked ? 'liked' : ''}`}
                            onClick={onLike}
                        >
                            ❤️ {content.likes} {isLiked ? 'Liked' : 'Like'}
                        </button>
                        <button className="action-btn-large-generator">
                            💬 {content.comments.length} Comments
                        </button>
                        <button className="action-btn-large-generator">
                            📤 Share
                        </button>
                    </div>

                    <div className="comments-section-viewer-generator">
                        <h3>Comments ({content.comments.length})</h3>

                        <form onSubmit={handleSubmitComment} className="comment-form-viewer-generator">
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Share your thoughts..."
                                rows="3"
                            />
                            <button type="submit" className="btn-primary-generator">
                                Post Comment
                            </button>
                        </form>

                        <div className="comments-list-viewer-generator">
                            {content.comments.length === 0 ? (
                                <div className="no-comments-generator">
                                    <p>No comments yet. Be the first to comment!</p>
                                </div>
                            ) : (
                                content.comments.map(comment => (
                                    <div key={comment.id} className="comment-item-viewer">
                                        <div className="comment-avatar-generator">👤</div>
                                        <div className="comment-content-viewer-generator">
                                            <div className="comment-header-viewer-generator">
                                                <strong>{comment.author}</strong>
                                                <span className="comment-date-generator">
                                                    {new Date(comment.timestamp).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <p>{comment.content}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentGenerator;