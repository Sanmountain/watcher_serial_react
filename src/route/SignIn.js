import React from "react";
import "../styles/Serial.css";

function SignIn() {
  return (
    <form>
      <label>
        <h4>사용자 ID</h4>
        <input type="text" name="inputId" />
      </label>
      <label>
        <h4>사용자 PW</h4>
        <input type="text" name="inputPw" />
      </label>
      <label>
        <h4>점소 코드</h4>
        <input type="text" name="inputCode" />
      </label>
      <label>
        <h4>점소 설명</h4>
        <input type="text" name="inputEx" />
      </label>
      <label className="camUse">
        <h4>업체 선택</h4>
        <select>
          <option value="logen">로젠</option>
          <option value="hangin">한진</option>
          <option value="lotte">롯데</option>
        </select>
      </label>
      <label className="camUse">
        <h4>Cam 사용</h4>
        <select>
          <option value="yesSel">Yes</option>
          <option value="noSel">No</option>
        </select>
      </label>
      <input id="submitBtn" type="submit" value="계정 생성" />
    </form>
  );
}
export default SignIn;
