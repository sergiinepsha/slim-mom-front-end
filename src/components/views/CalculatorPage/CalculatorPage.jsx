import React from 'react';

import DailyCaloriesForm from '../../DailyCaloriesForm/DailyCaloriesForm';

import s from './CalculatorPage.module.css';

const CalculatorPage = () => {
   const title = 'Узнай свою суточную норму калорий';

   return (
      <div className={s.container}>
         <DailyCaloriesForm title={title} />
      </div>
   );
};

export default CalculatorPage;
