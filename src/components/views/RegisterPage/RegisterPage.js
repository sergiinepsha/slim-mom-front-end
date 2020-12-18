import React from 'react';

import RegistrationForm from '../../RegistrationForm/RegistrationForm';

import s from './RegisterPage.module.css';

const RegisterPage = () => {
   return (
      <div className={s.wrapper}>
         <img src="/images/desctop_min.png" alt="bg_img" className={s.bg_img} />
         <div className={s.container}>
            <RegistrationForm />
         </div>
      </div>
   );
};

export default RegisterPage;
