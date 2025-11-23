'use client';

import React, { useState, useEffect, KeyboardEvent } from 'react';
import { useUIStore } from '../lib/store';

/**
 * Simple hackable terminal component.
 * Supports commands: help, ls skills, ls projects, cat summary, goto <section>, matrix
 */
const Terminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const setMatrix = useUIStore((s) => s.setMatrix);

    const handleCommand = (cmd: string) => {
        const parts = cmd.trim().split(/\s+/);
        const base = parts[0]?.toLowerCase();
        let output = '';
        switch (base) {
            case 'help':
                output = `Available commands:\n  help\n  ls skills\n  ls projects\n  cat summary\n  goto <section> (skills|projects|journey|achievements)\n  matrix`;
                break;
            case 'ls':
                if (parts[1] === 'skills') output = 'Loading skills…';
                else if (parts[1] === 'projects') output = 'Loading projects…';
                else output = 'Unknown ls target';
                break;
            case 'cat':
                if (parts[1] === 'summary') output = 'Fetching professional summary…';
                else output = 'Unknown cat target';
                break;
            case 'goto':
                output = `Navigating to ${parts[1] || ''}…`;
                break;
            case 'matrix':
                setMatrix(true);
                output = 'Activating Matrix mode…';
                break;
            default:
                output = `Command not recognized: ${cmd}`;
        }
        setHistory((h) => [...h, `> ${cmd}`, output]);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && input.trim()) {
            handleCommand(input);
            setInput('');
        }
    };

    // Auto‑focus the input on mount
    const inputRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="bg-darkBg text-neonCyan p-4 rounded-md font-mono text-sm h-full flex flex-col">
            <div className="flex-1 overflow-y-auto mb-2">
                {history.map((line, i) => (
                    <pre key={i} className="whitespace-pre-wrap">{line}</pre>
                ))}
            </div>
            <input
                ref={inputRef}
                className="bg-darkBg border border-neonCyan text-neonCyan p-2 focus:outline-none"
                placeholder="type a command…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default Terminal;
