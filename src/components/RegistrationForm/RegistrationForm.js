import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import { userOperations } from '../../redux/auth';

import s from './RegistrationForm.module.css';

const RegistrationForm = () => {
   const [username, setUsername] = useState('');
   const changeUsername = ({ value }) => setUsername(value);

   const [email, setEmail] = useState('');
   const changeEmail = ({ value }) => setEmail(value);

   const [password, setPassword] = useState('');
   const changePassword = ({ value }) => setPassword(value);

   const [passwordDuplicate, setPasswordDuplicate] = useState('');
   const changePasswordDuplicate = ({ value }) => setPasswordDuplicate(value);

   const dispatch = useDispatch();

   const history = useHistory();

   const handlerSubmit = evt => {
      evt.preventDefault();

      if (password !== passwordDuplicate) {
         // TODO: error
         return;
      }

      userOperations.registerUser({ username, email, password }, dispatch);

      clearForm();
   };

   // TODO:
   const handleClick = () => history.push('/login');

   const clearForm = () => {
      setUsername('');
      setEmail('');
      setPassword('');
      setPasswordDuplicate('');
   };

   return (
      <div className={s.wrapper}>
         <h2 className={s.title}>Регистрация</h2>
         <form className={s.form} onSubmit={handlerSubmit}>
            <div className={s.container}>
               <PrimaryInput
                  value={username}
                  type="text"
                  placeholder="Имя *"
                  onChange={changeUsername}
               />
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
               <PrimaryInput
                  value={passwordDuplicate}
                  type="password"
                  placeholder="Повторите пароль *"
                  onChange={changePasswordDuplicate}
               />
            </div>
            <div className={s.btn_wrapper}>
               <BasicButton type="button" onClick={handleClick}>
                  Вход
               </BasicButton>
               <BasicButton type="submit">Регистрация</BasicButton>
            </div>
         </form>
      </div>
   );
};

export default RegistrationForm;
