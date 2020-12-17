import React from 'react';

import DailyCaloriesForm from '../../DailyCaloriesForm/DailyCaloriesForm';

import s from './MainPage.module.css';

const MainPage = () => {
   const title = 'Просчитай свою суточную норму калорий прямо сейчас';

   return (
      <div className={s.container}>
         <DailyCaloriesForm title={title} />
      </div>
   );
};

export default MainPage;
