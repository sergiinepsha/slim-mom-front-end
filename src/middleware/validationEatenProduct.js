import { eatenProductSuccess } from '../redux/day/dayActions';

const validationEatenProduct = ({ dispatch }) => next => action => {
   if (action.payload) {
      console.log('validationEatenProduct >>>', action);
      console.dir(eatenProductSuccess);
   }
   return next(action);
};

export default validationEatenProduct;
