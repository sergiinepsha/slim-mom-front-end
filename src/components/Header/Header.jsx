import React from 'react';

// import logoImg from '../../../public/logo.png';
import styles from './Header.module.css';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li> </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Header;
