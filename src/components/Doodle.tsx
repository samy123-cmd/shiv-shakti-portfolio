'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type DoodleType = 'squiggle' | 'circle-grid' | 'cross' | 'dots';

interface DoodleProps {
    type: DoodleType;
    className?: string;
}

const variants: Variants = {
    float: {
        y: [0, -15, 0],
        rotate: [0, 5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Doodle: React.FC<DoodleProps> = ({ type, className = '' }) => {

    const renderSVG = () => {
        switch (type) {
            case 'squiggle':
                return (
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 50C20 20 40 80 50 50C60 20 80 80 90 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                );
            case 'circle-grid':
                return (
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="4" />
                        <circle cx="50" cy="20" r="4" />
                        <circle cx="80" cy="20" r="4" />
                        <circle cx="20" cy="50" r="4" />
                        <circle cx="50" cy="50" r="4" />
                        <circle cx="80" cy="50" r="4" />
                        <circle cx="20" cy="80" r="4" />
                        <circle cx="50" cy="80" r="4" />
                        <circle cx="80" cy="80" r="4" />
                    </svg>
                );
            case 'cross':
                return (
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 10V70M10 40H70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                );
            case 'dots':
                return (
                    <svg width="120" height="60" viewBox="0 0 120 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="30" r="3" />
                        <circle cx="30" cy="30" r="3" />
                        <circle cx="50" cy="30" r="3" />
                        <circle cx="70" cy="30" r="3" />
                        <circle cx="90" cy="30" r="3" />
                        <circle cx="110" cy="30" r="3" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            variants={variants}
            animate="float"
            className={`absolute pointer-events-none text-white/10 ${className}`}
        >
            {renderSVG()}
        </motion.div>
    );
};

export default Doodle;
