import React from 'react';

import LoginForm from '../../LoginForm/LoginForm';

import s from './LoginPage.module.css';

const LoginPage = () => {
   return (
      <div className={s.container}>
         <LoginForm />
      </div>
   );
};

export default LoginPage;
