import React from 'react';

import LoginForm from '../../LoginForm/LoginForm';

import s from './LoginPage.module.css';

const LoginPage = () => {
   return (
      <div className={s.wrapper}>
         <img src="/images/desctop_min.png" alt="bg_img" className={s.desctop_img} />
         <img src="/images/tablet_min.png" alt="tablet_img" className={s.tablet_img} />
         <div className={s.container}>
            <LoginForm />
         </div>
      </div>
   );
};

export default LoginPage;
