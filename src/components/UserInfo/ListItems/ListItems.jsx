import React, { useState, useEffect } from 'react';

import Item from './Item';

import s from './ListItems.module.css';

const ListItems = ({ items, name, time }) => {
   const [itemsValue, setItemsValue] = useState([
      { name: 'Здесь будет отображаться Ваш рацион', value: null },
   ]);
   const [nameList, setNameList] = useState(null);
   const [date, setDate] = useState(null);

   useEffect(() => {
      if (time) {
         setDate(time);
      }
      if (items) {
         setItemsValue(items);
      }
      if (name) {
         setNameList(name);
      }
   }, [time, items, name]);

   return (
      <>
         <h2 className={s.titleThisTime}>
            {nameList} {date}
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
