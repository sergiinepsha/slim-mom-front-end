import React from 'react';

import s from './Items.module.css';

const Items = ({ itemName, value }) => {
   return (
      <>
         <li className={s.cCalItem}>
            <span>{itemName}</span>
            {value && <span>{value} ккал</span>}
         </li>
      </>
   );
};

export default Items;
