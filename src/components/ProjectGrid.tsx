'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Doodle from './Doodle';
import SpotlightCard from './SpotlightCard';

const projects = [
    {
        title: 'Enterprise ETL Pipeline Migration',
        description: 'Lead architect for migrating legacy DataStage jobs to a modern cloud-native architecture. Reduced processing time by 40% and improved data quality scores.',
        tech: ['DataStage', 'SQL', 'Python', 'AWS'],
        role: 'Lead Data Engineer',
        link: '#'
    },
    {
        title: 'Real-time Analytics Dashboard',
        description: 'Designed and implemented a real-time streaming architecture for financial data analysis. Enabled stakeholders to make decisions with <1s latency.',
        tech: ['Kafka', 'Spark Streaming', 'React', 'Node.js'],
        role: 'Solution Architect',
        link: '#'
    },
    {
        title: 'Data Quality Framework',
        description: 'Developed an automated data quality framework that validates 1TB+ of daily data ingestion. Reduced data incidents by 75%.',
        tech: ['Python', 'Airflow', 'Snowflake', 'Great Expectations'],
        role: 'Senior Consultant',
        link: '#'
    },
    {
        title: 'Customer 360 Platform',
        description: 'Built a unified customer view platform integrating data from 12 disparate sources. Improved marketing campaign targeting efficiency by 25%.',
        tech: ['Talend', 'PostgreSQL', 'Docker', 'Kubernetes'],
        role: 'Data Engineer',
        link: '#'
    },
    {
        title: 'Predictive Maintenance Model',
        description: 'Collaborated with data scientists to deploy ML models for manufacturing equipment maintenance. Reduced downtime by 15%.',
        tech: ['Python', 'TensorFlow', 'Azure ML', 'SQL'],
        role: 'ML Engineer',
        link: '#'
    },
    {
        title: 'Cloud Data Warehouse Optimization',
        description: 'Optimized Redshift cluster performance and query tuning. Reduced monthly cloud infrastructure costs by 30%.',
        tech: ['AWS Redshift', 'SQL', 'Terraform'],
        role: 'Cloud Engineer',
        link: '#'
    }
];

const ProjectGrid = () => {
    return (
        <section id="projects" className="py-20 px-6 relative overflow-hidden">
            <Doodle type="squiggle" className="top-10 left-1/2 opacity-20 -translate-x-1/2" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-3xl font-bold font-heading mb-12 text-center text-white">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="p-6 h-full flex flex-col group">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-black/30 text-gray-400 rounded border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
