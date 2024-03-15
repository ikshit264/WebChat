import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { TbPhotoUp } from "react-icons/tb";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Register = () => {
  const navigate = useNavigate();

  const [err, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      let downloadURL = null;

      if (photo) {
        const storageRef = ref(storage, `profile_images/${user.uid}`);
        const uploadTask = uploadBytesResumable(storageRef, photo);
        uploadTask.on(
          "state_changed",
          null,
          (error) => {
            setError("Something went wrong");
            console.error("Error uploading photo:", error);
          },
          async () => {
            try {
              downloadURL = await getDownloadURL(uploadTask.snapshot.ref); // Assign the downloadURL
              await updateProfile(user, {
                displayName: username,
                photoURL: downloadURL
              });
              await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                username: username,
                email: email,
                photoURL: downloadURL
              });
            } catch (error) {
              setError("Error updating user profile");
              console.error("Error updating user profile:", error);
            }
          }
        );
      } else {
        await updateProfile(user, {
          displayName: username
        });
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          username: username,
          email: email,
        });
      }

      await setDoc(doc(db, "userchats", user.uid), {});
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("Email is already in use. Please use a different email.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid Email");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-3 items-center bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold">Ikshit Chat</h1>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-semibold text-xl text-zinc-600 m-2">
              Register
            </h2>
            <form className="flex flex-col justify-between items-center gap-2">
              <input
                type="text"
                placeholder="Username"
                className="border-b-2 px-3 py-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="px-3 border-b-2 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="px-3 border-b-2 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="fileInput" className="relative justify-self-start">
                <input
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  id="fileInput"
                  className="hidden justify-self-start"
                />
                <TbPhotoUp
                  size={40}
                  className="shadow-md rounded-md cursor-pointer"
                />
              </label>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 m-2 hover:bg-blue-600 hover:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Register
              </button>
            </form>
            <div className="already text-sm text-zinc-500">
              Already have an account?{" "}
              <Link to="/sign-in" className="italic text-blue-600">
                Login
              </Link>
            </div>
          </div>
          {err && (
            <span className="text-red-500 font-medium">Error: {err}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
