import React, { useState } from 'react';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';
import BloodGroup from './BloodGroup/BloodGroup';

import s from './DailyCaloriesForm.module.css';
import dailyRateOperations from '../../redux/dailyRate/dailyRateOperations';
import { connect } from 'react-redux';
import modalActions from '../../redux/modal/modalActions';

const DailyCaloriesForm = ({ title, onDailyRate, isModal }) => {
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

   const credentials = { weight, height, age, desiredWeight, bloodType };

   const handlerSubmit = evt => {
      evt.preventDefault();
      console.log(credentials);
      onDailyRate(credentials);
      isModal();
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

const mapDisp = dispatch => {
   return {
      onDailyRate: credentials => dispatch(dailyRateOperations.addDailyRate(credentials)),
      isModal: () => dispatch(modalActions.modalOpen()),
   };
};

export default connect(null, mapDisp)(DailyCaloriesForm);
