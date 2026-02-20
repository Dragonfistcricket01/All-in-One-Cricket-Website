import umpire from '../assets/store/umpire.png';

// Product Database - 320+ Cricket Products
// All prices in BDT (Bangladeshi Taka)

export const PRODUCTS = [
    // ===================================
    // CRICKET BATS (20 products)
    // ===================================
    {
        id: 'bat-001',
        name: 'Kookaburra Kahuna Pro Cricket Bat',
        category: 'cricket-bats',
        brand: 'Kookaburra',
        price: 25000,
        originalPrice: 28000,
        rating: 4.8,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/mFq5L2Yb/bat-001.jpg'
        ],
        description: 'Professional grade cricket bat with premium English willow. Perfect balance and large sweet spot for powerful shots.',
        features: [
            'Grade 1 English Willow',
            'Large Sweet Spot',
            'Premium Cane Handle',
            '40mm+ Edges',
            'Professional Grade'
        ],
        sizes: ['Short Handle', 'Long Handle', 'Harrow'],
        weight: '1100-1200g',
        specifications: {
            blade: 'Grade 1 English Willow',
            handle: 'Premium Cane',
            grip: 'Octopus Grip',
            edges: '40mm',
            spine: '65mm'
        }
    },
    {
        id: 'bat-002',
        name: 'Gray-Nicolls Legend English Willow',
        category: 'cricket-bats',
        brand: 'Gray-Nicolls',
        price: 22000,
        originalPrice: 25000,
        rating: 4.7,
        reviews: 142,
        inStock: true,
        images: [
            'https://i.ibb.co.com/rRYzPXCf/bat-002.jpg',
        ],
        description: 'Classic design with modern technology. Excellent for stroke players.',
        features: [
            'English Willow',
            'Classic Profile',
            'Light Pickup',
            '38mm Edges',
            'Semi-Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1150-1250g',
        specifications: {
            blade: 'Grade 2 English Willow',
            handle: 'Cane Handle',
            grip: 'Dual Tone Grip',
            edges: '38mm',
            spine: '62mm'
        }
    },
    {
        id: 'bat-003',
        name: 'SS Master 2000 English Willow',
        category: 'cricket-bats',
        brand: 'SS',
        price: 18500,
        originalPrice: 21000,
        rating: 4.6,
        reviews: 98,
        inStock: true,
        images: [
            'https://i.ibb.co.com/1N6j2Ks/bat-003.jpg',
        ],
        description: 'Popular choice for club cricketers. Great value for money.',
        features: [
            'Grade 2 English Willow',
            'Mid Sweet Spot',
            'Balanced Weight',
            '36mm Edges',
            'Round Handle'
        ],
        sizes: ['Short Handle', 'Long Handle', 'Youth'],
        weight: '1120-1220g',
        specifications: {
            blade: 'Grade 2 English Willow',
            handle: 'Cane Handle',
            grip: 'Standard Grip',
            edges: '36mm',
            spine: '60mm'
        }
    },
    {
        id: 'bat-004',
        name: 'MRF Genius Elite Cricket Bat',
        category: 'cricket-bats',
        brand: 'MRF',
        price: 32000,
        originalPrice: 35000,
        rating: 4.9,
        reviews: 203,
        inStock: true,
        images: [
            'https://i.ibb.co.com/0p3Wy5RT/bat-004.png',
        ],
        description: 'Premium bat used by international players. Exceptional performance.',
        features: [
            'Grade 1+ English Willow',
            'Extra Large Sweet Spot',
            'Ultra Light Pickup',
            '42mm Edges',
            'Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1100-1200g',
        specifications: {
            blade: 'Grade 1+ English Willow',
            handle: 'Premium Cane',
            grip: 'Premium Octopus Grip',
            edges: '42mm',
            spine: '67mm'
        }
    },
    {
        id: 'bat-005',
        name: 'SG RSD Spark Kashmir Willow',
        category: 'cricket-bats',
        brand: 'SG',
        price: 4500,
        originalPrice: 5500,
        rating: 4.3,
        reviews: 87,
        inStock: true,
        images: [
            'https://i.ibb.co.com/TqLcW7SP/bat-005.png',
        ],
        description: 'Budget-friendly Kashmir willow bat. Ideal for beginners.',
        features: [
            'Kashmir Willow',
            'Good Balance',
            'Durable',
            '32mm Edges',
            'Round Handle'
        ],
        sizes: ['Short Handle', 'Long Handle', 'Youth', 'Boys'],
        weight: '1150-1250g',
        specifications: {
            blade: 'Kashmir Willow',
            handle: 'Cane Handle',
            grip: 'Basic Grip',
            edges: '32mm',
            spine: '58mm'
        }
    },
    {
        id: 'bat-006',
        name: 'GM Diamond DXM 808 Cricket Bat',
        category: 'cricket-bats',
        brand: 'GM',
        price: 24000,
        originalPrice: 27000,
        rating: 4.7,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/kVDrMpmg/bat-006.jpg',
        ],
        description: 'Classic GM craftsmanship with modern enhancements.',
        features: [
            'Grade 1 English Willow',
            'Traditional Shape',
            'Excellent Pickup',
            '39mm Edges',
            'Semi-Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1130-1230g',
        specifications: {
            blade: 'Grade 1 English Willow',
            handle: 'Cane Handle',
            grip: 'Premium Grip',
            edges: '39mm',
            spine: '63mm'
        }
    },
    {
        id: 'bat-007',
        name: 'Spartan CG Authority Cricket Bat',
        category: 'cricket-bats',
        brand: 'Spartan',
        price: 28000,
        originalPrice: 31000,
        rating: 4.8,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/HfzqKSGW/bat-007.jpg',
        ],
        description: 'Powerful bat for aggressive batsmen. Maximum power output.',
        features: [
            'Grade 1 English Willow',
            'Huge Sweet Spot',
            'Heavy Weight Option',
            '41mm Edges',
            'Round Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1180-1280g',
        specifications: {
            blade: 'Grade 1 English Willow',
            handle: 'Premium Cane',
            grip: 'Octopus Grip',
            edges: '41mm',
            spine: '66mm'
        }
    },
    {
        id: 'bat-008',
        name: 'CA Plus 15000 English Willow',
        category: 'cricket-bats',
        brand: 'CA',
        price: 21000,
        originalPrice: 24000,
        rating: 4.6,
        reviews: 119,
        inStock: true,
        images: [
            'https://i.ibb.co.com/5gwgVCgB/bat-008.jpg',
        ],
        description: 'Reliable performance bat. Great for league cricket.',
        features: [
            'Grade 2 English Willow',
            'Mid-Low Sweet Spot',
            'Good Balance',
            '37mm Edges',
            'Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle', 'Harrow'],
        weight: '1140-1240g',
        specifications: {
            blade: 'Grade 2 English Willow',
            handle: 'Cane Handle',
            grip: 'Standard Grip',
            edges: '37mm',
            spine: '61mm'
        }
    },
    {
        id: 'bat-009',
        name: 'DSC Intense Rage English Willow',
        category: 'cricket-bats',
        brand: 'DSC',
        price: 19500,
        originalPrice: 22000,
        rating: 4.5,
        reviews: 92,
        inStock: true,
        images: [
            'https://i.ibb.co.com/b5D0nH0S/bat-009.jpg',
        ],
        description: 'Aggressive design with modern technology.',
        features: [
            'Grade 2 English Willow',
            'Large Sweet Spot',
            'Light Pickup',
            '38mm Edges',
            'Round Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1120-1220g',
        specifications: {
            blade: 'Grade 2 English Willow',
            handle: 'Cane Handle',
            grip: 'Dual Tone Grip',
            edges: '38mm',
            spine: '62mm'
        }
    },
    {
        id: 'bat-010',
        name: 'Ton Power Plus Cricket Bat',
        category: 'cricket-bats',
        brand: 'Ton',
        price: 16500,
        originalPrice: 19000,
        rating: 4.4,
        reviews: 76,
        inStock: true,
        images: [
            'https://i.ibb.co.com/ymkjzMzR/bat-010.jpg',
        ],
        description: 'Value cricket bat with solid performance.',
        features: [
            'Grade 3 English Willow',
            'Mid Sweet Spot',
            'Standard Weight',
            '35mm Edges',
            'Semi-Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle', 'Youth'],
        weight: '1150-1250g',
        specifications: {
            blade: 'Grade 3 English Willow',
            handle: 'Cane Handle',
            grip: 'Standard Grip',
            edges: '35mm',
            spine: '59mm'
        }
    },
    {
        id: 'bat-011',
        name: 'BDM Galaxy English Willow',
        category: 'cricket-bats',
        brand: 'BDM',
        price: 20000,
        originalPrice: 23000,
        rating: 4.6,
        reviews: 104,
        inStock: true,
        images: [
            'https://i.ibb.co.com/kjYGY28/bat-011.jpg',
        ],
        description: 'Well-balanced bat for all-round players.',
        features: [
            'Grade 2 English Willow',
            'Balanced Profile',
            'Good Pickup',
            '37mm Edges',
            'Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1130-1230g',
        specifications: {
            blade: 'Grade 2 English Willow',
            handle: 'Cane Handle',
            grip: 'Premium Grip',
            edges: '37mm',
            spine: '61mm'
        }
    },
    {
        id: 'bat-012',
        name: 'Kookaburra Blaze',
        category: 'cricket-bats',
        brand: 'Kookaburra',
        price: 23500,
        originalPrice: 26000,
        rating: 4.7,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/60MWqGTb/bat-012.jpg',
        ],
        description: 'Lightweight bat with excellent pickup. Perfect for timing.',
        features: [
            'Grade 1 English Willow',
            'Super Light Pickup',
            'Traditional Shape',
            '38mm Edges',
            'Semi-Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1080-1180g',
        specifications: {
            blade: 'Grade 1 English Willow',
            handle: 'Premium Cane',
            grip: 'Octopus Grip',
            edges: '38mm',
            spine: '62mm'
        }
    },
    {
        id: 'bat-013',
        name: 'Gray-Nicolls Powerbow 6X',
        category: 'cricket-bats',
        brand: 'Gray-Nicolls',
        price: 26500,
        originalPrice: 29000,
        rating: 4.8,
        reviews: 178,
        inStock: true,
        images: [
            'https://i.ibb.co.com/60x1j0m1/bat-013.jpg',
        ],
        description: 'Innovative curved bat design for enhanced power.',
        features: [
            'Grade 1 English Willow',
            'Powerbow Design',
            'Enhanced Sweet Spot',
            '40mm Edges',
            'Round Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1150-1250g',
        specifications: {
            blade: 'Grade 1 English Willow',
            handle: 'Premium Cane',
            grip: 'Premium Grip',
            edges: '40mm',
            spine: '64mm'
        }
    },
    {
        id: 'bat-014',
        name: 'SS TON Reserve Edition',
        category: 'cricket-bats',
        brand: 'SS',
        price: 27500,
        originalPrice: 30000,
        rating: 4.8,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/spnbLJdW/bat-014.jpg',
        ],
        description: 'Premium limited edition bat with superior performance.',
        features: [
            'Grade 1+ English Willow',
            'Massive Sweet Spot',
            'Perfect Balance',
            '41mm Edges',
            'Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1110-1210g',
        specifications: {
            blade: 'Grade 1+ English Willow',
            handle: 'Premium Cane',
            grip: 'Premium Octopus Grip',
            edges: '41mm',
            spine: '65mm'
        }
    },
    {
        id: 'bat-015',
        name: 'MRF Virat Kohli Grand Edition',
        category: 'cricket-bats',
        brand: 'MRF',
        price: 35000,
        originalPrice: 38000,
        rating: 4.9,
        reviews: 234,
        inStock: false,
        images: [
            'https://i.ibb.co.com/j9zZrLNZ/bat-015.jpg',
        ],
        description: 'Signature bat of Virat Kohli. Professional grade excellence.',
        features: [
            'Grade 1+ English Willow',
            'Custom Profile',
            'Ultra Light Pickup',
            '43mm Edges',
            'Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1100-1200g',
        specifications: {
            blade: 'Grade 1+ English Willow',
            handle: 'Premium Cane',
            grip: 'Signature Grip',
            edges: '43mm',
            spine: '68mm'
        }
    },
    {
        id: 'bat-016',
        name: 'SG Cobra Select Kashmir Willow',
        category: 'cricket-bats',
        brand: 'SG',
        price: 5500,
        originalPrice: 6500,
        rating: 4.4,
        reviews: 94,
        inStock: true,
        images: [
            'https://i.ibb.co.com/4nQ13v3V/bat-016.jpg',
        ],
        description: 'Premium Kashmir willow for intermediate players.',
        features: [
            'Premium Kashmir Willow',
            'Good Sweet Spot',
            'Durable Construction',
            '33mm Edges',
            'Round Handle'
        ],
        sizes: ['Short Handle', 'Long Handle', 'Youth'],
        weight: '1140-1240g',
        specifications: {
            blade: 'Kashmir Willow',
            handle: 'Cane Handle',
            grip: 'Standard Grip',
            edges: '33mm',
            spine: '59mm'
        }
    },
    {
        id: 'bat-017',
        name: 'GM Icon DXM 606 Cricket Bat',
        category: 'cricket-bats',
        brand: 'GM',
        price: 22500,
        originalPrice: 25000,
        rating: 4.7,
        reviews: 128,
        inStock: true,
        images: [
            'https://i.ibb.co.com/35LwXnHr/bat-017.jpg',
        ],
        description: 'Icon series bat with premium features.',
        features: [
            'Grade 1 English Willow',
            'Classic GM Profile',
            'Excellent Balance',
            '39mm Edges',
            'Semi-Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1130-1230g',
        specifications: {
            blade: 'Grade 1 English Willow',
            handle: 'Cane Handle',
            grip: 'Premium Grip',
            edges: '39mm',
            spine: '63mm'
        }
    },
    {
        id: 'bat-018',
        name: 'Spartan MSD Limited Edition',
        category: 'cricket-bats',
        brand: 'Spartan',
        price: 30000,
        originalPrice: 33000,
        rating: 4.9,
        reviews: 195,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Cp0GJb1s/bat-018.jpg',
        ],
        description: 'MS Dhoni signature bat. Ultimate power and control.',
        features: [
            'Grade 1+ English Willow',
            'Custom MSD Profile',
            'Heavy Weight',
            '42mm Edges',
            'Round Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1190-1290g',
        specifications: {
            blade: 'Grade 1+ English Willow',
            handle: 'Premium Cane',
            grip: 'Signature Grip',
            edges: '42mm',
            spine: '67mm'
        }
    },
    {
        id: 'bat-019',
        name: 'CA Legend 12000 Cricket Bat',
        category: 'cricket-bats',
        brand: 'CA',
        price: 18500,
        originalPrice: 21000,
        rating: 4.5,
        reviews: 107,
        inStock: true,
        images: [
            'https://i.ibb.co.com/xSbHQ85j/bat-019.jpg',
        ],
        description: 'Reliable performer for competitive cricket.',
        features: [
            'Grade 2 English Willow',
            'Traditional Shape',
            'Good Pickup',
            '37mm Edges',
            'Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1140-1240g',
        specifications: {
            blade: 'Grade 2 English Willow',
            handle: 'Cane Handle',
            grip: 'Standard Grip',
            edges: '37mm',
            spine: '61mm'
        }
    },
    {
        id: 'bat-020',
        name: 'DSC Condor Flight Cricket Bat',
        category: 'cricket-bats',
        brand: 'DSC',
        price: 20500,
        originalPrice: 23000,
        rating: 4.6,
        reviews: 115,
        inStock: true,
        images: [
            'https://i.ibb.co.com/7ByxcJm/bat-020.jpg',
        ],
        description: 'Lightweight bat with explosive power.',
        features: [
            'Grade 2 English Willow',
            'Light Pickup',
            'Large Edges',
            '39mm Edges',
            'Semi-Oval Handle'
        ],
        sizes: ['Short Handle', 'Long Handle'],
        weight: '1120-1220g',
        specifications: {
            blade: 'Grade 2 English Willow',
            handle: 'Cane Handle',
            grip: 'Premium Grip',
            edges: '39mm',
            spine: '62mm'
        }
    },

    // ===================================
    // CRICKET BALLS (20 products)
    // ===================================
    {
        id: 'ball-001',
        name: 'Kookaburra Turf Red Cricket Ball',
        category: 'cricket-balls',
        brand: 'Kookaburra',
        price: 2800,
        originalPrice: 3200,
        rating: 4.8,
        reviews: 245,
        inStock: true,
        images: [
            'https://i.ibb.co.com/SX5kj3WT/ball-001.jpg',
        ],
        description: 'Professional red cricket ball used in international matches.',
        features: [
            'Grade A Leather',
            '4-Piece Construction',
            'Alum Tanned',
            'Cork Center',
            'Hand Stitched'
        ],
        sizes: ['Men (156g)', 'Women (142g)', 'Youth (135g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Grade A Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-002',
        name: 'SG Test Red Cricket Ball',
        category: 'cricket-balls',
        brand: 'SG',
        price: 2500,
        originalPrice: 2800,
        rating: 4.7,
        reviews: 198,
        inStock: true,
        images: [
            'https://i.ibb.co.com/0VCwLD2M/ball-002.png',
        ],
        description: 'Official ball for Test matches in India.',
        features: [
            'Premium Leather',
            '4-Piece Construction',
            'Excellent Seam',
            'Cork Core',
            'Match Grade'
        ],
        sizes: ['Men (156g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-003',
        name: 'Gray-Nicolls Club Cricket Ball Red',
        category: 'cricket-balls',
        brand: 'Gray-Nicolls',
        price: 2200,
        originalPrice: 2500,
        rating: 4.6,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/NgtnCZPr/ball-003.jpg',
        ],
        description: 'Durable ball for club cricket matches.',
        features: [
            'Quality Leather',
            '4-Piece Construction',
            'Good Seam',
            'Cork Center',
            'Club Grade'
        ],
        sizes: ['Men (156g)', 'Youth (135g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Quality Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-004',
        name: 'Kookaburra Regulation White Ball',
        category: 'cricket-balls',
        brand: 'Kookaburra',
        price: 2600,
        originalPrice: 2900,
        rating: 4.8,
        reviews: 223,
        inStock: true,
        images: [
            'https://i.ibb.co.com/211dHsfn/ball-004.jpg',
        ],
        description: 'Official white ball for ODI and T20 matches.',
        features: [
            'Premium White Leather',
            '4-Piece Construction',
            'High Visibility',
            'Cork Core',
            'Match Quality'
        ],
        sizes: ['Men (156g)'],
        type: 'White Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium White Leather',
            construction: '4-Piece',
            color: 'White'
        }
    },
    {
        id: 'ball-005',
        name: 'SG Club White Cricket Ball',
        category: 'cricket-balls',
        brand: 'SG',
        price: 2300,
        originalPrice: 2600,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/WNd6ydrv/ball-005.webp',
        ],
        description: 'Quality white ball for limited overs cricket.',
        features: [
            'White Leather',
            '4-Piece Construction',
            'Good Seam',
            'Cork Center',
            'Limited Overs'
        ],
        sizes: ['Men (156g)'],
        type: 'White Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'White Leather',
            construction: '4-Piece',
            color: 'White'
        }
    },
    {
        id: 'ball-006',
        name: 'SS League Red Cricket Ball',
        category: 'cricket-balls',
        brand: 'SS',
        price: 2100,
        originalPrice: 2400,
        rating: 4.5,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/zHtHLmH2/ball-006.jpg',
        ],
        description: 'Affordable ball for league cricket.',
        features: [
            'Good Quality Leather',
            '4-Piece Construction',
            'Durable',
            'Cork Core',
            'League Quality'
        ],
        sizes: ['Men (156g)', 'Youth (135g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Quality Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-007',
        name: 'MRF Pace Cricket Ball Red',
        category: 'cricket-balls',
        brand: 'MRF',
        price: 2400,
        originalPrice: 2700,
        rating: 4.7,
        reviews: 178,
        inStock: true,
        images: [
            'https://i.ibb.co.com/PZ1M9tY5/ball-007.jpg',
        ],
        description: 'Fast bowler friendly ball with prominent seam.',
        features: [
            'Premium Leather',
            'Prominent Seam',
            'Cork Center',
            'Hand Stitched',
            'Match Quality'
        ],
        sizes: ['Men (156g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-008',
        name: 'Kookaburra Pink Test Ball',
        category: 'cricket-balls',
        brand: 'Kookaburra',
        price: 3000,
        originalPrice: 3300,
        rating: 4.9,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/tw4fcJnB/ball-008.jpg',
        ],
        description: 'Pink ball for day-night Test matches.',
        features: [
            'Premium Pink Leather',
            'High Visibility',
            'Day-Night Grade',
            'Cork Core',
            'International Quality'
        ],
        sizes: ['Men (156g)'],
        type: 'Pink Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium Pink Leather',
            construction: '4-Piece',
            color: 'Pink'
        }
    },
    {
        id: 'ball-009',
        name: 'SG Match Special Red Ball',
        category: 'cricket-balls',
        brand: 'SG',
        price: 2700,
        originalPrice: 3000,
        rating: 4.8,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/ynhDqp3D/ball-009.jpg',
        ],
        description: 'Special edition match ball with superior quality.',
        features: [
            'Premium Leather',
            'Excellent Seam',
            'Cork Core',
            'Match Grade',
            'Hand Selected'
        ],
        sizes: ['Men (156g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-010',
        name: 'Gray-Nicolls Practice Red Ball',
        category: 'cricket-balls',
        brand: 'Gray-Nicolls',
        price: 1800,
        originalPrice: 2100,
        rating: 4.4,
        reviews: 123,
        inStock: true,
        images: [
            'https://i.ibb.co.com/DP7bWSF1/ball-010.jpg',
        ],
        description: 'Durable practice ball for training sessions.',
        features: [
            'Practice Grade Leather',
            'Durable Construction',
            'Cork Center',
            'Good Value',
            'Training Quality'
        ],
        sizes: ['Men (156g)', 'Youth (135g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Practice Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-011',
        name: 'SS Tournament White Ball',
        category: 'cricket-balls',
        brand: 'SS',
        price: 2400,
        originalPrice: 2700,
        rating: 4.6,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Wv7P2sJq/ball-011.png',
        ],
        description: 'Tournament grade white ball for competitive matches.',
        features: [
            'Premium White Leather',
            'High Visibility',
            'Cork Core',
            'Tournament Grade',
            'Hand Stitched'
        ],
        sizes: ['Men (156g)'],
        type: 'White Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium White Leather',
            construction: '4-Piece',
            color: 'White'
        }
    },
    {
        id: 'ball-012',
        name: 'Kookaburra Synthetic Practice Ball',
        category: 'cricket-balls',
        brand: 'Kookaburra',
        price: 1200,
        originalPrice: 1500,
        rating: 4.3,
        reviews: 98,
        inStock: true,
        images: [
            'https://i.ibb.co.com/vG3yPmJ/ball-012.jpg',
        ],
        description: 'Long-lasting synthetic ball for intensive practice.',
        features: [
            'Synthetic Cover',
            'Super Durable',
            'Rubber Core',
            'Weather Resistant',
            'Practice Grade'
        ],
        sizes: ['Men (156g)', 'Youth (135g)'],
        type: 'Synthetic',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Synthetic',
            construction: 'Molded',
            color: 'Red'
        }
    },
    {
        id: 'ball-013',
        name: 'SG Xtreme Red Cricket Ball',
        category: 'cricket-balls',
        brand: 'SG',
        price: 2600,
        originalPrice: 2900,
        rating: 4.7,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/zhmKwQ02/ball-013.webp',
        ],
        description: 'High-performance ball with excellent seam retention.',
        features: [
            'Premium Leather',
            'Excellent Seam',
            'Cork Core',
            'Match Quality',
            'Professional Grade'
        ],
        sizes: ['Men (156g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-014',
        name: 'Gray-Nicolls Elite Red Ball',
        category: 'cricket-balls',
        brand: 'Gray-Nicolls',
        price: 2800,
        originalPrice: 3100,
        rating: 4.8,
        reviews: 201,
        inStock: true,
        images: [
            'https://i.ibb.co.com/LXdGTmqc/ball-014.jpg',
        ],
        description: 'Elite grade ball for professional cricket.',
        features: [
            'Premium Leather',
            'Excellent Seam',
            'Cork Core',
            'Professional Grade',
            'Hand Selected'
        ],
        sizes: ['Men (156g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-015',
        name: 'MRF Genius Cricket Ball White',
        category: 'cricket-balls',
        brand: 'MRF',
        price: 2500,
        originalPrice: 2800,
        rating: 4.7,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/JWpCzCd0/ball-015.jpg',
        ],
        description: 'Premium white ball for limited overs cricket.',
        features: [
            'Premium White Leather',
            'High Visibility',
            'Cork Core',
            'Match Quality',
            'Hand Stitched'
        ],
        sizes: ['Men (156g)'],
        type: 'White Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium White Leather',
            construction: '4-Piece',
            color: 'White'
        }
    },
    {
        id: 'ball-016',
        name: 'SS Super Test Red Ball',
        category: 'cricket-balls',
        brand: 'SS',
        price: 2900,
        originalPrice: 3200,
        rating: 4.8,
        reviews: 178,
        inStock: true,
        images: [
            'https://i.ibb.co.com/1x1HJ7L/ball-016.jpg',
        ],
        description: 'Super test quality for competitive matches.',
        features: [
            'Premium Leather',
            'Prominent Seam',
            'Cork Core',
            'Match Quality',
            'Professional Grade'
        ],
        sizes: ['Men (156g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-017',
        name: 'Kookaburra County Red Ball',
        category: 'cricket-balls',
        brand: 'Kookaburra',
        price: 2300,
        originalPrice: 2600,
        rating: 4.6,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/rGFq4Zhq/ball-017.webp',
        ],
        description: 'County grade ball for club cricket.',
        features: [
            'Quality Leather',
            'Good Seam',
            'Cork Core',
            'Club Grade',
            'Hand Stitched'
        ],
        sizes: ['Men (156g)', 'Youth (135g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Quality Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-018',
        name: 'SG Club Plus White Ball',
        category: 'cricket-balls',
        brand: 'SG',
        price: 2450,
        originalPrice: 2750,
        rating: 4.7,
        reviews: 162,
        inStock: true,
        images: [
            'https://i.ibb.co.com/nqP5ZQ3s/ball-018.png',
        ],
        description: 'Enhanced club grade white ball.',
        features: [
            'Premium White Leather',
            'High Visibility',
            'Cork Core',
            'Club Plus Grade',
            'Hand Stitched'
        ],
        sizes: ['Men (156g)'],
        type: 'White Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium White Leather',
            construction: '4-Piece',
            color: 'White'
        }
    },
    {
        id: 'ball-019',
        name: 'Gray-Nicolls Training Ball Red',
        category: 'cricket-balls',
        brand: 'Gray-Nicolls',
        price: 1600,
        originalPrice: 1900,
        rating: 4.4,
        reviews: 112,
        inStock: true,
        images: [
            'https://i.ibb.co.com/HThHZ3sN/ball-019.png',
        ],
        description: 'Affordable training ball for practice sessions.',
        features: [
            'Training Grade Leather',
            'Durable',
            'Cork Center',
            'Good Value',
            'Practice Quality'
        ],
        sizes: ['Men (156g)', 'Youth (135g)', 'Boys (120g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Training Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },
    {
        id: 'ball-020',
        name: 'MRF Pro Match Red Ball',
        category: 'cricket-balls',
        brand: 'MRF',
        price: 2850,
        originalPrice: 3150,
        rating: 4.8,
        reviews: 195,
        inStock: true,
        images: [
            'https://i.ibb.co.com/ZpPVTyyK/ball-020.jpg',
        ],
        description: 'Professional match ball with superior performance.',
        features: [
            'Premium Leather',
            'Excellent Seam',
            'Cork Core',
            'Professional Grade',
            'Hand Selected'
        ],
        sizes: ['Men (156g)'],
        type: 'Red Leather',
        specifications: {
            weight: '156g',
            circumference: '22.4cm',
            material: 'Premium Leather',
            construction: '4-Piece',
            color: 'Red'
        }
    },

    // ===================================
    // BATTING PADS (20 products)
    // ===================================
    {
        id: 'pad-001',
        name: 'Kookaburra Kahuna Pro Batting Pads',
        category: 'batting-pads',
        brand: 'Kookaburra',
        price: 8500,
        originalPrice: 9500,
        rating: 4.8,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Xrt1S2Vv/pad-001.jpg',
        ],
        description: 'Professional grade batting pads with superior protection and lightweight design.',
        features: [
            'High Density Foam',
            'Lightweight Construction',
            'Excellent Mobility',
            'Reinforced Knee Roll',
            'Professional Grade'
        ],
        sizes: ['Youth', 'Men', 'Ambi (Right/Left)'],
        weight: '850g per pad',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Length',
            straps: '3 Velcro Straps',
            knee_roll: 'Vertical Bolster',
            ankle_protection: 'Enhanced'
        }
    },
    {
        id: 'pad-002',
        name: 'Gray-Nicolls Atomic 900 Batting Pads',
        category: 'batting-pads',
        brand: 'Gray-Nicolls',
        price: 7800,
        originalPrice: 8800,
        rating: 4.7,
        reviews: 112,
        inStock: true,
        images: [
            'https://i.ibb.co.com/cX25Hp4y/pad-002.webp',
        ],
        description: 'Advanced protection with modern design and superior comfort.',
        features: [
            'Multi-Density Foam',
            'Enhanced Knee Protection',
            'Lightweight',
            'Ergonomic Fit',
            'Premium Quality'
        ],
        sizes: ['Youth', 'Men', 'Ambi'],
        weight: '880g per pad',
        specifications: {
            material: 'Multi-Density Foam',
            protection: 'Full Coverage',
            straps: '3 Secure Straps',
            knee_roll: 'Vertical Design',
            ankle_protection: 'Reinforced'
        }
    },
    {
        id: 'pad-003',
        name: 'SS Super Select Batting Pads',
        category: 'batting-pads',
        brand: 'SS',
        price: 6500,
        originalPrice: 7500,
        rating: 4.6,
        reviews: 98,
        inStock: true,
        images: [
            'https://i.ibb.co.com/vxDJ38m5/pad-003.png',
        ],
        description: 'Value batting pads with good protection for club cricket.',
        features: [
            'High Density Foam',
            'Good Mobility',
            'Durable Construction',
            'Comfortable Fit',
            'Club Grade'
        ],
        sizes: ['Youth', 'Men', 'Boys'],
        weight: '920g per pad',
        specifications: {
            material: 'High Density Foam',
            protection: 'Standard Coverage',
            straps: '3 Velcro Straps',
            knee_roll: 'Standard',
            ankle_protection: 'Basic'
        }
    },
    {
        id: 'pad-004',
        name: 'MRF Genius Elite Batting Pads',
        category: 'batting-pads',
        brand: 'MRF',
        price: 9500,
        originalPrice: 10500,
        rating: 4.9,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/RGfNf2Cw/pad-004.png',
        ],
        description: 'Premium batting pads used by international players.',
        features: [
            'Ultra-Light Construction',
            'Maximum Protection',
            'Superior Mobility',
            'Premium Materials',
            'Professional Grade'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '800g per pad',
        specifications: {
            material: 'Premium High Density Foam',
            protection: 'Maximum Coverage',
            straps: '3 Premium Straps',
            knee_roll: 'Enhanced Vertical',
            ankle_protection: 'Superior'
        }
    },
    {
        id: 'pad-005',
        name: 'SG Test Batting Pads',
        category: 'batting-pads',
        brand: 'SG',
        price: 5800,
        originalPrice: 6800,
        rating: 4.5,
        reviews: 89,
        inStock: true,
        images: [
            'https://i.ibb.co.com/nNr8vGrq/pad-005.jpg',
        ],
        description: 'Reliable batting pads for competitive cricket.',
        features: [
            'Standard Foam Protection',
            'Good Fit',
            'Durable',
            'Value for Money',
            'Match Quality'
        ],
        sizes: ['Youth', 'Men', 'Boys'],
        weight: '950g per pad',
        specifications: {
            material: 'Standard Foam',
            protection: 'Full Length',
            straps: '3 Straps',
            knee_roll: 'Standard',
            ankle_protection: 'Standard'
        }
    },
    {
        id: 'pad-006',
        name: 'GM Diamond DXM 808 Batting Pads',
        category: 'batting-pads',
        brand: 'GM',
        price: 8200,
        originalPrice: 9200,
        rating: 4.7,
        reviews: 123,
        inStock: true,
        images: [
            'https://i.ibb.co.com/3m2j9rkj/pad-006.jpg',
        ],
        description: 'Classic GM quality with modern protection technology.',
        features: [
            'High Density Foam',
            'Traditional Design',
            'Excellent Protection',
            'Comfortable',
            'Premium Quality'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '870g per pad',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Coverage',
            straps: '3 Premium Straps',
            knee_roll: 'Vertical',
            ankle_protection: 'Enhanced'
        }
    },
    {
        id: 'pad-007',
        name: 'Spartan Authority Batting Pads',
        category: 'batting-pads',
        brand: 'Spartan',
        price: 8800,
        originalPrice: 9800,
        rating: 4.8,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/wh1m5v8M/pad-007.jpg',
        ],
        description: 'Professional pads with maximum protection and mobility.',
        features: [
            'Ultra Lightweight',
            'Maximum Protection',
            'Enhanced Mobility',
            'Premium Design',
            'Professional Grade'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '820g per pad',
        specifications: {
            material: 'Premium Foam',
            protection: 'Maximum Coverage',
            straps: '3 Secure Straps',
            knee_roll: 'Enhanced',
            ankle_protection: 'Superior'
        }
    },
    {
        id: 'pad-008',
        name: 'CA Plus 15000 Batting Pads',
        category: 'batting-pads',
        brand: 'CA',
        price: 7200,
        originalPrice: 8200,
        rating: 4.6,
        reviews: 107,
        inStock: true,
        images: [
            'https://i.ibb.co.com/LzBV1GFp/pad-008.webp',
        ],
        description: 'Quality pads with good protection for league cricket.',
        features: [
            'High Density Foam',
            'Good Fit',
            'Reliable Protection',
            'Comfortable',
            'League Quality'
        ],
        sizes: ['Youth', 'Men'],
        weight: '900g per pad',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Length',
            straps: '3 Straps',
            knee_roll: 'Standard',
            ankle_protection: 'Good'
        }
    },
    {
        id: 'pad-009',
        name: 'DSC Intense Rage Batting Pads',
        category: 'batting-pads',
        brand: 'DSC',
        price: 6800,
        originalPrice: 7800,
        rating: 4.5,
        reviews: 92,
        inStock: true,
        images: [
            'https://i.ibb.co.com/prfPJ1wZ/pad-009.jpg',
        ],
        description: 'Modern design with good protection and comfort.',
        features: [
            'Multi-Layer Protection',
            'Lightweight',
            'Good Mobility',
            'Comfortable Fit',
            'Match Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '890g per pad',
        specifications: {
            material: 'Multi-Layer Foam',
            protection: 'Full Coverage',
            straps: '3 Velcro Straps',
            knee_roll: 'Standard',
            ankle_protection: 'Standard'
        }
    },
    {
        id: 'pad-010',
        name: 'Kookaburra Blaze',
        category: 'batting-pads',
        brand: 'Kookaburra',
        price: 7500,
        originalPrice: 8500,
        rating: 4.7,
        reviews: 118,
        inStock: true,
        images: [
            'https://i.ibb.co.com/cKPNytGQ/pad-010.webp',
        ],
        description: 'Ultra-lightweight pads with excellent protection.',
        features: [
            'Ultra Light',
            'High Density Foam',
            'Superior Mobility',
            'Comfortable',
            'Premium Quality'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '800g per pad',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Coverage',
            straps: '3 Premium Straps',
            knee_roll: 'Vertical',
            ankle_protection: 'Enhanced'
        }
    },
    {
        id: 'pad-011',
        name: 'Gray-Nicolls Powerbow 6X Pads',
        category: 'batting-pads',
        brand: 'Gray-Nicolls',
        price: 8500,
        originalPrice: 9500,
        rating: 4.8,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/PzhZfssk/pad-011.jpg',
        ],
        description: 'Innovative design with superior protection and comfort.',
        features: [
            'Advanced Foam Technology',
            'Enhanced Protection',
            'Lightweight',
            'Ergonomic Design',
            'Professional Grade'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '840g per pad',
        specifications: {
            material: 'Advanced Multi-Density Foam',
            protection: 'Maximum Coverage',
            straps: '3 Premium Straps',
            knee_roll: 'Enhanced Vertical',
            ankle_protection: 'Superior'
        }
    },
    {
        id: 'pad-012',
        name: 'SS TON Reserve Edition Pads',
        category: 'batting-pads',
        brand: 'SS',
        price: 8900,
        originalPrice: 9900,
        rating: 4.8,
        reviews: 142,
        inStock: true,
        images: [
            'https://i.ibb.co.com/s4J5Vzj/pad-012.webp',
        ],
        description: 'Premium limited edition pads with superior quality.',
        features: [
            'Premium Materials',
            'Maximum Protection',
            'Ultra Light',
            'Superior Comfort',
            'Limited Edition'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '820g per pad',
        specifications: {
            material: 'Premium High Density Foam',
            protection: 'Maximum Coverage',
            straps: '3 Premium Straps',
            knee_roll: 'Enhanced',
            ankle_protection: 'Superior'
        }
    },
    {
        id: 'pad-013',
        name: 'MRF Virat Kohli Limited Edition Pads',
        category: 'batting-pads',
        brand: 'MRF',
        price: 10500,
        originalPrice: 11500,
        rating: 4.9,
        reviews: 189,
        inStock: false,
        images: [
            'https://i.ibb.co.com/qHGG8YC/pad-013.jpg',
        ],
        description: 'Signature pads of Virat Kohli. Professional excellence.',
        features: [
            'Custom Design',
            'Ultra Lightweight',
            'Maximum Protection',
            'Premium Quality',
            'Signature Edition'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '790g per pad',
        specifications: {
            material: 'Premium Advanced Foam',
            protection: 'Maximum Coverage',
            straps: '3 Signature Straps',
            knee_roll: 'Custom Enhanced',
            ankle_protection: 'Maximum'
        }
    },
    {
        id: 'pad-014',
        name: 'SG Cobra Select Batting Pads',
        category: 'batting-pads',
        brand: 'SG',
        price: 6200,
        originalPrice: 7200,
        rating: 4.5,
        reviews: 87,
        inStock: true,
        images: [
            'https://i.ibb.co.com/b55S5twL/pad-014.webp',
        ],
        description: 'Good quality pads for intermediate players.',
        features: [
            'Standard Foam',
            'Good Protection',
            'Comfortable',
            'Durable',
            'Value for Money'
        ],
        sizes: ['Youth', 'Men', 'Boys'],
        weight: '930g per pad',
        specifications: {
            material: 'Standard Foam',
            protection: 'Full Length',
            straps: '3 Straps',
            knee_roll: 'Standard',
            ankle_protection: 'Standard'
        }
    },
    {
        id: 'pad-015',
        name: 'GM Icon DXM 606 Batting Pads',
        category: 'batting-pads',
        brand: 'GM',
        price: 7800,
        originalPrice: 8800,
        rating: 4.7,
        reviews: 126,
        inStock: true,
        images: [
            'https://i.ibb.co.com/CpzD6qQg/pad-015.webp',
        ],
        description: 'Icon series pads with premium protection.',
        features: [
            'High Density Foam',
            'Classic Design',
            'Good Protection',
            'Comfortable',
            'Premium Quality'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '870g per pad',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Coverage',
            straps: '3 Premium Straps',
            knee_roll: 'Vertical',
            ankle_protection: 'Enhanced'
        }
    },
    {
        id: 'pad-016',
        name: 'Spartan MSD Limited Edition Pads',
        category: 'batting-pads',
        brand: 'Spartan',
        price: 9800,
        originalPrice: 10800,
        rating: 4.9,
        reviews: 178,
        inStock: true,
        images: [
            'https://i.ibb.co.com/fYb7Tp65/pad-016.jpg',
        ],
        description: 'MS Dhoni signature pads with ultimate protection.',
        features: [
            'Custom MSD Design',
            'Maximum Protection',
            'Ultra Light',
            'Superior Comfort',
            'Signature Edition'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '810g per pad',
        specifications: {
            material: 'Premium Foam',
            protection: 'Maximum Coverage',
            straps: '3 Signature Straps',
            knee_roll: 'Custom Enhanced',
            ankle_protection: 'Maximum'
        }
    },
    {
        id: 'pad-017',
        name: 'CA Legend 12000 Batting Pads',
        category: 'batting-pads',
        brand: 'CA',
        price: 6800,
        originalPrice: 7800,
        rating: 4.6,
        reviews: 102,
        inStock: true,
        images: [
            'https://i.ibb.co.com/BK53FLkM/pad-017.jpg',
        ],
        description: 'Reliable pads for competitive cricket.',
        features: [
            'High Density Foam',
            'Good Fit',
            'Reliable Protection',
            'Comfortable',
            'Match Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '910g per pad',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Length',
            straps: '3 Straps',
            knee_roll: 'Standard',
            ankle_protection: 'Good'
        }
    },
    {
        id: 'pad-018',
        name: 'DSC Condor Flight Batting Pads',
        category: 'batting-pads',
        brand: 'DSC',
        price: 7200,
        originalPrice: 8200,
        rating: 4.6,
        reviews: 114,
        inStock: true,
        images: [
            'https://i.ibb.co.com/c0TFZPP/pad-018.jpg',
        ],
        description: 'Lightweight pads with good protection.',
        features: [
            'Lightweight Construction',
            'Good Protection',
            'Enhanced Mobility',
            'Comfortable',
            'Match Quality'
        ],
        sizes: ['Men', 'Ambi'],
        weight: '860g per pad',
        specifications: {
            material: 'Multi-Layer Foam',
            protection: 'Full Coverage',
            straps: '3 Velcro Straps',
            knee_roll: 'Vertical',
            ankle_protection: 'Enhanced'
        }
    },
    {
        id: 'pad-019',
        name: 'BDM Galaxy Batting Pads',
        category: 'batting-pads',
        brand: 'BDM',
        price: 7000,
        originalPrice: 8000,
        rating: 4.6,
        reviews: 98,
        inStock: true,
        images: [
            'https://i.ibb.co.com/tPhLmbdT/pad-019.jpg',
        ],
        description: 'Well-balanced pads with good protection.',
        features: [
            'High Density Foam',
            'Balanced Protection',
            'Good Comfort',
            'Durable',
            'Match Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '900g per pad',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Coverage',
            straps: '3 Straps',
            knee_roll: 'Standard',
            ankle_protection: 'Good'
        }
    },
    {
        id: 'pad-020',
        name: 'Ton Power Plus Batting Pads',
        category: 'batting-pads',
        brand: 'Ton',
        price: 5500,
        originalPrice: 6500,
        rating: 4.4,
        reviews: 76,
        inStock: true,
        images: [
            'https://i.ibb.co.com/QFXXdw5h/pad-020.webp',
        ],
        description: 'Budget-friendly pads with decent protection.',
        features: [
            'Standard Foam',
            'Basic Protection',
            'Comfortable',
            'Value for Money',
            'Club Quality'
        ],
        sizes: ['Youth', 'Men', 'Boys'],
        weight: '960g per pad',
        specifications: {
            material: 'Standard Foam',
            protection: 'Standard Coverage',
            straps: '3 Straps',
            knee_roll: 'Basic',
            ankle_protection: 'Standard'
        }
    },
    // ===================================
    // SCOREBOOKS (15 products)
    // ===================================
    {
        id: 'scorebook-001',
        name: 'SS Professional Cricket Scorebook',
        category: 'scorebooks',
        brand: 'SS',
        price: 850,
        originalPrice: 1000,
        rating: 4.7,
        reviews: 234,
        inStock: true,
        images: [
            'https://i.ibb.co.com/KzyPQtkN/scorebook-001.jpg',
        ],
        description: 'Professional grade scorebook with 100 innings capacity. Detailed scoring format.',
        features: [
            '100 Innings Capacity',
            'Detailed Scoring Format',
            'Hardbound Cover',
            'Premium Paper Quality',
            'Ball-by-Ball Analysis'
        ],
        sizes: ['A4 Size'],
        weight: '450g',
        specifications: {
            pages: '200 Pages',
            innings: '100 Innings',
            format: 'Detailed Ball-by-Ball',
            cover: 'Hardbound',
            size: 'A4 (297mm x 210mm)'
        }
    },
    {
        id: 'scorebook-002',
        name: 'Kookaburra Master Scorebook',
        category: 'scorebooks',
        brand: 'Kookaburra',
        price: 950,
        originalPrice: 1100,
        rating: 4.8,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/tPWVXChJ/scorebook-002.jpg',
        ],
        description: 'Premium scorebook for professional cricket scoring and analysis.',
        features: [
            '120 Innings Capacity',
            'Professional Format',
            'Hardbound Premium Cover',
            'High Quality Paper',
            'Statistics Section'
        ],
        sizes: ['A4 Size'],
        weight: '480g',
        specifications: {
            pages: '240 Pages',
            innings: '120 Innings',
            format: 'Professional Ball-by-Ball',
            cover: 'Premium Hardbound',
            size: 'A4 (297mm x 210mm)'
        }
    },
    {
        id: 'scorebook-003',
        name: 'Gray-Nicolls Club Scorebook',
        category: 'scorebooks',
        brand: 'Gray-Nicolls',
        price: 750,
        originalPrice: 900,
        rating: 4.6,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/wNLf2tLt/scorebook-003.jpg',
        ],
        description: 'Standard club scorebook with comprehensive scoring format.',
        features: [
            '80 Innings Capacity',
            'Standard Scoring Format',
            'Durable Cover',
            'Good Paper Quality',
            'Easy to Use'
        ],
        sizes: ['A4 Size'],
        weight: '400g',
        specifications: {
            pages: '160 Pages',
            innings: '80 Innings',
            format: 'Standard Ball-by-Ball',
            cover: 'Hardbound',
            size: 'A4 (297mm x 210mm)'
        }
    },
    {
        id: 'scorebook-004',
        name: 'BAS Scorebook',
        category: 'scorebooks',
        brand: 'BAS',
        price: 1100,
        originalPrice: 1250,
        rating: 4.9,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/WvWwVQGh/scorebook-004.jpg',
        ],
        description: 'Deluxe scorebook with advanced statistics and analysis sections.',
        features: [
            '150 Innings Capacity',
            'Advanced Statistics',
            'Premium Hardbound',
            'Superior Paper Quality',
            'Comprehensive Analysis'
        ],
        sizes: ['A4 Size'],
        weight: '520g',
        specifications: {
            pages: '300 Pages',
            innings: '150 Innings',
            format: 'Advanced Ball-by-Ball',
            cover: 'Premium Leather-like Hardbound',
            size: 'A4 (297mm x 210mm)'
        }
    },
    {
        id: 'scorebook-005',
        name: 'Coaching Youth Cricket',
        category: 'scorebooks',
        brand: 'Other',
        price: 650,
        originalPrice: 800,
        rating: 4.5,
        reviews: 198,
        inStock: true,
        images: [
            'https://i.ibb.co.com/FqDdgKJQ/scorebook-005.jpg',
        ],
        description: 'Affordable scorebook for league and club cricket.',
        features: [
            '60 Innings Capacity',
            'Basic Scoring Format',
            'Standard Cover',
            'Good Value',
            'Simple Layout'
        ],
        sizes: ['A4 Size'],
        weight: '350g',
        specifications: {
            pages: '120 Pages',
            innings: '60 Innings',
            format: 'Standard',
            cover: 'Paperback',
            size: 'A4 (297mm x 210mm)'
        }
    },
    {
        id: 'scorebook-006',
        name: 'GM Diamond Scorebook',
        category: 'scorebooks',
        brand: 'GM',
        price: 900,
        originalPrice: 1050,
        rating: 4.7,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/rK10zY9p/scorebook-006.png',
        ],
        description: 'Premium scorebook with detailed recording sections.',
        features: [
            '100 Innings Capacity',
            'Professional Layout',
            'Hardbound Cover',
            'High Quality Paper',
            'Statistics Tracking'
        ],
        sizes: ['A4 Size'],
        weight: '460g',
        specifications: {
            pages: '200 Pages',
            innings: '100 Innings',
            format: 'Professional Ball-by-Ball',
            cover: 'Hardbound',
            size: 'A4 (297mm x 210mm)'
        }
    },
    {
        id: 'scorebook-007',
        name: 'Cricket Skills and Techniques',
        category: 'scorebooks',
        brand: 'Other',
        price: 1200,
        originalPrice: 1400,
        rating: 4.8,
        reviews: 123,
        inStock: true,
        images: [
            'https://i.ibb.co.com/JW07DcrK/scorebook-007.jpg',
        ],
        description: 'Comprehensive coaching and scorebook with player development sections.',
        features: [
            '80 Innings + Coaching Sections',
            'Player Development Tracking',
            'Training Log',
            'Premium Quality',
            'Comprehensive Format'
        ],
        sizes: ['A4 Size'],
        weight: '550g',
        specifications: {
            pages: '250 Pages',
            innings: '80 Innings',
            format: 'Coaching + Scoring Combined',
            cover: 'Premium Hardbound',
            size: 'A4 (297mm x 210mm)'
        }
    },
    {
        id: 'scorebook-008',
        name: 'GM Scorebook 100 Innings',
        category: 'scorebooks',
        brand: 'GM',
        price: 800,
        originalPrice: 950,
        rating: 4.6,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/rK10zY9p/scorebook-006.png',
        ],
        description: 'Tournament grade scorebook for competitive matches.',
        features: [
            '90 Innings Capacity',
            'Tournament Format',
            'Durable Binding',
            'Clear Layout',
            'Match Summary Pages'
        ],
        sizes: ['A4 Size'],
        weight: '420g',
        specifications: {
            pages: '180 Pages',
            innings: '90 Innings',
            format: 'Tournament Standard',
            cover: 'Hardbound',
            size: 'A4 (297mm x 210mm)'
        }
    },
    {
        id: 'scorebook-009',
        name: 'GM Scorebook 60 Innings',
        category: 'scorebooks',
        brand: 'GM',
        price: 720,
        originalPrice: 870,
        rating: 4.5,
        reviews: 112,
        inStock: true,
        images: [
            'https://i.ibb.co.com/rfvx5Lgn/scorebook-009.png',
        ],
        description: 'Practical scorebook for regular match recording.',
        features: [
            '70 Innings Capacity',
            'Standard Format',
            'Good Quality Paper',
            'Value for Money',
            'Easy Recording'
        ],
        sizes: ['A4 Size'],
        weight: '380g',
        specifications: {
            pages: '140 Pages',
            innings: '70 Innings',
            format: 'Standard Ball-by-Ball',
            cover: 'Hardbound',
            size: 'A4 (297mm x 210mm)'
        }
    },
    {
        id: 'scorebook-010',
        name: 'Kingsgroves Sports Scorebook',
        category: 'scorebooks',
        brand: 'Kingsgroves',
        price: 680,
        originalPrice: 820,
        rating: 4.6,
        reviews: 98,
        inStock: true,
        images: [
            'https://i.ibb.co.com/r27nspNT/scorebook-010.jpg',
        ],
        description: 'Umpire-focused scorebook with simplified recording format.',
        features: [
            '80 Innings Capacity',
            'Umpire-Friendly Format',
            'Quick Reference',
            'Portable Size',
            'Durable Cover'
        ],
        sizes: ['A5 Size'],
        weight: '300g',
        specifications: {
            pages: '160 Pages',
            innings: '80 Innings',
            format: 'Simplified Umpire Format',
            cover: 'Flexible Hardbound',
            size: 'A5 (210mm x 148mm)'
        }
    },
    
    // ===================================
    // STUMPS & BAILS (15 products)
    // ===================================

    {
        id: 'stump-001',
        name: 'Kookaburra Match Stumps Set',
        category: 'stumps-bails',
        brand: 'Kookaburra',
        price: 3500,
        originalPrice: 4000,
        rating: 4.8,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/m5WHJZS3/stump-001.jpg',
        ],
        description: 'Professional match stumps made from premium wood. International standard size.',
        features: [
            'Premium Hardwood',
            'International Standard Size',
            'Spring Loaded',
            'Weather Resistant Finish',
            'Includes 2 Bails'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '3.5kg per set',
        specifications: {
            material: 'Premium Hardwood',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Spring Loaded'
        }
    },
    {
        id: 'stump-002',
        name: 'Gray-Nicolls Pro Match Stumps',
        category: 'stumps-bails',
        brand: 'Gray-Nicolls',
        price: 3800,
        originalPrice: 4200,
        rating: 4.9,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/gMP7N3Bg/stump-002.jpg',
        ],
        description: 'Top-grade professional stumps with zinc bases. Used in international cricket.',
        features: [
            'Professional Grade Wood',
            'Zinc Plated Bases',
            'Spring Return System',
            'Premium Finish',
            'Includes Premium Bails'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '3.8kg per set',
        specifications: {
            material: 'Professional Grade Hardwood',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Spring Return'
        }
    },
    {
        id: 'stump-003',
        name: 'SS Club Cricket Stumps Set',
        category: 'stumps-bails',
        brand: 'SS',
        price: 2800,
        originalPrice: 3200,
        rating: 4.6,
        reviews: 198,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Nn6Zbm5T/stump-003.jpg',
        ],
        description: 'Quality stumps for club and league cricket. Durable construction.',
        features: [
            'Hardwood Construction',
            'Standard Size',
            'Good Durability',
            'Weather Treated',
            'Includes Bails'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '3.2kg per set',
        specifications: {
            material: 'Hardwood',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Standard'
        }
    },
    {
        id: 'stump-004',
        name: 'SG Practice Stumps Set',
        category: 'stumps-bails',
        brand: 'SG',
        price: 2200,
        originalPrice: 2600,
        rating: 4.5,
        reviews: 223,
        inStock: true,
        images: [
            'https://i.ibb.co.com/9Hf8Qz4V/stump-004.jpg',
        ],
        description: 'Affordable practice stumps for training sessions.',
        features: [
            'Good Quality Wood',
            'Standard Size',
            'Durable',
            'Value for Money',
            'Includes Bails'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '3.0kg per set',
        specifications: {
            material: 'Standard Hardwood',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Practice Grade'
        }
    },
    {
        id: 'stump-005',
        name: 'Aj Match Stumps',
        category: 'stumps-bails',
        brand: 'Other',
        price: 4200,
        originalPrice: 4600,
        rating: 4.9,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/tThw2n8W/stump-005.png',
        ],
        description: 'Premium stumps with LED light system for day-night matches.',
        features: [
            'Premium Wood with LED',
            'Day-Night Compatible',
            'Spring Loaded',
            'International Quality',
            'Premium Zing Bails'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '4.0kg per set',
        specifications: {
            material: 'Premium Hardwood + LED System',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps with LED',
            bails: '2 LED Zing Bails',
            type: 'LED Day-Night'
        }
    },
    {
        id: 'stump-006',
        name: 'GM Diamond Match Stumps',
        category: 'stumps-bails',
        brand: 'GM',
        price: 3400,
        originalPrice: 3800,
        rating: 4.7,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/ccJnspSz/stump-006.jpg',
        ],
        description: 'Quality match stumps with excellent finish.',
        features: [
            'Premium Hardwood',
            'Spring Return',
            'Smooth Finish',
            'Durable',
            'Match Quality'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '3.4kg per set',
        specifications: {
            material: 'Premium Hardwood',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Spring Return'
        }
    },
    {
        id: 'stump-007',
        name: 'Kookaburra Youth Stumps Set',
        category: 'stumps-bails',
        brand: 'Kookaburra',
        price: 2400,
        originalPrice: 2800,
        rating: 4.6,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/bgnx8tYv/stump-007.jpg',
        ],
        description: 'Youth-sized stumps for junior cricket. Lighter and shorter.',
        features: [
            'Youth Size (27")',
            'Lightweight',
            'Durable Wood',
            'Bright Colors',
            'Perfect for Juniors'
        ],
        sizes: ['Youth (27" x 8")'],
        weight: '2.5kg per set',
        specifications: {
            material: 'Hardwood',
            height: '27 inches (68.5cm)',
            width: '8 inches (20cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Youth Standard'
        }
    },
    {
        id: 'stump-008',
        name: 'Kookaburra Spring Return Stumps',
        category: 'stumps-bails',
        brand: 'Kookaburra',
        price: 3600,
        originalPrice: 4000,
        rating: 4.8,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/DgTWctDn/stump-008.jpg',
        ],
        description: 'Professional spring return stumps for competitive matches.',
        features: [
            'Advanced Spring System',
            'Premium Wood',
            'Quick Return',
            'Professional Grade',
            'Includes Premium Bails'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '3.6kg per set',
        specifications: {
            material: 'Premium Hardwood',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Advanced Spring Return'
        }
    },
    {
        id: 'stump-009',
        name: 'CA Tournament Stumps Set',
        category: 'stumps-bails',
        brand: 'CA',
        price: 3100,
        originalPrice: 3500,
        rating: 4.7,
        reviews: 112,
        inStock: true,
        images: [
            'https://i.ibb.co.com/WNk5Yfmq/stump-009.jpg',
        ],
        description: 'Tournament quality stumps with reinforced bases.',
        features: [
            'Hardwood Construction',
            'Reinforced Bases',
            'Tournament Grade',
            'Good Durability',
            'Standard Bails'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '3.3kg per set',
        specifications: {
            material: 'Hardwood',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Tournament Standard'
        }
    },
    {
        id: 'stump-010',
        name: 'DSC Heavy Duty Practice Stumps',
        category: 'stumps-bails',
        brand: 'DSC',
        price: 2600,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/60pspwJ3/stump-010.jpg',
        ],
        description: 'Extra durable stumps for intensive practice sessions.',
        features: [
            'Heavy Duty Wood',
            'Reinforced Construction',
            'Practice Grade',
            'Very Durable',
            'Standard Size'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '3.7kg per set',
        specifications: {
            material: 'Heavy Duty Hardwood',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Heavy Duty Practice'
        }
    },
    {
        id: 'stump-011',
        name: 'Gray-Nicolls LED Zing Bails',
        category: 'stumps-bails',
        brand: 'Gray-Nicolls',
        price: 5500,
        originalPrice: 6000,
        rating: 4.9,
        reviews: 89,
        inStock: true,
        images: [
            'https://i.ibb.co.com/ymyX3z0R/stump-011.jpg',
        ],
        description: 'Professional LED bails for day-night cricket. Battery powered.',
        features: [
            'LED Illumination',
            'Battery Powered',
            'International Standard',
            'Low Dislodgement Force',
            'Set of 2 Bails Only'
        ],
        sizes: ['Standard'],
        weight: '200g per set',
        specifications: {
            material: 'Composite with LED',
            length: '11 inches (28cm)',
            weight_per_bail: '100g',
            battery: 'Included',
            illumination: 'Red LED',
            type: 'LED Zing Bails (Bails Only)'
        }
    },
    {
        id: 'stump-012',
        name: 'BDM Mini Garden Cricket Stumps',
        category: 'stumps-bails',
        brand: 'BDM',
        price: 1200,
        originalPrice: 1500,
        rating: 4.4,
        reviews: 234,
        inStock: true,
        images: [
            'https://i.ibb.co.com/HfHdHc20/stump-012.jpg',
        ],
        description: 'Compact stumps for backyard and garden cricket.',
        features: [
            'Compact Size',
            'Lightweight',
            'Portable',
            'Weather Resistant',
            'Perfect for Kids'
        ],
        sizes: ['Mini (20" x 6")'],
        weight: '1.5kg per set',
        specifications: {
            material: 'Wood/Plastic',
            height: '20 inches (51cm)',
            width: '6 inches (15cm)',
            stumps: '3 Stumps',
            bails: '2 Bails',
            type: 'Garden Cricket'
        }
    },
    {
        id: 'stump-013',
        name: 'Gray-Nicolls Rubber Base Stumps',
        category: 'stumps-bails',
        brand: 'Gray-Nicolls',
        price: 1800,
        originalPrice: 2200,
        rating: 4.3,
        reviews: 178,
        inStock: true,
        images: [
            'https://i.ibb.co.com/cSWryrSk/stump-013.jpg',
        ],
        description: 'Durable plastic stumps for all-weather training.',
        features: [
            'Heavy Duty Plastic',
            'All Weather',
            'Unbreakable',
            'Bright Colors',
            'Training Grade'
        ],
        sizes: ['Standard (28" x 9")'],
        weight: '2.0kg per set',
        specifications: {
            material: 'High Density Plastic',
            height: '28 inches (71cm)',
            width: '9 inches (23cm)',
            stumps: '3 Stumps',
            bails: '2 Plastic Bails',
            type: 'All-Weather Training'
        }
    },
    {
        id: 'stump-014',
        name: 'SS Wooden Bails Set (3 Pairs)',
        category: 'stumps-bails',
        brand: 'SS',
        price: 450,
        originalPrice: 600,
        rating: 4.5,
        reviews: 267,
        inStock: true,
        images: [
            'https://i.ibb.co.com/4RKP6wnL/stump-014.jpg',
        ],
        description: 'Replacement wooden bails. Pack of 3 pairs (6 bails total).',
        features: [
            'Premium Wood',
            '3 Pairs (6 Bails)',
            'Standard Size',
            'Smooth Finish',
            'Replacement Pack'
        ],
        sizes: ['Standard'],
        weight: '120g per set',
        specifications: {
            material: 'Premium Hardwood',
            length: '11 inches (28cm)',
            pairs: '3 Pairs (6 Bails)',
            weight_per_bail: '20g',
            finish: 'Polished',
            type: 'Wooden Bails Only'
        }
    },
    {
        id: 'stump-015',
        name: 'Kookaburra Flexi Stumps (Portable)',
        category: 'stumps-bails',
        brand: 'Kookaburra',
        price: 1600,
        originalPrice: 2000,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/svBPXxH5/stump-015.jpg',
        ],
        description: 'Flexible rubber stumps with spring bases. Perfect for coaching.',
        features: [
            'Flexible Rubber',
            'Spring Bases',
            'Self-Standing',
            'Portable',
            'Coaching Grade'
        ],
        sizes: ['Standard Height'],
        weight: '1.8kg per set',
        specifications: {
            material: 'Flexible Rubber',
            height: '28 inches (71cm)',
            width: 'Adjustable',
            stumps: '3 Stumps with Spring Bases',
            bails: '2 Rubber Bails',
            type: 'Portable Spring Base'
        }
    },
    // ===================================
    // CRICKET CAPS (20 products)
    // ===================================

    {
        id: 'cap-001',
        name: 'Kookaburra Pro Player Cricket Cap',
        category: 'cricket-caps',
        brand: 'Kookaburra',
        price: 1200,
        originalPrice: 1400,
        rating: 4.7,
        reviews: 234,
        inStock: true,
        images: [
            'https://i.ibb.co.com/xKtCM2zw/cap-001.jpg',
        ],
        description: 'Professional cricket cap with UV protection and moisture-wicking technology.',
        features: [
            'UV Protection (UPF 50+)',
            'Moisture-Wicking Fabric',
            'Adjustable Strap',
            'Breathable Material',
            'Professional Grade'
        ],
        sizes: ['One Size (Adjustable)', 'Youth'],
        weight: '80g',
        specifications: {
            material: 'Polyester Blend',
            uv_protection: 'UPF 50+',
            color_options: 'White, Navy, Green',
            logo: 'Embroidered Kookaburra',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-002',
        name: 'Shrey Traditional Baggy Cap',
        category: 'cricket-caps',
        brand: 'Shrey',
        price: 1400,
        originalPrice: 1600,
        rating: 4.8,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/4gRx4MJR/cap-002.jpg',
        ],
        description: 'Classic baggy navy style cap with traditional design.',
        features: [
            'Traditional Baggy Style',
            'Premium Cotton',
            'UV Protection',
            'Comfortable Fit',
            'Classic Design'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        weight: '90g',
        specifications: {
            material: '100% Premium Cotton',
            uv_protection: 'UPF 40+',
            color_options: 'Green, White, Navy',
            logo: 'Shrey Logo',
            closure: 'Adjustable Inner Band'
        }
    },
    {
        id: 'cap-003',
        name: 'Adidas Climacool Cricket Cap',
        category: 'cricket-caps',
        brand: 'Adidas',
        price: 1350,
        originalPrice: 1550,
        rating: 4.7,
        reviews: 267,
        inStock: true,
        images: [
            'https://i.ibb.co.com/GvTw1rft/cap-003.jpg',
        ],
        description: 'Advanced cooling technology cap for maximum comfort in heat.',
        features: [
            'Climacool Technology',
            'Superior Ventilation',
            'Sweat-Wicking',
            'Lightweight',
            'UV Protection'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '70g',
        specifications: {
            material: 'Climacool Polyester',
            uv_protection: 'UPF 50+',
            color_options: 'White, Black, Navy',
            logo: 'Adidas 3-Stripes',
            closure: 'Adjustable Snapback'
        }
    },
    {
        id: 'cap-004',
        name: 'Nike Dri-FIT Cricket Cap',
        category: 'cricket-caps',
        brand: 'Nike',
        price: 1300,
        originalPrice: 1500,
        rating: 4.7,
        reviews: 245,
        inStock: true,
        images: [
            'https://i.ibb.co.com/KcFrkrDD/cap-004.jpg',
        ],
        description: 'Dri-FIT technology for superior moisture management.',
        features: [
            'Dri-FIT Technology',
            'Moisture Management',
            'Lightweight Fabric',
            'UV Protection',
            'Swoosh Logo'
        ],
        sizes: ['One Size (Adjustable)', 'Youth'],
        weight: '75g',
        specifications: {
            material: 'Dri-FIT Polyester',
            uv_protection: 'UPF 50+',
            color_options: 'White, Navy, Red',
            logo: 'Embroidered Swoosh',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-005',
        name: 'Puma Essential Cricket Cap',
        category: 'cricket-caps',
        brand: 'Puma',
        price: 1100,
        originalPrice: 1300,
        rating: 4.6,
        reviews: 198,
        inStock: true,
        images: [
            'https://i.ibb.co.com/24P9H2n/cap-005.jpg',
        ],
        description: 'Essential cricket cap with Puma styling and comfort.',
        features: [
            'Moisture-Wicking',
            'UV Protection',
            'Breathable Panels',
            'Adjustable',
            'Puma Cat Logo'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '85g',
        specifications: {
            material: 'Polyester Blend',
            uv_protection: 'UPF 40+',
            color_options: 'White, Navy, Green',
            logo: 'Embroidered Puma Cat',
            closure: 'Adjustable Strap'
        }
    },
    {
        id: 'cap-006',
        name: 'New Balance Performance Cricket Cap',
        category: 'cricket-caps',
        brand: 'New Balance',
        price: 1250,
        originalPrice: 1450,
        rating: 4.6,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/HDqNvGfn/cap-006.jpg',
        ],
        description: 'Performance cap with advanced ventilation system.',
        features: [
            'Advanced Ventilation',
            'Moisture-Wicking',
            'UV Protection',
            'Lightweight',
            'Ergonomic Fit'
        ],
        sizes: ['One Size (Adjustable)', 'Youth'],
        weight: '78g',
        specifications: {
            material: 'Performance Polyester',
            uv_protection: 'UPF 50+',
            color_options: 'White, Navy',
            logo: 'Embroidered NB Logo',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-007',
        name: 'SS Classic White Cricket Cap',
        category: 'cricket-caps',
        brand: 'SS',
        price: 850,
        originalPrice: 1000,
        rating: 4.5,
        reviews: 312,
        inStock: true,
        images: [
            'https://i.ibb.co.com/8LV7yMdR/cap-007.jpg',
        ],
        description: 'Traditional white cricket cap for test cricket.',
        features: [
            'Classic White Design',
            'Cotton Blend',
            'UV Protection',
            'Comfortable',
            'Value for Money'
        ],
        sizes: ['One Size (Adjustable)', 'Youth'],
        weight: '95g',
        specifications: {
            material: 'Cotton Blend',
            uv_protection: 'UPF 30+',
            color_options: 'White',
            logo: 'SS Logo',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-008',
        name: 'SG Club Cricket Cap',
        category: 'cricket-caps',
        brand: 'SG',
        price: 750,
        originalPrice: 900,
        rating: 4.4,
        reviews: 289,
        inStock: true,
        images: [
            'https://i.ibb.co.com/DDPXcprN/cap-008.jpg',
        ],
        description: 'Affordable club cricket cap with good quality.',
        features: [
            'Cotton Material',
            'Basic UV Protection',
            'Adjustable',
            'Durable',
            'Budget Friendly'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '100g',
        specifications: {
            material: '100% Cotton',
            uv_protection: 'UPF 25+',
            color_options: 'White, Navy, Green',
            logo: 'SG Logo',
            closure: 'Adjustable Strap'
        }
    },
    {
        id: 'cap-009',
        name: 'MRF Genius Elite Cricket Cap',
        category: 'cricket-caps',
        brand: 'MRF',
        price: 1450,
        originalPrice: 1650,
        rating: 4.8,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/t05CTmj/cap-009.jpg',
        ],
        description: 'Premium cricket cap used by international players.',
        features: [
            'Premium Fabric',
            'Maximum UV Protection',
            'Advanced Moisture-Wicking',
            'Lightweight',
            'Professional Grade'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '72g',
        specifications: {
            material: 'Premium Performance Fabric',
            uv_protection: 'UPF 50+',
            color_options: 'White, Navy',
            logo: 'MRF Logo',
            closure: 'Premium Adjustable'
        }
    },
    {
        id: 'cap-010',
        name: 'GM Diamond Cricket Cap',
        category: 'cricket-caps',
        brand: 'GM',
        price: 1180,
        originalPrice: 1350,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/hJwTyMzY/cap-010.jpg',
        ],
        description: 'Quality GM cap with classic styling.',
        features: [
            'Quality Fabric',
            'UV Protection',
            'Moisture-Wicking',
            'Comfortable Fit',
            'GM Branding'
        ],
        sizes: ['One Size (Adjustable)', 'Youth'],
        weight: '82g',
        specifications: {
            material: 'Polyester Cotton Blend',
            uv_protection: 'UPF 40+',
            color_options: 'White, Navy, Green',
            logo: 'GM Logo',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-011',
        name: 'Spartan Team Cricket Cap',
        category: 'cricket-caps',
        brand: 'Spartan',
        price: 1280,
        originalPrice: 1480,
        rating: 4.7,
        reviews: 178,
        inStock: true,
        images: [
            'https://i.ibb.co.com/99qSwW2m/cap-011.jpg',
        ],
        description: 'Team cricket cap with professional features.',
        features: [
            'Team Logo Space',
            'UV Protection',
            'Breathable',
            'Adjustable',
            'Professional Quality'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '80g',
        specifications: {
            material: 'Performance Polyester',
            uv_protection: 'UPF 50+',
            color_options: 'White, Navy, Red, Green',
            logo: 'Spartan',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-012',
        name: 'BDM Cricket Sun Hat',
        category: 'cricket-caps',
        brand: 'BDM',
        price: 1350,
        originalPrice: 1550,
        rating: 4.7,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Jj3BN43D/cap-012.jpg',
        ],
        description: 'Wide brim sun hat for maximum sun protection.',
        features: [
            'Wide Brim Design',
            'Maximum Sun Protection',
            'Neck Flap',
            'Breathable Mesh',
            'Chin Strap'
        ],
        sizes: ['S/M', 'L/XL'],
        weight: '120g',
        specifications: {
            material: 'Cotton Canvas',
            uv_protection: 'UPF 50+',
            color_options: 'Beige, White, Navy',
            logo: 'BDM Logo',
            closure: 'Adjustable Chin Strap'
        }
    },
    {
        id: 'cap-013',
        name: 'DSC Intense Rage Cap',
        category: 'cricket-caps',
        brand: 'DSC',
        price: 680,
        originalPrice: 850,
        rating: 4.4,
        reviews: 201,
        inStock: true,
        images: [
            'https://i.ibb.co.com/TB7Tp6LQ/cap-013.jpg',
        ],
        description: 'Lightweight visor for wicketkeepers and fielders.',
        features: [
            'Visor Style',
            'Lightweight',
            'Open Top Design',
            'UV Protection',
            'Adjustable'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '45g',
        specifications: {
            material: 'Polyester',
            uv_protection: 'UPF 40+',
            color_options: 'White, Navy',
            logo: 'DSC Logo',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-014',
        name: 'Bangladesh Baggy Cap',
        category: 'cricket-caps',
        brand: 'Other',
        price: 950,
        originalPrice: 1150,
        rating: 4.5,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/LzxKFX88/cap-014.jpg',
        ],
        description: 'Heritage style cap with traditional design.',
        features: [
            'Heritage Design',
            'Quality Cotton',
            'UV Protection',
            'Comfortable',
            'Classic Look'
        ],
        sizes: ['One Size (Adjustable)', 'Youth'],
        weight: '88g',
        specifications: {
            material: 'Cotton Blend',
            uv_protection: 'UPF 35+',
            color_options: 'Green',
            logo: 'BCB Logo',
            closure: 'Adjustable Strap'
        }
    },
    {
        id: 'cap-015',
        name: 'Ton Team Colors Cricket Cap',
        category: 'cricket-caps',
        brand: 'Ton',
        price: 820,
        originalPrice: 1000,
        rating: 4.4,
        reviews: 223,
        inStock: true,
        images: [
            'https://i.ibb.co.com/35v2yfnk/cap-015.jpg',
        ],
        description: 'Colorful team cap with multiple color options.',
        features: [
            'Multiple Colors',
            'Cotton Blend',
            'UV Protection',
            'Affordable',
            'Team Friendly'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '92g',
        specifications: {
            material: 'Cotton Polyester Blend',
            uv_protection: 'UPF 30+',
            color_options: 'White, Navy, Red, Green, Yellow',
            logo: 'Ton Logo',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-016',
        name: 'Pakistan Cap',
        category: 'cricket-caps',
        brand: 'Other',
        price: 1600,
        originalPrice: 1800,
        rating: 4.9,
        reviews: 345,
        inStock: true,
        images: [
            'https://i.ibb.co.com/ynyTxZ8G/cap-016.png',
        ],
        description: 'Official Pakistan cap for fans.',
        features: [
            'Official Replica',
            'Team India Colors',
            'Climacool Technology',
            'Premium Quality',
            'Collector Item'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '75g',
        specifications: {
            material: 'Climacool Polyester',
            uv_protection: 'UPF 50+',
            color_options: 'Green',
            logo: 'PCB Logo',
            closure: 'Adjustable Snapback'
        }
    },
    {
        id: 'cap-017',
        name: 'Kookaburra Floppy Sun Hat',
        category: 'cricket-caps',
        brand: 'Kookaburra',
        price: 1400,
        originalPrice: 1600,
        rating: 4.7,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/3mg0jS4m/cap-017.jpg',
        ],
        description: 'Wide brim floppy hat for all-day sun protection.',
        features: [
            'Extra Wide Brim',
            'Maximum Coverage',
            'Neck Protection',
            'Breathable',
            'Foldable'
        ],
        sizes: ['S/M', 'L/XL'],
        weight: '110g',
        specifications: {
            material: 'Cotton Canvas',
            uv_protection: 'UPF 50+',
            color_options: 'Beige, White',
            logo: 'Kookaburra Logo',
            closure: 'Adjustable Chin Cord'
        }
    },
    {
        id: 'cap-018',
        name: 'Gray-Nicolls Youth Cricket Cap',
        category: 'cricket-caps',
        brand: 'Gray-Nicolls',
        price: 850,
        originalPrice: 1000,
        rating: 4.6,
        reviews: 267,
        inStock: true,
        images: [
            'https://i.ibb.co.com/cKpCY9kG/cap-018.jpg',
        ],
        description: 'Youth-sized cricket cap designed for junior players.',
        features: [
            'Youth Size',
            'UV Protection',
            'Lightweight',
            'Bright Colors',
            'Affordable'
        ],
        sizes: ['Youth (52-55cm)'],
        weight: '65g',
        specifications: {
            material: 'Polyester Blend',
            uv_protection: 'UPF 40+',
            color_options: 'White, Navy, Red, Green',
            logo: 'GN Logo',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-019',
        name: 'MRF Pace Foundation Cap',
        category: 'cricket-caps',
        brand: 'MRF',
        price: 1250,
        originalPrice: 1450,
        rating: 4.7,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/3Yf1VJYp/cap-019.jpg',
        ],
        description: 'Official MRF Pace Foundation cap with signature styling.',
        features: [
            'Pace Foundation Design',
            'Premium Fabric',
            'UV Protection',
            'Moisture-Wicking',
            'Professional Grade'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '78g',
        specifications: {
            material: 'Performance Polyester',
            uv_protection: 'UPF 50+',
            color_options: 'Navy, White',
            logo: 'MRF Pace Logo',
            closure: 'Adjustable Velcro'
        }
    },
    {
        id: 'cap-020',
        name: 'Puma Retro Cricket Cap',
        category: 'cricket-caps',
        brand: 'Puma',
        price: 1150,
        originalPrice: 1350,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/ccCkFHYq/cap-020.jpg',
        ],
        description: 'Retro-styled cricket cap with modern comfort features.',
        features: [
            'Retro Design',
            'Modern Comfort',
            'UV Protection',
            'Breathable',
            'Stylish Look'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '82g',
        specifications: {
            material: 'Cotton Polyester Blend',
            uv_protection: 'UPF 40+',
            color_options: 'White, Navy, Green',
            logo: 'Vintage Puma Logo',
            closure: 'Adjustable Strap'
        }
    },
    // ===================================
    // BATTING GLOVES (20 products)
    // ===================================

    {
        id: 'glove-001',
        name: 'Kookaburra Kahuna Pro Batting Gloves',
        category: 'batting-gloves',
        brand: 'Kookaburra',
        price: 4500,
        originalPrice: 5000,
        rating: 4.8,
        reviews: 234,
        inStock: true,
        images: [
            'https://i.ibb.co.com/d0skXHTc/glove-001.jpg',
        ],
        description: 'Professional grade batting gloves with superior protection and grip.',
        features: [
            'High Density Foam Protection',
            'Premium Leather Palm',
            'Dual Wing Design',
            'Fiber Shield Protection',
            'Professional Grade'
        ],
        sizes: ['Youth', 'Small', 'Medium', 'Large', 'XL'],
        weight: '180g per pair',
        specifications: {
            palm_material: 'Premium Pittard Leather',
            back_material: 'High Density Foam',
            protection: 'Dual Wing + Fiber Shield',
            grip: 'Supersoft Pittard',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-002',
        name: 'Gray-Nicolls Atomic 900 Batting Gloves',
        category: 'batting-gloves',
        brand: 'Gray-Nicolls',
        price: 4200,
        originalPrice: 4700,
        rating: 4.7,
        reviews: 198,
        inStock: true,
        images: [
            'https://i.ibb.co.com/DDxY7SfH/glove-002.png',
        ],
        description: 'Advanced protection with ergonomic design for natural grip.',
        features: [
            'Multi-Section Protection',
            'Premium Leather',
            'Airflow Technology',
            'Ergonomic Fit',
            'Professional Quality'
        ],
        sizes: ['Youth', 'Small', 'Medium', 'Large'],
        weight: '175g per pair',
        specifications: {
            palm_material: 'Premium Leather',
            back_material: 'Multi-Density Foam',
            protection: 'Multi-Section Guards',
            grip: 'Tacky Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-003',
        name: 'SS Super Select Batting Gloves',
        category: 'batting-gloves',
        brand: 'SS',
        price: 3500,
        originalPrice: 4000,
        rating: 4.6,
        reviews: 267,
        inStock: true,
        images: [
            'https://i.ibb.co.com/cKMbq7QC/glove-003.jpg',
        ],
        description: 'Quality batting gloves with good protection for club cricket.',
        features: [
            'High Density Protection',
            'Leather Palm',
            'Good Grip',
            'Comfortable Fit',
            'Club Grade'
        ],
        sizes: ['Youth', 'Small', 'Medium', 'Large'],
        weight: '190g per pair',
        specifications: {
            palm_material: 'Premium Leather',
            back_material: 'High Density Foam',
            protection: 'Standard Guards',
            grip: 'Natural Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-004',
        name: 'MRF Genius Elite Batting Gloves',
        category: 'batting-gloves',
        brand: 'MRF',
        price: 5500,
        originalPrice: 6000,
        rating: 4.9,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Q3hgjGxv/glove-004.jpg',
        ],
        description: 'Premium batting gloves used by international players.',
        features: [
            'Maximum Protection',
            'Superior Pittard Leather',
            'Ultra-Light Construction',
            'Advanced Grip',
            'International Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '165g per pair',
        specifications: {
            palm_material: 'Pittard Supersoft Leather',
            back_material: 'Ultra-Light High Density Foam',
            protection: 'Multi-Layer Guards',
            grip: 'Enhanced Pittard',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-005',
        name: 'SG Test Batting Gloves',
        category: 'batting-gloves',
        brand: 'SG',
        price: 3200,
        originalPrice: 3700,
        rating: 4.5,
        reviews: 245,
        inStock: true,
        images: [
            'https://i.ibb.co.com/tpTwJDsT/glove-005.jpg',
        ],
        description: 'Reliable batting gloves for competitive cricket.',
        features: [
            'Standard Protection',
            'Good Quality Leather',
            'Durable',
            'Comfortable',
            'Match Quality'
        ],
        sizes: ['Youth', 'Small', 'Medium', 'Large'],
        weight: '195g per pair',
        specifications: {
            palm_material: 'Quality Leather',
            back_material: 'Standard Foam',
            protection: 'Standard Guards',
            grip: 'Natural Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-006',
        name: 'GM Diamond DXM 808 Batting Gloves',
        category: 'batting-gloves',
        brand: 'GM',
        price: 4300,
        originalPrice: 4800,
        rating: 4.7,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/FbKQv69F/glove-006.jpg',
        ],
        description: 'Classic GM quality with modern protection technology.',
        features: [
            'High Quality Protection',
            'Premium Leather Palm',
            'Traditional Design',
            'Excellent Grip',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '178g per pair',
        specifications: {
            palm_material: 'Premium Leather',
            back_material: 'High Density Foam',
            protection: 'Traditional Multi-Section',
            grip: 'Premium Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-007',
        name: 'Spartan Authority Batting Gloves',
        category: 'batting-gloves',
        brand: 'Spartan',
        price: 4700,
        originalPrice: 5200,
        rating: 4.8,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/q37S09v5/glove-007.jpg',
        ],
        description: 'Professional gloves with maximum protection and comfort.',
        features: [
            'Maximum Protection',
            'Ultra-Light Design',
            'Premium Leather',
            'Enhanced Grip',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '170g per pair',
        specifications: {
            palm_material: 'Premium Pittard Leather',
            back_material: 'Ultra-Light Foam',
            protection: 'Advanced Multi-Layer',
            grip: 'Supersoft Pittard',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-008',
        name: 'CA Plus 15000 Batting Gloves',
        category: 'batting-gloves',
        brand: 'CA',
        price: 3800,
        originalPrice: 4300,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/cSF0m0m0/glove-008.jpg',
        ],
        description: 'Quality gloves with good protection for league cricket.',
        features: [
            'High Density Protection',
            'Quality Leather',
            'Good Grip',
            'Comfortable',
            'League Quality'
        ],
        sizes: ['Youth', 'Small', 'Medium', 'Large'],
        weight: '185g per pair',
        specifications: {
            palm_material: 'Quality Leather',
            back_material: 'High Density Foam',
            protection: 'Multi-Section Guards',
            grip: 'Natural Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-009',
        name: 'DSC Intense Rage Batting Gloves',
        category: 'batting-gloves',
        brand: 'DSC',
        price: 3600,
        originalPrice: 4100,
        rating: 4.5,
        reviews: 178,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Cs2zCrPn/glove-009.jpg',
        ],
        description: 'Modern design with good protection and comfort.',
        features: [
            'Multi-Layer Protection',
            'Leather Palm',
            'Lightweight',
            'Good Grip',
            'Match Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '180g per pair',
        specifications: {
            palm_material: 'Premium Leather',
            back_material: 'Multi-Layer Foam',
            protection: 'Standard Multi-Section',
            grip: 'Tacky Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-010',
        name: 'Kookaburra Blaze',
        category: 'batting-gloves',
        brand: 'Kookaburra',
        price: 4000,
        originalPrice: 4500,
        rating: 4.7,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/CsvwHLbk/glove-010.jpg',
        ],
        description: 'Ultra-lightweight gloves with excellent protection.',
        features: [
            'Ultra-Light Construction',
            'High Protection',
            'Premium Leather',
            'Superior Grip',
            'Professional Quality'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '160g per pair',
        specifications: {
            palm_material: 'Premium Pittard Leather',
            back_material: 'Ultra-Light Foam',
            protection: 'Lightweight Multi-Section',
            grip: 'Pittard Supersoft',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-011',
        name: 'Gray-Nicolls Powerbow 6X Gloves',
        category: 'batting-gloves',
        brand: 'Gray-Nicolls',
        price: 4500,
        originalPrice: 5000,
        rating: 4.8,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/j9J8ypKj/glove-011.jpg',
        ],
        description: 'Innovative design with superior protection and comfort.',
        features: [
            'Advanced Protection System',
            'Premium Leather',
            'Ergonomic Design',
            'Enhanced Grip',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '172g per pair',
        specifications: {
            palm_material: 'Premium Pittard Leather',
            back_material: 'Advanced Multi-Density Foam',
            protection: 'Powerbow Multi-Layer',
            grip: 'Enhanced Pittard',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-012',
        name: 'SS TON Reserve Edition Gloves',
        category: 'batting-gloves',
        brand: 'SS',
        price: 4800,
        originalPrice: 5300,
        rating: 4.8,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/wbsJpWr/glove-012.jpg',
        ],
        description: 'Premium limited edition gloves with superior quality.',
        features: [
            'Premium Materials',
            'Maximum Protection',
            'Ultra-Light',
            'Superior Grip',
            'Limited Edition'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '168g per pair',
        specifications: {
            palm_material: 'Premium Pittard Leather',
            back_material: 'Premium High Density Foam',
            protection: 'Multi-Layer Guards',
            grip: 'Supersoft Pittard',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-013',
        name: 'MRF Virat Kohli Limited Edition Gloves',
        category: 'batting-gloves',
        brand: 'MRF',
        price: 6500,
        originalPrice: 7000,
        rating: 4.9,
        reviews: 234,
        inStock: false,
        images: [
            'https://i.ibb.co.com/6RTN12Sx/glove-013.jpg',
        ],
        description: 'Signature gloves of Virat Kohli. Professional excellence.',
        features: [
            'Custom Kohli Design',
            'Maximum Protection',
            'Ultra-Light',
            'Premium Leather',
            'Signature Edition'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '162g per pair',
        specifications: {
            palm_material: 'Supersoft Pittard Leather',
            back_material: 'Ultra-Light Premium Foam',
            protection: 'Custom Multi-Layer',
            grip: 'Enhanced Pittard',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-014',
        name: 'SG Cobra Select Batting Gloves',
        category: 'batting-gloves',
        brand: 'SG',
        price: 2800,
        originalPrice: 3300,
        rating: 4.4,
        reviews: 212,
        inStock: true,
        images: [
            'https://i.ibb.co.com/RkFTFqhN/glove-014.jpg',
        ],
        description: 'Good quality gloves for intermediate players.',
        features: [
            'Standard Protection',
            'Leather Palm',
            'Comfortable',
            'Durable',
            'Value for Money'
        ],
        sizes: ['Youth', 'Small', 'Medium', 'Large'],
        weight: '198g per pair',
        specifications: {
            palm_material: 'Standard Leather',
            back_material: 'Standard Foam',
            protection: 'Basic Multi-Section',
            grip: 'Natural Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-015',
        name: 'GM Icon DXM 606 Batting Gloves',
        category: 'batting-gloves',
        brand: 'GM',
        price: 4100,
        originalPrice: 4600,
        rating: 4.7,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/dwZ9ypC2/glove-015.jpg',
        ],
        description: 'Icon series gloves with premium protection.',
        features: [
            'High Quality Protection',
            'Premium Leather',
            'Classic Design',
            'Good Grip',
            'Professional Quality'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '180g per pair',
        specifications: {
            palm_material: 'Premium Leather',
            back_material: 'High Density Foam',
            protection: 'Classic Multi-Section',
            grip: 'Premium Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-016',
        name: 'Spartan MSD Limited Edition Gloves',
        category: 'batting-gloves',
        brand: 'Spartan',
        price: 5800,
        originalPrice: 6300,
        rating: 4.9,
        reviews: 198,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Tx8m17gM/glove-016.jpg',
        ],
        description: 'MS Dhoni signature gloves with ultimate protection.',
        features: [
            'Custom MSD Design',
            'Maximum Protection',
            'Premium Materials',
            'Superior Grip',
            'Signature Edition'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '165g per pair',
        specifications: {
            palm_material: 'Premium Pittard Leather',
            back_material: 'Ultra-Light Premium Foam',
            protection: 'Custom Multi-Layer',
            grip: 'Supersoft Pittard',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-017',
        name: 'CA Legend 12000 Batting Gloves',
        category: 'batting-gloves',
        brand: 'CA',
        price: 3400,
        originalPrice: 3900,
        rating: 4.6,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/vC663dNK/glove-017.jpg',
        ],
        description: 'Reliable gloves for competitive cricket.',
        features: [
            'High Density Protection',
            'Quality Leather',
            'Good Fit',
            'Reliable',
            'Match Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '188g per pair',
        specifications: {
            palm_material: 'Quality Leather',
            back_material: 'High Density Foam',
            protection: 'Multi-Section Guards',
            grip: 'Natural Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-018',
        name: 'DSC Condor Flight Batting Gloves',
        category: 'batting-gloves',
        brand: 'DSC',
        price: 3900,
        originalPrice: 4400,
        rating: 4.6,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/FkbrLQBS/glove-018.jpg',
        ],
        description: 'Lightweight gloves with good protection.',
        features: [
            'Lightweight Construction',
            'Good Protection',
            'Premium Leather',
            'Enhanced Grip',
            'Match Quality'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '175g per pair',
        specifications: {
            palm_material: 'Premium Leather',
            back_material: 'Lightweight Foam',
            protection: 'Multi-Section Guards',
            grip: 'Tacky Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-019',
        name: 'BDM Galaxy Batting Gloves',
        category: 'batting-gloves',
        brand: 'BDM',
        price: 3700,
        originalPrice: 4200,
        rating: 4.6,
        reviews: 123,
        inStock: true,
        images: [
            'https://i.ibb.co.com/qGb1HtB/glove-019.jpg',
        ],
        description: 'Well-balanced gloves with good protection.',
        features: [
            'Balanced Protection',
            'Quality Leather',
            'Good Comfort',
            'Durable',
            'Match Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '182g per pair',
        specifications: {
            palm_material: 'Quality Leather',
            back_material: 'High Density Foam',
            protection: 'Multi-Section Guards',
            grip: 'Natural Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    {
        id: 'glove-020',
        name: 'Ton Power Plus Batting Gloves',
        category: 'batting-gloves',
        brand: 'Ton',
        price: 2500,
        originalPrice: 3000,
        rating: 4.3,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/4wxvQrDf/glove-020.jpg',
        ],
        description: 'Budget-friendly gloves with decent protection.',
        features: [
            'Basic Protection',
            'Standard Leather',
            'Comfortable',
            'Value for Money',
            'Club Quality'
        ],
        sizes: ['Youth', 'Small', 'Medium', 'Large'],
        weight: '200g per pair',
        specifications: {
            palm_material: 'Standard Leather',
            back_material: 'Standard Foam',
            protection: 'Basic Guards',
            grip: 'Natural Leather',
            hand: 'Right Hand (LH Batsman)'
        }
    },
    // ===================================
    // HELMETS (20 products)
    // ===================================

    {
        id: 'helmet-001',
        name: 'Masuri Vision Series Elite Titanium Helmet',
        category: 'helmets',
        brand: 'Masuri',
        price: 18500,
        originalPrice: 20000,
        rating: 4.9,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/hxjpYfXn/helmet-001.jpg',
        ],
        description: 'Top-of-the-line cricket helmet with titanium grille. Used by international players.',
        features: [
            'Titanium Grille',
            'Impact Tested (BS7928:2013)',
            'Superior Ventilation',
            'Lightweight Design',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '650g',
        specifications: {
            grille_material: 'Titanium',
            shell_material: 'High-Impact ABS',
            certification: 'BS7928:2013',
            padding: 'Premium Moisture-Wicking',
            adjustment: 'Micro-Adjustment System'
        }
    },
    {
        id: 'helmet-002',
        name: 'Gray-Nicolls Atomic 360 Helmet',
        category: 'helmets',
        brand: 'Gray-Nicolls',
        price: 15500,
        originalPrice: 17000,
        rating: 4.8,
        reviews: 234,
        inStock: true,
        images: [
            'https://i.ibb.co.com/HTD6H3cV/helmet-002.jpg',
        ],
        description: 'Advanced helmet with 360-degree protection and superior comfort.',
        features: [
            'Steel Grille',
            'Impact Certified',
            'Enhanced Ventilation',
            'Comfortable Padding',
            'Professional Quality'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '680g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'High-Impact ABS',
            certification: 'BS7928:2013',
            padding: 'High-Density Foam',
            adjustment: 'Quick-Adjust System'
        }
    },
    {
        id: 'helmet-003',
        name: 'Kookaburra Pro 600 Helmet',
        category: 'helmets',
        brand: 'Kookaburra',
        price: 14800,
        originalPrice: 16500,
        rating: 4.7,
        reviews: 198,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Xxvx8NCf/helmet-003.jpg',
        ],
        description: 'Professional helmet with excellent protection and ventilation.',
        features: [
            'Steel Grille',
            'Impact Tested',
            'Multiple Vents',
            'Removable Padding',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '690g',
        specifications: {
            grille_material: 'High-Grade Steel',
            shell_material: 'ABS Plastic',
            certification: 'BS7928:2013',
            padding: 'Moisture-Wicking Foam',
            adjustment: 'Standard Adjustment'
        }
    },
    {
        id: 'helmet-004',
        name: 'Masuri Vision Series Test Helmet',
        category: 'helmets',
        brand: 'Masuri',
        price: 16800,
        originalPrice: 18500,
        rating: 4.9,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Y7Krwrqm/helmet-004.jpg',
        ],
        description: 'Test cricket helmet with steel grille and premium comfort.',
        features: [
            'Premium Steel Grille',
            'Impact Certified',
            'Superior Comfort',
            'Excellent Visibility',
            'International Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '670g',
        specifications: {
            grille_material: 'Premium Steel',
            shell_material: 'High-Impact ABS',
            certification: 'BS7928:2013',
            padding: 'Premium Comfort Foam',
            adjustment: 'Micro-Adjustment'
        }
    },
    {
        id: 'helmet-005',
        name: 'SS Matrix Cricket Helmet',
        category: 'helmets',
        brand: 'SS',
        price: 8500,
        originalPrice: 10000,
        rating: 4.6,
        reviews: 289,
        inStock: true,
        images: [
            'https://i.ibb.co.com/YT3tfSQR/helmet-005.jpg',
        ],
        description: 'Quality helmet with good protection for club cricket.',
        features: [
            'Steel Grille',
            'Impact Tested',
            'Good Ventilation',
            'Comfortable Fit',
            'Club Grade'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '720g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'ABS Plastic',
            certification: 'BS7928:2013',
            padding: 'Standard Foam',
            adjustment: 'Basic Adjustment'
        }
    },
    {
        id: 'helmet-006',
        name: 'SG Optipro Cricket Helmet',
        category: 'helmets',
        brand: 'SG',
        price: 7800,
        originalPrice: 9500,
        rating: 4.5,
        reviews: 312,
        inStock: true,
        images: [
            'https://i.ibb.co.com/xKFgF6NX/helmet-006.jpg',
        ],
        description: 'Affordable helmet with reliable protection.',
        features: [
            'Steel Grille',
            'Impact Certified',
            'Adequate Ventilation',
            'Comfortable',
            'Value for Money'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '750g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'ABS Plastic',
            certification: 'BS7928:2013',
            padding: 'Standard Foam',
            adjustment: 'Basic Strap'
        }
    },
    {
        id: 'helmet-007',
        name: 'Shrey Master Class Air 2.0 Helmet',
        category: 'helmets',
        brand: 'Shrey',
        price: 12500,
        originalPrice: 14000,
        rating: 4.7,
        reviews: 178,
        inStock: true,
        images: [
            'https://i.ibb.co.com/PGCTVZdy/helmet-007.jpg',
        ],
        description: 'Advanced helmet with superior airflow technology.',
        features: [
            'Steel Grille',
            'Air Flow Technology',
            'Impact Certified',
            'Lightweight',
            'Professional Quality'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '660g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'High-Impact ABS',
            certification: 'BS7928:2013',
            padding: 'Air-Tech Foam',
            adjustment: 'Quick-Release System'
        }
    },
    {
        id: 'helmet-008',
        name: 'Kookaburra Kahuna Pro Helmet',
        category: 'helmets',
        brand: 'Kookaburra',
        price: 16200,
        originalPrice: 18000,
        rating: 4.8,
        reviews: 156,
        inStock: true,
        images: [
            'https://i.ibb.co.com/zW8RDGdv/helmet-008.jpg',
        ],
        description: 'Premium professional helmet with titanium grille option.',
        features: [
            'Steel/Titanium Grille',
            'Maximum Protection',
            'Superior Ventilation',
            'Ultra Comfortable',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '655g',
        specifications: {
            grille_material: 'Steel (Titanium Optional)',
            shell_material: 'Premium ABS',
            certification: 'BS7928:2013',
            padding: 'Premium Comfort Tech',
            adjustment: 'Micro-Adjust System'
        }
    },
    {
        id: 'helmet-009',
        name: 'Gray-Nicolls Ultimate 360 Helmet',
        category: 'helmets',
        brand: 'Gray-Nicolls',
        price: 17500,
        originalPrice: 19000,
        rating: 4.9,
        reviews: 134,
        inStock: true,
        images: [
            'https://i.ibb.co.com/dwp7yMnK/helmet-009.jpg',
        ],
        description: 'Ultimate protection helmet with advanced safety features.',
        features: [
            'Premium Steel Grille',
            'Impact Absorption',
            'Maximum Ventilation',
            'Premium Comfort',
            'International Grade'
        ],
        sizes: ['Medium', 'Large', 'XL'],
        weight: '665g',
        specifications: {
            grille_material: 'Premium Steel',
            shell_material: 'Advanced Impact ABS',
            certification: 'BS7928:2013',
            padding: 'Advanced Gel Foam',
            adjustment: 'Premium Micro-Adjust'
        }
    },
    {
        id: 'helmet-010',
        name: 'MRF Genius Elite Helmet',
        category: 'helmets',
        brand: 'MRF',
        price: 14500,
        originalPrice: 16000,
        rating: 4.7,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/9kqPvBLM/helmet-010.png',
        ],
        description: 'Professional helmet with excellent protection and comfort.',
        features: [
            'Steel Grille',
            'Impact Certified',
            'Good Ventilation',
            'Comfortable Padding',
            'Professional Quality'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '695g',
        specifications: {
            grille_material: 'High-Grade Steel',
            shell_material: 'ABS Plastic',
            certification: 'BS7928:2013',
            padding: 'High-Density Foam',
            adjustment: 'Standard System'
        }
    },
    {
        id: 'helmet-011',
        name: 'GM Diamond Original Helmet',
        category: 'helmets',
        brand: 'GM',
        price: 13800,
        originalPrice: 15500,
        rating: 4.7,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/JYJWrqg/helmet-011.jpg',
        ],
        description: 'Classic GM quality with modern safety standards.',
        features: [
            'Steel Grille',
            'Impact Tested',
            'Classic Design',
            'Good Ventilation',
            'Professional Quality'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '700g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'High-Impact ABS',
            certification: 'BS7928:2013',
            padding: 'Comfort Foam',
            adjustment: 'Standard Adjustment'
        }
    },
    {
        id: 'helmet-012',
        name: 'Spartan Club Cricket Helmet',
        category: 'helmets',
        brand: 'Spartan',
        price: 9500,
        originalPrice: 11000,
        rating: 4.6,
        reviews: 223,
        inStock: true,
        images: [
            'https://i.ibb.co.com/W4RqmPPk/helmet-012.jpg',
        ],
        description: 'Quality helmet for club and league cricket.',
        features: [
            'Steel Grille',
            'Impact Certified',
            'Good Protection',
            'Comfortable',
            'Club Grade'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '710g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'ABS Plastic',
            certification: 'BS7928:2013',
            padding: 'Standard Foam',
            adjustment: 'Basic System'
        }
    },
    {
        id: 'helmet-013',
        name: 'Masuri Vision Series Steel Helmet',
        category: 'helmets',
        brand: 'Masuri',
        price: 14200,
        originalPrice: 16000,
        rating: 4.8,
        reviews: 178,
        inStock: true,
        images: [
            'https://i.ibb.co.com/dJtmct23/helmet-013.jpg',
        ],
        description: 'Premium steel grille helmet with excellent visibility.',
        features: [
            'Premium Steel Grille',
            'Superior Protection',
            'Excellent Visibility',
            'Comfortable',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '675g',
        specifications: {
            grille_material: 'Premium Steel',
            shell_material: 'High-Impact ABS',
            certification: 'BS7928:2013',
            padding: 'Premium Comfort',
            adjustment: 'Micro-Adjustment'
        }
    },
    {
        id: 'helmet-014',
        name: 'Shrey Performance 2.0 Helmet',
        category: 'helmets',
        brand: 'Shrey',
        price: 11500,
        originalPrice: 13000,
        rating: 4.6,
        reviews: 198,
        inStock: true,
        images: [
            'https://i.ibb.co.com/DD7ccZkJ/helmet-014.jpg',
        ],
        description: 'Performance helmet with good protection and comfort.',
        features: [
            'Steel Grille',
            'Impact Certified',
            'Enhanced Ventilation',
            'Lightweight',
            'Match Quality'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '685g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'ABS Plastic',
            certification: 'BS7928:2013',
            padding: 'Performance Foam',
            adjustment: 'Quick-Adjust'
        }
    },
    {
        id: 'helmet-015',
        name: 'SS Ranger Cricket Helmet',
        category: 'helmets',
        brand: 'SS',
        price: 6800,
        originalPrice: 8500,
        rating: 4.4,
        reviews: 267,
        inStock: true,
        images: [
            'https://i.ibb.co.com/ksdkgwbL/helmet-015.jpg',
        ],
        description: 'Budget-friendly helmet with basic protection.',
        features: [
            'Steel Grille',
            'Impact Tested',
            'Basic Ventilation',
            'Affordable',
            'Entry Level'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '760g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'ABS Plastic',
            certification: 'BS7928:2013',
            padding: 'Basic Foam',
            adjustment: 'Basic Strap'
        }
    },
    {
        id: 'helmet-016',
        name: 'Kookaburra Stem Guard Helmet',
        category: 'helmets',
        brand: 'Kookaburra',
        price: 15800,
        originalPrice: 17500,
        rating: 4.8,
        reviews: 145,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Y7HRmnY1/helmet-016.jpg',
        ],
        description: 'Advanced helmet with neck guard protection.',
        features: [
            'Steel Grille + Neck Guard',
            'Maximum Protection',
            'Superior Ventilation',
            'Comfortable',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '720g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'High-Impact ABS',
            certification: 'BS7928:2013 + Neck Guard',
            padding: 'Premium Foam',
            adjustment: 'Micro-Adjust System'
        }
    },
    {
        id: 'helmet-017',
        name: 'Gray-Nicolls Atomic Junior Helmet',
        category: 'helmets',
        brand: 'Gray-Nicolls',
        price: 9800,
        originalPrice: 11500,
        rating: 4.7,
        reviews: 234,
        inStock: true,
        images: [
            'https://i.ibb.co.com/MygZPvpj/helmet-017.jpg',
        ],
        description: 'Junior cricket helmet with full protection.',
        features: [
            'Steel Grille',
            'Impact Certified',
            'Youth Sizing',
            'Comfortable Fit',
            'Youth Grade'
        ],
        sizes: ['Youth Small', 'Youth Medium', 'Youth Large'],
        weight: '580g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'ABS Plastic',
            certification: 'BS7928:2013',
            padding: 'Youth Comfort Foam',
            adjustment: 'Youth Adjust System'
        }
    },
    {
        id: 'helmet-018',
        name: 'SG Aeroshield Cricket Helmet',
        category: 'helmets',
        brand: 'SG',
        price: 8800,
        originalPrice: 10500,
        rating: 4.5,
        reviews: 189,
        inStock: true,
        images: [
            'https://i.ibb.co.com/DHkS2C20/helmet-018.png',
        ],
        description: 'Well-ventilated helmet with good protection.',
        features: [
            'Steel Grille',
            'Impact Certified',
            'Enhanced Airflow',
            'Good Comfort',
            'Match Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '705g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'ABS Plastic',
            certification: 'BS7928:2013',
            padding: 'Aero Foam',
            adjustment: 'Standard System'
        }
    },
    {
        id: 'helmet-019',
        name: 'Shrey Armor 2.0 Titanium Helmet',
        category: 'helmets',
        brand: 'Shrey',
        price: 19500,
        originalPrice: 21500,
        rating: 4.9,
        reviews: 123,
        inStock: true,
        images: [
            'https://i.ibb.co.com/Cp1L15vs/helmet-019.png',
        ],
        description: 'Premium titanium grille helmet with maximum protection.',
        features: [
            'Titanium Grille',
            'Maximum Impact Protection',
            'Ultra Lightweight',
            'Superior Ventilation',
            'International Grade'
        ],
        sizes: ['Medium', 'Large', 'XL'],
        weight: '630g',
        specifications: {
            grille_material: 'Titanium',
            shell_material: 'Advanced Impact ABS',
            certification: 'BS7928:2013',
            padding: 'Premium Gel Tech',
            adjustment: 'Advanced Micro-Adjust'
        }
    },
    {
        id: 'helmet-020',
        name: 'MRF Pro Guard Helmet',
        category: 'helmets',
        brand: 'MRF',
        price: 12800,
        originalPrice: 14500,
        rating: 4.6,
        reviews: 167,
        inStock: true,
        images: [
            'https://i.ibb.co.com/bhVmNmx/helmet-020.jpg',
        ],
        description: 'Professional helmet with complete protection.',
        features: [
            'Steel Grille',
            'Impact Certified',
            'Good Ventilation',
            'Comfortable',
            'Professional Quality'
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        weight: '690g',
        specifications: {
            grille_material: 'Steel',
            shell_material: 'High-Impact ABS',
            certification: 'BS7928:2013',
            padding: 'Comfort Foam',
            adjustment: 'Standard System'
        }
    },
    // ===================================
    // WICKET KEEPING GEAR (20 products)
    // ===================================
    {
        id: 'wk-001',
        name: 'Kookaburra Pro 1000 WK Gloves',
        category: 'wicket-keeping',
        brand: 'Kookaburra',
        price: 6500,
        originalPrice: 7500,
        rating: 4.8,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Kookaburra+WK',
        ],
        description: 'Professional wicket keeping gloves with superior protection and grip.',
        features: [
            'Premium Leather Palm',
            'High Density Foam',
            'Flexible Finger Design',
            'Excellent Grip',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '400g per pair',
        specifications: {
            palm_material: 'Premium Pittard Leather',
            protection: 'High Density Foam Bars',
            webbing: 'Reinforced Leather',
            finger_design: 'Flexible Multi-Section',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-002',
        name: 'Gray-Nicolls Supernova WK Gloves',
        category: 'wicket-keeping',
        brand: 'Gray-Nicolls',
        price: 6200,
        originalPrice: 7000,
        rating: 4.7,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GN+Supernova',
        ],
        description: 'Advanced wicket keeping gloves with excellent catch feel.',
        features: [
            'Premium Leather',
            'Multi-Density Foam',
            'Enhanced Webbing',
            'Superior Catch Feel',
            'Professional Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '390g per pair',
        specifications: {
            palm_material: 'Premium Leather',
            protection: 'Multi-Density Foam',
            webbing: 'Enhanced Mesh',
            finger_design: 'Ergonomic Flexible',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-003',
        name: 'SS Super Select WK Gloves',
        category: 'wicket-keeping',
        brand: 'SS',
        price: 4800,
        originalPrice: 5500,
        rating: 4.6,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SS+WK',
        ],
        description: 'Quality wicket keeping gloves for club cricket.',
        features: [
            'Leather Palm',
            'Good Protection',
            'Reinforced Webbing',
            'Comfortable Fit',
            'Club Grade'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '420g per pair',
        specifications: {
            palm_material: 'Quality Leather',
            protection: 'High Density Foam',
            webbing: 'Reinforced',
            finger_design: 'Standard Flexible',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-004',
        name: 'MRF Genius Elite WK Gloves',
        category: 'wicket-keeping',
        brand: 'MRF',
        price: 7200,
        originalPrice: 8000,
        rating: 4.9,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=MRF+WK',
        ],
        description: 'Premium wicket keeping gloves used by international keepers.',
        features: [
            'Pittard Leather Palm',
            'Maximum Protection',
            'Ultra-Light',
            'Superior Grip',
            'International Grade'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '380g per pair',
        specifications: {
            palm_material: 'Pittard Supersoft Leather',
            protection: 'Ultra-Light High Density',
            webbing: 'Premium Mesh',
            finger_design: 'Advanced Flexible',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-005',
        name: 'SG Test WK Gloves',
        category: 'wicket-keeping',
        brand: 'SG',
        price: 4200,
        originalPrice: 4800,
        rating: 4.5,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SG+Test+WK',
        ],
        description: 'Reliable wicket keeping gloves for competitive matches.',
        features: [
            'Leather Palm',
            'Good Protection',
            'Standard Webbing',
            'Comfortable',
            'Match Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '430g per pair',
        specifications: {
            palm_material: 'Standard Leather',
            protection: 'Standard Foam',
            webbing: 'Mesh Webbing',
            finger_design: 'Standard',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-006',
        name: 'GM Diamond WK Gloves',
        category: 'wicket-keeping',
        brand: 'GM',
        price: 5800,
        originalPrice: 6500,
        rating: 4.7,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GM+WK',
        ],
        description: 'Classic GM wicket keeping gloves with quality construction.',
        features: [
            'Premium Leather',
            'Good Protection',
            'Traditional Design',
            'Excellent Catch Feel',
            'Professional Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '405g per pair',
        specifications: {
            palm_material: 'Premium Leather',
            protection: 'High Density Foam',
            webbing: 'Reinforced Mesh',
            finger_design: 'Traditional Flexible',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-007',
        name: 'Spartan Pro WK Gloves',
        category: 'wicket-keeping',
        brand: 'Spartan',
        price: 5500,
        originalPrice: 6200,
        rating: 4.6,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Spartan+WK',
        ],
        description: 'Professional wicket keeping gloves with modern design.',
        features: [
            'Quality Leather',
            'Good Protection',
            'Modern Design',
            'Comfortable Fit',
            'Professional Grade'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '410g per pair',
        specifications: {
            palm_material: 'Premium Leather',
            protection: 'Multi-Layer Foam',
            webbing: 'Enhanced Mesh',
            finger_design: 'Modern Flexible',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-008',
        name: 'CA Plus 15000 WK Gloves',
        category: 'wicket-keeping',
        brand: 'CA',
        price: 5000,
        originalPrice: 5700,
        rating: 4.6,
        reviews: 123,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=CA+WK',
        ],
        description: 'Quality wicket keeping gloves for league cricket.',
        features: [
            'Leather Palm',
            'Good Protection',
            'Reinforced Fingers',
            'Comfortable',
            'League Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '415g per pair',
        specifications: {
            palm_material: 'Quality Leather',
            protection: 'High Density Foam',
            webbing: 'Standard Mesh',
            finger_design: 'Standard Flexible',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-009',
        name: 'DSC Condor WK Gloves',
        category: 'wicket-keeping',
        brand: 'DSC',
        price: 4700,
        originalPrice: 5400,
        rating: 4.5,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=DSC+WK',
        ],
        description: 'Good wicket keeping gloves with modern features.',
        features: [
            'Leather Palm',
            'Multi-Layer Protection',
            'Good Webbing',
            'Comfortable',
            'Match Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '420g per pair',
        specifications: {
            palm_material: 'Quality Leather',
            protection: 'Multi-Layer Foam',
            webbing: 'Mesh Webbing',
            finger_design: 'Standard',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-010',
        name: 'BDM Club WK Gloves',
        category: 'wicket-keeping',
        brand: 'BDM',
        price: 4000,
        originalPrice: 4700,
        rating: 4.4,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=BDM+WK',
        ],
        description: 'Affordable wicket keeping gloves for club cricket.',
        features: [
            'Leather Palm',
            'Standard Protection',
            'Basic Webbing',
            'Value for Money',
            'Club Quality'
        ],
        sizes: ['Small', 'Medium', 'Large'],
        weight: '440g per pair',
        specifications: {
            palm_material: 'Standard Leather',
            protection: 'Standard Foam',
            webbing: 'Basic Mesh',
            finger_design: 'Basic',
            type: 'Wicket Keeping Gloves'
        }
    },
    {
        id: 'wk-011',
        name: 'Kookaburra Pro 1000 WK Pads',
        category: 'wicket-keeping',
        brand: 'Kookaburra',
        price: 5500,
        originalPrice: 6200,
        rating: 4.7,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Kookaburra+Pads',
        ],
        description: 'Professional wicket keeping pads with lightweight design.',
        features: [
            'Lightweight Construction',
            'High Density Foam',
            'Good Mobility',
            'Comfortable Fit',
            'Professional Grade'
        ],
        sizes: ['Men'],
        weight: '1200g per pair',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Length',
            straps: '3 Secure Straps',
            knee_protection: 'Enhanced',
            type: 'Wicket Keeping Pads'
        }
    },
    {
        id: 'wk-012',
        name: 'Gray-Nicolls Supernova WK Pads',
        category: 'wicket-keeping',
        brand: 'Gray-Nicolls',
        price: 5200,
        originalPrice: 5900,
        rating: 4.6,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GN+WK+Pads',
        ],
        description: 'Advanced wicket keeping pads with superior protection.',
        features: [
            'Multi-Density Foam',
            'Lightweight',
            'Enhanced Mobility',
            'Comfortable',
            'Professional Quality'
        ],
        sizes: ['Men'],
        weight: '1150g per pair',
        specifications: {
            material: 'Multi-Density Foam',
            protection: 'Full Coverage',
            straps: '3 Velcro Straps',
            knee_protection: 'Advanced',
            type: 'Wicket Keeping Pads'
        }
    },
    {
        id: 'wk-013',
        name: 'SS Matrix WK Pads',
        category: 'wicket-keeping',
        brand: 'SS',
        price: 4200,
        originalPrice: 4800,
        rating: 4.5,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SS+WK+Pads',
        ],
        description: 'Quality wicket keeping pads for club cricket.',
        features: [
            'High Density Foam',
            'Good Protection',
            'Standard Weight',
            'Comfortable',
            'Club Grade'
        ],
        sizes: ['Men'],
        weight: '1300g per pair',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Length',
            straps: '3 Straps',
            knee_protection: 'Standard',
            type: 'Wicket Keeping Pads'
        }
    },
    {
        id: 'wk-014',
        name: 'MRF Genius WK Pads',
        category: 'wicket-keeping',
        brand: 'MRF',
        price: 6000,
        originalPrice: 6700,
        rating: 4.8,
        reviews: 123,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=MRF+WK+Pads',
        ],
        description: 'Premium wicket keeping pads with ultra-light design.',
        features: [
            'Ultra-Lightweight',
            'Maximum Protection',
            'Superior Mobility',
            'Premium Quality',
            'International Grade'
        ],
        sizes: ['Men'],
        weight: '1100g per pair',
        specifications: {
            material: 'Premium Lightweight Foam',
            protection: 'Maximum Coverage',
            straps: '3 Premium Straps',
            knee_protection: 'Superior',
            type: 'Wicket Keeping Pads'
        }
    },
    {
        id: 'wk-015',
        name: 'SG Club WK Pads',
        category: 'wicket-keeping',
        brand: 'SG',
        price: 3800,
        originalPrice: 4400,
        rating: 4.4,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SG+WK+Pads',
        ],
        description: 'Affordable wicket keeping pads with decent protection.',
        features: [
            'Standard Foam',
            'Good Protection',
            'Comfortable',
            'Value for Money',
            'Club Quality'
        ],
        sizes: ['Men'],
        weight: '1350g per pair',
        specifications: {
            material: 'Standard Foam',
            protection: 'Full Length',
            straps: '3 Straps',
            knee_protection: 'Basic',
            type: 'Wicket Keeping Pads'
        }
    },
    {
        id: 'wk-016',
        name: 'GM Diamond WK Pads',
        category: 'wicket-keeping',
        brand: 'GM',
        price: 4900,
        originalPrice: 5600,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GM+WK+Pads',
        ],
        description: 'Classic GM wicket keeping pads with quality construction.',
        features: [
            'High Density Foam',
            'Good Protection',
            'Traditional Design',
            'Comfortable',
            'Professional Quality'
        ],
        sizes: ['Men'],
        weight: '1250g per pair',
        specifications: {
            material: 'High Density Foam',
            protection: 'Full Coverage',
            straps: '3 Secure Straps',
            knee_protection: 'Good',
            type: 'Wicket Keeping Pads'
        }
    },
    {
        id: 'wk-017',
        name: 'Spartan Pro WK Pads',
        category: 'wicket-keeping',
        brand: 'Spartan',
        price: 4700,
        originalPrice: 5400,
        rating: 4.6,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Spartan+WK+Pads',
        ],
        description: 'Modern wicket keeping pads with good mobility.',
        features: [
            'Lightweight Foam',
            'Good Protection',
            'Enhanced Mobility',
            'Comfortable',
            'Professional Grade'
        ],
        sizes: ['Men'],
        weight: '1200g per pair',
        specifications: {
            material: 'Lightweight Foam',
            protection: 'Full Coverage',
            straps: '3 Velcro Straps',
            knee_protection: 'Enhanced',
            type: 'Wicket Keeping Pads'
        }
    },
    {
        id: 'wk-018',
        name: 'CA WK Combo Set (Gloves + Pads)',
        category: 'wicket-keeping',
        brand: 'CA',
        price: 9200,
        originalPrice: 10500,
        rating: 4.7,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=CA+Combo',
        ],
        description: 'Complete wicket keeping set with gloves and pads.',
        features: [
            'Gloves + Pads Combo',
            'Matching Design',
            'Good Protection',
            'Value Bundle',
            'Match Quality'
        ],
        sizes: ['Men (Medium/Large)'],
        weight: '1800g total',
        specifications: {
            gloves: 'Quality Leather WK Gloves',
            pads: 'High Density Foam Pads',
            protection: 'Complete Set',
            combo_value: 'Save 15%',
            type: 'WK Combo Set'
        }
    },
    {
        id: 'wk-019',
        name: 'DSC Premium WK Combo',
        category: 'wicket-keeping',
        brand: 'DSC',
        price: 8800,
        originalPrice: 10200,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=DSC+Combo',
        ],
        description: 'Premium wicket keeping combo with gloves and pads.',
        features: [
            'Gloves + Pads Bundle',
            'Premium Quality',
            'Matching Colors',
            'Good Value',
            'Professional Set'
        ],
        sizes: ['Men (Small/Medium/Large)'],
        weight: '1750g total',
        specifications: {
            gloves: 'Premium Leather WK Gloves',
            pads: 'Multi-Layer Foam Pads',
            protection: 'Complete Package',
            combo_value: 'Save 20%',
            type: 'WK Combo Set'
        }
    },
    {
        id: 'wk-020',
        name: 'Gray-Nicolls Elite WK Complete Set',
        category: 'wicket-keeping',
        brand: 'Gray-Nicolls',
        price: 11500,
        originalPrice: 13500,
        rating: 4.8,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GN+Elite+Set',
        ],
        description: 'Elite wicket keeping set with premium gloves and pads.',
        features: [
            'Elite Gloves + Pads',
            'Professional Grade',
            'Premium Materials',
            'Complete Protection',
            'International Quality'
        ],
        sizes: ['Men (Medium/Large)'],
        weight: '1700g total',
        specifications: {
            gloves: 'Premium Pittard WK Gloves',
            pads: 'Ultra-Light Premium Pads',
            protection: 'Maximum Coverage',
            combo_value: 'Premium Bundle',
            type: 'WK Elite Combo'
        }
    },
    // ===================================
    // CRICKET SHOES (20 products)
    // ===================================
    {
        id: 'shoe-001',
        name: 'Adidas Adipower Vector Mid Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Adidas',
        price: 8500,
        originalPrice: 9500,
        rating: 4.8,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Adidas+Vector',
        ],
        description: 'Professional cricket shoes with superior grip and support. Metal spikes included.',
        features: [
            'Metal Spike Compatibility',
            'EVA Midsole Cushioning',
            'Synthetic Upper',
            'Excellent Ankle Support',
            'Professional Grade'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
        weight: '350g per shoe',
        specifications: {
            upper_material: 'Synthetic Leather',
            sole_type: 'Metal Spikes',
            cushioning: 'EVA Midsole',
            support: 'Mid-Cut Ankle',
            spikes_included: '12 Metal Spikes'
        }
    },
    {
        id: 'shoe-002',
        name: 'Nike Domain 2 Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Nike',
        price: 7800,
        originalPrice: 8800,
        rating: 4.7,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Nike+Domain',
        ],
        description: 'Advanced cricket shoes with responsive cushioning and excellent traction.',
        features: [
            'Zoom Air Cushioning',
            'Durable Mesh Upper',
            'Metal Spike Option',
            'Lightweight Design',
            'Professional Quality'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '340g per shoe',
        specifications: {
            upper_material: 'Mesh + Synthetic',
            sole_type: 'Metal Spikes',
            cushioning: 'Zoom Air',
            support: 'Mid-Top',
            spikes_included: '12 Metal Spikes'
        }
    },
    {
        id: 'shoe-003',
        name: 'Puma 19 FH Rubber Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Puma',
        price: 5500,
        originalPrice: 6500,
        rating: 4.6,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Puma+19',
        ],
        description: 'Rubber sole cricket shoes for all-weather play and training.',
        features: [
            'Full Rubber Sole',
            'All-Weather Grip',
            'Breathable Upper',
            'Value for Money',
            'Training Grade'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '380g per shoe',
        specifications: {
            upper_material: 'Synthetic Mesh',
            sole_type: 'Full Rubber Studs',
            cushioning: 'EVA Foam',
            support: 'Low-Cut',
            spikes_included: 'N/A (Rubber Sole)'
        }
    },
    {
        id: 'shoe-004',
        name: 'New Balance CK4030 B4 Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'New Balance',
        price: 9200,
        originalPrice: 10500,
        rating: 4.9,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=NB+CK4030',
        ],
        description: 'Premium cricket shoes with advanced cushioning and support technology.',
        features: [
            'REVlite Midsole',
            'Premium Leather Upper',
            'Metal Spike System',
            'Superior Comfort',
            'International Grade'
        ],
        sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
        weight: '360g per shoe',
        specifications: {
            upper_material: 'Premium Leather',
            sole_type: 'Metal Spikes',
            cushioning: 'REVlite Technology',
            support: 'Mid-Top',
            spikes_included: '14 Metal Spikes'
        }
    },
    {
        id: 'shoe-005',
        name: 'Kookaburra KC 3.0 Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Kookaburra',
        price: 7200,
        originalPrice: 8200,
        rating: 4.7,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Kookaburra+KC',
        ],
        description: 'Professional cricket shoes with excellent stability and grip.',
        features: [
            'Metal Spike Compatible',
            'Synthetic Leather Upper',
            'Good Cushioning',
            'Durable Construction',
            'Professional Quality'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '370g per shoe',
        specifications: {
            upper_material: 'Synthetic Leather',
            sole_type: 'Metal Spikes',
            cushioning: 'EVA Midsole',
            support: 'Mid-Cut',
            spikes_included: '12 Metal Spikes'
        }
    },
    {
        id: 'shoe-006',
        name: 'Gray-Nicolls Velocity 2.0 Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Gray-Nicolls',
        price: 6800,
        originalPrice: 7800,
        rating: 4.6,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GN+Velocity',
        ],
        description: 'Fast bowler friendly shoes with excellent support.',
        features: [
            'Metal Spike System',
            'Enhanced Heel Support',
            'Breathable Mesh',
            'Bowler Specific',
            'Professional Grade'
        ],
        sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
        weight: '365g per shoe',
        specifications: {
            upper_material: 'Mesh + Synthetic',
            sole_type: 'Metal Spikes',
            cushioning: 'Heel Strike Cushioning',
            support: 'High Ankle',
            spikes_included: '12 Metal Spikes'
        }
    },
    {
        id: 'shoe-007',
        name: 'SS Premium Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'SS',
        price: 4500,
        originalPrice: 5500,
        rating: 4.5,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SS+Premium',
        ],
        description: 'Quality cricket shoes with metal spikes for club cricket.',
        features: [
            'Metal Spike Holes',
            'Synthetic Upper',
            'Good Cushioning',
            'Affordable',
            'Club Grade'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '390g per shoe',
        specifications: {
            upper_material: 'Synthetic Leather',
            sole_type: 'Metal Spikes',
            cushioning: 'EVA Foam',
            support: 'Low-Cut',
            spikes_included: '10 Metal Spikes'
        }
    },
    {
        id: 'shoe-008',
        name: 'SG Pro Rubber Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'SG',
        price: 3800,
        originalPrice: 4800,
        rating: 4.4,
        reviews: 298,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SG+Pro',
        ],
        description: 'Budget-friendly rubber sole cricket shoes for training.',
        features: [
            'Full Rubber Sole',
            'All-Surface Grip',
            'Synthetic Upper',
            'Value for Money',
            'Training Quality'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
        weight: '400g per shoe',
        specifications: {
            upper_material: 'Synthetic',
            sole_type: 'Rubber Studs',
            cushioning: 'Basic Foam',
            support: 'Low-Cut',
            spikes_included: 'N/A (Rubber Sole)'
        }
    },
    {
        id: 'shoe-009',
        name: 'Adidas Howzat Spike Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Adidas',
        price: 7500,
        originalPrice: 8500,
        rating: 4.7,
        reviews: 223,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Adidas+Howzat',
        ],
        description: 'Versatile cricket shoes with all-rounder design.',
        features: [
            'Metal Spike Compatible',
            'Lightweight Upper',
            'Good Ventilation',
            'Comfortable Fit',
            'Professional Quality'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '355g per shoe',
        specifications: {
            upper_material: 'Mesh Synthetic',
            sole_type: 'Metal Spikes',
            cushioning: 'Cloudfoam',
            support: 'Mid-Cut',
            spikes_included: '12 Metal Spikes'
        }
    },
    {
        id: 'shoe-010',
        name: 'Nike Alpha Huarache Elite 3 Cricket',
        category: 'cricket-shoes',
        brand: 'Nike',
        price: 9500,
        originalPrice: 10500,
        rating: 4.8,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Nike+Huarache',
        ],
        description: 'Elite cricket shoes with premium features and performance.',
        features: [
            'Advanced Traction',
            'React Foam Cushioning',
            'Premium Construction',
            'Lightweight',
            'Elite Grade'
        ],
        sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
        weight: '335g per shoe',
        specifications: {
            upper_material: 'Flyknit + Leather',
            sole_type: 'Metal Spikes',
            cushioning: 'React Foam',
            support: 'Mid-Top',
            spikes_included: '14 Metal Spikes'
        }
    },
    {
        id: 'shoe-011',
        name: 'Puma Evospeed 1.5 Spike Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Puma',
        price: 6800,
        originalPrice: 7800,
        rating: 4.7,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Puma+Evospeed',
        ],
        description: 'Speed-focused cricket shoes for fast bowlers.',
        features: [
            'Lightweight Design',
            'Metal Spike System',
            'Enhanced Stability',
            'Bowler Friendly',
            'Professional Grade'
        ],
        sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '345g per shoe',
        specifications: {
            upper_material: 'Synthetic + Mesh',
            sole_type: 'Metal Spikes',
            cushioning: 'EverFit Technology',
            support: 'Mid-Cut',
            spikes_included: '12 Metal Spikes'
        }
    },
    {
        id: 'shoe-012',
        name: 'New Balance 4040 v5 Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'New Balance',
        price: 8500,
        originalPrice: 9500,
        rating: 4.8,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=NB+4040',
        ],
        description: 'All-rounder cricket shoes with balanced performance.',
        features: [
            'REVlite Cushioning',
            'Synthetic Leather Upper',
            'Metal Spike Compatible',
            'Versatile Design',
            'Professional Quality'
        ],
        sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '365g per shoe',
        specifications: {
            upper_material: 'Synthetic Leather',
            sole_type: 'Metal Spikes',
            cushioning: 'REVlite',
            support: 'Low-Top',
            spikes_included: '12 Metal Spikes'
        }
    },
    {
        id: 'shoe-013',
        name: 'Kookaburra Pro 2000 Spike Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Kookaburra',
        price: 8200,
        originalPrice: 9200,
        rating: 4.7,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Kookaburra+Pro',
        ],
        description: 'Professional grade cricket shoes with superior comfort.',
        features: [
            'Premium Construction',
            'Metal Spike System',
            'Enhanced Cushioning',
            'Durable Design',
            'Professional Grade'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
        weight: '360g per shoe',
        specifications: {
            upper_material: 'Premium Synthetic',
            sole_type: 'Metal Spikes',
            cushioning: 'Advanced EVA',
            support: 'Mid-Cut',
            spikes_included: '12 Metal Spikes'
        }
    },
    {
        id: 'shoe-014',
        name: 'Gray-Nicolls Atomic 400 Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Gray-Nicolls',
        price: 7500,
        originalPrice: 8500,
        rating: 4.6,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GN+Atomic',
        ],
        description: 'All-rounder cricket shoes with balanced features.',
        features: [
            'Metal Spike Compatible',
            'Breathable Upper',
            'Good Cushioning',
            'Versatile Performance',
            'Professional Quality'
        ],
        sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '370g per shoe',
        specifications: {
            upper_material: 'Mesh Synthetic',
            sole_type: 'Metal Spikes',
            cushioning: 'EVA Midsole',
            support: 'Mid-Cut',
            spikes_included: '12 Metal Spikes'
        }
    },
    {
        id: 'shoe-015',
        name: 'MRF Genius Elite Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'MRF',
        price: 6500,
        originalPrice: 7500,
        rating: 4.6,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=MRF+Genius',
        ],
        description: 'Professional cricket shoes with excellent grip.',
        features: [
            'Metal Spike System',
            'Synthetic Upper',
            'Good Support',
            'Durable',
            'Professional Quality'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '375g per shoe',
        specifications: {
            upper_material: 'Synthetic Leather',
            sole_type: 'Metal Spikes',
            cushioning: 'EVA Foam',
            support: 'Low-Cut',
            spikes_included: '10 Metal Spikes'
        }
    },
    {
        id: 'shoe-016',
        name: 'Asics Gel-Peake 5 Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Asics',
        price: 9800,
        originalPrice: 11000,
        rating: 4.9,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Asics+Gel',
        ],
        description: 'Premium cricket shoes with GEL cushioning technology.',
        features: [
            'GEL Cushioning System',
            'Premium Leather Upper',
            'Metal Spike Compatible',
            'Superior Comfort',
            'Elite Grade'
        ],
        sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
        weight: '350g per shoe',
        specifications: {
            upper_material: 'Premium Leather',
            sole_type: 'Metal Spikes',
            cushioning: 'GEL Technology',
            support: 'Mid-Top',
            spikes_included: '14 Metal Spikes'
        }
    },
    {
        id: 'shoe-017',
        name: 'Spartan Pro Spike Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'Spartan',
        price: 5800,
        originalPrice: 6800,
        rating: 4.5,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Spartan+Pro',
        ],
        description: 'Professional cricket shoes with good value.',
        features: [
            'Metal Spike Holes',
            'Synthetic Upper',
            'Standard Cushioning',
            'Good Quality',
            'Match Grade'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '380g per shoe',
        specifications: {
            upper_material: 'Synthetic',
            sole_type: 'Metal Spikes',
            cushioning: 'EVA Foam',
            support: 'Low-Cut',
            spikes_included: '10 Metal Spikes'
        }
    },
    {
        id: 'shoe-018',
        name: 'CA Plus 15000 Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'CA',
        price: 5200,
        originalPrice: 6200,
        rating: 4.5,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=CA+Plus',
        ],
        description: 'Quality cricket shoes for league cricket.',
        features: [
            'Metal Spike Compatible',
            'Synthetic Upper',
            'Good Cushioning',
            'Affordable',
            'League Quality'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
        weight: '385g per shoe',
        specifications: {
            upper_material: 'Synthetic Leather',
            sole_type: 'Metal Spikes',
            cushioning: 'Standard EVA',
            support: 'Low-Cut',
            spikes_included: '10 Metal Spikes'
        }
    },
    {
        id: 'shoe-019',
        name: 'DSC Condor Rubber Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'DSC',
        price: 4200,
        originalPrice: 5200,
        rating: 4.4,
        reviews: 212,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=DSC+Condor',
        ],
        description: 'Rubber sole cricket shoes for all-weather training.',
        features: [
            'Full Rubber Sole',
            'All-Weather',
            'Durable Upper',
            'Value for Money',
            'Training Grade'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
        weight: '395g per shoe',
        specifications: {
            upper_material: 'Synthetic',
            sole_type: 'Rubber Studs',
            cushioning: 'Basic Foam',
            support: 'Low-Cut',
            spikes_included: 'N/A (Rubber Sole)'
        }
    },
    {
        id: 'shoe-020',
        name: 'BDM Club Cricket Shoes',
        category: 'cricket-shoes',
        brand: 'BDM',
        price: 3500,
        originalPrice: 4500,
        rating: 4.3,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=BDM+Club',
        ],
        description: 'Budget-friendly cricket shoes for club players.',
        features: [
            'Rubber Sole',
            'Synthetic Upper',
            'Basic Cushioning',
            'Affordable',
            'Club Quality'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
        weight: '410g per shoe',
        specifications: {
            upper_material: 'Synthetic',
            sole_type: 'Rubber Studs',
            cushioning: 'Basic Foam',
            support: 'Low-Cut',
            spikes_included: 'N/A (Rubber Sole)'
        }
    },
    // ===================================
    // JERSEYS (20 products)
    // ===================================
    {
        id: 'jersey-001',
        name: 'Adidas Team India ODI Jersey 2024',
        category: 'jerseys',
        brand: 'Adidas',
        price: 3500,
        originalPrice: 4000,
        rating: 4.9,
        reviews: 456,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=India+ODI',
        ],
        description: 'Official Team India ODI jersey with Climacool technology. Replica of international jersey.',
        features: [
            'Climacool Technology',
            'Moisture-Wicking Fabric',
            'Official BCCI Logo',
            'Lightweight Material',
            'Replica Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '180g',
        specifications: {
            material: '100% Polyester',
            technology: 'Climacool',
            team: 'India National Team',
            format: 'ODI/T20',
            official: 'BCCI Licensed'
        }
    },
    {
        id: 'jersey-002',
        name: 'Nike Team England Test Jersey',
        category: 'jerseys',
        brand: 'Nike',
        price: 3800,
        originalPrice: 4300,
        rating: 4.8,
        reviews: 345,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=England+Test',
        ],
        description: 'Official England Test cricket jersey with Dri-FIT technology.',
        features: [
            'Dri-FIT Technology',
            'Premium Fabric',
            'ECB Official Logo',
            'Test Match Design',
            'Replica Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '175g',
        specifications: {
            material: 'Dri-FIT Polyester',
            technology: 'Dri-FIT',
            team: 'England National Team',
            format: 'Test',
            official: 'ECB Licensed'
        }
    },
    {
        id: 'jersey-003',
        name: 'Puma Team Australia ODI Jersey',
        category: 'jerseys',
        brand: 'Puma',
        price: 3600,
        originalPrice: 4100,
        rating: 4.8,
        reviews: 389,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Australia+ODI',
        ],
        description: 'Official Australian cricket team ODI jersey. Green and gold design.',
        features: [
            'DryCELL Technology',
            'Moisture Management',
            'CA Official Logo',
            'Iconic Design',
            'Replica Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '185g',
        specifications: {
            material: 'DryCELL Polyester',
            technology: 'DryCELL',
            team: 'Australia National Team',
            format: 'ODI/T20',
            official: 'Cricket Australia Licensed'
        }
    },
    {
        id: 'jersey-004',
        name: 'New Balance Team England ODI Jersey',
        category: 'jerseys',
        brand: 'New Balance',
        price: 3700,
        originalPrice: 4200,
        rating: 4.7,
        reviews: 298,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=England+ODI',
        ],
        description: 'Official England ODI/T20 jersey with advanced fabric technology.',
        features: [
            'NB Dry Technology',
            'Breathable Fabric',
            'ECB Logo',
            'Modern Design',
            'Replica Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '170g',
        specifications: {
            material: 'NB Dry Polyester',
            technology: 'NB Dry',
            team: 'England National Team',
            format: 'ODI/T20',
            official: 'ECB Licensed'
        }
    },
    {
        id: 'jersey-005',
        name: 'Adidas IPL Mumbai Indians Jersey',
        category: 'jerseys',
        brand: 'Adidas',
        price: 2800,
        originalPrice: 3300,
        rating: 4.8,
        reviews: 567,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=MI+Jersey',
        ],
        description: 'Official Mumbai Indians IPL jersey. Blue and gold colors.',
        features: [
            'Climacool Technology',
            'Official MI Logo',
            'Sponsor Logos',
            'Lightweight',
            'IPL Official'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '175g',
        specifications: {
            material: 'Climacool Polyester',
            technology: 'Climacool',
            team: 'Mumbai Indians',
            format: 'IPL T20',
            official: 'IPL Licensed'
        }
    },
    {
        id: 'jersey-006',
        name: 'Nike IPL Royal Challengers Bangalore Jersey',
        category: 'jerseys',
        brand: 'Nike',
        price: 2850,
        originalPrice: 3350,
        rating: 4.9,
        reviews: 623,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=RCB+Jersey',
        ],
        description: 'Official RCB IPL jersey with red and gold design.',
        features: [
            'Dri-FIT Technology',
            'Bold Red Design',
            'Official RCB Logo',
            'Premium Quality',
            'IPL Official'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '172g',
        specifications: {
            material: 'Dri-FIT Polyester',
            technology: 'Dri-FIT',
            team: 'Royal Challengers Bangalore',
            format: 'IPL T20',
            official: 'IPL Licensed'
        }
    },
    {
        id: 'jersey-007',
        name: 'Puma IPL Kolkata Knight Riders Jersey',
        category: 'jerseys',
        brand: 'Puma',
        price: 2800,
        originalPrice: 3300,
        rating: 4.8,
        reviews: 489,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=KKR+Jersey',
        ],
        description: 'Official KKR IPL jersey with purple and gold colors.',
        features: [
            'DryCELL Technology',
            'Purple & Gold Design',
            'Official KKR Logo',
            'Comfortable Fit',
            'IPL Official'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '180g',
        specifications: {
            material: 'DryCELL Polyester',
            technology: 'DryCELL',
            team: 'Kolkata Knight Riders',
            format: 'IPL T20',
            official: 'IPL Licensed'
        }
    },
    {
        id: 'jersey-008',
        name: 'Adidas IPL Chennai Super Kings Jersey',
        category: 'jerseys',
        brand: 'Adidas',
        price: 2900,
        originalPrice: 3400,
        rating: 4.9,
        reviews: 712,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=CSK+Jersey',
        ],
        description: 'Official CSK IPL jersey. Iconic yellow jersey.',
        features: [
            'Climacool Technology',
            'Iconic Yellow Design',
            'Official CSK Logo',
            'Fan Favorite',
            'IPL Official'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        weight: '178g',
        specifications: {
            material: 'Climacool Polyester',
            technology: 'Climacool',
            team: 'Chennai Super Kings',
            format: 'IPL T20',
            official: 'IPL Licensed'
        }
    },
    {
        id: 'jersey-009',
        name: 'SS Premium Cricket Jersey',
        category: 'jerseys',
        brand: 'SS',
        price: 1800,
        originalPrice: 2300,
        rating: 4.5,
        reviews: 345,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SS+Jersey',
        ],
        description: 'Quality cricket jersey for club and league matches.',
        features: [
            'Moisture-Wicking',
            'Breathable Fabric',
            'Multiple Colors',
            'Value for Money',
            'Club Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '190g',
        specifications: {
            material: 'Polyester Blend',
            technology: 'Moisture-Wicking',
            team: 'Generic/Custom',
            format: 'All Formats',
            official: 'N/A'
        }
    },
    {
        id: 'jersey-010',
        name: 'SG Club Cricket Jersey',
        category: 'jerseys',
        brand: 'SG',
        price: 1500,
        originalPrice: 2000,
        rating: 4.4,
        reviews: 298,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SG+Jersey',
        ],
        description: 'Affordable cricket jersey for club cricket.',
        features: [
            'Basic Moisture-Wicking',
            'Lightweight',
            'Multiple Colors',
            'Affordable',
            'Club Grade'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '200g',
        specifications: {
            material: 'Polyester',
            technology: 'Basic Wicking',
            team: 'Generic/Custom',
            format: 'All Formats',
            official: 'N/A'
        }
    },
    {
        id: 'jersey-011',
        name: 'Kookaburra Pro Team Jersey',
        category: 'jerseys',
        brand: 'Kookaburra',
        price: 2200,
        originalPrice: 2700,
        rating: 4.6,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Kookaburra+Jersey',
        ],
        description: 'Professional team jersey with quality construction.',
        features: [
            'Advanced Moisture-Wicking',
            'Breathable Mesh Panels',
            'Durable Fabric',
            'Professional Quality',
            'Team Ready'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '185g',
        specifications: {
            material: 'Performance Polyester',
            technology: 'Moisture-Wicking',
            team: 'Generic/Custom',
            format: 'All Formats',
            official: 'N/A'
        }
    },
    {
        id: 'jersey-012',
        name: 'Gray-Nicolls Match Jersey',
        category: 'jerseys',
        brand: 'Gray-Nicolls',
        price: 2100,
        originalPrice: 2600,
        rating: 4.6,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GN+Jersey',
        ],
        description: 'Quality match jersey for competitive cricket.',
        features: [
            'Moisture Management',
            'UV Protection',
            'Comfortable Fit',
            'Durable',
            'Match Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '188g',
        specifications: {
            material: 'Polyester Blend',
            technology: 'Moisture Management',
            team: 'Generic/Custom',
            format: 'All Formats',
            official: 'N/A'
        }
    },
    {
        id: 'jersey-013',
        name: 'MRF Team Cricket Jersey',
        category: 'jerseys',
        brand: 'MRF',
        price: 2000,
        originalPrice: 2500,
        rating: 4.5,
        reviews: 289,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=MRF+Jersey',
        ],
        description: 'Professional cricket jersey with MRF branding.',
        features: [
            'Moisture-Wicking',
            'Breathable',
            'Multiple Colors',
            'Good Quality',
            'Team Ready'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '190g',
        specifications: {
            material: 'Polyester',
            technology: 'Moisture-Wicking',
            team: 'Generic/Custom',
            format: 'All Formats',
            official: 'N/A'
        }
    },
    {
        id: 'jersey-014',
        name: 'Adidas IPL Delhi Capitals Jersey',
        category: 'jerseys',
        brand: 'Adidas',
        price: 2850,
        originalPrice: 3350,
        rating: 4.7,
        reviews: 423,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=DC+Jersey',
        ],
        description: 'Official Delhi Capitals IPL jersey with blue design.',
        features: [
            'Climacool Technology',
            'Official DC Logo',
            'Blue Theme',
            'Premium Quality',
            'IPL Official'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '176g',
        specifications: {
            material: 'Climacool Polyester',
            technology: 'Climacool',
            team: 'Delhi Capitals',
            format: 'IPL T20',
            official: 'IPL Licensed'
        }
    },
    {
        id: 'jersey-015',
        name: 'Nike Team Pakistan ODI Jersey',
        category: 'jerseys',
        brand: 'Nike',
        price: 3400,
        originalPrice: 3900,
        rating: 4.8,
        reviews: 412,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Pakistan+Jersey',
        ],
        description: 'Official Pakistan cricket team ODI jersey with green design.',
        features: [
            'Dri-FIT Technology',
            'Pakistan Green',
            'PCB Official Logo',
            'Premium Fabric',
            'Replica Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '174g',
        specifications: {
            material: 'Dri-FIT Polyester',
            technology: 'Dri-FIT',
            team: 'Pakistan National Team',
            format: 'ODI/T20',
            official: 'PCB Licensed'
        }
    },
    {
        id: 'jersey-016',
        name: 'Adidas Team South Africa ODI Jersey',
        category: 'jerseys',
        brand: 'Adidas',
        price: 3500,
        originalPrice: 4000,
        rating: 4.7,
        reviews: 345,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SA+Jersey',
        ],
        description: 'Official South Africa cricket jersey with green and gold.',
        features: [
            'Climacool Technology',
            'Proteas Design',
            'CSA Official Logo',
            'Premium Quality',
            'Replica Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '177g',
        specifications: {
            material: 'Climacool Polyester',
            technology: 'Climacool',
            team: 'South Africa National Team',
            format: 'ODI/T20',
            official: 'CSA Licensed'
        }
    },
    {
        id: 'jersey-017',
        name: 'Puma Team New Zealand ODI Jersey',
        category: 'jerseys',
        brand: 'Puma',
        price: 3600,
        originalPrice: 4100,
        rating: 4.8,
        reviews: 298,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=NZ+Jersey',
        ],
        description: 'Official New Zealand Black Caps jersey.',
        features: [
            'DryCELL Technology',
            'Black Caps Design',
            'NZC Official Logo',
            'Premium Fabric',
            'Replica Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '179g',
        specifications: {
            material: 'DryCELL Polyester',
            technology: 'DryCELL',
            team: 'New Zealand National Team',
            format: 'ODI/T20',
            official: 'NZC Licensed'
        }
    },
    {
        id: 'jersey-018',
        name: 'Spartan Team Training Jersey',
        category: 'jerseys',
        brand: 'Spartan',
        price: 1900,
        originalPrice: 2400,
        rating: 4.5,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Spartan+Jersey',
        ],
        description: 'Professional training jersey for teams.',
        features: [
            'Moisture-Wicking',
            'Breathable Fabric',
            'Multiple Colors',
            'Team Training',
            'Professional Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '192g',
        specifications: {
            material: 'Performance Polyester',
            technology: 'Moisture-Wicking',
            team: 'Generic/Custom',
            format: 'Training/Practice',
            official: 'N/A'
        }
    },
    {
        id: 'jersey-019',
        name: 'CA Plus Cricket Team Jersey',
        category: 'jerseys',
        brand: 'CA',
        price: 1700,
        originalPrice: 2200,
        rating: 4.4,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=CA+Jersey',
        ],
        description: 'Quality team jersey for league cricket.',
        features: [
            'Moisture-Wicking',
            'Lightweight',
            'Multiple Colors',
            'Good Value',
            'League Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '195g',
        specifications: {
            material: 'Polyester',
            technology: 'Basic Wicking',
            team: 'Generic/Custom',
            format: 'All Formats',
            official: 'N/A'
        }
    },
    {
        id: 'jersey-020',
        name: 'DSC Club Cricket Jersey',
        category: 'jerseys',
        brand: 'DSC',
        price: 1600,
        originalPrice: 2100,
        rating: 4.3,
        reviews: 289,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=DSC+Jersey',
        ],
        description: 'Affordable club cricket jersey with basic features.',
        features: [
            'Basic Moisture-Wicking',
            'Comfortable Fit',
            'Various Colors',
            'Budget Friendly',
            'Club Grade'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '198g',
        specifications: {
            material: 'Polyester',
            technology: 'Basic Wicking',
            team: 'Generic/Custom',
            format: 'All Formats',
            official: 'N/A'
        }
    },
    // ===================================
    // CRICKET BAGS (15 products)
    // ===================================
    {
        id: 'bag-001',
        name: 'Gray-Nicolls Powerbow 6X 1000 Wheelie Bag',
        category: 'cricket-bags',
        brand: 'Gray-Nicolls',
        price: 12500,
        originalPrice: 14000,
        rating: 4.8,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GN+Wheelie',
        ],
        description: 'Premium wheelie cricket bag with multiple compartments. Professional grade.',
        features: [
            'Heavy Duty Wheels',
            'Multiple Compartments',
            'Bat Sleeves (Up to 3 Bats)',
            'Padded Straps',
            'Ventilated Shoe Compartment'
        ],
        sizes: ['95cm x 40cm x 35cm'],
        weight: '3.5kg (empty)',
        specifications: {
            type: 'Wheelie Bag',
            capacity: '120 Liters',
            bat_capacity: '3 Full Size Bats',
            wheels: 'Heavy Duty Inline Skate Wheels',
            material: 'Premium Polyester + Tarpaulin Base'
        }
    },
    {
        id: 'bag-002',
        name: 'Kookaburra Pro 1000 Duffle Cricket Bag',
        category: 'cricket-bags',
        brand: 'Kookaburra',
        price: 8500,
        originalPrice: 10000,
        rating: 4.7,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Kookaburra+Duffle',
        ],
        description: 'Professional duffle bag with excellent storage capacity.',
        features: [
            'Large Main Compartment',
            'Bat Compartment (2 Bats)',
            'Side Pockets',
            'Padded Shoulder Strap',
            'Durable Construction'
        ],
        sizes: ['80cm x 35cm x 30cm'],
        weight: '2.2kg (empty)',
        specifications: {
            type: 'Duffle Bag',
            capacity: '85 Liters',
            bat_capacity: '2 Full Size Bats',
            wheels: 'No',
            material: 'Premium Polyester'
        }
    },
    {
        id: 'bag-003',
        name: 'SS Super Select Wheelie Cricket Bag',
        category: 'cricket-bags',
        brand: 'SS',
        price: 9500,
        originalPrice: 11000,
        rating: 4.6,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SS+Wheelie',
        ],
        description: 'Quality wheelie bag for professional cricketers.',
        features: [
            'Smooth Rolling Wheels',
            'Multiple Pockets',
            'Bat Section (2-3 Bats)',
            'Reinforced Base',
            'Professional Quality'
        ],
        sizes: ['90cm x 38cm x 32cm'],
        weight: '3.2kg (empty)',
        specifications: {
            type: 'Wheelie Bag',
            capacity: '110 Liters',
            bat_capacity: '2-3 Full Size Bats',
            wheels: 'Inline Skate Wheels',
            material: 'Polyester + Reinforced Base'
        }
    },
    {
        id: 'bag-004',
        name: 'MRF Genius Elite Wheelie Bag',
        category: 'cricket-bags',
        brand: 'MRF',
        price: 11500,
        originalPrice: 13000,
        rating: 4.8,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=MRF+Wheelie',
        ],
        description: 'Premium wheelie bag with superior build quality.',
        features: [
            'Heavy Duty Wheels',
            'Spacious Interior',
            'Bat Compartment (3 Bats)',
            'Waterproof Base',
            'International Quality'
        ],
        sizes: ['95cm x 40cm x 35cm'],
        weight: '3.6kg (empty)',
        specifications: {
            type: 'Wheelie Bag',
            capacity: '125 Liters',
            bat_capacity: '3 Full Size Bats',
            wheels: 'Premium Inline Wheels',
            material: 'Premium Polyester + Tarpaulin'
        }
    },
    {
        id: 'bag-005',
        name: 'SG Club Cricket Kit Bag',
        category: 'cricket-bags',
        brand: 'SG',
        price: 6500,
        originalPrice: 8000,
        rating: 4.5,
        reviews: 298,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SG+Kit',
        ],
        description: 'Affordable cricket kit bag for club players.',
        features: [
            'Large Main Section',
            'Bat Sleeve (2 Bats)',
            'Multiple Pockets',
            'Carry Handles',
            'Value for Money'
        ],
        sizes: ['75cm x 32cm x 28cm'],
        weight: '2.0kg (empty)',
        specifications: {
            type: 'Kit Bag',
            capacity: '70 Liters',
            bat_capacity: '2 Full Size Bats',
            wheels: 'No',
            material: 'Polyester'
        }
    },
    {
        id: 'bag-006',
        name: 'GM Diamond 909 Wheelie Bag',
        category: 'cricket-bags',
        brand: 'GM',
        price: 10500,
        originalPrice: 12000,
        rating: 4.7,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GM+Wheelie',
        ],
        description: 'Professional wheelie bag with classic GM quality.',
        features: [
            'Inline Skate Wheels',
            'Multiple Compartments',
            'Bat Section (3 Bats)',
            'Padded Carry Handles',
            'Professional Grade'
        ],
        sizes: ['92cm x 39cm x 33cm'],
        weight: '3.4kg (empty)',
        specifications: {
            type: 'Wheelie Bag',
            capacity: '115 Liters',
            bat_capacity: '3 Full Size Bats',
            wheels: 'Inline Skate Wheels',
            material: 'Premium Polyester'
        }
    },
    {
        id: 'bag-007',
        name: 'Spartan Pro Team Duffle Bag',
        category: 'cricket-bags',
        brand: 'Spartan',
        price: 7500,
        originalPrice: 9000,
        rating: 4.6,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Spartan+Duffle',
        ],
        description: 'Professional duffle bag with modern design.',
        features: [
            'Large Capacity',
            'Bat Compartment (2 Bats)',
            'Side Mesh Pockets',
            'Adjustable Shoulder Strap',
            'Professional Quality'
        ],
        sizes: ['78cm x 34cm x 29cm'],
        weight: '2.1kg (empty)',
        specifications: {
            type: 'Duffle Bag',
            capacity: '80 Liters',
            bat_capacity: '2 Full Size Bats',
            wheels: 'No',
            material: 'Polyester'
        }
    },
    {
        id: 'bag-008',
        name: 'Kookaburra Pro 2000 Wheelie Bag',
        category: 'cricket-bags',
        brand: 'Kookaburra',
        price: 13500,
        originalPrice: 15000,
        rating: 4.9,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Kookaburra+Pro',
        ],
        description: 'Top-of-the-line wheelie bag for international players.',
        features: [
            'Premium Heavy Duty Wheels',
            'Ventilated Compartments',
            'Bat Section (4 Bats)',
            'Retractable Handle',
            'Elite Quality'
        ],
        sizes: ['100cm x 42cm x 37cm'],
        weight: '3.8kg (empty)',
        specifications: {
            type: 'Wheelie Bag',
            capacity: '135 Liters',
            bat_capacity: '4 Full Size Bats',
            wheels: 'Heavy Duty Premium Wheels',
            material: 'Premium Polyester + Reinforced'
        }
    },
    {
        id: 'bag-009',
        name: 'CA Plus 15000 Cricket Bag',
        category: 'cricket-bags',
        brand: 'CA',
        price: 7800,
        originalPrice: 9500,
        rating: 4.5,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=CA+Bag',
        ],
        description: 'Quality cricket bag for league players.',
        features: [
            'Spacious Interior',
            'Bat Sleeve (2 Bats)',
            'Multiple Pockets',
            'Strong Carry Straps',
            'League Quality'
        ],
        sizes: ['80cm x 35cm x 30cm'],
        weight: '2.3kg (empty)',
        specifications: {
            type: 'Kit Bag',
            capacity: '85 Liters',
            bat_capacity: '2 Full Size Bats',
            wheels: 'No',
            material: 'Polyester'
        }
    },
    {
        id: 'bag-010',
        name: 'DSC Intense Wheelie Cricket Bag',
        category: 'cricket-bags',
        brand: 'DSC',
        price: 8800,
        originalPrice: 10500,
        rating: 4.6,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=DSC+Wheelie',
        ],
        description: 'Modern wheelie bag with good features.',
        features: [
            'Rolling Wheels',
            'Multiple Storage Areas',
            'Bat Compartment (2 Bats)',
            'Durable Construction',
            'Match Quality'
        ],
        sizes: ['88cm x 37cm x 31cm'],
        weight: '3.0kg (empty)',
        specifications: {
            type: 'Wheelie Bag',
            capacity: '105 Liters',
            bat_capacity: '2 Full Size Bats',
            wheels: 'Standard Wheels',
            material: 'Polyester'
        }
    },
    {
        id: 'bag-011',
        name: 'Gray-Nicolls GN100 Duffle Bag',
        category: 'cricket-bags',
        brand: 'Gray-Nicolls',
        price: 6800,
        originalPrice: 8500,
        rating: 4.5,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GN+Duffle',
        ],
        description: 'Classic duffle bag with GN quality.',
        features: [
            'Large Main Compartment',
            'Bat Section (2 Bats)',
            'Side Pockets',
            'Comfortable Straps',
            'Professional Quality'
        ],
        sizes: ['75cm x 33cm x 28cm'],
        weight: '2.0kg (empty)',
        specifications: {
            type: 'Duffle Bag',
            capacity: '75 Liters',
            bat_capacity: '2 Full Size Bats',
            wheels: 'No',
            material: 'Polyester'
        }
    },
    {
        id: 'bag-012',
        name: 'SS Matrix Kit Bag',
        category: 'cricket-bags',
        brand: 'SS',
        price: 5500,
        originalPrice: 7000,
        rating: 4.4,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SS+Matrix',
        ],
        description: 'Budget-friendly kit bag for club cricket.',
        features: [
            'Good Capacity',
            'Bat Sleeve (1-2 Bats)',
            'Side Pockets',
            'Affordable',
            'Club Quality'
        ],
        sizes: ['70cm x 30cm x 26cm'],
        weight: '1.8kg (empty)',
        specifications: {
            type: 'Kit Bag',
            capacity: '60 Liters',
            bat_capacity: '1-2 Bats',
            wheels: 'No',
            material: 'Polyester'
        }
    },
    {
        id: 'bag-013',
        name: 'BDM Club Player Cricket Bag',
        category: 'cricket-bags',
        brand: 'BDM',
        price: 4800,
        originalPrice: 6500,
        rating: 4.3,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=BDM+Bag',
        ],
        description: 'Entry-level cricket bag for beginners.',
        features: [
            'Basic Storage',
            'Bat Compartment (1 Bat)',
            'Simple Design',
            'Value Price',
            'Entry Level'
        ],
        sizes: ['65cm x 28cm x 24cm'],
        weight: '1.5kg (empty)',
        specifications: {
            type: 'Kit Bag',
            capacity: '50 Liters',
            bat_capacity: '1 Bat',
            wheels: 'No',
            material: 'Polyester'
        }
    },
    {
        id: 'bag-014',
        name: 'Ton Elite Wheelie Cricket Bag',
        category: 'cricket-bags',
        brand: 'Ton',
        price: 9200,
        originalPrice: 11000,
        rating: 4.6,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Ton+Wheelie',
        ],
        description: 'Quality wheelie bag with modern features.',
        features: [
            'Smooth Wheels',
            'Good Storage',
            'Bat Section (2-3 Bats)',
            'Multiple Pockets',
            'Professional Quality'
        ],
        sizes: ['90cm x 38cm x 32cm'],
        weight: '3.1kg (empty)',
        specifications: {
            type: 'Wheelie Bag',
            capacity: '108 Liters',
            bat_capacity: '2-3 Bats',
            wheels: 'Standard Wheels',
            material: 'Polyester'
        }
    },
    {
        id: 'bag-015',
        name: 'MRF Grand Edition Duffle Bag',
        category: 'cricket-bags',
        brand: 'MRF',
        price: 8200,
        originalPrice: 9800,
        rating: 4.7,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=MRF+Duffle',
        ],
        description: 'Premium duffle bag with excellent build quality.',
        features: [
            'Large Capacity',
            'Bat Compartment (2 Bats)',
            'Reinforced Stitching',
            'Premium Finish',
            'Professional Grade'
        ],
        sizes: ['82cm x 36cm x 31cm'],
        weight: '2.4kg (empty)',
        specifications: {
            type: 'Duffle Bag',
            capacity: '90 Liters',
            bat_capacity: '2 Full Size Bats',
            wheels: 'No',
            material: 'Premium Polyester'
        }
    },
    // ===================================
    // PROTECTIVE GEAR (15 products)
    // ===================================
    {
        id: 'protect-001',
        name: 'Kookaburra Pro Guard Thigh Pad Set',
        category: 'protective-gear',
        brand: 'Kookaburra',
        price: 2800,
        originalPrice: 3200,
        rating: 4.7,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Thigh+Pad',
        ],
        description: 'Professional thigh pads with high-density foam protection.',
        features: [
            'High Density Foam',
            'Flexible Design',
            'Secure Velcro Straps',
            'Ambidextrous (Left & Right)',
            'Professional Grade'
        ],
        sizes: ['Men', 'Youth'],
        weight: '180g per pair',
        specifications: {
            type: 'Thigh Guard/Pad',
            material: 'High Density Foam + Mesh',
            protection_area: 'Upper Thigh',
            closure: 'Velcro Straps',
            includes: 'Left & Right Pads'
        }
    },
    {
        id: 'protect-002',
        name: 'Gray-Nicolls Ultimate Arm Guard',
        category: 'protective-gear',
        brand: 'Gray-Nicolls',
        price: 2500,
        originalPrice: 2900,
        rating: 4.6,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Arm+Guard',
        ],
        description: 'Full arm protection with multi-section foam guards.',
        features: [
            'Multi-Section Protection',
            'Flexible Arm Movement',
            'Breathable Fabric',
            'Adjustable Straps',
            'Professional Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '220g',
        specifications: {
            type: 'Arm Guard',
            material: 'Multi-Density Foam',
            protection_area: 'Forearm & Elbow',
            closure: 'Elastic Straps',
            hand: 'Left or Right Available'
        }
    },
    {
        id: 'protect-003',
        name: 'SS Matrix Chest Guard',
        category: 'protective-gear',
        brand: 'SS',
        price: 3500,
        originalPrice: 4000,
        rating: 4.7,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Chest+Guard',
        ],
        description: 'Professional chest guard for batsmen facing fast bowling.',
        features: [
            'Full Torso Protection',
            'High Impact Foam',
            'Adjustable Shoulder Straps',
            'Breathable Mesh Back',
            'Professional Grade'
        ],
        sizes: ['Men', 'Youth'],
        weight: '450g',
        specifications: {
            type: 'Chest Guard',
            material: 'High Impact Foam + Mesh',
            protection_area: 'Chest & Ribs',
            closure: 'Adjustable Straps',
            ventilation: 'Mesh Back Panel'
        }
    },
    {
        id: 'protect-004',
        name: 'MRF Genius Abdominal Guard',
        category: 'protective-gear',
        brand: 'MRF',
        price: 1200,
        originalPrice: 1500,
        rating: 4.5,
        reviews: 298,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Abdo+Guard',
        ],
        description: 'Essential abdominal protection with hard shell design.',
        features: [
            'Hard Plastic Shell',
            'Foam Padding',
            'Elastic Waistband',
            'Comfortable Fit',
            'Standard Protection'
        ],
        sizes: ['Men', 'Youth', 'Boys'],
        weight: '120g',
        specifications: {
            type: 'Abdominal Guard (Box)',
            material: 'Hard Plastic + Foam',
            protection_area: 'Groin/Abdominal',
            closure: 'Elastic Waistband',
            fit: 'Universal'
        }
    },
    {
        id: 'protect-005',
        name: 'SG Test Inner Thigh Pad',
        category: 'protective-gear',
        brand: 'SG',
        price: 2200,
        originalPrice: 2700,
        rating: 4.5,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Inner+Thigh',
        ],
        description: 'Inner thigh protection for batting comfort.',
        features: [
            'High Density Foam',
            'Comfortable Fit',
            'Secure Straps',
            'Lightweight',
            'Match Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '160g per pair',
        specifications: {
            type: 'Inner Thigh Guard',
            material: 'High Density Foam',
            protection_area: 'Inner Thigh',
            closure: 'Velcro Straps',
            includes: 'Pair (L&R)'
        }
    },
    {
        id: 'protect-006',
        name: 'GM Diamond Elbow Guard',
        category: 'protective-gear',
        brand: 'GM',
        price: 1800,
        originalPrice: 2200,
        rating: 4.6,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Elbow+Guard',
        ],
        description: 'Elbow-specific protection with flexible design.',
        features: [
            'Multi-Layered Foam',
            'Flexible Joint',
            'Breathable Material',
            'Adjustable Straps',
            'Professional Quality'
        ],
        sizes: ['One Size (Adjustable)'],
        weight: '150g',
        specifications: {
            type: 'Elbow Guard',
            material: 'Multi-Layer Foam',
            protection_area: 'Elbow Joint',
            closure: 'Elastic Straps',
            hand: 'Left or Right'
        }
    },
    {
        id: 'protect-007',
        name: 'Kookaburra Pro Forearm Guard',
        category: 'protective-gear',
        brand: 'Kookaburra',
        price: 2100,
        originalPrice: 2500,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Forearm+Guard',
        ],
        description: 'Dedicated forearm protection for aggressive batting.',
        features: [
            'High Impact Protection',
            'Ergonomic Design',
            'Lightweight',
            'Secure Fit',
            'Professional Grade'
        ],
        sizes: ['Men', 'Youth'],
        weight: '180g',
        specifications: {
            type: 'Forearm Guard',
            material: 'High Density Foam',
            protection_area: 'Forearm',
            closure: 'Elastic Straps',
            hand: 'Left or Right'
        }
    },
    {
        id: 'protect-008',
        name: 'Gray-Nicolls Shoulder Guard',
        category: 'protective-gear',
        brand: 'Gray-Nicolls',
        price: 2400,
        originalPrice: 2800,
        rating: 4.7,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Shoulder+Guard',
        ],
        description: 'Shoulder protection for hook and pull shots.',
        features: [
            'Shoulder Cap Design',
            'High Density Foam',
            'Comfortable Fit',
            'Adjustable Straps',
            'Professional Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '200g',
        specifications: {
            type: 'Shoulder Guard',
            material: 'High Density Foam + Mesh',
            protection_area: 'Shoulder & Upper Arm',
            closure: 'Adjustable Straps',
            hand: 'Left or Right'
        }
    },
    {
        id: 'protect-009',
        name: 'Spartan Full Arm Guard Set',
        category: 'protective-gear',
        brand: 'Spartan',
        price: 3200,
        originalPrice: 3700,
        rating: 4.7,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Full+Arm',
        ],
        description: 'Complete arm protection from shoulder to wrist.',
        features: [
            'Full Arm Coverage',
            'Multi-Section Design',
            'Maximum Protection',
            'Breathable Fabric',
            'Professional Grade'
        ],
        sizes: ['Men', 'Youth'],
        weight: '350g',
        specifications: {
            type: 'Full Arm Guard',
            material: 'Multi-Density Foam',
            protection_area: 'Shoulder to Wrist',
            closure: 'Multiple Straps',
            hand: 'Left or Right'
        }
    },
    {
        id: 'protect-010',
        name: 'MRF Rib Guard',
        category: 'protective-gear',
        brand: 'MRF',
        price: 2900,
        originalPrice: 3400,
        rating: 4.6,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Rib+Guard',
        ],
        description: 'Side rib protection for fast bowling conditions.',
        features: [
            'Rib Cage Protection',
            'High Impact Foam',
            'Lightweight Design',
            'Adjustable Fit',
            'Professional Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '280g',
        specifications: {
            type: 'Rib Guard',
            material: 'High Impact Foam',
            protection_area: 'Side Ribs',
            closure: 'Elastic Straps',
            hand: 'Left or Right Side'
        }
    },
    {
        id: 'protect-011',
        name: 'SS Pro Combo Set (Thigh + Arm Guards)',
        category: 'protective-gear',
        brand: 'SS',
        price: 4500,
        originalPrice: 5400,
        rating: 4.7,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SS+Combo',
        ],
        description: 'Complete protection combo with thigh and arm guards.',
        features: [
            'Thigh Pads + Arm Guard',
            'Matching Design',
            'Good Protection',
            'Value Bundle',
            'Professional Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '550g total',
        specifications: {
            type: 'Combo Set',
            material: 'High Density Foam',
            protection_area: 'Thigh + Forearm',
            closure: 'Multiple Straps',
            includes: 'Thigh Pads + Arm Guard'
        }
    },
    {
        id: 'protect-012',
        name: 'CA Plus Batting Inner Thigh Guard',
        category: 'protective-gear',
        brand: 'CA',
        price: 1800,
        originalPrice: 2300,
        rating: 4.5,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=CA+Thigh',
        ],
        description: 'Quality inner thigh protection for league cricket.',
        features: [
            'Good Foam Density',
            'Comfortable Fit',
            'Secure Straps',
            'Value for Money',
            'League Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '170g per pair',
        specifications: {
            type: 'Inner Thigh Guard',
            material: 'Standard Foam',
            protection_area: 'Inner Thigh',
            closure: 'Velcro Straps',
            includes: 'Pair'
        }
    },
    {
        id: 'protect-013',
        name: 'DSC Intense Chest Guard',
        category: 'protective-gear',
        brand: 'DSC',
        price: 3100,
        originalPrice: 3600,
        rating: 4.6,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=DSC+Chest',
        ],
        description: 'Modern chest guard with good protection.',
        features: [
            'Torso Protection',
            'Multi-Layer Foam',
            'Breathable Design',
            'Adjustable Fit',
            'Match Quality'
        ],
        sizes: ['Men', 'Youth'],
        weight: '420g',
        specifications: {
            type: 'Chest Guard',
            material: 'Multi-Layer Foam',
            protection_area: 'Chest & Ribs',
            closure: 'Adjustable Straps',
            ventilation: 'Breathable Mesh'
        }
    },
    {
        id: 'protect-014',
        name: 'BDM Abdominal Guard Junior',
        category: 'protective-gear',
        brand: 'BDM',
        price: 850,
        originalPrice: 1200,
        rating: 4.4,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Junior+Abdo',
        ],
        description: 'Junior-sized abdominal protection for young players.',
        features: [
            'Junior Size',
            'Plastic Shell',
            'Foam Padding',
            'Elastic Waist',
            'Youth Quality'
        ],
        sizes: ['Youth', 'Boys (8-14 years)'],
        weight: '80g',
        specifications: {
            type: 'Abdominal Guard (Junior)',
            material: 'Plastic + Foam',
            protection_area: 'Groin/Abdominal',
            closure: 'Elastic Band',
            fit: 'Youth Sized'
        }
    },
    {
        id: 'protect-015',
        name: 'Ton Complete Protection Kit',
        category: 'protective-gear',
        brand: 'Ton',
        price: 6500,
        originalPrice: 8000,
        rating: 4.6,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Complete+Kit',
        ],
        description: 'Complete protection kit with all essential guards.',
        features: [
            'Thigh Guards + Arm Guard',
            'Chest Guard + Abdo Guard',
            'Complete Protection',
            'Value Bundle',
            'Professional Set'
        ],
        sizes: ['Men'],
        weight: '1200g total',
        specifications: {
            type: 'Complete Protection Kit',
            material: 'High Density Foam',
            protection_area: 'Full Body',
            closure: 'Multiple Straps',
            includes: 'Thigh, Arm, Chest, Abdo Guards'
        }
    },
    // ===================================
    // TRAINING EQUIPMENT (15 products)
    // ===================================
    {
        id: 'train-001',
        name: 'Kookaburra Pro Cricket Training Net - 10ft',
        category: 'training-equipment',
        brand: 'Kookaburra',
        price: 18500,
        originalPrice: 21000,
        rating: 4.8,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Training+Net',
        ],
        description: 'Professional cricket practice net with heavy-duty construction. 10ft x 10ft.',
        features: [
            'Heavy Duty Netting',
            '10ft x 10ft Coverage',
            'Steel Frame',
            'Easy Assembly',
            'Professional Grade'
        ],
        sizes: ['10ft x 10ft x 10ft'],
        weight: '25kg',
        specifications: {
            type: 'Practice Net',
            dimensions: '10ft x 10ft x 10ft',
            material: 'HDPE Netting + Steel Frame',
            portability: 'Portable (Assembly Required)',
            includes: 'Net + Frame + Ground Pegs'
        }
    },
    {
        id: 'train-002',
        name: 'SS Training Cone Set (12 pieces)',
        category: 'training-equipment',
        brand: 'SS',
        price: 1200,
        originalPrice: 1600,
        rating: 4.6,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Training+Cones',
        ],
        description: 'Set of 12 training cones for agility and fielding drills.',
        features: [
            '12 Bright Colored Cones',
            'Durable Plastic',
            'Stackable Design',
            'Multi-Purpose',
            'Training Grade'
        ],
        sizes: ['9 inch height'],
        weight: '1.5kg (set)',
        specifications: {
            type: 'Training Cones',
            quantity: '12 Pieces',
            material: 'High Quality Plastic',
            colors: 'Bright Orange/Yellow',
            height: '9 inches (23cm)'
        }
    },
    {
        id: 'train-003',
        name: 'Gray-Nicolls Spring Return Stumps Set',
        category: 'training-equipment',
        brand: 'Gray-Nicolls',
        price: 8500,
        originalPrice: 10000,
        rating: 4.7,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Spring+Stumps',
        ],
        description: 'Spring-loaded training stumps that bounce back after impact.',
        features: [
            'Spring Return Mechanism',
            'Heavy Base',
            'Self-Standing',
            'Durable Construction',
            'Professional Training'
        ],
        sizes: ['Standard Height'],
        weight: '8kg per set',
        specifications: {
            type: 'Spring Return Training Stumps',
            mechanism: 'Spring-Loaded Base',
            material: 'Plastic + Metal Spring',
            base_weight: 'Heavy Rubber Base',
            stumps: '3 Stumps + 2 Bails'
        }
    },
    {
        id: 'train-004',
        name: 'SG Boundary Marker Discs (Set of 20)',
        category: 'training-equipment',
        brand: 'SG',
        price: 1500,
        originalPrice: 2000,
        rating: 4.5,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Boundary+Discs',
        ],
        description: 'Flat boundary marker discs for field setup and drills.',
        features: [
            '20 Marker Discs',
            'Flat Non-Slip Design',
            'Weather Resistant',
            'Bright Colors',
            'Training Essential'
        ],
        sizes: ['10 inch diameter'],
        weight: '2kg (set)',
        specifications: {
            type: 'Boundary Markers',
            quantity: '20 Pieces',
            material: 'Rubber/Plastic',
            diameter: '10 inches (25cm)',
            colors: 'Yellow/Orange'
        }
    },
    {
        id: 'train-005',
        name: 'MRF Bowling Machine - Semi-Auto',
        category: 'training-equipment',
        brand: 'MRF',
        price: 85000,
        originalPrice: 95000,
        rating: 4.9,
        reviews: 89,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Bowling+Machine',
        ],
        description: 'Semi-automatic bowling machine with adjustable speed and line.',
        features: [
            'Speed: 40-140 kmph',
            'Adjustable Line & Length',
            'Ball Feeder (20 balls)',
            'Remote Control',
            'Professional Grade'
        ],
        sizes: ['Compact Design'],
        weight: '45kg',
        specifications: {
            type: 'Bowling Machine',
            speed_range: '40-140 kmph',
            ball_capacity: '20 Balls',
            power: 'Electric (220V)',
            adjustments: 'Speed, Line, Length, Swing'
        }
    },
    {
        id: 'train-006',
        name: 'Kookaburra Cricket Training Mat',
        category: 'training-equipment',
        brand: 'Kookaburra',
        price: 6500,
        originalPrice: 7500,
        rating: 4.6,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Training+Mat',
        ],
        description: 'Portable training mat for batting and bowling practice.',
        features: [
            '10ft x 4ft Size',
            'Non-Slip Base',
            'Durable Surface',
            'Portable & Rollable',
            'Indoor/Outdoor Use'
        ],
        sizes: ['10ft x 4ft'],
        weight: '8kg',
        specifications: {
            type: 'Training Mat/Pitch',
            dimensions: '10ft x 4ft',
            material: 'Rubber + Synthetic Turf',
            base: 'Non-Slip Rubber',
            portability: 'Rollable'
        }
    },
    {
        id: 'train-007',
        name: 'Spartan Rebound Cricket Net',
        category: 'training-equipment',
        brand: 'Spartan',
        price: 12500,
        originalPrice: 14500,
        rating: 4.7,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Rebound+Net',
        ],
        description: 'Spring-loaded rebound net for solo practice sessions.',
        features: [
            'Spring Return Mechanism',
            '6ft x 6ft Size',
            'Adjustable Angle',
            'Portable Frame',
            'Solo Training'
        ],
        sizes: ['6ft x 6ft'],
        weight: '12kg',
        specifications: {
            type: 'Rebound Net',
            dimensions: '6ft x 6ft',
            material: 'Heavy Duty Mesh + Steel',
            angle: 'Adjustable (0-45 degrees)',
            assembly: 'Quick Assembly'
        }
    },
    {
        id: 'train-008',
        name: 'GM Target Practice Cricket Net',
        category: 'training-equipment',
        brand: 'GM',
        price: 8500,
        originalPrice: 10000,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Target+Net',
        ],
        description: 'Target practice net with marked scoring zones.',
        features: [
            'Scoring Target Zones',
            '7ft x 7ft Size',
            'Hanging/Standing Options',
            'Durable Netting',
            'Accuracy Training'
        ],
        sizes: ['7ft x 7ft'],
        weight: '4kg',
        specifications: {
            type: 'Target Practice Net',
            dimensions: '7ft x 7ft',
            material: 'Polyester Mesh',
            targets: 'Numbered Scoring Zones',
            setup: 'Hanging or Ground Standing'
        }
    },
    {
        id: 'train-009',
        name: 'CA Plus Agility Ladder - 12 Rungs',
        category: 'training-equipment',
        brand: 'CA',
        price: 1800,
        originalPrice: 2400,
        rating: 4.5,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Agility+Ladder',
        ],
        description: 'Speed and agility ladder for footwork training.',
        features: [
            '12 Adjustable Rungs',
            '6 Meter Length',
            'Flat Non-Slip Design',
            'Portable Carry Bag',
            'Fitness Training'
        ],
        sizes: ['6 meters'],
        weight: '1kg',
        specifications: {
            type: 'Agility Ladder',
            length: '6 meters (20ft)',
            rungs: '12 Flat Rungs',
            material: 'Heavy Duty Webbing',
            includes: 'Carry Bag + Ground Pegs'
        }
    },
    {
        id: 'train-010',
        name: 'DSC Speed Training Hurdles (Set of 6)',
        category: 'training-equipment',
        brand: 'DSC',
        price: 3500,
        originalPrice: 4500,
        rating: 4.6,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Hurdles',
        ],
        description: 'Adjustable training hurdles for explosive power development.',
        features: [
            '6 Adjustable Hurdles',
            'Height: 6" to 12"',
            'Foldable Design',
            'Durable Plastic',
            'Speed Training'
        ],
        sizes: ['Adjustable Height'],
        weight: '4kg (set)',
        specifications: {
            type: 'Training Hurdles',
            quantity: '6 Hurdles',
            height_range: '6 inches to 12 inches',
            material: 'High Impact Plastic',
            portability: 'Foldable & Stackable'
        }
    },
    {
        id: 'train-011',
        name: 'Kookaburra Coaching Kit - Complete',
        category: 'training-equipment',
        brand: 'Kookaburra',
        price: 15500,
        originalPrice: 18000,
        rating: 4.8,
        reviews: 123,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Coaching+Kit',
        ],
        description: 'Complete coaching kit with multiple training aids.',
        features: [
            'Training Balls (12 pcs)',
            'Cones (12 pcs)',
            'Markers (20 pcs)',
            'Agility Ladder',
            'Complete Package'
        ],
        sizes: ['Large Kit Bag'],
        weight: '15kg total',
        specifications: {
            type: 'Complete Coaching Kit',
            includes: 'Balls, Cones, Markers, Ladder, Bag',
            material: 'Mixed Equipment',
            storage: 'Large Carry Bag',
            ideal_for: 'Coaches & Academies'
        }
    },
    {
        id: 'train-012',
        name: 'Gray-Nicolls Slip Catching Cradle',
        category: 'training-equipment',
        brand: 'Gray-Nicolls',
        price: 9500,
        originalPrice: 11000,
        rating: 4.7,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Slip+Cradle',
        ],
        description: 'Professional slip catching training cradle.',
        features: [
            'Adjustable Angle',
            'Realistic Catch Practice',
            'Durable Steel Frame',
            'Portable Design',
            'Slip Training'
        ],
        sizes: ['4ft x 3ft'],
        weight: '10kg',
        specifications: {
            type: 'Slip Catching Cradle',
            dimensions: '4ft x 3ft',
            material: 'Steel Frame + Mesh',
            angle: 'Adjustable (Multiple Settings)',
            assembly: 'Easy Assembly'
        }
    },
    {
        id: 'train-013',
        name: 'SS Ball Throw Down Simulator',
        category: 'training-equipment',
        brand: 'SS',
        price: 7500,
        originalPrice: 9000,
        rating: 4.5,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Throw+Down',
        ],
        description: 'Hand-held ball throwing device for coaching.',
        features: [
            'Manual Ball Launcher',
            'Adjustable Speed',
            'Lightweight Design',
            'No Power Required',
            'Coaching Tool'
        ],
        sizes: ['Handheld'],
        weight: '2.5kg',
        specifications: {
            type: 'Throw Down Simulator',
            operation: 'Manual/Mechanical',
            speed_range: 'Variable (Manual Control)',
            material: 'Plastic + Metal',
            power: 'No Power Required'
        }
    },
    {
        id: 'train-014',
        name: 'BDM Junior Training Set',
        category: 'training-equipment',
        brand: 'BDM',
        price: 4500,
        originalPrice: 6000,
        rating: 4.4,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Junior+Set',
        ],
        description: 'Complete training set designed for junior players.',
        features: [
            'Junior Training Bat',
            'Plastic Training Balls (6)',
            'Mini Training Stumps',
            'Cones (6 pcs)',
            'Youth Training'
        ],
        sizes: ['Junior Size'],
        weight: '5kg total',
        specifications: {
            type: 'Junior Training Kit',
            includes: 'Bat, Balls, Stumps, Cones',
            age_group: '8-14 years',
            material: 'Mixed Youth Grade',
            storage: 'Carry Bag Included'
        }
    },
    {
        id: 'train-015',
        name: 'Ton Resistance Training Bands Set',
        category: 'training-equipment',
        brand: 'Ton',
        price: 2200,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 212,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Resistance+Bands',
        ],
        description: 'Resistance bands for cricket-specific strength training.',
        features: [
            '5 Resistance Levels',
            'Cricket Specific Exercises',
            'Door Anchor Included',
            'Portable & Lightweight',
            'Strength Training'
        ],
        sizes: ['Various Resistances'],
        weight: '1kg (set)',
        specifications: {
            type: 'Resistance Bands',
            quantity: '5 Bands (Different Resistance)',
            resistance: 'Light to Extra Heavy',
            material: 'Premium Latex',
            includes: 'Bands + Door Anchor + Bag'
        }
    },
    // ===================================
    // ACCESSORIES (20 products)
    // ===================================
    {
        id: 'access-001',
        name: 'Gray-Nicolls Premium Bat Grip',
        category: 'accessories',
        brand: 'Gray-Nicolls',
        price: 350,
        originalPrice: 450,
        rating: 4.7,
        reviews: 345,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Bat+Grip',
        ],
        description: 'Premium replacement bat grip with superior feel and durability.',
        features: [
            'Tacky Surface',
            'Moisture Absorbent',
            'Easy Application',
            'Durable Material',
            'Professional Quality'
        ],
        sizes: ['Standard (110cm)'],
        weight: '25g',
        specifications: {
            type: 'Bat Grip',
            material: 'Premium PU',
            length: '110cm',
            thickness: '1.8mm',
            colors: 'Black, Red, Blue, White'
        }
    },
    {
        id: 'access-002',
        name: 'SS Bat Toe Guard',
        category: 'accessories',
        brand: 'SS',
        price: 180,
        originalPrice: 250,
        rating: 4.6,
        reviews: 456,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Toe+Guard',
        ],
        description: 'Protective toe guard to prevent bat damage.',
        features: [
            'Impact Protection',
            'Easy Application',
            'Clear/Colored Options',
            'Long Lasting',
            'Essential Protection'
        ],
        sizes: ['Universal Fit'],
        weight: '15g',
        specifications: {
            type: 'Toe Guard',
            material: 'PVC/Rubber',
            application: 'Self-Adhesive',
            colors: 'Clear, Black, White',
            protection: 'Toe Impact Shield'
        }
    },
    {
        id: 'access-003',
        name: 'Kookaburra Full Bat Cover',
        category: 'accessories',
        brand: 'Kookaburra',
        price: 1200,
        originalPrice: 1500,
        rating: 4.8,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Bat+Cover',
        ],
        description: 'Padded full-length bat cover with shoulder strap.',
        features: [
            'Full Bat Protection',
            'Padded Interior',
            'Shoulder Strap',
            'Zip Closure',
            'Premium Quality'
        ],
        sizes: ['Full Size', 'Short Handle', 'Long Handle'],
        weight: '180g',
        specifications: {
            type: 'Bat Cover',
            material: 'Padded Polyester',
            padding: 'Soft Foam Interior',
            closure: 'Full Length Zipper',
            carrying: 'Adjustable Shoulder Strap'
        }
    },
    {
        id: 'access-004',
        name: 'MRF Cricket Ball Polisher',
        category: 'accessories',
        brand: 'MRF',
        price: 280,
        originalPrice: 400,
        rating: 4.5,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Ball+Polisher',
        ],
        description: 'Professional ball polishing cloth for match conditions.',
        features: [
            'Microfiber Material',
            'Enhances Shine',
            'Maintains Seam',
            'Pocket Sized',
            'Match Essential'
        ],
        sizes: ['Standard (30cm x 30cm)'],
        weight: '30g',
        specifications: {
            type: 'Ball Polisher/Cloth',
            material: 'Microfiber',
            dimensions: '30cm x 30cm',
            use: 'Ball Maintenance',
            washable: 'Yes'
        }
    },
    {
        id: 'access-005',
        name: 'SG Super Bat Grip - Combo Pack (3 pcs)',
        category: 'accessories',
        brand: 'SG',
        price: 800,
        originalPrice: 1050,
        rating: 4.6,
        reviews: 289,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Grip+Combo',
        ],
        description: 'Value pack of 3 premium bat grips in assorted colors.',
        features: [
            'Pack of 3 Grips',
            'Assorted Colors',
            'Good Tackiness',
            'Value Pack',
            'Professional Quality'
        ],
        sizes: ['Standard (110cm each)'],
        weight: '75g (pack)',
        specifications: {
            type: 'Bat Grip Combo',
            material: 'PU Polyurethane',
            quantity: '3 Grips',
            length: '110cm each',
            colors: 'Assorted (Black, Red, Blue)'
        }
    },
    {
        id: 'access-006',
        name: 'Gray-Nicolls Bat Mallet',
        category: 'accessories',
        brand: 'Gray-Nicolls',
        price: 1800,
        originalPrice: 2200,
        rating: 4.7,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Bat+Mallet',
        ],
        description: 'Professional bat knocking mallet for bat preparation.',
        features: [
            'Hardwood Construction',
            'Comfortable Handle',
            'Perfect Weight',
            'Bat Preparation',
            'Professional Tool'
        ],
        sizes: ['Standard'],
        weight: '450g',
        specifications: {
            type: 'Bat Mallet',
            material: 'Hardwood',
            use: 'Bat Knocking/Preparation',
            handle: 'Wooden Grip',
            weight: '450g'
        }
    },
    {
        id: 'access-007',
        name: 'Kookaburra Metal Shoe Spikes (Set of 12)',
        category: 'accessories',
        brand: 'Kookaburra',
        price: 650,
        originalPrice: 850,
        rating: 4.6,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Shoe+Spikes',
        ],
        description: 'Replacement metal spikes for cricket shoes.',
        features: [
            '12 Metal Spikes',
            'Universal Thread',
            'Superior Grip',
            'Durable Metal',
            'Easy Installation'
        ],
        sizes: ['Standard Thread'],
        weight: '120g (set)',
        specifications: {
            type: 'Replacement Spikes',
            material: 'Metal Alloy',
            quantity: '12 Spikes',
            thread: 'Universal Standard',
            includes: 'Spike Key'
        }
    },
    {
        id: 'access-008',
        name: 'Spartan Cricket Bat Stickers (Custom)',
        category: 'accessories',
        brand: 'Spartan',
        price: 450,
        originalPrice: 600,
        rating: 4.5,
        reviews: 312,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Bat+Stickers',
        ],
        description: 'High-quality bat stickers for personalizing your bat.',
        features: [
            'Premium Vinyl',
            'Weather Resistant',
            'Multiple Designs',
            'Easy Application',
            'Customization'
        ],
        sizes: ['Standard Bat Size'],
        weight: '10g',
        specifications: {
            type: 'Bat Stickers',
            material: 'Premium Vinyl',
            designs: 'Multiple Styles Available',
            application: 'Self-Adhesive',
            durability: 'Water Resistant'
        }
    },
    {
        id: 'access-009',
        name: 'GM Bat Care Kit - Complete',
        category: 'accessories',
        brand: 'GM',
        price: 1500,
        originalPrice: 1900,
        rating: 4.7,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Bat+Care',
        ],
        description: 'Complete bat maintenance kit with oil, grip, and toe guard.',
        features: [
            'Bat Oil (100ml)',
            'Replacement Grip',
            'Toe Guard',
            'Cleaning Cloth',
            'Complete Care'
        ],
        sizes: ['Complete Kit'],
        weight: '350g',
        specifications: {
            type: 'Bat Care Kit',
            includes: 'Oil, Grip, Toe Guard, Cloth',
            oil_volume: '100ml Linseed Oil',
            material: 'Mixed Products',
            storage: 'Carry Pouch'
        }
    },
    {
        id: 'access-010',
        name: 'SS Cricket Bat Tape - White',
        category: 'accessories',
        brand: 'SS',
        price: 220,
        originalPrice: 300,
        rating: 4.5,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Bat+Tape',
        ],
        description: 'Professional bat edge tape for protection.',
        features: [
            'Edge Protection',
            'Easy Application',
            'Durable Adhesive',
            'Clean Removal',
            'Match Quality'
        ],
        sizes: ['25mm x 10m'],
        weight: '50g',
        specifications: {
            type: 'Bat Tape',
            material: 'Cotton Tape',
            dimensions: '25mm width x 10m length',
            adhesive: 'Strong Adhesive Back',
            color: 'White'
        }
    },
    {
        id: 'access-011',
        name: 'MRF Batting Glove Inner (Pair)',
        category: 'accessories',
        brand: 'MRF',
        price: 580,
        originalPrice: 750,
        rating: 4.6,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Inner+Gloves',
        ],
        description: 'Cotton inner gloves for moisture absorption.',
        features: [
            '100% Cotton',
            'Moisture Wicking',
            'Comfortable Fit',
            'Reusable',
            'Washable'
        ],
        sizes: ['S', 'M', 'L'],
        weight: '60g per pair',
        specifications: {
            type: 'Inner Gloves',
            material: '100% Cotton',
            use: 'Moisture Absorption',
            care: 'Machine Washable',
            includes: 'Pair (L&R)'
        }
    },
    {
        id: 'access-012',
        name: 'Kookaburra Ball Bag (Holds 12 Balls)',
        category: 'accessories',
        brand: 'Kookaburra',
        price: 2200,
        originalPrice: 2700,
        rating: 4.7,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Ball+Bag',
        ],
        description: 'Mesh ball bag for easy storage and transport.',
        features: [
            'Holds 12 Balls',
            'Mesh Ventilation',
            'Drawstring Closure',
            'Carry Handle',
            'Durable Material'
        ],
        sizes: ['Standard'],
        weight: '200g (empty)',
        specifications: {
            type: 'Ball Bag',
            capacity: '12 Cricket Balls',
            material: 'Mesh Polyester',
            closure: 'Drawstring',
            ventilation: 'Full Mesh'
        }
    },
    {
        id: 'access-013',
        name: 'Gray-Nicolls Bat Oil - Linseed (100ml)',
        category: 'accessories',
        brand: 'Gray-Nicolls',
        price: 380,
        originalPrice: 500,
        rating: 4.6,
        reviews: 298,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Bat+Oil',
        ],
        description: 'Premium raw linseed oil for bat maintenance.',
        features: [
            'Raw Linseed Oil',
            '100ml Bottle',
            'Bat Protection',
            'Moisture Seal',
            'Essential Care'
        ],
        sizes: ['100ml'],
        weight: '120g',
        specifications: {
            type: 'Bat Oil',
            material: 'Raw Linseed Oil',
            volume: '100ml',
            application: 'Light Coating',
            frequency: 'Every 3-4 Weeks'
        }
    },
    {
        id: 'access-014',
        name: 'CA Plus Grip Cone',
        category: 'accessories',
        brand: 'CA',
        price: 150,
        originalPrice: 250,
        rating: 4.4,
        reviews: 345,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Grip+Cone',
        ],
        description: 'Plastic cone for easy grip application.',
        features: [
            'Grip Application Tool',
            'Easy to Use',
            'Durable Plastic',
            'Smooth Application',
            'Essential Tool'
        ],
        sizes: ['Standard'],
        weight: '30g',
        specifications: {
            type: 'Grip Cone',
            material: 'Hard Plastic',
            use: 'Grip Installation',
            reusable: 'Yes',
            color: 'Various'
        }
    },
    {
        id: 'access-015',
        name: 'DSC Cricket Bat Face Tape',
        category: 'accessories',
        brand: 'DSC',
        price: 350,
        originalPrice: 480,
        rating: 4.5,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Face+Tape',
        ],
        description: 'Transparent face tape for bat protection.',
        features: [
            'Face Protection',
            'Transparent Film',
            'Impact Resistant',
            'Easy Application',
            'Bat Protection'
        ],
        sizes: ['Standard (A4 Size Sheet)'],
        weight: '40g',
        specifications: {
            type: 'Face Tape',
            material: 'Transparent PVC Film',
            coverage: 'Full Bat Face',
            adhesive: 'Self-Adhesive',
            protection: 'Impact Shield'
        }
    },
    {
        id: 'access-016',
        name: 'BDM Grip Enhancer Spray (50ml)',
        category: 'accessories',
        brand: 'BDM',
        price: 420,
        originalPrice: 580,
        rating: 4.5,
        reviews: 223,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Grip+Spray',
        ],
        description: 'Grip enhancer spray for better bat control.',
        features: [
            'Instant Tackiness',
            'Non-Slip Formula',
            'Quick Dry',
            'Long Lasting',
            'Match Essential'
        ],
        sizes: ['50ml'],
        weight: '80g',
        specifications: {
            type: 'Grip Enhancer',
            volume: '50ml',
            formula: 'Quick-Dry Tacky',
            application: 'Spray On Grip',
            duration: 'Lasts 2-3 Hours'
        }
    },
    {
        id: 'access-017',
        name: 'Ton Cricket Ball Marker/Pen',
        category: 'accessories',
        brand: 'Ton',
        price: 180,
        originalPrice: 280,
        rating: 4.4,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Ball+Marker',
        ],
        description: 'Permanent marker for ball identification.',
        features: [
            'Permanent Ink',
            'Ball Safe',
            'Quick Dry',
            'Weather Resistant',
            'Team Use'
        ],
        sizes: ['Standard'],
        weight: '20g',
        specifications: {
            type: 'Ball Marker',
            ink_type: 'Permanent',
            tip: 'Fine Point',
            color: 'Black',
            drying: 'Fast Dry'
        }
    },
    {
        id: 'access-018',
        name: 'Spartan Bat Repair Kit',
        category: 'accessories',
        brand: 'Spartan',
        price: 1200,
        originalPrice: 1600,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Repair+Kit',
        ],
        description: 'Complete bat repair kit with adhesive and tools.',
        features: [
            'Wood Adhesive',
            'Sandpaper Set',
            'Clamps (2 pcs)',
            'Repair Guide',
            'Complete Kit'
        ],
        sizes: ['Complete Kit'],
        weight: '450g',
        specifications: {
            type: 'Bat Repair Kit',
            includes: 'Adhesive, Sandpaper, Clamps, Guide',
            adhesive: 'Wood Glue (50ml)',
            use: 'Bat Crack Repair',
            storage: 'Carry Case'
        }
    },
    {
        id: 'access-019',
        name: 'MRF Helmet Visor Cleaner',
        category: 'accessories',
        brand: 'MRF',
        price: 280,
        originalPrice: 400,
        rating: 4.5,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Visor+Cleaner',
        ],
        description: 'Anti-fog helmet visor cleaner spray.',
        features: [
            'Anti-Fog Formula',
            'Streak-Free',
            'Safe for Visors',
            'Microfiber Cloth',
            'Clear Vision'
        ],
        sizes: ['50ml + Cloth'],
        weight: '90g',
        specifications: {
            type: 'Visor Cleaner',
            volume: '50ml Spray',
            formula: 'Anti-Fog + Cleaner',
            includes: 'Microfiber Cloth',
            application: 'Spray & Wipe'
        }
    },
    {
        id: 'access-020',
        name: 'SS Cricket Kit Maintenance Bundle',
        category: 'accessories',
        brand: 'SS',
        price: 2800,
        originalPrice: 3500,
        rating: 4.7,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Maintenance+Bundle',
        ],
        description: 'Complete cricket kit maintenance bundle with all essentials.',
        features: [
            'Bat Oil + Grip',
            'Ball Polisher',
            'Toe Guard + Tape',
            'Grip Enhancer',
            'Complete Bundle'
        ],
        sizes: ['Complete Bundle'],
        weight: '800g',
        specifications: {
            type: 'Maintenance Bundle',
            includes: 'Oil, Grip, Polisher, Guard, Tape, Spray',
            value: 'Save 20% vs Individual',
            storage: 'Organized Carry Case',
            ideal_for: 'Complete Kit Care'
        }
    },
    // ===================================
    // TRAINING WEAR (15 products)
    // ===================================
    {
        id: 'wear-001',
        name: 'Adidas Climacool Training Shorts',
        category: 'training-wear',
        brand: 'Adidas',
        price: 1800,
        originalPrice: 2200,
        rating: 4.7,
        reviews: 345,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Adidas+Shorts',
        ],
        description: 'Professional training shorts with Climacool technology for superior ventilation.',
        features: [
            'Climacool Technology',
            'Moisture-Wicking Fabric',
            'Elastic Waistband',
            'Side Pockets',
            'Lightweight'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '120g',
        specifications: {
            type: 'Training Shorts',
            material: 'Polyester Climacool',
            length: 'Above Knee',
            waist: 'Elastic + Drawstring',
            pockets: '2 Side Pockets'
        }
    },
    {
        id: 'wear-002',
        name: 'Nike Dri-FIT Track Pants',
        category: 'training-wear',
        brand: 'Nike',
        price: 2500,
        originalPrice: 3000,
        rating: 4.8,
        reviews: 289,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Nike+Track+Pants',
        ],
        description: 'Premium track pants with Dri-FIT technology for all-day comfort.',
        features: [
            'Dri-FIT Technology',
            'Tapered Fit',
            'Zippered Ankles',
            'Side Pockets',
            'Professional Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '250g',
        specifications: {
            type: 'Track Pants',
            material: 'Dri-FIT Polyester',
            fit: 'Tapered',
            waist: 'Elastic Waistband',
            ankle: 'Zippered'
        }
    },
    {
        id: 'wear-003',
        name: 'Puma Training T-Shirt',
        category: 'training-wear',
        brand: 'Puma',
        price: 1200,
        originalPrice: 1600,
        rating: 4.6,
        reviews: 456,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Puma+Tee',
        ],
        description: 'Breathable training t-shirt with DryCELL moisture management.',
        features: [
            'DryCELL Technology',
            'Breathable Fabric',
            'Regular Fit',
            'Puma Cat Logo',
            'Multiple Colors'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '150g',
        specifications: {
            type: 'Training T-Shirt',
            material: 'DryCELL Polyester',
            fit: 'Regular Fit',
            neck: 'Crew Neck',
            sleeve: 'Short Sleeve'
        }
    },
    {
        id: 'wear-004',
        name: 'New Balance Performance Vest',
        category: 'training-wear',
        brand: 'New Balance',
        price: 1000,
        originalPrice: 1400,
        rating: 4.5,
        reviews: 234,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=NB+Vest',
        ],
        description: 'Sleeveless training vest for maximum mobility.',
        features: [
            'NB Dry Technology',
            'Sleeveless Design',
            'Maximum Mobility',
            'Breathable Mesh',
            'Lightweight'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        weight: '100g',
        specifications: {
            type: 'Training Vest',
            material: 'NB Dry Polyester',
            fit: 'Athletic Fit',
            sleeve: 'Sleeveless',
            ventilation: 'Mesh Panels'
        }
    },
    {
        id: 'wear-005',
        name: 'Kookaburra Training Shorts - 2 Pack',
        category: 'training-wear',
        brand: 'Kookaburra',
        price: 2800,
        originalPrice: 3600,
        rating: 4.6,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=KB+Shorts+Pack',
        ],
        description: 'Value pack of 2 premium training shorts.',
        features: [
            'Pack of 2 Shorts',
            'Moisture-Wicking',
            'Elastic Waistband',
            'Side Pockets',
            'Value Pack'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '240g (pack)',
        specifications: {
            type: 'Training Shorts (2 Pack)',
            material: 'Polyester Blend',
            quantity: '2 Shorts',
            length: 'Above Knee',
            colors: 'Black + Navy'
        }
    },
    {
        id: 'wear-006',
        name: 'SS Compression Base Layer Shirt',
        category: 'training-wear',
        brand: 'SS',
        price: 1800,
        originalPrice: 2400,
        rating: 4.7,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Compression+Shirt',
        ],
        description: 'Compression shirt for enhanced performance and muscle support.',
        features: [
            'Compression Fit',
            'Muscle Support',
            'Moisture-Wicking',
            'Long Sleeve',
            'Performance Grade'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '180g',
        specifications: {
            type: 'Compression Base Layer',
            material: 'Spandex Blend',
            fit: 'Compression',
            sleeve: 'Long Sleeve',
            use: 'Base Layer'
        }
    },
    {
        id: 'wear-007',
        name: 'Gray-Nicolls Training Jacket',
        category: 'training-wear',
        brand: 'Gray-Nicolls',
        price: 3500,
        originalPrice: 4200,
        rating: 4.8,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=GN+Jacket',
        ],
        description: 'Professional training jacket with weather protection.',
        features: [
            'Water Resistant',
            'Windproof',
            'Full Zip',
            'Side Pockets',
            'Professional Quality'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '400g',
        specifications: {
            type: 'Training Jacket',
            material: 'Polyester Shell',
            protection: 'Water & Wind Resistant',
            closure: 'Full Zip',
            pockets: '2 Zip Pockets'
        }
    },
    {
        id: 'wear-008',
        name: 'MRF Compression Tights',
        category: 'training-wear',
        brand: 'MRF',
        price: 2200,
        originalPrice: 2800,
        rating: 4.7,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Compression+Tights',
        ],
        description: 'Full-length compression tights for training and recovery.',
        features: [
            'Full Compression',
            'Muscle Recovery',
            'Moisture-Wicking',
            'Elastic Waistband',
            'Performance Grade'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '200g',
        specifications: {
            type: 'Compression Tights',
            material: 'Spandex Polyester Blend',
            fit: 'Full Compression',
            length: 'Full Length',
            waist: 'Elastic'
        }
    },
    {
        id: 'wear-009',
        name: 'SG Training T-Shirt - 3 Pack',
        category: 'training-wear',
        brand: 'SG',
        price: 2400,
        originalPrice: 3200,
        rating: 4.5,
        reviews: 312,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=SG+Tee+Pack',
        ],
        description: 'Value pack of 3 training t-shirts in assorted colors.',
        features: [
            'Pack of 3 T-Shirts',
            'Moisture-Wicking',
            'Assorted Colors',
            'Regular Fit',
            'Value Bundle'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '450g (pack)',
        specifications: {
            type: 'Training T-Shirt (3 Pack)',
            material: 'Polyester',
            quantity: '3 T-Shirts',
            colors: 'Black, Navy, Grey',
            fit: 'Regular'
        }
    },
    {
        id: 'wear-010',
        name: 'Spartan Sweat Pants',
        category: 'training-wear',
        brand: 'Spartan',
        price: 2000,
        originalPrice: 2600,
        rating: 4.6,
        reviews: 223,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Sweat+Pants',
        ],
        description: 'Comfortable sweat pants for warm-up and training.',
        features: [
            'Cotton Blend',
            'Elastic Waistband',
            'Side Pockets',
            'Ribbed Ankles',
            'Comfortable Fit'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '350g',
        specifications: {
            type: 'Sweat Pants',
            material: 'Cotton Polyester Blend',
            waist: 'Elastic + Drawstring',
            pockets: '2 Side + 1 Back',
            ankle: 'Ribbed'
        }
    },
    {
        id: 'wear-011',
        name: 'CA Plus Training Vest - Bibs (Set of 10)',
        category: 'training-wear',
        brand: 'CA',
        price: 3500,
        originalPrice: 4500,
        rating: 4.7,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Training+Bibs',
        ],
        description: 'Set of 10 training bibs for team practice sessions.',
        features: [
            'Set of 10 Bibs',
            'Two Colors (5+5)',
            'Breathable Mesh',
            'One Size Fits All',
            'Team Training'
        ],
        sizes: ['One Size (Adult)'],
        weight: '1.2kg (set)',
        specifications: {
            type: 'Training Bibs/Vests',
            material: 'Mesh Polyester',
            quantity: '10 Bibs (5 per color)',
            colors: 'Red + Blue',
            fit: 'One Size Adjustable'
        }
    },
    {
        id: 'wear-012',
        name: 'DSC Sleeveless Training Shirt',
        category: 'training-wear',
        brand: 'DSC',
        price: 1100,
        originalPrice: 1500,
        rating: 4.5,
        reviews: 189,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=DSC+Sleeveless',
        ],
        description: 'Breathable sleeveless training shirt for hot conditions.',
        features: [
            'Sleeveless Design',
            'Moisture-Wicking',
            'Breathable Fabric',
            'Athletic Fit',
            'Training Grade'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '110g',
        specifications: {
            type: 'Sleeveless Training Shirt',
            material: 'Polyester',
            fit: 'Athletic Fit',
            neck: 'Crew Neck',
            ventilation: 'Mesh Side Panels'
        }
    },
    {
        id: 'wear-013',
        name: 'BDM Junior Training Kit Set',
        category: 'training-wear',
        brand: 'BDM',
        price: 2500,
        originalPrice: 3300,
        rating: 4.6,
        reviews: 267,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Junior+Kit',
        ],
        description: 'Complete junior training wear set with shirt, shorts and track pants.',
        features: [
            'T-Shirt + Shorts + Track Pants',
            'Youth Sizing',
            'Moisture-Wicking',
            'Complete Set',
            'Value Bundle'
        ],
        sizes: ['Youth (8-10 yrs)', 'Youth (10-12 yrs)', 'Youth (12-14 yrs)'],
        weight: '550g (set)',
        specifications: {
            type: 'Junior Training Kit',
            includes: 'T-Shirt + Shorts + Track Pants',
            material: 'Polyester',
            age_group: '8-14 years',
            colors: 'Multiple Options'
        }
    },
    {
        id: 'wear-014',
        name: 'Ton Moisture-Wicking Polo Shirt',
        category: 'training-wear',
        brand: 'Ton',
        price: 1600,
        originalPrice: 2100,
        rating: 4.5,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Polo+Shirt',
        ],
        description: 'Stylish polo shirt for training and casual wear.',
        features: [
            'Polo Collar',
            'Moisture-Wicking',
            'Button Placket',
            'Side Slits',
            'Professional Look'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '170g',
        specifications: {
            type: 'Training Polo Shirt',
            material: 'Polyester Pique',
            collar: 'Polo Collar',
            closure: '3-Button Placket',
            fit: 'Regular'
        }
    },
    {
        id: 'wear-015',
        name: 'Kookaburra Hooded Training Sweatshirt',
        category: 'training-wear',
        brand: 'Kookaburra',
        price: 3200,
        originalPrice: 4000,
        rating: 4.7,
        reviews: 156,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Hoodie',
        ],
        description: 'Premium hooded sweatshirt for warm-up and training.',
        features: [
            'Fleece Lined',
            'Kangaroo Pocket',
            'Adjustable Hood',
            'Ribbed Cuffs',
            'Comfortable Fit'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '500g',
        specifications: {
            type: 'Hooded Sweatshirt',
            material: 'Cotton Polyester Blend',
            lining: 'Fleece Interior',
            pocket: 'Front Kangaroo Pocket',
            hood: 'Adjustable Drawstring'
        }
    },
    // ===================================
    // UMPIRE EQUIPMENT (10 products)
    // ===================================
    {
        id: 'umpire-001',
        name: 'Gray-Nicolls Professional Umpire Counter Set',
        category: 'umpire-equipment',
        brand: 'Gray-Nicolls',
        price: 1200,
        originalPrice: 1600,
        rating: 4.8,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Umpire+Counter',
        ],
        description: 'Professional umpire ball counter for accurate ball tracking.',
        features: [
            'Dual Counter System',
            'Over & Ball Counter',
            'Easy Reset Button',
            'Clip Attachment',
            'Professional Grade'
        ],
        sizes: ['Standard'],
        weight: '50g',
        specifications: {
            type: 'Ball Counter',
            counters: 'Dual (Overs + Balls)',
            max_count: '99 Overs',
            material: 'Plastic',
            attachment: 'Belt Clip'
        }
    },
    {
        id: 'umpire-002',
        name: 'Kookaburra Umpire Light Meter',
        category: 'umpire-equipment',
        brand: 'Kookaburra',
        price: 3500,
        originalPrice: 4200,
        rating: 4.7,
        reviews: 89,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Light+Meter',
        ],
        description: 'Digital light meter for accurate light measurement during play.',
        features: [
            'Digital Display',
            'Lux Measurement',
            'Battery Operated',
            'Portable Design',
            'Professional Tool'
        ],
        sizes: ['Compact'],
        weight: '150g',
        specifications: {
            type: 'Light Meter',
            measurement: 'Lux (Light Intensity)',
            display: 'Digital LCD',
            power: '9V Battery',
            accuracy: '+/- 3%'
        }
    },
    {
        id: 'umpire-003',
        name: 'SS Umpire Coat - White',
        category: 'umpire-equipment',
        brand: 'SS',
        price: 2800,
        originalPrice: 3500,
        rating: 4.6,
        reviews: 167,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Umpire+Coat',
        ],
        description: 'Professional white umpire coat for match officials.',
        features: [
            'Traditional White Design',
            'Multiple Pockets',
            'Breathable Fabric',
            'Button Closure',
            'Professional Look'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        weight: '450g',
        specifications: {
            type: 'Umpire Coat',
            color: 'White',
            material: 'Cotton Polyester Blend',
            pockets: '4 Pockets',
            closure: 'Button Front'
        }
    },
    {
        id: 'umpire-004',
        name: 'MRF Umpire Hat - Wide Brim',
        category: 'umpire-equipment',
        brand: 'MRF',
        price: 800,
        originalPrice: 1100,
        rating: 4.5,
        reviews: 198,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Umpire+Hat',
        ],
        description: 'Wide-brim cricket umpire hat for sun protection.',
        features: [
            'Wide Brim Design',
            'UV Protection',
            'Breathable Material',
            'Adjustable Size',
            'Professional Grade'
        ],
        sizes: ['Adjustable (56-60cm)'],
        weight: '120g',
        specifications: {
            type: 'Umpire Hat',
            style: 'Wide Brim',
            material: 'Cotton',
            uv_protection: 'UPF 50+',
            adjustment: 'Elastic Sweatband'
        }
    },
    {
        id: 'umpire-005',
        name: 'Gray-Nicolls Umpire Shoes - White',
        category: 'umpire-equipment',
        brand: 'Gray-Nicolls',
        price: 4500,
        originalPrice: 5500,
        rating: 4.7,
        reviews: 123,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Umpire+Shoes',
        ],
        description: 'Professional white umpire shoes with rubber sole.',
        features: [
            'Full White Design',
            'Rubber Sole',
            'Comfortable Fit',
            'Non-Marking',
            'Professional Quality'
        ],
        sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        weight: '400g per shoe',
        specifications: {
            type: 'Umpire Shoes',
            color: 'White',
            sole: 'Full Rubber',
            upper: 'Synthetic Leather',
            style: 'Professional Umpire'
        }
    },
    {
        id: 'umpire-006',
        name: 'Kookaburra Ball Gauge Set',
        category: 'umpire-equipment',
        brand: 'Kookaburra',
        price: 2200,
        originalPrice: 2800,
        rating: 4.6,
        reviews: 145,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Ball+Gauge',
        ],
        description: 'Professional ball gauge for checking ball condition and size.',
        features: [
            'Circular & Weight Gauge',
            'Metal Construction',
            'Precise Measurement',
            'Carry Case',
            'Professional Tool'
        ],
        sizes: ['Standard'],
        weight: '200g',
        specifications: {
            type: 'Ball Gauge',
            measures: 'Circumference & Weight',
            material: 'Metal Alloy',
            accuracy: 'ICC Approved Standard',
            includes: 'Protective Case'
        }
    },
    {
        id: 'umpire-007',
        name: 'SG Umpire Signal Indicators (Set of 6)',
        category: 'umpire-equipment',
        brand: 'SG',
        price: 1500,
        originalPrice: 2000,
        rating: 4.5,
        reviews: 178,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Signal+Cards',
        ],
        description: 'Training signal indicator cards for umpire training.',
        features: [
            'Set of 6 Signals',
            'Laminated Cards',
            'Visual Reference',
            'Pocket Size',
            'Training Tool'
        ],
        sizes: ['A5 Size Cards'],
        weight: '100g (set)',
        specifications: {
            type: 'Signal Indicator Cards',
            quantity: '6 Cards',
            signals: 'All Standard Signals',
            material: 'Laminated Card',
            use: 'Training & Reference'
        }
    },
    {
        id: 'umpire-008',
        name: 'Spartan Umpire Trousers - White',
        category: 'umpire-equipment',
        brand: 'Spartan',
        price: 2000,
        originalPrice: 2600,
        rating: 4.6,
        reviews: 134,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Umpire+Trousers',
        ],
        description: 'Professional white umpire trousers with comfort fit.',
        features: [
            'Pure White Color',
            'Comfortable Fit',
            'Side Pockets',
            'Belt Loops',
            'Professional Grade'
        ],
        sizes: ['30"', '32"', '34"', '36"', '38"', '40"'],
        weight: '350g',
        specifications: {
            type: 'Umpire Trousers',
            color: 'White',
            material: 'Cotton Polyester',
            pockets: '2 Side + 2 Back',
            waist: 'Belt Loops + Button'
        }
    },
    {
        id: 'umpire-009',
        name: 'Gray-Nicolls Complete Umpire Kit',
        category: 'umpire-equipment',
        brand: 'Gray-Nicolls',
        price: 12500,
        originalPrice: 15000,
        rating: 4.8,
        reviews: 89,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Complete+Kit',
        ],
        description: 'Complete professional umpire kit with all essentials.',
        features: [
            'Coat + Trousers + Hat',
            'Counter + Light Meter',
            'Ball Gauge + Shoes',
            'Complete Package',
            'Professional Bundle'
        ],
        sizes: ['Custom Sizing Available'],
        weight: '3.5kg total',
        specifications: {
            type: 'Complete Umpire Kit',
            includes: 'All Essential Equipment',
            quality: 'Professional ICC Standard',
            storage: 'Large Carry Bag',
            value: 'Save 20% vs Individual'
        }
    },
    {
        id: 'umpire-010',
        name: 'CA Plus Umpire Decision Counter - Digital',
        category: 'umpire-equipment',
        brand: 'CA',
        price: 1800,
        originalPrice: 2400,
        rating: 4.7,
        reviews: 112,
        inStock: true,
        images: [
            'https://via.placeholder.com/600x600/1a1a2e/ff6300?text=Digital+Counter',
        ],
        description: 'Digital umpire counter with multiple tracking features.',
        features: [
            'Digital LCD Display',
            'Multi-Function Counter',
            'Overs + Balls + Runs',
            'Memory Function',
            'Professional Tool'
        ],
        sizes: ['Compact'],
        weight: '80g',
        specifications: {
            type: 'Digital Counter',
            display: 'LCD Screen',
            functions: 'Overs, Balls, Runs, Wickets',
            power: 'CR2032 Battery',
            memory: 'Last Count Save'
        }
    },
];

