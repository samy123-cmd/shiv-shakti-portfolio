'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * MissionControl – displays live GitHub stats.
 * Will be connected to GitHub API route in next phase.
 */
const MissionControl: React.FC = () => {
    // Placeholder data – replace with API fetch
    const stats = {
        repos: 12,
        contributions: 847,
        streak: 45,
    };

    return (
        <div className="grid grid-cols-3 gap-4 p-6">
            <motion.div
                className="p-6 bg-gray-900 rounded-lg border border-neonCyan text-center"
                whileHover={{ scale: 1.05 }}
            >
                <p className="text-4xl font-bold text-neonCyan">{stats.repos}</p>
                <p className="text-sm text-gray-400 mt-2">Repositories</p>
            </motion.div>
            <motion.div
                className="p-6 bg-gray-900 rounded-lg border border-neonMagenta text-center"
                whileHover={{ scale: 1.05 }}
            >
                <p className="text-4xl font-bold text-neonMagenta">{stats.contributions}</p>
                <p className="text-sm text-gray-400 mt-2">Contributions</p>
            </motion.div>
            <motion.div
                className="p-6 bg-gray-900 rounded-lg border border-neonViolet text-center"
                whileHover={{ scale: 1.05 }}
            >
                <p className="text-4xl font-bold text-neonViolet">{stats.streak}</p>
                <p className="text-sm text-gray-400 mt-2">Day Streak</p>
            </motion.div>
        </div>
    );
};

export default MissionControl;
