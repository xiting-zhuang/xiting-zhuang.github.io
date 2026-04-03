"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let width = canvas.parentElement!.clientWidth;
    let height = canvas.parentElement!.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = 80;
    const CONNECTION_DIST = 150;
    const MOUSE_DIST = 200;
    const colors = ["#22c55e", "#3b82f6", "#a855f7", "#06b6d4", "#f59e0b"];

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const onResize = () => {
      width = canvas.parentElement!.clientWidth;
      height = canvas.parentElement!.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      for (const p of particles) {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction
        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const distMouse = Math.sqrt(dxm * dxm + dym * dym);
        if (distMouse < MOUSE_DIST) {
          p.vx += dxm * 0.0003;
          p.vy += dym * 0.0003;
        }

        // Speed limit
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.8) {
          p.vx *= 0.8 / speed;
          p.vy *= 0.8 / speed;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        glow.addColorStop(0, p.color + "30");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Mouse connections
        const dxm = mouse.x - particles[i].x;
        const dym = mouse.y - particles[i].y;
        const distM = Math.sqrt(dxm * dxm + dym * dym);
        if (distM < MOUSE_DIST) {
          const opacity = (1 - distM / MOUSE_DIST) * 0.3;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
