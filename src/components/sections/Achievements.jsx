import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import { Trophy, Mic, Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <SectionTitle>Achievements & Recognition</SectionTitle>
                        <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mt-4 text-lg">
                            Highlights of my journey in competitions and leadership roles.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-core-red to-system-green mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Competition Winner Card */}
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1500} scale={1.02} className="h-full">
                            <GlassCard
                                className="p-8 md:p-10 flex flex-col items-center text-center h-full group transition-colors duration-500 relative overflow-hidden"
                                whileHover={{
                                    borderColor: "rgba(234, 179, 8, 0.8)",
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                            >
                                <div className="absolute inset-0 -z-10">
                                    <img src="/projects/certi.png" alt="" className="w-full h-full object-cover opacity-5 dark:opacity-10 group-hover:opacity-40 dark:group-hover:opacity-60 transition-all duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/80 to-transparent group-hover:via-white/60 dark:group-hover:via-black/60 transition-all duration-500" />
                                </div>
                                <div className="mb-6 w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20 group-hover:border-yellow-500/50 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                                    <Trophy className="text-yellow-500" size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                                    Optimized Odyssey Awardee
                                </h3>

                                <p className="text-sm font-mono text-zinc-600 dark:text-zinc-400 mb-4 border border-zinc-200 dark:border-white/10 px-3 py-1 rounded-full bg-black/5 dark:bg-black/20">
                                    National-level Business Case Study
                                </p>

                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                    Awarded at E-Summit, IIIT Nagpur for presenting an innovative and optimized business solution.
                                </p>
                            </GlassCard>
                        </Tilt>

                        {/* Leadership Role Card */}
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1500} scale={1.02} className="h-full">
                            <GlassCard
                                className="p-8 md:p-10 flex flex-col items-center text-center h-full group transition-colors duration-500 relative overflow-hidden"
                                whileHover={{
                                    borderColor: "rgba(168, 85, 247, 0.8)",
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                            >
                                <div className="absolute inset-0 -z-10">
                                    <img src="/projects/tf.png" alt="" className="w-full h-full object-cover opacity-5 dark:opacity-10 group-hover:opacity-40 dark:group-hover:opacity-60 transition-all duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/80 to-transparent group-hover:via-white/60 dark:group-hover:via-black/60 transition-all duration-500" />
                                </div>
                                <div className="mb-6 w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                                    <Mic className="text-purple-500" size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    Senior Coordinator
                                </h3>

                                <p className="text-sm font-mono text-zinc-600 dark:text-zinc-400 mb-4 border border-zinc-200 dark:border-white/10 px-3 py-1 rounded-full bg-black/5 dark:bg-black/20">
                                    Tantrafiesta – IIITN Technical Fest
                                </p>

                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                    Led the Content & Anchoring team, managing event narratives and stage presence for Central India's largest technical fest.
                                </p>
                            </GlassCard>
                        </Tilt>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Achievements;
