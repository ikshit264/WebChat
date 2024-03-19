import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signin from "./Pages/Signin.jsx";
import Home from "./Pages/Home";
// import { AuthContext } from "./context/AuthContext";

function App() {
  // const {currentUser} = useContext(AuthContext)

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
