import validateEmail from './validateEmail';

const validatorLoginForm = (email, password, dispatch) => {
   if (validateEmail(email, dispatch)) {
      return;
   }

   return true;
};

export default validatorLoginForm;
