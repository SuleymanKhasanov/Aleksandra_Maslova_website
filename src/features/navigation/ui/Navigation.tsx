import { useState } from 'react';
import { menusItems, randomMenuColors } from '../assets/menusItems';
import styles from './Navigation.module.css';
import gsap from 'gsap';
import { useResponsive } from '../utils/useResponsive';
import { useMenuAnimation } from '../utils/useMenuAnimation';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useResponsive(800);
  const { navigationRef, menuItemsRef } = useMenuAnimation(
    isMobile,
    showMenu,
    setShowMenu,
  );

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
                ref={(el) => (menuItemsRef.current[i] = el)}
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

export default Navigation;
