/* eslint-disable import/no-anonymous-default-export */
const date = state => state.day.date;
const eatenProducts = state => state.day.eatenProducts;
const dayId = state => state.day.dayId;
const notAllowedProducts = state => state.day.notAllowedProducts;

export default {
   date,
   eatenProducts,
   dayId,
   notAllowedProducts,
};
