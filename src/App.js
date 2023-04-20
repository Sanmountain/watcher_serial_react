import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SerialInput from "./route/SerialInput";
import SerialCheck from "./route/SerialCheck";
import SignUp from "./route/SignUp";
import BasicData from "./route/BasicData";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<SerialCheck />}></Route>
        <Route path={"/SerialInput"} element={<SerialInput />}></Route>
        <Route path={"/SignUp"} element={<SignUp />}></Route>
        <Route path={"/BasicData"} element={<BasicData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
