import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className, ...props }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.01,
                transition: { type: "spring", stiffness: 120, damping: 20, mass: 1 }
            }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "backdrop-blur-xl bg-white/60 dark:bg-cyber-gray/30 border border-zinc-200 dark:border-white/5 rounded-2xl shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-core-red/10 transition-colors duration-500 relative overflow-hidden group will-change-transform",
                className
            )}
            {...props}
        >
            {/* Selection Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            {children}
        </motion.div>
    );
};

export default GlassCard;
