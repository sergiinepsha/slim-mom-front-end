import React, { useState, useEffect } from 'react';
import DiaryProductList from '../../presentational/DiaryProductList/DiaryProductList';
import DiaryDateCalendar from '../../presentational/DiaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../presentational/DiaryAddProductForm/DiaryAddProductForm';
import UserInfo from '../../presentational/UserInfo/UserInfo';
import AddButton from '../../common/AddButton/AddButton';

import style from './DiaryPage.module.css';

const getWidth = () =>
   window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const widthOfTransition = 768;

export default function DiaryPage() {
   const [isClick, setClick] = useState(false);

   const [width, setWidth] = useState(getWidth());

   useEffect(() => {
      const resizeWidth = () => {
         const currentWidth = getWidth();

         if (width < widthOfTransition && currentWidth >= widthOfTransition) {
            setWidth(() => currentWidth);
         }

         if (width >= widthOfTransition && currentWidth < widthOfTransition) {
            setWidth(() => currentWidth);
         }
      };

      window.addEventListener('resize', resizeWidth);

      return () => {
         window.removeEventListener('resize', resizeWidth);
      };
   }, [width]);

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
                  {width >= 768 && <DiaryAddProductForm />}
                  <DiaryProductList />
                  <AddButton type="button" openMenuAdd={openMenuAdd} />
               </div>
               <UserInfo />
            </div>
         )}
      </div>
   );
}
