import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'react-dropdown/style.css';

import { productActions, productOperations, productSelectors } from '../../../redux/product';
import { dayOperations, daySelectors } from '../../../redux/day';

import PrimaryInput from '../../common/PrimaryInput/PrimaryInput';
import BasicButton from '../../common/BasicButton/BasicButton';

import s from './DiaryAddProductForm.module.css';

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
         setTimeout(() => productOperations.getProductByQuery(productName, dispatch), 200);
      }
   }, [dispatch, productName]);

   const handlerSubmit = async evt => {
      evt.preventDefault();

      const productId = products[0]._id;

      dayOperations.postEatenProduct({ date, productId, weight }, dispatch);
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
      size = '10';
   }

   return (
      <form className={s.form} onSubmit={handlerSubmit}>
         <div className={s.container}>
            <PrimaryInput
               value={productName}
               type="text"
               placeholder="Введите продукт"
               onChange={changeProductName}
            />

            {products.length > 0 && isHidden && (
               <select className={s.products} id="products" required size={size}>
                  {products.map(({ _id, title }) => (
                     <option
                        key={_id}
                        className={s.optionClass}
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
         <div className={s.btn_wrapper}>
            <BasicButton type="submit">Добавить</BasicButton>
         </div>
      </form>
   );
};

export default DiaryAddProductForm;
