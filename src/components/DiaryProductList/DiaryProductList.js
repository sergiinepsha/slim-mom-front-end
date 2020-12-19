import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from './DiaryProductList.module.css';
import DiaryProductListItem from './DiaryProductsListItem/DiaryProductListItem';

const List_products = [
   { name: 'Баклажан', id: 1, weight: 250 },
   { name: 'Мясо птицы', id: 2, weight: 300 },
   { name: 'Хлеб', id: 3, weight: 200 },
   { name: 'Орех', id: 4, weight: 50 },
];

const cCal = 300;

function DiaryProductsList({ products }) {
   // const [products, setProducts] = useState([]);
   return (
      <div className={s.container}>
         <ul className={s.list_products}>
            {products.map(({ id, productName, weight }) => (
               <DiaryProductListItem key={id} name={productName} weight={weight} cCal={cCal} />
            ))}
         </ul>
         <div className={s.linearBack}></div>
      </div>
   );
}

const mapStateToProps = state => ({
   products: state.products.products,
});
export default connect(mapStateToProps, null)(DiaryProductsList);
