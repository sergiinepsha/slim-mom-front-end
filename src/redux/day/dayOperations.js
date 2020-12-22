/* eslint-disable import/no-anonymous-default-export */
import { dayActions } from './';
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

const getInfoForDay = async (date, dispatch) => {
   dispatch(dayActions.infoForDayRequest());

   try {
      const { eatenProducts } = await fetchDB.post('/day/info', { date });
      console.log(eatenProducts);

      if (eatenProducts) {
         dispatch(dayActions.eatenProductSuccess(eatenProducts));
      } else {
         dispatch(dayActions.emptyEatenProducts());
      }
   } catch (error) {
      dispatch(dayActions.infoForDayError());
   }
};

export default { postEatenProduct, getInfoForDay };
