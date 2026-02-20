import React, { useState } from 'react';
import { useReviews } from '../context/ReviewsContext';

const ProductReviews = ({ productId }) => {
    const { getProductReviews, addReview, getAverageRating } = useReviews();
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({
        rating: 5,
        title: '',
        comment: '',
        userName: '',
        userEmail: ''
    });

    const reviews = getProductReviews(productId);
    const avgRating = getAverageRating(productId);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newReview.userName || !newReview.title || !newReview.comment) {
            alert('Please fill in all fields');
            return;
        }

        addReview(productId, newReview);
        setNewReview({
            rating: 5,
            title: '',
            comment: '',
            userName: '',
            userEmail: ''
        });
        setShowForm(false);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} style={{
                color: i < rating ? '#f59e0b' : '#e5e7eb',
                fontSize: '1.2rem'
            }}>
                ★
            </span>
        ));
    };

    return (
        <div style={{ marginTop: '3rem' }}>
            {/* Rating Summary */}
            <div style={{
                background: 'var(--body-bg)',
                padding: '2rem',
                borderRadius: '15px',
                marginBottom: '2rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: '700',
                            color: '#667eea',
                            marginBottom: '0.5rem'
                        }}>
                            {avgRating || 'N/A'}
                        </div>
                        <div style={{ marginBottom: '0.5rem' }}>
                            {renderStars(Math.round(parseFloat(avgRating)))}
                        </div>
                        <div style={{ color: 'var(--text-secondary)' }}>
                            {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
                        </div>
                    </div>

                    <button
                        onClick={() => setShowForm(!showForm)}
                        style={{
                            padding: '0.8rem 2rem',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        ✍️ Write a Review
                    </button>
                </div>
            </div>

            {/* Review Form */}
            {showForm && (
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '15px',
                    marginBottom: '2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        Write Your Review
                    </h3>

                    <form onSubmit={handleSubmit}>
                        {/* Rating */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>
                                Rating *
                            </label>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {[1, 2, 3, 4, 5].map(rating => (
                                    <button
                                        key={rating}
                                        type="button"
                                        onClick={() => setNewReview(prev => ({ ...prev, rating }))}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            fontSize: '2rem',
                                            cursor: 'pointer',
                                            color: rating <= newReview.rating ? '#f59e0b' : '#e5e7eb'
                                        }}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Name */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>
                                Your Name *
                            </label>
                            <input
                                type="text"
                                value={newReview.userName}
                                onChange={(e) => setNewReview(prev => ({ ...prev, userName: e.target.value }))}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '2px solid #e5e7eb',
                                    fontSize: '1rem',
                                    background: 'var(--body-bg)',
                                    color: 'var(--text-primary)'
                                }}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>
                                Email (optional)
                            </label>
                            <input
                                type="email"
                                value={newReview.userEmail}
                                onChange={(e) => setNewReview(prev => ({ ...prev, userEmail: e.target.value }))}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '2px solid #e5e7eb',
                                    fontSize: '1rem',
                                    background: 'var(--body-bg)',
                                    color: 'var(--text-primary)'
                                }}
                            />
                        </div>

                        {/* Title */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>
                                Review Title *
                            </label>
                            <input
                                type="text"
                                value={newReview.title}
                                onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                                placeholder="Summarize your review"
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '2px solid #e5e7eb',
                                    fontSize: '1rem',
                                    background: 'var(--body-bg)',
                                    color: 'var(--text-primary)'
                                }}
                                required
                            />
                        </div>

                        {/* Comment */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>
                                Your Review *
                            </label>
                            <textarea
                                value={newReview.comment}
                                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                                placeholder="Share your experience with this product..."
                                rows="5"
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '2px solid #e5e7eb',
                                    fontSize: '1rem',
                                    background: 'var(--body-bg)',
                                    color: 'var(--text-primary)',
                                    resize: 'vertical'
                                }}
                                required
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                type="submit"
                                style={{
                                    padding: '0.8rem 2rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                Submit Review
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                style={{
                                    padding: '0.8rem 2rem',
                                    background: '#e5e7eb',
                                    color: '#6b7280',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Reviews List */}
            <div>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '1.5rem'
                }}>
                    Customer Reviews
                </h3>

                {reviews.length === 0 ? (
                    <div style={{
                        background: 'var(--card-bg)',
                        padding: '3rem',
                        borderRadius: '15px',
                        textAlign: 'center',
                        color: 'var(--text-secondary)'
                    }}>
                        No reviews yet. Be the first to review this product!
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {reviews.map(review => (
                            <div
                                key={review.id}
                                style={{
                                    background: 'var(--card-bg)',
                                    padding: '1.5rem',
                                    borderRadius: '15px',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'start',
                                    marginBottom: '1rem'
                                }}>
                                    <div>
                                        <div style={{ marginBottom: '0.5rem' }}>
                                            {renderStars(review.rating)}
                                        </div>
                                        <h4 style={{
                                            fontSize: '1.1rem',
                                            fontWeight: '700',
                                            color: 'var(--text-primary)',
                                            marginBottom: '0.3rem'
                                        }}>
                                            {review.title}
                                        </h4>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            By {review.userName} • {new Date(review.date).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>

                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    color: 'var(--text-secondary)'
                                }}>
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductReviews;