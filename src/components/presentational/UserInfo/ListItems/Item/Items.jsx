import React from 'react';

import s from './Items.module.css';

const Items = ({ itemName, value, measureUnit }) => {
   return (
      <>
         <li className={s.cCalItem}>
            <span>{itemName}</span>
            {value && (
               <span>
                  {value} {measureUnit}
               </span>
            )}
         </li>
      </>
   );
};

export default Items;
