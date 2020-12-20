import { createReducer } from '@reduxjs/toolkit';

import { userActions } from '../auth';
import modalAction from '../modal/modalActions';
import { productActions } from '../product';
import { dailyRateActions } from '../dailyRate';
import loaderAction from './loaderActions';

const loader = createReducer(false, {
   [loaderAction.startLoader]: () => false,
   [loaderAction.endLoader]: () => true,

   [userActions.loginUserError]: () => false,
   [userActions.loginUserRequest]: () => false,
   [userActions.loginUserSuccess]: () => true,

   [userActions.registerUserError]: () => false,
   [userActions.registerUserRequest]: () => false,
   [userActions.registerUserSuccess]: () => true,

   [userActions.logoutUserError]: () => false,
   [userActions.logoutUserRequest]: () => false,
   [userActions.logoutUserSuccess]: () => true,

   [userActions.currentUserError]: () => false,
   [userActions.currentUserRequest]: () => false,
   [userActions.currentUserSuccess]: () => true,

   [modalAction.modalOpen]: () => false,
   [modalAction.modalClose]: () => true,

   [productActions.fetchProductError]: () => false,
   [productActions.fetchProductRequest]: () => false,
   [productActions.fetchProductSuccess]: () => true,

   [productActions.removeProductError]: () => false,
   [productActions.removeProductRequest]: () => false,
   [productActions.removeProductSuccess]: () => true,

   [productActions.addProductError]: () => false,
   [productActions.addProductRequest]: () => false,
   [productActions.addProductSuccess]: () => true,

   [dailyRateActions.fetchDailyRateError]: () => false,
   [dailyRateActions.fetchDailyRateRequest]: () => false,
   [dailyRateActions.fetchDailyRateSuccess]: () => true,

   [dailyRateActions.addDailyRateError]: () => false,
   [dailyRateActions.addDailyRateRequest]: () => false,
   [dailyRateActions.addDailyRateSuccess]: () => true,
});

export default loader;
