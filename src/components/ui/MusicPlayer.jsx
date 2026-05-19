import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Set default volume on mount
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
        }
    }, []);

    const togglePlay = async () => {
        if (!audioRef.current) return;
        
        try {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.volume = 0.4;
                await audioRef.current.play();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error("Audio playback failed:", error);
            // Keep state as false if browser blocks autoplay
            setIsPlaying(false);
        }
    };

    return (
        <div className="fixed bottom-6 left-6 md:bottom-24 md:left-auto md:right-6 z-50 flex flex-col items-center">
            {/* The hidden audio element with direct src and preload */}
            <audio ref={audioRef} src="/projects/song.mp3" loop preload="auto" />

            {/* The floating button shaped like a vinyl record */}
            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="relative flex items-center justify-center w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 shadow-2xl focus:outline-none focus:ring-2 focus:ring-core-red/50 cursor-pointer overflow-hidden"
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {/* Vinyl record texture & grooves that spin */}
                <div 
                    className={`absolute inset-0 rounded-full transition-transform duration-[6000ms] linear ${
                        isPlaying ? 'animate-[spin_6s_linear_infinite]' : ''
                    }`}
                    style={{
                        background: 'radial-gradient(circle, #27272a 10%, #18181b 11%, #18181b 30%, #09090b 31%, #09090b 55%, #020202 56%)'
                    }}
                >
                    {/* Concentric groove lines */}
                    <div className="absolute inset-2 rounded-full border border-zinc-800/30"></div>
                    <div className="absolute inset-4 rounded-full border border-zinc-900/60"></div>
                    <div className="absolute inset-6 rounded-full border border-black/80"></div>
                    
                    {/* Stylized vinyl reflection sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/5 to-transparent rotate-45 pointer-events-none"></div>
                </div>

                {/* Non-spinning Center label containing the sound icon and status text */}
                <div className={`absolute z-10 flex flex-col items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
                    isPlaying 
                        ? 'bg-system-green text-zinc-950 shadow-[0_0_12px_rgba(0,255,159,0.6)]' 
                        : 'bg-core-red text-white shadow-[0_0_12px_rgba(255,77,77,0.6)]'
                }`}>
                    {isPlaying ? (
                        <Volume2 size={16} className="text-zinc-950 stroke-[2.5]" />
                    ) : (
                        <VolumeX size={16} className="text-white stroke-[2.5]" />
                    )}
                    <span className="text-[8px] font-black tracking-wider leading-none mt-0.5 font-mono">
                        {isPlaying ? 'ON' : 'OFF'}
                    </span>
                </div>
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
