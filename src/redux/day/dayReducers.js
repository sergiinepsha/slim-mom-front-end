import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import dayAction from './dayActions';

const date = createReducer('', {
   [dayAction.dayFromCalendar]: (_, { payload }) => payload,
});

const eatenProducts = createReducer([], {
   [dayAction.eatenProductSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
   date,
   eatenProducts,
});
