import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const NeuralBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        if (theme === 'light') {
            // Clear canvas and skip the particle animation loop entirely in light theme
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return () => {
                window.removeEventListener('resize', resizeCanvas);
            };
        }

        const particles = [];
        const particleCount = Math.floor(window.innerWidth / 15); 
        const connectionDistance = 150; 
        const mouseParams = { x: null, y: null, radius: 200 }; 

        const particleColor = theme === 'light' ? '0, 0, 0' : '255, 255, 255';

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5; 
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.color = `rgba(${particleColor}, ${Math.random() * 0.3 + 0.1})`; 
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                if (mouseParams.x != null) {
                    const dx = mouseParams.x - this.x;
                    const dy = mouseParams.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseParams.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseParams.radius - distance) / mouseParams.radius;
                        const directionX = forceDirectionX * force * 0.5; 
                        const directionY = forceDirectionY * force * 0.5;

                        this.vx -= directionX;
                        this.vy -= directionY;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        const opacity = 1 - distance / connectionDistance;
                        ctx.strokeStyle = `rgba(${particleColor}, ${opacity * 0.1})`; 
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseParams.x = e.clientX;
            mouseParams.y = e.clientY;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                mouseParams.x = e.touches[0].clientX;
                mouseParams.y = e.touches[0].clientY;
            }
        };

        const handleTouchStart = (e) => {
            if (e.touches.length > 0) {
                mouseParams.x = e.touches[0].clientX;
                mouseParams.y = e.touches[0].clientY;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchstart', handleTouchStart);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run effect when theme changes

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Light Mode Background */}
            <div className={`absolute inset-0 bg-gradient-to-br from-[#FAF8F2] via-[#FCFAF5] to-[#F7F4EB] transition-opacity duration-700 ease-in-out ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} />
            
            {/* Dark Mode Background */}
            <div className={`absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] transition-opacity duration-700 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />

            <canvas ref={canvasRef} className="absolute inset-0" />

            {/* Light Mode Bottom Fade Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-[#F7F4EB] via-transparent to-transparent transition-opacity duration-700 ease-in-out pointer-events-none ${theme === 'light' ? 'opacity-50' : 'opacity-0'}`} />

            {/* Dark Mode Bottom Fade Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent transition-opacity duration-700 ease-in-out pointer-events-none ${theme === 'dark' ? 'opacity-80' : 'opacity-0'}`} />
        </div>
    );
};

export default NeuralBackground;
