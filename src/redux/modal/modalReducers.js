import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import modalActions from './modalActions';

const isModal = createReducer(false, {
   [modalActions.modalOpen]: () => true,
   [modalActions.modalClose]: () => false,
});

export default combineReducers({
   isModal,
});
