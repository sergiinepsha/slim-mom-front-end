import React from "react";
import PropTypes from "prop-types";

import s from "./BasicButton.module.css";

const BasicButton = ({ name, type }) => {
  return (
    <button className={s.basic_button} type={type}>
      {name}
    </button>
  );
};

BasicButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default BasicButton;
