import React from 'react';

import ItemBar from '../Item/Item';

const UserNav = ({ routers }) => {
   return (
      <>
         {/* {routers &&
            routers.map(({ page, namePage }) => <ItemBar key={page} to={page} name={namePage} />)} */}

         <ItemBar to={'/diary'} name={'Дневник'} />
         <ItemBar to={'/calculator'} name={'Калькулятор'} />
      </>
   );
};

export default UserNav;
