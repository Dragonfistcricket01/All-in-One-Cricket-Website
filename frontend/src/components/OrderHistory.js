import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../context/OrdersContext';
import { useCurrency } from '../context/CurrencyContext';
import { handleImageError } from '../utils/imageHelpers';
import './OrderHistory.css';

const OrderHistory = () => {
    const { orders, cancelOrder } = useOrders();
    const { formatPrice } = useCurrency();
    const navigate = useNavigate();
    const [expandedOrder, setExpandedOrder] = useState(null);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return '#fbbf24';
            case 'Processing': return '#3b82f6';
            case 'Shipped': return '#8b5cf6';
            case 'Delivered': return '#10b981';
            case 'Cancelled': return '#ef4444';
            default: return '#6b7280';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Pending': return 'ri-time-line';
            case 'Processing': return 'ri-loader-line';
            case 'Shipped': return 'ri-truck-line';
            case 'Delivered': return 'ri-checkbox-circle-line';
            case 'Cancelled': return 'ri-close-circle-line';
            default: return 'ri-information-line';
        }
    };

    const handleCancelOrder = (orderId, status) => {
        if (status !== 'Pending') {
            alert('Only pending orders can be cancelled');
            return;
        }

        if (window.confirm('Are you sure you want to cancel this order?')) {
            cancelOrder(orderId);
        }
    };

    const toggleOrderExpand = (orderId) => {
        setExpandedOrder(expandedOrder === orderId ? null : orderId);
    };

    if (orders.length === 0) {
        return (
            <div className="order-history-page">
                <div className="empty-orders">
                    <div className="empty-orders-icon">📦</div>
                    <h2>No Orders Yet</h2>
                    <p>Start shopping to see your orders here!</p>
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
        <div className="order-history-page">
            <div className="order-history-container">
                {/* Header */}
                <div className="order-history-header">
                    <h1>
                        <i className="ri-file-list-3-line"></i>
                        Order History
                    </h1>
                    <p className="order-count">{orders.length} {orders.length === 1 ? 'order' : 'orders'}</p>
                </div>

                {/* Orders List */}
                <div className="orders-list">
                    {orders.map(order => (
                        <div key={order.id} className="order-card">
                            {/* Order Header */}
                            <div className="order-card-header">
                                <div className="order-header-left">
                                    <div className="order-number">
                                        <i className="ri-hashtag"></i>
                                        {order.orderNumber}
                                    </div>
                                    <div className="order-date">
                                        <i className="ri-calendar-line"></i>
                                        {new Date(order.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                </div>
                                <div className="order-header-right">
                                    <div
                                        className="order-status"
                                        style={{
                                            background: `${getStatusColor(order.status)}20`,
                                            color: getStatusColor(order.status),
                                            border: `2px solid ${getStatusColor(order.status)}`
                                        }}
                                    >
                                        <i className={getStatusIcon(order.status)}></i>
                                        {order.status}
                                    </div>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="order-summary">
                                <div className="order-items-preview">
                                    {order.items.slice(0, 3).map((item, index) => (
                                        <div key={index} className="order-item-preview">
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                onError={handleImageError}
                                            />
                                        </div>
                                    ))}
                                    {order.items.length > 3 && (
                                        <div className="more-items">
                                            +{order.items.length - 3}
                                        </div>
                                    )}
                                </div>

                                <div className="order-total-info">
                                    <span className="order-items-count">
                                        {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                                    </span>
                                    <span className="order-total">
                                        {formatPrice(order.total)}
                                    </span>
                                </div>
                            </div>

                            {/* Order Actions */}
                            <div className="order-actions">
                                <button
                                    className="view-details-btn"
                                    onClick={() => toggleOrderExpand(order.id)}
                                >
                                    <i className={`ri-arrow-${expandedOrder === order.id ? 'up' : 'down'}-s-line`}></i>
                                    {expandedOrder === order.id ? 'Hide Details' : 'View Details'}
                                </button>
                                {order.status === 'Pending' && (
                                    <button
                                        className="cancel-order-btn"
                                        onClick={() => handleCancelOrder(order.id, order.status)}
                                    >
                                        <i className="ri-close-line"></i>
                                        Cancel Order
                                    </button>
                                )}
                            </div>

                            {/* Expanded Order Details */}
                            {expandedOrder === order.id && (
                                <div className="order-details-expanded">
                                    {/* Products */}
                                    <div className="order-products-section">
                                        <h3>Order Items</h3>
                                        <div className="order-products-list">
                                            {order.items.map((item, index) => (
                                                <div key={index} className="order-product-item">
                                                    <img
                                                        src={item.images[0]}
                                                        alt={item.name}
                                                        onError={handleImageError}
                                                    />
                                                    <div className="order-product-info">
                                                        <h4>{item.name}</h4>
                                                        <p className="order-product-brand">{item.brand}</p>
                                                        <p className="order-product-quantity">
                                                            Qty: {item.quantity}
                                                        </p>
                                                    </div>
                                                    <div className="order-product-price">
                                                        {formatPrice(item.price * item.quantity)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Shipping Info */}
                                    <div className="order-shipping-section">
                                        <h3>Shipping Information</h3>
                                        <div className="shipping-info-grid">
                                            <div className="shipping-info-item">
                                                <i className="ri-user-line"></i>
                                                <div>
                                                    <p className="info-label">Name</p>
                                                    <p className="info-value">{order.shippingInfo.fullName}</p>
                                                </div>
                                            </div>
                                            <div className="shipping-info-item">
                                                <i className="ri-phone-line"></i>
                                                <div>
                                                    <p className="info-label">Phone</p>
                                                    <p className="info-value">{order.shippingInfo.phone}</p>
                                                </div>
                                            </div>
                                            <div className="shipping-info-item">
                                                <i className="ri-mail-line"></i>
                                                <div>
                                                    <p className="info-label">Email</p>
                                                    <p className="info-value">{order.shippingInfo.email}</p>
                                                </div>
                                            </div>
                                            <div className="shipping-info-item full-width">
                                                <i className="ri-map-pin-line"></i>
                                                <div>
                                                    <p className="info-label">Delivery Address</p>
                                                    <p className="info-value">
                                                        {order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.postalCode}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order Total Breakdown */}
                                    <div className="order-total-section">
                                        <h3>Order Summary</h3>
                                        <div className="order-breakdown">
                                            <div className="breakdown-row">
                                                <span>Subtotal:</span>
                                                <span>{formatPrice(order.subtotal)}</span>
                                            </div>
                                            <div className="breakdown-row">
                                                <span>Shipping:</span>
                                                <span className="free-shipping">FREE ✅</span>
                                            </div>
                                            <div className="breakdown-divider"></div>
                                            <div className="breakdown-row total-row">
                                                <span>Total:</span>
                                                <span>{formatPrice(order.total)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Continue Shopping */}
                <div className="order-history-footer">
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

export default OrderHistory;