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

import { userReducers } from '../redux/auth';
import { productReducer } from '../redux/product';
import { loaderReducer } from '../redux/loader';
import dailyRateReducer from './dailyRate/dailyRateReducer';
import { loginState } from '../middleware/loginState';
import modalReducers from './modal/modalReducers';
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
      products: productReducer,
      loader: loaderReducer,
      dailyRateData: dailyRateReducer,
      isModal: modalReducers,
      day: dayReducers,
   },
   middleware: [...defMidd, loginState],
});
export const persistor = persistStore(store);

// nina@mail.com, пароль 123
