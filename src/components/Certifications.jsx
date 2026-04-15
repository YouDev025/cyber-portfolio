import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Professional Certifications', 'Certificates of Completion'];

    const certifications = [
        // --- Professional Certifications ---
        {
            title: "OSCP - Offensive Security Certified Professional",
            issuer: "OffSec",
            date: "2024",
            category: "Professional Certifications",
            status: "Planned"
        },
        {
            title: "CEH - Certified Ethical Hacker",
            issuer: "EC-Council",
            date: "2023",
            category: "Professional Certifications",
            status: "Planned"
        },
        {
            title: "CompTIA Security+",
            issuer: "CompTIA",
            date: "2021",
            category: "Professional Certifications",
            status: "Planned"
        },
        {
            title: "CISSP - Certified Information Systems Security",
            issuer: "ISC2",
            date: "2025",
            category: "Professional Certifications",
            status: "Planned"
        },
        {
            title: "AWS Certified Security - Specialty",
            issuer: "Amazon Web Services",
            date: "2023",
            category: "Professional Certifications",
            status: "Planned"
        },
        {
            title: "CCNA - Cisco Certified Network Associate",
            issuer: "Cisco",
            date: "2020",
            category: "Professional Certifications",
            status: "Planned"
        },
        {
            title: "BTL1 - Blue Team Level 1",
            issuer: "Security Blue Team",
            date: "2023",
            category: "Professional Certifications",
            status: "Planned"
        },
        {
            title: "CCSP - Certified Cloud Security Professional",
            issuer: "ISC2",
            date: "2025",
            category: "Professional Certifications",
            status: "Planned"
        },
        {
            title: "PNPT - Practical Network Penetration Tester",
            issuer: "TCM Security",
            date: "2024",
            category: "Professional Certifications",
            status: "Planned"
        },
        {
            title: "CISM - Certified Information Security Manager",
            issuer: "ISACA",
            date: "2024",
            category: "Professional Certifications",
            status: "Planned"
        },

        // --- Certificates of Completion (Free/Courses) ---
        {
            title: "Cyber Fundamentals - Cyber 101",
            issuer: "Cyber 101",
            date: "2023",
            category: "Certificates of Completion",
            status: "Completed"
        },
        {
            title: "Cisco CyberOps Associate Course",
            issuer: "Cisco Networking Academy",
            date: "2022",
            category: "Certificates of Completion",
            status: "Completed"
        },
        {
            title: "ISC2 - CC Course Pre-assessment",
            issuer: "ISC2",
            date: "2022",
            category: "Certificates of Completion",
            status: "Completed"
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            date: "2022",
            category: "Certificates of Completion",
            status: "Completed"
        },
        {
            title: "Cyber Fundamentals - Data Privacy",
            issuer: "Cyber 101",
            date: "2023",
            category: "Certificates of Completion",
            status: "Completed"
        },
        {
            title: "Fortinet NSE 1, 2, & 3",
            issuer: "Fortinet Training Institute",
            date: "2023",
            category: "Certificates of Completion",
            status: "Completed"
        },
        {
            title: "TryHackMe - Jr Penetration Tester Pathway",
            issuer: "TryHackMe",
            date: "2023",
            category: "Certificates of Completion",
            status: "Completed"
        },
        {
            title: "Google Cybersecurity Professional Certificate",
            issuer: "Coursera",
            date: "2024",
            category: "Certificates of Completion",
            status: "In Progress"
        }
    ];

    const filteredCertifications = activeTab === 'All'
        ? certifications
        : certifications.filter(c => c.category === activeTab);

    return (
        <section id="certifications" className="py-20 bg-cyber-light/40 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-4">
                        &lt;CERTIFICATIONS /&gt;
                    </h2>
                    <div className="w-24 h-1 bg-cyber-neon mx-auto mb-8"></div>
                </motion.div>

                {/* Categories Tab Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 font-mono text-sm md:text-base rounded transition-all duration-300 border ${activeTab === category
                                ? 'bg-cyber-neon text-black border-cyber-neon font-bold shadow-[0_0_15px_rgba(0,255,204,0.5)]'
                                : 'bg-cyber-dark text-gray-300 border-gray-700 hover:border-cyber-neon/50 hover:text-cyber-neon'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredCertifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-cyber-dark border border-gray-700 p-6 rounded-lg hover:border-cyber-neon shadow-lg hover:shadow-cyber-neon/20 transition-all duration-300"
                            >
                                <div className="flex items-start">
                                    <Award className={`w-8 h-8 mr-4 flex-shrink-0 ${cert.status === 'Completed' ? 'text-cyber-neon' : cert.status === 'In Progress' ? 'text-yellow-500' : 'text-blue-500'}`} />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start gap-2 mb-2">
                                            <h3 className="text-lg font-bold font-mono text-white leading-tight">{cert.title}</h3>
                                        </div>

                                        <div className="text-sm text-gray-400 font-mono flex items-center mb-3">
                                            <CheckCircle className="w-3 h-3 mr-1 text-cyber-accent" />
                                            {cert.issuer}
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded border whitespace-nowrap ${cert.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                cert.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                                    'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                }`}>
                                                {cert.status}
                                            </span>
                                            {cert.date && (
                                                <span className="text-xs font-mono text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                                                    {cert.date}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
