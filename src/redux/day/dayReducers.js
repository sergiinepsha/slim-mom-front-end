import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { dayActions } from './';

const date = createReducer('', {
   [dayActions.dayFromCalendar]: (_, { payload }) => payload,
});

const eatenProducts = createReducer([], {
   [dayActions.eatenProductSuccess]: (_, { payload }) => payload,
   [dayActions.emptyEatenProducts]: () => [],
});

const infoDay = createReducer();

export default combineReducers({
   date,
   eatenProducts,
});
