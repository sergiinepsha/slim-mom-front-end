import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import dayActions from '../../redux/day/dayActions';
import s from './DiaryDateCalendar.module.css';

function DiaryDateCalendar() {
   const dateNow = new Date();

   const [value, onChange] = useState(dateNow);
   const [isClick, setClick] = useState(false);

   const dispatch = useDispatch();

   const changeDate = e => {
      onChange(e);
      setClick(false);
      dispatch(dayActions.dayId);
   };

   const dateFormat = value.toLocaleDateString('fr-ca');

   dispatch(dayActions.getDate(dateFormat));

   return (
      <div className={s.container}>
         <div className={s.calendarMenu}>
            <div className={s.date}> {dateFormat} </div>
            <button
               className={s.buttonCalendar}
               type="button"
               onClick={() => setClick(true)}
            ></button>
         </div>
         {isClick && (
            <div className={s.calendar}>
               <Calendar onChange={changeDate} value={value} />
            </div>
         )}
      </div>
   );
}

export default DiaryDateCalendar;
