import React from 'react';
import './Analysis.css';

const AnalysisCategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="analysis-category-filter">
            <div className="category-filter-container-analysis">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`category-btn-analysis ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => onSelectCategory(category.id)}
                    >
                        <i className={category.icon}></i>
                        <span>{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AnalysisCategoryFilter;