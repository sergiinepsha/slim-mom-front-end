import axios from 'axios';
import dayActions from './dayActions';

axios.defaults.baseURL = 'https://slimmom-backend.herokuapp.com';

const getProductByQuery = query => async dispatch => {
   dispatch(dayActions.getProductRequest());
   await axios
      .get(`/product?search=${query}`)
      .then(data => {
         console.log(data);
         return dispatch(dayActions.getProductSuccess(data));
      })
      .catch(error => dispatch(dayActions.getProductError(error)));
};

export default {
   getProductByQuery,
};
