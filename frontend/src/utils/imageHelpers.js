// Placeholder image for products without images
export const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x400/1a1a2e/ff6300?text=Cricket+Product';

// Category-specific placeholder images
export const CATEGORY_PLACEHOLDERS = {
    'cricket-bats': 'https://via.placeholder.com/400x400/1a1a2e/ff6300?text=Cricket+Bat',
    'cricket-balls': 'https://via.placeholder.com/400x400/1a1a2e/ff6300?text=Cricket+Ball',
    'helmets': 'https://via.placeholder.com/400x400/1a1a2e/ff6300?text=Helmet',
    'pads': 'https://via.placeholder.com/400x400/1a1a2e/ff6300?text=Pads',
    'gloves': 'https://via.placeholder.com/400x400/1a1a2e/ff6300?text=Gloves',
    'shoes': 'https://via.placeholder.com/400x400/1a1a2e/ff6300?text=Cricket+Shoes',
    'jerseys': 'https://via.placeholder.com/400x400/1a1a2e/ff6300?text=Jersey',
    'bags': 'https://via.placeholder.com/400x400/1a1a2e/ff6300?text=Cricket+Bag',
};

// Handle image error
export const handleImageError = (e, category) => {
    e.target.src = CATEGORY_PLACEHOLDERS[category] || PLACEHOLDER_IMAGE;
    e.target.onerror = null; // Prevent infinite loop
};

// Check if image URL is valid
export const isValidImageUrl = (url) => {
    if (!url) return false;
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

// Get image URL with fallback
export const getImageUrl = (imageUrl, category) => {
    if (isValidImageUrl(imageUrl)) {
        return imageUrl;
    }
    return CATEGORY_PLACEHOLDERS[category] || PLACEHOLDER_IMAGE;
};