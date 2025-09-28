import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Sidebar/Dashboard/Dashboard";

function App() {
  const [mode, setMode] = useState(0);
  return (
    <div className="flex">
      <Sidebar mode={mode} setMode={setMode}/>
      <main className="flex-1 p-6 ml-[80px]">
        <Routes>
          <Route path="/dashboard" element={<Dashboard mode={mode}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


