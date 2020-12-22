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

import { loginState, errorState } from '../middleware/loginState';

import { userReducers } from '../redux/auth';
import { productReducer } from '../redux/product';
import { loaderReducer } from '../redux/loader';
import dailyRateReducer from './dailyRate/dailyRateReducer';
import dayReducer from '../redux/day/dayReducer';
import { errorReducer } from './error';
import modalReducers from './modal/modalReducers';
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
      products: productReducer,
      loader: loaderReducer,
      isError: errorReducer,
      dailyRateData: dailyRateReducer,
      isModal: modalReducers,
      curentDate: dayReducer,
   },
   middleware: [...defMidd, loginState, errorState],
});
export const persistor = persistStore(store);

// nina@mail.com, пароль 123
