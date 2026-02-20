import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from './ToastContainer';
import { handleImageError } from '../utils/imageHelpers';
import './Wishlist.css';

const Wishlist = () => {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { formatPrice } = useCurrency();
    const toast = useToast();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product.id);
        toast.success(`${product.name} moved to cart!`);
    };

    const handleRemove = (product) => {
        removeFromWishlist(product.id);
        toast.info(`${product.name} removed from wishlist`);
    };

    const handleClearWishlist = () => {
        if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
            clearWishlist();
            toast.info('Wishlist cleared');
        }
    };

    const handleMoveAllToCart = () => {
        if (wishlist.length === 0) return;

        wishlist.forEach(product => {
            addToCart(product);
        });
        clearWishlist();
        toast.success(`${wishlist.length} items moved to cart!`);
    };

    if (wishlist.length === 0) {
        return (
            <div className="wishlist-page">
                <div className="empty-wishlist">
                    <div className="empty-wishlist-icon">💝</div>
                    <h2>Your Wishlist is Empty</h2>
                    <p>Save your favorite items for later!</p>
                    <button
                        className="shop-now-btn"
                        onClick={() => navigate('/cricket-store')}
                    >
                        <i className="ri-shopping-bag-line"></i>
                        Start Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <div className="wishlist-container">
                {/* Header */}
                <div className="wishlist-header">
                    <div className="wishlist-title-section">
                        <h1>
                            <i className="ri-heart-fill"></i>
                            My Wishlist
                        </h1>
                        <p className="wishlist-count">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}</p>
                    </div>
                    <div className="wishlist-actions">
                        <button
                            className="move-all-btn"
                            onClick={handleMoveAllToCart}
                        >
                            <i className="ri-shopping-cart-line"></i>
                            Move All to Cart
                        </button>
                        <button
                            className="clear-wishlist-btn"
                            onClick={handleClearWishlist}
                        >
                            <i className="ri-delete-bin-line"></i>
                            Clear Wishlist
                        </button>
                    </div>
                </div>

                {/* Wishlist Grid */}
                <div className="wishlist-grid">
                    {wishlist.map(product => (
                        <div key={product.id} className="wishlist-item">
                            {/* Stock Badge */}
                            {!product.inStock && (
                                <div className="out-of-stock-badge">Out of Stock</div>
                            )}

                            {/* Remove Button */}
                            <button
                                className="wishlist-remove-btn"
                                onClick={() => handleRemove(product)}
                                title="Remove from wishlist"
                            >
                                <i className="ri-close-line"></i>
                            </button>

                            {/* Product Image */}
                            <div className="wishlist-item-image">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    onError={handleImageError}
                                />
                            </div>

                            {/* Product Info */}
                            <div className="wishlist-item-info">
                                <p className="wishlist-item-brand">{product.brand}</p>
                                <h3 className="wishlist-item-name">{product.name}</h3>

                                {/* Rating */}
                                <div className="wishlist-item-rating">
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <i
                                                key={i}
                                                className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'}`}
                                            ></i>
                                        ))}
                                    </div>
                                    <span className="rating-text">
                                        {product.rating} ({product.reviews} reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="wishlist-item-price">
                                    <span className="current-price">{formatPrice(product.price)}</span>
                                    {product.originalPrice && product.originalPrice > product.price && (
                                        <>
                                            <span className="original-price">{formatPrice(product.originalPrice)}</span>
                                            <span className="discount-badge">
                                                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="wishlist-item-actions">
                                    <button
                                        className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                                        onClick={() => handleAddToCart(product)}
                                        disabled={!product.inStock}
                                    >
                                        <i className="ri-shopping-cart-line"></i>
                                        {product.inStock ? 'Move to Cart' : 'Out of Stock'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Continue Shopping */}
                <div className="wishlist-footer">
                    <button
                        className="continue-shopping-btn"
                        onClick={() => navigate('/cricket-store')}
                    >
                        <i className="ri-arrow-left-line"></i>
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;