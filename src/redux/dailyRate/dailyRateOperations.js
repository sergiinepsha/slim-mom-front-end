import axios from 'axios';
import dailyRateActions from './dailyRateActions';

axios.defaults.baseURL = 'https://slimmom-backend.herokuapp.com';

const fetchDailyRate = () => async dispatch => {
   dispatch(dailyRateActions.fetchDailyRateRequest());
   await axios
      .get('/daily-rate')
      .then(res => dispatch(dailyRateActions.fetchDailyRateSuccess(res)))
      .catch(error => dispatch(dailyRateActions.fetchDailyRateError(error)));
};

const addDailyRate = credentials => async dispatch => {
   dispatch(dailyRateActions.addDailyRateRequest());
   await axios
      .post('/daily-rate', credentials)
      .then(({ data }) => {
         console.log(data);
         return dispatch(dailyRateActions.addDailyRateSuccess(data));
      })
      .catch(error => dispatch(dailyRateActions.addDailyRateError(error)));
};

const addDailyID = userID => async dispatch => {
   dispatch(dailyRateActions.addDailyRateRequest());
   await axios
      .post(`/daily-rate/${userID}`)
      .then(({ data }) => {
         console.log(data);
         return dispatch(dailyRateActions.addDailyRateSuccess(data));
      })
      .catch(error => dispatch(dailyRateActions.addDailyRateError(error)));
};

export default {
   fetchDailyRate,
   addDailyRate,
   addDailyID,
};
