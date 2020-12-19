import React from 'react';

import DailyCaloriesForm from '../../DailyCaloriesForm/DailyCaloriesForm';

import s from './MainPage.module.css';

const MainPage = () => {
   const title = 'Просчитай свою суточную норму калорий прямо сейчас';

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

export default MainPage;
