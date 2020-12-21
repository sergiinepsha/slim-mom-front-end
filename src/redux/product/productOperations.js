import productAction from './productActions';
import fetchDB from '../../services/fetchDB';

const getProductByQuery = async (query, dispatch) => {
   dispatch(productAction.getProductRequest());
   try {
      const products = await fetchDB.get(`/product?search=${query}`);
      console.log(products);
      dispatch(productAction.getProductSuccess(products));
   } catch (error) {
      dispatch(productAction.getProductError(error));
   }
};

export default {
   getProductByQuery,
};
