import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProductsArray, categories } from '../data/products';
import { useOrders } from '../context/OrdersContext';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('products');
    const [editingProduct, setEditingProduct] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const { orders, updateOrderStatus } = useOrders();

    // Check if user is admin (in production, check with backend)
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isAdmin = user.email === 'admin@cricket.com' || user.role === 'admin';

    if (!isAdmin) {
        return (
            <div style={{ minHeight: '100vh', padding: '3rem', textAlign: 'center' }}>
                <h1 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    🚫 Access Denied
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    You don't have permission to access the admin panel
                </p>
                <Link to="/dashboard" style={{
                    padding: '1rem 2rem',
                    background: '#667eea',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    fontWeight: '600'
                }}>
                    Go to Dashboard
                </Link>
            </div>
        );
    }

    const allProducts = getAllProductsArray();

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 1rem', background: 'var(--body-bg)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Link to="/dashboard" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ff7800',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                }}>
                    ← Back to Dashboard
                </Link>

                <h1 style={{
                    fontSize: '2.5rem',
                    color: 'var(--text-primary)',
                    fontWeight: '700',
                    marginBottom: '2rem'
                }}>
                    🛠️ Admin Panel
                </h1>

                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '2rem',
                    borderBottom: '2px solid #e5e7eb',
                    flexWrap: 'wrap'
                }}>
                    {['products', 'orders', 'analytics'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '1rem 2rem',
                                background: 'none',
                                border: 'none',
                                borderBottom: activeTab === tab ? '3px solid #667eea' : '3px solid transparent',
                                color: activeTab === tab ? '#667eea' : 'var(--text-secondary)',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                textTransform: 'capitalize',
                                transition: 'all 0.2s'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Products Tab */}
                {activeTab === 'products' && (
                    <div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '2rem'
                        }}>
                            <h2 style={{
                                fontSize: '1.8rem',
                                color: 'var(--text-primary)',
                                fontWeight: '700'
                            }}>
                                Manage Products ({allProducts.length})
                            </h2>
                            <button
                                onClick={() => setShowAddForm(true)}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                ➕ Add New Product
                            </button>
                        </div>

                        {/* Products Table */}
                        <div style={{
                            background: 'var(--card-bg)',
                            borderRadius: '15px',
                            overflow: 'auto',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse'
                            }}>
                                <thead>
                                    <tr style={{
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        color: 'white'
                                    }}>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Image</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Product</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Category</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Price</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Stock</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allProducts.slice(0, 20).map((product, idx) => (
                                        <tr
                                            key={product.id}
                                            style={{
                                                borderBottom: '1px solid #e5e7eb',
                                                background: idx % 2 === 0 ? 'var(--body-bg)' : 'transparent'
                                            }}
                                        >
                                            <td style={{ padding: '1rem' }}>
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px'
                                                    }}
                                                />
                                            </td>
                                            <td style={{ padding: '1rem' }}>
                                                <div style={{
                                                    fontWeight: '600',
                                                    color: 'var(--text-primary)',
                                                    marginBottom: '0.3rem'
                                                }}>
                                                    {product.name}
                                                </div>
                                                <div style={{
                                                    fontSize: '0.85rem',
                                                    color: 'var(--text-secondary)'
                                                }}>
                                                    {product.brand}
                                                </div>
                                            </td>
                                            <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                                                {categories.find(c => c.id === product.category)?.name}
                                            </td>
                                            <td style={{ padding: '1rem' }}>
                                                <div style={{
                                                    fontWeight: '700',
                                                    color: '#667eea'
                                                }}>
                                                    ৳{product.price}
                                                </div>
                                            </td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{
                                                    padding: '0.4rem 0.8rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    background: product.inStock ? '#d1fae520' : '#fee2e220',
                                                    color: product.inStock ? '#065f46' : '#991b1b'
                                                }}>
                                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                                </span>
                                            </td>
                                            <td style={{ padding: '1rem' }}>
                                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                    <button
                                                        onClick={() => setEditingProduct(product)}
                                                        style={{
                                                            padding: '0.5rem 1rem',
                                                            background: '#3b82f6',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            fontSize: '0.85rem',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        ✏️ Edit
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            if (confirm('Delete this product?')) {
                                                                alert('Product deleted (demo)');
                                                            }
                                                        }}
                                                        style={{
                                                            padding: '0.5rem 1rem',
                                                            background: '#ef4444',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            fontSize: '0.85rem',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        🗑️ Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Orders Tab */}
                {activeTab === 'orders' && (
                    <div>
                        <h2 style={{
                            fontSize: '1.8rem',
                            color: 'var(--text-primary)',
                            fontWeight: '700',
                            marginBottom: '2rem'
                        }}>
                            Manage Orders ({orders.length})
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {orders.map(order => (
                                <div
                                    key={order.id}
                                    style={{
                                        background: 'var(--card-bg)',
                                        borderRadius: '15px',
                                        padding: '2rem',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'start',
                                        marginBottom: '1rem',
                                        flexWrap: 'wrap',
                                        gap: '1rem'
                                    }}>
                                        <div>
                                            <h3 style={{
                                                fontSize: '1.2rem',
                                                fontWeight: '700',
                                                color: 'var(--text-primary)',
                                                marginBottom: '0.5rem'
                                            }}>
                                                Order #{order.id}
                                            </h3>
                                            <div style={{
                                                fontSize: '0.9rem',
                                                color: 'var(--text-secondary)'
                                            }}>
                                                Customer: {order.userEmail}
                                            </div>
                                            <div style={{
                                                fontSize: '0.9rem',
                                                color: 'var(--text-secondary)'
                                            }}>
                                                Date: {new Date(order.date).toLocaleDateString()}
                                            </div>
                                        </div>

                                        <select
                                            value={order.status}
                                            onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '8px',
                                                border: '2px solid #e5e7eb',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                background: 'var(--body-bg)',
                                                color: 'var(--text-primary)'
                                            }}
                                        >
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </div>

                                    <div style={{
                                        borderTop: '2px solid #e5e7eb',
                                        paddingTop: '1rem'
                                    }}>
                                        <div style={{
                                            fontSize: '1rem',
                                            color: 'var(--text-secondary)',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {order.items.length} items • Total: ৳{order.total}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {orders.length === 0 && (
                                <div style={{
                                    background: 'var(--card-bg)',
                                    padding: '3rem',
                                    borderRadius: '15px',
                                    textAlign: 'center',
                                    color: 'var(--text-secondary)'
                                }}>
                                    No orders yet
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Analytics Tab */}
                {activeTab === 'analytics' && (
                    <div>
                        <h2 style={{
                            fontSize: '1.8rem',
                            color: 'var(--text-primary)',
                            fontWeight: '700',
                            marginBottom: '2rem'
                        }}>
                            Analytics Dashboard
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem',
                            marginBottom: '3rem'
                        }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                padding: '2rem',
                                borderRadius: '15px',
                                color: 'white'
                            }}>
                                <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.9 }}>
                                    Total Products
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                                    {allProducts.length}
                                </div>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                padding: '2rem',
                                borderRadius: '15px',
                                color: 'white'
                            }}>
                                <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.9 }}>
                                    Total Orders
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                                    {orders.length}
                                </div>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                padding: '2rem',
                                borderRadius: '15px',
                                color: 'white'
                            }}>
                                <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.9 }}>
                                    Total Revenue
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                                    ৳{orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
                                </div>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                padding: '2rem',
                                borderRadius: '15px',
                                color: 'white'
                            }}>
                                <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.9 }}>
                                    Categories
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                                    {categories.length}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;