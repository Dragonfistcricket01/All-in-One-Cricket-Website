import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from './ToastContainer';
import { handleImageError } from '../utils/imageHelpers';
import { addToRecentlyViewed } from '../utils/recentlyViewed';
import './ProductModal.css';

const ProductModal = ({ product, onClose, onOpenSizeGuide }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);

    const { addToCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const { formatPrice } = useCurrency();
    const toast = useToast();

    // Track product view when modal opens
    useEffect(() => {
        addToRecentlyViewed(product);
    }, [product]);

    const isInWishlist = wishlist.some(item => item.id === product.id);

    const handleAddToCart = () => {
        if (!product.inStock) {
            toast.error('Product is out of stock!');
            return;
        }

        const cartItem = {
            ...product,
            quantity,
            selectedSize
        };

        addToCart(cartItem);
        toast.success(`${quantity} × ${product.name} added to cart!`);
        onClose();
    };

    const handleWishlistToggle = () => {
        if (isInWishlist) {
            removeFromWishlist(product.id);
            toast.info('Removed from wishlist');
        } else {
            addToWishlist(product);
            toast.success('Added to wishlist!');
        }
    };

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <i className="ri-close-line"></i>
                </button>

                <div className="modal-content">
                    {/* Left Side - Images */}
                    <div className="modal-images">
                        <div className="main-image-container">
                            <img
                                src={product.images[selectedImage] || product.images[0]}
                                alt={product.name}
                                className="main-image"
                                onError={(e) => handleImageError(e, product.category)}
                            />
                            {discount > 0 && (
                                <div className="modal-discount-badge">-{discount}%</div>
                            )}
                            {!product.inStock && (
                                <div className="modal-stock-badge">Out of Stock</div>
                            )}
                        </div>

                        {product.images.length > 1 && (
                            <div className="thumbnail-list">
                                {product.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${product.name} - ${index + 1}`}
                                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                        onError={(e) => handleImageError(e, product.category)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side - Details */}
                    <div className="modal-details">
                        <div className="modal-header">
                            <div className="product-brand-modal">{product.brand}</div>
                            <button
                                className={`wishlist-btn-modal ${isInWishlist ? 'active' : ''}`}
                                onClick={handleWishlistToggle}
                            >
                                <i className={`ri-heart-${isInWishlist ? 'fill' : 'line'}`}></i>
                            </button>
                        </div>

                        <h2 className="modal-product-name">{product.name}</h2>

                        <div className="modal-rating">
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

                        <div className="modal-price">
                            <span className="current-price-modal">{formatPrice(product.price)}</span>
                            {product.originalPrice && (
                                <span className="original-price-modal">{formatPrice(product.originalPrice)}</span>
                            )}
                        </div>

                        <div className="modal-description">
                            <p>{product.description}</p>
                        </div>

                        {/* Size Selection */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div className="size-selection">
                                <label className="selection-label">Size:</label>
                                <div className="size-options">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity Selection */}
                        <div className="quantity-selection">
                            <label className="selection-label">Quantity:</label>
                            <div className="quantity-controls">
                                <button
                                    className="qty-btn"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    disabled={quantity <= 1}
                                >
                                    <i className="ri-subtract-line"></i>
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="qty-input"
                                    min="1"
                                />
                                <button
                                    className="qty-btn"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <i className="ri-add-line"></i>
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="modal-actions">
                            {/* Size Guide Button (if product has sizes) */}
                            {product.sizes && product.sizes.length > 0 && onOpenSizeGuide && (
                                <button
                                    className="size-guide-btn"
                                    onClick={onOpenSizeGuide}
                                >
                                    <i className="ri-ruler-line"></i>
                                    Size Guide
                                </button>
                            )}

                            {/* Add to Cart Button */}
                            <button
                                className={`add-to-cart-btn-modal ${!product.inStock ? 'disabled' : ''}`}
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                            >
                                <i className="ri-shopping-cart-line"></i>
                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                        </div>

                        {/* Features */}
                        {product.features && product.features.length > 0 && (
                            <div className="modal-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {product.features.map((feature, index) => (
                                        <li key={index}>
                                            <i className="ri-check-line"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Specifications */}
                        {product.specifications && (
                            <div className="modal-specifications">
                                <h4>Specifications:</h4>
                                <div className="specs-grid">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="spec-item">
                                            <span className="spec-label">{key}:</span>
                                            <span className="spec-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;