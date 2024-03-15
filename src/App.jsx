import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext)

  // const ProtectedRout = ({children})=>{
  //   if (!currentUser){
  //     return <Navigate to="/login" />;
  //   }
  // }
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route path="/sign-in" element={<Signin />} />
        {/* workign code */}
        <Route path="/" element={
            currentUser ? <Home/> : <Navigate to={"/Login"} /> 
        } />
      </Routes>
    </Router>
  );
}

export default App;
