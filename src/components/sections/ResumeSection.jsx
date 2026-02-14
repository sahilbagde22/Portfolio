import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';
import { FileText, Download, Briefcase, Eye } from 'lucide-react';

const ResumeSection = () => {
    return (
        <section id="resume" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <ScrollReveal>
                    <GlassCard
                        className="max-w-4xl mx-auto p-12 text-center border-white/5 bg-gradient-to-br from-cyber-gray/30 to-core-red/5 transition-none"
                        whileHover={{
                            scale: 1.02,
                            borderColor: "rgba(255, 77, 77, 0.7)",
                            boxShadow: "0 0 30px rgba(255, 77, 77, 0.2)",
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="p-5 bg-gradient-to-br from-white/5 to-transparent rounded-full border border-white/10 shadow-lg group-hover:border-core-red/30 transition-all duration-300">
                                <FileText size={48} className="text-zinc-400 group-hover:text-core-red transition-colors duration-300" />
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono tracking-tight">
                            Resume
                        </h2>

                        <p className="text-zinc-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed group-hover:text-white transition-colors duration-300">
                            Explore my professional journey, skills, and featured projects.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10 w-full md:w-auto">
                            <a
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button
                                    variant="cyber"
                                    className="px-8 py-4 text-lg font-bold min-w-[260px] justify-center w-full"
                                >
                                    <Eye size={24} /> View Resume
                                </Button>
                            </a>

                            <a
                                href="/Resume.pdf"
                                download="Sahil_Bagade_Resume.pdf"
                                className="inline-block"
                            >
                                <Button
                                    variant="success"
                                    className="px-8 py-4 text-lg font-bold min-w-[260px] justify-center w-full"
                                >
                                    <Download size={24} /> Download Resume
                                </Button>
                            </a>
                        </div>
                    </GlassCard>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ResumeSection;
