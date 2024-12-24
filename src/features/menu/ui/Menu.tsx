import { useRef, useState, useEffect } from 'react';
import { menusItems, randomMenuColors } from '../assets/menusItems';
import styles from './Menu.module.css';
import gsap from 'gsap';

const Menu = () => {
  const navigationRef = useRef<HTMLUListElement | null>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]); // Указание типа массива элементов
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    if (!showMenu) {
      const randomColor =
        randomMenuColors[
          Math.floor(Math.random() * randomMenuColors.length)
        ];
      gsap.set(navigationRef.current, {
        backgroundColor: randomColor,
      });
    }
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);

      if (!isMobileView && navigationRef.current) {
        gsap.set(navigationRef.current, { clearProps: 'all' });
        setShowMenu(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && navigationRef.current) {
      if (showMenu) {
        gsap.fromTo(
          navigationRef.current,
          {
            width: '60px',
            height: '60px',
            top: '20px',
            right: '20px',
            padding: 0,
            opacity: 0.5,
            borderRadius: '100%',
          },
          {
            width: '100vw',
            height: '100vh',
            padding: '120px 40px',
            top: 0,
            right: 0,
            opacity: 1,
            borderRadius: '0%',
            duration: 0.5,
            ease: 'back.inOut',
          },
        );

        gsap.fromTo(
          menuItemsRef.current.filter(Boolean), // Исключаем `null` значения
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: 'back.inOut',
          },
        );
      } else {
        gsap.to(navigationRef.current, {
          width: '60px',
          height: '60px',
          padding: 0,
          opacity: 0,
          borderRadius: '100%',
          duration: 0.5,
          ease: 'back.inOut',
        });
      }
    }
  }, [showMenu, isMobile]);

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <a href="#" className={styles.logoLink}>
          Александра <br />
          Маслова
        </a>
        <div className={styles.menu}>
          {isMobile && (
            <button
              className={styles.hamburgerMenu}
              onClick={toggleMenu}
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          )}
          <ul className={styles.navigationList} ref={navigationRef}>
            {menusItems.map((element, i) => (
              <li
                key={i}
                ref={(el) => (menuItemsRef.current[i] = el)} // Указываем элемент списка
              >
                <a href="#" className={styles.navigationListItem}>
                  {element}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
