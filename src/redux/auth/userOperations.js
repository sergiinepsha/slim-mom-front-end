/* eslint-disable import/no-anonymous-default-export */
import { userActions } from './';

import fetchDB, { tokenToHeader } from '../../services/fetchDB';

const registerUser = credentials => async dispatch => {
   dispatch(userActions.registerUserRequest());

   try {
      const data = await fetchDB.post(`/auth/register`, credentials);
      console.log(data); ///

      tokenToHeader.set(data.token);

      dispatch(userActions.registerUserSuccess(data));
   } catch (error) {
      dispatch(userActions.registerUserError(error.message));
   }
};

const loginUser = credentials => async dispatch => {
   dispatch(userActions.loginUserRequest());

   try {
      const data = await fetchDB.post(`/auth/login`, credentials);

      tokenToHeader.set(data.token);

      dispatch(userActions.loginUserSuccess(data));
   } catch (error) {
      dispatch(userActions.loginUserError(error.message));
   }
};

const logoutUser = () => async dispatch => {
   dispatch(userActions.logoutUserRequest());

   try {
      await fetchDB.post(`/auth/logout`);

      tokenToHeader.unset();

      dispatch(userActions.logoutUserSuccess());
   } catch (error) {
      dispatch(userActions.logoutUserError(error.message));
   }
};

const currentUser = () => async (dispatch, persistedToken) => {
   if (!persistedToken) return;

   tokenToHeader.set(persistedToken);
   dispatch(userActions.currentUserRequest());

   try {
      const data = await fetchDB.get(`/user`);

      dispatch(userActions.currentUserSuccess(data));
   } catch (error) {
      dispatch(userActions.currentUserError(error.message));
   }
};

export default {
   logoutUser,
   registerUser,
   loginUser,
   currentUser,
};
