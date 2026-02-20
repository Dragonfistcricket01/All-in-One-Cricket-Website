import React, { createContext, useContext, useState, useEffect } from 'react';

const TeamRankingsContext = createContext();

export const useTeamRankings = () => {
    const context = useContext(TeamRankingsContext);
    if (!context) {
        throw new Error('useTeamRankings must be used within TeamRankingsProvider');
    }
    return context;
};

export const TeamRankingsProvider = ({ children }) => {
    const [favoriteTeams, setFavoriteTeams] = useState([]);
    const [comparedTeams, setComparedTeams] = useState([]);
    const [viewHistory, setViewHistory] = useState([]);

    // Load from localStorage on mount
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favoriteTeams');
        const savedComparisons = localStorage.getItem('comparedTeams');
        const savedHistory = localStorage.getItem('teamViewHistory');

        if (savedFavorites) setFavoriteTeams(JSON.parse(savedFavorites));
        if (savedComparisons) setComparedTeams(JSON.parse(savedComparisons));
        if (savedHistory) setViewHistory(JSON.parse(savedHistory));
    }, []);

    // Toggle favorite team
    const toggleFavorite = (teamCountry, format) => {
        setFavoriteTeams(prev => {
            let updated;
            const key = `${teamCountry}-${format}`;

            if (prev.includes(key)) {
                updated = prev.filter(fav => fav !== key);
            } else {
                updated = [...prev, key];
            }

            localStorage.setItem('favoriteTeams', JSON.stringify(updated));
            return updated;
        });
    };

    // Check if team is favorite
    const isFavorite = (teamCountry, format) => {
        const key = `${teamCountry}-${format}`;
        return favoriteTeams.includes(key);
    };

    // Add team to comparison
    const addToComparison = (team, format) => {
        setComparedTeams(prev => {
            // Limit to 4 teams for comparison
            if (prev.length >= 4) {
                alert('You can compare up to 4 teams at once!');
                return prev;
            }

            const key = `${team.country}-${format}`;
            const exists = prev.find(t => t.key === key);

            if (exists) {
                return prev;
            }

            const updated = [...prev, { ...team, format, key }];
            localStorage.setItem('comparedTeams', JSON.stringify(updated));
            return updated;
        });
    };

    // Remove team from comparison
    const removeFromComparison = (teamCountry, format) => {
        setComparedTeams(prev => {
            const key = `${teamCountry}-${format}`;
            const updated = prev.filter(t => t.key !== key);
            localStorage.setItem('comparedTeams', JSON.stringify(updated));
            return updated;
        });
    };

    // Clear all comparisons
    const clearComparisons = () => {
        setComparedTeams([]);
        localStorage.removeItem('comparedTeams');
    };

    // Add to view history
    const addToViewHistory = (team, format) => {
        setViewHistory(prev => {
            const key = `${team.country}-${format}`;
            const newHistory = prev.filter(item => item.key !== key);
            newHistory.unshift({ ...team, format, key, viewedAt: new Date().toISOString() });

            // Keep only last 20 items
            const trimmed = newHistory.slice(0, 20);
            localStorage.setItem('teamViewHistory', JSON.stringify(trimmed));
            return trimmed;
        });
    };

    // Get statistics
    const getStats = () => {
        return {
            totalFavorites: favoriteTeams.length,
            totalCompared: comparedTeams.length,
            totalViewed: viewHistory.length
        };
    };

    const value = {
        favoriteTeams,
        comparedTeams,
        viewHistory,
        toggleFavorite,
        isFavorite,
        addToComparison,
        removeFromComparison,
        clearComparisons,
        addToViewHistory,
        getStats
    };

    return (
        <TeamRankingsContext.Provider value={value}>
            {children}
        </TeamRankingsContext.Provider>
    );
};