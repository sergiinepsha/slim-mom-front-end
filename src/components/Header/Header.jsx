import React from 'react';

import Navigation from './Navigation';

import Logo from './Logo/Logo';

import styles from './Header.module.css';

function Header() {
   return (
      <header className={styles.nav}>
         <Logo />
         <Navigation />
      </header>
   );
}

export default Header;
