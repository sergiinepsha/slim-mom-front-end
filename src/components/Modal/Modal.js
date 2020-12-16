import React from 'react';
import s from './modal.module.css';

const bad_products = [
   { name: 'Мучные продукты', id: 1 },
   { name: 'Молоко', id: 2 },
   { name: 'Красное мясо', id: 3 },
   { name: 'Копчености', id: 4 },
];

const ccalSum = 2800;

export default function Modal() {
   return (
      <>
         <div className={s.overlay}>
            <div className={s.container}>
               <button className={s.backButton} type="button" onClick={() => {}}></button>
               <button className={s.closeButton} type="button" onClick={() => {}}></button>
               <h2 className={s.yourNormalCcal}>
                  Ваша рекомендуемая суточная норма калорий составляет
               </h2>
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
               <button className={s.buttonGo} type="button" onClick={() => {}}>
                  Начать худеть
               </button>
            </div>
         </div>
      </>
   );
}
