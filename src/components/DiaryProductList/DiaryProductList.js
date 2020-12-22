import React from 'react';
import { useSelector } from 'react-redux';
import s from './DiaryProductList.module.css';
import DiaryProductListItem from './DiaryProductsListItem/DiaryProductListItem';

import daySelectors from '../../redux/day/daySelectors';

function DiaryProductsList() {
   const eatenProducts = useSelector(daySelectors.eatenProducts);
   console.log(eatenProducts);
   return (
      <div className={s.container}>
         {eatenProducts.length > 0 && (
            <ul className={s.list_products}>
               {eatenProducts.map(product => (
                  <DiaryProductListItem key={product._id} product={product} />
               ))}
            </ul>
         )}
         <div className={s.linearBack}></div>
      </div>
   );
}

export default DiaryProductsList;
