import React, { useState } from 'react';

import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';

import s from './modal.module.css';

export default function Modal() {
   const closeModal = e => {
      e.preventDefault();
   };

   return (
      <>
         <div className={s.overlay}>
            <div className={s.container}>
               <button className={s.backButton} type="button" onClick={closeModal}></button>
               <button className={s.closeButton} type="button" onClick={closeModal}></button>

               <DailyCalorieIntake />
            </div>
         </div>
      </>
   );
}

const mapState = state => ({});
