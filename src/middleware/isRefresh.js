import { userActions, userOperations } from '../redux/auth';

import { loaderActions } from '../redux/loader';

const refreshState = ({ dispatch }) => next => async action => {
   try {
      if (action.type === userActions.logoutUserSuccess.type) {
         await userOperations.refreshUser(dispatch);
         dispatch(loaderActions.endLoader());
      }
      // Надо подвязать к этому   а не к этому logoutUserSuccess
      // это пример как я понял надо сделать
      // } catch (error) {
      //    if (error.response.status === 401) {
      //       dispatch(userActions.refreshUserRequest()); - если выскакивает эта ошибка сделать запрос на сервер не обновление токена
      //       dispatch(userActions.logoutUserSuccess()); -- а это убрать
      //    }
      //    if (error.response.status === 403) {
      //       dispatch(userActions.logoutUserSuccess());
      //    }
      //    dispatch(userActions.currentUserError(error));
      // }

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
