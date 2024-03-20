import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signin from "./Pages/Signin.jsx";
import Home from "./Pages/Home";

function App() {
  const role = localStorage.getItem("role");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route
          path="/"
          element={role ? <Home /> : <Navigate to="/sign-in" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
