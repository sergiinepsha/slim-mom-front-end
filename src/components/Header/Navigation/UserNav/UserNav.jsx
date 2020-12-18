import React from 'react';

import Item from '../Item/Item';

const UserNav = ({ routers }) => {
   return (
      <>
         {/* {routers &&
            routers.map(({ page, namePage }) => <ItemBar key={page} to={page} name={namePage} />)} */}

         <Item to={'/diary'} name={'Дневник'} />
         <Item to={'/calculator'} name={'Калькулятор'} />
      </>
   );
};

export default UserNav;
