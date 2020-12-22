import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { dayActions } from './';

const INITIAL_DAY_SUMMARY = {
   date: '',
   kcalLeft: null,
   kcalConsumed: null,
   dailyRate: null,
   percentsOfDailyRate: null,
};

const getDaySummary = (_, { payload }) => {
   const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } = payload;
   return { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate };
};

const date = createReducer('', {
   [dayActions.getDate]: (_, { payload }) => payload,
});

const id = createReducer('', {
   [dayActions.dayId]: (_, { payload }) => payload,
});

const eatenProducts = createReducer([], {
   [dayActions.eatenProductSuccess]: (_, { payload }) => payload,
   [dayActions.emptyEatenProducts]: () => [],
});

const daySummary = createReducer(INITIAL_DAY_SUMMARY, {
   [dayActions.daySummary]: getDaySummary,
   [dayActions.emptyDaySummary]: () => INITIAL_DAY_SUMMARY,
});

export default combineReducers({
   id,
   date,
   eatenProducts,
   daySummary,
});
