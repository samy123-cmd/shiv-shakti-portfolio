'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import MagneticWrapper from './MagneticWrapper';
import HolographicCore from './HolographicCore';

import GlitchText from './GlitchText';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 py-20">
            <div className="max-w-7xl w-full z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-white tracking-tight">
                            <GlitchText text="Shiv Shakti Mishra" />
                        </h1>
                        <div className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide uppercase h-[32px] md:h-[40px]">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Datastage Consultant',
                                        'Senior Data Engineer',
                                        'AI/ML Enthusiast',
                                        'Product Manager',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>

                        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Transforming raw data into actionable insights. <br />
                            7+ years architecting enterprise data solutions.
                        </p>

                        <div className="flex justify-center lg:justify-start gap-6 mb-10">
                            <MagneticWrapper>
                                <a href="https://github.com/unpairedelectron" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 block">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href="https://linkedin.com/in/shivmishra1408" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 block">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href="mailto:pmishra273@gmail.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 block">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </a>
                            </MagneticWrapper>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <MagneticWrapper>
                                <a
                                    href="#projects"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors block text-center"
                                >
                                    View Projects
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors block text-center"
                                >
                                    Download Resume
                                </a>
                            </MagneticWrapper>
                        </div>
                    </motion.div>

                    {/* Right: Holographic Core */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <HolographicCore />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
