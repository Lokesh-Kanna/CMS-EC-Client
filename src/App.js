import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import { MiniDrawer } from "./MiniDrawer";
import { Dashboard } from "./Components/Dashboars/Dashboard";
import { NewPost } from "./Components/Post/Post";
import { Media } from "./Components/Media/Media";
import { Profile } from "./Components/Profile/Profile";
import { EditPost } from "./Components/Edit/Edit";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MiniDrawer />} />
        <Route path="/dashboard" element={<Dashboard datum={data} />} />
        <Route path="/add-new-post" element={<NewPost />} />
        <Route path="/media" element={<Media datum={data} />} />
        <Route path="/profile" element={<Profile datum={data} />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
