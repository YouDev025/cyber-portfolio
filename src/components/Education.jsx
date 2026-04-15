import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
    const education = [
        {
            school: "Faculty of Sciences and Techniques Gueliz - Marrakech",
            degree: "Bachelor's Degree, Cybersecurity",
            period: "2024 - 2025",
            description: ""
        },
        {
            school: "Faculty of Sciences and Techniques Gueliz - Marrakech",
            degree: "Diploma of University Studies in Science and Technology (DEUST), MIPC",
            period: "Previous",
            description: ""
        },
        {
            school: "ERRAHALI EL FAROUK High School",
            degree: "High School Diploma (Baccalaureate), Physical Sciences",
            period: "",
            description: ""
        }
    ];

    return (
        <section id="education" className="py-20 bg-cyber-dark/40 relative"> {/* Kept dark background, maybe change to light for contrast? sticking to dark for now unless specified */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-neon/20 to-transparent"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Narrower max-width for valid list look */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-4">
                        &lt;EDUCATION /&gt;
                    </h2>
                    <div className="w-24 h-1 bg-cyber-neon mx-auto"></div>
                </motion.div>

                <div className="space-y-8 relative">
                    {/* Vertical line through timeline? Optional */}

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-cyber-light/30 border border-gray-800 p-6 rounded-lg hover:border-cyber-neon transition-colors relative flex gap-4 md:gap-8 flex-col md:flex-row items-start"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <div className="p-3 bg-cyber-dark rounded-full border border-cyber-neon/30 text-cyber-neon">
                                    <GraduationCap size={24} />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h4 className="text-xl font-bold text-white font-mono">{edu.school}</h4>
                                <div className="text-cyber-neon font-mono mb-2 text-lg">{edu.degree}</div>
                                {edu.period && (
                                    <div className="flex items-center text-sm text-gray-400 mb-2 font-mono">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {edu.period}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
