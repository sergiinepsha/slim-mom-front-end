import validateEmail from './validateEmail';
// import validatePassword from './validatePassword';

const validatorLoginForm = (email, password, dispatch) => {
   if (validateEmail(email, dispatch)) {
      return;
   }

   // if (validatePassword(password, dispatch)) {
   //    return;
   // }
   return true;
};

export default validatorLoginForm;
