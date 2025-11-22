'use client';

import { Download, Rocket, Cloud, GitBranch, Code, Database, Server } from "lucide-react";
import { FaEnvelope, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
            style={{
                backgroundColor: 'var(--body-bg)',
                color: 'var(--text-main)',
                opacity,
                scale,
            }}
        >
            {/* Animated Background Elements with more variety - Hidden on small mobile */}
            <motion.div
                className="absolute top-20 left-5 sm:left-10 text-blue-500 opacity-10 hidden sm:block"
                animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, 15, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Cloud size={40} className="sm:w-[60px] sm:h-[60px]" />
            </motion.div>
            <motion.div
                className="absolute bottom-40 right-5 sm:right-20 text-purple-500 opacity-10 hidden sm:block"
                animate={{ 
                    y: [0, 30, 0],
                    rotate: [0, -15, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Rocket size={35} className="sm:w-[50px] sm:h-[50px]" />
            </motion.div>
            <motion.div
                className="absolute top-1/3 right-5 sm:right-10 text-green-500 opacity-10 hidden md:block"
                animate={{ 
                    x: [0, 20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <GitBranch size={45} />
            </motion.div>
            <motion.div
                className="absolute top-1/4 left-1/4 text-orange-500 opacity-10"
                animate={{ 
                    y: [0, -25, 0],
                    x: [0, 15, 0],
                    rotate: [0, -20, 0]
                }}
                transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Code size={55} />
            </motion.div>
            <motion.div
                className="absolute bottom-1/4 left-16 text-pink-500 opacity-10"
                animate={{ 
                    y: [0, 20, 0],
                    scale: [1, 1.15, 1]
                }}
                transition={{ 
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Database size={48} />
            </motion.div>
            <motion.div
                className="absolute top-2/3 right-1/4 text-cyan-500 opacity-10"
                animate={{ 
                    x: [0, -18, 0],
                    rotate: [0, 25, 0]
                }}
                transition={{ 
                    duration: 7.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Server size={52} />
            </motion.div>

            {/* Role Badge */}
            <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="px-4 py-1 rounded-full border border-blue-400 text-blue-400 text-sm animate-pulse">
                    🚀 DevOps Engineer & Cloud Architect
                </span>
            </motion.div>

            {/* Main Heading with Typing Animation */}
            <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 px-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <TypeAnimation
                    sequence={[
                        'Building Scalable Infrastructure',
                        2000,
                        'Automating Deployment Pipelines',
                        2000,
                        'Optimizing Cloud Architecture',
                        2000,
                        'Ensuring System Reliability',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                />
            </motion.h1>

            {/* Description */}
            <motion.p 
                className="text-[var(--text-main)] dark:text-gray-400 max-w-2xl text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Senior DevOps Engineer specializing in <strong>AWS</strong>, <strong>Kubernetes</strong>, and <strong>CI/CD automation</strong>. 
                Proven track record of reducing deployment times by 60%, achieving 99.9% uptime, and managing 
                infrastructure for high-traffic applications serving millions of users.
            </motion.p>

            {/* Buttons */}
            <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-lg px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <motion.a
                    href="/Deven's_Resume.pdf"
                    download
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 rounded-md flex items-center justify-center gap-2 font-semibold shadow-lg text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Download size={18} /> Download Resume
                </motion.a>

                <motion.a
                    href="#contact"
                    className="button-link border border-blue-400 dark:border-white hover:bg-gray-100 dark:hover:bg-white hover:text-black dark:hover:text-black px-6 sm:px-8 py-3 rounded-md flex items-center justify-center gap-2 transition duration-300 font-semibold text-sm sm:text-base"
                    style={{
                        border: '1px solid var(--button-border-light)',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaEnvelope size={18} /> Get in Touch
                </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
                className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 max-w-3xl px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-500">50+</div>
                    <div className="text-sm text-gray-400">Projects Deployed</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-purple-500">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime Achieved</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-green-500">100+</div>
                    <div className="text-sm text-gray-400">Servers Managed</div>
                </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
                className="flex gap-6 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <motion.a
                    className="social-github text-[var(--text-main)] dark:text-gray-400 dark:hover:text-white transition-colors"
                    href="https://github.com/deven065"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    className="social-linkedin text-[var(--text-main)] dark:text-gray-400 dark:hover:text-blue-600 transition-colors"
                    href="https://linkedin.com/in/dev55"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    className="social-google text-[var(--text-main)] dark:text-gray-400 dark:hover:text-red-500 transition-colors"
                    href="mailto:dipenrikkaame@gmail.com"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaGoogle />
                </motion.a>
            </motion.div>

        </motion.section>
    );
};

export default Hero;
