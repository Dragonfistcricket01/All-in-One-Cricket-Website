import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from './ToastContainer';
import { handleImageError } from '../utils/imageHelpers';
import './ProductCard.css';

const ProductCard = ({ product, onViewDetails }) => {
    const { addToCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const { formatPrice } = useCurrency();
    const toast = useToast();
    const [imageLoaded, setImageLoaded] = useState(false);

    const isInWishlist = wishlist.some(item => item.id === product.id);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        if (!product.inStock) {
            toast.error('Product is out of stock!');
            return;
        }
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    const handleWishlistToggle = (e) => {
        e.stopPropagation();
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
        <div className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`} onClick={() => onViewDetails(product)}>
            <div className="product-card-image-container">
                {!imageLoaded && (
                    <div className="image-skeleton"></div>
                )}
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`product-card-image ${imageLoaded ? 'loaded' : ''}`}
                    onError={(e) => handleImageError(e, product.category)}
                    onLoad={() => setImageLoaded(true)}
                />
                {discount > 0 && (
                    <div className="discount-badge">-{discount}%</div>
                )}
                {!product.inStock && (
                    <div className="stock-badge">Out of Stock</div>
                )}
                <button
                    className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
                    onClick={handleWishlistToggle}
                    title={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    <i className={`ri-heart-${isInWishlist ? 'fill' : 'line'}`}></i>
                </button>
            </div>

            <div className="product-card-content">
                <div className="product-brand">{product.brand}</div>
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating">
                    <div className="stars">
                        {[...Array(5)].map((_, i) => (
                            <i
                                key={i}
                                className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'}`}
                            ></i>
                        ))}
                    </div>
                    <span className="rating-text">
                        {product.rating} ({product.reviews})
                    </span>
                </div>

                <div className="product-price">
                    <span className="current-price">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                        <span className="original-price">{formatPrice(product.originalPrice)}</span>
                    )}
                </div>

                <button
                    className="add-to-cart-btn"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                >
                    <i className="ri-shopping-cart-line"></i>
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;