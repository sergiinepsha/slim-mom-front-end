import React from 'react';

import RegistrationForm from '../../RegistrationForm/RegistrationForm';

import s from './RegisterPage.module.css';

const RegisterPage = () => {
   return (
      <div className={s.wrapper}>
         <img src="/images/desctop_min.png" alt="bg_img" className={s.desctop_img} />
         <img src="/images/tablet_min.png" alt="tablet_img" className={s.tablet_img} />
         <div className={s.container}>
            <RegistrationForm />
         </div>
      </div>
   );
};

export default RegisterPage;
