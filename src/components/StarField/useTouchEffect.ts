import { useState, useEffect } from 'react';

interface TouchEffect {
  active: boolean;
  position: {
    x: number;
    y: number;
    radius: number;
  } | null;
}

export const useTouchEffect = () => {
  const [touchEffect, setTouchEffect] = useState<TouchEffect>({
    active: false,
    position: null
  });

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      setTouchEffect({
        active: true,
        position: {
          x: touch.clientX,
          y: touch.clientY,
          radius: 150 // Initial radius of effect
        }
      });
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      setTouchEffect(prev => ({
        active: true,
        position: {
          x: touch.clientX,
          y: touch.clientY,
          radius: prev.position?.radius || 150
        }
      }));
    };

    const handleTouchEnd = () => {
      setTouchEffect({
        active: false,
        position: null
      });
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return touchEffect;
};