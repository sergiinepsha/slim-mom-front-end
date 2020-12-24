/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const getDailyIntakeRequest = createAction('dailyRate/fetchRequest');
const getDailyIntakeSuccess = createAction('dailyRate/fetchSuccess');
const getDailyIntakeError = createAction('dailyRate/fetchError');

const getDailyIntake_ID_Request = createAction('dailyRate/fetchIntake_ID_Request');
const getDailyIntake_ID_Success = createAction('dailyRate/fetchIntake_ID_Success');
const getDailyIntake_ID_Error = createAction('dailyRate/fetchIntake_ID_Error');

export default {
   getDailyIntakeRequest,
   getDailyIntakeSuccess,
   getDailyIntakeError,

   getDailyIntake_ID_Request,
   getDailyIntake_ID_Success,
   getDailyIntake_ID_Error,
};
