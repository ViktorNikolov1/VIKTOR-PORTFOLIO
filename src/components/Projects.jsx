import React from 'react';

import { Github, ExternalLink, Gamepad2 } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image, highlight = false }) => (
    <div className={`h-full flex flex-col bg-cyber-dark/50 border border-cyber-primary/20 rounded-xl p-6 ${highlight ? 'border-cyber-primary/50 shadow-[0_0_30px_rgba(0,240,255,0.1)]' : ''}`}>
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-cyber-dark/50 group">
            {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20">
                    <Gamepad2 className="w-16 h-16 text-white/20" />
                </div>
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {/* Placeholders for links */}
                <button className="!p-2 rounded-full border border-white/20 hover:bg-white/10 text-white transition-colors">
                    <Github className="w-5 h-5" />
                </button>
                <button className="!p-2 rounded-full border border-white/20 hover:bg-white/10 text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                </button>
            </div>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded bg-white/5 text-cyber-primary border border-cyber-primary/20">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Featured <span className="text-cyber-primary">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="md:col-span-2">
                    <ProjectCard
                        title="HackAdemyX"
                        description="A Unity-based 2D/3D educational game designed to teach cybersecurity fundamentals to teens. Features multi-platform support, secure authentication, and interactive levels that significantly improved concept retention compared to traditional learning methods. Presented at multiple university conferences."
                        tags={["Unity", "C#", "Game Development", "Cybersecurity Education", "Firebase Auth"]}
                        highlight={true}
                    // image="/path/to/screenshot.jpg" // Placeholder
                    />
                </div>

                <ProjectCard
                    title="Portfolio Website"
                    description="A modern, responsive personal portfolio website built with React and Tailwind CSS to showcase skills and experience. Features smooth animations and a cyber-themed design."
                    tags={["React", "Tailwind CSS", "Framer Motion", "Vite"]}
                />

                <ProjectCard
                    title="Backend API Service"
                    description="Scalable backend service built with Flask and Node.js for data processing and optimization. Reduced processing time by over 50% through efficient algorithm implementation."
                    tags={["Python", "Flask", "Node.js", "API Design", "Optimization"]}
                />
            </div>
        </section>
    );
};

export default Projects;
