import React from 'react';

import s from './PrimaryInput.module.css';

const PrimaryInput = ({ ...props }) => {
   const { onChange } = props;

   return (
      <input
         className={s.primary_input}
         {...props}
         required
         onChange={({ target }) => onChange(target)}
      />
   );
};

export default PrimaryInput;
