import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Cybersecurity",
            skills: ["Pentesting", "Cyber Fundamentals", "Data Privacy", "Kali Linux", "Wireshark", "Metasploit", "Burp Suite"]
        },
        {
            title: "Networking",
            skills: ["CyberOps Associate", "Routing & Switching", "DNS/DHCP", "VPN", "Subnetting", "Cisco Packet Tracer"]
        },
        {
            title: "Development",
            skills: ["PHP", "Laravel 11", "React.js", "Python", "Tailwind CSS", "Git/GitHub", "SQL", "JAVA"]
        },
        {
            title: "Systems & Cloud",
            skills: ["Linux (Debian/Ubuntu)", "Windows Server", "Active Directory", "Docker", "Bash Scripting"]
        },
        {
            title: "Security Frameworks",
            skills: ["OWASP Top 10", "ISO 27001", "NIST CSF", "Risk Management", "Cryptography Basics"]
        },
        {
            title: "Languages & Soft Skills",
            skills: ["Français (Pro)", "English (Intermediate)", "Problem Solving", "Teamwork", "Adaptability"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-cyber-dark/40 relative overflow-hidden">
            {/* Background Matrix-like effect (simplified) */}
            <div className="absolute top-0 right-0 p-10 opacity-5">
                <div className="text-9xl font-mono font-bold">0101</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-4">
                        &lt;SKILL_SET /&gt;
                    </h2>
                    <div className="w-24 h-1 bg-cyber-neon mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-cyber-light border border-gray-800 p-6 rounded-lg hover:border-cyber-neon hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold font-mono text-white mb-6 border-b border-gray-700 pb-2 group-hover:text-cyber-neon transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 bg-cyber-dark text-gray-300 text-sm font-mono rounded border border-gray-700 hover:border-cyber-neon/50 hover:text-cyber-neon transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
