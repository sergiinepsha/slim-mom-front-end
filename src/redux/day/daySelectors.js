/* eslint-disable import/no-anonymous-default-export */
const date = state => state.day.date;
const eatenProducts = state => state.day.eatenProducts;
const dayId = state => state;
const eatenProductId = state => state.day.eatenProducts;

export default {
   date,
   eatenProducts,
   dayId,
   eatenProductId,
};
