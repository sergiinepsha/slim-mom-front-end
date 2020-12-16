import React, { useState } from "react";

import s from "./BloodGroup.module.css";

const BloodGroup = () => {
  const [bloodGroup, setBloodGroup] = useState("1");
  const onBloodGroupChange = ({ value }) => setBloodGroup(value);

  return (
    <div className={s.wrapper}>
      <label className={s.label_radio_boxes}>Группа крови *</label>
      <div className={s.radio_boxes}>
        <label className={s.label_radio}>
          <input
            type="radio"
            checked={bloodGroup === "1"}
            value="1"
            onChange={({ target }) => onBloodGroupChange(target)}
          />
          1
        </label>
        <label className={s.label_radio}>
          <input
            type="radio"
            checked={bloodGroup === "2"}
            value="2"
            onChange={({ target }) => onBloodGroupChange(target)}
          />
          2
        </label>
        <label className={s.label_radio}>
          <input
            type="radio"
            checked={bloodGroup === "3"}
            value="3"
            onChange={({ target }) => onBloodGroupChange(target)}
          />
          3
        </label>
        <label className={s.label_radio}>
          <input
            type="radio"
            checked={bloodGroup === "4"}
            value="4"
            onChange={({ target }) => onBloodGroupChange(target)}
          />
          4
        </label>
      </div>
    </div>
  );
};

export default BloodGroup;
