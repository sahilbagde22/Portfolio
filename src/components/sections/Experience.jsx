import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import TechBadge from '../ui/TechBadge';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "AI Research Intern",
            company: "Inunity",
            period: "2024 - Present",
            description: "Developing computer vision models for automated defect detection in manufacturing. Optimized inference time by 40% using TensorRT.",
            skills: ["PyTorch", "YOLOv8", "TensorRT"],
            span: "md:col-span-2"
        },
        {
            id: 2,
            role: "2nd Place Winner",
            company: "IIIT Nagpur Hackathon",
            period: "2023",
            description: "Built a secure decentralized voting system. Competed against 50+ teams nationwide.",
            skills: ["Blockchain", "Solidity", "React"],
            span: "md:col-span-1"
        },
        {
            id: 3,
            role: "Full Stack Developer",
            company: "Freelance",
            period: "2022 - 2024",
            description: "Delivered scalable web solutions for startups using the MERN stack.",
            skills: ["React", "Node.js", "MongoDB"],
            span: "md:col-span-1"
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            {/* Decorator Line */}
            <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-system-green/20 to-transparent hidden md:block" />

            <div className="container mx-auto">
                <ScrollReveal>
                    <SectionTitle>Experience</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {experiences.map((exp, index) => (
                            <GlassCard key={exp.id} className={`p-8 flex flex-col justify-between ${exp.span}`}>
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                            <p className="text-system-green font-mono text-sm">{exp.company}</p>
                                        </div>
                                        <span className="text-zinc-500 text-xs font-mono border border-white/10 px-2 py-1 rounded bg-black/40">{exp.period}</span>
                                    </div>
                                    <p className="text-zinc-300 mb-6 text-sm leading-relaxed">{exp.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {exp.skills.map(skill => (
                                        <TechBadge key={skill}>{skill}</TechBadge>
                                    ))}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Experience;
