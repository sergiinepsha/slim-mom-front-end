import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DailyCaloriesForm from '../../presentational/DailyCaloriesForm/DailyCaloriesForm';
import UserInfo from '../../presentational/UserInfo/UserInfo';
import { dayActions } from '../../../redux/day';

import s from './CalculatorPage.module.css';

const CalculatorPage = () => {
   const title = 'Узнай свою суточную норму калорий';

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(dayActions.getDate(new Date().toLocaleDateString('fr-ca')));
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
