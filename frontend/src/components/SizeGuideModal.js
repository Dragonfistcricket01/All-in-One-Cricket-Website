import React from 'react';
import './SizeGuideModal.css';

const SizeGuideModal = ({ isOpen, onClose, category }) => {
    if (!isOpen) return null;

    const sizeGuides = {
        helmets: {
            title: 'Helmet Size Guide',
            measurements: [
                { size: 'Small', headCircumference: '52-54 cm', ageRange: '8-12 years' },
                { size: 'Medium', headCircumference: '55-57 cm', ageRange: '13-16 years' },
                { size: 'Large', headCircumference: '58-60 cm', ageRange: 'Adult' },
                { size: 'X-Large', headCircumference: '61-63 cm', ageRange: 'Adult' }
            ],
            howToMeasure: 'Measure around the widest part of your head, about 1 inch above your eyebrows.',
            image: '👤'
        },
        jerseys: {
            title: 'Jersey Size Guide',
            measurements: [
                { size: 'S', chest: '36-38"', length: '27"', shoulder: '16"' },
                { size: 'M', chest: '38-40"', length: '28"', shoulder: '17"' },
                { size: 'L', chest: '40-42"', length: '29"', shoulder: '18"' },
                { size: 'XL', chest: '42-44"', length: '30"', shoulder: '19"' },
                { size: 'XXL', chest: '44-46"', length: '31"', shoulder: '20"' }
            ],
            howToMeasure: 'Measure around the fullest part of your chest, keeping the tape horizontal.',
            image: '👕'
        },
        'batting-gloves': {
            title: 'Batting Gloves Size Guide',
            measurements: [
                { size: 'Small', handLength: '6.5-7"', ageRange: 'Youth' },
                { size: 'Medium', handLength: '7-7.5"', ageRange: 'Teen' },
                { size: 'Large', handLength: '7.5-8"', ageRange: 'Adult' },
                { size: 'X-Large', handLength: '8-8.5"', ageRange: 'Adult' }
            ],
            howToMeasure: 'Measure from the base of your palm to the tip of your middle finger.',
            image: '🧤'
        },
        pads: {
            title: 'Batting Pads Size Guide',
            measurements: [
                { size: 'Youth', height: '4\'0"-4\'6"', legLength: '14-16"' },
                { size: 'Junior', height: '4\'6"-5\'0"', legLength: '16-18"' },
                { size: 'Harrow', height: '5\'0"-5\'6"', legLength: '18-20"' },
                { size: 'Men', height: '5\'6"+', legLength: '20-22"' }
            ],
            howToMeasure: 'Measure from the center of your kneecap to the ground while standing.',
            image: '🦵'
        },
        default: {
            title: 'Size Guide',
            measurements: [
                { size: 'Small', description: 'For smaller builds' },
                { size: 'Medium', description: 'For average builds' },
                { size: 'Large', description: 'For larger builds' },
                { size: 'X-Large', description: 'For extra large builds' }
            ],
            howToMeasure: 'Please refer to product-specific measurements or contact support.',
            image: '📏'
        }
    };

    const guide = sizeGuides[category] || sizeGuides.default;

    return (
        <div className="size-guide-overlay" onClick={onClose}>
            <div className="size-guide-modal" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="size-guide-header">
                    <div className="size-guide-title">
                        <span className="size-guide-icon">{guide.image}</span>
                        <h2>{guide.title}</h2>
                    </div>
                    <button className="size-guide-close" onClick={onClose}>
                        <i className="ri-close-line"></i>
                    </button>
                </div>

                {/* Content */}
                <div className="size-guide-content">
                    {/* How to Measure */}
                    <div className="how-to-measure">
                        <h3>
                            <i className="ri-ruler-line"></i>
                            How to Measure
                        </h3>
                        <p>{guide.howToMeasure}</p>
                    </div>

                    {/* Size Chart */}
                    <div className="size-chart">
                        <h3>
                            <i className="ri-table-line"></i>
                            Size Chart
                        </h3>
                        <div className="size-table-wrapper">
                            <table className="size-table">
                                <thead>
                                    <tr>
                                        {Object.keys(guide.measurements[0]).map((key, index) => (
                                            <th key={index}>
                                                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {guide.measurements.map((measurement, index) => (
                                        <tr key={index}>
                                            {Object.values(measurement).map((value, idx) => (
                                                <td key={idx}>{value}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Tips */}
                    <div className="size-tips">
                        <h3>
                            <i className="ri-lightbulb-line"></i>
                            Pro Tips
                        </h3>
                        <ul>
                            <li>If you're between sizes, we recommend sizing up for comfort</li>
                            <li>All measurements are approximate and may vary slightly</li>
                            <li>For best results, measure while wearing similar clothing</li>
                            <li>Contact our support team if you need help choosing a size</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SizeGuideModal;