import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import dailyRateActions from './dailyRateActions';

const INITIAL_DAILY_RATE = {
   dailyRate: null,
   notAllowedProducts: [],
};

// const onAddDailyRate = (state, { payload }) => payload;

const dailyRate = createReducer(INITIAL_DAILY_RATE, {
   [dailyRateActions.getDailyIntakeSuccess]: (_, { payload }) => payload,
   // [dailyRateActions.addDailyRateSuccess]: onAddDailyRate,
   // [dailyRateActions.addDailyIDSuccess]: (state, { payload }) => payload,
});

// const loading = createReducer(false, {
//    [dailyRateActions.fetchDailyRateRequest]: () => true,
//    [dailyRateActions.fetchDailyRateSuccess]: () => false,
//    [dailyRateActions.fetchDailyRateError]: () => false,
//    [dailyRateActions.addDailyRateRequest]: () => true,
//    [dailyRateActions.addDailyRateSuccess]: () => false,
//    [dailyRateActions.addDailyRateError]: () => false,
//    [dailyRateActions.addDailyIDSuccess]: () => false,
//    [dailyRateActions.addDailyIDRequest]: () => true,
//    [dailyRateActions.addDailyIDError]: () => false,
// });

export default combineReducers({
   dailyRate,
   // loading,
});
