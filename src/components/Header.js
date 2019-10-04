import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "semantic-ui-react";
import smartULB_brandPic from "../images/smartULB.png";
import "../css/Header.css";

const Header = ({ toggleSidebar, sidebarVisibility }) => {
  // console.log(toggleSidebar);
  // console.log(sidebarVisibility);
  return (
    <header className="container">
      <div className="header-items">
        <div className="left-header-items">
          <Link to='/'>
            <img
              src={smartULB_brandPic}
              
              alt="smartULB_brandPic"
            />
          </Link>

          <div className="menu-box" onClick={toggleSidebar}>
            <Icon
              size="large"
              color="green"
              name={sidebarVisibility ? "close" : "bars"}
            />
            <span>
              <b>Menu</b>
            </span>
          </div>
        </div>

        <div className="sign-in">
          <Icon color="teal" size="big" name="user circle outline" />
          <span>SIGN IN</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
