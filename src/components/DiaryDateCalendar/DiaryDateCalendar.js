import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import dayActions from '../../redux/day/dayActions';
import s from './DiaryDateCalendar.module.css';

function DiaryDateCalendar({ setDate }) {
   const dateNow = new Date();

   const [value, onChange] = useState(dateNow);
   const [isClick, setClick] = useState(false);

   const changeDate = e => {
      onChange(e);
      setClick(false);
   };

   const dateFormat = value.toLocaleDateString('fr-ca');

   setDate(dateFormat);

   return (
      <>
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
      </>
   );
}

const mapDisp = dispatch => {
   return {
      setDate: value => dispatch(dayActions.dayFromCalendar(value)),
   };
};

export default connect(null, mapDisp)(DiaryDateCalendar);
