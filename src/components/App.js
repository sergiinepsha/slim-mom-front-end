import React from 'react';
import ButtonAddProduct from './common/Button_add_product/Button_add_product';
import DiaryProductsList from './DiaryProductList/DiaryProductList';

const App = () => {
   return (
      <>
         <DiaryProductsList />
         <ButtonAddProduct />
      </>
   );
};

export default App;
