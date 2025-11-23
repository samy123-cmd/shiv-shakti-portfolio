'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
    text: string;
    className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState('');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3; // Slower reveal for dramatic effect
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <motion.span
            className={`inline-block font-mono ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayText}
        </motion.span>
    );
};

export default GlitchText;
