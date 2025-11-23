'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import resumeData from '../data/resume.json';

const MetroMap = () => {
    const [selectedJob, setSelectedJob] = useState<number | null>(null);

    return (
        <section id="experience" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold font-heading mb-12 text-center text-white">
                    Experience
                </h2>

                <div className="space-y-6">
                    {resumeData.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card p-6 cursor-pointer transition-all duration-300 ${selectedJob === index ? 'bg-white/10 border-white/30' : 'hover:bg-white/5'
                                }`}
                            onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                    <p className="text-gray-400 font-medium">{job.company}</p>
                                </div>
                                <span className="text-sm text-gray-500 mt-1 md:mt-0 bg-black/30 px-3 py-1 rounded-full border border-white/10">
                                    {job.period}
                                </span>
                            </div>

                            <motion.div
                                initial={false}
                                animate={{ height: selectedJob === index ? 'auto' : 0, opacity: selectedJob === index ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                                        {job.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {job.tech.map((tech, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {selectedJob !== index && (
                                <p className="text-xs text-gray-500 mt-2 text-center md:text-left">Click to expand</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MetroMap;
