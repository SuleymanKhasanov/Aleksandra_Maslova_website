import { useRef, useEffect } from 'react';
import { textContent } from '../assets/textContent';
import { seoKeywords } from '../assets/textContent';
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

  const getRandomKeywords = (
    keywords: string[],
    count: number,
  ): string[] => {
    const shuffled = [...keywords].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const randomKeywords = getRandomKeywords(seoKeywords, 2);

  return (
    <div className={styles.container}>
      <div className={styles.keyWords}>
        {randomKeywords.map((keyword, index) => (
          <h1 key={index} className={styles.tags}>
            #{keyword}
            {index < randomKeywords.length - 1 ? ' ' : ''}
          </h1>
        ))}
      </div>

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
