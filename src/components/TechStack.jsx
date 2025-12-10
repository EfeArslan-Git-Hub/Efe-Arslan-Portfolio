
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const TechStack = () => {
    return (
        <section className="mb-16">
            <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider text-sm">
                Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-xl hover:border-brand-500/30 transition-all cursor-default group shadow-sm dark:shadow-none"
                    >
                        <skill.icon
                            className="text-2xl transition-colors group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.3)]"
                            style={{ color: skill.color }} // Inline style for brand colors
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-black dark:group-hover:text-white">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
