import { userActions, userOperations } from '../redux/auth';

import { loaderActions } from '../redux/loader';

const refreshState = ({ dispatch }) => next => async action => {
   try {
      if (action.type === userActions.refreshUserRequest.type) {
         await userOperations.refreshUser(dispatch);
         dispatch(loaderActions.endLoader());
      }

      return next(action);
   } catch (err) {
      return next(action);
   }
};

export default refreshState;
