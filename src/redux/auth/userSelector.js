/* eslint-disable import/no-anonymous-default-export */
const isAuth = state => state.authUser.accessToken;
const getUserName = state => state.authUser.user;
const isloading = state => state.authUser.loading;

export default {
   isAuth,
   getUserName,
   isloading,
};
