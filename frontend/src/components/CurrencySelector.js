import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import './CurrencySelector.css';

const CurrencySelector = () => {
    const { currency, setCurrency, currencies } = useCurrency();

    const currencyNames = {
        BDT: '🇧🇩 Taka (৳)',
        USD: '🇺🇸 Dollar ($)',
        EUR: '🇪🇺 Euro (€)',
        GBP: '🇬🇧 Pound (£)',
        INR: '🇮🇳 Rupee (₹)'
    };

    return (
        <div className="currency-selector">
            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="currency-select"
            >
                {currencies.map(curr => (
                    <option key={curr} value={curr}>
                        {currencyNames[curr]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;