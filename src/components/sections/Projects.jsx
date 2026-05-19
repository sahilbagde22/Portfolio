import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import TechBadge from '../ui/TechBadge';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { ExternalLink, Github, Database, Layers, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const colorVariants = {
    "system-green": {
        text: "text-system-green",
        bg: "bg-system-green/10",
        border: "border-system-green/20",
        hoverBg: "hover:bg-system-green/10",
        shadow: "hover:shadow-[0_0_30px_rgba(0,255,159,0.2)]",
        glowColor: "rgba(0, 255, 159, 0.8)"
    },
    "blue-500": {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        hoverBg: "hover:bg-blue-500/10",
        shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
        glowColor: "rgba(59, 130, 246, 0.8)"
    },
    "core-red": {
        text: "text-core-red",
        bg: "bg-core-red/10",
        border: "border-core-red/20",
        hoverBg: "hover:bg-core-red/10",
        shadow: "hover:shadow-[0_0_30px_rgba(255,77,77,0.2)]",
        glowColor: "rgba(255, 77, 77, 0.8)"
    },
    "purple-500": {
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        hoverBg: "hover:bg-purple-500/10",
        shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
        glowColor: "rgba(168, 85, 247, 0.8)"
    }
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <ScrollReveal>
                    <SectionTitle>Featured Projects</SectionTitle>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                    {projects.map((project, index) => {
                        const theme = colorVariants[project.color] || colorVariants["system-green"];
                        return (
                            <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1500} scale={1.02} className="h-full">
                                    <GlassCard
                                        className={`flex flex-col h-full group transition-none border-zinc-200 dark:border-white/5 ${theme.shadow} ${theme.hoverBg} relative overflow-hidden`}
                                        whileHover={{
                                            borderColor: theme.glowColor,
                                            transition: { duration: 0.2, ease: "easeOut" }
                                        }}
                                    >
                                        {project.image && (
                                            <div className="absolute inset-0 z-0">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover opacity-20 dark:opacity-40 group-hover:opacity-40 dark:group-hover:opacity-80 transition-all duration-500 group-hover:scale-110"
                                                />
                                                <div className={`absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-white/40 dark:from-black/90 dark:via-black/70 dark:to-black/40 group-hover:from-white/80 group-hover:via-white/40 dark:group-hover:from-black/80 dark:group-hover:via-black/40 group-hover:to-transparent transition-all duration-500`} />
                                            </div>
                                        )}
                                        <div className="p-8 flex flex-col h-full relative z-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className={`p-3 rounded-lg ${theme.bg} ${theme.text} ${theme.border} border transition-colors`}>
                                                    {index % 2 === 0 ? <Database size={24} /> : <Layers size={24} />}
                                                </div>
                                                <div className="flex gap-2">
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className={`p-3 rounded-xl bg-white/80 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 border border-zinc-200 dark:border-white/10 ${theme.hoverBorder} transition-all duration-300 group/icon backdrop-blur-md hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--${project.color}-rgb),0.5)]`}
                                                    >
                                                        <Github size={22} className={`text-zinc-600 dark:text-zinc-400 group-hover/icon:${theme.text} transition-colors duration-300`} />
                                                    </a>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                                                {project.title}
                                            </h3>

                                            <p className="text-zinc-600 dark:text-zinc-300 mb-6 flex-grow leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-200 dark:border-white/5">
                                                {project.tech.map(tech => (
                                                    <TechBadge key={tech}>{tech}</TechBadge>
                                                ))}
                                            </div>
                                        </div>
                                    </GlassCard>
                                </Tilt>
                            </ScrollReveal>
                        );
                    })}
                </div>

                <ScrollReveal>
                    <div className="flex justify-center">
                        <Button
                            variant="outline"
                            onClick={() => window.open('https://github.com/sahilbagde22', '_blank')}
                            className="group"
                        >
                            View More on GitHub <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Projects;
