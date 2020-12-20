import React, { useState } from 'react';
import { connect } from 'react-redux';

import productOperation from '../../redux/product/productOperations';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import s from './DiaryAddProductForm.module.css';
import productOperations from '../../redux/product/productOperations';

const DiaryAddProductForm = async ({ dateCurrent, onAddProduct, getProductQuery }) => {
   const [productName, setProductName] = useState('');
   const changeProductName = ({ value }) => setProductName(value);

   const [weight, setWeight] = useState('');
   const changeWeight = ({ value }) => setWeight(value);

   const handlerSubmit = async evt => {
      evt.preventDefault();
      // const productId = async () =>
      //    await getProductQuery(productName).then(data => console.log(data));

      const credentials = {
         dateCurrent,
         // productId,
         weight,
      };
      console.log(credentials);

      // onAddProduct(credentials);

      clearForm();
   };

   const clearForm = () => {
      setProductName('');
      setWeight('');
   };

   return (
      <form className={s.form} onSubmit={handlerSubmit}>
         <div className={s.container}>
            <PrimaryInput
               value={productName}
               type="text"
               placeholder="Введите название продукта"
               onChange={changeProductName}
            />
            <PrimaryInput
               value={weight}
               type="number"
               placeholder="Граммы"
               onChange={changeWeight}
            />
         </div>
         <div className={s.btn_wrapper}>
            <BasicButton type="submit">Добавить</BasicButton>
         </div>
      </form>
   );
};
const mapState = state => ({
   dateCurrent: state.curentDate.day,
});

const mapDispatchToProps = dispatch => {
   return {
      onAddProduct: credentials => dispatch(productOperation.addProduct(credentials)),
      getProductQuery: query => dispatch(productOperations.getProductByQuery(query)),
   };
};

export default connect(mapState, mapDispatchToProps)(DiaryAddProductForm);
