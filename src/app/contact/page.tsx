'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resume.json';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-lightBg dark:bg-darkBg p-8">
            <h1 className="text-4xl font-bold text-neonCyan mb-8">Transmission Console</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.div
                    className="bg-gray-900 border border-neonCyan p-6 rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-2xl font-bold text-neonMagenta mb-4">Send Transmission</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-darkBg border border-neonCyan p-3 text-neonCyan rounded"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-darkBg border border-neonCyan p-3 text-neonCyan rounded"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full bg-darkBg border border-neonCyan p-3 text-neonCyan rounded"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-neonCyan text-darkBg font-bold py-3 rounded hover:bg-neonViolet transition-colors"
                        >
                            {submitted ? 'Transmitted! ✓' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="bg-gray-900 border border-neonMagenta p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-neonMagenta mb-4">Contact Details</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>📧 {resumeData.contact.email}</p>
                            <p>📱 {resumeData.contact.phone}</p>
                            <p>📍 {resumeData.contact.location}</p>
                        </div>
                    </div>

                    <div className="bg-gray-900 border border-neonViolet p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-neonViolet mb-4">Social Channels</h3>
                        <div className="space-y-2">
                            <a
                                href={resumeData.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-neonCyan hover:text-neonMagenta transition-colors"
                            >
                                🔗 LinkedIn
                            </a>
                            <a
                                href={resumeData.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-neonCyan hover:text-neonMagenta transition-colors"
                            >
                                💻 GitHub
                            </a>
                        </div>
                    </div>

                    <button
                        className="w-full bg-neonViolet text-white font-bold py-3 rounded hover:bg-neonCyan hover:text-darkBg transition-colors"
                        onClick={() => alert('Resume download feature coming soon!')}
                    >
                        📥 Download Resume (PDF)
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
