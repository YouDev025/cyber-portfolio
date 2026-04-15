import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-cyber-dark/40 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-4">
                        &lt;CONTACT_UPLINK /&gt;
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to secure your infrastructure or build the next big thing? Initialize a connection.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.a
                        href="mailto:contact@cyber.dev"
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center justify-center p-8 bg-cyber-light border border-gray-800 rounded-lg hover:border-cyber-neon transition-colors"
                    >
                        <Mail className="w-12 h-12 text-cyber-neon mb-4" />
                        <span className="text-white font-mono text-lg">Send Encrypted Mail</span>
                        <span className="text-gray-500 mt-2">contact@cyber.dev</span>
                    </motion.a>

                    <div className="flex flex-col items-center justify-center p-8 bg-cyber-light border border-gray-800 rounded-lg">
                        <span className="text-white font-mono text-lg mb-6">Social Protocols</span>
                        <div className="flex space-x-6">
                            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-cyber-neon hover:text-cyber-dark transition-all duration-300">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/youssef-adardour-9168b6335" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-cyber-neon hover:text-cyber-dark transition-all duration-300">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-cyber-neon hover:text-cyber-dark transition-all duration-300">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-600 font-mono text-sm">
                    © {new Date().getFullYear()} CYBER.DEV // SECURING THE FUTURE
                </p>
            </div>
        </footer>
    );
};

export default Contact;
