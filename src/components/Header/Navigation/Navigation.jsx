import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AuthNav from './AuthNav';
import UserNav from './UserNav';
import Btn from './Btn';

import s from './Navigation.module.css';

const Navigation = () => {
   const isLoading = useSelector(state => state.authUser.loading);
   const [watcher, setWatcher] = useState('');

   return (
      <>
         <Btn setWatcher={setWatcher}></Btn>

         <nav className={watcher}>
            <ul className={s.navBar}>{isLoading ? <UserNav /> : <AuthNav />}</ul>
         </nav>
      </>
   );
};

export default Navigation;
