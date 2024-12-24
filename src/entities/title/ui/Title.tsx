import { useRef } from 'react';
import { textContent } from '../assets/textContent';
import { seoKeywords } from '../assets/textContent';
import styles from './Title.module.css';
import { getRandomKeywords } from '../utils/getRandomKeywords';
import { useTextAnimate } from '../utils/useTextAnimate';

const Title = () => {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useTextAnimate(wordRefs);

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
