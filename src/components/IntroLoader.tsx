'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
    onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds total load time
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, duration + 500); // Slight delay after 100% before finishing

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Glitchy Logo/Text Area */}
            <div className="mb-8 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold font-heading tracking-tighter"
                >
                    <span className="text-blue-500">&lt;</span>
                    SYSTEM
                    <span className="text-purple-500">/&gt;</span>
                </motion.div>
                <div className="absolute inset-0 bg-black/50 animate-pulse mix-blend-overlay"></div>
            </div>

            {/* Counter */}
            <div className="flex items-end gap-2 font-mono">
                <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {Math.floor(count)}
                </span>
                <span className="text-2xl md:text-4xl text-gray-500 mb-2">%</span>
            </div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-gray-800 mt-8 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${count}%` }}
                />
            </div>

            {/* Status Text */}
            <div className="mt-4 font-mono text-xs text-gray-500 uppercase tracking-widest">
                {count < 30 && "Initializing Core..."}
                {count >= 30 && count < 70 && "Loading Neural Networks..."}
                {count >= 70 && count < 100 && "Decrypting Portfolio Data..."}
                {count === 100 && "Access Granted"}
            </div>
        </motion.div>
    );
};

export default IntroLoader;
