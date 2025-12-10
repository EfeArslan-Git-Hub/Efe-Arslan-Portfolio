import React from 'react';
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa';

import SpotlightCard from './SpotlightCard';

const PublicationCard = ({ pub }) => {
    return (
        <SpotlightCard className="flex flex-col justify-between group h-full">
            <div className="p-6 flex flex-col h-full">
                <div>
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded inline-block">
                            {pub.date}
                        </span>
                        <FaBook className="text-gray-400 dark:text-gray-600 text-lg" />
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 relative z-10 transition-colors">
                        {pub.title}
                    </h4>
                    <p className="text-sm text-brand-600 dark:text-brand-500 mb-3 italic relative z-10">
                        {pub.publisher}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed relative z-10">
                        {pub.desc}
                    </p>
                </div>

                <div className="flex justify-between items-end border-t border-gray-200 dark:border-gray-800 pt-4 mt-auto relative z-10">
                    <div className="flex gap-2">
                        {pub.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-950 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {pub.link && pub.link !== "#" && (
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                            aria-label="Read Paper"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>
        </SpotlightCard>
    );
};

export default PublicationCard;
