import React from 'react';

import { nav, navBar } from './Navigation.module.css';

const Navigation = ({ isAuth }) => {
   return (
      <nav className={nav}>
         <ul className={navBar}></ul>
      </nav>
   );
};

export default Navigation;
