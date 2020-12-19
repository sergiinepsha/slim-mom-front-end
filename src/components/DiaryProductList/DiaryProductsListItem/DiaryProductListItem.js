import React from 'react';
import s from './DiaryProductListItem.module.css';

export default function ContactListItem({ name, weight, cCal, onDeleteProduct }) {
   return (
      <li className={s.product_Item}>
         <span className={s.product_name}>{name}</span>
         <span className={s.product_weight}>{weight} г</span>
         <span className={s.product_cCal}>{cCal} ккал</span>
         <button className={s.product_button} type="button" onClick={onDeleteProduct}></button>
         <div></div>
      </li>
   );
}
