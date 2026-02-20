import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import { handleImageError } from '../utils/imageHelpers';
import './ProductSearch.css';

const ProductSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const { formatPrice } = useCurrency();

    // Handle click outside to close results
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Search products
    useEffect(() => {
        if (searchQuery.trim().length < 2) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }

        setIsSearching(true);

        // Simulate search delay
        const searchTimeout = setTimeout(() => {
            const query = searchQuery.toLowerCase();

            const results = PRODUCTS.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
            ).slice(0, 8); // Limit to 8 results

            setSearchResults(results);
            setShowResults(true);
            setIsSearching(false);
        }, 300);

        return () => clearTimeout(searchTimeout);
    }, [searchQuery]);

    const handleProductClick = (product) => {
        setShowResults(false);
        setSearchQuery('');
        navigate(`/cricket-store/${product.category}`);
    };

    const handleViewAllResults = () => {
        if (searchQuery.trim()) {
            navigate(`/cricket-store?search=${encodeURIComponent(searchQuery)}`);
            setShowResults(false);
            setSearchQuery('');
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            handleViewAllResults();
        }
    };

    return (
        <div className="product-search-wrapper" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="search-form">
                <div className="search-input-container">
                    <i className="ri-search-line search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search products, brands, categories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
                        className="search-input"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            className="clear-search-btn"
                            onClick={() => {
                                setSearchQuery('');
                                setSearchResults([]);
                                setShowResults(false);
                            }}
                        >
                            <i className="ri-close-line"></i>
                        </button>
                    )}
                </div>
            </form>

            {/* Search Results Dropdown */}
            {showResults && (
                <div className="search-results-dropdown">
                    {isSearching ? (
                        <div className="search-loading">
                            <i className="ri-loader-4-line spin"></i>
                            <span>Searching...</span>
                        </div>
                    ) : searchResults.length > 0 ? (
                        <>
                            <div className="search-results-list">
                                {searchResults.map(product => (
                                    <div
                                        key={product.id}
                                        className="search-result-item"
                                        onClick={() => handleProductClick(product)}
                                    >
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            onError={handleImageError}
                                        />
                                        <div className="search-result-info">
                                            <h4>{product.name}</h4>
                                            <p className="search-result-brand">{product.brand}</p>
                                            <div className="search-result-footer">
                                                <span className="search-result-price">
                                                    {formatPrice(product.price)}
                                                </span>
                                                <span className={`search-result-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {searchResults.length >= 8 && (
                                <button
                                    className="view-all-results-btn"
                                    onClick={handleViewAllResults}
                                >
                                    <i className="ri-arrow-right-line"></i>
                                    View All Results for "{searchQuery}"
                                </button>
                            )}
                        </>
                    ) : (
                        <div className="no-results">
                            <i className="ri-search-line"></i>
                            <p>No products found for "{searchQuery}"</p>
                            <span>Try different keywords</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductSearch;