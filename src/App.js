import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import { MiniDrawer } from "./MiniDrawer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MiniDrawer />} />
      </Routes>
    </div>
  );
}

export default App;
