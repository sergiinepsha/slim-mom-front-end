import React, { useState } from 'react';
import Calendar from 'react-calendar';
import s from './DiaryDateCalendar.module.css';

export default function DiaryDateCalendar() {
   const [value, onChange] = useState(new Date());

   const [isClick, setClick] = useState(false);

   const openCalendar = e => {
      if (!isClick) {
         setClick(true);
      }
      if (isClick) {
         setClick(false);
      }
   };

   return (
      <>
         <div className={s.container}>
            <div className={s.date}> {value.toLocaleDateString()} </div>
            <button className={s.buttonCalendar} type="button" onClick={openCalendar}></button>
            {isClick && (
               <div className={s.calendar}>
                  <Calendar onChange={e => onChange(e)} value={value} />
               </div>
            )}
         </div>
      </>
   );
}
