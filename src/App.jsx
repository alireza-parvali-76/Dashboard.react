<<<<<<< HEAD
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
=======
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
>>>>>>> 75392f955d789c47d4cdda85c01493242f9823e7
    </div>
  );
}

export default App;

<<<<<<< HEAD

=======
>>>>>>> 75392f955d789c47d4cdda85c01493242f9823e7
