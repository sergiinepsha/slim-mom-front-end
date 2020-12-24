/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const startLoader = createAction('loader/START');
const endLoader = createAction('loader/END');

export default {
   endLoader,
   startLoader,
};
