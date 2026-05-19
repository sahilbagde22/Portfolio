import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            id: 1,
            school: "Indian Institute of Information Technology, Nagpur",
            degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering (AI & ML)",
            year: "2022 – 2026",
            location: "Nagpur, Maharashtra",
            logoPlaceholder: "IIITN",
            logo: "/projects/iiit.png",
            theme: {
                textColor: "group-hover:text-cyan-400",
                borderColor: "group-hover:border-cyan-400/50",
                iconColor: "text-cyan-400",
                shadowColor: "group-hover:shadow-cyan-400/20",
                motionBorder: "rgba(34, 211, 238, 0.9)",
                motionShadow: "0 0 25px rgba(34, 211, 238, 0.35)"
            }
        },
        {
            id: 2,
            school: "Deogiri Global Academy",
            degree: "School Education",
            year: "Completed",
            location: "Chhatrapati Sambhaji Nagar, Maharashtra",
            logoPlaceholder: "DGA",
            logo: "/projects/deo.jpg",
            theme: {
                textColor: "group-hover:text-purple-400",
                borderColor: "group-hover:border-purple-400/50",
                iconColor: "text-purple-400",
                shadowColor: "group-hover:shadow-purple-400/20",
                motionBorder: "rgba(192, 132, 252, 0.9)",
                motionShadow: "0 0 25px rgba(192, 132, 252, 0.35)"
            }
        }
    ];

    return (
        <section id="education" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <SectionTitle>Education</SectionTitle>
                        <div className="w-24 h-1 bg-gradient-to-r from-core-red to-system-green mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid gap-8 max-w-4xl mx-auto">
                        {educationData.map((edu) => (
                            <GlassCard
                                key={edu.id}
                                className="p-8 flex flex-col md:flex-row items-center gap-8 group transition-colors duration-500"
                                whileHover={{
                                    scale: 1.02,
                                    borderColor: edu.theme.motionBorder,
                                    boxShadow: edu.theme.motionShadow,
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                            >
                                {/* Logo Placeholder - Square with Rounded Corners */}
                                <div className="shrink-0">
                                    {edu.logo ? (
                                        <img
                                            src={edu.logo}
                                            alt={edu.school}
                                            className={`w-24 h-24 rounded-2xl object-cover border border-zinc-200 dark:border-white/10 transition-all duration-300 shadow-lg ${edu.theme.borderColor} ${edu.theme.shadowColor}`}
                                        />
                                    ) : (
                                        <div className={`w-24 h-24 bg-black/5 dark:bg-white/5 rounded-2xl border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 font-bold text-xl transition-all duration-300 shadow-lg ${edu.theme.borderColor} ${edu.theme.textColor} ${edu.theme.shadowColor}`}>
                                            {edu.logoPlaceholder}
                                        </div>
                                    )}
                                </div>

                                <div className="text-center md:text-left flex-grow">
                                    <h3 className={`text-2xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors duration-300 ${edu.theme.textColor}`}>
                                        {edu.school}
                                    </h3>
                                    <p className="text-lg text-zinc-700 dark:text-zinc-200 font-medium mb-3">
                                        {edu.degree}
                                    </p>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-mono text-zinc-600 dark:text-zinc-400">
                                        <div className="flex items-center gap-2 bg-black/5 dark:bg-black/20 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/5">
                                            <Calendar size={14} className="text-system-green" />
                                            <span>{edu.year}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-black/5 dark:bg-black/20 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/5">
                                            <MapPin size={14} className={edu.theme.iconColor} />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Education;
