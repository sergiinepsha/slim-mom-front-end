/* eslint-disable import/no-anonymous-default-export */
import dayActions from './dayActions';
import fetchDB from '../../services/fetchDB';

const postEatenProduct = async (reqBody, dispatch) => {
   dispatch(dayActions.eatenProductRequest());

   try {
      const { day } = await fetchDB.post(`/day`, reqBody);
      console.log(day);

      dispatch(dayActions.eatenProductSuccess(day.eatenProducts));
   } catch (error) {
      dispatch(dayActions.eatenProductError(error));
   }
};

const deleteEatenProduct = async (reqBody, dispatch) => {
   dispatch(dayActions.deleteEatenProductRequest());

   try {
      const { data } = await fetchDB.del(`/day`, reqBody);
      console.log(data);

      // dispatch(dayActions.deleteEatenProductSuccess(data));
   } catch (error) {
      // dispatch(dayActions.deleteEatenProductError(error));
   }
};

export default { postEatenProduct, deleteEatenProduct };
