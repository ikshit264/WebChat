import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase.js";
import { doc, getDoc } from "firebase/firestore";

const Signin = () => {
  const navigate = useNavigate();

  // const { signIn } = useContext(AuthContext);

  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const [Error, setError] = useState("");

  const handleSubmit = async () => {
    if (!Password || !Email) return setError("All fields are required.");
    else {
      try {
        // await signIn(Email, Password);
        try {
          const res = await signInWithEmailAndPassword(auth, Email, Password);
          const uid = res.user.uid;
          const userDoc = await getDoc(doc(db, "users", uid));
          if (userDoc.exists()) {
            const userData = userDoc;
            setError("");
            alert("Registration Success");
            console.log(userData._key.path.segments[1]);
            const role = userData._key.path.segments[1];
            localStorage.setItem("role", role);
            navigate("/");
          } else {
            setError("User document not found for UID: " + uid);
          }
        } catch (error) {
          setError("Error signing in: " + error.message);
        }
      } catch (error) {
        setError("An Error Occured", error);
        console.log(Error);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-3 items-center bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold">Ikshit Chat</h1>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-semibold text-xl text-zinc-600 m-2">Login</h2>
            <div className="flex flex-col justify-between items-center gap-2">
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 border-b-2 py-2"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full px-3 border-b-2 py-2"
              />
              <button
                type="button"
                onClick={() => {
                  handleSubmit();
                  // alert("Registration Successful");
                }}
                className="bg-blue-500 m-2 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Submit
              </button>
            </div>
            <div className="already text-sm text-zinc-500">
              You don't have an account?{" "}
              <Link to="/login" className="italic text-blue-600">
                Register
              </Link>
            </div>
            {currentUser && currentUser.uid && <div>{currentUser.uid}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
