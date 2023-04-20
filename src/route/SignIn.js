import React, { useState } from "react";
import "../styles/Serial.css";

function SignIn() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [snCode, setSnCode] = useState("");
  const [snEx, setSnEx] = useState("");
  const [com, setCom] = useState("logen");
  const [useCam, setUseCam] = useState("yes");

  return (
    <form>
      <label>
        <h4>사용자 ID</h4>
        <input
          type="text"
          name="inputId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <label>
        <h4>사용자 PW</h4>
        <input
          type="text"
          name="inputPw"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
        />
      </label>
      <label>
        <h4>점소 코드</h4>
        <input
          type="text"
          name="inputCode"
          value={snCode}
          onChange={(e) => setSnCode(e.target.value)}
        />
      </label>
      <label>
        <h4>점소 설명</h4>
        <input
          type="text"
          name="inputEx"
          value={snEx}
          onChange={(e) => setSnEx(e.target.value)}
        />
      </label>
      <label className="camUse">
        <h4>업체 선택</h4>
        <select
          name="company"
          value={com}
          onChange={(e) => setCom(e.target.value)}
        >
          <option value="logen">로젠</option>
          <option value="hangin">한진</option>
          <option value="lotte">롯데</option>
        </select>
      </label>
      <label className="camUse">
        <h4>Cam 사용</h4>
        <select
          name="useCam"
          value={useCam}
          onChange={(e) => setUseCam(e.target.value)}
        >
          <option value="yesSel">Yes</option>
          <option value="noSel">No</option>
        </select>
      </label>
      <input id="submitBtn" type="submit" value="계정 생성" />
    </form>
  );
}
export default SignIn;
