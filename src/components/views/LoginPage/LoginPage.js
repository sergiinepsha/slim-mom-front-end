import React from 'react';

import LoginForm from '../../presentational/LoginForm/LoginForm';

import style from './LoginPage.module.css';

const LoginPage = () => {
   return (
      <div className={style.wrapper}>
         <img src="/images/desctop_min.png" alt="bg_img" className={style.desctop_img} />
         <img src="/images/tablet_min.png" alt="tablet_img" className={style.tablet_img} />
         <div className={style.container}>
            <LoginForm />
         </div>
      </div>
   );
};

export default LoginPage;
