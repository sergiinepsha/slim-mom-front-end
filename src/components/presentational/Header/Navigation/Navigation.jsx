import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import AuthNav from './AuthNav';
import UserNav from './UserNav';
import Btn from './Btn';

import s from './Navigation.module.css';

const Navigation = () => {
   const isToken = useSelector(state => state.authUser.accessToken);
   const [watcher, setWatcher] = useState('');
   const [auth, setAuth] = useState(s.navBar);
   useEffect(() => {
      if (isToken) {
         setAuth(`${s.navBar} ${s.column}`);
         return;
      }
      setWatcher('');
      setAuth(`${s.navBar} ${s.row}`);
      return;
   }, [isToken]);

   return (
      <>
         {isToken && <Btn setWatcher={setWatcher} setAuth={setAuth}></Btn>}

         <nav className={watcher}>
            <ul className={auth}>{isToken ? <UserNav /> : <AuthNav />}</ul>
         </nav>
      </>
   );
};

export default Navigation;
