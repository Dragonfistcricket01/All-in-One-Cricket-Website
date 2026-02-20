export const BRANDS = [
    'Kookaburra',
    'Gray-Nicolls',
    'SS (Sunridges)',
    'MRF',
    'SG (Sanspareils Greenlands)',
    'New Balance',
    'Adidas',
    'Nike',
    'Puma',
    'Gunn & Moore (GM)',
    'Spartan',
    'CA (Chase)',
    'DSC',
    'Ton',
    'BDM',
    'Slazenger',
    'Woodworm',
    'Mongoose',
    'Ihsan',
    'Masuri',
    'BAS',
    'Kingsgroves',
    'Shrey',
    'Other'
];

export const getBrandsByCategory = (category) => {
    // Different categories may have different brand preferences
    const categoryBrands = {
        'cricket-bats': ['Kookaburra', 'Gray-Nicolls', 'SS', 'MRF', 'SG', 'GM', 'Spartan', 'CA', 'BAS', 'Kingsgroves', 'Shrey', 'Other'],
        'cricket-balls': ['Kookaburra', 'SG', 'Gray-Nicolls', 'SS', 'MRF', 'BAS', 'Kingsgroves', 'Shrey', 'Other'],
        'jerseys': ['Adidas', 'Nike', 'Puma', 'New Balance', 'BAS', 'Kingsgroves', 'Shrey', 'Other'],
        'cricket-shoes': ['Adidas', 'Nike', 'Puma', 'New Balance', 'Kookaburra', 'BAS', 'Kingsgroves', 'Shrey', 'Other'],
        'default': BRANDS
    };

    return categoryBrands[category] || categoryBrands.default;
};