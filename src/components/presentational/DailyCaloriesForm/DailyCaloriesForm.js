import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrimaryInput from '../../common/PrimaryInput/PrimaryInput';
import BasicButton from '../../common/BasicButton/BasicButton';
import BloodGroup from './BloodGroup/BloodGroup';

import { dailyRateOperations } from '../../../redux/dailyRate';
import { userSelector } from '../../../redux/auth';

import validatorDailyCaloriesForm from '../../../validators/validatorDailyCaloriesForm';

import style from './DailyCaloriesForm.module.css';
import { useHistory } from 'react-router-dom';

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
   const history = useHistory();

   const userCharacteristics = { weight, height, age, desiredWeight, bloodType };

   const userId = useSelector(userSelector.getUserId);
   const isAuth = useSelector(userSelector.isAuth);

   const handlerSubmit = e => {
      e.preventDefault();

      if (!validatorDailyCaloriesForm(weight, height, age, desiredWeight, bloodType, dispatch)) {
         return;
      }

      if (isAuth) {
         dailyRateOperations.getDailyIntakeById(userCharacteristics, userId, dispatch);
         history.push('/diary');
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
      <div className={style.container}>
         <h2 className={style.title}>{title}</h2>
         <form className={style.form} onSubmit={handlerSubmit}>
            <div className={style.inp_wrapper}>
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

            <div className={style.btn_wrapper}>
               <BasicButton type="submit">Похудеть</BasicButton>
            </div>
         </form>
      </div>
   );
};

export default DailyCaloriesForm;
