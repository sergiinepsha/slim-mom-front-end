import React from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

import s from './Header.module.css';

function Header() {
   return (
      <header className={s.header}>
         <div className={s.main}>
            <div className={s.logo}>
               <Logo />
            </div>
            <div className={s.nav}>
               <Navigation />
            </div>
         </div>

         <div className={s.info}>
            <UserMenu />
         </div>
      </header>
   );
}

export default Header;
