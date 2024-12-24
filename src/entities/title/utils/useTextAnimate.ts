import { useEffect } from 'react';
import gsap from 'gsap';
import { MutableRefObject } from 'react';

export const useTextAnimate = (
  wordRefs: MutableRefObject<(HTMLSpanElement | null)[]>,
): void => {
  useEffect(() => {
    if (wordRefs.current.length > 0) {
      gsap.to(wordRefs.current, {
        opacity: 1,
        top: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.inOut',
      });
    }
  }, []);
};
