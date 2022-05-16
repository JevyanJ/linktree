import React from "react";
import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// Components
import LinkTree from "./components/linktree/LinkTree";
import Setup from "./components/setup/Setup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<LinkTree />} />
          <Route exact path="/setup" element={<Setup />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
