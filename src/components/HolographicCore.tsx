'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Brain, Layers, Cpu, Network } from 'lucide-react';

const HolographicCore = () => {
    const icons = [
        { Icon: Terminal, color: "text-green-400", delay: 0 },
        { Icon: Database, color: "text-blue-400", delay: 1 },
        { Icon: Brain, color: "text-purple-400", delay: 2 },
        { Icon: Layers, color: "text-yellow-400", delay: 3 },
        { Icon: Cpu, color: "text-red-400", delay: 4 },
        { Icon: Network, color: "text-cyan-400", delay: 5 },
    ];

    return (
        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto flex items-center justify-center">
            {/* 1. Outer Data Ring (Slow Rotate) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-blue-500/20"
            />

            {/* 2. Middle Tech Ring (Counter Rotate) */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-dotted border-purple-500/30"
            />

            {/* 3. Inner Fast Ring */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-16 rounded-full border border-cyan-400/40"
            />

            {/* 4. The Core (Pulsing Sphere) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 blur-xl opacity-60"
            />

            {/* 5. Solid Core Representation */}
            <div className="relative w-24 h-24 bg-black rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md z-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-cyan-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </motion.div>
            </div>

            {/* 6. Orbiting Tech Icons */}
            {icons.map(({ Icon, color, delay }, i) => (
                <motion.div
                    key={i}
                    className={`absolute inset-0`}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: -delay * (20 / icons.length) // Distribute evenly based on duration
                    }}
                >
                    <div
                        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full border border-white/10 backdrop-blur-sm ${color}`}
                        style={{ transform: 'rotate(-360deg)' }} // Counter-rotate icon to keep it upright if needed, or let it spin
                    >
                        <motion.div
                            animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Icon size={20} />
                        </motion.div>
                    </div>
                </motion.div>
            ))}

            {/* 7. Floating Data Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, (Math.random() - 0.5) * 200],
                        y: [0, (Math.random() - 0.5) * 200],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}

            {/* 8. Holographic Scanline Overlay */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-scan" />
            </div>
        </div>
    );
};

export default HolographicCore;
