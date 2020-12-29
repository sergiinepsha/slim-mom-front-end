/* eslint-disable import/no-anonymous-default-export */
import fetchDB from '../../services/fetchDB';

import { dailyRateActions } from './';
import { dayActions } from '../day';

const getDailyIntake = async (userCharacteristics, dispatch) => {
   dispatch(dailyRateActions.getDailyIntakeRequest());

   try {
      const data = await fetchDB.post('/daily-rate', userCharacteristics);

      dispatch(dailyRateActions.getDailyIntakeSuccess(data));
   } catch (error) {
      dispatch(dailyRateActions.getDailyIntakeError(error));
   }
};

const getDailyIntakeById = async (userCharacteristics, userId, dispatch) => {
   dispatch(dailyRateActions.getDailyIntake_ID_Request());

   try {
      const data = await fetchDB.post(`/daily-rate/${userId}`, userCharacteristics);
      dispatch(dayActions.daySummary(data.daySummary));
      dispatch(dailyRateActions.getDailyIntake_ID_Success(data)); // TODO:  !?
   } catch (error) {
      dispatch(dailyRateActions.getDailyIntake_ID_Error(error));
   }
};

export default {
   getDailyIntake,
   getDailyIntakeById,
};
