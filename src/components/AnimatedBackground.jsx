import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Helper for generating floating particles
    const particles = Array.from({ length: 30 });

    return (
        <div className="fixed inset-0 z-[-10] bg-cyber-dark overflow-hidden pointer-events-none">
            {/* Base Cyber Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(0, 255, 65, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 255, 65, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
                }}
            />

            {/* Glowing Mouse Follower */}
            <motion.div
                className="absolute rounded-full pointer-events-none opacity-30"
                style={{
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(0,255,65,0.15) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(40px)',
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 300
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            />

            {/* Scrolling Cyber Scanline Array */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <motion.div
                    className="w-full h-[50vh] bg-gradient-to-b from-transparent via-cyber-neon to-transparent"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Floating Data Particles */}
            {particles.map((_, i) => {
                // Randomize positions and timings here once instead of inside rendering loop
                const size = Math.random() * 3 + 1;
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 10;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-cyber-accent"
                        style={{
                            width: size + 'px',
                            height: size + 'px',
                            top: top + '%',
                            left: left + '%',
                            opacity: 0.2
                        }}
                        animate={{
                            y: [0, Math.random() * -200 - 100],
                            opacity: [0, 0.8, 0]
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: delay
                        }}
                    />
                );
            })}
        </div>
    );
};

export default AnimatedBackground;
