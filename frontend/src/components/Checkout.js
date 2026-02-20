import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrdersContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from './ToastContainer';
import { sendOrderConfirmation } from '../utils/emailService';
import './Checkout.css';

const Checkout = () => {
    const { cart, clearCart, getCartTotal } = useCart();
    const { createOrder } = useOrders();
    const { formatPrice, currentCurrency } = useCurrency();
    const toast = useToast();
    const navigate = useNavigate();

    const [shippingInfo, setShippingInfo] = useState({
        fullName: '',
        email: '',
        address: ''
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [errors, setErrors] = useState({});

    // Calculate totals
    const subtotal = getCartTotal();
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!shippingInfo.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!shippingInfo.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(shippingInfo.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!shippingInfo.address.trim()) {
            newErrors.address = 'Address is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle place order
    const handlePlaceOrder = async () => {
        if (!validateForm()) {
            toast.error('Please fill in all required fields');
            return;
        }

        if (cart.length === 0) {
            toast.error('Your cart is empty');
            return;
        }

        setIsProcessing(true);

        try {
            // Create order
            const orderData = {
                items: cart,
                shippingInfo,
                subtotal,
                shipping,
                total,
                currency: currentCurrency
            };

            const newOrder = createOrder(orderData);

            // Send confirmation email
            try {
                await sendOrderConfirmation({
                    orderId: newOrder.orderNumber,
                    customerEmail: shippingInfo.email,
                    customerName: shippingInfo.fullName,
                    items: cart,
                    total: total,
                    currency: currentCurrency,
                    shippingAddress: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}`,
                    orderDate: new Date().toLocaleDateString()
                });
            } catch (emailError) {
                console.error('Email sending failed:', emailError);
                // Continue even if email fails
            }

            // Clear cart
            clearCart();

            // Show success message
            toast.success('Order placed successfully!');

            // Redirect to order confirmation
            navigate(`/order-confirmation/${newOrder.id}`);

        } catch (error) {
            console.error('Order placement failed:', error);
            toast.error('Failed to place order. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="checkout-page">
                <div className="empty-checkout">
                    <div className="empty-checkout-icon">🛒</div>
                    <h2>Your Cart is Empty</h2>
                    <p>Add some items to checkout!</p>
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
        <div className="checkout-page">
            <div className="checkout-container">
                {/* Header */}
                <div className="checkout-header">
                    <h1>
                        <i className="ri-shopping-cart-line"></i>
                        Checkout
                    </h1>
                    <div className="checkout-steps">
                        <div className="step active">
                            <div className="step-number">1</div>
                            <div className="step-label">Shipping</div>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <div className="step-label">Review</div>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <div className="step-label">Complete</div>
                        </div>
                    </div>
                </div>

                <div className="checkout-content">
                    {/* Shipping Form */}
                    <div className="checkout-form-section">
                        <div className="section-title">
                            <i className="ri-map-pin-line"></i>
                            <h2>Shipping Information</h2>
                        </div>

                        <form className="shipping-form">
                            {/* Full Name */}
                            <div className="form-group">
                                <label htmlFor="fullName">
                                    Full Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={shippingInfo.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    className={errors.fullName ? 'error' : ''}
                                />
                                {errors.fullName && (
                                    <span className="error-message">{errors.fullName}</span>
                                )}
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={shippingInfo.email}
                                    onChange={handleInputChange}
                                    placeholder="your.email@example.com"
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && (
                                    <span className="error-message">{errors.email}</span>
                                )}
                            </div>

                            {/* Address */}
                            <div className="form-group">
                                <label htmlFor="address">
                                    Delivery Address <span className="required">*</span>
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={shippingInfo.address}
                                    onChange={handleInputChange}
                                    placeholder="Enter your complete delivery address"
                                    rows="4"
                                    className={errors.address ? 'error' : ''}
                                ></textarea>
                                {errors.address && (
                                    <span className="error-message">{errors.address}</span>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="checkout-summary-section">
                        <div className="section-title">
                            <i className="ri-file-list-line"></i>
                            <h2>Order Summary</h2>
                        </div>

                        {/* Cart Items */}
                        <div className="summary-items">
                            {cart.map(item => (
                                <div key={item.id} className="summary-item">
                                    <img src={item.images[0]} alt={item.name} />
                                    <div className="summary-item-info">
                                        <h4>{item.name}</h4>
                                        <p className="summary-item-brand">{item.brand}</p>
                                        <p className="summary-item-qty">Qty: {item.quantity}</p>
                                    </div>
                                    <div className="summary-item-price">
                                        {formatPrice(item.price * item.quantity)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Total Breakdown */}
                        <div className="summary-breakdown">
                            <div className="breakdown-row">
                                <span>Subtotal:</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>
                            <div className="breakdown-row">
                                <span>Shipping:</span>
                                <span className="free-shipping">FREE ✅</span>
                            </div>
                            <div className="breakdown-divider"></div>
                            <div className="breakdown-row total-row">
                                <span>Total:</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <button
                            className={`place-order-btn ${isProcessing ? 'processing' : ''}`}
                            onClick={handlePlaceOrder}
                            disabled={isProcessing}
                        >
                            {isProcessing ? (
                                <>
                                    <i className="ri-loader-4-line spin"></i>
                                    Processing Order...
                                </>
                            ) : (
                                <>
                                    <i className="ri-secure-payment-line"></i>
                                    Place Order
                                </>
                            )}
                        </button>

                        {/* Security Note */}
                        <div className="security-note">
                            <i className="ri-shield-check-line"></i>
                            <p>Your information is secure and encrypted</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;