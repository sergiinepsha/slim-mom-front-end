/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const dayFromCalendar = createAction('day/fromCalendar');

const eatenProductRequest = createAction('day/eatenProductRequest');
const eatenProductSuccess = createAction('day/eatenProductSuccess');
const eatenProductError = createAction('day/eatenProductError');

const infoForDayRequest = createAction('day/infoForDayRequest');
const infoForDaySuccess = createAction('day/infoForDaySuccess');
const infoForDayError = createAction('day/infoForDayError');

const emptyEatenProducts = createAction('day/emptyEatenProducts');

export default {
   dayFromCalendar,

   eatenProductRequest,
   eatenProductSuccess,
   eatenProductError,

   infoForDayRequest,
   infoForDaySuccess,
   infoForDayError,

   emptyEatenProducts,
};
