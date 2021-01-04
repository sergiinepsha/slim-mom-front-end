import React from 'react';
import PropTypes from 'prop-types';

import style from './AddButton.module.css';

const AddButton = ({ type, openMenuAdd }) => {
   return (
      <button className={style.button} id="btn" type={type} onClick={openMenuAdd}>
         +
      </button>
   );
};

AddButton.propTypes = {
   type: PropTypes.string.isRequired,
};

export default AddButton;
