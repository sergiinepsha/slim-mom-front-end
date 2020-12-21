import { createAction } from '@reduxjs/toolkit';

const getDailyIntakeRequest = createAction('dailyRate/fetchRequest');
const getDailyIntakeSuccess = createAction('dailyRate/fetchSuccess');
const getDailyIntakeError = createAction('dailyRate/fetchError');

export default {
   getDailyIntakeRequest,
   getDailyIntakeSuccess,
   getDailyIntakeError,
};
