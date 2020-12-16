import React from 'react';
import { NavLink } from 'react-router-dom';

import { link, activeLink, item } from './AuthNav.module.css';

const AuthNav = () => {
   return (
      <>
         <li className={item}>
            <NavLink exact to={`/login`} className={link} activeClassName={activeLink}>
               Вход
            </NavLink>
         </li>

         <li className={item}>
            <NavLink exact to={`/register`} className={link} activeClassName={activeLink}>
               Регистрация
            </NavLink>
         </li>
      </>
   );
};

export default AuthNav;
