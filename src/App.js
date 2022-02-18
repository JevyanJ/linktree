import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import LinkTree from "./components/linktree/LinkTree";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<LinkTree />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
