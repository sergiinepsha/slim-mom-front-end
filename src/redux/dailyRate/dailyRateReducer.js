import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import dailyRateActions from './dailyRateActions';

const INITIAL_DAILY_RATE = {
   dailyRate: null,
   notAllowedProducts: [],
};

const dailyRate = createReducer(INITIAL_DAILY_RATE, {
   [dailyRateActions.getDailyIntakeSuccess]: (_, { payload }) => payload,
   [dailyRateActions.clearDailyIntake]: () => INITIAL_DAILY_RATE,
});

export default combineReducers({
   dailyRate,
});
