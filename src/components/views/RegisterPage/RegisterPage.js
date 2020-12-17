import React from 'react';

import RegistrationForm from '../../RegistrationForm/RegistrationForm';

import s from './RegisterPage.module.css';

const RegisterPage = () => {
   return (
      <div className={s.container}>
         <RegistrationForm />
      </div>
   );
};

export default RegisterPage;
