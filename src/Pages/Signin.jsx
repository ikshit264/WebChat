import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

const Signin = () => {
  const navigate = useNavigate();

  const [err, setError] = useState(false);
  // const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, Email, Password);
      const user = res.user;

      await setDoc(doc(db, "userchats", res.user.uid), {});
      navigate("/");
    } catch (error) {
      if (Password && Email) {
        // Handle specific error cases
        if (error.code === "auth/invalid-email") {
          setError("Invalid Email");
        } else {
          setError("An error occurred. Please try again");
        }
      } else {
        setError("Insufficient Input");
        setPassword("");
        setEmail("");
      }
      console.error("Error creating user:", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-3 items-center bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold">Ikshit Chat</h1>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-semibold text-xl text-zinc-600 m-2">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-between items-center gap-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-3 border-b-2 py-2"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 border-b-2 py-2"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-500 m-2 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Sign In
                </button>
              </div>
            </form>
            {err && <span className=" text-red-500 font-medium">Error :{err}</span>}
            <div className="already text-sm text-zinc-500">
              You don't have an account?{" "}
              <Link to="/login" className="italic text-blue-600">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
