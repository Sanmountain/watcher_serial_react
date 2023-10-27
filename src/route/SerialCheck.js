import React, { useState } from "react";
import { serialList } from "../api/API";
import "../styles/Serial.css";

function SerialCheck() {
  const [serials, setSerials] = useState([]);
  const [search, setSearch] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await serialList({});
      console.log("Received data:", response.data);
      setSerials(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredSerials = serials.filter((serial) =>
    serial.dev_serial.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="checkTable">
      <input
        type="text"
        placeholder="Search by S/N"
        value={search}
        onChange={handleSearch}
      />
      <button id="checkBtn" onClick={handleButtonClick}>
        시리얼 조회
      </button>
      <ul id="ulTable">
        <li>
          <ul>
            <li>Com</li>
            <li>S/N</li>
            <li>점소코드</li>
            <li>업데이트 시간</li>
          </ul>
        </li>
        {filteredSerials.map((serial) => (
          <li id="checkList" key={serial.dev_serial}>
            <p>{serial.company}</p>
            <p>{serial.dev_serial}</p>
            <p>{serial.bran_cd}</p>
            <p>{serial.update_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SerialCheck;
