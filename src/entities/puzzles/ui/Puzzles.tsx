import React, { useEffect, useRef, useState } from 'react';
import { puzzleData } from '../utils/puzzleData';
import styles from './Puzzles.module.css';
import heroImg from '../assets/img/image.webp';
import { useGSAP } from '@gsap/react';
import { animatePuzzles } from '../utils/animatePuzzles';
import gsap from 'gsap';

const Puzzles = () => {
  const puzzleRefs = useRef(
    puzzleData.reduce((acc, { ref }) => {
      acc[ref] = React.createRef<HTMLImageElement>();
      return acc;
    }, {} as Record<string, React.RefObject<HTMLImageElement>>),
  );

  const imageRef = useRef(null);
  const hidePuzzleRef = useRef(null);

  const [showImage, setShowImage] = useState(false);

  useGSAP(() => {
    animatePuzzles(puzzleRefs.current);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showImage && imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    }
    if (showImage && hidePuzzleRef.current) {
      gsap.to(hidePuzzleRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [showImage]);

  return (
    <div className={styles.container}>
      <div className={styles.puzzles} ref={hidePuzzleRef}>
        {puzzleData.map(({ ref, src, alt, className }) => (
          <img
            key={ref}
            ref={puzzleRefs.current[ref]}
            src={src}
            alt={alt}
            className={styles[className]}
          />
        ))}
      </div>
      <div className={styles.imageCard} ref={imageRef}>
        <img src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Puzzles;
