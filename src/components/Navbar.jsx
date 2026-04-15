import React, { useState } from 'react';
import { Menu, X, Terminal, Shield, Cpu, Code, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full bg-cyber-dark/90 backdrop-blur-sm z-50 border-b border-cyber-neon/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div
                        className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0"
                        >
                            <Shield className="h-8 w-8 text-cyber-neon" />
                        </motion.div>
                        <span className="ml-2 text-2xl font-bold font-mono tracking-wider text-white">
                            CYBER<span className="text-cyber-neon">.DEV</span>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.slice(0, 3).map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-cyber-neon hover:bg-cyber-light px-3 py-2 rounded-md text-sm font-medium font-mono transition-all duration-300"
                                >
                                    &lt;{item.name} /&gt;
                                </a>
                            ))}

                            {/* More Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                                    className="text-gray-300 hover:text-cyber-neon hover:bg-cyber-light px-3 py-2 rounded-md text-sm font-medium font-mono transition-all duration-300 flex items-center focus:outline-none"
                                >
                                    More <ChevronDown className="ml-1 w-3 h-3" />
                                </button>

                                <AnimatePresence>
                                    {isMoreOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 mt-2 w-40 bg-cyber-dark border border-gray-700 rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5"
                                        >
                                            {navItems.slice(3).map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyber-light hover:text-cyber-neon font-mono"
                                                    onClick={() => setIsMoreOpen(false)}
                                                >
                                                    &lt;{item.name} /&gt;
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-cyber-dark border-b border-cyber-neon/20"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-cyber-neon block px-3 py-2 rounded-md text-sm font-medium font-mono"
                                onClick={() => setIsOpen(false)}
                            >
                                &lt;{item.name} /&gt;
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
