import React from 'react';
import PropTypes from 'prop-types';

import s from './PrimaryInput.module.css';

const PrimaryInput = ({ name, value, type, placeholder, onChange }) => {
   return (
      <input
         className={s.primary_input}
         name={name}
         type={type}
         placeholder={placeholder}
         required
         value={value}
         onChange={({ target }) => onChange(target)}
      />
   );
};

PrimaryInput.propTypes = {
   // value: PropTypes.string,
   type: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
};

export default PrimaryInput;
