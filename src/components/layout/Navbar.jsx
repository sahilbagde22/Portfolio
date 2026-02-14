import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Terminal, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onOpenChat }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
                    <Terminal size={20} className="text-core-red" />
                    <span>SAHIL<span className="text-zinc-500">.AI</span></span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.target}
                            rel={link.rel}
                            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-core-red transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <button
                        onClick={onOpenChat}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-core-red/50 hover:bg-core-red/10 transition-all duration-300 group"
                    >
                        <Bot size={16} className="text-core-red group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white">AI Chat</span>
                    </button>

                    <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                        <a href="https://github.com/sahilbagde22" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/sahilbagade/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.target}
                                    rel={link.rel}
                                    className="text-lg font-medium text-zinc-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
                                <a href="https://github.com/sahilbagde22" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/sahilbagade/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white"><Linkedin size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
