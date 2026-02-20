import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within CurrencyProvider');
    }
    return context;
};

// Exchange rates (base: BDT - Bangladeshi Taka)
const EXCHANGE_RATES = {
    BDT: 1,      // Bangladeshi Taka
    USD: 0.0091, // US Dollar
    EUR: 0.0084, // Euro
    GBP: 0.0072, // British Pound
    INR: 0.76    // Indian Rupee
};

const CURRENCY_SYMBOLS = {
    BDT: '৳',
    USD: '$',
    EUR: '€',
    GBP: '£',
    INR: '₹'
};

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState('BDT');

    const convertPrice = (priceInBDT) => {
        const rate = EXCHANGE_RATES[currency];
        const convertedPrice = priceInBDT * rate;
        return convertedPrice.toFixed(2);
    };

    const formatPrice = (priceInBDT) => {
        const converted = convertPrice(priceInBDT);
        const symbol = CURRENCY_SYMBOLS[currency];
        return `${symbol}${converted}`;
    };

    const value = {
        currency,
        setCurrency,
        convertPrice,
        formatPrice,
        currencies: Object.keys(EXCHANGE_RATES),
        symbol: CURRENCY_SYMBOLS[currency]
    };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};