import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import dayAction from './dayActions';
import { dayActions } from '.';

const date = createReducer('', {
   [dayAction.dayFromCalendar]: (_, { payload }) => payload,
});

const eatenProducts = createReducer([], {
   [dayAction.eatenProductSuccess]: (_, { payload }) => payload,
});

const deleteData = createReducer(
   {},
   {
      [dayActions.deleteEatenProductSuccess]: (state, payload) => payload,
   },
);

export default combineReducers({
   date,
   eatenProducts,
   deleteData,
});
