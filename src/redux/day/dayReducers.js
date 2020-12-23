import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { dayActions } from './';

const INITIAL_DAY_SUMMARY = {
   kcalLeft: 0,
   kcalConsumed: 0,
   dailyRate: 0,
   percentsOfDailyRate: 0,
};

const getDaySummary = (_, { payload }) => {
   const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } = payload;
   return { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate };
};

const deleteEatenProduct = (state, { payload }) => state.filter(({ id }) => id !== payload);

const date = createReducer('', {
   [dayActions.getDate]: (_, { payload }) => payload,
});

const dayId = createReducer('', {
   [dayActions.dayId]: (_, { payload }) => payload,
});

const eatenProducts = createReducer([], {
   [dayActions.eatenProductSuccess]: (_, { payload }) => payload,
   [dayActions.deleteEatenProductSuccess]: deleteEatenProduct,
   [dayActions.emptyEatenProducts]: () => [],
});

const daySummary = createReducer(INITIAL_DAY_SUMMARY, {
   [dayActions.daySummary]: getDaySummary,
   [dayActions.emptyDaySummary]: () => INITIAL_DAY_SUMMARY,
});

export default combineReducers({
   dayId,
   date,
   eatenProducts,
   daySummary,
});
