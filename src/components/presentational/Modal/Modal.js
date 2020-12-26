import React from 'react';

import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';

import s from './modal.module.css';

import { modalActions } from '../../../redux/modal';
import { connect } from 'react-redux';

function Modal({ isModal }) {
   const closeModal = e => {
      e.preventDefault();
      if (e.target.type === 'button' || e.target.className === 'modal_overlay__265-I') {
         isModal();
      }
   };

   return (
      <>
         <div className={s.overlay} onClick={closeModal}>
            <div className={s.container}>
               <button className={s.backButton} type="button"></button>
               <button className={s.closeButton} type="button"></button>

               <DailyCalorieIntake />
            </div>
         </div>
      </>
   );
}

const mapDisp = dispatch => {
   return {
      isModal: () => dispatch(modalActions.modalClose()),
   };
};

export default connect(null, mapDisp)(Modal);
