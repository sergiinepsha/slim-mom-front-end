import React from 'react';
import { connect } from 'react-redux';
import s from './DiaryProductList.module.css';
import DiaryProductListItem from './DiaryProductsListItem/DiaryProductListItem';

// const List_products = [
//    { name: 'Баклажан', id: 1, weight: 250 },
//    { name: 'Мясо птицы', id: 2, weight: 300 },
//    { name: 'Хлеб', id: 3, weight: 200 },
//    { name: 'Орех', id: 4, weight: 50 },
// ];

function DiaryProductsList({ products }) {
   return (
      <div className={s.container}>
         {products && (
            <ul className={s.list_products}>
               {products.map(product => (
                  <DiaryProductListItem key={product._id} product={product} />
               ))}
            </ul>
         )}
         <div className={s.linearBack}></div>
      </div>
   );
}

const mapStateToProps = state => ({
   products: state.products.products,
});
export default connect(mapStateToProps, null)(DiaryProductsList);
