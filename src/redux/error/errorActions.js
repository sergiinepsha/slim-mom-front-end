import { createAction } from '@reduxjs/toolkit';

const newError = createAction('error/clearIsError');
export const readingInError = createAction('error/readIsError');

export default newError;
