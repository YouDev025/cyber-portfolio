import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: "work",
            title: "Intern",
            company: "AliDanTek",
            location: "Marrakech-Safi, Morocco",
            period: "April 2025 - May 2025",
            description: "Graduation project completed as part of the Bachelor of Science and Techniques - Cybersecurity track at FSTG Marrakech.",
            achievements: [
                "Added functional modules for different roles: Super Admin, Admin, Service Provider",
                "Rigorous adherence to OWASP Top 10 recommendations for vulnerability prevention (XSS, CSRF, injections, etc.)",
                "Implemented Laravel 11 security best practices (middleware, hashing, validation, etc.)",
                "Applied web security measures: session management, secure authentication, access control",
                "DevSecOps approach: integrating security from the early stages of development"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-cyber-dark/40 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-4">
                        &lt;EXPERIENCE /&gt;
                    </h2>
                    <div className="w-24 h-1 bg-cyber-neon mx-auto"></div>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-cyber-light/50 border border-gray-800 p-8 rounded-lg hover:border-cyber-neon transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white font-mono">{exp.title}</h4>
                                    <div className="text-cyber-neon font-mono text-lg">{exp.company}</div>
                                </div>
                                <div className="mt-2 md:mt-0 text-gray-400 font-mono text-sm text-right">
                                    <div className="flex items-center justify-end">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center justify-end mt-1">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {exp.location}
                                    </div>
                                </div>
                            </div>


                            <p className="text-gray-300 mb-6 text-lg">{exp.description}</p>

                            <div className="bg-cyber-dark/50 p-6 rounded border border-gray-700">
                                <h5 className="text-white font-bold mb-4 font-mono flex items-center">
                                    <Briefcase className="w-4 h-4 mr-2 text-cyber-neon" />
                                    Key Achievements
                                </h5>
                                <ul className="space-y-3 text-gray-400 text-sm md:text-base">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-cyber-neon mr-2 mt-1">➜</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
