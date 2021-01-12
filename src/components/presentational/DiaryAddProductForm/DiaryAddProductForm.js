import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'react-use';

import 'react-dropdown/style.css';

import { productActions, productOperations, productSelectors } from '../../../redux/product';
import { dayOperations, daySelectors } from '../../../redux/day';

import PrimaryInput from '../../common/PrimaryInput/PrimaryInput';
import BasicButton from '../../common/BasicButton/BasicButton';

import style from './DiaryAddProductForm.module.css';
import Alert from '../Alert';

const SIZE_OF_SELECTOR = '10';

const DiaryAddProductForm = () => {
   const [productName, setProductName] = useState('');

   const [debouncedProductName, setDebouncedProductName] = useState('');

   const [weight, setWeight] = useState('');
   const changeWeight = ({ value }) => setWeight(value);

   const [isHidden, setHidden] = useState(true);

   const date = useSelector(daySelectors.date);
   const products = useSelector(productSelectors.products);

   const dispatch = useDispatch();

   const [, cancel] = useDebounce(() => setDebouncedProductName(productName), 500, [productName]);

   useEffect(() => {
      if (debouncedProductName) {
         productOperations.getProductByQuery(debouncedProductName, dispatch);
      }
      if (!debouncedProductName) {
         dispatch(productActions.emptyProduct());
      }

      return cancel;
   }, [cancel, debouncedProductName, dispatch]);

   const handlerSubmit = async e => {
      e.preventDefault();

      try {
         const productId = products[0]._id;

         await dayOperations.postEatenProduct({ date, productId, weight }, dispatch);
      } catch (error) {
         error.message = 'В базе данных нет такого продукта, выберите продукт из списка';
         dispatch(productActions.getProductError(error));
      }

      clearForm();
      setHidden(true);
   };

   const clearForm = () => {
      setProductName('');
      setWeight('');
      dispatch(productActions.emptyProduct());
   };

   let size;

   if (products.length > 1) {
      size = SIZE_OF_SELECTOR;
   }

   return (
      <Alert>
         <form className={style.form} onSubmit={handlerSubmit}>
            <div className={style.container}>
               <PrimaryInput
                  value={productName}
                  type="text"
                  placeholder="Введите название продукта"
                  onChange={({ value }) => setProductName(value)}
               />

               {products.length > 0 && isHidden && (
                  <select className={style.products} id="products" required size={size}>
                     {products.map(({ _id, title }) => (
                        <option
                           key={_id}
                           className={style.optionClass}
                           value={title.ru}
                           onClick={e => {
                              setHidden(false);
                              setProductName(e.target.outerText);
                           }}
                        >
                           {title.ru}
                        </option>
                     ))}
                  </select>
               )}

               <PrimaryInput
                  value={weight}
                  type="number"
                  placeholder="Граммы"
                  onChange={changeWeight}
               />
            </div>
            <div className={style.btn_wrapper}>
               <BasicButton type="submit">Добавить</BasicButton>
            </div>
         </form>
      </Alert>
   );
};

export default DiaryAddProductForm;
