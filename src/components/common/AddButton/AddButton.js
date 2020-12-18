import React from 'react';
import PropTypes from 'prop-types';

import s from './AddButton.module.css';

const AddButton = ({ type, openMenuAdd }) => {
   return (
      <button className={s.button} type={type} onClick={openMenuAdd}>
         +
      </button>
   );
};
AddButton.propTypes = {
   type: PropTypes.string.isRequired,
};

export default AddButton;
