import React from 'react';

import RegistrationForm from '../../presentational/RegistrationForm/RegistrationForm';

import style from './RegisterPage.module.css';

const RegisterPage = () => {
   return (
      <div className={style.wrapper}>
         <img src="/images/desctop_min.png" alt="bg_img" className={style.desctop_img} />
         <img src="/images/tablet_min.png" alt="tablet_img" className={style.tablet_img} />
         <div className={style.container}>
            <RegistrationForm />
         </div>
      </div>
   );
};

export default RegisterPage;
