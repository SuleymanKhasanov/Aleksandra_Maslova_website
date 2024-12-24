import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useMenuAnimation = (
  isMobile: boolean,
  showMenu: boolean,
  setShowMenu: (value: boolean) => void,
) => {
  const navigationRef = useRef<HTMLUListElement | null>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (isMobile && navigationRef.current) {
      if (showMenu) {
        gsap.fromTo(
          navigationRef.current,
          {
            width: '60px',
            height: '60px',
            top: '20px',
            right: '20px',
            padding: 0,
            opacity: 0.5,
            borderRadius: '100%',
          },
          {
            width: '100vw',
            height: '100vh',
            padding: '120px 40px',
            top: 0,
            right: 0,
            opacity: 1,
            borderRadius: '0%',
            duration: 0.5,
            ease: 'back.inOut',
          },
        );

        gsap.fromTo(
          menuItemsRef.current.filter(Boolean), // Исключаем null
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: 'back.inOut',
          },
        );
      } else {
        gsap.to(navigationRef.current, {
          width: '60px',
          height: '60px',
          padding: 0,
          opacity: 0,
          borderRadius: '100%',
          duration: 0.5,
          ease: 'back.inOut',
        });
      }
    }
  }, [showMenu, isMobile]);

  useEffect(() => {
    if (!isMobile && navigationRef.current) {
      gsap.set(navigationRef.current, { clearProps: 'all' });
      setShowMenu(false);
    }
  }, [isMobile]);

  return { navigationRef, menuItemsRef };
};
