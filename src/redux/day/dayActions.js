/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const dayFromCalendar = createAction('day/fromCalendar');

const eatenProductRequest = createAction('eatenProduct/request');
const eatenProductSuccess = createAction('eatenProduct/success');
const eatenProductError = createAction('eatenProduct/error');

const deleteEatenProductRequest = createAction('deleteEatenProductRequest/request');
const deleteEatenProductSuccess = createAction('deleteEatenProductSuccess/success');
const deleteEatenProductError = createAction('deleteEatenProductError/error');

export default {
   dayFromCalendar,
   eatenProductRequest,
   eatenProductSuccess,
   eatenProductError,
   deleteEatenProductRequest,
   deleteEatenProductSuccess,
   deleteEatenProductError,
};
