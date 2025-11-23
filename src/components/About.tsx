import React from 'react';
import { motion } from 'framer-motion';
import Doodle from './Doodle';
import SpotlightCard from './SpotlightCard';
import GlitchText from './GlitchText';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 relative overflow-hidden">
            <Doodle type="circle-grid" className="top-10 left-10 opacity-20" />
            <Doodle type="squiggle" className="bottom-10 right-10 opacity-20 rotate-45" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <SpotlightCard className="p-8 md:p-12 border-l-4 border-blue-500">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold font-heading mb-6 text-white flex items-center gap-3">
                                    <span className="text-blue-500 text-xl font-mono">&gt;</span>
                                    <GlitchText text="SYSTEM IDENTITY" />
                                </h2>

                                <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                                    <p>
                                        Operating at the intersection of <span className="text-white font-medium">Big Data</span> and <span className="text-white font-medium">Enterprise Intelligence</span>.
                                        I architect scalable data pipelines that transform raw chaos into structured logic.
                                    </p>
                                    <p>
                                        With over <span className="text-blue-400 font-mono">7+ years</span> of uptime in the industry, I specialize in building high-performance ETL frameworks
                                        and cloud-native solutions. My mission is to optimize data flow and unlock actionable insights for complex ecosystems.
                                    </p>
                                </div>

                                {/* Status Indicators */}
                                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-white/5 p-3 rounded border border-white/10">
                                        <div className="text-xs text-gray-500 uppercase font-mono mb-1">Status</div>
                                        <div className="text-green-400 font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                            ONLINE
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded border border-white/10">
                                        <div className="text-xs text-gray-500 uppercase font-mono mb-1">Location</div>
                                        <div className="text-white font-bold">Pune, IN</div>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded border border-white/10">
                                        <div className="text-xs text-gray-500 uppercase font-mono mb-1">Experience</div>
                                        <div className="text-blue-400 font-bold">Lvl. 7+</div>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded border border-white/10">
                                        <div className="text-xs text-gray-500 uppercase font-mono mb-1">Focus</div>
                                        <div className="text-purple-400 font-bold">Data Eng.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
