import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import productAction from './productActions';

const products = createReducer([], {
   [productAction.getProductSuccess]: (state, { payload }) => payload,
});

export default combineReducers({
   products,
});
