import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrimaryInput from '../../common/PrimaryInput/PrimaryInput';
import BasicButton from '../../common/BasicButton/BasicButton';
import BloodGroup from './BloodGroup/BloodGroup';

import { dailyRateOperations } from '../../../redux/dailyRate';
import { userSelector } from '../../../redux/auth';

import s from './DailyCaloriesForm.module.css';

const DailyCaloriesForm = ({ title }) => {
   const [height, setHeight] = useState('');
   const onHeightChange = ({ value }) => setHeight(value);

   const [age, setAge] = useState('');
   const onAgeChange = ({ value }) => setAge(value);

   const [weight, setCurrentWeight] = useState('');
   const onCurrentWeightChange = ({ value }) => setCurrentWeight(value);

   const [desiredWeight, setDesiredWeight] = useState('');
   const onDesiredWeightChange = ({ value }) => setDesiredWeight(value);

   const [bloodType, setBloodGroup] = useState('1');
   const onBloodGroupChange = ({ value }) => setBloodGroup(value);

   const dispatch = useDispatch();

   const userCharacteristics = { weight, height, age, desiredWeight, bloodType };

   const userId = useSelector(userSelector.getUserId);
   const isAuth = useSelector(userSelector.isAuth);

   const handlerSubmit = evt => {
      evt.preventDefault();
      console.log(userCharacteristics);

      console.log(userId, isAuth);

      if (isAuth) {
         dailyRateOperations.getDailyIntakeById(userCharacteristics, userId, dispatch);
      } else {
         dailyRateOperations.getDailyIntake(userCharacteristics, dispatch);
      }

      clearForm();
   };

   const clearForm = () => {
      setHeight('');
      setAge('');
      setCurrentWeight('');
      setDesiredWeight('');
      setBloodGroup('1');
   };

   return (
      <div className={s.container}>
         <h2 className={s.title}>{title}</h2>
         <form className={s.form} onSubmit={handlerSubmit}>
            <div className={s.inp_wrapper}>
               <PrimaryInput
                  value={height}
                  type="number"
                  placeholder="Рост *"
                  onChange={onHeightChange}
               />
               <PrimaryInput
                  value={age}
                  type="number"
                  placeholder="Возраст *"
                  onChange={onAgeChange}
               />
               <PrimaryInput
                  value={weight}
                  type="number"
                  placeholder="Текущий вес *"
                  onChange={onCurrentWeightChange}
               />
               <PrimaryInput
                  value={desiredWeight}
                  type="number"
                  placeholder="Желаемый вес *"
                  onChange={onDesiredWeightChange}
               />

               <BloodGroup bloodGroup={bloodType} onChange={onBloodGroupChange} />
            </div>

            <div className={s.btn_wrapper}>
               <BasicButton type="submit">Похудеть</BasicButton>
            </div>
         </form>
      </div>
   );
};

export default DailyCaloriesForm;
