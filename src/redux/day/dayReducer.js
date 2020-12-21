import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const daysReducer = createReducer([], {});

export default combineReducers({
   daysReducer,
});
