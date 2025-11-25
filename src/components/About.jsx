import React from 'react';

import { motion } from 'framer-motion';
import { Code, Globe, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-cyber-dark/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About <span className="text-cyber-primary">Me</span>
                    </h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            I am a Division I athlete at Fairfield University, pursuing a double major in Computer Science and Mathematics. My journey began in Madrid, Spain, where I studied Computer Science and AI, sparking my passion for technology.
                        </p>
                        <p>
                            With a strong academic record (4.0 GPA) and leadership experience as President of the Computer Science Society, I balance rigorous coursework with the discipline required for high-level athletics.
                        </p>
                        <p>
                            My primary focus is <span className="text-cyber-primary font-bold">Cybersecurity</span>. I am passionate about protecting digital infrastructures and plan to pursue a Master’s degree to specialize further in this field. I also enjoy backend development and creating educational games that make complex tech concepts accessible.
                        </p>
                        <p className="flex items-center gap-2 text-cyber-secondary font-semibold">
                            <Globe className="w-5 h-5" />
                            Eligible to work in the USA and Europe.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-cyber-primary/10 to-transparent border border-cyber-primary/20">
                        <Code className="w-10 h-10 text-cyber-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">Technical Passion</h3>
                        <p className="text-gray-400 text-sm">
                            Deeply interested in Network Security, Threat Analysis, and building secure, scalable backend systems.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-cyber-secondary/10 to-transparent border border-cyber-secondary/20">
                        <GraduationCap className="w-10 h-10 text-cyber-secondary mb-4" />
                        <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
                        <p className="text-gray-400 text-sm">
                            Consistently on the Dean's List with a perfect GPA, demonstrating commitment to learning and excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
