import React from 'react';
import s from './DiaryProductListItem.module.css';

export default function ContactListItem({ product, onDeleteProduct }) {
   const { title, weight, kcal } = product;

   return (
      <li className={s.product_Item}>
         <span className={s.product_name}>{title}</span>
         <span className={s.product_weight}>{weight} г</span>
         <span className={s.product_cCal}>{kcal} ккал</span>
         <button className={s.product_button} type="button" onClick={onDeleteProduct}></button>
         <div></div>
      </li>
   );
}
