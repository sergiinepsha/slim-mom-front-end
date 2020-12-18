import React from 'react';

import LoginForm from '../../LoginForm/LoginForm';

import s from './LoginPage.module.css';

const LoginPage = () => {
   return (
      <div className={s.wrapper}>
         <img src="/images/desctop_min.png" alt="bg_img" className={s.bg_img} />
         <div className={s.container}>
            <LoginForm />
         </div>
      </div>
   );
};

export default LoginPage;
