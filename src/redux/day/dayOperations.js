/* eslint-disable import/no-anonymous-default-export */
import { dayActions } from './';
import fetchDB from '../../services/fetchDB';

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
      console.log(productAndDayIds);
      const products = await fetchDB.del('/day', productAndDayIds);
      console.log(products);

      if (products) {
         const { daySummary } = products;

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
      console.log(eatenProducts);
      dispatch(dayActions.dayId(id));

      daySummarySetState(daySummary, dispatch);

      eatenProductsSetState(eatenProducts, dispatch);
   } catch (error) {
      dispatch(dayActions.infoForDayError(error));
   }
};

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
