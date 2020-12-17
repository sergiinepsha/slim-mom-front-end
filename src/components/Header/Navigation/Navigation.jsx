import React from 'react';

import AuthNav from './AuthNav';
import UserNav from './UserNav';

import { nav, navBar } from './Navigation.module.css';

const Navigation = ({ isAuth }) => {
   return (
      <nav className={nav}>
         <ul className={navBar}>{!isAuth ? <UserNav /> : <AuthNav />}</ul>
      </nav>
   );
};

export default Navigation;
