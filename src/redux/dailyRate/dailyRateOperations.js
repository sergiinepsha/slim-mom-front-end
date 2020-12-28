/* eslint-disable import/no-anonymous-default-export */
import fetchDB from '../../services/fetchDB';

import { dailyRateActions } from './';

const getDailyIntake = async (userCharacteristics, dispatch) => {
   dispatch(dailyRateActions.getDailyIntakeRequest());

   try {
      const date = await fetchDB.post('/daily-rate', userCharacteristics);
      dispatch(dailyRateActions.getDailyIntakeSuccess(date));
   } catch (error) {
      dispatch(dailyRateActions.getDailyIntakeError(error));
   }
};

const getDailyIntakeById = async (userCharacteristics, userId, dispatch) => {
   dispatch(dailyRateActions.getDailyIntake_ID_Request());

   try {
      const date = await fetchDB.post(`/daily-rate/${userId}`, userCharacteristics);
      dispatch(dailyRateActions.getDailyIntake_ID_Success(date));
   } catch (error) {
      dispatch(dailyRateActions.getDailyIntake_ID_Error(error));
   }
};

export default {
   getDailyIntake,
   getDailyIntakeById,
};
