import React, { Component } from "react";
import "../styles/Header.css";
import SerialCheck from "../route/SerialCheck";
import SerialInput from "../route/SerialInput";

const menuList = {
  0: <SerialCheck />,
  1: <SerialInput />,
};

class Header extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  };

  render() {
    return (
      <div className="wrap">
        <div className="menuBar">
          <ul className="tabs">
            <li
              className={`${this.state.menu === 1 ? "active" : ""}`}
              onClick={() => this.changeMenu(1)}
            >
              입력
            </li>
            <li
              className={`${this.state.menu === 0 ? "active" : ""}`}
              onClick={() => this.changeMenu(0)}
            >
              조회
            </li>
          </ul>
        </div>
        <div className="contentArea">{menuList[this.state.menu]}</div>
      </div>
    );
  }
}

export default Header;
