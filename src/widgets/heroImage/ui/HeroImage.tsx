import { useEffect, useState } from 'react';
import { ImageCard } from '@/entities/imageCard';
import { Puzzles } from '@/entities/puzzles';
import styles from './HeroImage.module.css';

const HeroImage = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {!showImage && <Puzzles />}
      {showImage && <ImageCard />}
    </div>
  );
};

export default HeroImage;
