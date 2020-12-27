import { createReducer } from '@reduxjs/toolkit';

import cleanError, { readingInError } from './errorActions';

const isError = createReducer(
   { error: '' },
   {
      [cleanError]: (state, { payload }) => ({
         ...state,
         error: '',
      }),

      [readingInError]: (state, { payload }) => ({
         ...state,
         error: payload.error,
         [payload.name]: [
            {
               requestError: payload.error,
               payloadError: payload.message,
            },
         ],
      }),
   },
);

export default isError;
