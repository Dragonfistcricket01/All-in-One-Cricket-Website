import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from './ToastContainer';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
    const { formatPrice } = useCurrency();
    const toast = useToast();
    const navigate = useNavigate();

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 0; // Free shipping always
    const total = subtotal;

    /*const handleCheckout = () => {
        if (cart.length === 0) {
            toast.error('Your cart is empty!');
            return;
        }
        toast.success('Redirecting to checkout...');
        // Will implement checkout later
    };*/

    if (cart.length === 0) {
        return (
            <div className="cart-page">
                <div className="empty-cart">
                    <div className="empty-cart-icon">🛒</div>
                    <h2>Your Cart is Empty</h2>
                    <p>Add some items to get started!</p>
                    <button
                        className="shop-now-btn"
                        onClick={() => navigate('/cricket-store')}
                    >
                        <i className="ri-shopping-bag-line"></i>
                        Shop Now
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <button className="clear-cart-btn" onClick={clearCart}>
                        <i className="ri-delete-bin-line"></i>
                        Clear Cart
                    </button>
                </div>

                <div className="cart-content">
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.images[0]} alt={item.name} />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p className="cart-item-brand">{item.brand}</p>
                                    <p className="cart-item-price">{formatPrice(item.price)}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <i className="ri-subtract-line"></i>
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <i className="ri-add-line"></i>
                                        </button>
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => {
                                            removeFromCart(item.id);
                                            toast.info('Item removed from cart');
                                        }}
                                    >
                                        <i className="ri-close-line"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping:</span>
                            <span className="free-shipping">FREE ✅</span>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>

                        {/* Single Checkout Button */}
                        <button
                            className="checkout-btn"
                            onClick={() => navigate('/checkout')}
                        >
                            <i className="ri-shopping-cart-line"></i>
                            Proceed to Checkout
                        </button>

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
        </div>
    );
};

export default Cart;