/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const getProductRequest = createAction('product/getRequest');
const getProductSuccess = createAction('product/getSuccess');
const getProductError = createAction('product/getError');

const emptyProduct = createAction('product/emptyProduct');

export default {
   getProductRequest,
   getProductSuccess,
   getProductError,
   emptyProduct,
};
