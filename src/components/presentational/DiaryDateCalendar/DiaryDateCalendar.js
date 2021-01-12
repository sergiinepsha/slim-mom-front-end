import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { dayActions } from '../../../redux/day';
import s from './DiaryDateCalendar.module.css';

function DiaryDateCalendar() {
   const dateNow = new Date();

   const dateState = new Date(useSelector(state => state.day.date));

   const [date, setDate] = useState(dateState ? dateState : dateNow);

   const [isClick, setClick] = useState(false);

   const dispatch = useDispatch();

   const formattedDate = date => date.toLocaleDateString('fr-ca');

   const currentDate = formattedDate(date);

   useEffect(() => {
      dispatch(dayActions.getDate(formattedDate(date)));
   }, [dispatch, date]);

   const changeDate = selectedDate => {
      setDate(selectedDate);
      setClick(false);
   };

   return (
      <div
         className={s.container}
         onClick={e => {
            if ((isClick && e.target.id === 'openCalendar') || e.target.id === 'calendar') {
               setClick(false);
            }
         }}
      >
         <div className={s.calendarMenu}>
            <div className={s.date} id="calendar">
               {' '}
               {currentDate}{' '}
            </div>
            <button
               className={s.buttonCalendar}
               type="button"
               id="openCalendar"
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
