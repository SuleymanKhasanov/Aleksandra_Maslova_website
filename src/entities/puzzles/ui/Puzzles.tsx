import React, { useRef } from 'react';
import { puzzleData } from '../utils/puzzleData';
import styles from './Puzzles.module.css';
import { useGSAP } from '@gsap/react';
import { animatePuzzles } from '../utils/animatePuzzles';

const Puzzles = () => {
  const puzzleRefs = useRef(
    puzzleData.reduce((acc, { ref }) => {
      acc[ref] = React.createRef<HTMLImageElement>();
      return acc;
    }, {} as Record<string, React.RefObject<HTMLImageElement>>),
  );

  useGSAP(() => {
    animatePuzzles(puzzleRefs.current);
  }, []);

  return (
    <div className={styles.container}>
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
  );
};

export default Puzzles;
