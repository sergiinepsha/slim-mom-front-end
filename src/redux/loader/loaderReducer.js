import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import loaderAction from './loaderActions';

const loader = createReducer(null, {
   [loaderAction.startLoaderSuccess]: (_, { payload }) => payload,
   [loaderAction.endLoaderSuccess]: () => null,
});

export default combineReducers({
   loader,
});
