import React, { useState, useEffect } from 'react';

import Item from './Item';

import s from './ListItems.module.css';

const ListItems = ({ items, name, time }) => {
   const [itemsValue, setItemsValue] = useState([{ name: 'Данных нет', value: null }]);
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
   });

   return (
      <>
         <h2 className={s.titleThisTime}>
            {nameList} {date}
         </h2>
         <ul className={s.listCcal}>
            {itemsValue.map(item => (
               <Item key={item.name} itemName={item.name} value={item.value} />
            ))}
         </ul>
      </>
   );
};

export default ListItems;
