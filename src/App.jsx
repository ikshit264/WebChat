import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
