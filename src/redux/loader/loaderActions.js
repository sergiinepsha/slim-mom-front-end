import { createAction } from '@reduxjs/toolkit';

const startLoaderSuccess = createAction('START/Loader');
const endLoaderSuccess = createAction('END/Loader');

export default {
   endLoaderSuccess,
   startLoaderSuccess,
};
