import React from 'react';
import { useSelector } from 'react-redux';

import DailyCaloriesForm from '../../presentational/DailyCaloriesForm/DailyCaloriesForm';
import Modal from '../../presentational/Modal/Modal';

import { modalSelectors } from '../../../redux/modal';

import style from './MainPage.module.css';

const MainPage = () => {
   const title = 'Просчитай свою суточную норму калорий прямо сейчас';

   const isModal = useSelector(modalSelectors.isModal);

   return (
      <div className={style.wrapper}>
         <img src="/images/desctop_min.png" alt="desctop_img" className={style.desctop_img} />
         <img src="/images/tablet_min.png" alt="tablet_img" className={style.tablet_img} />
         {isModal && <Modal />}

         <div className={style.container}>
            <DailyCaloriesForm title={title} />
         </div>
      </div>
   );
};

export default MainPage;
