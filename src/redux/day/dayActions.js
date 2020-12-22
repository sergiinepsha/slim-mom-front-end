import { createAction } from '@reduxjs/toolkit';

const dayFromCalendar = createAction('day/fromCalendar');

const eatenProductRequest = createAction('eatenProduct/request');
const eatenProductSuccess = createAction('eatenProduct/request');
const eatenProductError = createAction('eatenProduct/request');

export default {
   dayFromCalendar,
   eatenProductRequest,
   eatenProductSuccess,
   eatenProductError,
};
