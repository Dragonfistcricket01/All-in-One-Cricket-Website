import React, { createContext, useContext, useState, useEffect } from 'react';

const LessonsContext = createContext();

export const useLessons = () => {
    const context = useContext(LessonsContext);
    if (!context) {
        throw new Error('useLessons must be used within LessonsProvider');
    }
    return context;
};

export const LessonsProvider = ({ children }) => {
    const [completedLessons, setCompletedLessons] = useState({});
    const [favoriteLessons, setFavoriteLessons] = useState([]);
    const [lessonProgress, setLessonProgress] = useState({});
    const [lessonNotes, setLessonNotes] = useState({});

    // Load from localStorage on mount
    useEffect(() => {
        const savedCompleted = localStorage.getItem('completedLessons');
        const savedFavorites = localStorage.getItem('favoriteLessons');
        const savedProgress = localStorage.getItem('lessonProgress');
        const savedNotes = localStorage.getItem('lessonNotes');

        if (savedCompleted) setCompletedLessons(JSON.parse(savedCompleted));
        if (savedFavorites) setFavoriteLessons(JSON.parse(savedFavorites));
        if (savedProgress) setLessonProgress(JSON.parse(savedProgress));
        if (savedNotes) setLessonNotes(JSON.parse(savedNotes));
    }, []);

    // Mark lesson as completed (TOGGLEABLE)
    const markAsCompleted = (lessonId) => {
        setCompletedLessons(prev => {
            const newCompleted = { ...prev };

            // TOGGLE: If already completed, remove it; otherwise add it
            if (newCompleted[lessonId]) {
                delete newCompleted[lessonId];
            } else {
                newCompleted[lessonId] = {
                    completedAt: new Date().toISOString(),
                    progress: 100
                };
            }

            localStorage.setItem('completedLessons', JSON.stringify(newCompleted));
            return newCompleted;
        });
    };

    // Toggle favorite
    const toggleFavorite = (lessonId) => {
        let updated;
        if (favoriteLessons.includes(lessonId)) {
            updated = favoriteLessons.filter(id => id !== lessonId);
        } else {
            updated = [...favoriteLessons, lessonId];
        }
        setFavoriteLessons(updated);
        localStorage.setItem('favoriteLessons', JSON.stringify(updated));
    };

    // Update lesson progress (0-100)
    const updateProgress = (lessonId, progress) => {
        const updated = { ...lessonProgress, [lessonId]: progress };
        setLessonProgress(updated);
        localStorage.setItem('lessonProgress', JSON.stringify(updated));

        if (progress >= 95 && !completedLessons[lessonId]) {
            markAsCompleted(lessonId);
        }
    };

    // Save lesson notes
    const saveNote = (lessonId, note) => {
        const updated = { ...lessonNotes, [lessonId]: note };
        setLessonNotes(updated);
        localStorage.setItem('lessonNotes', JSON.stringify(updated));
    };

    // Get lesson note
    const getNote = (lessonId) => {
        return lessonNotes[lessonId] || '';
    };

    const isCompleted = (lessonId) => {
        return completedLessons[lessonId] !== undefined;
    };

    // Check if lesson is favorite
    const isFavorite = (lessonId) => {
        return favoriteLessons.includes(lessonId);
    };

    // Get lesson progress
    const getProgress = (lessonId) => {
        return lessonProgress[lessonId] || 0;
    };

    const getStats = () => {
        return {
            totalCompleted: Object.keys(completedLessons).length,
            totalFavorites: favoriteLessons.length,
            totalNotes: Object.keys(lessonNotes).length
        };
    };

    const value = {
        completedLessons,
        favoriteLessons,
        lessonProgress,
        lessonNotes,
        markAsCompleted,
        toggleFavorite,
        updateProgress,
        saveNote,
        getNote,
        isCompleted,
        isFavorite,
        getProgress,
        getStats
    };

    return (
        <LessonsContext.Provider value={value}>
            {children}
        </LessonsContext.Provider>
    );
};