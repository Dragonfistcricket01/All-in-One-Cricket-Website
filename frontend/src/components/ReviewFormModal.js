import React, { useState, useEffect } from 'react';
import './ReviewFormModal.css';

const ReviewFormModal = ({ isOpen, onClose, onSubmit, editingReview = null }) => {
    const [formData, setFormData] = useState({
        rating: 5,
        title: '',
        comment: '',
        userName: ''
    });
    const [errors, setErrors] = useState({});
    const [hoveredRating, setHoveredRating] = useState(0);

    useEffect(() => {
        if (editingReview) {
            setFormData({
                rating: editingReview.rating,
                title: editingReview.title,
                comment: editingReview.comment,
                userName: editingReview.userName
            });
        } else {
            setFormData({
                rating: 5,
                title: '',
                comment: '',
                userName: ''
            });
        }
        setErrors({});
    }, [editingReview, isOpen]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleRatingClick = (rating) => {
        setFormData(prev => ({
            ...prev,
            rating
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.userName.trim()) {
            newErrors.userName = 'Name is required';
        }

        if (!formData.title.trim()) {
            newErrors.title = 'Review title is required';
        } else if (formData.title.length < 5) {
            newErrors.title = 'Title must be at least 5 characters';
        }

        if (!formData.comment.trim()) {
            newErrors.comment = 'Review comment is required';
        } else if (formData.comment.length < 20) {
            newErrors.comment = 'Comment must be at least 20 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const reviewData = {
            ...formData,
            id: editingReview ? editingReview.id : Date.now(),
            date: editingReview ? editingReview.date : new Date().toISOString(),
            verified: false,
            helpful: editingReview ? editingReview.helpful : 0,
            notHelpful: editingReview ? editingReview.notHelpful : 0
        };

        onSubmit(reviewData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="review-modal-overlay" onClick={onClose}>
            <div className="review-modal" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="review-modal-header">
                    <h2>
                        <i className="ri-edit-line"></i>
                        {editingReview ? 'Edit Your Review' : 'Write a Review'}
                    </h2>
                    <button className="review-modal-close" onClick={onClose}>
                        <i className="ri-close-line"></i>
                    </button>
                </div>

                {/* Form */}
                <form className="review-form" onSubmit={handleSubmit}>
                    {/* Rating Selection */}
                    <div className="form-group">
                        <label>Your Rating <span className="required">*</span></label>
                        <div className="star-rating-input">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`star-btn ${star <= (hoveredRating || formData.rating) ? 'active' : ''}`}
                                    onClick={() => handleRatingClick(star)}
                                    onMouseEnter={() => setHoveredRating(star)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                >
                                    <i className="ri-star-fill"></i>
                                </button>
                            ))}
                            <span className="rating-text">
                                {formData.rating} {formData.rating === 1 ? 'Star' : 'Stars'}
                            </span>
                        </div>
                    </div>

                    {/* Your Name */}
                    <div className="form-group">
                        <label htmlFor="userName">
                            Your Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className={errors.userName ? 'error' : ''}
                        />
                        {errors.userName && (
                            <span className="error-message">{errors.userName}</span>
                        )}
                    </div>

                    {/* Review Title */}
                    <div className="form-group">
                        <label htmlFor="title">
                            Review Title <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Summarize your experience"
                            maxLength="100"
                            className={errors.title ? 'error' : ''}
                        />
                        <div className="char-count">{formData.title.length}/100</div>
                        {errors.title && (
                            <span className="error-message">{errors.title}</span>
                        )}
                    </div>

                    {/* Review Comment */}
                    <div className="form-group">
                        <label htmlFor="comment">
                            Your Review <span className="required">*</span>
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleInputChange}
                            placeholder="Share your thoughts about this product..."
                            rows="6"
                            maxLength="500"
                            className={errors.comment ? 'error' : ''}
                        ></textarea>
                        <div className="char-count">{formData.comment.length}/500</div>
                        {errors.comment && (
                            <span className="error-message">{errors.comment}</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="submit-review-btn">
                            <i className="ri-send-plane-fill"></i>
                            {editingReview ? 'Update Review' : 'Submit Review'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewFormModal;