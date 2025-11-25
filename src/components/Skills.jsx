import React from 'react';

import { Code2, Database, Shield, Languages, Users } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, color }) => (
    <div className="h-full bg-cyber-dark/50 border border-cyber-primary/20 rounded-xl p-6">
        <div className={`flex items-center gap-3 mb-4 ${color}`}>
            <Icon className="w-6 h-6" />
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 hover:border-cyber-primary/50 hover:bg-cyber-primary/10 transition-colors cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const categories = [
        {
            title: "Programming Languages",
            icon: Code2,
            color: "text-cyber-primary",
            skills: ["Python", "Java", "C#", "SQL", "HTML", "CSS", "JavaScript/React"]
        },
        {
            title: "Cybersecurity",
            icon: Shield,
            color: "text-red-400",
            skills: ["Threat Analysis", "Incident Response", "Network Security", "Data Protection", "Encryption", "Kali Linux", "Splunk", "Wireshark", "CrowdStrike"]
        },
        {
            title: "Backend & Dev",
            icon: Database,
            color: "text-cyber-secondary",
            skills: ["API Integration", "RESTful APIs", "Flask", "Node.js", "Game Development (Unity)", "Automations"]
        },
        {
            title: "Languages & Soft Skills",
            icon: Languages,
            color: "text-green-400",
            skills: ["English (Fluent)", "Spanish (Fluent)", "Bulgarian (Native)", "Leadership", "Teamwork", "Time Management", "Discipline"]
        }
    ];

    return (
        <section id="skills" className="py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Technical <span className="text-cyber-primary">Arsenal</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <SkillCategory key={category.title} {...category} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
