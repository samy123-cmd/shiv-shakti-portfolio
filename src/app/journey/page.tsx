'use client';

import MetroMap from '../../components/MetroMap';

export default function JourneyPage() {
    return (
        <div className="min-h-screen bg-lightBg dark:bg-darkBg p-8">
            <h1 className="text-4xl font-bold text-neonCyan mb-8">Career Journey</h1>
            <p className="text-gray-400 mb-8">Click on any station to explore the details of that role.</p>
            <MetroMap />
        </div>
    );
}
