import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-[#0a0a0a] transition-colors relative z-10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-zinc-600 text-sm font-mono">
                    <span className="text-zinc-500">&copy; {new Date().getFullYear()} Sahil.AI</span> <span className="mx-2">|</span>
                    <span className="text-system-green">System Online</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
