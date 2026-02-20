import React from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import './ProductGrid.css';

const ProductGrid = ({ products, loading, onViewDetails }) => {
    if (loading) {
        return <LoadingSpinner message="Loading products..." />;
    }

    if (products.length === 0) {
        return (
            <div className="no-products">
                <div className="no-products-icon">🔍</div>
                <h3>No Products Found</h3>
                <p>Try adjusting your filters or search criteria</p>
            </div>
        );
    }

    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={onViewDetails}
                />
            ))}
        </div>
    );
};

export default ProductGrid;