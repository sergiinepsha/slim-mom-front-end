export const loginState = store => next => action => {
   console.info('dispatching >>>>', action.type);

   // if (action.type === userActions.loginUserSuccess.type) {
   //    console.log('middle >>>');
   // }
   return next(action);
};
