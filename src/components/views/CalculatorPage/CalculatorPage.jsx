import React from 'react';

import DailyCaloriesForm from '../../DailyCaloriesForm/DailyCaloriesForm';

import s from './CalculatorPage.module.css';

const CalculatorPage = () => {
   const title = 'Узнай свою суточную норму калорий';

   return (
      <div className={s.wrapper}>
         <img src="/images/desctop_min.png" alt="desctop_img" className={s.desctop_img} />
         <img src="/images/tablet_min.png" alt="tablet_img" className={s.tablet_img} />

         <div className={s.container}>
            <DailyCaloriesForm title={title} />
         </div>
      </div>
   );
};

export default CalculatorPage;
