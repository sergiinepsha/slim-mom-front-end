import { userActions } from '../redux/auth';

const MAILFORMAT = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmail = (email, dispatch) => {
   if (!email.match(MAILFORMAT)) {
      return dispatch(
         userActions.validateFormError({ message: 'E-mail не соответствует формату почты!' }),
      );
   }
};

export default validateEmail;
