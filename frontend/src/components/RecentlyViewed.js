import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getRecentlyViewedExcluding } from '../utils/recentlyViewed';
import './RecentlyViewed.css';

const RecentlyViewed = ({ currentProductId, onViewDetails }) => {
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        // Get recently viewed products excluding current one
        const products = getRecentlyViewedExcluding(currentProductId);
        setRecentlyViewed(products);
    }, [currentProductId]);

    if (recentlyViewed.length === 0) {
        return null; // Don't show section if no products
    }

    return (
        <div className="recently-viewed-section">
            <div className="recently-viewed-header">
                <h2>Recently Viewed</h2>
                <p>Products you've looked at</p>
            </div>

            <div className="recently-viewed-grid">
                {recentlyViewed.slice(0, 4).map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetails={onViewDetails}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;