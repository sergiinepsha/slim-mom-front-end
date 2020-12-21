import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import modalActions from './modalActions';
import { dailyRateActions } from '../dailyRate';

const isModal = createReducer(false, {
   [modalActions.modalOpen]: () => true,
   [dailyRateActions.getDailyIntakeSuccess]: () => true,
   [modalActions.modalClose]: () => false,
});

export default combineReducers({
   isModal,
});
