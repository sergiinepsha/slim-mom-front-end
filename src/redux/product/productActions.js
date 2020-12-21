import { createAction } from '@reduxjs/toolkit';

const getProductRequest = createAction('product/getRequest');
const getProductSuccess = createAction('product/getSuccess');
const getProductError = createAction('product/getError');

export default {
   getProductRequest,
   getProductSuccess,
   getProductError,
};
