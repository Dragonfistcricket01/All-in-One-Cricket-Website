import React, { createContext, useState, useContext, useEffect } from 'react';

const OrdersContext = createContext();

export const useOrders = () => {
    const context = useContext(OrdersContext);
    if (!context) {
        throw new Error('useOrders must be used within OrdersProvider');
    }
    return context;
};

export const OrdersProvider = ({ children }) => {
    // Load orders from localStorage on mount
    const [orders, setOrders] = useState(() => {
        try {
            const savedOrders = localStorage.getItem('cricketStoreOrders');
            return savedOrders ? JSON.parse(savedOrders) : [];
        } catch (error) {
            console.error('Error loading orders:', error);
            return [];
        }
    });

    // Save orders to localStorage whenever they change
    useEffect(() => {
        try {
            localStorage.setItem('cricketStoreOrders', JSON.stringify(orders));
        } catch (error) {
            console.error('Error saving orders:', error);
        }
    }, [orders]);

    // Generate unique order ID
    const generateOrderId = () => {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        return `ORD-${timestamp}-${random}`;
    };

    // Create new order
    const createOrder = (orderData) => {
        const newOrder = {
            id: generateOrderId(),
            orderNumber: generateOrderId(),
            date: new Date().toISOString(),
            status: 'Pending',
            items: orderData.items,
            shippingInfo: orderData.shippingInfo,
            subtotal: orderData.subtotal,
            shipping: orderData.shipping || 0,
            total: orderData.total,
            currency: orderData.currency || 'BDT'
        };

        setOrders(prevOrders => [newOrder, ...prevOrders]);
        return newOrder;
    };

    // Update order status
    const updateOrderStatus = (orderId, newStatus) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderId
                    ? { ...order, status: newStatus }
                    : order
            )
        );
    };

    // Get order by ID
    const getOrderById = (orderId) => {
        return orders.find(order => order.id === orderId);
    };

    // Get orders count
    const getOrdersCount = () => {
        return orders.length;
    };

    // Cancel order
    const cancelOrder = (orderId) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderId && order.status === 'Pending'
                    ? { ...order, status: 'Cancelled' }
                    : order
            )
        );
    };

    const value = {
        orders,
        createOrder,
        updateOrderStatus,
        getOrderById,
        getOrdersCount,
        cancelOrder
    };

    return (
        <OrdersContext.Provider value={value}>
            {children}
        </OrdersContext.Provider>
    );
};