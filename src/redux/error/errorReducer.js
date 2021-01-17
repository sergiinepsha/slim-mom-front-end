import { createReducer } from '@reduxjs/toolkit';

import cleanError, { writingInError } from './errorActions';

const isError = createReducer(
   { error: null },
   {
      [cleanError]: (state, { payload }) => ({
         ...state,
         error: '',
      }),

      [writingInError]: (state, { payload }) => ({
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
