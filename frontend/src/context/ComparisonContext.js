import React, { createContext, useState, useContext, useEffect } from 'react';

const ComparisonContext = createContext();

export const useComparison = () => {
    const context = useContext(ComparisonContext);
    if (!context) {
        throw new Error('useComparison must be used within ComparisonProvider');
    }
    return context;
};

export const ComparisonProvider = ({ children }) => {
    const [compareList, setCompareList] = useState([]);

    // Load comparison list from localStorage
    useEffect(() => {
        const savedComparison = localStorage.getItem('cricketComparison');
        if (savedComparison) {
            setCompareList(JSON.parse(savedComparison));
        }
    }, []);

    // Save comparison list to localStorage
    useEffect(() => {
        localStorage.setItem('cricketComparison', JSON.stringify(compareList));
    }, [compareList]);

    const addToCompare = (product) => {
        if (compareList.length >= 4) {
            alert('You can only compare up to 4 products at a time');
            return;
        }

        if (compareList.find(item => item.id === product.id)) {
            return; // Already in comparison
        }

        setCompareList(prev => [...prev, product]);
    };

    const removeFromCompare = (productId) => {
        setCompareList(prev => prev.filter(item => item.id !== productId));
    };

    const clearComparison = () => {
        setCompareList([]);
    };

    const isInComparison = (productId) => {
        return compareList.some(item => item.id === productId);
    };

    return (
        <ComparisonContext.Provider value={{
            compareList,
            addToCompare,
            removeFromCompare,
            clearComparison,
            isInComparison
        }}>
            {children}
        </ComparisonContext.Provider>
    );
};