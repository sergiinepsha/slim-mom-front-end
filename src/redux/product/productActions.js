import { createAction } from '@reduxjs/toolkit';

const fetchProductRequest = createAction('product/fetchRequest');
const fetchProductSuccess = createAction('product/fetchSuccess');
const fetchProductError = createAction('product/fetchError');

const addProductRequest = createAction('product/addRequest');
const addProductSuccess = createAction('product/addSuccess');
const addProductError = createAction('product/addError');

const getProductRequest = createAction('product/getRequest');
const getProductSuccess = createAction('product/getSuccess');
const getProductError = createAction('product/getError');

const removeProductRequest = createAction('product/removeRequest');
const removeProductSuccess = createAction('product/removeSuccess');
const removeProductError = createAction('product/removeError');

export default {
   fetchProductRequest,
   fetchProductSuccess,
   fetchProductError,
   addProductRequest,
   addProductSuccess,
   addProductError,
   getProductRequest,
   getProductSuccess,
   getProductError,
   removeProductRequest,
   removeProductSuccess,
   removeProductError,
};
