import newError, { readingInError } from '../redux/error/errorActions';
import loaderActions from '../redux/loader/loaderActions';

const errorState = ({ dispatch }) => next => async action => {
   try {
      const item = await action.payload;

      if (item === undefined) {
         return next();
      }

      const found = await Object.entries(item).find(v => v[0] === 'isAxiosError');
      if (found.length) {
         const errorText = await JSON.parse(item.request.responseText);
         await dispatch(readingInError(errorText.message || 'Что-то пошло не так'));

         await setTimeout(() => {
            dispatch(loaderActions.endLoader());
            dispatch(newError());
         }, 2000);
         return next();
      }
      return next(action);
   } catch (err) {
      return next(action);
   }
};
export default errorState;
