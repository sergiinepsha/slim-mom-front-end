import { createAction } from '@reduxjs/toolkit';

const dayFromCalendar = createAction('day/fromCalendar');

const getProductRequest = createAction('product/getRequest');
const getProductSuccess = createAction('product/getSuccess');
const getProductError = createAction('product/getError');

export default {
   dayFromCalendar,
   getProductRequest,
   getProductSuccess,
   getProductError,
};
