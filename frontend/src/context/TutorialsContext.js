import React, { createContext, useContext, useState, useEffect } from 'react';

const TutorialsContext = createContext();

export const useTutorials = () => {
    const context = useContext(TutorialsContext);
    if (!context) {
        throw new Error('useTutorials must be used within TutorialsProvider');
    }
    return context;
};

export const TutorialsProvider = ({ children }) => {
    const [completedTutorials, setCompletedTutorials] = useState({});
    const [favoriteTutorials, setFavoriteTutorials] = useState([]);
    const [tutorialProgress, setTutorialProgress] = useState({});
    const [tutorialNotes, setTutorialNotes] = useState({});
    const [bookmarkedSteps, setBookmarkedSteps] = useState({});

    // Load from localStorage on mount
    useEffect(() => {
        const savedCompleted = localStorage.getItem('completedTutorials');
        const savedFavorites = localStorage.getItem('favoriteTutorials');
        const savedProgress = localStorage.getItem('tutorialProgress');
        const savedNotes = localStorage.getItem('tutorialNotes');
        const savedBookmarks = localStorage.getItem('bookmarkedSteps');

        if (savedCompleted) setCompletedTutorials(JSON.parse(savedCompleted));
        if (savedFavorites) setFavoriteTutorials(JSON.parse(savedFavorites));
        if (savedProgress) setTutorialProgress(JSON.parse(savedProgress));
        if (savedNotes) setTutorialNotes(JSON.parse(savedNotes));
        if (savedBookmarks) setBookmarkedSteps(JSON.parse(savedBookmarks));
    }, []);

    // Mark tutorial as completed (TOGGLEABLE)
    const markAsCompleted = (tutorialId) => {
        setCompletedTutorials(prev => {
            const newCompleted = { ...prev };

            if (newCompleted[tutorialId]) {
                delete newCompleted[tutorialId];
            } else {
                newCompleted[tutorialId] = {
                    completedAt: new Date().toISOString(),
                    progress: 100
                };
            }

            localStorage.setItem('completedTutorials', JSON.stringify(newCompleted));
            return newCompleted;
        });
    };

    // Toggle favorite
    const toggleFavorite = (tutorialId) => {
        let updated;
        if (favoriteTutorials.includes(tutorialId)) {
            updated = favoriteTutorials.filter(id => id !== tutorialId);
        } else {
            updated = [...favoriteTutorials, tutorialId];
        }
        setFavoriteTutorials(updated);
        localStorage.setItem('favoriteTutorials', JSON.stringify(updated));
    };

    // Update tutorial progress (0-100)
    const updateProgress = (tutorialId, progress) => {
        const updated = { ...tutorialProgress, [tutorialId]: progress };
        setTutorialProgress(updated);
        localStorage.setItem('tutorialProgress', JSON.stringify(updated));

        // Auto-complete at 95%
        if (progress >= 95 && !completedTutorials[tutorialId]) {
            markAsCompleted(tutorialId);
        }
    };

    // Bookmark a specific step
    // Toggle bookmark for a specific step
    const toggleStepBookmark = (tutorialId, stepNumber) => {
        setBookmarkedSteps(prev => {
            const newBookmarks = { ...prev };
            if (!newBookmarks[tutorialId]) {
                newBookmarks[tutorialId] = [];
            }

            const stepIndex = newBookmarks[tutorialId].indexOf(stepNumber);
            if (stepIndex > -1) {
                // Remove bookmark
                newBookmarks[tutorialId].splice(stepIndex, 1);
                // Clean up empty arrays
                if (newBookmarks[tutorialId].length === 0) {
                    delete newBookmarks[tutorialId];
                }
            } else {
                // Add bookmark
                newBookmarks[tutorialId].push(stepNumber);
            }

            localStorage.setItem('bookmarkedSteps', JSON.stringify(newBookmarks));
            return newBookmarks;
        });
    };

    // Save tutorial notes
    const saveNote = (tutorialId, note) => {
        const updated = { ...tutorialNotes, [tutorialId]: note };
        setTutorialNotes(updated);
        localStorage.setItem('tutorialNotes', JSON.stringify(updated));
    };

    // Get tutorial note
    const getNote = (tutorialId) => {
        return tutorialNotes[tutorialId] || '';
    };

    // Check if tutorial is completed
    const isCompleted = (tutorialId) => {
        return completedTutorials[tutorialId] !== undefined;
    };

    // Check if tutorial is favorite
    const isFavorite = (tutorialId) => {
        return favoriteTutorials.includes(tutorialId);
    };

    // Check if step is bookmarked
    const isStepBookmarked = (tutorialId, stepNumber) => {
        return bookmarkedSteps[tutorialId]?.includes(stepNumber) || false;
    };

    // Get tutorial progress
    const getProgress = (tutorialId) => {
        return tutorialProgress[tutorialId] || 0;
    };

    // Get statistics
    const getStats = () => {
        return {
            totalCompleted: Object.keys(completedTutorials).length,
            totalFavorites: favoriteTutorials.length,
            totalNotes: Object.keys(tutorialNotes).length,
            totalBookmarks: Object.values(bookmarkedSteps).reduce((sum, arr) => sum + arr.length, 0)
        };
    };

    const value = {
        completedTutorials,
        favoriteTutorials,
        tutorialProgress,
        tutorialNotes,
        bookmarkedSteps,
        markAsCompleted,
        toggleFavorite,
        updateProgress,
        toggleStepBookmark,
        saveNote,
        getNote,
        isCompleted,
        isFavorite,
        isStepBookmarked,
        getProgress,
        getStats
    };

    return (
        <TutorialsContext.Provider value={value}>
            {children}
        </TutorialsContext.Provider>
    );
};