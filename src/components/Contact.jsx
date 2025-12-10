
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCopy, FaCheck } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="mb-24 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-500/5 dark:bg-brand-500/10 border border-brand-500/10 rounded-2xl p-12 relative overflow-hidden"
            >
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Let's Build Something Impactful
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                        I specialize in bridging the gap between <span className="text-emerald-500 font-semibold">complex AI research</span> and <span className="text-blue-500 font-semibold">scalable software architectures</span>.
                        Whether you have a challenging project in mind or just want to discuss the future of tech, I'm ready to turn your vision into reality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={`mailto:${profile.email}`}
                            className="flex items-center gap-2 px-8 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-brand-500/25"
                        >
                            <FaPaperPlane />
                            <span>Say Hello</span>
                        </a>

                        <button
                            onClick={handleCopyEmail}
                            className="flex items-center gap-2 px-8 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 text-gray-700 dark:text-gray-300 font-medium transition-all hover:scale-105 group"
                        >
                            {copied ? <FaCheck className="text-green-500" /> : <FaCopy className="group-hover:text-brand-500 transition-colors" />}
                            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
