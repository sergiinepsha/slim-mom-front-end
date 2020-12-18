import productActions from './productActions';
import fetchDB from '../../services/fetchDB';

const addProduct = async ({ productName, weight }, dispatch) => {
   dispatch(productActions.addProductRequest());
   try {
      const data = await fetchDB.post(`/day`, { productName, weight });
      console.log(data);

      dispatch(productActions.addProductSuccess(data));
   } catch (error) {
      console.log(error);
      dispatch(productActions.addProductError(error.message));
   }
};

const removeProduct = id => async dispatch => {
   dispatch(productActions.removeProductRequest());
   try {
      await fetchDB.delete(`/product/${id}`);
      dispatch(productActions.removeProductSuccess(id));
   } catch (error) {
      dispatch(productActions.removeProductError(error.message));
   }
};

export default {
   addProduct,
   removeProduct,
};
