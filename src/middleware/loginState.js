export const loginState = ({ dispatch }) => next => action => {
   if (action.payload) {
      // dispatch(loaderActions.endLoader());
      console.log('middle >>>', action);
   }
   return next(action);
};

export const errorState = ({ dispatch }) => next => action => {
   if (action.type === 'product/getError') {
   }

   return next(action);
};
