import React, { useState } from "react";
import { serialList } from "../api/API";
import "../styles/Serial.css";

function BasicData() {
  const [snSerials, setSnSerials] = useState([]);

  const handleSnBtnClick = async () => {
    try {
      const response = await serialList({});
      console.log("Received data:", response.data);
      setSnSerials(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="checkTable">
      <button id="checkBtn" onClick={handleSnBtnClick}>
        점소
      </button>
      <button id="checkBtn" onClick={handleSnBtnClick}>
        사원
      </button>
      <button id="checkBtn" onClick={handleSnBtnClick}>
        코드
      </button>
      <ul id="ulDataTable">
        <li>
          <ul>
            <li>코드</li>
            <li>설명</li>
          </ul>
        </li>
        {snSerials.map((serial) => (
          <li key={serial.dev_serial}>
            <p>{serial.bran_cd}</p>
            <p>설명</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BasicData;
