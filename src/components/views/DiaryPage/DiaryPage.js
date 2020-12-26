import React, { useState } from 'react';
import s from './DiaryPage.module.css';
import DiaryProductList from '../../presentational/DiaryProductList/DiaryProductList';
import DiaryDateCalendar from '../../presentational/DiaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../presentational/DiaryAddProductForm/DiaryAddProductForm';
import UserInfo from '../../presentational/UserInfo/UserInfo';
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
