import React from 'react';

import Item from '../Item/Item';

const UserNav = () => {
   return (
      <>
         <Item to={'/diary'} name={'Дневник'} />
         <Item to={'/calculator'} name={'Калькулятор'} />
      </>
   );
};

export default UserNav;
