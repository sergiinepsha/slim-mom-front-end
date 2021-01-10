import React from 'react';

import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';

import s from './modal.module.css';

import modalActions from '../../../redux/modal/modalActions';
import { useDispatch } from 'react-redux';

function Modal() {
   const dispatch = useDispatch();

   const closeModal = e => {
      e.preventDefault();
      if (e.target.type === 'button' || e.target.tabIndex === -2) {
         dispatch(modalActions.modalClose());
      }
   };

   return (
      <>
         <div className={s.overlay} onClick={closeModal} tabIndex="-2">
            <div className={s.container}>
               <button className={s.backButton} type="button"></button>
               <button className={s.closeButton} type="button"></button>

               <DailyCalorieIntake />
            </div>
         </div>
      </>
   );
}

export default Modal;
