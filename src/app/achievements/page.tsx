'use client';

import { motion } from 'framer-motion';
import resumeData from '../../data/resume.json';

export default function AchievementsPage() {
    return (
        <div className="min-h-screen bg-lightBg dark:bg-darkBg p-8">
            <h1 className="text-4xl font-bold text-neonCyan mb-8">Achievements Unlocked</h1>

            {/* Certifications */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-neonMagenta mb-6">Certifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {resumeData.certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gray-900 border-2 border-neonViolet p-4 rounded-lg text-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="text-4xl mb-2">🏆</div>
                            <p className="text-neonCyan text-sm font-semibold">{cert}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section>
                <h2 className="text-2xl font-bold text-neonMagenta mb-6">Education</h2>
                {resumeData.education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-gray-900 border border-neonCyan p-6 rounded-lg mb-4"
                        whileHover={{ boxShadow: '0 0 20px #00ffff' }}
                    >
                        <h3 className="text-xl font-bold text-neonCyan">{edu.degree}</h3>
                        <p className="text-gray-400">{edu.institution}</p>
                        <p className="text-neonViolet">Graduated: {edu.year}</p>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
