import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './DiaryProductList.module.css';
import DiaryProductListItem from './DiaryProductsListItem/DiaryProductListItem';

import { dayOperations, daySelectors } from '../../redux/day';

function DiaryProductsList() {
   const eatenProducts = useSelector(daySelectors.eatenProducts);
   const date = useSelector(daySelectors.date);
   const dispatch = useDispatch();

   useEffect(() => {
      dayOperations.getInfoForDay(date, dispatch);
   }, [dispatch, date]);

   return (
      <div className={s.container}>
         {eatenProducts.length > 0 && (
            <ul className={s.list_products}>
               {eatenProducts.map(product => (
                  <DiaryProductListItem key={product.id} product={product} />
               ))}
            </ul>
         )}
         <div className={s.linearBack}></div>
      </div>
   );
}

export default DiaryProductsList;
