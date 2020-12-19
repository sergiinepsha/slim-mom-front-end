import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import userAction from './userActions';

const INITIAL_USER_STATE = {
   email: null,
   username: null,
};

const userLogged = (_, { payload }) => {
   const { email, username } = payload.user;
   return { email, username };
};

const getCurrentUser = (_, { payload }) => {
   const { email, username } = payload;
   return { email, username };
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
