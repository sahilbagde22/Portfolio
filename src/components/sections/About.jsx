import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import TechBadge from '../ui/TechBadge';
import { Brain, Code } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <SectionTitle>About Me</SectionTitle>
                        <p className="text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
                            My name is <span className="text-zinc-900 dark:text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Sahil Jagdish Bagade</span>, a Computer Science (AIML) student at <span className="text-zinc-900 dark:text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">IIIT Nagpur</span> with interests in AI/ML, web development, and software engineering. I enjoy building practical, end-to-end solutions and exploring new technologies. I’m also deeply curious about space and love learning anything fascinating about the universe 🪐.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-core-red to-system-green mx-auto mt-8 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Software Development Card */}
                        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} transitionSpeed={1500} scale={1.02} className="h-full">
                            <GlassCard
                                className="p-8 md:p-12 flex flex-col h-full group transition-colors duration-500 relative overflow-hidden"
                                whileHover={{
                                    borderColor: "rgba(255, 77, 77, 0.8)",
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                            >
                                <div className="absolute inset-0 -z-10">
                                    <img 
                                        src="/projects/software_bg.png" 
                                        alt="" 
                                        className="w-full h-full object-cover opacity-20 dark:opacity-35 group-hover:opacity-45 dark:group-hover:opacity-75 transition-all duration-500 group-hover:scale-110 filter brightness-110 dark:brightness-125" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/30 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/75 dark:to-transparent group-hover:via-white/50 dark:group-hover:via-[#0a0a0a]/50 transition-all duration-500" />
                                </div>
                                <div className="mb-6 w-14 h-14 bg-core-red/10 rounded-2xl flex items-center justify-center border border-core-red/20 group-hover:border-core-red/50 transition-colors">
                                    <Code className="text-core-red" size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-core-red transition-colors">
                                    Software Development
                                </h3>

                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                                    I build scalable and reliable software systems with a focus on clean architecture and performance. My tech stack includes Python, JavaScript, SQL, Docker, and modern frameworks for web and backend development.
                                </p>

                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 flex-grow">
                                    I enjoy designing systems that are maintainable, efficient, and ready to grow with real-world users.
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {['Python', 'JavaScript', 'SQL', 'Docker', 'Next.js'].map(tech => (
                                        <TechBadge key={tech}>{tech}</TechBadge>
                                    ))}
                                </div>
                            </GlassCard>
                        </Tilt>

                        {/* AI/ML Card */}
                        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} transitionSpeed={1500} scale={1.02} className="h-full">
                            <GlassCard
                                className="p-8 md:p-12 flex flex-col h-full group transition-colors duration-500 relative overflow-hidden"
                                whileHover={{
                                    borderColor: "rgba(0, 255, 159, 0.8)",
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                            >
                                <div className="absolute inset-0 -z-10">
                                    <img 
                                        src="/projects/ai_bg.png" 
                                        alt="" 
                                        className="w-full h-full object-cover opacity-20 dark:opacity-35 group-hover:opacity-45 dark:group-hover:opacity-75 transition-all duration-500 group-hover:scale-110 filter brightness-110 dark:brightness-125" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/30 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/75 dark:to-transparent group-hover:via-white/50 dark:group-hover:via-[#0a0a0a]/50 transition-all duration-500" />
                                </div>
                                <div className="mb-6 w-14 h-14 bg-system-green/10 rounded-2xl flex items-center justify-center border border-system-green/20 group-hover:border-system-green/50 transition-colors">
                                    <Brain className="text-system-green" size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-system-green transition-colors">
                                    AI & Machine Learning
                                </h3>

                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                                    As an AI enthusiast, I specialize in creating intelligent systems that learn and adapt. My work spans from deep learning research to deploying optimized models for practical applications.
                                </p>

                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 flex-grow">
                                    I use PyTorch, TensorFlow to build practical solutions in computer vision, NLP, and reinforcement learning.
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {['PyTorch', 'TensorFlow', 'OpenCV', 'NLP', 'RL'].map(tech => (
                                        <TechBadge key={tech}>{tech}</TechBadge>
                                    ))}
                                </div>
                            </GlassCard>
                        </Tilt>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default About;
