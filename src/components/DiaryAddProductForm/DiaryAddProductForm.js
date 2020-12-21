import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { productOperations } from '../../redux/product';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import s from './DiaryAddProductForm.module.css';
import dayOperations from '../../redux/day/dayOperations';

const DiaryAddProductForm = ({ dateCurrent, onAddProduct }) => {
   const [productName, setProductName] = useState('');
   const changeProductName = ({ value }) => {
      setProductName(value);
   };

   const [weight, setWeight] = useState('');
   const changeWeight = ({ value }) => setWeight(value);

   const dispatch = useDispatch();

   const handlerSubmit = async evt => {
      evt.preventDefault();

      if (!productName) {
         // TODO: error не выбран продукт
         return;
      }
      console.log(productName, weight);

      // productOperations.addProduct;
      // const productId = async () => await getProductQuery(productName).then(data => data);

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
const mapState = state => ({
   dateCurrent: state.curentDate.day,
});

const mapDispatchToProps = dispatch => {
   return {
      onAddProduct: credentials => dispatch(productOperations.addProduct(credentials)),
      getProductQuery: query => dispatch(dayOperations.getProductByQuery(query)),
   };
};

export default connect(mapState, mapDispatchToProps)(DiaryAddProductForm);
