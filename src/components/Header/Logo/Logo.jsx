import React from 'react';
import Item from '../Navigation/Item/Item';

import s from './Logo.module.css';

const Logo = () => {
   return (
      <div className={s.logoContainer}>
         <Item to={'/'} name={''}>
            <img src="/images/logo.png" alt="logo" className={s.icon} />
            <h1 className={s.logo} value="slim">
               slim
               <span className={s.logoMom}> mom </span>
            </h1>
         </Item>
      </div>
   );
};

export default Logo;
