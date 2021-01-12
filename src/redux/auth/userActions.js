/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const loginUserRequest = createAction('POST/loginUserRequest');
const loginUserSuccess = createAction('POST/loginUserSuccess');
const loginUserError = createAction('POST/loginUserError');

const registerUserRequest = createAction('POST/registerUserRequest');
const registerUserSuccess = createAction('POST/registerUserSuccess');
const registerUserError = createAction('POST/registerUserError');

const validateFormError = createAction('auth/validateFormError');

const logoutUserRequest = createAction('POST/logoutUserRequest');
const logoutUserSuccess = createAction('POST/logoutUserSuccess');
const logoutUserError = createAction('POST/logoutUserError');

const currentUserRequest = createAction('GET/currentUserRequest');
const currentUserSuccess = createAction('GET/currentUserSuccess');
const currentUserError = createAction('GET/currentUserError');

const refreshUserRequest = createAction('POST/refreshUserRequest');
const refreshUserSuccess = createAction('POST/refreshUserSuccess');
const refreshUserError = createAction('POST/refreshUserError');

export default {
   loginUserRequest,
   loginUserSuccess,
   loginUserError,

   registerUserRequest,
   registerUserSuccess,
   registerUserError,

   validateFormError,

   logoutUserRequest,
   logoutUserSuccess,
   logoutUserError,

   currentUserRequest,
   currentUserSuccess,
   currentUserError,

   refreshUserRequest,
   refreshUserSuccess,
   refreshUserError,
};
