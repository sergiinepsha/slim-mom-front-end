export const loginState = store => next => action => {
   if (action.payload) {
      console.log('middle >>>', action.payload);
   }
   return next(action);
};
