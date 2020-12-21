import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { productOperations } from '../../redux/product';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import s from './DiaryAddProductForm.module.css';

import dayOperations from '../../redux/day/dayOperations';
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

   const handlerSubmit = async evt => {
      evt.preventDefault();

      // if (!productName) {
      //    // TODO: error не выбран продукт
      //    return;
      // }

      console.log(productName, weight);

      const credentials = {
         currentDay,
         // productId,
         weight,
      };

      console.log(credentials);

      productOperations.getProductByQuery(productName, dispatch);

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

export default DiaryAddProductForm;
