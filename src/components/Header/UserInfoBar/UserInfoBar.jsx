import React from 'react';

import s from './UserInfoBar.module.css';

const AuthNav = ({ isAuth }) => {
   return (
      <>
         <div className={s.item}>
            {!isAuth ? (
               <>
                  <p className={s.name}>Nic</p>
                  <button className={s.button}>Bыход</button>
               </>
            ) : (
               <>
                  <button className={s.button}>Bxод</button>
               </>
            )}
         </div>
      </>
   );
};

export default AuthNav;
