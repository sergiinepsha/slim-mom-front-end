import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import AuthNav from './AuthNav';
import UserNav from './UserNav';
import Btn from './Btn';

import styles from './Navigation.module.css';

const Navigation = () => {
   const isAuth = useSelector(state => state.authUser.accessToken);
   const [watcher, setWatcher] = useState('');

   const authStyle = cn(styles.navBar, {
      [styles.row]: !isAuth,
      [styles.column]: isAuth,
   });

   const navStyle = cn({
      [styles.nav]: !isAuth,
      [styles.navAuth]: watcher && isAuth,
      [styles.headAuth]: !watcher && isAuth,
   });

   return (
      <>
         {isAuth && <Btn setWatcher={setWatcher}></Btn>}

         <nav className={navStyle}>
            <ul className={authStyle}>{isAuth ? <UserNav /> : <AuthNav />}</ul>
         </nav>
      </>
   );
};

export default Navigation;
