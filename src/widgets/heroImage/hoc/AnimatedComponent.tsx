import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

type AnimatedComponentProps = {
  delay?: number;
  onComplete?: () => void; // Коллбек, если нужен
};

export const withAnimation = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P & AnimatedComponentProps> => {
  return ({ delay = 0, onComplete, ...props }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay,
            ease: 'power2.out',
            onComplete: () => {
              setIsVisible(true);
              if (onComplete) onComplete();
            },
          },
        );
      }
    }, [delay, onComplete]);

    return (
      <div ref={containerRef} style={{ opacity: 0 }}>
        {isVisible && <WrappedComponent {...(props as P)} />}
      </div>
    );
  };
};
