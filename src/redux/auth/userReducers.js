import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import userAction from './userActions';

const initialStateUser = {
  email: null,
  name: null,
};

const user = createReducer(initialStateUser, {
  [userAction.registerSuccess]: (_, { payload }) => payload.user,
  [userAction.loginUserSuccess]: (_, { payload }) => payload.user,
  [userAction.currentUserSuccess]: (_, { payload }) => payload,
  [userAction.logoutUserSuccess]: () => initialStateUser,
});

const token = createReducer(null, {
  [userAction.registerSuccess]: (_, { payload }) => payload.token,
  [userAction.loginUserSuccess]: (_, { payload }) => payload.token,
  [userAction.logoutUserSuccess]: () => null,
});

const error = createReducer(null, {
  [userAction.registerUserError]: (_, { payload }) => payload,
  [userAction.loginUserError]: (_, { payload }) => payload,
  [userAction.currentUserError]: (_, { payload }) => payload,
  [userAction.logoutUserError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [userAction.loginUserRequest]: () => true,
  [userAction.loginUserSuccess]: () => false,
  [userAction.loginUserError]: () => false,

  [userAction.logoutUserRequest]: () => true,
  [userAction.logoutUserRequest]: () => false,
  [userAction.logoutUserError]: () => false,

  [userAction.signupUserRequest]: () => true,
  [userAction.signupUserSuccess]: () => false,
  [userAction.signupUserError]: () => false,

  [userAction.currentUserRequest]: () => true,
  [userAction.currentUserSuccess]: () => false,
  [userAction.currentUserError]: () => false,
});

export default combineReducers({
  loading,
  user,
  token,
  error,
});
