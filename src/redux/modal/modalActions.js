/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const modalOpen = createAction('modal/Open');
const modalClose = createAction('modal/Close');

export default {
   modalOpen,
   modalClose,
};
