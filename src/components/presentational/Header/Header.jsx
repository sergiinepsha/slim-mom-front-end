import React from 'react';

import { useSelector } from 'react-redux';
import cn from 'classnames';

import { NavProvider } from './Navigation/NavContext/NavContext';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

import styles from './Header.module.css';

function Header() {
   const isAuth = useSelector(state => state.authUser.accessToken);
   const headerStyle = cn(styles.header, { [styles.color]: isAuth });

   return (
      <header className={headerStyle}>
         <div className={styles.main}>
            <div className={styles.logo}>
               <Logo />
            </div>
            <NavProvider>
               <div className={styles.nav}>
                  <Navigation />
               </div>
            </NavProvider>
         </div>

         <div className={styles.info}>
            <UserMenu />
         </div>
      </header>
   );
}

export default Header;
