import React from 'react';
import { getAllProductsArray } from '../data/products';
import ProductCard from './ProductCard';

const ProductRecommendations = ({ currentProduct, onView }) => {
    const allProducts = getAllProductsArray();

    const getRecommendations = () => {
        const recommendations = allProducts
            .filter(product => product.id !== currentProduct.id)
            .map(product => {
                let score = 0;

                if (product.category === currentProduct.category) score += 50;
                if (product.brand === currentProduct.brand) score += 30;

                const priceDiff = Math.abs(product.price - currentProduct.price);
                const priceRange = currentProduct.price * 0.3;
                if (priceDiff <= priceRange) score += 20;

                const commonTags = product.tags?.filter(tag =>
                    currentProduct.tags?.includes(tag)
                ).length || 0;
                score += commonTags * 10;

                return { ...product, score };
            })
            .sort((a, b) => b.score - a.score)
            .slice(0, 4);

        return recommendations;
    };

    const recommendations = getRecommendations();

    if (recommendations.length === 0) return null;

    return (
        <div style={{ marginTop: '4rem' }}>
            <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                🎯 You May Also Like
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '1.5rem'
            }}>
                {recommendations.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onView={onView}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductRecommendations;