import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-core-red opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-75 select-none">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-system-green opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-75 delay-0 select-none">
                {text}
            </span>
        </div>
    );
};

export default GlitchText;
