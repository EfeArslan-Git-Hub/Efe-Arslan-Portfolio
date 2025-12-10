
import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa';

const PublicationCard = ({ pub }) => {
    return (
        <motion.div
            whileHover={{ y: -3 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-brand-500/30 transition-all flex flex-col justify-between"
        >
            <div>
                <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold text-gray-400 bg-gray-800 px-2 py-1 rounded inline-block">
                        {pub.date}
                    </span>
                    <FaBook className="text-gray-600 text-lg" />
                </div>

                <h4 className="text-lg font-bold text-gray-200 mb-1 group-hover:text-brand-400">
                    {pub.title}
                </h4>
                <p className="text-sm text-brand-500 mb-3 italic">
                    {pub.publisher}
                </p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {pub.desc}
                </p>
            </div>

            <div className="flex justify-between items-end border-t border-gray-800 pt-4 mt-auto">
                <div className="flex gap-2">
                    {pub.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 bg-gray-950 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                {pub.link && pub.link !== "#" && (
                    <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-400 transition-colors"
                        aria-label="Read Paper"
                    >
                        <FaExternalLinkAlt />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default PublicationCard;
