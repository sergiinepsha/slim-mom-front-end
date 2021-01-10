import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import styles from './Item.module.css';

const Item = ({ to, name, children }) => {
   const isAuth = useSelector(state => state.authUser.accessToken);

   const authStyle = cn(styles.link, {
      [styles.bars]: isAuth,
   });

   return (
      <li className={styles.item}>
         <NavLink exact to={to} className={authStyle} activeClassName={styles.activeLink}>
            {name}
            {children}
         </NavLink>
      </li>
   );
};

export default Item;
