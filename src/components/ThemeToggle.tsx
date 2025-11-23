'use client';

import React, { useEffect } from 'react';
import { useUIStore } from '../lib/store';

/**
 * ThemeToggle – switches between light/dark modes.
 * Persists choice to localStorage and toggles the 'dark' class on <html>.
 */
const ThemeToggle: React.FC = () => {
    const theme = useUIStore((s) => s.theme);
    const toggleTheme = useUIStore((s) => s.toggleTheme);

    useEffect(() => {
        // Apply theme class to document
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Persist to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-neonCyan text-darkBg rounded-md font-semibold hover:bg-neonViolet transition-colors"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

export default ThemeToggle;
