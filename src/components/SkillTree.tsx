'use client';

import React from 'react';
import { useUIStore } from '../lib/store';
import { motion } from 'framer-motion';
import resumeData from '../data/resume.json';

/**
 * SkillTree visualises skills as nodes in a galaxy‑style map.
 * Each node shows a skill category; clicking expands a modal with examples.
 */
const SkillTree: React.FC = () => {
    const skills = resumeData.skills;

    return (
        <div className="relative w-full h-[600px] bg-darkBg p-4">
            {skills.map((cat, idx) => (
                <motion.div
                    key={cat.category}
                    className="absolute cursor-pointer text-neonCyan"
                    style={{
                        // simple radial placement – in real app replace with force‑graph layout
                        top: `${20 + idx * 15}%`,
                        left: `${20 + idx * 15}%`,
                    }}
                    whileHover={{ scale: 1.2, filter: 'brightness(1.5)' }}
                    onClick={() => alert(`${cat.category}: ${cat.items.join(', ')}`)}
                >
                    {cat.category}
                </motion.div>
            ))}
        </div>
    );
};

export default SkillTree;
