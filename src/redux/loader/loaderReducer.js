// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { userActions } from '../auth';
import modalAction from '../modal/modalActions';
import { productActions } from '../product';
import { dailyRateActions } from '../dailyRate';
import loaderAction from './loaderActions';

const loader = createReducer(false, {
   [loaderAction.startLoader]: () => true,
   [loaderAction.endLoader]: () => false,

   [userActions.loginUserError]: () => true,
   [userActions.loginUserRequest]: () => true,
   [userActions.loginUserSuccess]: () => false,

   [userActions.registerUserError]: () => true,
   [userActions.registerUserRequest]: () => true,
   [userActions.registerUserSuccess]: () => false,

   [userActions.logoutUserError]: () => true,
   [userActions.logoutUserRequest]: () => true,
   [userActions.logoutUserSuccess]: () => false,

   [userActions.currentUserError]: () => true,
   [userActions.currentUserRequest]: () => true,
   [userActions.currentUserSuccess]: () => false,

   [modalAction.modalOpen]: () => true,
   [modalAction.modalClose]: () => false,

   [productActions.fetchProductError]: () => true,
   [productActions.fetchProductRequest]: () => true,
   [productActions.fetchProductSuccess]: () => false,

   [productActions.removeProductError]: () => true,
   [productActions.removeProductRequest]: () => true,
   [productActions.removeProductSuccess]: () => false,

   [productActions.addProductError]: () => true,
   [productActions.addProductRequest]: () => true,
   [productActions.addProductSuccess]: () => false,

   [dailyRateActions.fetchDailyRateError]: () => true,
   [dailyRateActions.fetchDailyRateRequest]: () => true,
   [dailyRateActions.fetchDailyRateSuccess]: () => false,

   [dailyRateActions.addDailyRateError]: () => true,
   [dailyRateActions.addDailyRateRequest]: () => true,
   [dailyRateActions.addDailyRateSuccess]: () => false,
});

export default loader;
