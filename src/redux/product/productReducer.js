import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { productActions } from './';

const products = createReducer([], {
   [productActions.getProductSuccess]: (_, { payload }) => payload,
   [productActions.emptyProduct]: () => [],
});

export default combineReducers({
   products,
});
