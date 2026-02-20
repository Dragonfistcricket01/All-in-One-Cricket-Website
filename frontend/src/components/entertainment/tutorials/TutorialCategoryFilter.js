import React from 'react';
import './Tutorials.css';

const TutorialCategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="tutorial-category-filter">
            <div className="category-filter-container-tutorials">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`category-btn-tutorials ${selectedCategory === category.id ? 'active' : ''}`}
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

export default TutorialCategoryFilter;