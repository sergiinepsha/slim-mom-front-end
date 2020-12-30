import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REGISTER,
   PERSIST,
   PURGE,
   PAUSE,
   REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { isErrorAlert, loginState } from '../middleware';

import { userReducers } from '../redux/auth';
import { productReducer } from '../redux/product';
import { loaderReducer } from '../redux/loader';
import dailyRateReducer from './dailyRate/dailyRateReducer';
import { errorReducer } from './error';
import { modalReducers } from './modal';
import { dayReducers } from './day';

const defMidd = getDefaultMiddleware({
   serializableCheck: {
      ignoredActions: [FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REHYDRATE],
   },
});

const authUserPersistConfig = {
   key: 'authUser',
   storage,
   whitelist: ['accessToken'],
   // blacklist: ['', '', ''],// -- сохраняет всё кроме этих
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
   middleware: [...defMidd], // loginState, isErrorAlert
});
export const persistor = persistStore(store);
