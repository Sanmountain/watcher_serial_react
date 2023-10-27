import { useState } from "react";
import "../styles/SignUp.css";
import { signUp, signUpHanLotte } from "../api/API";

export default function SignUp() {
  const [camUsable, setCamUsable] = useState("0");
  const [company, setCompany] = useState("logen");

  console.log(company);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (company === "logen") {
      try {
        const response = await signUp({
          user_id: data.user_id,
          user_password: data.user_password,
          bran_cd: data.bran_cd,
          bran_exp: data.bran_exp,
          cam_usable: camUsable,
          company: company,
          sa_id: data.sa_id,
        });
        console.log(response.data);
        if (response.data.result === "05") {
          alert("이미 존재하는 아이디입니다.");
        } else if (response.data.result === "00") {
          alert("계정 생성이 완료되었습니다.");
        } else {
          alert("빈칸을 입력해주세요.");
        }
      } catch (error) {
        console.error(error);
      }
    } else if (company === "hanjin" || company === "lotte") {
      try {
        const response = await signUpHanLotte({
          user_id: data.user_id,
          user_password: data.user_password,
          bran_cd: data.bran_cd,
          bran_exp: data.bran_exp,
          cam_usable: camUsable,
          company: company,
          sa_id: data.sa_id,
        });
        console.log(response.data);
        if (response.data.result === "05") {
          alert("이미 존재하는 아이디입니다.");
        } else if (response.data.result === "00") {
          alert("계정 생성이 완료되었습니다.");
        } else {
          alert("빈칸을 입력해주세요.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCamUsableChange = (event) => {
    setCamUsable(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
    if (event.target.value === "hanjin") {
      setCamUsable("0");
    }
  };

  return (
    <form className="signupForm" onSubmit={handleSignUp}>
      <label>
        <h4>사용자 ID</h4>
        <input type="text" name="user_id" />
      </label>
      <label>
        <h4>사용자 PW</h4>
        <input type="password" name="user_password" />
      </label>
      <label>
        <h4>지점코드</h4>
        <input type="text" name="bran_cd" />
      </label>
      <label>
        <h4>지점명</h4>
        <input type="text" name="bran_exp" />
      </label>
      <label>
        <h4>업체 선택</h4>
        <select value={company} onChange={handleCompanyChange}>
          <option value="logen">Logen</option>
          <option value="hanjin">Hanjin</option>
          <option value="lotte">Lotte</option>
        </select>
      </label>
      <label>
        <h4>Cam 사용</h4>
        <select
          value={camUsable}
          onChange={handleCamUsableChange}
          disabled={company === "hanjin"}
        >
          <option value="0">No</option>
          <option value="2">Yes</option>
        </select>
      </label>
      {camUsable !== "0" && (
        <label>
          <h4>KT 고객 아이디</h4>
          <input type="text" name="sa_id" />
        </label>
      )}
      <button id="signupBtn" type="submit">
        계정 생성
      </button>
    </form>
  );
}
