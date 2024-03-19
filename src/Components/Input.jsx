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
  const uid = localStorage.getItem("role");
  async function handleSubmit() {
    const userDoc = await getDoc(doc(db, "users", uid));
    console.log(Message);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      setError("");

      const docRef = doc(db, "LiveChat", UniqueId);
      if (Message != "") {
        await updateDoc(docRef, {
          messages: arrayUnion({
            text: Message,
            senderId: userData.uid,
            Name: userData.Name,
            date: Timestamp.now(),
          }),
        });
      }
      setMessage("");
    } else {
      setError("User document not found for UID: " + uid);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="my-3 bottom-0 fixed  justify-center mx-3 bg-[#625D5D] rounded-md">
        <div className="flex items-center gap-2 border px-3 py-1 rounded-md">
          <div className="w-full">
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              value={Message}
              placeholder="Type a Message"
              className="w-full text-md px-3 border-b-2 border-black py-2 md:w-[400px] rounded-md"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 6px",
              }}
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-500 m-2 text-md hover:bg-green-600 text-white font-medium rounded-lg text-sm p-1.5 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send
          </button>
          {Error}
        </div>
      </div>
    </div>
  );
};

export default Input;
