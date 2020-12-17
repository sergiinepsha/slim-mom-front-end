import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Item.module.css';

const Item = ({ to, name, children }) => {
   return (
      <li className={s.item}>
         <NavLink exact to={to} className={s.link} activeClassName={s.activeLink}>
            {name}
            {children}
         </NavLink>
      </li>
   );
};

export default Item;
