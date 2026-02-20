import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getAllTutorials,
    getCategories,
    getFeaturedTutorials,
    getSubcategories,
    searchTutorials
} from '../../../services/tutorialsAPI';
import { useTutorials } from '../../../context/TutorialsContext';
import TutorialCard from './TutorialCard';
import TutorialCategoryFilter from './TutorialCategoryFilter';
import './Tutorials.css';

const Tutorials = () => {
    const navigate = useNavigate();
    const { getStats } = useTutorials();

    const [allTutorials, setAllTutorials] = useState([]);
    const [displayedTutorials, setDisplayedTutorials] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [featuredTutorials, setFeaturedTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const stats = getStats();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (allTutorials.length > 0) {
            filterAndSortTutorials();
        }
    }, [selectedCategory, selectedSubcategory, selectedDifficulty, sortBy, searchTerm, allTutorials]);

    useEffect(() => {
        if (selectedCategory !== 'all') {
            loadSubcategories(selectedCategory);
        } else {
            setSubcategories([]);
            setSelectedSubcategory('all');
        }
    }, [selectedCategory]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [fetchedTutorials, allCategories, featured] = await Promise.all([
                getAllTutorials(),
                getCategories(),
                getFeaturedTutorials()
            ]);

            setAllTutorials(fetchedTutorials);
            setDisplayedTutorials(fetchedTutorials);
            setCategories(allCategories);
            setFeaturedTutorials(featured);
        } catch (error) {
            console.error('Error fetching tutorials:', error);
        }
        setLoading(false);
    };

    const loadSubcategories = async (categoryId) => {
        try {
            const subs = await getSubcategories(categoryId);
            setSubcategories(subs);
        } catch (error) {
            console.error('Error loading subcategories:', error);
        }
    };

    const filterAndSortTutorials = () => {
        let filtered = [...allTutorials];

        // Search filter
        if (searchTerm.trim()) {
            filtered = filtered.filter(tutorial =>
                tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tutorial.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (tutorial.topics && tutorial.topics.some(topic =>
                    topic.toLowerCase().includes(searchTerm.toLowerCase())
                ))
            );
        }

        // Category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(tutorial =>
                tutorial.type === selectedCategory
            );
        }

        // Subcategory filter
        if (selectedSubcategory !== 'all') {
            filtered = filtered.filter(tutorial =>
                tutorial.subcategory === selectedSubcategory
            );
        }

        // Difficulty filter
        if (selectedDifficulty !== 'all') {
            filtered = filtered.filter(tutorial =>
                tutorial.difficulty && tutorial.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
            );
        }

        // Sort
        switch (sortBy) {
            case 'popular':
                filtered.sort((a, b) => {
                    const viewsA = typeof a.views === 'number' ? a.views : parseInt(a.views) || 0;
                    const viewsB = typeof b.views === 'number' ? b.views : parseInt(b.views) || 0;
                    return viewsB - viewsA;
                });
                break;

            case 'rating':
                filtered.sort((a, b) => {
                    const ratingA = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating) || 0;
                    const ratingB = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating) || 0;
                    return ratingB - ratingA;
                });
                break;

            case 'newest':
                filtered.reverse();
                break;

            case 'featured':
            default:
                filtered.sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    const viewsA = typeof a.views === 'number' ? a.views : parseInt(a.views) || 0;
                    const viewsB = typeof b.views === 'number' ? b.views : parseInt(b.views) || 0;
                    return viewsB - viewsA;
                });
                break;
        }

        setDisplayedTutorials([...filtered]);
    };

    const handleTutorialClick = (tutorialId) => {
        navigate(`/tutorials/${tutorialId}`);
    };

    const handleClearFilters = () => {
        setSelectedCategory('all');
        setSelectedSubcategory('all');
        setSelectedDifficulty('all');
        setSortBy('featured');
        setSearchTerm('');
    };

    if (loading) {
        return (
            <div className="tutorials-page">
                <div className="loading-container-tutorials">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading tutorials...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="tutorials-page">
            {/* Hero Header */}
            <div className="tutorials-hero">
                <div className="hero-content-tutorials">
                    <div className="hero-text-tutorials">
                        <h1>
                            <i className="ri-graduation-cap-line"></i>
                            Cricket Tutorials
                        </h1>
                        <p>Comprehensive guides, video demonstrations, practice plans, and equipment tutorials</p>
                    </div>
                    <div className="hero-stats-tutorials">
                        <div className="stat-card-tutorials">
                            <i className="ri-play-circle-line"></i>
                            <div>
                                <div className="stat-value-tutorials">{allTutorials.length}</div>
                                <div className="stat-label-tutorials">Total Tutorials</div>
                            </div>
                        </div>
                        <div className="stat-card-tutorials">
                            <i className="ri-check-double-line"></i>
                            <div>
                                <div className="stat-value-tutorials">{stats.totalCompleted}</div>
                                <div className="stat-label-tutorials">Completed</div>
                            </div>
                        </div>
                        <div className="stat-card-tutorials">
                            <i className="ri-heart-fill"></i>
                            <div>
                                <div className="stat-value-tutorials">{stats.totalFavorites}</div>
                                <div className="stat-label-tutorials">Favorites</div>
                            </div>
                        </div>
                        <div className="stat-card-tutorials">
                            <i className="ri-bookmark-line"></i>
                            <div>
                                <div className="stat-value-tutorials">{stats.totalBookmarks}</div>
                                <div className="stat-label-tutorials">Bookmarks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <TutorialCategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* Subcategory Pills (if applicable) */}
            {subcategories.length > 0 && (
                <div className="subcategory-pills-tutorials">
                    <button
                        className={`pill-btn-tutorials ${selectedSubcategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedSubcategory('all')}
                    >
                        All
                    </button>
                    {subcategories.map(sub => (
                        <button
                            key={sub.id}
                            className={`pill-btn-tutorials ${selectedSubcategory === sub.id ? 'active' : ''}`}
                            onClick={() => setSelectedSubcategory(sub.id)}
                        >
                            {sub.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Filters and Search */}
            <div className="tutorials-controls">
                <div className="controls-container-tutorials">
                    {/* Search Bar */}
                    <div className="search-box-tutorials">
                        <i className="ri-search-line"></i>
                        <input
                            type="text"
                            placeholder="Search tutorials, instructors, topics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button
                                className="clear-search-tutorials"
                                onClick={() => setSearchTerm('')}
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        )}
                    </div>

                    {/* Filters */}
                    <div className="filters-row-tutorials">
                        {/* Difficulty Filter */}
                        <div className="filter-group-tutorials">
                            <label>
                                <i className="ri-award-line"></i>
                                Difficulty
                            </label>
                            <select
                                value={selectedDifficulty}
                                onChange={(e) => setSelectedDifficulty(e.target.value)}
                            >
                                <option value="all">All Levels</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>

                        {/* Sort Filter */}
                        <div className="filter-group-tutorials">
                            <label>
                                <i className="ri-sort-desc"></i>
                                Sort By
                            </label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="featured">Featured</option>
                                <option value="popular">Most Popular</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>

                        {/* Clear Filters */}
                        {(selectedCategory !== 'all' || selectedDifficulty !== 'all' || sortBy !== 'featured' || searchTerm || selectedSubcategory !== 'all') && (
                            <button className="clear-filters-btn-tutorials" onClick={handleClearFilters}>
                                <i className="ri-restart-line"></i>
                                Clear Filters
                            </button>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="results-info-tutorials">
                        <span className="results-count-tutorials">
                            {displayedTutorials.length} {displayedTutorials.length === 1 ? 'Tutorial' : 'Tutorials'}
                        </span>
                        {searchTerm && (
                            <span className="search-info-tutorials">
                                for "<strong>{searchTerm}</strong>"
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Featured Tutorials */}
            {featuredTutorials.length > 0 && selectedCategory === 'all' && !searchTerm && selectedDifficulty === 'all' && sortBy === 'featured' && (
                <div className="featured-section-tutorials">
                    <div className="section-header-tutorials">
                        <h2>
                            <i className="ri-star-line"></i>
                            Featured Tutorials
                        </h2>
                        <p>Hand-picked tutorials from top cricket coaches</p>
                    </div>
                    <div className="featured-grid-tutorials">
                        {featuredTutorials.slice(0, 3).map(tutorial => (
                            <TutorialCard
                                key={tutorial.id}
                                tutorial={tutorial}
                                onClick={() => handleTutorialClick(tutorial.id)}
                                featured
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Tutorials Grid */}
            <div className="tutorials-main">
                {displayedTutorials.length > 0 ? (
                    <div className="tutorials-grid">
                        {displayedTutorials.map(tutorial => (
                            <TutorialCard
                                key={tutorial.id}
                                tutorial={tutorial}
                                onClick={() => handleTutorialClick(tutorial.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-results-tutorials">
                        <i className="ri-file-search-line"></i>
                        <h3>No Tutorials Found</h3>
                        <p>Try adjusting your filters or search terms</p>
                        <button className="reset-btn-tutorials" onClick={handleClearFilters}>
                            <i className="ri-restart-line"></i>
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tutorials;