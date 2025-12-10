
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { FaGraduationCap } from 'react-icons/fa';

const Timeline = () => {
    return (
        <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
                <h3 className="text-2xl font-bold text-white">Academic Journey</h3>
                <div className="h-[1px] bg-gray-800 flex-1"></div>
            </div>

            <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-[11px] top-1 bg-gray-950 p-1 border border-brand-500 rounded-full text-brand-500 shadow-[0_0_12px_rgba(14,165,233,0.4)]">
                            <FaGraduationCap className="text-sm" />
                        </span>

                        {/* Content */}
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-baseline mb-2">
                            <h4 className="text-xl font-bold text-gray-200">
                                {edu.school}
                            </h4>
                            <span className="text-sm font-semibold text-brand-400 bg-brand-900/10 px-2 py-0.5 rounded border border-brand-500/20">
                                {edu.date}
                            </span>
                        </div>

                        <p className="text-lg text-gray-400 font-medium mb-2">
                            {edu.degree}
                        </p>
                        <p className="text-gray-500 leading-relaxed text-sm max-w-2xl">
                            {edu.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
