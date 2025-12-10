
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaCode, FaLayerGroup, FaBook, FaHistory, FaEnvelope } from 'react-icons/fa';

const navItems = [
    { id: 'top', label: 'Home', icon: FaHome },
    { id: 'tech-stack', label: 'Tech Stack', icon: FaCode },
    { id: 'works', label: 'Selected Works', icon: FaLayerGroup },
    { id: 'publications', label: 'Publications', icon: FaBook },
    { id: 'timeline', label: 'Academic Journey', icon: FaHistory },
    { id: 'contact', label: 'Get in Touch', icon: FaEnvelope },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        setIsOpen(false);
        if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed top-6 left-6 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                aria-label="Open Menu"
            >
                <FaBars className="text-xl" />
            </motion.button>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 bottom-0 w-72 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 z-50 p-6 shadow-2xl flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Navigation</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-left text-gray-600 dark:text-gray-400 hover:bg-brand-50 dark:hover:bg-brand-900/10 hover:text-brand-600 dark:hover:text-brand-400 transition-all group font-medium"
                                >
                                    <item.icon className="text-lg group-hover:scale-110 transition-transform" />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>

                        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800 text-xs text-center text-gray-400">
                            Efe Arslan © {new Date().getFullYear()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
