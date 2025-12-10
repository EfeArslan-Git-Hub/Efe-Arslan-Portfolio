
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaMoon, FaSun, FaCog } from 'react-icons/fa';

const themes = [
    {
        name: 'Cyan (Default)',
        color: '#0ea5e9',
        values: {
            50: '240 249 255', 100: '224 242 254', 200: '186 230 253', 300: '125 211 252',
            400: '56 189 248', 500: '14 165 233', 600: '2 132 199', 700: '3 105 161',
            800: '7 89 133', 900: '12 74 110'
        }
    },
    {
        name: 'Purple (Cyberpunk)',
        color: '#a855f7',
        values: {
            50: '250 245 255', 100: '243 232 255', 200: '233 213 255', 300: '216 180 254',
            400: '192 132 252', 500: '168 85 247', 600: '147 51 234', 700: '126 34 206',
            800: '107 33 168', 900: '88 28 135'
        }
    },
    {
        name: 'Emerald (Matrix)',
        color: '#10b981',
        values: {
            50: '236 253 245', 100: '209 250 229', 200: '167 243 208', 300: '110 231 183',
            400: '52 211 153', 500: '16 185 129', 600: '5 150 105', 700: '4 120 87',
            800: '6 95 70', 900: '6 78 59'
        }
    },
    {
        name: 'Orange (Sunset)',
        color: '#f97316',
        values: {
            50: '255 247 237', 100: '255 237 213', 200: '254 215 170', 300: '253 186 116',
            400: '251 146 60', 500: '249 115 22', 600: '234 88 12', 700: '194 65 12',
            800: '154 52 18', 900: '124 45 18'
        }
    }
];

const ThemeSettings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check system preference or localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        } else {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    const setTheme = (theme) => {
        const root = document.documentElement;
        Object.entries(theme.values).forEach(([key, value]) => {
            root.style.setProperty(`--color-brand-${key}`, value);
        });
    };

    return (
        <div className="fixed top-6 right-6 z-50 flex gap-4">
            {/* Dark Mode Toggle */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 rounded-full text-gray-800 dark:text-brand-400 hover:text-brand-500 hover:border-brand-500 shadow-lg transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <FaMoon /> : <FaSun className="text-orange-500" />}
            </motion.button>

            {/* Color Palette Toggle */}
            <div className="relative">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 rounded-full text-gray-800 dark:text-brand-400 hover:text-brand-500 hover:border-brand-500 shadow-lg transition-colors"
                    aria-label="Change Accent Color"
                >
                    <FaPalette />
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -10 }}
                            className="absolute top-14 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-3 rounded-xl shadow-xl flex flex-col gap-3 min-w-[150px]"
                        >
                            {themes.map((theme) => (
                                <button
                                    key={theme.name}
                                    onClick={() => {
                                        setTheme(theme);
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full group"
                                >
                                    <span
                                        className="w-4 h-4 rounded-full shadow-sm ring-1 ring-gray-200 dark:ring-0"
                                        style={{ backgroundColor: theme.color }}
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white font-medium">
                                        {theme.name.split(' ')[0]}
                                    </span>
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ThemeSettings;
