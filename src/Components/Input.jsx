import {
  Timestamp,
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useState, useContext } from "react";
import { db } from "../Firebase";
import { UniqueId } from "./UniqueID";

const Input = () => {
  const [Message, setMessage] = useState("");
  const [Error, setError] = useState(null);
  async function handleSubmit() {
    console.log(Message);
    const uid = localStorage.getItem("role")
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      setError("");

      const docRef = doc(db, "LiveChat", UniqueId);
      if (Message !=  "") {
      await updateDoc(docRef, {
        messages: arrayUnion({
          text: Message,
          senderId: userData.uid,
          Name: userData.Name,
          date: Timestamp.now(),
        }),
      });
    }
      // console.log(userData)
    } else {
      setError("User document not found for UID: " + uid);
    }
  }

  return (
    <div className=" sticky">
      <div className="flex flex-col justify-between items-center gap-2">
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={Message}
          placeholder="Type a Message"
          className="w-full px-3 border-b-2 py-2"
        />
        <button
          type="button"
          onClick={handleSubmit} // Call handleSubmit when button is clicked
          className="bg-blue-500 m-2 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Submit
        </button>
        {Error}
      </div>
    </div>
  );
};

export default Input;
