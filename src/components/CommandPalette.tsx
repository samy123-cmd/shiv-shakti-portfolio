'use client';

import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home,
    User,
    Briefcase,
    Code,
    Mail,
    FileText,
    Github,
    Linkedin,
    Terminal,
    Coffee
} from 'lucide-react';

const CommandPalette = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg shadow-2xl"
                    >
                        <Command className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <div className="flex items-center border-b border-white/10 px-4">
                                <Terminal className="w-5 h-5 text-gray-500 mr-3" />
                                <Command.Input
                                    placeholder="Type a command or search..."
                                    className="w-full bg-transparent py-4 text-white placeholder:text-gray-500 focus:outline-none text-lg font-mono"
                                />
                            </div>

                            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                                <Command.Empty className="py-6 text-center text-gray-500 font-mono text-sm">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Navigation" className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2">
                                    <CommandItem icon={Home} onSelect={() => runCommand(() => scrollTo('hero'))}>Home</CommandItem>
                                    <CommandItem icon={User} onSelect={() => runCommand(() => scrollTo('about'))}>About</CommandItem>
                                    <CommandItem icon={Briefcase} onSelect={() => runCommand(() => scrollTo('experience'))}>Experience</CommandItem>
                                    <CommandItem icon={Code} onSelect={() => runCommand(() => scrollTo('projects'))}>Projects</CommandItem>
                                    <CommandItem icon={Mail} onSelect={() => runCommand(() => scrollTo('contact'))}>Contact</CommandItem>
                                </Command.Group>

                                <Command.Group heading="Social & Links" className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-4">
                                    <CommandItem icon={Github} onSelect={() => runCommand(() => window.open('https://github.com/unpairedelectron', '_blank'))}>GitHub</CommandItem>
                                    <CommandItem icon={Linkedin} onSelect={() => runCommand(() => window.open('https://linkedin.com/in/shivmishra1408', '_blank'))}>LinkedIn</CommandItem>
                                    <CommandItem icon={FileText} onSelect={() => runCommand(() => window.open('/resume.pdf', '_blank'))}>View Resume</CommandItem>
                                </Command.Group>

                                <Command.Group heading="System" className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-4">
                                    <CommandItem icon={Coffee} onSelect={() => runCommand(() => alert('☕ Brewing virtual coffee... Done!'))}>Brew Coffee</CommandItem>
                                </Command.Group>
                            </Command.List>

                            <div className="border-t border-white/10 px-4 py-2 flex justify-between items-center text-[10px] text-gray-500 font-mono bg-white/5">
                                <span>Neural Command Center v1.0</span>
                                <div className="flex gap-2">
                                    <span className="bg-white/10 px-1.5 py-0.5 rounded">↑↓</span> to navigate
                                    <span className="bg-white/10 px-1.5 py-0.5 rounded">↵</span> to select
                                    <span className="bg-white/10 px-1.5 py-0.5 rounded">esc</span> to close
                                </div>
                            </div>
                        </Command>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const CommandItem = ({ children, icon: Icon, onSelect }: { children: React.ReactNode, icon: any, onSelect: () => void }) => {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center px-3 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white group"
        >
            <Icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-white group-aria-selected:text-white transition-colors" />
            <span className="font-mono text-sm">{children}</span>
        </Command.Item>
    );
};

export default CommandPalette;
