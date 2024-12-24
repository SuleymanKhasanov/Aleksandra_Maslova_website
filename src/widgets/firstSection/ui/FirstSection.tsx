import { Title } from '@/entities/title';
import styles from './FirstSection.module.css';
import { ImagePuzzles } from '@/entities/imagePuzzles';

const FirstSection = () => {
  return (
    <div className={styles.container}>
      <Title />
      <ImagePuzzles />
    </div>
  );
};

export default FirstSection;
