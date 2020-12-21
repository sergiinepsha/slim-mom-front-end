/* eslint-disable import/no-anonymous-default-export */
const isAuth = state => state.authUser.accessToken;
const getUserName = state => state.authUser.user.username;
const getUserId = state => state.authUser.user.id;

export default {
   isAuth,
   getUserName,
   getUserId,
};
