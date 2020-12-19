import { createAction } from '@reduxjs/toolkit';

const fetchDailyRateRequest = createAction('dailyRate/fetchRequest');
const fetchDailyRateSuccess = createAction('dailyRate/fetchSuccess');
const fetchDailyRateError = createAction('dailyRate/fetchError');

const addDailyRateRequest = createAction('dailyRate/addRequest');
const addDailyRateSuccess = createAction('dailyRate/addSuccess');
const addDailyRateError = createAction('dailyRate/addError');

export default {
   fetchDailyRateRequest,
   fetchDailyRateSuccess,
   fetchDailyRateError,
   addDailyRateRequest,
   addDailyRateSuccess,
   addDailyRateError,
};
