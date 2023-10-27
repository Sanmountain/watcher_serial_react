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
          <Link to="/">
            <li
              className={`${menu === 0 ? "active" : ""}`}
              onClick={() => handleMenuClick(0)}
            >
              시리얼 조회
            </li>
          </Link>
          <Link to="/SerialInput">
            <li
              className={`${menu === 1 ? "active" : ""}`}
              onClick={() => handleMenuClick(1)}
            >
              시리얼 등록
            </li>
          </Link>
          <Link to="/SignUp">
            <li
              className={`${menu === 2 ? "active" : ""}`}
              onClick={() => handleMenuClick(2)}
            >
              계정 생성
            </li>
          </Link>
          <Link to="/BasicData">
            <li
              className={`${menu === 3 ? "active" : ""}`}
              onClick={() => handleMenuClick(3)}
            >
              기초 자료
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
