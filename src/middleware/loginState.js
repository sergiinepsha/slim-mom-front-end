const loginState = ({ dispatch }) => next => action => {
   if (action.payload) {
      // console.log('middle >>>', action);
   }
   return next(action);
};

export default loginState;
