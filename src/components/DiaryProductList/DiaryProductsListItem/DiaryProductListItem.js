import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dayActions, dayOperations, daySelectors } from '../../../redux/day';
import s from './DiaryProductListItem.module.css';

export default function ContactListItem({ product }) {
   const { title, weight, kcal } = product;

   const dispatch = useDispatch();

   const dayId = useSelector(daySelectors.dayId);
   const eatenProducts = useSelector(daySelectors.eatenProducts);

   const del = e => {
      console.dir(e.target);

      const eatenProductId = eatenProducts[0].id;
      const request = { dayId, eatenProductId: 'f5d59d20-1095-4752-ad71-f455218bf454' };
      console.log(request);

      if (e) {
         dayOperations.deleteProduct(request, dispatch);
      }
   };

   return (
      <li className={s.product_Item}>
         <span className={s.product_name}>{title}</span>
         <span className={s.product_weight}>{weight} г</span>
         <span className={s.product_cCal}>{Math.floor(kcal)} ккал</span>
         <button className={s.product_button} type="button" onClick={del}></button>
         <div></div>
      </li>
   );
}
