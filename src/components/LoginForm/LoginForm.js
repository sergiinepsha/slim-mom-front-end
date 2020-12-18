import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import { userOperations } from '../../redux/auth';

import s from './LoginForm.module.css';

const LoginForm = () => {
   const [email, setEmail] = useState('');
   const changeEmail = ({ value }) => setEmail(value);

   const [password, setPassword] = useState('');
   const changePassword = ({ value }) => setPassword(value);

   const dispatch = useDispatch();

   const handlerSubmit = evt => {
      evt.preventDefault();

      console.log(email, password);
      userOperations.loginUser({ email, password }, dispatch);

      clearForm();
   };

   const clearForm = () => {
      setEmail('');
      setPassword('');
   };

   return (
      <div className={s.wrapper}>
         <h2 className={s.title}>Вход</h2>
         <form className={s.form} onSubmit={handlerSubmit}>
            <div className={s.container}>
               <PrimaryInput
                  value={email}
                  type="email"
                  placeholder="E-mail *"
                  onChange={changeEmail}
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
