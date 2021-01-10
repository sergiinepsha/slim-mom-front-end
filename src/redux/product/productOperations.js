/* eslint-disable import/no-anonymous-default-export */
import { productActions } from './';
import { userActions } from '../auth';
import fetchDB from '../../services/fetchDB';

const getProductByQuery = async (query, dispatch) => {
   dispatch(productActions.getProductRequest());

   try {
      const products = await fetchDB.get(`/product?search=${query}`);
      console.log(products); ///
      dispatch(productActions.getProductSuccess(products));
   } catch (error) {
      if (error.response.status === 401) {
         dispatch(userActions.logoutUserSuccess());
      }
      dispatch(productActions.getProductError(error));
   }
};

export default {
   getProductByQuery,
};
