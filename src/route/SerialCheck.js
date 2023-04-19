import React, { useState } from 'react';
import '../styles/SerialInput.css';
import { serialList } from '../api/API';

function SerialCheck() {
  const [serials, setSerials] = useState([]);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      const response = await serialList({});
      console.log(response.data)
      setSerials(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <label>
        <h4>S/N</h4>
        <input type="text" name="inputSn" />
      </label>

      <input id="checkBtn" type="submit" onClick={handleButtonClick} value="조회" />

      {serials.length > 0 && (
        <ul>
          {serials.map((serial) => (
            <li key={serial.data}>{serial.data}</li>
          ))}
        </ul>
      )}

    </form>
  );
}

export default SerialCheck;
