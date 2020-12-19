const isAuth = state => state.authUser.token;
const getUserName = state => state.authUser.user;
const isloading = state => state.authUser.loading;

export default {
   isAuth,
   getUserName,
   isloading,
};
