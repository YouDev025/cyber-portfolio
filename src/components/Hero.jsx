import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyber-neon/30 bg-cyber-light/50 backdrop-blur-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-cyber-neon mr-2 animate-pulse"></span>
                        <span className="text-cyber-neon text-sm font-mono">System Online</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono tracking-tighter">
                        <span className="block mb-2 text-3xl md:text-5xl text-white">I am Youssef Adardour</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-accent text-2xl md:text-4xl">
                            Junior Cybersecurity & Network Engineer
                        </span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-mono">
                        Linux & Python | Ethical Hacking | Open to Internship Opportunities
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-cyber-neon text-cyber-dark font-bold rounded-sm font-mono flex items-center hover:bg-cyber-neon/80 transition-colors"
                        >
                            <Terminal className="mr-2 h-5 w-5" />
                            VIEW_PROJECTS
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-cyber-neon text-cyber-neon font-bold rounded-sm font-mono flex items-center hover:bg-cyber-neon/10 transition-colors"
                        >
                            CONTACT_ME
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyber-dark to-transparent"></div>
        </section>
    );
};

export default Hero;
