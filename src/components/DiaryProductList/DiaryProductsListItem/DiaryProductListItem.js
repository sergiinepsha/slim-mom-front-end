import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dayActions, dayOperations, daySelectors } from '../../../redux/day';
import s from './DiaryProductListItem.module.css';

export default function ContactListItem({ product }) {
   const { title, weight, kcal } = product;

   const dispatch = useDispatch();

   const dayID = useSelector(daySelectors.dayID);
   const eatenProductId = useSelector(daySelectors.eatenProductId);

   const reqBody = {
      dayID: 'ывывы',
      eatenProductId: '34235ds',
   };

   const onDeleteProduct = dispatch(dayOperations.deleteEatenProduct(reqBody));

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
