import React, { useState } from "react";
import "../styles/SerialInput.css";
import { serialInsert } from "../api/API";

function SerialInput() {
  const [devSerial, setDevSerial] = useState("");
  const [macAddr, setMacAddr] = useState("");
  const [branCd, setBranCd] = useState("");
  const [company, setCompany] = useState("logen");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await serialInsert({
        dev_serial: devSerial,
        mac_addr: macAddr,
        bran_cd: branCd,
        company: company,
      });
      console.log(response.data);
      alert("시리얼 등록이 완료되었습니다.");
      setDevSerial("");
      setMacAddr("");
      setBranCd("");
      setCompany("");
    } catch (error) {
      console.error(error);
      alert("시리얼 등록에 실패했습니다.");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <h4>S/N</h4>
        <input
          type="text"
          name="dev_serial"
          value={devSerial}
          onChange={(e) => setDevSerial(e.target.value)}
        />
      </label>
      <label>
        <h4>점소코드</h4>
        <input
          type="text"
          name="bran_cd"
          value={branCd}
          onChange={(e) => setBranCd(e.target.value)}
        />
      </label>
      <label>
        <h4>업체</h4>
        <select
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="logen">로젠</option>
          <option value="hangin">한진</option>
          <option value="lotte">롯데</option>
        </select>
      </label>
      <input id="submitBtn" type="submit" value="시리얼 등록" />
    </form>
  );
}

export default SerialInput;
