import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, filterProducts, sortProducts } from '../data/products';
import { getCategoryById } from '../data/categories';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import ProductModal from './ProductModal';
import CurrencySelector from './CurrencySelector';
import RecentlyViewed from './RecentlyViewed';
import SizeGuideModal from './SizeGuideModal';
import CustomerReviews from './CustomerReviews';
import './ProductCategory.css';

const ProductCategory = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        category,
        priceRange: [0, 50000],
        brands: [],
        rating: 0,
        inStockOnly: false
    });
    const [sortBy, setSortBy] = useState('newest');
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [showSizeGuide, setShowSizeGuide] = useState(false);

    const categoryData = getCategoryById(category);

    useEffect(() => {
        setLoading(true);
        // Simulate loading
        setTimeout(() => {
            setLoading(false);
        }, 300);

        setFilters({ category });
        window.scrollTo(0, 0);
    }, [category]);

    if (!categoryData) {
        return (
            <div className="category-not-found">
                <h2>Category Not Found</h2>
                <button onClick={() => navigate('/cricket-store')}>
                    Back to Store
                </button>
            </div>
        );
    }

    const filteredProducts = filterProducts(filters);
    const sortedProducts = sortProducts(filteredProducts, sortBy);

    return (
        <div className="product-category-page">
            {/* Category Header */}
            <div className="category-header">
                <div className="category-header-content">
                    <button className="back-btn" onClick={() => navigate('/cricket-store')}>
                        <i className="ri-arrow-left-line"></i>
                        Back to Store
                    </button>
                    <div className="category-title-section">
                        <span className="category-icon-header">
                            <img src={categoryData.icon} alt={categoryData.name} />
                        </span>
                        <div>
                            <h1>{categoryData.name}</h1>
                            <p>{categoryData.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls Bar */}
            <div className="category-controls">
                <div className="controls-left">
                    <button
                        className="toggle-filters-btn"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <i className="ri-filter-3-line"></i>
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </button>
                    <span className="products-count">
                        {sortedProducts.length} Products
                    </span>
                </div>

                <div className="controls-right">
                    <CurrencySelector />
                    <select
                        className="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="newest">Newest First</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                        <option value="name">Name: A-Z</option>
                    </select>
                </div>
            </div>

            {/* Main Content */}
            <div className="category-content">
                {/* Filters Sidebar */}
                <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
                    <ProductFilters
                        category={category}
                        onFilterChange={setFilters}
                        activeFilters={filters}
                    />
                </aside>

                {/* Products Grid */}
                <main className="products-main">
                    <ProductGrid
                        products={sortedProducts}
                        loading={loading}
                        onViewDetails={setSelectedProduct}
                    />
                </main>
            </div>

            {/* Recently Viewed Section */}
            {selectedProduct && (
                <div className="category-container">
                    <RecentlyViewed
                        currentProductId={selectedProduct.id}
                        onViewDetails={setSelectedProduct}
                    />
                </div>
            )}

            {/* Customer Reviews Section */}
            <div className="category-container">
                <CustomerReviews
                    productId={category}
                    productName={categoryData?.name || 'Products'}
                />
            </div>

            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onOpenSizeGuide={() => setShowSizeGuide(true)}
                />
            )}
            
            {/* Size Guide Modal */}
            <SizeGuideModal
                isOpen={showSizeGuide}
                onClose={() => setShowSizeGuide(false)}
                category={category}
            />
        </div>
    );
};

export default ProductCategory;