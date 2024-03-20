import React, { useEffect, useLayoutEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { UniqueId } from "./UniqueID";
import Message from "./Message";

const Chats = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "LiveChat", UniqueId),
      (doc) => {
        if (doc.exists()) {
          setMessages(doc.data().messages);
        } else {
          console.log("No such document!");
        }
      },
      (error) => {
        console.error("Error fetching document: ", error);
      }
    );
    return () => {
      unSub();
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages]);

  return (
    <div className="w-full py-24">
      <div>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Chats;
