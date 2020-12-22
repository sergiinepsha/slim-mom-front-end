import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { productOperations, productSelectors } from '../../redux/product';

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

   const prevProductRef = useRef();
   useEffect(() => {
      prevProductRef.current = productName;
   });
   const prevProductName = prevProductRef.current;

   const [weight, setWeight] = useState('');
   const changeWeight = ({ value }) => setWeight(value);

   const date = useSelector(daySelectors.currentDay);
   const products = useSelector(productSelectors.products);

   const dispatch = useDispatch();

   if (productName && productName !== prevProductName) {
      productOperations.getProductByQuery(productName, dispatch);
   }

   const handlerSubmit = async evt => {
      evt.preventDefault();
      const productId = products[0]._id;

      const credentials = {
         date,
         productId,
         weight,
      };

      console.log(credentials);
      dayOperations.postEatenProduct(credentials, dispatch);
      clearForm();
   };

   const clearForm = () => {
      setProductName('');
      setWeight('');
   };

   const productMap = products.map(product => product.title.ru);
   const options = [...productMap];

   return (
      <form className={s.form} onSubmit={handlerSubmit}>
         <div className={s.container}>
            <PrimaryInput
               value={productName}
               type="text"
               placeholder="Введите продукт"
               onChange={changeProductName}
            />
            <Dropdown
               className={s.dropdown}
               options={options}
               onChange={changeProductName}
               value={productName}
               required
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
