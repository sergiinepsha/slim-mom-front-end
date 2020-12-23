import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

import s from './Header.module.css';

function Header() {
   const isToken = useSelector(state => state.authUser.accessToken);
   const [watcher, setWatcher] = useState('');
   useEffect(() => {
      if (isToken) {
         setWatcher(`${s.header} ${s.color}`);
         return;
      }
      setWatcher(`${s.header}`);
      return;
   }, [isToken]);

   return (
      <header className={watcher}>
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
