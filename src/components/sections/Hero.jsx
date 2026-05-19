import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, Code } from 'lucide-react';

const Typewriter = ({ texts, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 3000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = texts[textIndex];

            if (isDeleting) {
                setDisplayText(prev => prev.substring(0, prev.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                setDisplayText(currentFullText.substring(0, displayText.length + 1));
                if (displayText === currentFullText) {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                    return; // Pause before deleting
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return <span>{displayText}</span>;
}

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            <div className="container mx-auto text-center z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center mb-8 gap-6"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-core-red to-system-green shadow-[0_0_30px_rgba(255,77,77,0.2)]"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900 border-4 border-white dark:border-[#0a0a0a]">
                            <img 
                                src="/projects/profile.png" 
                                alt="Profile Avatar" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <div className="border border-core-red/20 bg-core-red/5 backdrop-blur-sm px-6 py-2 rounded-full inline-flex items-center gap-2 text-core-red font-mono text-sm tracking-widest">
                        <span className="w-2 h-2 bg-core-red rounded-full animate-pulse" />
                        SOFTWARE ENGINEER & AI ENTHUSIAST
                    </div>
                </motion.div>

                <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter text-zinc-900 dark:text-white">
                    <span className="block">ENGINEERING</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-core-red to-red-600">
                        INNOVATION
                    </span>
                </h1>

                <div className="h-8 md:h-10 mb-10 text-xl md:text-2xl text-system-green font-mono">
                    <span className="mr-2">&gt;</span>
                    <Typewriter
                        texts={[
                            "Building scalable AI solutions...",
                            "Crafting Clean & Reliable Software..."
                        ]}
                        pauseDuration={2000}
                    />
                    <span className="animate-blink">_</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Work <ArrowRight size={20} />
                    </Button>
                    <Button variant="outline" onClick={() => window.open('/Resume.pdf', '_blank')}>
                        View Resume <Code size={20} />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
