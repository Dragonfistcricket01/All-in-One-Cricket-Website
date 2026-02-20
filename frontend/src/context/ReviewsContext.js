import React, { createContext, useState, useContext, useEffect } from 'react';

const ReviewsContext = createContext();

export const useReviews = () => {
    const context = useContext(ReviewsContext);
    if (!context) {
        throw new Error('useReviews must be used within ReviewsProvider');
    }
    return context;
};

export const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState({});

    // Load reviews from localStorage
    useEffect(() => {
        const savedReviews = localStorage.getItem('cricketReviews');
        if (savedReviews) {
            setReviews(JSON.parse(savedReviews));
        }
    }, []);

    // Save reviews to localStorage
    useEffect(() => {
        localStorage.setItem('cricketReviews', JSON.stringify(reviews));
    }, [reviews]);

    const addReview = (productId, review) => {
        setReviews(prev => ({
            ...prev,
            [productId]: [
                ...(prev[productId] || []),
                {
                    ...review,
                    id: Date.now(),
                    date: new Date().toISOString()
                }
            ]
        }));
    };

    const getProductReviews = (productId) => {
        return reviews[productId] || [];
    };

    const getAverageRating = (productId) => {
        const productReviews = reviews[productId] || [];
        if (productReviews.length === 0) return 0;

        const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / productReviews.length).toFixed(1);
    };

    return (
        <ReviewsContext.Provider value={{
            reviews,
            addReview,
            getProductReviews,
            getAverageRating
        }}>
            {children}
        </ReviewsContext.Provider>
    );
};