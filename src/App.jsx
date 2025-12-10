
import React from 'react';
import BentoGrid from './components/BentoGrid';
import ProjectCard from './components/ProjectCard';
import PublicationCard from './components/PublicationCard';
import { profile, publications } from './data/portfolio';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 max-w-7xl mx-auto">
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
              className="w-32 h-32 rounded-full border-4 border-gray-800 shadow-xl mb-6 object-cover"
            />
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4">
            {profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-brand-400 font-medium mb-4">
            {profile.title}
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-8">
            {profile.bio}
          </p>

          <div className="flex gap-6">
            {profile.social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all text-2xl"
                aria-label={item.label}
              >
                <item.icon />
              </a>
            ))}
          </div>
        </motion.div>
      </header>

      <main>
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-white">Selected Works</h3>
          <div className="h-[1px] bg-gray-800 flex-1"></div>
        </div>
        <BentoGrid />

        {/* Publications Section */}
        {publications.length > 0 && (
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-white">Publications & Research</h3>
              <div className="h-[1px] bg-gray-800 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publications.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-24 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
