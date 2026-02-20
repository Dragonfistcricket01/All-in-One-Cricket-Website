import React from 'react';
import { Link } from 'react-router-dom';
import { useComparison } from '../context/ComparisonContext';
import { useCart } from '../context/CartContext';

const ProductComparison = () => {
    const { compareList, removeFromCompare, clearComparison } = useComparison();
    const { addToCart, convertPrice, getCurrencySymbol } = useCart();

    if (compareList.length === 0) {
        return (
            <div style={{ minHeight: '100vh', padding: '3rem 1rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <Link to="/cricket-store" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#ff7800',
                        textDecoration: 'none',
                        marginBottom: '2rem',
                        fontSize: '1rem',
                        fontWeight: '600'
                    }}>
                        ← Back to Store
                    </Link>

                    <div style={{
                        background: 'var(--card-bg)',
                        padding: '4rem 2rem',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>⚖️</div>
                        <h2 style={{
                            fontSize: '2rem',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                        }}>
                            No products to compare
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem'
                        }}>
                            Add products to compare their features and prices
                        </p>
                        <Link
                            to="/cricket-store"
                            style={{
                                display: 'inline-block',
                                padding: '1rem 2rem',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                fontWeight: '600'
                            }}
                        >
                            Start Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const comparisonAttributes = [
        { key: 'image', label: 'Product', type: 'image' },
        { key: 'name', label: 'Name', type: 'text' },
        { key: 'brand', label: 'Brand', type: 'text' },
        { key: 'price', label: 'Price', type: 'price' },
        { key: 'rating', label: 'Rating', type: 'rating' },
        { key: 'reviews', label: 'Reviews', type: 'number' },
        { key: 'specifications.material', label: 'Material', type: 'text' },
        { key: 'specifications.weight', label: 'Weight', type: 'text' },
        { key: 'specifications.madeIn', label: 'Made In', type: 'text' },
        { key: 'inStock', label: 'Availability', type: 'stock' },
        { key: 'action', label: 'Action', type: 'action' }
    ];

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc?.[part], obj);
    };

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 1rem', background: 'var(--body-bg)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Link to="/cricket-store" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ff7800',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                }}>
                    ← Back to Store
                </Link>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem'
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        color: 'var(--text-primary)',
                        fontWeight: '700'
                    }}>
                        ⚖️ Compare Products ({compareList.length}/4)
                    </h1>
                    <button
                        onClick={clearComparison}
                        style={{
                            padding: '0.8rem 1.5rem',
                            background: '#ef4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Clear All
                    </button>
                </div>

                {/* Comparison Table */}
                <div style={{
                    background: 'var(--card-bg)',
                    borderRadius: '15px',
                    overflow: 'auto',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        minWidth: '800px'
                    }}>
                        <tbody>
                            {comparisonAttributes.map((attr, idx) => (
                                <tr
                                    key={attr.key}
                                    style={{
                                        borderBottom: idx < comparisonAttributes.length - 1 ? '1px solid #e5e7eb' : 'none',
                                        background: idx % 2 === 0 ? 'var(--body-bg)' : 'transparent'
                                    }}
                                >
                                    {/* Attribute Label */}
                                    <td style={{
                                        padding: '1.5rem',
                                        fontWeight: '700',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        minWidth: '150px',
                                        position: 'sticky',
                                        left: 0,
                                        background: 'var(--card-bg)',
                                        zIndex: 1
                                    }}>
                                        {attr.label}
                                    </td>

                                    {/* Product Values */}
                                    {compareList.map((product) => (
                                        <td
                                            key={product.id}
                                            style={{
                                                padding: '1.5rem',
                                                textAlign: 'center',
                                                color: 'var(--text-secondary)',
                                                minWidth: '200px'
                                            }}
                                        >
                                            {attr.type === 'image' && (
                                                <div style={{ position: 'relative' }}>
                                                    <img
                                                        src={product.images[0]}
                                                        alt={product.name}
                                                        style={{
                                                            width: '150px',
                                                            height: '150px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                            margin: '0 auto'
                                                        }}
                                                    />
                                                    <button
                                                        onClick={() => removeFromCompare(product.id)}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '5px',
                                                            right: '5px',
                                                            background: '#ef4444',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '50%',
                                                            width: '30px',
                                                            height: '30px',
                                                            fontSize: '1.2rem',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            )}

                                            {attr.type === 'text' && (
                                                <span style={{
                                                    fontWeight: attr.key === 'name' ? '700' : '400',
                                                    color: attr.key === 'name' ? 'var(--text-primary)' : 'var(--text-secondary)',
                                                    fontSize: attr.key === 'name' ? '1.1rem' : '1rem'
                                                }}>
                                                    {getNestedValue(product, attr.key) || 'N/A'}
                                                </span>
                                            )}

                                            {attr.type === 'price' && (
                                                <div>
                                                    <div style={{
                                                        fontSize: '1.5rem',
                                                        fontWeight: '700',
                                                        color: '#667eea',
                                                        marginBottom: '0.3rem'
                                                    }}>
                                                        {getCurrencySymbol()} {convertPrice(product.price)}
                                                    </div>
                                                    {product.originalPrice > product.price && (
                                                        <div style={{
                                                            fontSize: '0.9rem',
                                                            color: '#9ca3af',
                                                            textDecoration: 'line-through'
                                                        }}>
                                                            {getCurrencySymbol()} {convertPrice(product.originalPrice)}
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {attr.type === 'rating' && (
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    gap: '0.3rem'
                                                }}>
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} style={{
                                                            color: i < Math.floor(parseFloat(product.rating)) ? '#f59e0b' : '#e5e7eb',
                                                            fontSize: '1.2rem'
                                                        }}>
                                                            ★
                                                        </span>
                                                    ))}
                                                    <span style={{
                                                        marginLeft: '0.5rem',
                                                        fontWeight: '600',
                                                        color: 'var(--text-primary)'
                                                    }}>
                                                        {product.rating}
                                                    </span>
                                                </div>
                                            )}

                                            {attr.type === 'number' && (
                                                <span>{getNestedValue(product, attr.key)}</span>
                                            )}

                                            {attr.type === 'stock' && (
                                                <span style={{
                                                    padding: '0.4rem 1rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '700',
                                                    background: product.inStock ? '#d1fae520' : '#fee2e220',
                                                    color: product.inStock ? '#065f46' : '#991b1b',
                                                    display: 'inline-block'
                                                }}>
                                                    {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                                                </span>
                                            )}

                                            {attr.type === 'action' && (
                                                <button
                                                    onClick={() => addToCart(product)}
                                                    disabled={!product.inStock}
                                                    style={{
                                                        padding: '0.8rem 1.5rem',
                                                        background: product.inStock ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e5e7eb',
                                                        color: product.inStock ? 'white' : '#9ca3af',
                                                        border: 'none',
                                                        borderRadius: '10px',
                                                        fontSize: '0.95rem',
                                                        fontWeight: '600',
                                                        cursor: product.inStock ? 'pointer' : 'not-allowed'
                                                    }}
                                                >
                                                    {product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
                                                </button>
                                            )}
                                        </td>
                                    ))}

                                    {/* Empty cells if less than 4 products */}
                                    {[...Array(4 - compareList.length)].map((_, i) => (
                                        <td
                                            key={`empty-${i}`}
                                            style={{
                                                padding: '1.5rem',
                                                textAlign: 'center',
                                                color: '#9ca3af',
                                                minWidth: '200px'
                                            }}
                                        >
                                            {attr.type === 'image' && (
                                                <div style={{
                                                    width: '150px',
                                                    height: '150px',
                                                    background: '#f3f4f6',
                                                    borderRadius: '10px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto',
                                                    fontSize: '3rem'
                                                }}>
                                                    ➕
                                                </div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Info Box */}
                {compareList.length < 4 && (
                    <div style={{
                        marginTop: '2rem',
                        background: '#ecfdf5',
                        padding: '1.5rem',
                        borderRadius: '15px',
                        borderLeft: '4px solid #10b981',
                        color: '#065f46'
                    }}>
                        <strong>💡 Tip:</strong> You can compare up to 4 products at once. Add more products to see a detailed comparison!
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductComparison;