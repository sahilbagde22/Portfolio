import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';

const techStack = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <ScrollReveal>
                    <SectionTitle>Tech Stack</SectionTitle>

                    {/* Full Width GlassCard */}
                    <GlassCard
                        className="max-w-6xl mx-auto p-12 bg-black/20 transition-none"
                        whileHover={{
                            scale: 1.01,
                            borderColor: "rgba(255, 77, 77, 1)",
                            boxShadow: "0 0 30px rgba(255, 77, 77, 0.3)",
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                    >
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center gap-4 group">
                                    <div className="w-24 h-24 flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-system-green hover:bg-system-green/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,159,0.5)]">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-full h-full object-contain transition-all duration-300 drop-shadow-md"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-300 text-center font-mono">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default TechStack;
