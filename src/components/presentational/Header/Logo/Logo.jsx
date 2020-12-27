import React from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../../../redux/auth';
import Item from '../Navigation/Item/Item';

import s from './Logo.module.css';

const Logo = () => {
   const isAuth = useSelector(userSelector.isAuth);

   return (
      <Item to={isAuth ? 'diary' : '/'}>
         <div className={s.logoContainer}>
            <img src="/images/logo.png" alt="logo" className={s.icon} />
            <h1 className={s.logo} value="slim">
               slim
               <span className={s.logoMom}> mom </span>
            </h1>
         </div>
      </Item>
   );
};

export default Logo;
