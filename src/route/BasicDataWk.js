import React, { useState, useEffect } from "react";
import "../styles/Serial.css";
import {
  workerSelect,
  workerInsert,
  workerDelete,
  workerUpdate,
} from "../api/PDA_API";
import Loading from "../components/Loading";

export default function BasicDataWk() {
  const [wkSerials, setWkSerials] = useState([]);
  const [newCode, setNewCode] = useState("");
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [updateCode, setUpdateCode] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWkBtnClick = async () => {
    setIsLoading(true);
    try {
      const response = await workerSelect({});
      console.log("Received data:", response.data);

      //데이터 반대로
      const reverseData = response.data.data.reverse();
      setWkSerials(reverseData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleWkBtnClick();
  }, []);

  const handleInsert = async () => {
    try {
      const response = await workerInsert({
        emp_cd: newCode,
        emp_nm: newName,
      });
      console.log("Received data:", response.data);

      setWkSerials([response.data.data, ...wkSerials]);

      handleWkBtnClick();

      setNewCode("");
      setNewName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await workerDelete({
        id: id,
      });
      console.log("Received data:", response.data);
      setWkSerials(wkSerials.filter((serial) => serial.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await workerUpdate({
        id: editingId,
        emp_cd: updateCode,
        emp_nm: updateName,
      });
      console.log("Received data:", response.data);

      const updatedSerials = wkSerials.map((serial) =>
        serial.id === editingId
          ? { ...serial, emp_cd: updateCode, emp_nm: updateName }
          : serial
      );
      setWkSerials(updatedSerials);

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
    <div className='checkTable'>
      {isLoading && <Loading />}
      <div className='checkTable2'>
        <input
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
          placeholder='새 코드 입력'
        />
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder='새 이름 입력'
        />
        <button
          id='checkBtn'
          onClick={handleInsert}
          style={{ cursor: "pointer" }}
        >
          등록
        </button>
        <ul id='ulDataTable'>
          <li>
            <ul>
              <li>코드</li>
              <li>설명</li>
            </ul>
          </li>
          {wkSerials.map((serial) => (
            <li id='checkList2' key={serial.id}>
              {editingId === serial.id ? (
                <div>
                  <input
                    value={updateCode}
                    onChange={(e) => setUpdateCode(e.target.value)}
                    placeholder='새 코드 입력'
                  />
                  <input
                    value={updateName}
                    onChange={(e) => setUpdateName(e.target.value)}
                    placeholder='새 이름 입력'
                  />
                  <button onClick={handleUpdate}>입력</button>
                  <button onClick={handleUpdateCancle}>취소</button>
                </div>
              ) : (
                <div>
                  <p>{serial.emp_cd}</p>
                  <p>{serial.emp_nm}</p>
                </div>
              )}
              <button
                style={{ width: "5%" }}
                onClick={() => {
                  setEditingId(serial.id);
                  setUpdateCode(serial.emp_cd);
                  setUpdateName(serial.emp_nm);
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
