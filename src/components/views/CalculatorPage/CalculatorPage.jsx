import React from 'react';

import DailyCaloriesForm from '../../DailyCaloriesForm/DailyCaloriesForm';
import UserInfo from '../../UserInfo/UserInfo';
import s from './CalculatorPage.module.css';

const CalculatorPage = () => {
   const title = 'Узнай свою суточную норму калорий';

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
