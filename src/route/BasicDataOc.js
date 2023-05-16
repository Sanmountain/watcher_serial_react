import React, { useState, useEffect } from "react";
import "../styles/Serial.css";
import {
  officeSelect,
  officeInsert,
  officeDelete,
  officeUpdate,
} from "../api/PDA_API";

export default function BasicDataOc() {
  const [ocSerials, setOcSerials] = useState([]);
  const [newCode, setNewCode] = useState("");
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [updateCode, setUpdateCode] = useState("");
  const [updateName, setUpdateName] = useState("");

  const handleOcBtnClick = async () => {
    try {
      const response = await officeSelect({});
      console.log("Received data:", response.data);
      setOcSerials(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleOcBtnClick();
  }, []);

  const handleInsert = async () => {
    try {
      const response = await officeInsert({
        bran_cd: newCode,
        bran_exp: newName,
      });
      console.log("Received data:", response.data);

      setOcSerials([response.data.data, ...ocSerials]);

      handleOcBtnClick();

      setNewCode("");
      setNewName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await officeDelete({
        id: id,
      });
      console.log("Received data:", response.data);
      setOcSerials(ocSerials.filter((serial) => serial.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await officeUpdate({
        id: editingId,
        bran_cd: updateCode,
        bran_exp: updateName,
      });
      console.log("Received data:", response.data);

      const updatedSerials = ocSerials.map((serial) =>
        serial.id === editingId
          ? { ...serial, bran_cd: updateCode, bran_exp: updateName }
          : serial
      );
      setOcSerials(updatedSerials);

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
          {ocSerials.map((serial) => (
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
                  <p>{serial.bran_cd}</p>
                  <p>{serial.bran_exp}</p>
                </div>
              )}
              <button
                style={{ width: "5%" }}
                onClick={() => {
                  setEditingId(serial.id);
                  setUpdateCode(serial.bran_cd);
                  setUpdateName(serial.bran_exp);
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
