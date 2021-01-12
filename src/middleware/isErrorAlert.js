import cleanError, { writingInError } from '../redux/error/errorActions';
import { userActions } from '../redux/auth';
import { productActions } from '../redux/product';
import { loaderActions } from '../redux/loader';

const errorState = ({ dispatch }) => next => async action => {
   try {
      const item = await action.payload;
      if (item === undefined) {
         return next();
      }

      if (action.type === productActions.getProductError.type) {
         await writeError(action.payload, action, dispatch);
         clear(dispatch);
         return;
      }

      if (action.type === userActions.validateFormError.type) {
         await writeError(action.payload, action, dispatch);
         clear(dispatch);
         return;
      }

      const found = Object.entries(item).find(v => v[0] === 'isAxiosError');

      if (found.length) {
         const errorText = await JSON.parse(item.request.responseText);
         await writeError(errorText, action, dispatch);
         clear(dispatch);
         return;
      }

      return next(action);
   } catch (err) {
      return next(action);
   }
};

async function writeError(errorText, action, dispatch) {
   try {
      await dispatch(
         writingInError({
            error: errorText.message || 'Not message',
            name: action.type,
            message: action.payload.message,
         }),
      );
   } catch (error) {
      throw error;
   }
}

export function clear(dispatch) {
   try {
      setTimeout(() => {
         dispatch(loaderActions.endLoader());
         dispatch(cleanError());
      }, 2000);
   } catch (error) {
      throw error;
   }
}

export default errorState;
