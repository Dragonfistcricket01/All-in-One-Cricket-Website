import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="category-filter-section-lessons">
            <div className="category-filter-container-lessons">
                <button
                    className={`category-filter-btn-lessons ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => onSelectCategory('all')}
                >
                    <span className="category-icon-lessons"></span>
                    <span className="category-name-lessons">All Categories</span>
                </button>
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`category-filter-btn-lessons ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => onSelectCategory(category.id)}
                        style={{
                            '--category-color': category.color
                        }}
                    >
                        <span className="category-icon-lessons"></span>
                        <span className="category-name">{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;