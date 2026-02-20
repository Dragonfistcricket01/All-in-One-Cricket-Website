import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrders } from '../context/OrdersContext';
import { useCurrency } from '../context/CurrencyContext';
import { handleImageError } from '../utils/imageHelpers';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
    const { orderId } = useParams();
    const { getOrderById } = useOrders();
    const { formatPrice } = useCurrency();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const foundOrder = getOrderById(orderId);
        if (foundOrder) {
            setOrder(foundOrder);
        } else {
            // Order not found, redirect to orders page
            navigate('/orders');
        }

        // Hide confetti after 5 seconds
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [orderId, getOrderById, navigate]);

    if (!order) {
        return (
            <div className="order-confirmation-page">
                <div className="loading-order">
                    <i className="ri-loader-4-line spin"></i>
                    <p>Loading order details...</p>
                </div>
            </div>
        );
    }

    const handleDownloadInvoice = () => {
        // Simple invoice download functionality
        const invoiceContent = `
═══════════════════════════════════════════════
              ALL-IN-ONE CRICKET
           ORDER CONFIRMATION INVOICE
═══════════════════════════════════════════════

Order Number: ${order.orderNumber}
Order Date: ${new Date(order.date).toLocaleDateString()}
Status: ${order.status}

───────────────────────────────────────────────
CUSTOMER INFORMATION
───────────────────────────────────────────────
Name: ${order.shippingInfo.fullName}
Email: ${order.shippingInfo.email}
Phone: ${order.shippingInfo.phone}

───────────────────────────────────────────────
DELIVERY ADDRESS
───────────────────────────────────────────────
${order.shippingInfo.address}
${order.shippingInfo.city}, ${order.shippingInfo.postalCode}
${order.shippingInfo.country}

───────────────────────────────────────────────
ORDER ITEMS
───────────────────────────────────────────────
${order.items.map((item, index) => `
${index + 1}. ${item.name}
   Brand: ${item.brand}
   Quantity: ${item.quantity}
   Price: ${formatPrice(item.price)}
   Total: ${formatPrice(item.price * item.quantity)}
`).join('\n')}

───────────────────────────────────────────────
ORDER SUMMARY
───────────────────────────────────────────────
Subtotal:         ${formatPrice(order.subtotal)}
Shipping:         FREE
───────────────────────────────────────────────
Total:            ${formatPrice(order.total)}
═══════════════════════════════════════════════

Thank you for shopping with All-in-One Cricket!

For support, contact us at support@cricketstore.com
        `;

        const blob = new Blob([invoiceContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Invoice_${order.orderNumber}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="order-confirmation-page">
            {/* Confetti Animation */}
            {showConfetti && (
                <div className="confetti-container">
                    {[...Array(50)].map((_, i) => (
                        <div key={i} className="confetti" style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            background: ['#ff6300', '#ff3300', '#10b981', '#3b82f6', '#fbbf24'][Math.floor(Math.random() * 5)]
                        }}></div>
                    ))}
                </div>
            )}

            <div className="confirmation-container">
                {/* Success Header */}
                <div className="success-header">
                    <div className="success-icon">
                        <i className="ri-checkbox-circle-fill"></i>
                    </div>
                    <h1>Order Placed Successfully! 🎉</h1>
                    <p className="success-message">
                        Thank you for your purchase! Your order has been received and is being processed.
                    </p>
                    <div className="order-number-display">
                        <span className="label">Order Number:</span>
                        <span className="order-number">{order.orderNumber}</span>
                    </div>
                </div>

                {/* Email Confirmation Notice */}
                <div className="email-notice">
                    <i className="ri-mail-check-line"></i>
                    <div>
                        <h3>Confirmation Email Sent</h3>
                        <p>We've sent an order confirmation to <strong>{order.shippingInfo.email}</strong></p>
                    </div>
                </div>

                {/* Order Details */}
                <div className="order-details-section">
                    {/* Order Items */}
                    <div className="confirmation-section">
                        <div className="section-header">
                            <i className="ri-shopping-bag-line"></i>
                            <h2>Order Items</h2>
                        </div>
                        <div className="order-items-list">
                            {order.items.map((item, index) => (
                                <div key={index} className="confirmation-item">
                                    <img
                                        src={item.images[0]}
                                        alt={item.name}
                                        onError={handleImageError}
                                    />
                                    <div className="confirmation-item-info">
                                        <h4>{item.name}</h4>
                                        <p className="item-brand">{item.brand}</p>
                                        <p className="item-qty">Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="confirmation-item-price">
                                        {formatPrice(item.price * item.quantity)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipping Information */}
                    <div className="confirmation-section">
                        <div className="section-header">
                            <i className="ri-map-pin-line"></i>
                            <h2>Delivery Address</h2>
                        </div>
                        <div className="shipping-details">
                            <div className="detail-row">
                                <i className="ri-user-line"></i>
                                <div>
                                    <p className="detail-label">Name</p>
                                    <p className="detail-value">{order.shippingInfo.fullName}</p>
                                </div>
                            </div>
                            <div className="detail-row">
                                <i className="ri-phone-line"></i>
                                <div>
                                    <p className="detail-label">Phone</p>
                                    <p className="detail-value">{order.shippingInfo.phone}</p>
                                </div>
                            </div>
                            <div className="detail-row">
                                <i className="ri-mail-line"></i>
                                <div>
                                    <p className="detail-label">Email</p>
                                    <p className="detail-value">{order.shippingInfo.email}</p>
                                </div>
                            </div>
                            <div className="detail-row">
                                <i className="ri-map-pin-2-line"></i>
                                <div>
                                    <p className="detail-label">Address</p>
                                    <p className="detail-value">
                                        {order.shippingInfo.address}<br />
                                        {order.shippingInfo.city}, {order.shippingInfo.postalCode}<br />
                                        {order.shippingInfo.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="confirmation-section">
                        <div className="section-header">
                            <i className="ri-file-list-line"></i>
                            <h2>Order Summary</h2>
                        </div>
                        <div className="order-summary-breakdown">
                            <div className="summary-row">
                                <span>Subtotal:</span>
                                <span>{formatPrice(order.subtotal)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping:</span>
                                <span className="free-shipping">FREE ✅</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row total-row">
                                <span>Total Paid:</span>
                                <span>{formatPrice(order.total)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="confirmation-actions">
                    <button
                        className="download-invoice-btn"
                        onClick={handleDownloadInvoice}
                    >
                        <i className="ri-download-line"></i>
                        Download Invoice
                    </button>
                    <button
                        className="view-orders-btn"
                        onClick={() => navigate('/orders')}
                    >
                        <i className="ri-file-list-3-line"></i>
                        View All Orders
                    </button>
                    <button
                        className="continue-shopping-btn"
                        onClick={() => navigate('/cricket-store')}
                    >
                        <i className="ri-shopping-bag-line"></i>
                        Continue Shopping
                    </button>
                </div>

                {/* Additional Info */}
                <div className="additional-info">
                    <div className="info-card">
                        <i className="ri-truck-line"></i>
                        <h3>Free Shipping</h3>
                        <p>Your order will be delivered within 3-5 business days</p>
                    </div>
                    <div className="info-card">
                        <i className="ri-shield-check-line"></i>
                        <h3>Secure Payment</h3>
                        <p>Your payment information is always protected</p>
                    </div>
                    <div className="info-card">
                        <i className="ri-customer-service-line"></i>
                        <h3>24/7 Support</h3>
                        <p>We're here to help with any questions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;