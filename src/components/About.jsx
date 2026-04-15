import React from 'react';
import { motion } from 'framer-motion';
import { User, Server, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-cyber-light/40 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-4">
                        &lt;ABOUT_ME /&gt;
                    </h2>
                    <div className="w-24 h-1 bg-cyber-neon mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Terminal Window */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-2xl"
                    >
                        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-xs text-gray-400 font-mono">youssef@cyber-portfolio:~$ whoami</span>
                        </div>
                        <div className="p-6 font-mono text-sm md:text-base text-gray-300 space-y-4">
                            <p>
                                <span className="text-cyber-neon">➜</span> I am a Junior Cybersecurity & Network Engineer and Full Stack Developer.
                            </p>
                            <p>
                                <span className="text-cyber-neon">➜</span> Currently a student at FSTG Marrakech (Licence Cybersécurité), combining academic knowledge with practical experience in network engineering and web security.
                            </p>
                            <p>
                                <span className="text-cyber-neon">➜</span> My mission: To secure digital infrastructures while building robust, efficient systems.
                            </p>
                        </div>
                    </motion.div>

                    {/* Cards */}
                    <div className="space-y-6">
                        {[
                            { icon: ShieldCheck, title: "Cybersecurity", desc: "Vulnerability Assessment, Penetration Testing, Risk Analysis" },
                            { icon: Server, title: "Networking", desc: "Network Architecture, Packet Analysis, Protocol Design" },
                            { icon: User, title: "Development", desc: "Full Stack Web Dev, Secure Coding Practices, Automation Scripts" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                                className="flex items-start p-4 bg-cyber-dark border border-gray-800 rounded hover:border-cyber-neon/50 transition-colors"
                            >
                                <div className="bg-cyber-neon/10 p-3 rounded text-cyber-neon mr-4">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-mono text-white mb-1">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
