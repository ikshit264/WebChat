import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase.js";
import { Timestamp, arrayUnion, doc, serverTimestamp, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { UniqueId } from "../Components/UniqueID.js";

const Login = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!Name || !Password || !Email)
      return setError("All fields are required.");
    else {
      try {
        const res = await createUserWithEmailAndPassword(auth, Email, Password);
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          Name,
          Email,
          Password,
        });

        const welcomeMessage = `Welcome ${Name}\n${Name} joined the chat!`;

        // Check if the 'LiveChat' document exists
        const docRef = doc(db, "LiveChat", UniqueId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          // Create the 'LiveChat' document if it doesn't exist
          await setDoc(docRef, {});
        }

        // Update the 'msg' array in the 'LiveChat' document with the new message
        await updateDoc(docRef, {
          messages: arrayUnion({
            text: welcomeMessage,
            senderId: res.user.uid,
            Name,
            date: Timestamp.now(),
          }),
        });

        alert("Registration Successful");
        navigate("/sign-in");
      } catch (error) {
        setError("Error: ", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
    <div className="w-full max-w-md">
      <div className="flex flex-col gap-3 items-center bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold">Ikshit Chat</h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className=" font-semibold text-xl text-zinc-600 m-2">
            Register
          </h2>
          <div className="flex flex-col justify-between items-center gap-2 ">
            <input
              type="text"
              placeholder="Username"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className=" border-b-2 px-3 py-2"
            />
            <input
              type="text"
              placeholder="Email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="px-3 border-b-2 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="px-3 border-b-2 py-2"
            />
            <button
              type="button"
              onClick={() => {
                handleSubmit(), alert("Registration Successful");
              }}
              className="bg-blue-500 m-2 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Submit
            </button>
          </div>
          <div className="already text-sm text-zinc-500">
            You already have an account?{" "}
            <Link to="/sign-in" className=" italic text-blue-600">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;