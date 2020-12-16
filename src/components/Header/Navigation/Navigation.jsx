import React from 'react';
import { NavLink } from 'react-router-dom';

import { link, activeLink, nav, navBar } from './Navigation.module.css';
const Navigation = ({ isAuth }) => {
   return (
      <nav className={nav}>
         <ul className={navBar}>
            <li>
               <NavLink exact to={`/`} className={link} activeClassName={activeLink}>
                  вход
               </NavLink>{' '}
            </li>
            <li>
               <NavLink exact to={`/`} className={link} activeClassName={activeLink}>
                  регистрация
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
