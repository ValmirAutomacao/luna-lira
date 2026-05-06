import React, { useEffect, useRef } from 'react';

const ParticleNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        // Adjust for scroll position if it were absolute, 
        // but since canvas is fixed inset-0, clientX/Y is correct.
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slower, more hypnotic movement
        this.vx = (Math.random() - 0.5) * 0.2; 
        this.vy = (Math.random() - 0.5) * 0.2;
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseAlpha = Math.random() * 0.5 + 0.3;
        
        if (prefersReducedMotion) {
           this.vx = 0;
           this.vy = 0;
        }
      }

      update() {
        if (!prefersReducedMotion) {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > width) this.vx = -this.vx;
          if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 183, 106, ${this.baseAlpha})`; // #D8B76A
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth <= 768;
      // Adjust density
      const density = isMobile ? 30000 : 15000; 
      let numberOfParticles = Math.floor((width * height) / density);
      
      // Cap maximum particles for performance
      if (numberOfParticles > 150) numberOfParticles = 150;
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            const opacity = 0.15 - (distance / 100) * 0.15;
            ctx.strokeStyle = `rgba(216, 183, 106, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect particles to mouse
        if (window.innerWidth > 768) {
          const dxMouse = particles[i].x - mouse.x;
          const dyMouse = particles[i].y - mouse.y;
          const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distanceMouse < mouse.radius) {
            ctx.beginPath();
            const opacity = 0.35 - (distanceMouse / mouse.radius) * 0.35;
            ctx.strokeStyle = `rgba(244, 227, 178, ${opacity})`; // #F4E3B2
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            
            // Interaction: slightly pull towards mouse (optional, simple logic)
            if (!prefersReducedMotion && distanceMouse > 50) {
               // A very gentle pull
               particles[i].x -= dxMouse * 0.005;
               particles[i].y -= dyMouse * 0.005;
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize(); 
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
};

export default ParticleNetworkBackground;
