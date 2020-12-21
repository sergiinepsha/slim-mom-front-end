import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import productAction from './productActions';

const productReducer = createReducer([], {
   [productAction.getProductSuccess]: (state, { payload }) => [payload, ...state],
});

export default combineReducers({
   productReducer,
});
