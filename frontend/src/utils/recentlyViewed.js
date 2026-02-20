// Recently Viewed Products Manager

const STORAGE_KEY = 'cricketStoreRecentlyViewed';
const MAX_ITEMS = 10;

// Add product to recently viewed
export const addToRecentlyViewed = (product) => {
    try {
        // Get existing recently viewed
        let recentlyViewed = getRecentlyViewed();

        // Remove if already exists (to avoid duplicates)
        recentlyViewed = recentlyViewed.filter(item => item.id !== product.id);

        // Add to beginning
        recentlyViewed.unshift({
            id: product.id,
            name: product.name,
            brand: product.brand,
            category: product.category,
            price: product.price,
            originalPrice: product.originalPrice,
            images: product.images,
            rating: product.rating,
            reviews: product.reviews,
            inStock: product.inStock,
            timestamp: Date.now()
        });

        // Limit to MAX_ITEMS
        recentlyViewed = recentlyViewed.slice(0, MAX_ITEMS);

        // Save to localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recentlyViewed));

        return recentlyViewed;
    } catch (error) {
        console.error('Error adding to recently viewed:', error);
        return [];
    }
};

// Get recently viewed products
export const getRecentlyViewed = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error getting recently viewed:', error);
        return [];
    }
};

// Get recently viewed excluding current product
export const getRecentlyViewedExcluding = (productId) => {
    const recentlyViewed = getRecentlyViewed();
    return recentlyViewed.filter(item => item.id !== productId);
};

// Clear recently viewed
export const clearRecentlyViewed = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Error clearing recently viewed:', error);
    }
};

// Get count of recently viewed
export const getRecentlyViewedCount = () => {
    return getRecentlyViewed().length;
};