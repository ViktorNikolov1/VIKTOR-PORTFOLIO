import React from 'react';

import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceItem = ({ role, company, date, location, points }) => (
    <div className="relative pl-8 pb-12 border-l-2 border-white/10 last:pb-0 last:border-l-0">
        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyber-primary shadow-[0_0_10px_rgba(0,240,255,0.5)]" />

        <div className="mb-2">
            <h3 className="text-xl font-bold text-white">{role}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-1">
                <span className="flex items-center gap-1 text-cyber-secondary font-semibold">
                    <Briefcase className="w-4 h-4" /> {company}
                </span>
                <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {date}
                </span>
                {location && (
                    <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {location}
                    </span>
                )}
            </div>
        </div>

        <div className="mt-4 bg-cyber-dark/50 border border-cyber-primary/20 rounded-xl p-6">
            <ul className="space-y-2">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-cyber-primary mt-1.5">•</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Security Operations Center (SOC) Analyst",
            company: "Fairfield University",
            date: "09/2025 – Present",
            location: "Fairfield, CT",
            points: [
                "Monitor university network infrastructure using Splunk, Wireshark, and CrowdStrike to detect and respond to cybersecurity threats in real time.",
                "Analyze security alerts, logs, and endpoint data to identify malicious activity, conduct initial incident triage, and escalate critical events.",
                "Contribute to security documentation, SOPs, and incident response playbooks aligned with NIST and NCAE-CD standards."
            ]
        },
        {
            role: "Cybersecurity Research Program – Game Developer",
            company: "Fairfield University",
            date: "06/2025 – 08/2025",
            location: "Fairfield, CT",
            points: [
                "Led development of “HackAdemyX”, a Unity-based educational game teaching cybersecurity to teens, with multi-platform support and secure authentication.",
                "Built interactive levels and UIs in C#, achieving very positive feedback from testers and significantly higher concept retention vs. traditional methods.",
                "Collaborated using Unity Version Control, reducing merge conflicts and ensuring smooth delivery."
            ]
        },
        {
            role: "Backend Developer",
            company: "Pursue Care (Fairfield University Project)",
            date: "01/2025 – 02/2025",
            location: "Remote / Hybrid",
            points: [
                "Developed algorithms and data workflows to improve decision-making and reduce processing time (from 11 to 5 hours).",
                "Integrated Flask (Python) and Node.js for backend communication between services.",
                "Contributed to full-stack enhancements improving system efficiency and scalability."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Professional <span className="text-cyber-primary">Experience</span>
            </h2>
            <div className="max-w-3xl mx-auto">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
