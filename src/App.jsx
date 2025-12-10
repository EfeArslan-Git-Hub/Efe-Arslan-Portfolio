import React from 'react';
import BentoGrid from './components/BentoGrid';
import ProjectCard from './components/ProjectCard';
import PublicationCard from './components/PublicationCard';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import ThemeSettings from './components/ThemeSettings';
import { profile, publications } from './data/portfolio';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 max-w-7xl mx-auto transition-colors duration-300 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <ThemeSettings />
      {/* Header Profile Section */}
      <header className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.avatar && (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded-full border-4 border-gray-200 dark:border-gray-800 shadow-xl mb-6 object-cover"
            />
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 mb-4">
            {profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-brand-400 font-medium mb-4">
            {profile.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg leading-relaxed mb-8">
            {profile.bio}
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex gap-6">
              {profile.social.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-white hover:scale-110 transition-all text-2xl"
                  aria-label={item.label}
                >
                  <item.icon />
                </a>
              ))}
            </div>

            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-brand-50/50 dark:bg-white/5 border border-brand-200 dark:border-brand-500/50 backdrop-blur-sm hover:bg-brand-100 dark:hover:bg-brand-500/10 hover:border-brand-400 dark:hover:border-brand-400 transition-all text-brand-600 dark:text-brand-400 font-medium group"
              >
                <FiEye className="group-hover:scale-110 transition-transform" />
                <span>View CV</span>
              </a>
            )}
          </div>
        </motion.div>
      </header>

      <main>
        <TechStack />

        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Selected Works</h3>
          <div className="h-[1px] bg-gray-200 dark:bg-gray-800 flex-1"></div>
        </div>
        <BentoGrid />

        {/* Publications Section */}
        {publications.length > 0 && (
          <div className="mt-24 mb-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Publications & Research</h3>
              <div className="h-[1px] bg-gray-200 dark:bg-gray-800 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publications.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        )}

        <Timeline />
      </main>

      <footer className="mt-24 pb-12 text-center">
        <div className="flex justify-center gap-6 mb-4">
          {profile.social.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-400 transition-colors text-xl"
              aria-label={item.label}
            >
              <item.icon />
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
