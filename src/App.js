import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// Components
import LinkTree from "./components/linktree/LinkTree";
import Setup from "./components/setup/Setup";
import Menu from "./components/menu/Menu";
import Toggle from "./components/toggle/Toggle";

function App() {
  const [navToggled, setNavToggled] = useState(true);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  };
  return (
    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      {!navToggled ? <Toggle handleNavToggle={handleNavToggle} /> : null}
      <BrowserRouter>
        {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
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
