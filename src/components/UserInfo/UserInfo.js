import React from "react";
import s from "./UserInfo.module.css";

export default function UserInfo() {
  const date = new Date();

  // const {nicName, calculatio_result } = props

  return (
    <div className={s.container}>
      <div className={s.calcPlace}></div>
      <div className={s.userInfo_1280}>
        <div className={s.userNic_Button_Exit}>
          <p className={s.nicName}>{} Nic</p>
          <div className={s.lineVertical}></div>
          <button className={s.buttonExit}>Выйти</button>
        </div>
        <div className={s.userInfoMenu}>
          <div className={s.summary}>
            <h2 className={s.titleThisTime}>
              Сводка за {date.toLocaleDateString()}
            </h2>
            <ul className={s.listCcal}>
              <li className={s.cCalItem}>
                <span>Осталось</span> <span>{}000 ккал</span>
              </li>
              <li className={s.cCalItem}>
                <span>Употреблено</span> <span>{}000 ккал</span>
              </li>
              <li className={s.cCalItem}>
                <span>Дневная норма</span> <span>{}000 ккал</span>
              </li>
              <li className={s.cCalItem}>
                <span>n% от нормы</span> <span>{}000 ккал</span>
              </li>
            </ul>
          </div>
          <div className={s.deprecated_Products}>
            <h2 className={s.notRecomendedProduct}>Нерекомендуемые продукты</h2>
            <p className={s.yourDiet}>Здесь будет отображатся Ваш рацион</p>
          </div>
        </div>
      </div>
    </div>
  );
}
