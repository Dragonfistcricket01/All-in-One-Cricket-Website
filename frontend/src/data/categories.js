import bat from '../assets/store/cricket-bat.png';
import ball from '../assets/store/cricket-ball.png';
import pad from '../assets/store/pad.png';
import glove from '../assets/store/batting-gloves.png';
import helmet from '../assets/store/helmet.png';
import wk from '../assets/store/wk.png';
import shoe from '../assets/store/shoe.png';
import jersey from '../assets/store/jersey.png';
import trainingWear from '../assets/store/training-wear.png';
import bag from '../assets/store/bag.png';
import stump from '../assets/store/stump.png';
import gear from '../assets/store/protection.png';
import accessories from '../assets/store/trophy.png';
import equipment from '../assets/store/cone.png';
import scorebook from '../assets/store/scoreboard.png';
import cap from '../assets/store/cap.png';
import umpire from '../assets/store/umpire.png';

export const CATEGORIES = [
    {
        id: 'cricket-bats',
        name: 'Cricket Bats',
        icon: bat,
        description: 'Premium bats for all playing styles',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Cricket+Bats'
    },
    {
        id: 'cricket-balls',
        name: 'Cricket Balls',
        icon: ball,
        description: 'Quality balls for every format',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Cricket+Balls'
    },
    {
        id: 'batting-pads',
        name: 'Batting Pads',
        icon: pad,
        description: 'Protective batting pads',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Batting+Pads'
    },
    {
        id: 'batting-gloves',
        name: 'Batting Gloves',
        icon: glove,
        description: 'Comfortable batting gloves',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Batting+Gloves'
    },
    {
        id: 'helmets',
        name: 'Helmets',
        icon: helmet,
        description: 'Safety helmets with grills',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Helmets'
    },
    {
        id: 'wicket-keeping',
        name: 'Wicket Keeping',
        icon: wk,
        description: 'Wicket keeping gloves & pads',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Wicket+Keeping'
    },
    {
        id: 'cricket-shoes',
        name: 'Cricket Shoes',
        icon: shoe,
        description: 'Spikes and rubber sole shoes',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Cricket+Shoes'
    },
    {
        id: 'jerseys',
        name: 'Jerseys',
        icon: jersey,
        description: 'Official team jerseys',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Jerseys'
    },
    {
        id: 'training-wear',
        name: 'Training Wear',
        icon: trainingWear,
        description: 'Practice and training apparel',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Training+Wear'
    },
    {
        id: 'cricket-bags',
        name: 'Cricket Bags',
        icon: bag,
        description: 'Kit bags and backpacks',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Cricket+Bags'
    },
    {
        id: 'stumps-bails',
        name: 'Stumps & Bails',
        icon: stump,
        description: 'Practice and match stumps',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Stumps'
    },
    {
        id: 'protective-gear',
        name: 'Protective Gear',
        icon: gear,
        description: 'Guards and protection',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Protection'
    },
    {
        id: 'accessories',
        name: 'Accessories',
        icon: accessories,
        description: 'Grips, tapes, and more',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Accessories'
    },
    {
        id: 'training-equipment',
        name: 'Training Equipment',
        icon: equipment,
        description: 'Nets, cones, and training aids',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Training'
    },
    {
        id: 'scorebooks',
        name: 'Scorebooks',
        icon: scorebook,
        description: 'Scoring and coaching books',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Scorebooks'
    },
    {
        id: 'cricket-caps',
        name: 'Cricket Caps',
        icon: cap,
        description: 'Caps and hats',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Caps'
    },
    {
        id: 'umpire-equipment',
        name: 'Umpires Equipment',
        icon: umpire,
        description: 'Umpires Accessories',
        image: 'https://via.placeholder.com/400x300/1a1a2e/ff6300?text=Caps'
    }
];

export const getCategoryById = (id) => {
    return CATEGORIES.find(cat => cat.id === id);
};

export const getCategoryName = (id) => {
    const category = getCategoryById(id);
    return category ? category.name : 'Unknown';
};