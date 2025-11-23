'use client';

import SkillTree from '../../components/SkillTree';

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-lightBg dark:bg-darkBg p-8">
            <h1 className="text-4xl font-bold text-neonCyan mb-8">Skill Ecosystem</h1>
            <SkillTree />
        </div>
    );
}
