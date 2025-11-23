'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: 'DataStage → Snowflake Migration',
        difficulty: 'Hard',
        stack: ['DataStage', 'Snowflake', 'Oracle'],
        description: 'Led enterprise-scale migration of ETL workloads from legacy systems to Snowflake cloud data warehouse.',
    },
    {
        title: 'Real-time Kafka Streaming Pipeline',
        difficulty: 'Medium',
        stack: ['Kafka', 'PySpark', 'ADF'],
        description: 'Built near real-time data ingestion and transformation workflows using Kafka and PySpark.',
    },
    {
        title: 'AI-Assisted Data Quality Framework',
        difficulty: 'Hard',
        stack: ['Python', 'ML', 'LLM'],
        description: 'Developed automated data validation system with ML-driven anomaly detection and LLM integration.',
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-lightBg dark:bg-darkBg p-8">
            <h1 className="text-4xl font-bold text-neonCyan mb-8">Mission Board</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-gray-900 border border-neonMagenta p-6 rounded-lg"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px #ff00ff' }}
                    >
                        <h3 className="text-xl font-bold text-neonCyan mb-2">{project.title}</h3>
                        <p className="text-neonViolet text-sm mb-2">Difficulty: {project.difficulty}</p>
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {project.stack.map((tech, i) => (
                                <span key={i} className="bg-neonCyan text-darkBg px-2 py-1 text-xs rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
