import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { dayActions } from '../../../redux/day';
import s from './DiaryDateCalendar.module.css';

function DiaryDateCalendar() {
   const dateNow = new Date();

   const [date, setDate] = useState(dateNow);
   const [isClick, setClick] = useState(false);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(dayActions.getDate(formattedDate(date)));
   }, [dispatch, date]);

   const changeDate = selectedDate => {
      setDate(selectedDate);
      setClick(false);
      // dispatch(dayActions.dayId);
   };

   const formattedDate = date => date.toLocaleDateString('fr-ca');

   const currentDate = formattedDate(date);

   return (
      <div className={s.container}>
         <div className={s.calendarMenu}>
            <div className={s.date}> {currentDate} </div>
            <button
               className={s.buttonCalendar}
               type="button"
               onClick={() => setClick(true)}
            ></button>
         </div>
         {isClick && (
            <div className={s.calendar}>
               <Calendar onChange={changeDate} value={date} />
            </div>
         )}
      </div>
   );
}

export default DiaryDateCalendar;
