import { createAction } from '@reduxjs/toolkit';

const loginUserRequest = createAction('POST/loginUserRequest');
const loginUserSuccess = createAction('POST/loginUserSuccess');
const loginUserError = createAction('POST/loginUserError');

const registerUserRequest = createAction('POST/registerUserRequest');
const registerUserSuccess = createAction('POST/registerUserSuccess');
const registerUserError = createAction('POST/registerUserError');

const logoutUserRequest = createAction('POST/logoutUserRequest');
const logoutUserSuccess = createAction('POST/logoutUserSuccess');
const logoutUserError = createAction('POST/logoutUserError');

const currentUserRequest = createAction('GET/currentUserRequest');
const currentUserSuccess = createAction('GET/currentUserSuccess');
const currentUserError = createAction('GET/currentUserError');

export default {
   loginUserRequest,
   loginUserSuccess,
   loginUserError,

   registerUserRequest,
   registerUserSuccess,
   registerUserError,

   logoutUserRequest,
   logoutUserSuccess,
   logoutUserError,

   currentUserRequest,
   currentUserSuccess,
   currentUserError,
};
