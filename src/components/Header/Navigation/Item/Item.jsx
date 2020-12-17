import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Item.module.css';

const Item = ({ to, name }) => {
   return (
      <li className={s.item}>
         <NavLink exact to={to} className={s.link} activeClassName={s.activeLink}>
            {name}
         </NavLink>
      </li>
   );
};

export default Item;
