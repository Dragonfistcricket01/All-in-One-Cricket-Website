import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllLessons, getCategories, getFeaturedLessons, searchLessons } from '../../../services/lessonsAPI';
import { useLessons } from '../../../context/LessonsContext';
/*import {
    getAllLessons,
    getCategories,
    getFeaturedLessons,
    searchLessons
} from '../../../services/lessonsAPI';
import { useLessons } from '../../../context/LessonsContext';*/
import LessonCard from './LessonCard';
import CategoryFilter from './CategoryFilter';
import './Lessons.css';

const Lessons = () => {
    const navigate = useNavigate();
    const { getStats } = useLessons();

    const [allLessons, setAllLessons] = useState([]);
    const [displayedLessons, setDisplayedLessons] = useState([]);
    const [categories, setCategories] = useState([]);
    const [featuredLessons, setFeaturedLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const stats = getStats();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (allLessons.length > 0) {
            filterAndSortLessons();
        }
    }, [selectedCategory, selectedDifficulty, sortBy, searchTerm, allLessons]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [fetchedLessons, allCategories, featured] = await Promise.all([
                getAllLessons(),
                getCategories(),
                getFeaturedLessons()
            ]);

            setAllLessons(fetchedLessons);
            setDisplayedLessons(fetchedLessons);
            setCategories(allCategories);
            setFeaturedLessons(featured);
        } catch (error) {
            console.error('Error fetching lessons:', error);
        }
        setLoading(false);
    };

    const filterAndSortLessons = () => {
        // Always start from original allLessons
        let filtered = [...allLessons];

        console.log('🔍 Starting filter/sort with:', {
            totalLessons: allLessons.length,
            sortBy,
            category: selectedCategory,
            difficulty: selectedDifficulty,
            searchTerm
        });

        // Search filter
        if (searchTerm.trim()) {
            filtered = filtered.filter(lesson =>
                lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lesson.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lesson.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (lesson.topics && lesson.topics.some(topic =>
                    topic.toLowerCase().includes(searchTerm.toLowerCase())
                ))
            );
            console.log('📝 After search filter:', filtered.length);
        }

        // Category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(lesson =>
                lesson.category && lesson.category.toLowerCase() === selectedCategory.toLowerCase()
            );
            console.log('📂 After category filter:', filtered.length);
        }

        // Difficulty filter
        if (selectedDifficulty !== 'all') {
            filtered = filtered.filter(lesson =>
                lesson.difficulty && lesson.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
            );
            console.log('🎯 After difficulty filter:', filtered.length);
        }

        // IMPROVED SORT with better error handling
        console.log('🔄 Sorting by:', sortBy);

        switch (sortBy) {
            case 'popular':
                filtered.sort((a, b) => {
                    const viewsA = typeof a.views === 'number' ? a.views : parseInt(a.views) || 0;
                    const viewsB = typeof b.views === 'number' ? b.views : parseInt(b.views) || 0;
                    return viewsB - viewsA;
                });
                console.log('👁️ Sorted by popularity - First 3:', filtered.slice(0, 3).map(l => ({
                    title: l.title,
                    views: l.views
                })));
                break;

            case 'rating':
                filtered.sort((a, b) => {
                    const ratingA = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating) || 0;
                    const ratingB = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating) || 0;
                    return ratingB - ratingA;
                });
                console.log('⭐ Sorted by rating - First 3:', filtered.slice(0, 3).map(l => ({
                    title: l.title,
                    rating: l.rating
                })));
                break;

            case 'duration':
                filtered.sort((a, b) => {
                    const parseDuration = (duration) => {
                        if (!duration) return 0;
                        try {
                            const parts = String(duration).split(':').map(p => parseInt(p) || 0);
                            if (parts.length === 2) {
                                // Format: MM:SS
                                return parts[0] * 60 + parts[1];
                            } else if (parts.length === 3) {
                                // Format: HH:MM:SS
                                return parts[0] * 3600 + parts[1] * 60 + parts[2];
                            }
                            return 0;
                        } catch (e) {
                            console.warn('Invalid duration format:', duration);
                            return 0;
                        }
                    };

                    const aDuration = parseDuration(a.duration);
                    const bDuration = parseDuration(b.duration);
                    return aDuration - bDuration;
                });
                console.log('⏱️ Sorted by duration - First 3:', filtered.slice(0, 3).map(l => ({
                    title: l.title,
                    duration: l.duration
                })));
                break;

            case 'featured':
            default:
                filtered.sort((a, b) => {
                    // First, sort by featured status
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;

                    // Then by views
                    const viewsA = typeof a.views === 'number' ? a.views : parseInt(a.views) || 0;
                    const viewsB = typeof b.views === 'number' ? b.views : parseInt(b.views) || 0;
                    return viewsB - viewsA;
                });
                console.log('⭐ Sorted by featured - First 3:', filtered.slice(0, 3).map(l => ({
                    title: l.title,
                    featured: l.featured,
                    views: l.views
                })));
                break;
        }

        console.log('✅ Final filtered count:', filtered.length);

        // Force state update
        setDisplayedLessons([...filtered]);
    };

    const handleLessonClick = (lessonId) => {
        navigate(`/lessons/${lessonId}`);
    };

    const handleClearFilters = () => {
        console.log('🧹 Clearing all filters');
        setSelectedCategory('all');
        setSelectedDifficulty('all');
        setSortBy('featured');
        setSearchTerm('');
    };

    if (loading) {
        return (
            <div className="lessons-page">
                <div className="loading-container-lessons">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading lessons...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="lessons-page">
            {/* Hero Header */}
            <div className="lessons-hero">
                <div className="hero-content-lessons">
                    <div className="hero-text-lessons">
                        <h1>
                            <i className="ri-graduation-cap-line"></i>
                            Cricket Lessons
                        </h1>
                        <p>Master cricket skills with expert tutorials from professional cricketers</p>
                    </div>
                    <div className="hero-stats-lessons">
                        <div className="stat-card-lessons">
                            <i className="ri-play-circle-line"></i>
                            <div>
                                <div className="stat-value-lessons">{allLessons.length}</div>
                                <div className="stat-label-lessons">Total Lessons</div>
                            </div>
                        </div>
                        <div className="stat-card-lessons">
                            <i className="ri-check-double-line"></i>
                            <div>
                                <div className="stat-value-lessons">{stats.totalCompleted}</div>
                                <div className="stat-label-lessons">Completed</div>
                            </div>
                        </div>
                        <div className="stat-card-lessons">
                            <i className="ri-heart-fill"></i>
                            <div>
                                <div className="stat-value-lessons">{stats.totalFavorites}</div>
                                <div className="stat-label-lessons">Favorites</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter BEFORE Featured Section */}
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* Filters and Search */}
            <div className="lessons-controls">
                <div className="controls-container-lessons">
                    {/* Search Bar */}
                    <div className="search-box-lessons">
                        <i className="ri-search-line"></i>
                        <input
                            type="text"
                            placeholder="Search lessons, instructors, topics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button
                                className="clear-search-lessons"
                                onClick={() => setSearchTerm('')}
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        )}
                    </div>

                    {/* Filters */}
                    <div className="filters-row-lessons">
                        {/* Difficulty Filter */}
                        <div className="filter-group-lessons">
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
                        <div className="filter-group-lessons">
                            <label>
                                <i className="ri-sort-desc"></i>
                                Sort By
                            </label>
                            <select
                                value={sortBy}
                                onChange={(e) => {
                                    console.log('📊 Sort changed to:', e.target.value);
                                    setSortBy(e.target.value);
                                }}
                            >
                                <option value="featured">Featured</option>
                                <option value="popular">Most Popular</option>
                                <option value="rating">Highest Rated</option>
                                <option value="duration">Duration</option>
                            </select>
                        </div>

                        {/* Clear Filters */}
                        {(selectedCategory !== 'all' || selectedDifficulty !== 'all' || sortBy !== 'featured' || searchTerm) && (
                            <button className="clear-filters-btn-lessons" onClick={handleClearFilters}>
                                <i className="ri-restart-line"></i>
                                Clear Filters
                            </button>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="results-info-lessons">
                        <span className="results-count-lessons">
                            {displayedLessons.length} {displayedLessons.length === 1 ? 'Lesson' : 'Lessons'}
                        </span>
                        {searchTerm && (
                            <span className="search-info-lessons">
                                for "<strong>{searchTerm}</strong>"
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Featured Lessons - Only show when no filters applied */}
            {featuredLessons.length > 0 && selectedCategory === 'all' && !searchTerm && selectedDifficulty === 'all' && sortBy === 'featured' && (
                <div className="featured-section-lessons">
                    <div className="section-header-lessons">
                        <h2>
                            <i className="ri-star-line"></i>
                            Featured Lessons
                        </h2>
                        <p>Hand-picked lessons from top cricket coaches</p>
                    </div>
                    <div className="featured-grid-lessons">
                        {featuredLessons.slice(0, 3).map(lesson => (
                            <LessonCard
                                key={lesson.id}
                                lesson={lesson}
                                onClick={() => handleLessonClick(lesson.id)}
                                featured
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Lessons Grid */}
            <div className="lessons-main">
                {displayedLessons.length > 0 ? (
                    <div className="lessons-grid">
                        {displayedLessons.map(lesson => (
                            <LessonCard
                                key={lesson.id}
                                lesson={lesson}
                                onClick={() => handleLessonClick(lesson.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-results-lessons">
                        <i className="ri-file-search-line"></i>
                        <h3>No Lessons Found</h3>
                        <p>Try adjusting your filters or search terms</p>
                        <button className="reset-btn-lessons" onClick={handleClearFilters}>
                            <i className="ri-restart-line"></i>
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Lessons;