/* eslint-disable import/no-anonymous-default-export */
import { userActions } from './';

import fetchDB, { tokenToHeader } from '../../services/fetchDB';
import { dailyRateActions } from '../dailyRate';

const registerAndLoginUser = async (credentials, dispatch) => {
   dispatch(userActions.registerUserRequest());

   try {
      await fetchDB.post(`/auth/register`, credentials);
      dispatch(userActions.registerUserSuccess());

      const { email, password } = credentials;
      await loginUser({ email, password }, dispatch);
   } catch (error) {
      dispatch(userActions.registerUserError(error));
   }
};

const loginUser = async (credentials, dispatch) => {
   dispatch(userActions.loginUserRequest());

   try {
      const data = await fetchDB.post(`/auth/login`, credentials);
      const { accessToken, refreshToken } = data;

      // const { id, date } = todaySummary;

      tokenToHeader.setToken(accessToken, refreshToken);

      await dispatch(userActions.loginUserSuccess(data));
   } catch (error) {
      dispatch(userActions.loginUserError(error));
   }
};

const refreshUser = async dispatch => {
   dispatch(userActions.refreshUserRequest());

   try {
      const data = await fetchDB.post(`/auth/refresh`);
      const { accessToken, refreshToken } = data;

      tokenToHeader.setToken(accessToken, refreshToken);

      await dispatch(userActions.refreshUserSuccess(data));
   } catch (error) {
      dispatch(userActions.refreshUserError(error));
   }
};

const logoutUser = () => async dispatch => {
   dispatch(userActions.logoutUserRequest());
   try {
      await fetchDB.post(`/auth/logout`);
      await tokenToHeader.unset();

      dispatch(dailyRateActions.clearDailyIntake());
      dispatch(userActions.logoutUserSuccess());
   } catch (error) {
      dispatch(userActions.logoutUserSuccess());
      dispatch(userActions.logoutUserError(error));
   }
};

const getCurrentUser = async (persistedToken, dispatch) => {
   if (!persistedToken) return;
   tokenToHeader.set(persistedToken);
   dispatch(userActions.currentUserRequest());

   try {
      const data = await fetchDB.get(`/user`);
      console.dir(data);

      dispatch(userActions.currentUserSuccess(data));
   } catch (error) {
      if (error.response.status === 401) {
         dispatch(userActions.logoutUserSuccess());
      }
      dispatch(userActions.currentUserError(error));
   }
};

export default {
   registerAndLoginUser,
   loginUser,
   logoutUser,
   refreshUser,
   getCurrentUser,
};
