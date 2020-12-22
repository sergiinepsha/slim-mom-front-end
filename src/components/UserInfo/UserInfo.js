import React from 'react';

import ListItems from './ListItems';

import s from './UserInfo.module.css';

//удалить как будут данные
// Должно приходить с  бэка
const glushka = [
   { name: 'Осталось', value: 1 },
   { name: 'Употреблено', value: 1 },
   { name: 'Дневная норма', value: 1 },
   { name: 'n% от нормы', value: 1 },
];

export default function UserInfo() {
   const date = new Date().toLocaleDateString(); // Должно приходить с  бэка

   return (
      <div className={s.container}>
         <div className={s.userInfoMenu}>
            <div className={s.cart}>
               <ListItems items={glushka} name={'Сводка за'} time={date} />
            </div>
            <div className={s.cart2}>
               <ListItems name={'Нерекомендуемые продукты'} />
               <ListItems name={'Здесь будет отображаться Ваш рацион'} />
            </div>
         </div>
      </div>
   );
}
