import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import dailyRateActions from './dailyRateActions';

const onAddDailyRate = (state, { payload }) => payload;
const onDialyID = (state, { payload }) => state.filter(({ id }) => id !== payload);

const dailyRate = createReducer(
   {},
   {
      [dailyRateActions.fetchDailyRateSuccess]: (_, { payload }) => payload,
      [dailyRateActions.addDailyRateSuccess]: onAddDailyRate,
      [dailyRateActions.removeDailyRateSuccess]: onDialyID,
   },
);

const loading = createReducer(false, {
   [dailyRateActions.fetchDailyRateRequest]: () => true,
   [dailyRateActions.fetchDailyRateSuccess]: () => false,
   [dailyRateActions.fetchDailyRateError]: () => false,
   [dailyRateActions.addDailyRateRequest]: () => true,
   [dailyRateActions.addDailyRateSuccess]: () => false,
   [dailyRateActions.addDailyRateError]: () => false,
   [dailyRateActions.removeDailyRateRequest]: () => true,
   [dailyRateActions.removeDailyRateSuccess]: () => false,
   [dailyRateActions.removeDailyRateError]: () => false,
});

export default combineReducers({
   dailyRate,
   loading,
});
