
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging classes
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

import SpotlightCard from './SpotlightCard';

const ProjectCard = ({ project }) => {
    return (
        <SpotlightCard
            className={cn(
                "flex flex-col justify-between group h-full",
                project.span // Apply span classes from data
            )}
        >
            <div className="p-6 flex flex-col h-full justify-between">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider bg-brand-900/30 px-2 py-1 rounded inline-block">
                            {project.category}
                        </span>
                        <div className="flex gap-3 text-gray-400 z-10 relative">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors text-xl"
                                    aria-label="GitHub Repo"
                                >
                                    <FaGithub />
                                </a>
                            )}
                            {project.link && project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors text-xl"
                                    aria-label="Live Demo"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors relative z-10">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                        {project.desc}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded-md border border-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </SpotlightCard>
    );
};

export default ProjectCard;
