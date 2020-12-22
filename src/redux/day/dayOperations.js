/* eslint-disable import/no-anonymous-default-export */
import dayActions from './dayActions';
import fetchDB from '../../services/fetchDB';

const postEatenProduct = async (reqBody, dispatch) => {
   dispatch(dayActions.eatenProductRequest);

   try {
      const { day } = await fetchDB.post(`/day`, reqBody);
      console.log(day);

      dispatch(dayActions.eatenProductSuccess(day.eatenProducts));
   } catch (error) {
      dispatch(dayActions.eatenProductError(error));
   }
};

export default { postEatenProduct };
