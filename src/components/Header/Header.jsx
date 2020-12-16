import React from 'react';

import Logo from './Logo/Logo';
import Navigation from './Navigation';
import UserInfoBar from './UserInfoBar';

import s from './Header.module.css';

function Header() {
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <Logo />
         </div>
         <div className={s.nav}>
            <Navigation />
         </div>
         <div className={s.info}>
            <UserInfoBar />
         </div>
      </header>
   );
}

export default Header;
