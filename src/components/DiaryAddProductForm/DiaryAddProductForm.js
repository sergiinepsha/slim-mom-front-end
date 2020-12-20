import React, { useState } from 'react';
import { connect } from 'react-redux';

import productOperation from '../../redux/product/productOperations';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import s from './DiaryAddProductForm.module.css';

const DiaryAddProductForm = ({ onAddProduct }) => {
   const [productName, setProductName] = useState('');
   const changeProductName = ({ value }) => setProductName(value);

   const [weight, setWeight] = useState('');
   const changeWeight = ({ value }) => setWeight(value);

   const handlerSubmit = evt => {
      evt.preventDefault();
      console.log(productName, weight);

      onAddProduct(productName, weight);
      // productOperation.addProduct({ productName, weight });
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

const mapDispatchToProps = dispatch => {
   return {
      onAddProduct: (product, weight) => dispatch(productOperation.addProduct({ product, weight })),
   };
};

export default connect(null, mapDispatchToProps)(DiaryAddProductForm);
