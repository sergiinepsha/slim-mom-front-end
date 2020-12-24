import { createAction } from '@reduxjs/toolkit';

export const startLoader = createAction('loader/START');
const endLoader = createAction('loader/END');

export default { endLoader };
