import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getAllAnalysis,
    getCategories,
    getFeaturedAnalysis,
    getSubcategories,
    searchAnalysis
} from '../../../services/analysisAPI';
import { useAnalysis } from '../../../context/AnalysisContext';
import AnalysisCard from './AnalysisCard';
import AnalysisCategoryFilter from './AnalysisCategoryFilter';
import './Analysis.css';

const Analysis = () => {
    const navigate = useNavigate();
    const { getStats } = useAnalysis();

    const [allAnalysis, setAllAnalysis] = useState([]);
    const [displayedAnalysis, setDisplayedAnalysis] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [featuredAnalysis, setFeaturedAnalysis] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const [selectedFormat, setSelectedFormat] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const stats = getStats();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (allAnalysis.length > 0) {
            filterAndSortAnalysis();
        }
    }, [selectedCategory, selectedSubcategory, selectedFormat, sortBy, searchTerm, allAnalysis]);

    useEffect(() => {
        // ALWAYS reset subcategory to 'all' when category changes
        setSelectedSubcategory('all');

        if (selectedCategory !== 'all') {
            loadSubcategories(selectedCategory);
        } else {
            setSubcategories([]);
        }
    }, [selectedCategory]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [fetchedAnalysis, allCategories, featured] = await Promise.all([
                getAllAnalysis(),
                getCategories(),
                getFeaturedAnalysis()
            ]);

            setAllAnalysis(fetchedAnalysis);
            setDisplayedAnalysis(fetchedAnalysis);
            setCategories(allCategories);
            setFeaturedAnalysis(featured);
        } catch (error) {
            console.error('Error fetching analysis:', error);
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

    const filterAndSortAnalysis = () => {
        let filtered = [...allAnalysis];

        // Search filter
        if (searchTerm.trim()) {
            filtered = filtered.filter(analysis =>
                analysis.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                analysis.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (analysis.tags && analysis.tags.some(tag =>
                    tag.toLowerCase().includes(searchTerm.toLowerCase())
                )) ||
                (analysis.match && analysis.match.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (analysis.player && analysis.player.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(analysis =>
                analysis.type === selectedCategory
            );
        }

        // Subcategory filter
        if (selectedSubcategory !== 'all') {
            filtered = filtered.filter(analysis =>
                analysis.category === selectedSubcategory
            );
        }

        // Format filter
        if (selectedFormat !== 'all') {
            filtered = filtered.filter(analysis =>
                analysis.format && analysis.format.toLowerCase() === selectedFormat.toLowerCase()
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

        setDisplayedAnalysis([...filtered]);
    };

    const handleAnalysisClick = (analysisId) => {
        navigate(`/analysis/${analysisId}`);
    };

    const handleClearFilters = () => {
        setSelectedCategory('all');
        setSelectedSubcategory('all');
        setSelectedFormat('all');
        setSortBy('featured');
        setSearchTerm('');
    };

    if (loading) {
        return (
            <div className="analysis-page">
                <div className="loading-container-analysis">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading analysis...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="analysis-page">
            {/* Hero Header */}
            <div className="analysis-hero">
                <div className="hero-content-analysis">
                    <div className="hero-text-analysis">
                        <h1>
                            <i className="ri-bar-chart-box-line"></i>
                            Cricket Analysis
                        </h1>
                        <p>In-depth match analysis, player breakdowns, strategic insights, and data-driven cricket intelligence</p>
                    </div>
                    <div className="hero-stats-analysis">
                        <div className="stat-card-analysis">
                            <i className="ri-file-list-3-line"></i>
                            <div>
                                <div className="stat-value-analysis">{allAnalysis.length}</div>
                                <div className="stat-label-analysis">Total Analysis</div>
                            </div>
                        </div>
                        <div className="stat-card-analysis">
                            <i className="ri-check-double-line"></i>
                            <div>
                                <div className="stat-value-analysis">{stats.totalCompleted}</div>
                                <div className="stat-label-analysis">Completed</div>
                            </div>
                        </div>
                        <div className="stat-card-analysis">
                            <i className="ri-heart-fill"></i>
                            <div>
                                <div className="stat-value-analysis">{stats.totalFavorites}</div>
                                <div className="stat-label-analysis">Favorites</div>
                            </div>
                        </div>
                        <div className="stat-card-analysis">
                            <i className="ri-bookmark-line"></i>
                            <div>
                                <div className="stat-value-analysis">{stats.totalBookmarks}</div>
                                <div className="stat-label-analysis">Bookmarks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <AnalysisCategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* Subcategory Pills */}
            {subcategories.length > 0 && (
                <div className="subcategory-pills-analysis">
                    <button
                        className={`pill-btn-analysis ${selectedSubcategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedSubcategory('all')}
                    >
                        All
                    </button>
                    {subcategories.map(sub => (
                        <button
                            key={sub.id}
                            className={`pill-btn-analysis ${selectedSubcategory === sub.id ? 'active' : ''}`}
                            onClick={() => setSelectedSubcategory(sub.id)}
                        >
                            {sub.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Filters and Search */}
            <div className="analysis-controls">
                <div className="controls-container-analysis">
                    {/* Search Bar */}
                    <div className="search-box-analysis">
                        <i className="ri-search-line"></i>
                        <input
                            type="text"
                            placeholder="Search analysis, matches, players..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button
                                className="clear-search-analysis"
                                onClick={() => setSearchTerm('')}
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        )}
                    </div>

                    {/* Filters */}
                    <div className="filters-row-analysis">
                        {/* Format Filter */}
                        <div className="filter-group-analysis">
                            <label>
                                <i className="ri-trophy-line"></i>
                                Format
                            </label>
                            <select
                                value={selectedFormat}
                                onChange={(e) => setSelectedFormat(e.target.value)}
                            >
                                <option value="all">All Formats</option>
                                <option value="test">Test</option>
                                <option value="odi">ODI</option>
                                <option value="t20">T20</option>
                            </select>
                        </div>

                        {/* Sort Filter */}
                        <div className="filter-group-analysis">
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
                        {(selectedCategory !== 'all' || selectedFormat !== 'all' || sortBy !== 'featured' || searchTerm || selectedSubcategory !== 'all') && (
                            <button className="clear-filters-btn-analysis" onClick={handleClearFilters}>
                                <i className="ri-restart-line"></i>
                                Clear Filters
                            </button>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="results-info-analysis">
                        <span className="results-count-analysis">
                            {displayedAnalysis.length} {displayedAnalysis.length === 1 ? 'Analysis' : 'Analyses'}
                        </span>
                        {searchTerm && (
                            <span className="search-info-analysis">
                                for "<strong>{searchTerm}</strong>"
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Featured Analysis */}
            {featuredAnalysis.length > 0 && selectedCategory === 'all' && !searchTerm && selectedFormat === 'all' && sortBy === 'featured' && (
                <div className="featured-section-analysis">
                    <div className="section-header-analysis">
                        <h2>
                            <i className="ri-star-line"></i>
                            Featured Analysis
                        </h2>
                        <p>Top-rated cricket analysis from experts</p>
                    </div>
                    <div className="featured-grid-analysis">
                        {featuredAnalysis.slice(0, 3).map(analysis => (
                            <AnalysisCard
                                key={analysis.id}
                                analysis={analysis}
                                onClick={() => handleAnalysisClick(analysis.id)}
                                featured
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Analysis Grid */}
            <div className="analysis-main">
                {displayedAnalysis.length > 0 ? (
                    <div className="analysis-grid">
                        {displayedAnalysis.map(analysis => (
                            <AnalysisCard
                                key={analysis.id}
                                analysis={analysis}
                                onClick={() => handleAnalysisClick(analysis.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-results-analysis">
                        <i className="ri-file-search-line"></i>
                        <h3>No Analysis Found</h3>
                        <p>Try adjusting your filters or search terms</p>
                        <button className="reset-btn-analysis" onClick={handleClearFilters}>
                            <i className="ri-restart-line"></i>
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Analysis;