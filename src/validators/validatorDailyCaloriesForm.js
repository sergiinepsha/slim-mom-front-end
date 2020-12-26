import { userActions } from '../redux/auth';

const BLOOD_GROUP = ['1', '2', '3', '4'];

const validatorDailyCaloriesForm = (weight, height, age, desiredWeight, bloodType, dispatch) => {
   if (weight < 20 || weight > 500) {
      dispatch(userActions.validateFormError({ message: 'Вес должен быть от 20 до 500 кг!' }));
      return;
   }

   if (height < 100 || height > 250) {
      dispatch(userActions.validateFormError({ message: 'Рост должен быть от 100 до 250 см!' }));
      return;
   }

   if (age < 18 || age > 100) {
      dispatch(userActions.validateFormError({ message: 'Возраст должен быть от 18 до 100 лет!' }));
      return;
   }

   if (desiredWeight < 20 || desiredWeight > 500) {
      dispatch(
         userActions.validateFormError({ message: 'Желаемый вес должен быть от 20 до 500 кг!' }),
      );
      return;
   }

   if (!BLOOD_GROUP.find(group => group === bloodType)) {
      dispatch(
         userActions.validateFormError({ message: 'Группа крови должна быть 1, 2, 3 или 4!' }),
      );
      return;
   }
   return true;
};

export default validatorDailyCaloriesForm;
