import axios from 'axios';
import productActions from './productActions';

axios.defaults.baseURL = 'https://slimmom-backend.herokuapp.com';

const fetchProduct = () => async dispatch => {
   dispatch(productActions.fetchProductRequest());
   await axios
      .get('/day')
      .then(res => dispatch(productActions.fetchProductSuccess(res)))
      .catch(error => dispatch(productActions.fetchProductError(error)));
};

const addProduct = credentials => async dispatch => {
   dispatch(productActions.addProductRequest());

   await axios
      .post('/day', credentials)
      .then(({ data }) => {
         console.log(data);
         return dispatch(productActions.addProductSuccess(data));
      })
      .catch(error => dispatch(productActions.addProductError(error)));
};

const removeProduct = id => async dispatch => {
   dispatch(productActions.removeProductRequest());
   await axios
      .delete(`/day/${id}`)
      .then(() => dispatch(productActions.removeProductSuccess(id)))
      .catch(error => dispatch(productActions.removeProductError(error)));
};

export default {
   fetchProduct,
   addProduct,
   removeProduct,
};
