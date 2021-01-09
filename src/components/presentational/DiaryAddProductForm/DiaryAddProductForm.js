import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
   const changeProductName = ({ value }) => {
      setProductName(value);
   };

   const [weight, setWeight] = useState('');
   const changeWeight = ({ value }) => setWeight(value);

   const [isHidden, setHidden] = useState(true);

   const date = useSelector(daySelectors.date);
   const products = useSelector(productSelectors.products);

   const dispatch = useDispatch();

   useEffect(() => {
      if (productName) {
         productOperations.getProductByQuery(productName, dispatch);
      }
   }, [dispatch, productName]);

   const handlerSubmit = async e => {
      e.preventDefault();

      const productId = products[0]._id;

      await dayOperations.postEatenProduct({ date, productId, weight }, dispatch);
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
                  placeholder="Введите продукт"
                  onChange={changeProductName}
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
