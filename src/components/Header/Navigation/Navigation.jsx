import React, { useState, useEffect } from 'react';

import AuthNav from './AuthNav';
import UserNav from './UserNav';

import s from './Navigation.module.css';

const Navigation = ({ isAuth }) => {
   const [bars, setBars] = useState(false);

   function handlerButton() {
      setBars(!bars);
   }

   return (
      <>
         <nav className={s.nav}>
            <button onClick={() => handlerButton()} className={s.button} />
            <ul className={s.navBar}>{!isAuth ? <UserNav /> : <AuthNav />}</ul>
         </nav>
      </>
   );
};

export default Navigation;
