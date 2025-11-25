import React from 'react';

import { Users, Trophy, Star } from 'lucide-react';

const Leadership = () => {
    return (
        <section id="leadership" className="py-20 px-6 bg-cyber-dark/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Leadership & <span className="text-cyber-primary">Athletics</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center p-8 border-cyber-primary/20 bg-cyber-dark/50 border rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-cyber-primary/10 flex items-center justify-center mb-6">
                        <Users className="w-8 h-8 text-cyber-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">President</h3>
                    <p className="text-cyber-secondary font-semibold mb-4">Computer Science Society</p>
                    <p className="text-gray-400 mb-6">
                        Leading a community of over 150 members at Fairfield University. Coordinating with faculty and industry professionals to organize events, workshops, and networking opportunities that support student growth.
                    </p>
                    <div className="mt-auto flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300">Community Building</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300">Event Planning</span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center p-8 border-cyber-secondary/20 bg-cyber-dark/50 border rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-cyber-secondary/10 flex items-center justify-center mb-6">
                        <Trophy className="w-8 h-8 text-cyber-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Division I Athlete</h3>
                    <p className="text-cyber-primary font-semibold mb-4">Men’s Soccer Team</p>
                    <p className="text-gray-400 mb-6">
                        Balancing 25+ hours of weekly training and competition with full-time academic coursework. Demonstrating resilience, time management, and the ability to perform under pressure in a high-stakes environment.
                    </p>
                    <div className="mt-auto flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300">Discipline</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300">Teamwork</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;
