import axios from 'axios';
import productActions from './productActions';

axios.defaults.baseURL = 'https://slimmom-backend.herokuapp.com';
const token =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmRkMGIzODgwY2NjMTAwMDRkZDI0ZWYiLCJzaWQiOiI1ZmRkMGRkMTgwY2NjMTAwMDRkZDI0ZjEiLCJpYXQiOjE2MDgzMjI1MTMsImV4cCI6MTYwODMyNjExM30.rSugFFxNGzbmrptZ-T2Etpkc2p_IJOeUP8RGLX8aU2c';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const fetchProduct = () => async dispatch => {
   dispatch(productActions.fetchProductRequest());
   await axios
      .get('/day')
      .then(res => dispatch(productActions.fetchProductSuccess(res)))
      .catch(error => dispatch(productActions.fetchProductError(error)));
};

const addProduct = ({ product, weight }) => async dispatch => {
   dispatch(productActions.addProductRequest());

   await axios
      .post('/day', { product, weight })
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
