import "./App.css";
import * as React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MiniDrawer } from "./MiniDrawer";
import { Dashboard } from "./Components/Dashboars/Dashboard";
import { NewPost } from "./Components/Post/Post";
import { Media } from "./Components/Media/Media";
import { Profile } from "./Components/Profile/Profile";
import { EditPost } from "./Components/Edit/Edit";
import data from "./data";

function App() {
  const [allData, setAllData] = useState(data);

  const addData = (data) => {
    setAllData(data);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MiniDrawer />} />
        <Route path="/dashboard" element={<Dashboard datum={allData} />} />
        <Route
          path="/add-new-post"
          element={<NewPost datum={allData} addData={addData} />}
        />
        <Route path="/media" element={<Media datum={allData} />} />
        <Route path="/profile" element={<Profile datum={allData} />} />
        <Route
          path="/edit-post/:id"
          element={<EditPost datum={allData} addData={addData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
