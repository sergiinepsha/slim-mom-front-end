import fetchDB from '../../services/fetchDB';

import { dailyRateActions } from './';

const getDailyIntake = async (userCharacteristics, dispatch) => {
   dispatch(dailyRateActions.getDailyIntakeRequest());

   try {
      const date = await fetchDB.post('/daily-rate', userCharacteristics);
      console.log(date);

      dispatch(dailyRateActions.getDailyIntakeSuccess(date));
   } catch (error) {
      dispatch(dailyRateActions.getDailyIntakeError());
   }
};

const getDailyIntakeById = async (userCharacteristics, userId, dispatch) => {
   dispatch(dailyRateActions.getDailyIntake_ID_Request());

   try {
      const date = await fetchDB.post(`/daily-rate/${userId}`, userCharacteristics);
      console.log(date);

      dispatch(dailyRateActions.getDailyIntake_ID_Success(date));
   } catch (error) {
      dispatch(dailyRateActions.getDailyIntake_ID_Error());
   }
};

// const fetchDailyRate = () => async dispatch => {
//    dispatch(dailyRateActions.fetchDailyRateRequest());
//    await axios
//       .get('/daily-rate')
//       .then(res => dispatch(dailyRateActions.fetchDailyRateSuccess(res)))
//       .catch(error => dispatch(dailyRateActions.fetchDailyRateError(error)));
// };

// const addDailyRate = credentials => async dispatch => {
//    dispatch(dailyRateActions.addDailyRateRequest());
//    await axios
//       .post('/daily-rate', credentials)
//       .then(({ data }) => {
//          console.log(data);
//          return dispatch(dailyRateActions.addDailyRateSuccess(data));
//       })
//       .catch(error => dispatch(dailyRateActions.addDailyRateError(error)));
// };

// const addDailyID = userID => async dispatch => {
//    dispatch(dailyRateActions.addDailyRateRequest());
//    await axios
//       .post(`/daily-rate/${userID}`)
//       .then(({ data }) => {
//          console.log(data);
//          return dispatch(dailyRateActions.addDailyRateSuccess(data));
//       })
//       .catch(error => dispatch(dailyRateActions.addDailyRateError(error)));
// };

export default {
   getDailyIntake,
   getDailyIntakeById,
   // fetchDailyRate,
   // addDailyRate,
   // addDailyID,
};
