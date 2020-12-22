import { createReducer } from '@reduxjs/toolkit';

import { userActions } from '../auth';
import { productActions } from '../product';
import { dailyRateActions } from '../dailyRate';

const isError = createReducer(null, {
   [userActions.loginUserError]: (_, { payload }) => payload,
   [userActions.registerUserError]: (_, { payload }) => payload,
   [userActions.logoutUserError]: (_, { payload }) => payload,
   [userActions.currentUserError]: (_, { payload }) => payload,

   [productActions.getProductError]: (_, { payload }) => payload,

   [dailyRateActions.fetchDailyRateError]: (_, { payload }) => payload,
   [dailyRateActions.addDailyRateError]: (_, { payload }) => payload,
});

export default isError;
// (payload = {
//    name: payload.name,
// }),
