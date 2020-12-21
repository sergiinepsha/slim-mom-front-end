import productAction from './productActions';
import fetchDB from '../../services/fetchDB';

const getProductByQuery = async dispatch => {
   dispatch(productAction.getProductRequest());
   try {
      const products = await fetchDB.get('/product');
      console.log(products);
      dispatch(productAction.getProductSuccess());
   } catch (error) {
      dispatch(productAction.getProductError(error));
   }
};

export default {
   getProductByQuery,
};
