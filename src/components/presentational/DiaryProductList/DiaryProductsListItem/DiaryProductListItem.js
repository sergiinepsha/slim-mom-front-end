import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dayOperations, daySelectors } from '../../../../redux/day';
import s from './DiaryProductListItem.module.css';

export default function ContactListItem({ product }) {
   const { _id, title, weight, kcal } = product;

   const dispatch = useDispatch();

   const dayId = useSelector(daySelectors.dayId);

   const onDelete = () => {
      const productAndDayIds = {
         dayId,
         eatenProductId: _id,
      };

      dayOperations.deleteProduct(productAndDayIds, dispatch);
   };

   return (
      <li className={s.product_Item}>
         <span className={s.product_name}>{title}</span>
         <span className={s.product_weight}>{weight} г</span>
         <span className={s.product_cCal}>{Math.floor(kcal)} ккал</span>
         <button className={s.product_button} type="button" onClick={() => onDelete()}></button>
         <div></div>
      </li>
   );
}