// Helper functions
export const getProductById = (id) => {
    return PRODUCTS.find(p => p.id === id);
};

export const getProductsByCategory = (category) => {
    return PRODUCTS.filter(p => p.category === category);
};

export const getProductsByBrand = (brand) => {
    return PRODUCTS.filter(p => p.brand === brand);
};

export const searchProducts = (query) => {
    const lowerQuery = query.toLowerCase();
    return PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.brand.toLowerCase().includes(lowerQuery)
    );
};

export const filterProducts = (filters) => {
    let filtered = [...PRODUCTS];

    if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.brand && filters.brand.length > 0) {
        filtered = filtered.filter(p => filters.brand.includes(p.brand));
    }

    if (filters.minPrice) {
        filtered = filtered.filter(p => p.price >= filters.minPrice);
    }

    if (filters.maxPrice) {
        filtered = filtered.filter(p => p.price <= filters.maxPrice);
    }

    if (filters.inStock) {
        filtered = filtered.filter(p => p.inStock);
    }

    if (filters.minRating) {
        filtered = filtered.filter(p => p.rating >= filters.minRating);
    }

    return filtered;
};

export const sortProducts = (products, sortBy) => {
    const sorted = [...products];

    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'newest':
            return sorted.reverse();
        default:
            return sorted;
    }
};