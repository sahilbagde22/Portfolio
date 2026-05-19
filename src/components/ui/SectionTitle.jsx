import React from 'react';
import { cn } from '../../lib/utils';


const SectionTitle = ({ children, className }) => {
    return (
        <div className={cn("mb-12 text-center", className)}>
            <div className="inline-flex flex-col items-center gap-4 group">
                <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white inline-flex items-center gap-3 justify-center transition-colors duration-500">
                    <span className="text-core-red">&gt;</span>
                    <span className="relative z-10">{children}</span>
                    <span className="text-core-red">&lt;/&gt;</span>
                </h2>
                <div className="w-full h-1 bg-core-red rounded-full" />
            </div>
        </div>
    );
};

export default SectionTitle;
