import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import AuthNav from './AuthNav';
import UserNav from './UserNav';
import Btn from './Btn';

import styles from './Navigation.module.css';
import { useNav } from './NavContext/NavContext';

const Navigation = () => {
   const isAuth = useSelector(state => state.authUser.accessToken);
   const { watch, handlerButton } = useNav();

   const authStyle = cn(styles.navBar, {
      [styles.row]: !isAuth,
      [styles.column]: isAuth,
   });

   const navStyle = cn({
      [styles.nav]: !isAuth,
      [styles.navAuth]: watch && isAuth,
      [styles.headAuth]: !watch && isAuth,
   });

   return (
      <>
         {isAuth && <Btn></Btn>}

         <nav className={navStyle}>
            <ul className={authStyle} onClick={() => handlerButton()}>
               {isAuth ? <UserNav /> : <AuthNav />}
            </ul>
         </nav>
      </>
   );
};

export default Navigation;
