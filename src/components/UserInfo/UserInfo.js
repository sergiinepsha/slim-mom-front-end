import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListItems from './ListItems';

import s from './UserInfo.module.css';

export default function UserInfo() {
   const date = useSelector(state => state.day.date);
   const items = useSelector(state => state.day.daySummary);
   const [itemList, setItemList] = useState([]);

   useEffect(() => {
      if (items) {
         setItemList([
            { name: 'Осталось', value: Math.round(items.kcalLeft) || null, measureUnit: 'ккал' },
            {
               name: 'Употреблено',
               value: Math.round(items.kcalConsumed) || null,
               measureUnit: 'ккал',
            },
            {
               name: 'Дневная норма',
               value: Math.round(items.dailyRate) || null,
               measureUnit: 'ккал',
            },
            {
               name: 'n% от нормы',
               value: Math.round(items.percentsOfDailyRate) || null,
               measureUnit: '%',
            },
         ]);
         return;
      }
      setItemList([]);
   }, [items]);

   return (
      <div className={s.container}>
         <div className={s.userInfoMenu}>
            <div className={s.cart}>
               <ListItems items={itemList} time={date} name={'Сводка за'} />
            </div>
            <div className={s.cart2}>
               <ListItems name={'Нерекомендуемые продукты'} />
            </div>
         </div>
      </div>
   );
}
