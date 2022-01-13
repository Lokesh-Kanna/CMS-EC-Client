import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import { MiniDrawer } from "./MiniDrawer";
import { Dashboard } from "./Components/Dashboars/Dashboard";
import { NewPost } from "./Components/Post/Post";
import { Media } from "./Components/Media/Media";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MiniDrawer />} />
        <Route path="/dashboard" element={<Dashboard datum={data} />} />
        <Route path="/add-new-post" element={<NewPost />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
