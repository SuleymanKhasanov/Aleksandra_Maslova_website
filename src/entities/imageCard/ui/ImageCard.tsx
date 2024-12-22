import styles from './ImageCard.module.css';
import heroImg from '../assets/img/image.webp';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ImageCard = () => {
  const imageRef = useRef(null);

  useGSAP(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power1.inOut',
        },
      );

      // Блик по изображению
      gsap.fromTo(
        imageRef.current,
        { boxShadow: '0 0 0 rgba(255, 255, 255, 0)' },
        {
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
          duration: 0.5,
          delay: 1.2,
          repeat: 1,
          yoyo: true,
        },
      );
    }
  }, []);

  return (
    <div className={styles.imageCard} ref={imageRef}>
      <img src={heroImg} alt="Hero" />
    </div>
  );
};

export default ImageCard;
