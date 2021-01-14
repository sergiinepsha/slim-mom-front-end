/* eslint-disable import/no-anonymous-default-export */
import { dayActions } from './';
import { userActions } from '../auth';
import fetchDB from '../../services/fetchDB';

const postEatenProduct = async (reqBody, dispatch) => {
   dispatch(dayActions.eatenProductRequest());

   try {
      const data = await fetchDB.post(`/day`, reqBody);

      const { eatenProducts, daySummary, notAllowedProducts } = data;

      dispatch(dayActions.eatenProductSuccess(eatenProducts));
      dispatch(dayActions.daySummary(daySummary));
      dispatch(dayActions.notAllowedProducts(notAllowedProducts));
      dispatch(userActions.refreshUserRequest());
   } catch (error) {
      if (error.response.status === 401) {
         dispatch(userActions.logoutUserSuccess());
      }

      dispatch(dayActions.eatenProductError(error));
   }
};

const deleteProduct = async (productAndDayIds, dispatch) => {
   const { eatenProductId } = productAndDayIds;

   dispatch(dayActions.deleteEatenProductRequest());

   try {
      const data = await fetchDB.del('/day', productAndDayIds);

      if (data) {
         dispatch(dayActions.deleteEatenProductSuccess(eatenProductId));
         dispatch(dayActions.daySummary(data));
      }
   } catch (error) {
      if (error.response.status === 401) {
         dispatch(userActions.logoutUserSuccess());
      }
      dispatch(dayActions.deleteEatenProductError(error));
   }
};

const getInfoForDay = async (date, dispatch) => {
   dispatch(dayActions.infoForDayRequest());

   try {
      const data = await fetchDB.post('/day/info', { date });
      const { _id, eatenProducts, daySummary, notAllowedProducts } = data;

      dispatch(dayActions.daySummary(daySummary));
      dispatch(dayActions.dayId(_id));
      dispatch(dayActions.notAllowedProducts(notAllowedProducts));
      dispatch(dayActions.eatenProductSuccess(eatenProducts));
   } catch (error) {
      if (error.response.status === 401) {
         dispatch(userActions.logoutUserSuccess());
      }

      dispatch(dayActions.infoForDayError(error));
   }
};

export default {
   postEatenProduct,
   getInfoForDay,
   deleteProduct,
};
