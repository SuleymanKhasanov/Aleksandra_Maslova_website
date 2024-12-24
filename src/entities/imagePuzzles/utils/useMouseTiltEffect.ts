import { useState, useCallback } from 'react';

interface UseMouseTiltEffectResult {
  transformStyle: string;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: () => void;
}

export const useMouseTiltEffect = (
  ref: React.RefObject<HTMLDivElement>,
  tiltFactor = 10,
  perspective = 500,
): UseMouseTiltEffectResult => {
  const [transformStyle, setTransformStyle] = useState('');

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const { left, top, width, height } =
        ref.current.getBoundingClientRect();

      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;

      const tiltX = (relativeY - 0.5) * tiltFactor;
      const tiltY = (relativeX - 0.5) * -tiltFactor;

      const newTransform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1, 1, 1)`;

      setTransformStyle(newTransform);
    },
    [ref, tiltFactor, perspective],
  );

  const handleMouseLeave = useCallback(() => {
    setTransformStyle('');
  }, []);

  return { transformStyle, handleMouseMove, handleMouseLeave };
};
