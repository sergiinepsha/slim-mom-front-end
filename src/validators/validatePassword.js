import { userActions } from '../redux/auth';

const validatePassword = (password, dispatch) => {
   if (password.length < 6 || password.length >= 16) {
      return dispatch(
         userActions.validateFormError({ message: 'Пароль должен быть от 6 до 16 символов!' }),
      );
   }
};

export default validatePassword;
