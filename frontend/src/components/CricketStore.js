import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import CurrencySelector from './CurrencySelector';
import ProductSearch from './ProductSearch';
import './CricketStore.css';

const CricketStore = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCategories = CATEGORIES.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="cricket-store-page">
            {/* Hero Section */}
            <section className="store-hero">
                <div className="store-hero-overlay"></div>
                <div className="store-hero-content">
                    <h1 className="store-hero-title">
                        Cricket Store
                    </h1>
                    <p className="store-hero-subtitle">
                        Premium cricket equipment from top brands
                    </p>

                    {/* Product Search */}
                    <div className="store-search-wrapper">
                        <ProductSearch />
                    </div>

                    <div className="store-hero-stats">
                        <div className="hero-stat">
                            <span className="stat-number">16+</span>
                            <span className="stat-label">Categories</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-number">320+</span>
                            <span className="stat-label">Products</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Brands</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search & Currency Section */}
            <section className="store-controls">
                <div className="store-container">
                    <div className="controls-wrapper">
                        <div className="search-box">
                            <i className="ri-search-line"></i>
                            <input
                                type="text"
                                placeholder="Search categories..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <CurrencySelector />
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="categories-section">
                <div className="store-container">
                    <div className="section-header-store">
                        <h2>Shop by Category</h2>
                        <p>Browse our complete range of cricket equipment</p>
                    </div>

                    {filteredCategories.length > 0 ? (
                        <div className="categories-grid-store">
                            {filteredCategories.map(category => (
                                <Link
                                    key={category.id}
                                    to={`/cricket-store/${category.id}`}
                                    className="category-card-store"
                                >
                                    <div className="category-icon-large">
                                        <img src={category.icon} alt={category.name} />
                                    </div>
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                    <div className="category-arrow">
                                        <i className="ri-arrow-right-line"></i>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="no-categories">
                            <div className="no-categories-icon">🔍</div>
                            <h3>No categories found</h3>
                            <p>Try a different search term</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Features Section */}
            <section className="store-features">
                <div className="store-container">
                    <div className="features-grid-store">
                        <div className="feature-item-store">
                            <div className="feature-icon-store">
                                <i className="ri-shield-check-line"></i>
                            </div>
                            <h4>Authentic Products</h4>
                            <p>100% genuine cricket equipment from authorized dealers</p>
                        </div>
                        <div className="feature-item-store">
                            <div className="feature-icon-store">
                                <i className="ri-truck-line"></i>
                            </div>
                            <h4>Fast Delivery</h4>
                            <p>Quick shipping across Bangladesh within 3-5 days</p>
                        </div>
                        <div className="feature-item-store">
                            <div className="feature-icon-store">
                                <i className="ri-customer-service-2-line"></i>
                            </div>
                            <h4>24/7 Support</h4>
                            <p>Expert assistance for all your cricket gear needs</p>
                        </div>
                        <div className="feature-item-store">
                            <div className="feature-icon-store">
                                <i className="ri-arrow-go-back-line"></i>
                            </div>
                            <h4>Easy Returns</h4>
                            <p>Hassle-free 7-day return policy on all products</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CricketStore;