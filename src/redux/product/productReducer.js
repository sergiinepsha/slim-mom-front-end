import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import productAction from './productActions';

const onAddProduct = (state, { payload }) => [payload, ...state];
const onRemoveProduct = (state, { payload }) => state.filter(({ id }) => id !== payload);

const items = createReducer([], {
   [productAction.fetchProductSuccess]: (_, { payload }) => payload,
   [productAction.addProductSuccess]: onAddProduct,
   [productAction.removeProductSuccess]: onRemoveProduct,
});

const loading = createReducer(false, {
   [productAction.fetchProductRequest]: () => true,
   [productAction.fetchProductSuccess]: () => false,
   [productAction.fetchProductError]: () => false,
   [productAction.addProductRequest]: () => true,
   [productAction.addProductSuccess]: () => false,
   [productAction.addProductError]: () => false,
   [productAction.removeProductRequest]: () => true,
   [productAction.removeProductSuccess]: () => false,
   [productAction.removeProductError]: () => false,
});

export default combineReducers({
   items,
   loading,
});
