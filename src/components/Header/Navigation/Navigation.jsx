import React from 'react';

import AuthNav from './AuthNav';

import { nav, navBar } from './Navigation.module.css';

const Navigation = ({ isAuth }) => {
   return (
      <nav className={nav}>
         <ul className={navBar}>{isAuth ? <p></p> : <AuthNav />}</ul>
      </nav>
   );
};

export default Navigation;
