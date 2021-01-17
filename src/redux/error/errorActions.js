import { createAction } from '@reduxjs/toolkit';

const cleanError = createAction('error/clearError');
export const writingInError = createAction('error/writeThisError');

export default cleanError;
