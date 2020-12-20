import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import productOperation from '../../redux/product/productOperations';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';

import s from './DiaryAddProductForm.module.css';
import dayOperations from '../../redux/day/dayOperations';

const DiaryAddProductForm = ({ dateCurrent, onAddProduct }) => {
   const [productName, setProductName] = useState('');

   useEffect(() => {
      axios
         .get(`https://slimmom-backend.herokuapp.com/product?search=${productName}`)
         .then(data => console.log(data.hits))
         .catch(error => {
            console.log(error);
         });

      return () => {
         // сделать отмену http запроса чтобы небыло утечки памяти при unmount
      };
   });

   const changeProductName = ({ value }) => {
      setProductName(value);
   };

   const [weight, setWeight] = useState('');
   const changeWeight = ({ value }) => setWeight(value);

   const handlerSubmit = async evt => {
      evt.preventDefault();

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
      onAddProduct: credentials => dispatch(productOperation.addProduct(credentials)),
      getProductQuery: query => dispatch(dayOperations.getProductByQuery(query)),
   };
};

export default connect(mapState, mapDispatchToProps)(DiaryAddProductForm);
