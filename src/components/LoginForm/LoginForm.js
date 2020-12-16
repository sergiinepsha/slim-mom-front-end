import React, { useState } from 'react';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import s from './LoginForm.module.css';

const LoginForm = () => {
   const [login, setLogin] = useState('');
   const changeLogin = ({ value }) => setLogin(value);

   const [password, setPassword] = useState('');
   const changePassword = ({ value }) => setPassword(value);

   const handlerSubmit = evt => {
      evt.preventDefault();

      //TODO: authOperation...

      clearForm();
   };

   const clearForm = () => {
      setLogin('');
      setPassword('');
   };

   return (
      <div className={s.wrapper}>
         <h2 className={s.title}>Вход</h2>
         <form className={s.form} onSubmit={handlerSubmit}>
            <div className={s.container}>
               <PrimaryInput
                  value={login}
                  type="text"
                  placeholder="Логин *"
                  onChange={changeLogin}
               />
               <PrimaryInput
                  value={password}
                  type="password"
                  placeholder="Пароль *"
                  onChange={changePassword}
               />
            </div>
            <div className={s.btn_wrapper}>
               <BasicButton name="Вход" type="submit" />
               <BasicButton name="Регистрация" type="button" />
            </div>
         </form>
      </div>
   );
};

export default LoginForm;
