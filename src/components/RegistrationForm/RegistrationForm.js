import React, { useState } from 'react';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import s from './RegistrationForm.module.css';

const RegistrationForm = () => {
   const [name, setName] = useState('');
   const changeName = ({ value }) => setName(value);

   const [login, setLogin] = useState('');
   const changeLogin = ({ value }) => setLogin(value);

   const [password, setPassword] = useState('');
   const changePassword = ({ value }) => setPassword(value);

   const [passwordDuplicate, setPasswordDuplicate] = useState('');
   const changePasswordDuplicate = ({ value }) => setPasswordDuplicate(value);

   const handlerSubmit = evt => {
      evt.preventDefault();

      //TODO: authOperation...

      clearForm();
   };

   const clearForm = () => {
      setName('');
      setLogin('');
      setPassword('');
      setPasswordDuplicate('');
   };

   return (
      <div className={s.wrapper}>
         <h2 className={s.title}>Регистрация</h2>
         <form className={s.form} onSubmit={handlerSubmit}>
            <div className={s.container}>
               <PrimaryInput value={name} type="text" placeholder="Имя *" onChange={changeName} />
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
               <PrimaryInput
                  value={passwordDuplicate}
                  type="password"
                  placeholder="Повторите пароль *"
                  onChange={changePasswordDuplicate}
               />
            </div>
            <div className={s.btn_wrapper}>
               <BasicButton name="Вход" type="button" />
               <BasicButton name="Регистрация" type="submit" />
            </div>
         </form>
      </div>
   );
};

export default RegistrationForm;
