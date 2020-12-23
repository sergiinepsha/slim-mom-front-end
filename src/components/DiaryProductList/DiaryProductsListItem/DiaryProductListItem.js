import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dayOperations, daySelectors } from '../../../redux/day';
import s from './DiaryProductListItem.module.css';

export default function ContactListItem({ product }) {
   const { id, title, weight, kcal } = product;

   const dispatch = useDispatch();

   const dayId = useSelector(daySelectors.dayId);
   // const eatenProducts = useSelector(daySelectors.eatenProducts);

   const onDelete = () => {
      const productAndDayIds = {
         dayId,
         eatenProductId: id,
      };

      dayOperations.deleteProduct(productAndDayIds, dispatch);
   };

   // const del = e => {
   //    console.dir(e.target);

   //    const eatenProductId = eatenProducts[0].id;
   //    const request = { dayId, eatenProductId: 'f5d59d20-1095-4752-ad71-f455218bf454' };
   //    console.log(request);

   //    if (e) {
   //       dayOperations.deleteProduct(request, dispatch);
   //    }
   // };

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
