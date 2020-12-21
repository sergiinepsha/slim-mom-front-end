// import { loaderActions } from '../redux/loader';

export const loginState = ({ dispatch }) => next => action => {
   if (action.payload) {
      // dispatch(loaderActions.endLoader());
      console.log('middle >>>', action.payload);
   }
   return next(action);
};
