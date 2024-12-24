import { Title } from '@/entities/title';
import styles from './FirstSection.module.css';
import { Puzzles } from '@/entities/puzzles';

const FirstSection = () => {
  return (
    <div className={styles.container}>
      <Title />
      <Puzzles />
    </div>
  );
};

export default FirstSection;
