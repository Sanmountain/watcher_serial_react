import React, { useState } from "react";
import { serialList } from "../api/API";
import "../styles/Serial.css";

function SerialCheck() {
  const [serials, setSerials] = useState([]);

  const handleButtonClick = async () => {
    try {
      const response = await serialList({});
      console.log("Received data:", response.data);
      setSerials(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="checkTable">
      <button id="checkBtn" onClick={handleButtonClick}>
        시리얼 조회
      </button>
      <ul id="ulTable">
        <li>
          <ul>
            <li>No</li>
            <li>제목</li>
            <li>작성일</li>
            <li>작성자</li>
            <li>조회수</li>
          </ul>
        </li>
        {serials.map((serial) => (
          <li key={serial.dev_serial}>
            <p>Com: {serial.company}</p>
            <p>S/N: {serial.dev_serial}</p>
            <p>점소코드: {serial.bran_cd}</p>
            <p>업데이트 시간: {serial.update_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SerialCheck;
