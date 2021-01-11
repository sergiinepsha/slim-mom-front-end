/* eslint-disable import/no-anonymous-default-export */
import { dayActions } from './';
import { userActions } from '../auth';
import fetchDB from '../../services/fetchDB';
import loaderActions from '../loader/loaderActions';

const postEatenProduct = async (reqBody, dispatch) => {
   dispatch(dayActions.eatenProductRequest());

   try {
      const data = await fetchDB.post(`/day`, reqBody);

      const { eatenProducts, daySummary, notAllowedProducts } = data;

      dispatch(dayActions.eatenProductSuccess(eatenProducts));
      dispatch(dayActions.daySummary(daySummary));
      dispatch(dayActions.notAllowedProducts(notAllowedProducts));
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
         currentDaySummary(data);

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

      // console.log(daySummary);
      dispatch(dayActions.daySummary(daySummary));
      dispatch(dayActions.dayId(_id));
      dispatch(dayActions.notAllowedProducts(notAllowedProducts));
      // refact --v
      if (!_id) {
         // daySummarySetState({ ...data }, dispatch);
         dispatch(dayActions.emptyEatenProducts());
         dispatch(loaderActions.endLoader());
         return;
      }
      dispatch(dayActions.daySummary(daySummary));
      dispatch(dayActions.dayId(_id));

      // daySummarySetState(daySummary, dispatch);

      eatenProductsSetState(eatenProducts, dispatch);
      // ----^
   } catch (error) {
      if (error.response.status === 401) {
         dispatch(userActions.logoutUserSuccess());
      }

      dispatch(dayActions.infoForDayError(error));
   }
};

function currentDaySummary(data) {
   if (data.daySummary) {
      return data.daySummary;
   }
   if (data.newDaySummary) {
      return data.newDaySummary;
   }
}

function eatenProductsSetState(eatenProducts, dispatch) {
   if (eatenProducts) {
      dispatch(dayActions.eatenProductSuccess(eatenProducts));
   } else {
      dispatch(dayActions.emptyEatenProducts());
   }
}

// function daySummarySetState(daySummary, dispatch) {
//    if (daySummary) {
//       dispatch(dayActions.daySummary(daySummary));
//    } else {
//       dispatch(dayActions.emptyDaySummary());
//    }
// }

export default {
   postEatenProduct,
   getInfoForDay,
   deleteProduct,
};
