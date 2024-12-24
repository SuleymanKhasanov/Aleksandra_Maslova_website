import { useState, useEffect } from 'react';

export const useResponsive = (breakpoint: number): boolean => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= breakpoint,
  );

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth <= breakpoint);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};
