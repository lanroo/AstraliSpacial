import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { StarPoint } from './Star';
import { useMousePosition } from './useMousePosition';
import { useTouchEffect } from './useTouchEffect';

interface StarFieldProps {
  interactive?: boolean;
}

export const StarField = ({ interactive = false }: StarFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<StarPoint[]>([]);
  const mousePosition = useMousePosition();
  const touchEffect = useTouchEffect();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setDimensions({ width: canvas.width, height: canvas.height });

      // Create more stars for larger screens
      const starCount = Math.min(1000, Math.floor((canvas.width * canvas.height) / 3000));
      starsRef.current = Array.from({ length: starCount }, () => 
        new StarPoint(canvas.width, canvas.height)
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 8, 23, 0.1)'; // Reduced opacity for better trail effect
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      starsRef.current.forEach(star => {
        if (interactive) {
          star.update(
            mousePosition.x, 
            mousePosition.y, 
            dimensions.width, 
            dimensions.height,
            touchEffect.active ? touchEffect.position : null
          );
        }
        star.draw(ctx, dimensions.width, dimensions.height);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, interactive, mousePosition, touchEffect]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};