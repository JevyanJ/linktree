import React from "react";
import "./style.scss";

const Toggle = ({ handleNavToggle }) => {
  return (
    <button className="menu-button" onClick={handleNavToggle}>
      <i class="material-icons">menu</i>
    </button>
  );
};

export default Toggle;
