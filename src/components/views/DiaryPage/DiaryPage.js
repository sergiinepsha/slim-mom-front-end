import React, { useState } from 'react';
import s from './DiaryPage.module.css';
import DiaryProductList from '../../DiaryProductList/DiaryProductList';
import DiaryDateCalendar from '../../DiaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../DiaryAddProductForm/DiaryAddProductForm';
import UserInfo from '../../UserInfo/UserInfo';
import AddButton from '../../common/AddButton/AddButton';

export default function DiaryPage() {
   const [isClick, setClick] = useState(false);

   const isMobile = false;
   const openMenuAdd = () => {
      setClick(true);
   };

   return (
      <>
         <div className={s.wrapper}>
            {isClick && <DiaryAddProductForm />}
            {!isClick && (
               <div className={s.container}>
                  <div className={s.main}>
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
