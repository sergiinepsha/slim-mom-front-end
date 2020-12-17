import React, { useState } from 'react';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import s from './DiaryAddProductForm.module.css';

const DiaryAddProductForm = () => {
   const [productName, setProductName] = useState('');
   const changeProductName = ({ value }) => setProductName(value);

   const [weight, setWeight] = useState('');
   const changeWeight = ({ value }) => setWeight(value);

   const handlerSubmit = evt => {
      evt.preventDefault();

      //TODO: productOperation...

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
            <BasicButton name="Добавить" type="submit" />
         </div>
      </form>
   );
};

export default DiaryAddProductForm;
