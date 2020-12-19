import React from 'react';
import Item from '../Navigation/Item/Item';

import s from './Logo.module.css';

const Logo = () => {
   return (
      <Item to={'/'}>
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
