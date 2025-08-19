import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
