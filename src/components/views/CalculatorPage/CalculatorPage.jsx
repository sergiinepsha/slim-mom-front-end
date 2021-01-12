import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DailyCaloriesForm from '../../presentational/DailyCaloriesForm/DailyCaloriesForm';
import UserInfo from '../../presentational/UserInfo/UserInfo';
import { dayActions } from '../../../redux/day';

import s from './CalculatorPage.module.css';

const CalculatorPage = () => {
   const title = 'Узнай свою суточную норму калорий';

   const dispatch = useDispatch();
   const dateNeeded = useSelector(state => state.day.date);

   useEffect(() => {
      if (dateNeeded) {
         dispatch(dayActions.getDate(dateNeeded));
      } else {
         dispatch(dayActions.getDate(new Date().toLocaleDateString('fr-ca')));
      }
   }, [dispatch]);

   return (
      <div className={s.wrapper}>
         <div className={s.container}>
            <div className={s.main}>
               <DailyCaloriesForm title={title} />
            </div>

            <UserInfo />
         </div>
      </div>
   );
};

export default CalculatorPage;
