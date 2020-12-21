import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { productOperations } from '../../redux/product';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import s from './DiaryAddProductForm.module.css';

// import dayOperations from '../../redux/day/dayOperations';
import daySelectors from '../../redux/day/daySelectors';

const DiaryAddProductForm = () => {
   const [productName, setProductName] = useState('');
   const changeProductName = ({ value }) => {
      setProductName(value);
   };

   const [weight, setWeight] = useState('');
   const changeWeight = ({ value }) => setWeight(value);

   const currentDay = useSelector(daySelectors.currentDay);
   const dispatch = useDispatch();

   if (productName) {
      productOperations.getProductByQuery(productName, dispatch);
   }

   const handlerSubmit = async evt => {
      evt.preventDefault();

      console.log(productName, weight);

      const credentials = {
         currentDay,
         // productId,
         weight,
      };

      console.log(credentials);

      clearForm();
   };

   const clearForm = () => {
      setProductName('');
      setWeight('');
   };

   const options = [];

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

export default DiaryAddProductForm;
