import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RefObject } from 'react';

export const useAnimatePuzzles = (
  imgRefs: RefObject<HTMLImageElement | null>[],
  containerRef: RefObject<HTMLDivElement | null>,
) => {
  useGSAP(() => {
    const elements = imgRefs
      .map((ref) => ref.current)
      .filter(Boolean);

    if (elements.length) {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          x: () => `${(Math.random() * 2 - 1) * 50}vh`,
          y: () => `${(Math.random() * 2 - 1) * 50}vh`,
          rotation: () => `${(Math.random() * 2 - 1) * 360}`,
        },
        {
          opacity: 1,
          x: `0px`,
          y: `0px`,
          stagger: 0.1,
          duration: 0.5,
          ease: 'back.inOut',
          rotation: 0,
        },
      );

      if (containerRef.current) {
        gsap.to(containerRef.current, {
          border: '4px solid #9a95ff',
          delay: 4,
          duration: 1,
          ease: 'back.inOut',
        });
      }
    }
  }, []);
};
