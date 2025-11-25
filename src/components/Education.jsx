import React from 'react';

import { GraduationCap, Award, Trophy } from 'lucide-react';

const EducationItem = ({ degree, school, date, gpa, achievements }) => (
    <div className="mb-6 bg-cyber-dark/50 border border-cyber-primary/20 rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="text-cyber-primary" />
                    {degree}
                </h3>
                <p className="text-cyber-secondary font-semibold text-lg">{school}</p>
            </div>
            <div className="text-right md:text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    {date}
                </span>
                <p className="text-cyber-primary font-bold mt-1">GPA: {gpa}</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
            {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300 text-sm bg-white/5 p-2 rounded">
                    {item.icon}
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    </div>
);

const Education = () => {
    return (
        <section id="education" className="py-20 px-6 bg-cyber-dark/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Academic <span className="text-cyber-primary">Background</span>
            </h2>

            <div className="max-w-4xl mx-auto">
                <EducationItem
                    degree="Bachelor’s in Computer Science and Mathematics"
                    school="Fairfield University, CT, USA"
                    date="09/2023 – 05/2026"
                    gpa="4.0"
                    achievements={[
                        { text: "Dean’s List (All Semesters)", icon: <Award className="w-4 h-4 text-yellow-400" /> },
                        { text: "President, Computer Science Society", icon: <Users className="w-4 h-4 text-blue-400" /> },
                        { text: "NCAA Division I Men’s Soccer Team", icon: <Trophy className="w-4 h-4 text-orange-400" /> },
                    ]}
                />

                <EducationItem
                    degree="Bachelor’s in Computer Science and AI"
                    school="UAX University, Madrid, Spain"
                    date="09/2022 – 05/2023"
                    gpa="3.9"
                    achievements={[
                        { text: "Dean’s List", icon: <Award className="w-4 h-4 text-yellow-400" /> },
                        { text: "President, Computing & Engineering Society", icon: <Users className="w-4 h-4 text-blue-400" /> },
                    ]}
                />
            </div>
        </section>
    );
};

// Helper icon component for local usage
const Users = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

export default Education;
