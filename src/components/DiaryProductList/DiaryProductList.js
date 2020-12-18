import React from 'react';
import s from './DiaryProductList.module.css';
import DiaryProductListItem from './DiaryProductsListItem/DiaryProductListItem';

const List_products = [
   { name: 'Баклажан', id: 1, weight: 250 },
   { name: 'Мясо птицы', id: 2, weight: 300 },
   { name: 'Хлеб', id: 3, weight: 200 },
   { name: 'Орех', id: 4, weight: 50 },
   { name: 'Мясо свинное', id: 5, weight: 300 },
   { name: 'Мясо птицы', id: 6, weight: 300 },
   { name: 'Хлеб', id: 7, weight: 200 },
   { name: 'Орех', id: 8, weight: 50 },
   { name: 'Мясо свинное', id: 9, weight: 300 },
   { name: 'Мясо птицы', id: 10, weight: 300 },
   { name: 'Хлеб', id: 11, weight: 200 },
   { name: 'Орех', id: 12, weight: 50 },
   { name: 'Мясо свинное', id: 13, weight: 300 },
];

const cCal = 300;

export default function DiaryProductsList() {
   return (
      <div className={s.container}>
         <ul className={s.list_products}>
            {List_products.map(({ id, name, weight }) => (
               <DiaryProductListItem key={id} name={name} weight={weight} cCal={cCal} />
            ))}
         </ul>
         <div className={s.linearBack}></div>
      </div>
   );
}
