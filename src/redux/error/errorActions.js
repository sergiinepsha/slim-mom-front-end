import { createAction } from '@reduxjs/toolkit';

const cleanError = createAction('error/clearIsError');
export const readingInError = createAction('error/readIsError');

export default cleanError;
