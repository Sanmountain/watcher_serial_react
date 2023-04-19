import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SerialInput from "./route/SerialInput";
import SerialCheck from "./route/SerialCheck";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<SerialInput />}></Route>
        <Route path={"/serialCheck"} element={<SerialCheck />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
