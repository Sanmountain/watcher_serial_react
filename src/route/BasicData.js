import React, { useState } from "react";
import "../styles/Serial.css";
import { codeSelect, codeInsert, codeDelete, codeUpdate } from "../api/PDA_API";

function BasicData() {
  const [snSerials, setSnSerials] = useState([]);
  const [title, setTitle] = useState(["점소", "사원", "코드"]);
  const [newCode, setNewCode] = useState("");
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [updateCode, setUpdateCode] = useState("");
  const [updateName, setUpdateName] = useState("");

  const handleSnBtnClick = async () => {
    try {
      const response = await codeSelect({});
      console.log("Received data:", response.data);
      setSnSerials(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInsert = async () => {
    try {
      const response = await codeInsert({
        code: newCode,
        name: newName,
      });
      console.log("Received data:", response.data);

      setSnSerials([response.data.data, ...snSerials]);

      handleSnBtnClick();

      setNewCode("");
      setNewName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await codeDelete({
        id: id,
      });
      console.log("Received data:", response.data);
      setSnSerials(snSerials.filter((serial) => serial.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await codeUpdate({
        id: editingId,
        code: updateCode,
        name: updateName,
      });
      console.log("Received data:", response.data);

      const updatedSerials = snSerials.map((serial) =>
        serial.id === editingId
          ? { ...serial, code: updateCode, name: updateName }
          : serial
      );
      setSnSerials(updatedSerials);

      // 편집 모드 종료
      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateCancle = () => {
    setEditingId(null);
    setUpdateCode("");
    setUpdateName("");
  };

  return (
    <div className="checkTable">
      <button
        id="checkBtn"
        onClick={handleSnBtnClick}
        style={{ cursor: "pointer" }}
      >
        {title[0]}
      </button>
      <button
        id="checkBtn"
        onClick={handleSnBtnClick}
        style={{ cursor: "pointer" }}
      >
        {title[1]}
      </button>
      <button
        id="checkBtn"
        onClick={handleSnBtnClick}
        style={{ cursor: "pointer" }}
      >
        {title[2]}
      </button>
      <div className="checkTable2">
        <input
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
          placeholder="새 코드 입력"
        />
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="새 이름 입력"
        />
        <button
          id="checkBtn"
          onClick={handleInsert}
          style={{ cursor: "pointer" }}
        >
          등록
        </button>
        <ul id="ulDataTable">
          <li>
            <ul>
              <li>코드</li>
              <li>설명</li>
            </ul>
          </li>
          {snSerials.map((serial) => (
            <li id="checkList2" key={serial.id}>
              {editingId === serial.id ? (
                <div>
                  <input
                    value={updateCode}
                    onChange={(e) => setUpdateCode(e.target.value)}
                    placeholder="새 코드 입력"
                  />
                  <input
                    value={updateName}
                    onChange={(e) => setUpdateName(e.target.value)}
                    placeholder="새 이름 입력"
                  />
                  <button onClick={handleUpdate}>입력</button>
                  <button onClick={handleUpdateCancle}>취소</button>
                </div>
              ) : (
                <div>
                  <p>{serial.code}</p>
                  <p>{serial.name}</p>
                </div>
              )}
              <button
                style={{ width: "5%" }}
                onClick={() => {
                  setEditingId(serial.id);
                  setUpdateCode(serial.code);
                  setUpdateName(serial.name);
                }}
              >
                수정
              </button>
              <button
                style={{ width: "5%" }}
                onClick={() => handleDelete(serial.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BasicData;
