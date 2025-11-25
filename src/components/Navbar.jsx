import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Shield, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-dark/90 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2 group">
                    <div className="relative">
                        <Shield className="w-8 h-8 text-cyber-primary group-hover:text-white transition-colors" />
                        <Terminal className="w-4 h-4 text-cyber-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter group-hover:text-cyber-primary transition-colors">
                        VN<span className="text-cyber-primary">.SEC</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="text-gray-300 hover:text-cyber-primary font-medium cursor-pointer transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-4 py-2 border border-cyber-primary text-cyber-primary rounded hover:bg-cyber-primary hover:text-cyber-dark transition-all font-bold"
                    >
                        Résumé
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cyber-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-gray-300 hover:text-cyber-primary font-medium cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="text-center py-3 border border-cyber-primary text-cyber-primary rounded hover:bg-cyber-primary hover:text-cyber-dark transition-all font-bold"
                            >
                                Download Résumé
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
