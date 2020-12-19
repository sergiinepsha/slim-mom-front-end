import React, { useState } from 'react';

import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';

import s from './modal.module.css';

export default function Modal() {
   return (
      <>
         <div className={s.overlay}>
            <div className={s.container}>
               <button className={s.backButton} type="button" onClick={() => {}}></button>
               <button className={s.closeButton} type="button" onClick={() => {}}></button>

               <DailyCalorieIntake />
            </div>
         </div>
      </>
   );
}
