import React from 'react';

import BasicButton from '../common/BasicButton/BasicButton';

import s from './DailyCalorieIntake.module.css';

const bad_products = [
   { name: 'Мучные продукты', id: 1 },
   { name: 'Молоко', id: 2 },
   { name: 'Красное мясо', id: 3 },
   { name: 'Копчености', id: 4 },
];

const ccalSum = 2800;

const DailyCalorieIntake = () => {
   return (
      <>
         <h2 className={s.yourNormalCcal}>Ваша рекомендуемая суточная норма калорий составляет</h2>
         <h2 className={s.ccalSum}>
            {ccalSum} <span>ккал</span>
         </h2>
         <div className={s.line}></div>
         <h3 className={s.NotRecProduct_title}>
            Продукты, которые вам не рекомендуется употреблять
         </h3>
         <ol className={s.NotRecProduct_list}>
            {bad_products.map(product => (
               <li className={s.NotRecProduct_list_item} key={product.id}>
                  {product.name}
               </li>
            ))}
         </ol>
         <div className={s.btn_wrapper}>
            <BasicButton name="Начать худеть" type="button" onClick={() => {}} />
         </div>
      </>
   );
};

export default DailyCalorieIntake;
