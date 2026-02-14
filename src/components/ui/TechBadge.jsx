import React from 'react';
import { cn } from '../../lib/utils';

const techColors = {
    // Aircraft Semantic Segmentation Tech Stack
    "Python": "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.1)]",
    "TensorFlow": "text-orange-400 bg-orange-500/10 border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.1)]",
    "U-Net": "text-teal-400 bg-teal-500/10 border-teal-500/20 hover:bg-teal-500/20 hover:border-teal-500/40 shadow-[0_0_10px_rgba(45,212,191,0.1)]",
    "OpenCV": "text-green-400 bg-green-500/10 border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 shadow-[0_0_10px_rgba(74,222,128,0.1)]",
    "Pillow (PIL)": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20 hover:bg-yellow-500/20 hover:border-yellow-500/40 shadow-[0_0_10px_rgba(250,204,21,0.1)]",
    "XML Parsing (ElementTree)": "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-500/40 shadow-[0_0_10px_rgba(129,140,248,0.1)]",

    // Oil Spill Detection Tech Stack
    "Keras": "text-red-400 bg-red-500/10 border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 shadow-[0_0_10px_rgba(248,113,113,0.1)]",
    "ResNet50": "text-purple-400 bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.1)]",
    "Segmentation Models": "text-pink-400 bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20 hover:border-pink-500/40 shadow-[0_0_10px_rgba(244,114,182,0.1)]",
    "NumPy": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.1)]",

    // Predictive Maintenance Tech Stack
    "PyTorch": "text-orange-500 bg-orange-600/10 border-orange-600/20 hover:bg-orange-600/20 hover:border-orange-600/40 shadow-[0_0_10px_rgba(234,88,12,0.1)]",
    "OpenAI Gym": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40 shadow-[0_0_10px_rgba(52,211,153,0.1)]",
    "Deep Q-Network (DQN)": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.1)]",
    "Reinforcement Learning": "text-violet-400 bg-violet-500/10 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-500/40 shadow-[0_0_10px_rgba(167,139,250,0.1)]",

    // Tuberculosis Detection Tech Stack
    "Vision Transformer (ViT)": "text-sky-400 bg-sky-500/10 border-sky-500/20 hover:bg-sky-500/20 hover:border-sky-500/40 shadow-[0_0_10px_rgba(56,189,248,0.1)]",
    "DenseNet": "text-teal-400 bg-teal-500/10 border-teal-500/20 hover:bg-teal-500/20 hover:border-teal-500/40 shadow-[0_0_10px_rgba(45,212,191,0.1)]",
    "Grad-CAM": "text-amber-400 bg-amber-500/10 border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/40 shadow-[0_0_10px_rgba(251,191,36,0.1)]",
    "Medical AI": "text-rose-400 bg-rose-500/10 border-rose-500/20 hover:bg-rose-500/20 hover:border-rose-500/40 shadow-[0_0_10px_rgba(251,113,133,0.1)]",

    // About Section Tech Stack
    "JavaScript": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20 hover:bg-yellow-500/20 hover:border-yellow-500/40 shadow-[0_0_10px_rgba(250,204,21,0.1)]",
    "SQL": "text-orange-400 bg-orange-500/10 border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40 shadow-[0_0_10px_rgba(251,146,60,0.1)]",
    "Docker": "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 shadow-[0_0_10px_rgba(96,165,250,0.1)]",
    "Next.js": "text-zinc-400 bg-zinc-500/10 border-zinc-500/20 hover:bg-zinc-500/20 hover:border-zinc-500/40 shadow-[0_0_10px_rgba(161,161,170,0.1)]",
    "NLP": "text-pink-400 bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20 hover:border-pink-500/40 shadow-[0_0_10px_rgba(244,114,182,0.1)]",
    "RL": "text-violet-400 bg-violet-500/10 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-500/40 shadow-[0_0_10px_rgba(167,139,250,0.1)]",

    // Default fallback (System Green)
    "default": "px-3 py-1 rounded-md text-xs font-mono font-medium bg-system-green/5 border border-system-green/20 text-system-green hover:bg-system-green/10 hover:border-system-green/40 transition-colors duration-100 cursor-default whitespace-nowrap shadow-[0_0_10px_rgba(0,255,159,0.05)]"
};

const TechBadge = ({ children, className }) => {
    // Only apply specific colors if standard base classes aren't overridden? 
    // We'll trust the map has complete classes for color variants.
    const colorClass = techColors[children] || techColors["default"];

    // If it's a known color, we need to ensure base layout classes (px-3 py-1 etc) are present if not in the map string.
    // The map strings above for specific colors don't have px-3 py-1. Let's fix that.
    const baseClasses = "px-3 py-1 rounded-md text-xs font-mono font-medium transition-colors duration-300 cursor-default whitespace-nowrap";

    // Adjust logic:
    // If found in map, append base classes.
    // If default, use the full default string (which includes base classes + green).

    const isCustom = !!techColors[children];
    const finalClass = isCustom
        ? cn(baseClasses, colorClass, className)
        : cn(techColors["default"], className); // Default string already has base classes

    return (
        <span className={finalClass}>
            {children}
        </span>
    );
};

export default TechBadge;
