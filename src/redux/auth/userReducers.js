import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import userAction from './userActions';

const INITIAL_USER_STATE = {
   email: null,
   name: null,
   id: null,
   // notAllowedProducts: [],
};

const userLogged = (_, { payload }) => {
   const { email, name, id, userData } = payload.user;
   // const { notAllowedProducts } = userData;
   return { email, name, id };
};

const getCurrentUser = (_, { payload }) => {
   const { email, name, id, userData } = payload;
   // const { notAllowedProducts } = userData;
   return { email, name, id };
};

const user = createReducer(INITIAL_USER_STATE, {
   [userAction.loginUserSuccess]: userLogged,
   [userAction.currentUserSuccess]: getCurrentUser,
   [userAction.logoutUserSuccess]: () => INITIAL_USER_STATE,
});

const accessToken = createReducer(null, {
   [userAction.loginUserSuccess]: (_, { payload }) => payload.accessToken,
   [userAction.logoutUserSuccess]: () => null,
});

const refreshToken = createReducer(null, {
   [userAction.loginUserSuccess]: (_, { payload }) => payload.refreshToken,
   [userAction.logoutUserSuccess]: () => null,
});

const sid = createReducer(null, {
   [userAction.loginUserSuccess]: (_, { payload }) => payload.sid,
   [userAction.logoutUserSuccess]: () => null,
});

export default combineReducers({
   user,
   accessToken,
   refreshToken,
   sid,
});
