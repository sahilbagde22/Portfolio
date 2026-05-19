import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';
import { Send, Mail, MapPin, Github, Linkedin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('loading');
        setErrorMessage('');

        try {
            // 1. Send via Web3Forms (Simple & Robust)
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "89881c4b-14ea-4343-a04b-d4b0b08b1ea1", // User's Web3Forms Key
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (!result.success) {
                console.error('Web3Forms Error:', result);
                throw new Error(result.message || 'Failed to send email');
            }

            // 2. Save to Supabase (Backup)
            if (supabase) {
                await supabase
                    .from('contact_messages')
                    .insert([
                        {
                            name: formData.name,
                            email: formData.email,
                            message: formData.message,
                            created_at: new Date().toISOString()
                        }
                    ]);
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again later.');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-core-red/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto">
                <ScrollReveal>
                    <SectionTitle>Get In Touch</SectionTitle>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 font-mono">
                                Let's Collaborate
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-300 mb-8 max-w-md">
                                I'm always open to discussing new projects, creative ideas, or collaboration opportunities.
                            </p>

                            <div className="space-y-4 font-mono text-sm">
                                <a href="mailto:study27g@gmail.com" className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 hover:text-system-green dark:hover:text-system-green transition-colors group">
                                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-full border border-zinc-200 dark:border-white/10 text-core-red group-hover:text-system-green group-hover:bg-system-green/10 group-hover:border-system-green transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                                        <Mail size={18} />
                                    </div>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">study27g@gmail.com</span>
                                </a>

                                <div className="flex gap-4 pt-6">
                                    <a
                                        href="https://github.com/sahilbagde22"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 bg-black/5 dark:bg-white/5 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-core-red hover:bg-core-red/10 transition-all duration-300 hover:scale-110 hover:-rotate-12"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/sahilbagade/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 bg-black/5 dark:bg-white/5 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-300 hover:scale-110 hover:-rotate-12"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <GlassCard
                            className="p-8 border-core-red/10 transition-none"
                            whileHover={{
                                scale: 1.01,
                                borderColor: "rgba(255, 77, 77, 0.8)",
                                boxShadow: "0 0 30px rgba(255, 77, 77, 0.25)",
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                        >
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono font-medium text-system-green uppercase">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full bg-black/5 dark:bg-black/40 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-core-red/50 focus:ring-1 focus:ring-core-red/50 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-700 font-mono disabled:opacity-50"
                                        placeholder="Type your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono font-medium text-system-green uppercase">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full bg-black/5 dark:bg-black/40 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-core-red/50 focus:ring-1 focus:ring-core-red/50 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-700 font-mono disabled:opacity-50"
                                        placeholder="Type your email"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono font-medium text-system-green uppercase">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full bg-black/5 dark:bg-black/40 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-core-red/50 focus:ring-1 focus:ring-core-red/50 transition-all min-h-[120px] placeholder:text-zinc-400 dark:placeholder:text-zinc-700 font-mono disabled:opacity-50"
                                        placeholder="Type your message..."
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-400 text-sm font-mono bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                        <AlertCircle size={16} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                {status === 'success' && (
                                    <div className="flex items-center gap-2 text-green-400 text-sm font-mono bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                                        <CheckCircle size={16} />
                                        <span>Message sent successfully!</span>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full justify-center"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? (
                                        <>Sending... <Loader2 size={16} className="animate-spin" /></>
                                    ) : (
                                        <>Send Message <Send size={16} /></>
                                    )}
                                </Button>
                            </form>
                        </GlassCard>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Contact;
