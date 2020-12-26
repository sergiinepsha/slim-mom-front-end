import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BasicButton from '../../common/BasicButton/BasicButton';
import { modalActions } from '../../../redux/modal';

import dailyRateSelectors from '../../redux/dailyRate/dailyRateSelectors';

import s from './DailyCalorieIntake.module.css';

const DailyCalorieIntake = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const ccalSum = useSelector(dailyRateSelectors.ccalSum);

   const goToLoginPage = () => {
      dispatch(modalActions.modalClose());
      history.push('/login');
   };

   return (
      <>
         <h2 className={s.yourNormalCcal}>Ваша рекомендуемая суточная норма калорий составляет</h2>
         <h2 className={s.ccalSum}>
            {ccalSum.dailyRate} <span>ккал</span>
         </h2>
         <div className={s.line}></div>
         <h3 className={s.NotRecProduct_title}>
            Продукты, которые вам не рекомендуется употреблять
         </h3>
         <ol className={s.NotRecProduct_list}>
            {ccalSum.notAllowedProducts &&
               ccalSum.notAllowedProducts.map(product => (
                  <li className={s.NotRecProduct_list_item} key={product.id}>
                     {product.name}
                  </li>
               ))}
         </ol>
         <div className={s.btn_wrapper}>
            <BasicButton type="button" onClick={goToLoginPage}>
               Начать худеть
            </BasicButton>
         </div>
      </>
   );
};

export default DailyCalorieIntake;
