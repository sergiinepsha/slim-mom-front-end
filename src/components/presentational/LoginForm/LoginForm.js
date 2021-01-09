import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PrimaryInput from '../../common/PrimaryInput/PrimaryInput';
import BasicButton from '../../common/BasicButton/BasicButton';

import { userOperations } from '../../../redux/auth';

import validatorLoginForm from '../../../validators/validatorLoginForm';

import style from './LoginForm.module.css';
import Alert from '../Alert';

const LoginForm = () => {
   const [email, setEmail] = useState('');
   const changeEmail = ({ value }) => setEmail(value);

   const [password, setPassword] = useState('');
   const changePassword = ({ value }) => setPassword(value);

   const dispatch = useDispatch();

   const history = useHistory();

   const handlerSubmit = e => {
      e.preventDefault();

      if (!validatorLoginForm(email, password, dispatch)) {
         return;
      }

      userOperations.loginUser({ email, password }, dispatch);

      clearForm();
   };

   const clearForm = () => {
      setEmail('');
      setPassword('');
   };

   return (
      <div className={style.wrapper}>
         <h2 className={style.title}>Вход</h2>
         <Alert>
            <form className={style.form} onSubmit={handlerSubmit}>
               <div className={style.container}>
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
               <div className={style.btn_wrapper}>
                  <BasicButton type="submit">Вход</BasicButton>
                  <BasicButton type="button" onClick={() => history.push('/register')}>
                     Регистрация
                  </BasicButton>
               </div>
            </form>
         </Alert>
      </div>
   );
};

export default LoginForm;
