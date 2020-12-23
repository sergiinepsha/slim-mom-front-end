import { createReducer } from '@reduxjs/toolkit';

import { dayActions } from '../day';
import { userActions } from '../auth';
import { productActions } from '../product';
import { dailyRateActions } from '../dailyRate';
import newError, { readingInError } from './errorActions';

const isError = createReducer(
   { error: '' },
   {
      [newError]: (state, { payload }) => ({
         ...state,
         error: '',
      }),

      [readingInError]: (state, { payload }) => ({
         ...state,
         error: payload,
      }),
      [userActions.loginUserError]: (state, { payload }) => ({
         ...state,
         error: payload.message,
         login: payload.message,
      }),
      [userActions.registerUserError]: (state, { payload }) => ({
         ...state,
         error: payload.message,
         register: payload.message,
      }),
      [userActions.logoutUserError]: (state, { payload }) => ({
         ...state,
         error: payload.message,
         logout: payload.message,
      }),
      [userActions.currentUserError]: (state, { payload }) => ({
         ...state,
         error: payload.message,
         current: payload.message,
      }),

      [dayActions.eatenProductError]: (state, { payload }) => ({
         ...state,
         error: payload.message,
         eatenProduct: payload.message,
      }),
      [dayActions.infoForDayError]: (state, { payload }) => ({
         ...state,
         error: payload.message,
         infoForDay: payload.message,
      }),

      [productActions.getProductError]: (state, { payload }) => ({
         ...state,
         error: payload.message,
         product: payload.message,
      }),

      [dailyRateActions.getDailyIntakeError]: (state, { payload }) => ({
         ...state,
         error: payload.message,
         DailyIntake: payload.message,
      }),

      [dailyRateActions.getDailyIntake_ID_Error]: (state, { payload }) => ({
         ...state,
         error: payload.message,
         DailyIntake_ID: payload.message,
      }),
   },
);

export default isError;

// (payload = {
//    name: payload.name,
// }),
