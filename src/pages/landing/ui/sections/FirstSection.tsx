import { Title } from '@/entities/title';
import styles from './FirstSection.module.css';
import { HeroImage } from '@/widgets/heroImage';

const FirstSection = () => {
  return (
    <div className={styles.container}>
      <Title />
      <HeroImage />
    </div>
  );
};

export default FirstSection;
