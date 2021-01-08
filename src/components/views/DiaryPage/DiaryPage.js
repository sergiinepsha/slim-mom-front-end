import React, { useState } from 'react';
import DiaryProductList from '../../presentational/DiaryProductList/DiaryProductList';
import DiaryDateCalendar from '../../presentational/DiaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../presentational/DiaryAddProductForm/DiaryAddProductForm';
import UserInfo from '../../presentational/UserInfo/UserInfo';
import AddButton from '../../common/AddButton/AddButton';

import style from './DiaryPage.module.css';

export default function DiaryPage() {
   const [isClick, setClick] = useState(false);

   const doc = document.documentElement.clientWidth;

   const openMenuAdd = () => {
      setClick(true);
   };

   return (
      <div className={style.wrapper}>
         {isClick && (
            <div>
               <DiaryAddProductForm />
               <div
                  className={style.buttonBack}
                  onClick={() => {
                     setClick(false);
                  }}
               ></div>
            </div>
         )}
         {!isClick && (
            <div className={style.container}>
               <div className={style.main}>
                  <DiaryDateCalendar />
                  {doc >= 768 && <DiaryAddProductForm />}
                  <DiaryProductList />
                  <AddButton type="button" openMenuAdd={openMenuAdd} />
               </div>
               <UserInfo />
            </div>
         )}
      </div>
   );
}
