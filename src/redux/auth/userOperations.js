/* eslint-disable import/no-anonymous-default-export */
import { userActions } from './';

import fetchDB, { tokenToHeader } from '../../services/fetchDB';

const registerAndLoginUser = async (credentials, dispatch) => {
   dispatch(userActions.registerUserRequest());

   try {
      await fetchDB.post(`/auth/register`, credentials);

      dispatch(userActions.registerUserSuccess());

      const { email, password } = credentials;
      await loginUser({ email, password }, dispatch);
   } catch (error) {
      dispatch(userActions.registerUserError(error.message));
   }
};

const loginUser = async (credentials, dispatch) => {
   dispatch(userActions.loginUserRequest());

   try {
      const data = await fetchDB.post(`/auth/login`, credentials);

      tokenToHeader.set(data.accessToken);

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

const getCurrentUser = async (persistedToken, dispatch) => {
   if (!persistedToken) return;
   tokenToHeader.set(persistedToken);
   dispatch(userActions.currentUserRequest());

   try {
      const data = await fetchDB.get(`/user`);
      console.log(data);
      dispatch(userActions.currentUserSuccess(data));
   } catch (error) {
      dispatch(userActions.currentUserError(error.message));
   }
};

export default {
   registerAndLoginUser,
   loginUser,
   logoutUser,
   getCurrentUser,
};
