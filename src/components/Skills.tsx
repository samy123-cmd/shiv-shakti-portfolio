'use client';

import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../data/resume.json';
import Doodle from './Doodle';
import SpotlightCard from './SpotlightCard';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 relative overflow-hidden">
            <Doodle type="cross" className="top-20 right-20 opacity-20 scale-150" />
            <Doodle type="dots" className="bottom-20 left-20 opacity-20" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-3xl font-bold font-heading mb-12 text-center text-white">
                    Technical Skills
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumeData.skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="p-6 h-full hover:bg-white/5 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
                                    {skillGroup.category}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <span key={i} className="text-sm px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
