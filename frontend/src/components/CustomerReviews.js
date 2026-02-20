import React, { useState } from 'react';
import ReviewFormModal from './ReviewFormModal';
import './CustomerReviews.css';

const CustomerReviews = ({ productId, productName }) => {
    // Initial mock reviews
    const initialReviews = [
        {
            id: 1,
            userName: 'Ahmed Khan',
            rating: 5,
            date: '2025-10-20',
            verified: true,
            title: 'Excellent Quality!',
            comment: 'Absolutely amazing product! The build quality is outstanding and it performs exactly as expected. Highly recommend to anyone looking for professional cricket equipment.',
            helpful: 45,
            notHelpful: 2
        },
        {
            id: 2,
            userName: 'Rajesh Sharma',
            rating: 4,
            date: '2025-10-18',
            verified: true,
            title: 'Good value for money',
            comment: 'Great product overall. The quality is good and it arrived on time. Only minor issue is that it took a few days to break in, but now it works perfectly.',
            helpful: 32,
            notHelpful: 5
        },
        {
            id: 3,
            userName: 'Mohammed Ali',
            rating: 5,
            date: '2025-10-15',
            verified: true,
            title: 'Best purchase!',
            comment: 'This exceeded my expectations! Perfect balance, great grip, and exactly what I needed for my cricket practice. Delivery was fast too!',
            helpful: 28,
            notHelpful: 1
        },
        {
            id: 4,
            userName: 'Priya Patel',
            rating: 4,
            date: '2025-10-12',
            verified: false,
            title: 'Very satisfied',
            comment: 'Bought this for my son and he absolutely loves it! The quality is excellent and it has improved his game significantly.',
            helpful: 23,
            notHelpful: 3
        },
        {
            id: 5,
            userName: 'Imran Hassan',
            rating: 5,
            date: '2025-10-10',
            verified: true,
            title: 'Professional quality',
            comment: 'As a professional player, I can say this is top-notch equipment. Worth every penny! The craftsmanship is evident.',
            helpful: 51,
            notHelpful: 0
        }
    ];

    const [reviews, setReviews] = useState(initialReviews);
    const [sortBy, setSortBy] = useState('recent');
    const [filterRating, setFilterRating] = useState('all');
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [editingReview, setEditingReview] = useState(null);

    // Calculate rating statistics
    const totalReviews = reviews.length;
    const averageRating = totalReviews > 0
        ? (reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1)
        : 0;
    const ratingCounts = {
        5: reviews.filter(r => r.rating === 5).length,
        4: reviews.filter(r => r.rating === 4).length,
        3: reviews.filter(r => r.rating === 3).length,
        2: reviews.filter(r => r.rating === 2).length,
        1: reviews.filter(r => r.rating === 1).length
    };

    // CRUD Operations
    const handleCreateReview = (reviewData) => {
        setReviews(prev => [reviewData, ...prev]);
        alert('✅ Review submitted successfully!');
    };

    const handleUpdateReview = (reviewData) => {
        setReviews(prev => prev.map(review =>
            review.id === reviewData.id ? reviewData : review
        ));
        alert('✅ Review updated successfully!');
    };

    const handleDeleteReview = (reviewId) => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            setReviews(prev => prev.filter(review => review.id !== reviewId));
            alert('✅ Review deleted successfully!');
        }
    };

    const handleEditClick = (review) => {
        setEditingReview(review);
        setShowReviewModal(true);
    };

    const handleSubmitReview = (reviewData) => {
        if (editingReview) {
            handleUpdateReview(reviewData);
        } else {
            handleCreateReview(reviewData);
        }
        setEditingReview(null);
    };

    // Filter and sort reviews
    const getFilteredAndSortedReviews = () => {
        let filtered = [...reviews];

        // Filter by rating
        if (filterRating !== 'all') {
            filtered = filtered.filter(r => r.rating === parseInt(filterRating));
        }

        // Sort
        switch (sortBy) {
            case 'recent':
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'highest':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'lowest':
                filtered.sort((a, b) => a.rating - b.rating);
                break;
            case 'helpful':
                filtered.sort((a, b) => b.helpful - a.helpful);
                break;
            default:
                break;
        }

        return filtered;
    };

    const displayedReviews = getFilteredAndSortedReviews();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="customer-reviews-section">
            {/* Reviews Header */}
            <div className="reviews-header">
                <h2>
                    <i className="ri-star-fill"></i>
                    Customer Reviews
                </h2>
            </div>

            {/* Rating Overview */}
            <div className="rating-overview">
                <div className="rating-summary">
                    <div className="average-rating">
                        <span className="rating-number">{averageRating}</span>
                        <div className="rating-stars-large">
                            {[...Array(5)].map((_, i) => (
                                <i
                                    key={i}
                                    className={`ri-star-${i < Math.floor(averageRating) ? 'fill' : 'line'}`}
                                ></i>
                            ))}
                        </div>
                        <span className="total-reviews">Based on {totalReviews} reviews</span>
                    </div>

                    <div className="rating-breakdown">
                        {[5, 4, 3, 2, 1].map(rating => (
                            <div key={rating} className="rating-bar-row">
                                <span className="rating-label">{rating} ⭐</span>
                                <div className="rating-bar">
                                    <div
                                        className="rating-bar-fill"
                                        style={{ width: `${totalReviews > 0 ? (ratingCounts[rating] / totalReviews) * 100 : 0}%` }}
                                    ></div>
                                </div>
                                <span className="rating-count">{ratingCounts[rating]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Write Review Button */}
                <div className="write-review-section">
                    <h3>Share Your Experience</h3>
                    <p>Help others make informed decisions</p>
                    <button
                        className="write-review-btn"
                        onClick={() => {
                            setEditingReview(null);
                            setShowReviewModal(true);
                        }}
                    >
                        <i className="ri-edit-line"></i>
                        Write a Review
                    </button>
                </div>
            </div>

            {/* Filters and Sort */}
            <div className="reviews-controls">
                <div className="filter-controls">
                    <label htmlFor="filter-rating">Filter by rating:</label>
                    <select
                        id="filter-rating"
                        value={filterRating}
                        onChange={(e) => setFilterRating(e.target.value)}
                    >
                        <option value="all">All Ratings</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>

                <div className="sort-controls">
                    <label htmlFor="sort-reviews">Sort by:</label>
                    <select
                        id="sort-reviews"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="recent">Most Recent</option>
                        <option value="highest">Highest Rated</option>
                        <option value="lowest">Lowest Rated</option>
                        <option value="helpful">Most Helpful</option>
                    </select>
                </div>
            </div>

            {/* Reviews List */}
            <div className="reviews-list">
                {displayedReviews.length > 0 ? (
                    displayedReviews.map(review => (
                        <div key={review.id} className="review-card">
                            {/* Review Header */}
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <div className="reviewer-avatar">
                                        {review.userName.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="reviewer-details">
                                        <h4>{review.userName}</h4>
                                        {review.verified && (
                                            <span className="verified-badge">
                                                <i className="ri-checkbox-circle-fill"></i>
                                                Verified Purchase
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="review-actions">
                                    <span className="review-date">{formatDate(review.date)}</span>
                                    <button
                                        className="edit-review-btn"
                                        onClick={() => handleEditClick(review)}
                                        title="Edit Review"
                                    >
                                        <i className="ri-edit-line"></i>
                                    </button>
                                    <button
                                        className="delete-review-btn"
                                        onClick={() => handleDeleteReview(review.id)}
                                        title="Delete Review"
                                    >
                                        <i className="ri-delete-bin-line"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="review-rating">
                                <div className="rating-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={`ri-star-${i < review.rating ? 'fill' : 'line'}`}
                                        ></i>
                                    ))}
                                </div>
                            </div>

                            {/* Review Content */}
                            <div className="review-content">
                                <h3>{review.title}</h3>
                                <p>{review.comment}</p>
                            </div>

                            {/* Review Footer */}
                            <div className="review-footer">
                                <span className="helpful-text">Was this helpful?</span>
                                <div className="helpful-buttons">
                                    <button className="helpful-btn">
                                        <i className="ri-thumb-up-line"></i>
                                        Yes ({review.helpful})
                                    </button>
                                    <button className="helpful-btn">
                                        <i className="ri-thumb-down-line"></i>
                                        No ({review.notHelpful})
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-reviews">
                        <i className="ri-message-3-line"></i>
                        <p>No reviews match your filters</p>
                        <button onClick={() => setFilterRating('all')}>Clear Filters</button>
                    </div>
                )}
            </div>

            {/* Review Form Modal */}
            <ReviewFormModal
                isOpen={showReviewModal}
                onClose={() => {
                    setShowReviewModal(false);
                    setEditingReview(null);
                }}
                onSubmit={handleSubmitReview}
                editingReview={editingReview}
            />
        </div>
    );
};

export default CustomerReviews;