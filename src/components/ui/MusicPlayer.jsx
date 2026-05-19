import React, { useState, useRef } from 'react';
import { Disc3 } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 left-6 md:bottom-24 md:left-auto md:right-6 z-50 flex flex-col items-start md:items-end gap-2">
            {/* The hidden audio element */}
            <audio ref={audioRef} loop>
                <source src="/projects/song.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* The floating button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className={`flex items-center justify-center p-3 rounded-full backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ${
                    isPlaying ? 'bg-core-red/20 border-core-red/50 shadow-[0_0_15px_rgba(255,77,77,0.3)]' : 'bg-black/50 hover:bg-white/10'
                }`}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                <Disc3 
                    className={`w-6 h-6 text-zinc-300 ${isPlaying ? 'animate-[spin_3s_linear_infinite] text-core-red' : ''}`} 
                />
            </motion.button>
            
            {/* Tooltip text */}
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono bg-black/50 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                {isPlaying ? 'Playing BGM' : 'Sound Off'}
            </span>
        </div>
    );
};

export default MusicPlayer;
