import React, { useState } from "react";
import "../styles/Serial.css";
import { signUp } from "../api/API";

function SignUp() {
  const [camUsable, setCamUsable] = useState("0");
  const [company, setCompany] = useState("logen");

  const handleSignUp = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await signUp({
        user_id: data.user_id,
        user_password: data.user_password,
        bran_cd: data.bran_cd,
        bran_exp: data.bran_exp,
        cam_usable: camUsable,
        company: company,
      });
      console.log(response.data);
      alert("계정 생성이 완료되었습니다.");
      // Handle the response data as needed
    } catch (error) {
      console.error(error);
      // Handle errors as needed
    }
  };

  const handleCamUsableChange = (event) => {
    setCamUsable(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <form onSubmit={handleSignUp}>
      <label>
        <h4>사용자 ID</h4>
        <input type="text" name="user_id" />
      </label>
      <label>
        <h4>사용자 PW</h4>
        <input type="password" name="user_password" />
      </label>
      <label>
        <h4>점소 코드</h4>
        <input type="text" name="bran_cd" />
      </label>
      <label>
        <h4>점소 설명</h4>
        <input type="text" name="bran_exp" />
      </label>
      <label>
        <h4>Cam 사용</h4>
        <select value={camUsable} onChange={handleCamUsableChange}>
          <option value="0">No</option>
          <option value="2">Yes</option>
        </select>
      </label>
      <label>
        <h4>업체 선택</h4>
        <select value={company} onChange={handleCompanyChange}>
          <option value="logen">Logen</option>
          <option value="hanjin">Hanjin</option>
          <option value="lotte">Lotte</option>
        </select>
      </label>
      <button id="submitBtn" type="submit">
        계정 생성
      </button>
    </form>
  );
}

export default SignUp;
