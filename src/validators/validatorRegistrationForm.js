import { userActions } from '../redux/auth';

import validateEmail from './validateEmail';
import validatePassword from './validatePassword';

const validatorRegistrationForm = (username, email, password, passwordDuplicate, dispatch) => {
   if (username.length < 3) {
      dispatch(userActions.validateFormError({ message: 'Имя должно быть не менее 3 символов!' }));
      return;
   }

   if (validateEmail(email, dispatch)) {
      return;
   }

   if (validatePassword(password, dispatch)) {
      return;
   }

   if (password !== passwordDuplicate) {
      dispatch(userActions.validateFormError({ message: 'Пароли в форме не совпадают!' }));
      return;
   }

   return true;
};

export default validatorRegistrationForm;
