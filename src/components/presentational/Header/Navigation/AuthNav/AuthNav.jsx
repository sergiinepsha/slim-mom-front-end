import React from 'react';

import ItemBar from '../Item/Item';

const AuthNav = () => {
   return (
      <>
         <ItemBar to={'/login'} name={'Вход'} />
         <ItemBar to={'/register'} name={'Регистрация'} />
      </>
   );
};

export default AuthNav;
