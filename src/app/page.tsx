'use client';

import React from 'react';
import ParticlesContainer from '../components/ParticlesContainer';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import MetroMap from '../components/MetroMap';
import ProjectGrid from '../components/ProjectGrid';
import Contact from '../components/Contact';
import CommandPalette from '../components/CommandPalette';
import IntroLoader from '../components/IntroLoader';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <IntroLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CommandPalette />
          <ParticlesContainer />

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <About />
            <MetroMap />
            <Skills />
            <ProjectGrid />
            <Contact />

            {/* Footer */}
            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/20 backdrop-blur-sm">
              <p>© {new Date().getFullYear()} Shiv Shakti Mishra. All rights reserved.</p>
              <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
            </footer>
          </motion.div>
        </>
      )}
    </main>
  );
}
