import dayActions from './dayActions';
import fetchDB from '../../services/fetchDB';

const postEatenProduct = async (reqBody, dispatch) => {
   dispatch(dayActions.eatenProductRequest);
   try {
      const eatenProduct = await fetchDB.post(`/day`, reqBody);
      dispatch(dayActions.eatenProductSuccess(eatenProduct));
   } catch (error) {
      dispatch(dayActions.eatenProductError(error));
   }
};

export default { postEatenProduct };
