import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PrimaryInput from '../../common/PrimaryInput/PrimaryInput';
import BasicButton from '../../common/BasicButton/BasicButton';

import { userOperations } from '../../../redux/auth';

import validatorRegistrationForm from '../../../validators/validatorRegistrationForm';

import style from './RegistrationForm.module.css';

const RegistrationForm = () => {
   const [name, setName] = useState('');
   const changeUsername = ({ value }) => setName(value);

   const [email, setEmail] = useState('');
   const changeEmail = ({ value }) => setEmail(value);

   const [password, setPassword] = useState('');
   const changePassword = ({ value }) => setPassword(value);

   const [passwordDuplicate, setPasswordDuplicate] = useState('');
   const changePasswordDuplicate = ({ value }) => setPasswordDuplicate(value);

   const dispatch = useDispatch();

   const history = useHistory();

   const handlerSubmit = e => {
      e.preventDefault();

      if (!validatorRegistrationForm(name, email, password, passwordDuplicate, dispatch)) {
         return;
      }

      userOperations.registerAndLoginUser({ name, email, password }, dispatch);

      clearForm();
   };

   const clearForm = () => {
      setName('');
      setEmail('');
      setPassword('');
      setPasswordDuplicate('');
   };

   return (
      <div className={style.wrapper}>
         <h2 className={style.title}>Регистрация</h2>
         <form className={style.form} onSubmit={handlerSubmit}>
            <div className={style.container}>
               <PrimaryInput
                  value={name}
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
            <div className={style.btn_wrapper}>
               <BasicButton type="button" onClick={() => history.push('/login')}>
                  Вход
               </BasicButton>
               <BasicButton type="submit">Регистрация</BasicButton>
            </div>
         </form>
      </div>
   );
};

export default RegistrationForm;
