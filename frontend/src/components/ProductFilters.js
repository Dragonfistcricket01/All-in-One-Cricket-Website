import React, { useState } from 'react';
import { BRANDS } from '../data/brands';
import './ProductFilters.css';

const ProductFilters = ({ category, onFilterChange, activeFilters }) => {
    const [isOpen, setIsOpen] = useState({
        price: true,
        brand: true,
        rating: true,
        availability: true
    });

    const toggleSection = (section) => {
        setIsOpen(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handlePriceChange = (type, value) => {
        onFilterChange({
            ...activeFilters,
            [type]: value ? parseInt(value) : null
        });
    };

    const handleBrandToggle = (brand) => {
        const currentBrands = activeFilters.brand || [];
        const newBrands = currentBrands.includes(brand)
            ? currentBrands.filter(b => b !== brand)
            : [...currentBrands, brand];

        onFilterChange({
            ...activeFilters,
            brand: newBrands
        });
    };

    const handleRatingChange = (rating) => {
        onFilterChange({
            ...activeFilters,
            minRating: activeFilters.minRating === rating ? null : rating
        });
    };

    const handleStockToggle = () => {
        onFilterChange({
            ...activeFilters,
            inStock: !activeFilters.inStock
        });
    };

    const clearFilters = () => {
        onFilterChange({
            category: activeFilters.category
        });
    };

    const hasActiveFilters = () => {
        return Object.keys(activeFilters).some(key =>
            key !== 'category' && activeFilters[key]
        );
    };

    return (
        <div className="product-filters">
            <div className="filters-header">
                <h3>🔍 Filters</h3>
                {hasActiveFilters() && (
                    <button className="clear-filters-btn" onClick={clearFilters}>
                        Clear All
                    </button>
                )}
            </div>

            {/* Price Filter */}
            <div className="filter-section">
                <button
                    className="filter-section-header"
                    onClick={() => toggleSection('price')}
                >
                    <span>💰 Price Range</span>
                    <i className={`ri-arrow-${isOpen.price ? 'up' : 'down'}-s-line`}></i>
                </button>
                {isOpen.price && (
                    <div className="filter-section-content">
                        {/* Range Slider */}
                        <div className="price-range-slider">
                            <div className="slider-container">
                                <input
                                    type="range"
                                    min="0"
                                    max="50000"
                                    step="500"
                                    value={activeFilters.minPrice || 0}
                                    onChange={(e) => {
                                        const newMin = parseInt(e.target.value);
                                        const currentMax = activeFilters.maxPrice || 50000;
                                        if (newMin <= currentMax) {
                                            onFilterChange({
                                                ...activeFilters,
                                                minPrice: newMin
                                            });
                                        }
                                    }}
                                    className="range-slider range-min"
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="50000"
                                    step="500"
                                    value={activeFilters.maxPrice || 50000}
                                    onChange={(e) => {
                                        const newMax = parseInt(e.target.value);
                                        const currentMin = activeFilters.minPrice || 0;
                                        if (newMax >= currentMin) {
                                            onFilterChange({
                                                ...activeFilters,
                                                maxPrice: newMax
                                            });
                                        }
                                    }}
                                    className="range-slider range-max"
                                />
                                <div className="slider-track"></div>
                                <div
                                    className="slider-range"
                                    style={{
                                        left: `${((activeFilters.minPrice || 0) / 50000) * 100}%`,
                                        right: `${100 - ((activeFilters.maxPrice || 50000) / 50000) * 100}%`
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Price Value Inputs */}
                        <div className="price-inputs">
                            <input
                                type="number"
                                placeholder="0"
                                value={activeFilters.minPrice || ''}
                                onChange={(e) => {
                                    const newMin = e.target.value ? parseInt(e.target.value) : null;
                                    const currentMax = activeFilters.maxPrice || 50000;
                                    if (!newMin || newMin <= currentMax) {
                                        onFilterChange({
                                            ...activeFilters,
                                            minPrice: newMin
                                        });
                                    }
                                }}
                                className="price-input"
                            />
                            <span className="price-separator">-</span>
                            <input
                                type="number"
                                placeholder="50000"
                                value={activeFilters.maxPrice || ''}
                                onChange={(e) => {
                                    const newMax = e.target.value ? parseInt(e.target.value) : null;
                                    const currentMin = activeFilters.minPrice || 0;
                                    if (!newMax || newMax >= currentMin) {
                                        onFilterChange({
                                            ...activeFilters,
                                            maxPrice: newMax
                                        });
                                    }
                                }}
                                className="price-input"
                            />
                        </div>

                        {/* Price Presets */}
                        
                    </div>
                )}
            </div>

            {/* Brand Filter */}
            <div className="filter-section">
                <button
                    className="filter-section-header"
                    onClick={() => toggleSection('brand')}
                >
                    <span>🏷️ Brands</span>
                    <i className={`ri-arrow-${isOpen.brand ? 'up' : 'down'}-s-line`}></i>
                </button>
                {isOpen.brand && (
                    <div className="filter-section-content">
                        <div className="brand-list">
                            {BRANDS.slice(0, 10).map(brand => (
                                <label key={brand} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={(activeFilters.brand || []).includes(brand)}
                                        onChange={() => handleBrandToggle(brand)}
                                    />
                                    <span>{brand}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Rating Filter */}
            <div className="filter-section">
                <button
                    className="filter-section-header"
                    onClick={() => toggleSection('rating')}
                >
                    <span>⭐ Rating</span>
                    <i className={`ri-arrow-${isOpen.rating ? 'up' : 'down'}-s-line`}></i>
                </button>
                {isOpen.rating && (
                    <div className="filter-section-content">
                        <div className="rating-filters">
                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="rating"
                                    checked={!activeFilters.minRating}
                                    onChange={() => handleRatingChange(null)}
                                />
                                <span>All Ratings</span>
                            </label>
                            {[5, 4, 3, 2, 1].map(rating => (
                                <label key={rating} className="rating-option">
                                    <input
                                        type="radio"
                                        name="rating"
                                        checked={activeFilters.minRating === rating}
                                        onChange={() => handleRatingChange(rating)}
                                    />
                                    <span className="rating-stars">
                                        {[...Array(rating)].map((_, i) => (
                                            <i key={i} className="ri-star-fill"></i>
                                        ))}
                                    </span>
                                    <span></span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Availability Filter */}
            <div className="filter-section">
                <button
                    className="filter-section-header"
                    onClick={() => toggleSection('availability')}
                >
                    <span>📦 Availability</span>
                    <i className={`ri-arrow-${isOpen.availability ? 'up' : 'down'}-s-line`}></i>
                </button>
                {isOpen.availability && (
                    <div className="filter-section-content">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={activeFilters.inStock || false}
                                onChange={handleStockToggle}
                            />
                            <span>In Stock Only</span>
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductFilters;