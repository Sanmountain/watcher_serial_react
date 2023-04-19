import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [menu, setMenu] = useState(0);

  const handleMenuClick = (index) => {
    setMenu(index);
  };

  return (
    <div className="wrap">
      <div className="menuBar">
        <ul className="tabs">
          <li
            className={`${menu === 1 ? "active" : ""}`}
            onClick={() => handleMenuClick(1)}
          >
            <Link to="/">입력</Link>
          </li>
          <li
            className={`${menu === 0 ? "active" : ""}`}
            onClick={() => handleMenuClick(0)}
          >
            <Link to="/serialCheck">조회</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;