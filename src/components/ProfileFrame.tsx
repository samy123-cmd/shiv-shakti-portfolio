'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProfileFrameProps {
    src?: string;
    alt?: string;
}

const ProfileFrame: React.FC<ProfileFrameProps> = ({
    src = "/profile-placeholder.png",
    alt = "Profile"
}) => {
    return (
        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {/* Rotating Outer Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-white/20"
            />

            {/* Counter-Rotating Inner Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dotted border-blue-500/30"
            />

            {/* Static Glow Ring */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.2)]" />

            {/* Image Container */}
            <motion.div
                className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 bg-black/50 backdrop-blur-sm relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* The Image - Simplified for debugging */}
                <img
                    src={src}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                />
            </motion.div>

            {/* Decorative Tech Bits */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500/50 rounded-full blur-[1px]" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
        </div>
    );
};

export default ProfileFrame;
