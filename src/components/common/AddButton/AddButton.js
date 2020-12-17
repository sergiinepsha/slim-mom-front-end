import React from 'react';
import PropTypes from 'prop-types';

import s from './AddButton.module.css';

const AddButton = ({ type }) => {
   return (
      <button className={s.button} type={type}>
         +
      </button>
   );
};
AddButton.propTypes = {
   type: PropTypes.string.isRequired,
};

export default AddButton;
