import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserLogin from "./userSite/Pages/UserLogin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* this are routes÷ */}
        {/* hello */}
        <Routes>
          <Route path="User/Login" element={<UserLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
