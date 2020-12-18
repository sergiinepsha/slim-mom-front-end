import React, { useState } from 'react';
import s from './DiaryPage.module.css';
import DiaryProductList from '../../DiaryProductList/DiaryProductList';
import DiaryDateCalendar from '../../DiaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../DiaryAddProductForm/DiaryAddProductForm';
import UserInfo from '../../UserInfo/UserInfo';
import AddButton from '../../common/AddButton/AddButton';

export default function DiaryPage() {
   const [isClick, setClick] = useState(false);
   const [isMobile, setMobile] = useState(false);

   const openMenuAdd = () => {
      setClick(true);
   };

   // const changeWidth = e => {
   //    console.log(e);
   //    setMobile(false);
   // };

   return (
      <>
         <div className={s.container}>
            {isClick && <DiaryAddProductForm />}
            {!isClick && (
               <div className={s.container_flex1280}>
                  <div className={s.diary}>
                     <DiaryDateCalendar />
                     {!isMobile && <DiaryAddProductForm />}
                     <DiaryProductList />
                     {isMobile && <AddButton type="button" openMenuAdd={openMenuAdd} />}
                  </div>
                  <UserInfo />
               </div>
            )}
         </div>
      </>
   );
}
