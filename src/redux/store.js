import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { isErrorAlert, isRefresh } from '../middleware';

import { userReducers } from '../redux/auth';
import { productReducer } from '../redux/product';
import { loaderReducer } from '../redux/loader';
import dailyRateReducer from './dailyRate/dailyRateReducer';
import { errorReducer } from './error';
import { modalReducers } from './modal';
import { dayReducers } from './day';

const defMidd = getDefaultMiddleware({
   serializableCheck: false,
});

const authUserPersistConfig = {
   key: 'authUser',
   storage,
   whitelist: ['accessToken'],
};

export const store = configureStore({
   reducer: {
      authUser: persistReducer(authUserPersistConfig, userReducers),
      day: dayReducers,
      products: productReducer,
      dailyRateData: dailyRateReducer,
      isModal: modalReducers,
      isError: errorReducer,
      loader: loaderReducer,
   },
   middleware: [...defMidd, isRefresh, isErrorAlert],
});
export const persistor = persistStore(store);
