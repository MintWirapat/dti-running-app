//ไฟล์ App.jsx เราจะใช้จัดการเส้นทางของเว็บไซต์
//rfce or rfc key rush
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRunner from "./views/LoginRunner.jsx";
import RegisterRunner from "./views/RegisterRunner.jsx";
import DelRunOfRunner from "./views/DelRunOfRunner.jsx";
import EditRunner from "./views/EditRunner.jsx";
import EditRunOfRunner from "./views/EditRunOfRunner.jsx";
import RunOfRunner from "./views/RunOfRunner.jsx";
import AddRunOfRunner from "./views/AddRunOfRunner.jsx";

function App() {
  return;
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginRunner />} />
      <Route path="/runner/registerRunner" element={<RegisterRunner />} />
      <Route path="/runner/addRunOfRunner" element={<AddRunOfRunner />} />
      <Route path="/runner/editRunner" element={<EditRunner />} />
      <Route path="/runner/runOfRunner" element={<RunOfRunner />} />
      <Route path="/runner/delRunOfRunner" element={<DelRunOfRunner />} />
      <Route path="/runner/editRunOfRunner" element={<EditRunOfRunner />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
