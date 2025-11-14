"use client";
import { useEffect, useRef } from "react";

const FluidCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Linear interpolation
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // Particle system
    const numParticles = 35;
    const particles = Array.from({ length: numParticles }, (_, i) => ({
      x: mouse.x,
      y: mouse.y,
      ox: mouse.x, // origin for soft oscillation
      oy: mouse.y,
      size: Math.random() * 6 + 3,
      hue: Math.random() * 360,
      delay: Math.random() * 0.1 + 0.05,
      angleOffset: Math.random() * Math.PI * 2,
    }));

    const animate = () => {
      // Fade old frames
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Smooth follow
        p.x = lerp(p.x, mouse.x, p.delay);
        p.y = lerp(p.y, mouse.y, p.delay);

        // Soft wobble for fluid effect
        const wobbleX = Math.sin(Date.now() * 0.002 + p.angleOffset) * 5;
        const wobbleY = Math.cos(Date.now() * 0.002 + p.angleOffset) * 5;

        // Draw gradient circle
        const gradient = ctx.createRadialGradient(
          p.x + wobbleX,
          p.y + wobbleY,
          0,
          p.x + wobbleX,
          p.y + wobbleY,
          p.size
        );
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 60%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 90%, 60%, 0.4)`);
        gradient.addColorStop(1, `hsla(${p.hue}, 90%, 60%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x + wobbleX, p.y + wobbleY, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Optional: connect particles with smooth curve
      ctx.beginPath();
      for (let i = 0; i < particles.length - 1; i++) {
        ctx.strokeStyle = `hsla(${particles[i].hue}, 80%, 60%, 0.1)`;
        ctx.lineWidth = 2;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
      }
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed bg-transparent top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default FluidCursor;
