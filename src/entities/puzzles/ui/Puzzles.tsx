import { useRef, useState } from 'react';
import { puzzlePieces } from '../assets';
import styles from './Puzzles.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Puzzles = () => {
  // Создаем массив для хранения рефов с типом HTMLImageElement
  const imgRefs = Array.from({ length: 40 }, () =>
    useRef<HTMLImageElement | null>(null),
  );

  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      imgRefs.map((ref) => ref.current), // Извлекаем значения current для каждого рефа
      {
        opacity: 0,
        x: () => `${(Math.random() * 2 - 1) * 50}vh`,
        y: () => `${(Math.random() * 2 - 1) * 50}vh`,
        rotation: () => `${(Math.random() * 2 - 1) * 360}`,
      },
      {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.inOut',
        rotation: 0,
      },
    );
    gsap.to(containerRef.current, {
      border: '4px solid #9a95ff',
      delay: 4,
      duration: 1,
      ease: 'back.inOut',
    });
  }, []);

  const [transformStyle, setTransformStyle] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltY = (relativeY - 0.5) * 10;
    const tiltX = (relativeX - 0.5) * -10;

    const newTransform = `perspective(479px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1,1,1)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      <div className={styles.box_1}>
        <img
          src={puzzlePieces.puzzlePiece_0}
          alt="Puzzle Piece 0"
          className={styles.puzzlePiece_0}
          ref={imgRefs[0]}
        />
        <img
          src={puzzlePieces.puzzlePiece_1}
          alt="Puzzle Piece 1"
          className={styles.puzzlePiece_1}
          ref={imgRefs[1]}
        />
        <img
          src={puzzlePieces.puzzlePiece_2}
          alt="Puzzle Piece 2"
          className={styles.puzzlePiece_2}
          ref={imgRefs[2]}
        />
        <img
          src={puzzlePieces.puzzlePiece_3}
          alt="Puzzle Piece 3"
          className={styles.puzzlePiece_3}
          ref={imgRefs[3]}
        />
        <img
          src={puzzlePieces.puzzlePiece_4}
          alt="Puzzle Piece 4"
          className={styles.puzzlePiece_4}
          ref={imgRefs[4]}
        />
        <img
          src={puzzlePieces.puzzlePiece_5}
          alt="Puzzle Piece 5"
          className={styles.puzzlePiece_5}
          ref={imgRefs[5]}
        />
        <img
          src={puzzlePieces.puzzlePiece_6}
          alt="Puzzle Piece 6"
          className={styles.puzzlePiece_6}
          ref={imgRefs[6]}
        />
        <img
          src={puzzlePieces.puzzlePiece_7}
          alt="Puzzle Piece 7"
          className={styles.puzzlePiece_7}
          ref={imgRefs[7]}
        />
      </div>
      <div className={styles.box_2}>
        <img
          src={puzzlePieces.puzzlePiece_8}
          alt="Puzzle Piece 8"
          className={styles.puzzlePiece_8}
          ref={imgRefs[8]}
        />
        <img
          src={puzzlePieces.puzzlePiece_9}
          alt="Puzzle Piece 9"
          className={styles.puzzlePiece_9}
          ref={imgRefs[9]}
        />
        <img
          src={puzzlePieces.puzzlePiece_10}
          alt="Puzzle Piece 10"
          className={styles.puzzlePiece_10}
          ref={imgRefs[10]}
        />
        <img
          src={puzzlePieces.puzzlePiece_11}
          alt="Puzzle Piece 11"
          className={styles.puzzlePiece_11}
          ref={imgRefs[11]}
        />
        <img
          src={puzzlePieces.puzzlePiece_12}
          alt="Puzzle Piece 12"
          className={styles.puzzlePiece_12}
          ref={imgRefs[12]}
        />
        <img
          src={puzzlePieces.puzzlePiece_13}
          alt="Puzzle Piece 13"
          className={styles.puzzlePiece_13}
          ref={imgRefs[13]}
        />
        <img
          src={puzzlePieces.puzzlePiece_14}
          alt="Puzzle Piece 14"
          className={styles.puzzlePiece_14}
          ref={imgRefs[14]}
        />
        <img
          src={puzzlePieces.puzzlePiece_15}
          alt="Puzzle Piece 15"
          className={styles.puzzlePiece_15}
          ref={imgRefs[15]}
        />
      </div>
      <div className={styles.box_3}>
        <img
          src={puzzlePieces.puzzlePiece_16}
          alt="Puzzle Piece 16"
          className={styles.puzzlePiece_16}
          ref={imgRefs[16]}
        />
        <img
          src={puzzlePieces.puzzlePiece_17}
          alt="Puzzle Piece 17"
          className={styles.puzzlePiece_17}
          ref={imgRefs[17]}
        />
        <img
          src={puzzlePieces.puzzlePiece_18}
          alt="Puzzle Piece 18"
          className={styles.puzzlePiece_18}
          ref={imgRefs[18]}
        />
        <img
          src={puzzlePieces.puzzlePiece_19}
          alt="Puzzle Piece 19"
          className={styles.puzzlePiece_19}
          ref={imgRefs[19]}
        />
        <img
          src={puzzlePieces.puzzlePiece_20}
          alt="Puzzle Piece 20"
          className={styles.puzzlePiece_20}
          ref={imgRefs[20]}
        />
        <img
          src={puzzlePieces.puzzlePiece_21}
          alt="Puzzle Piece 21"
          className={styles.puzzlePiece_21}
          ref={imgRefs[21]}
        />
        <img
          src={puzzlePieces.puzzlePiece_22}
          alt="Puzzle Piece 22"
          className={styles.puzzlePiece_22}
          ref={imgRefs[22]}
        />
        <img
          src={puzzlePieces.puzzlePiece_23}
          alt="Puzzle Piece 23"
          className={styles.puzzlePiece_23}
          ref={imgRefs[23]}
        />
      </div>
      <div className={styles.box_4}>
        <img
          src={puzzlePieces.puzzlePiece_24}
          alt="Puzzle Piece 24"
          className={styles.puzzlePiece_24}
          ref={imgRefs[24]}
        />
        <img
          src={puzzlePieces.puzzlePiece_25}
          alt="Puzzle Piece 25"
          className={styles.puzzlePiece_25}
          ref={imgRefs[25]}
        />
        <img
          src={puzzlePieces.puzzlePiece_26}
          alt="Puzzle Piece 26"
          className={styles.puzzlePiece_26}
          ref={imgRefs[26]}
        />
        <img
          src={puzzlePieces.puzzlePiece_27}
          alt="Puzzle Piece 27"
          className={styles.puzzlePiece_27}
          ref={imgRefs[27]}
        />
        <img
          src={puzzlePieces.puzzlePiece_28}
          alt="Puzzle Piece 28"
          className={styles.puzzlePiece_28}
          ref={imgRefs[28]}
        />
        <img
          src={puzzlePieces.puzzlePiece_29}
          alt="Puzzle Piece 29"
          className={styles.puzzlePiece_29}
          ref={imgRefs[29]}
        />
        <img
          src={puzzlePieces.puzzlePiece_30}
          alt="Puzzle Piece 30"
          className={styles.puzzlePiece_30}
          ref={imgRefs[30]}
        />
        <img
          src={puzzlePieces.puzzlePiece_31}
          alt="Puzzle Piece 31"
          className={styles.puzzlePiece_31}
          ref={imgRefs[31]}
        />
      </div>
      <div className={styles.box_5}>
        <img
          src={puzzlePieces.puzzlePiece_32}
          alt="Puzzle Piece 32"
          className={styles.puzzlePiece_32}
          ref={imgRefs[32]}
        />
        <img
          src={puzzlePieces.puzzlePiece_33}
          alt="Puzzle Piece 33"
          className={styles.puzzlePiece_33}
          ref={imgRefs[33]}
        />
        <img
          src={puzzlePieces.puzzlePiece_34}
          alt="Puzzle Piece 34"
          className={styles.puzzlePiece_34}
          ref={imgRefs[34]}
        />
        <img
          src={puzzlePieces.puzzlePiece_35}
          alt="Puzzle Piece 35"
          className={styles.puzzlePiece_35}
          ref={imgRefs[35]}
        />
        <img
          src={puzzlePieces.puzzlePiece_36}
          alt="Puzzle Piece 36"
          className={styles.puzzlePiece_36}
          ref={imgRefs[36]}
        />
        <img
          src={puzzlePieces.puzzlePiece_37}
          alt="Puzzle Piece 37"
          className={styles.puzzlePiece_37}
          ref={imgRefs[37]}
        />
        <img
          src={puzzlePieces.puzzlePiece_38}
          alt="Puzzle Piece 38"
          className={styles.puzzlePiece_38}
          ref={imgRefs[38]}
        />
        <img
          src={puzzlePieces.puzzlePiece_39}
          alt="Puzzle Piece 39"
          className={styles.puzzlePiece_39}
          ref={imgRefs[39]}
        />
      </div>
    </div>
  );
};

export default Puzzles;
