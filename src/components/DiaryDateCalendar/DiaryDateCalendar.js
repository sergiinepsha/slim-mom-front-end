import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import dayActions from '../../redux/day/dayActions';
import s from './DiaryDateCalendar.module.css';

function DiaryDateCalendar({ setDate }) {
   const dateNow = new Date();

   const [value, onChange] = useState(dateNow);

   const [isClick, setClick] = useState(false);
   const openCalendar = e => {
      if (!isClick) {
         setClick(true);
      }
      if (isClick) {
         setClick(false);
      }
   };

   const changeDate = e => {
      onChange(e);
   };

   setDate(value.toLocaleDateString());

   return (
      <>
         <div className={s.container}>
            <div className={s.calendarMenu}>
               <div className={s.date}> {value.toLocaleDateString()} </div>
               <button className={s.buttonCalendar} type="button" onClick={openCalendar}></button>
            </div>
            {isClick && (
               <div className={s.calendar}>
                  <Calendar onChange={changeDate} value={value} />
               </div>
            )}
         </div>
      </>
   );
}

const mapDisp = dispatch => {
   return {
      setDate: value => dispatch(dayActions.dayFromCalendar(value)),
   };
};

export default connect(null, mapDisp)(DiaryDateCalendar);
