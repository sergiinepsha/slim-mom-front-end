/* eslint-disable import/no-anonymous-default-export */
import { userActions } from './';
// import { dayActions } from '../day';

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

      const {
         accessToken,
         // todaySummary
      } = data;

      // const { id, date } = todaySummary;

      tokenToHeader.set(accessToken);

      await dispatch(userActions.loginUserSuccess(data));
      // await dispatch(dayActions.daySummary(todaySummary));
      // await dispatch(dayActions.getDate(date));
      // await dispatch(dayActions.dayId(id));
   } catch (error) {
      dispatch(userActions.loginUserError(error));
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
      dispatch(userActions.currentUserSuccess(data));
   } catch (error) {
      dispatch(userActions.currentUserError(error));
   }
};

export default {
   registerAndLoginUser,
   loginUser,
   logoutUser,
   getCurrentUser,
};
