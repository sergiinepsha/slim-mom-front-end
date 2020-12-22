import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import dayAction from './dayActions';

const day = createReducer('', {
   [dayAction.dayFromCalendar]: (state, { payload }) => payload,
});

const eatenProduct = createReducer([], {
   [dayAction.eatenProductSuccess]: (state, { payload }) => payload,
});

export default combineReducers({
   day,
   eatenProduct,
});
