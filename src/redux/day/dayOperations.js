/* eslint-disable import/no-anonymous-default-export */
import { dayActions } from './';
import fetchDB from '../../services/fetchDB';
import loaderActions from '../loader/loaderActions';

const postEatenProduct = async (reqBody, dispatch) => {
   dispatch(dayActions.eatenProductRequest());

   try {
      const data = await fetchDB.post(`/day`, reqBody);
      const { day, daySummary } = data;

      dispatch(dayActions.eatenProductSuccess(day.eatenProducts));
      dispatch(dayActions.daySummary(daySummary));
   } catch (error) {
      dispatch(dayActions.eatenProductError(error));
   }
};

const deleteProduct = async (productAndDayIds, dispatch) => {
   const { eatenProductId } = productAndDayIds;
   dispatch(dayActions.deleteEatenProductRequest());

   try {
      const data = await fetchDB.del('/day', productAndDayIds);

      if (data) {
         const daySummary = currentDaySummary(data);

         dispatch(dayActions.deleteEatenProductSuccess(eatenProductId));
         dispatch(dayActions.daySummary(daySummary));
      }
   } catch (error) {
      dispatch(dayActions.deleteEatenProductError(error));
   }
};

const getInfoForDay = async (date, dispatch) => {
   dispatch(dayActions.infoForDayRequest());

   try {
      const { id, eatenProducts, daySummary } = await fetchDB.post('/day/info', { date });

      if (!id) {
         dispatch(dayActions.emptyDaySummary());
         dispatch(loaderActions.endLoader());
         return;
      }

      console.log(eatenProducts);

      dispatch(dayActions.dayId(id));

      daySummarySetState(daySummary, dispatch);

      eatenProductsSetState(eatenProducts, dispatch);
   } catch (error) {
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

function daySummarySetState(daySummary, dispatch) {
   if (daySummary) {
      dispatch(dayActions.daySummary(daySummary));
   } else {
      dispatch(dayActions.emptyDaySummary());
   }
}

export default {
   postEatenProduct,
   getInfoForDay,
   deleteProduct,
};
