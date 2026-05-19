import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Terminal, Bot, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Navbar = ({ onOpenChat }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/5' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-zinc-900 dark:text-white transition-colors duration-500">
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
                            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors duration-500 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-core-red transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
 
                    <button
                        onClick={onOpenChat}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-core-red/50 hover:bg-core-red/10 transition-all duration-500 group"
                    >
                        <Bot size={16} className="text-core-red group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-white">AI Chat</span>
                    </button>
 
                    <div className="flex items-center gap-4 pl-4 border-l border-zinc-200 dark:border-white/10 transition-colors duration-500">
                        <button onClick={toggleTheme} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-500">
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <a href="https://github.com/sahilbagde22" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-500"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/sahilbagade/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-500"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-zinc-900 dark:text-white flex items-center gap-4" onClick={() => setIsOpen(!isOpen)}>
                    <button onClick={(e) => { e.stopPropagation(); toggleTheme(); }} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mr-2">
                        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                    </button>
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
                        className="md:hidden bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.target}
                                    rel={link.rel}
                                    className="text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-6 mt-4 pt-4 border-t border-zinc-200 dark:border-white/10">
                                <a href="https://github.com/sahilbagde22" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/sahilbagade/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"><Linkedin size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
