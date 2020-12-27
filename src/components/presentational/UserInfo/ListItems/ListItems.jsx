import React, { useState, useEffect } from 'react';

import Item from './Item';

import s from './ListItems.module.css';

const ListItems = ({ items, name, time }) => {
   const [itemsValue, setItemsValue] = useState(
      items || [{ name: 'Здесь будет отображаться Ваш рацион', value: null }],
   );
   useEffect(() => {
      if (items) {
         setItemsValue(items);
      }
   }, [items]);

   return (
      <>
         <h2 className={s.titleThisTime}>
            {name} {time || null}
         </h2>
         <ul className={s.listCcal}>
            {itemsValue.map(item => (
               <Item
                  key={item.name}
                  itemName={item.name}
                  value={item.value}
                  measureUnit={item.measureUnit}
               />
            ))}
         </ul>
      </>
   );
};

export default ListItems;
