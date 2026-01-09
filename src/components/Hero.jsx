import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';


const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-cyber-primary/20 rounded-full blur-[100px] animate-pulse-fast" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-secondary/20 rounded-full blur-[100px] animate-pulse-fast delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary text-sm font-mono mb-6">
                        HELLO_WORLD
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Viktor <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary">Nikolov</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Cybersecurity Enthusiast, Software Developer & SOC Analyst.
                        <br />
                        <span className="text-gray-500 text-lg mt-2 block">
                            Computer Science & Mathematics Student • Division I Athlete
                        </span>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                        <a href="C:\Users\Viktor\Desktop\FAIRFIELD\Job Applications\RESUME\V.NikolovCV.pdf" className="bg-cyber-primary text-cyber-dark font-bold py-3 px-6 rounded-lg hover:bg-cyber-primary/90 transition-colors flex items-center justify-center gap-2">
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>
                        <Link to="contact" smooth={true} duration={500} offset={-100}>
                            <button className="bg-transparent border border-cyber-primary text-cyber-primary font-bold py-3 px-6 rounded-lg hover:bg-cyber-primary/10 transition-colors flex items-center justify-center gap-2">
                                Contact Me
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <a href="https://linkedin.com/in/viktor-nikolov1" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary transition-colors transform hover:scale-110">
                            <Linkedin className="w-8 h-8" />
                        </a>
                        <a href="mailto:viktorgn4@gmail.com" className="hover:text-cyber-primary transition-colors transform hover:scale-110">
                            <Mail className="w-8 h-8" />
                        </a>
                        <a href="https://github.com/ViktorNikolov1" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary transition-colors transform hover:scale-110">
                            <Github className="w-8 h-8" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
                    <div className="w-1 h-1 bg-gray-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
