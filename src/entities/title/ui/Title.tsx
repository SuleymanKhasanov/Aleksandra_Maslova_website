import { useRef, useEffect } from 'react';
import { textContent } from '../assets/textContent';
import styles from './Title.module.css';
import gsap from 'gsap';

const Title = () => {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.to(wordRefs.current, {
      opacity: 1,
      top: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.inOut',
    });
  }, []);

  return (
    <div className={styles.container}>
      {textContent.map((line, lineIndex) => (
        <div className={styles.textLineContainer} key={lineIndex}>
          {line.map((text) =>
            text.split(' ').map((word, index) => (
              <span
                key={index}
                ref={(el) => wordRefs.current.push(el)}
                className={styles.hiddenWord}
              >
                {word + ' '}
              </span>
            )),
          )}
        </div>
      ))}
    </div>
  );
};

export default Title;
