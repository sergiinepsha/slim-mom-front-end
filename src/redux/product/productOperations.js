/* eslint-disable import/no-anonymous-default-export */
import { productActions } from './';
import fetchDB from '../../services/fetchDB';

const getProductByQuery = async (query, dispatch) => {
   dispatch(productActions.getProductRequest());

   try {
      const products = await fetchDB.get(`/product?search=${query}`);

      dispatch(productActions.getProductSuccess(products));
   } catch (error) {
      dispatch(productActions.getProductError(error));
   }
};

export default {
   getProductByQuery,
};
