import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import userAction from './userActions';

const projectState = {
   accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmMyMDg1YmQwOTM2NTI4MTA3Y2UyNzQiLCJzaWQiOiI1ZmMyZDJmY2UxZDIwNTA2NzAyYmRkMjIiLCJpYXQiOjE2MDY2MDM1MTYsImV4cCI6MTYwNjYwNzExNn0.rJ_QjU4KvA76H96RHsvOBChK0Vjbd0NmqjMxdQVJIXA',
   refreshToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmMyMDg1YmQwOTM2NTI4MTA3Y2UyNzQiLCJzaWQiOiI1ZmMyZDJmY2UxZDIwNTA2NzAyYmRkMjIiLCJpYXQiOjE2MDY2MDM1MTYsImV4cCI6MTYwNjYwNzExNn0.rJ_QjU4KvA76H96RHsvOBChK0Vjbd0NmqjMxdQVJIXB',
   sid: '507f1f77bcf86cd799439011',
   todaySummary: {
      date: '2020-12-31',
      kcalLeft: 1000,
      kcalConsumed: 1000,
      dailyRate: 2000,
      percentsOfDailyRate: 50,
      userId: '507f1f77bcf86cd799439011',
      id: '507f1f77bcf86cd799439012',
   },
   user: {
      email: 'user@example.com',
      username: 'Emma',
      userData: {
         weight: 100,
         height: 170,
         age: 30,
         bloodType: 1,
         desiredWeight: 60,
         dailyRate: 2000,
         notAllowedProducts: ['Омлет'],
      },
      id: '507f1f77bcf86cd799439011',
   },
};

const initialStateUser = {
   email: null,
   username: null,
   id: null,
};

// const initialStateToken = {
//    accessToken: null,
//    refreshToken: null,
// };

const user = createReducer(initialStateUser, {
   [userAction.loginUserSuccess]: (_, { payload }) => payload.user,
   [userAction.currentUserSuccess]: (_, { payload }) => payload,
   [userAction.logoutUserSuccess]: () => initialStateUser,
});

const accessToken = createReducer(null, {
   [userAction.loginUserSuccess]: (_, { payload }) => payload.token,
   [userAction.logoutUserSuccess]: () => null,
});

const refreshToken = createReducer(null, {
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
   accessToken,
   error,
});
