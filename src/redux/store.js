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

const defMidd = getDefaultMiddleware({
   serializableCheck: {
      ignoredActions: [FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REHYDRATE],
   },
});

const authUserPersistConfig = {
   key: 'authUser',
   storage,
   whitelist: ['token'],
   // blacklist: ['', '', ''],// -- сохраняет всё кроме этих
};

export const store = configureStore({
   reducer: {
      authUser: persistReducer(authUserPersistConfig, userReducers),
      products: productReducer,
   },
   middleware: [...defMidd],
});
export const persistor = persistStore(store);
