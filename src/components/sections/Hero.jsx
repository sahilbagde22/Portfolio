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
            <div className="container mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative inline-block mb-8"
                >
                    <div className="border border-core-red/20 bg-core-red/5 backdrop-blur-sm px-6 py-2 rounded-full inline-flex items-center gap-2 text-core-red font-mono text-sm tracking-widest">
                        <span className="w-2 h-2 bg-core-red rounded-full animate-pulse" />
                        AI/ML ENGINEER & CREATIVE DEVELOPER
                    </div>
                </motion.div>

                <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
                    <span className="block">DESIGNING</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-core-red to-red-600">
                        INTELLIGENCE
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
