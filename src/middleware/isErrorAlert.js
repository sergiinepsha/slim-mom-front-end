import cleanError, { readingInError } from '../redux/error/errorActions';
import { userActions } from '../redux/auth';
import { loaderActions } from '../redux/loader';

const errorState = ({ dispatch }) => next => async action => {
   try {
      const item = await action.payload;

      if (item === undefined) {
         return next();
      }

      if (action.type === userActions.passwordNotMatch.type) {
         await readError(action.payload, action, dispatch);
         await clear(dispatch);
         return;
      }

      const found = await Object.entries(item).find(v => v[0] === 'isAxiosError');

      if (found.length) {
         const errorText = await JSON.parse(item.request.responseText);
         await readError(errorText, action, dispatch);
         await clear(dispatch);
         return;
      }

      return next(action);
   } catch (err) {
      return next(action);
   }
};

async function readError(errorText, action, dispatch) {
   try {
      await dispatch(
         readingInError({
            error: errorText.message || 'Not message',
            name: action.type,
            message: action.payload.message,
         }),
      );
   } catch (error) {
      throw error;
   }
}

async function clear(dispatch) {
   try {
      await setTimeout(() => {
         dispatch(loaderActions.endLoader());
         dispatch(cleanError());
      }, 2000);
   } catch (error) {
      throw error;
   }
}

export default errorState;
