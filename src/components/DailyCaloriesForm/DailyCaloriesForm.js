import React, { useState } from 'react';

import PrimaryInput from '../common/PrimaryInput/PrimaryInput';
import BasicButton from '../common/BasicButton/BasicButton';
import BloodGroup from './BloodGroup/BloodGroup';

import s from './DailyCaloriesForm.module.css';

const DailyCaloriesForm = () => {
   const [height, setHeight] = useState('');
   const onHeightChange = ({ value }) => setHeight(value);

   const [age, setAge] = useState('');
   const onAgeChange = ({ value }) => setAge(value);

   const [currentWeight, setCurrentWeight] = useState('');
   const onCurrentWeightChange = ({ value }) => setCurrentWeight(value);

   const [desiredWeight, setDesiredWeight] = useState('');
   const onDesiredWeightChange = ({ value }) => setDesiredWeight(value);

   const [bloodGroup, setBloodGroup] = useState('1');
   const onBloodGroupChange = ({ value }) => setBloodGroup(value);

   const handlerSubmit = evt => {
      evt.preventDefault();

      // TODO: dailyRate.Oparation...

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
      <form className={s.form} onSubmit={handlerSubmit}>
         <div className={s.container}>
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
               value={currentWeight}
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

            <BloodGroup bloodGroup={bloodGroup} onChange={onBloodGroupChange} />
         </div>

         <div className={s.btn_wrapper}>
            <BasicButton name="Похудеть" type="submit" />
         </div>
      </form>
   );
};

export default DailyCaloriesForm;
