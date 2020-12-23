import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'react-dropdown/style.css';

import { productActions, productOperations, productSelectors } from '../../redux/product';

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

   const date = useSelector(daySelectors.date);
   const products = useSelector(productSelectors.products);

   const dispatch = useDispatch();

   useEffect(() => {
      if (productName) {
         setTimeout(() => productOperations.getProductByQuery(productName, dispatch), 200);
      }
   }, [dispatch, productName]);

   const handlerSubmit = async evt => {
      evt.preventDefault();

      const productId = products[0]._id;

      dayOperations.postEatenProduct({ date, productId, weight }, dispatch);
      clearForm();
   };

   const clearForm = () => {
      setProductName('');
      setWeight('');
      dispatch(productActions.emptyProduct());
   };

   return (
      <form className={s.form} onSubmit={handlerSubmit}>
         <div className={s.container}>
            <PrimaryInput
               value={productName}
               type="text"
               placeholder="Введите продукт"
               list="products"
               onChange={changeProductName}
            />
            {products.length > 0 && (
               <datalist className={s.products} id="products">
                  {products.map(({ _id, title }) => (
                     <option key={_id} value={title.ru}></option>
                  ))}
               </datalist>
            )}
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
