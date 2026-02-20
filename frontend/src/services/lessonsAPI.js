import lessonsData from '../data/lessonsData.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Get all categories
 */
export const getCategories = async () => {
    await delay(300);
    return lessonsData.categories;
};

/**
 * Get all lessons
 */
export const getAllLessons = async () => {
    await delay(300);
    return lessonsData.lessons;
};

/**
 * Get lessons by category
 */
export const getLessonsByCategory = async (categoryId) => {
    await delay(300);
    return lessonsData.lessons.filter(lesson => lesson.category === categoryId);
};

/**
 * Get lesson by ID
 */
export const getLessonById = async (lessonId) => {
    await delay(300);
    return lessonsData.lessons.find(lesson => lesson.id === lessonId);
};

/**
 * Get featured lessons
 */
export const getFeaturedLessons = async () => {
    await delay(300);
    return lessonsData.lessons.filter(lesson => lesson.featured);
};

/**
 * Get lessons by difficulty
 */
export const getLessonsByDifficulty = async (difficulty) => {
    await delay(300);
    return lessonsData.lessons.filter(lesson => lesson.difficulty === difficulty);
};

/**
 * Search lessons
 */
export const searchLessons = async (query) => {
    await delay(300);
    const lowerQuery = query.toLowerCase();
    return lessonsData.lessons.filter(lesson =>
        lesson.title.toLowerCase().includes(lowerQuery) ||
        lesson.description.toLowerCase().includes(lowerQuery) ||
        lesson.instructor.toLowerCase().includes(lowerQuery) ||
        lesson.topics.some(topic => topic.toLowerCase().includes(lowerQuery))
    );
};

/**
 * Get related lessons (same category, different lesson)
 */
export const getRelatedLessons = async (lessonId, limit = 3) => {
    await delay(300);
    const currentLesson = lessonsData.lessons.find(l => l.id === lessonId);
    if (!currentLesson) return [];

    return lessonsData.lessons
        .filter(lesson =>
            lesson.category === currentLesson.category &&
            lesson.id !== lessonId
        )
        .slice(0, limit);
};

/**
 * Get popular lessons (sorted by views)
 */
export const getPopularLessons = async (limit = 6) => {
    await delay(300);
    return [...lessonsData.lessons]
        .sort((a, b) => b.views - a.views)
        .slice(0, limit);
};

/**
 * Get top rated lessons
 */
export const getTopRatedLessons = async (limit = 6) => {
    await delay(300);
    return [...lessonsData.lessons]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
};