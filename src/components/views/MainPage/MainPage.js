import React from 'react';
import { connect } from 'react-redux';

import DailyCaloriesForm from '../../DailyCaloriesForm/DailyCaloriesForm';
import Modal from '../../Modal/Modal';

import s from './MainPage.module.css';

const MainPage = ({ isClickDiet }) => {
   const title = 'Просчитай свою суточную норму калорий прямо сейчас';

   return (
      <div className={s.wrapper}>
         {isClickDiet && <Modal />}
         <img src="/images/desctop_min.png" alt="bg_img" className={s.bg_img} />
         <div className={s.container}>
            <DailyCaloriesForm title={title} />
         </div>
      </div>
   );
};

const mapState = state => ({
   isClickDiet: state.dailyRateData.dailyRate === null ? false : true,
});

export default connect(mapState)(MainPage);
