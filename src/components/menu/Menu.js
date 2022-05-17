import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const items = [
  {
    name: "LINKS",
    address: "/",
    icon: "link"
  },
  {
    name: "SETUP",
    address: "/setup",
    icon: "computer"
  }
];

const Menu = ({ handleNavToggle }) => {
  return (
    <div className="menu">
      {items.map(element => (
        <Link id="link" onClick={handleNavToggle} to={element.address}>
          <div id="element">
            <i class="material-icons">{element.icon}</i>
            <div>{element.name}</div>
          </div>
        </Link>
      ))}
      <button className="menu-button" onClick={handleNavToggle}>
        <i class="material-icons">close</i>
      </button>
    </div>
  );
};

export default Menu;
