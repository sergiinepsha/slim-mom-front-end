import React, { useState } from 'react';
import DiaryProductList from '../../presentational/DiaryProductList/DiaryProductList';
import DiaryDateCalendar from '../../presentational/DiaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../presentational/DiaryAddProductForm/DiaryAddProductForm';
import UserInfo from '../../presentational/UserInfo/UserInfo';
import AddButton from '../../common/AddButton/AddButton';

import style from './DiaryPage.module.css';

export default function DiaryPage() {
   const [isClick, setClick] = useState(false);

   const isMobile = false;
   const openMenuAdd = () => {
      setClick(true);
   };

   return (
      <div className={style.wrapper}>
         {isClick && <DiaryAddProductForm />}
         {!isClick && (
            <div className={style.container}>
               <div className={style.main}>
                  <DiaryDateCalendar />
                  {!isMobile && <DiaryAddProductForm />}
                  <DiaryProductList />
                  {isMobile && <AddButton type="button" openMenuAdd={openMenuAdd} />}
               </div>
               <UserInfo />
            </div>
         )}
      </div>
   );
}
