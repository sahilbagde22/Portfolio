import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = ({ children, variant = "primary", className, ...props }) => {
    const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-75 flex items-center gap-2 relative overflow-hidden group";

    const variants = {
        primary: "bg-core-red text-white hover:bg-red-500 shadow-[0_0_20px_rgba(255,77,77,0.3)] hover:shadow-[0_0_30px_rgba(255,77,77,0.5)] border border-red-500/20",
        outline: "border border-zinc-300 dark:border-white/10 hover:border-system-green/50 hover:bg-system-green/5 text-zinc-700 dark:text-cyber-text hover:text-system-green",
        ghost: "text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5",
        cyber: "bg-cyber-gray border border-system-green/30 text-system-green hover:bg-system-green/10 shadow-[0_0_10px_rgba(0,255,159,0.1)]",
        success: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] border border-emerald-500/20"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 800, damping: 20 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300" />
            )}
        </motion.button>
    );
};

export default Button;
