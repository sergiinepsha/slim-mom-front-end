import React, { useState } from 'react';
import { connect } from 'react-redux';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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

      if (!productName) {
         // TODO: error не выбран продукт
         return;
      }
      console.log(productName, weight);

      onAddProduct(productName, weight);
      // productOperation.addProduct({ productName, weight });
      clearForm();
   };

   const clearForm = () => {
      setProductName('');
      setWeight('');
   };

   const options = ['хлеб', 'морковь', 'картофель'];

   return (
      <form className={s.form} onSubmit={handlerSubmit}>
         <div className={s.container}>
            <Dropdown
               className={s.dropdown}
               options={options}
               onChange={changeProductName}
               value={productName}
               required
               placeholder="Введите продукт"
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
