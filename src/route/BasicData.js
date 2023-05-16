import React, { useState } from "react";
import "../styles/Serial.css";
import SnModal from "./BasicDataSn";
import WkModal from "./BasicDataWk";
import OcModal from "./BasicDataOc";

function BasicData() {
  const [openModal, setOpenModal] = useState(null);
  const [title, setTitle] = useState(["점소", "사원", "코드"]);

  return (
    <div className="checkTable">
      <button
        id="checkBtn"
        onClick={() => {
          setOpenModal("oc");
        }}
        style={{ cursor: "pointer" }}
      >
        {title[0]}
      </button>
      <button
        id="checkBtn"
        onClick={() => {
          setOpenModal("wk");
        }}
        style={{ cursor: "pointer" }}
      >
        {title[1]}
      </button>
      <button
        id="checkBtn"
        onClick={() => {
          setOpenModal("sn");
        }}
        style={{ cursor: "pointer" }}
      >
        {title[2]}
      </button>
      {
        openModal === "sn" ? <SnModal /> : null //기계역할
      }
      {
        openModal === "wk" ? <WkModal /> : null //기계역할
      }
      {
        openModal === "oc" ? <OcModal /> : null //기계역할
      }
    </div>
  );
}

export default BasicData;
