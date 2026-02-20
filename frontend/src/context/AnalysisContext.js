import React, { createContext, useContext, useState, useEffect } from 'react';

const AnalysisContext = createContext();

export const useAnalysis = () => {
    const context = useContext(AnalysisContext);
    if (!context) {
        throw new Error('useAnalysis must be used within AnalysisProvider');
    }
    return context;
};

export const AnalysisProvider = ({ children }) => {
    const [completedAnalysis, setCompletedAnalysis] = useState({});
    const [favoriteAnalysis, setFavoriteAnalysis] = useState([]);
    const [analysisNotes, setAnalysisNotes] = useState({});
    const [bookmarkedMoments, setBookmarkedMoments] = useState({});
    const [watchHistory, setWatchHistory] = useState([]);

    // Load from localStorage on mount
    useEffect(() => {
        const savedCompleted = localStorage.getItem('completedAnalysis');
        const savedFavorites = localStorage.getItem('favoriteAnalysis');
        const savedNotes = localStorage.getItem('analysisNotes');
        const savedBookmarks = localStorage.getItem('bookmarkedMoments');
        const savedHistory = localStorage.getItem('analysisWatchHistory');

        if (savedCompleted) setCompletedAnalysis(JSON.parse(savedCompleted));
        if (savedFavorites) setFavoriteAnalysis(JSON.parse(savedFavorites));
        if (savedNotes) setAnalysisNotes(JSON.parse(savedNotes));
        if (savedBookmarks) setBookmarkedMoments(JSON.parse(savedBookmarks));
        if (savedHistory) setWatchHistory(JSON.parse(savedHistory));
    }, []);

    // Mark analysis as completed (TOGGLEABLE)
    const markAsCompleted = (analysisId) => {
        setCompletedAnalysis(prev => {
            const newCompleted = { ...prev };

            if (newCompleted[analysisId]) {
                delete newCompleted[analysisId];
            } else {
                newCompleted[analysisId] = {
                    completedAt: new Date().toISOString()
                };
            }

            localStorage.setItem('completedAnalysis', JSON.stringify(newCompleted));
            return newCompleted;
        });
    };

    // Toggle favorite
    const toggleFavorite = (analysisId) => {
        let updated;
        if (favoriteAnalysis.includes(analysisId)) {
            updated = favoriteAnalysis.filter(id => id !== analysisId);
        } else {
            updated = [...favoriteAnalysis, analysisId];
        }
        setFavoriteAnalysis(updated);
        localStorage.setItem('favoriteAnalysis', JSON.stringify(updated));
    };

    // Bookmark a specific moment
    const toggleMomentBookmark = (analysisId, momentTime) => {
        setBookmarkedMoments(prev => {
            const newBookmarks = { ...prev };
            if (!newBookmarks[analysisId]) {
                newBookmarks[analysisId] = [];
            }

            const momentIndex = newBookmarks[analysisId].findIndex(m => m === momentTime);
            if (momentIndex > -1) {
                newBookmarks[analysisId].splice(momentIndex, 1);
                if (newBookmarks[analysisId].length === 0) {
                    delete newBookmarks[analysisId];
                }
            } else {
                newBookmarks[analysisId].push(momentTime);
            }

            localStorage.setItem('bookmarkedMoments', JSON.stringify(newBookmarks));
            return newBookmarks;
        });
    };

    // Add to watch history
    const addToWatchHistory = (analysisId, analysisTitle) => {
        setWatchHistory(prev => {
            const newHistory = prev.filter(item => item.id !== analysisId);
            newHistory.unshift({
                id: analysisId,
                title: analysisTitle,
                watchedAt: new Date().toISOString()
            });

            // Keep only last 50 items
            const trimmedHistory = newHistory.slice(0, 50);
            localStorage.setItem('analysisWatchHistory', JSON.stringify(trimmedHistory));
            return trimmedHistory;
        });
    };

    // Save analysis notes
    const saveNote = (analysisId, note) => {
        const updated = { ...analysisNotes, [analysisId]: note };
        setAnalysisNotes(updated);
        localStorage.setItem('analysisNotes', JSON.stringify(updated));
    };

    // Get analysis note
    const getNote = (analysisId) => {
        return analysisNotes[analysisId] || '';
    };

    // Check if analysis is completed
    const isCompleted = (analysisId) => {
        return completedAnalysis[analysisId] !== undefined;
    };

    // Check if analysis is favorite
    const isFavorite = (analysisId) => {
        return favoriteAnalysis.includes(analysisId);
    };

    // Check if moment is bookmarked
    const isMomentBookmarked = (analysisId, momentTime) => {
        return bookmarkedMoments[analysisId]?.includes(momentTime) || false;
    };

    // Get statistics
    const getStats = () => {
        return {
            totalCompleted: Object.keys(completedAnalysis).length,
            totalFavorites: favoriteAnalysis.length,
            totalNotes: Object.keys(analysisNotes).length,
            totalBookmarks: Object.values(bookmarkedMoments).reduce((sum, arr) => sum + arr.length, 0),
            totalWatched: watchHistory.length
        };
    };

    const value = {
        completedAnalysis,
        favoriteAnalysis,
        analysisNotes,
        bookmarkedMoments,
        watchHistory,
        markAsCompleted,
        toggleFavorite,
        toggleMomentBookmark,
        addToWatchHistory,
        saveNote,
        getNote,
        isCompleted,
        isFavorite,
        isMomentBookmarked,
        getStats
    };

    return (
        <AnalysisContext.Provider value={value}>
            {children}
        </AnalysisContext.Provider>
    );
};