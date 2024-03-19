import React, { useEffect, useState } from "react";
import { db } from "../Firebase.js";
import { doc, getDoc } from "firebase/firestore";

const Message = ({message}) => {
  // const [messages, setMessages] = useState([]);
  // const docRef = doc(db, "LiveChat", UniqueId);

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     try {
  //       const docSnap = await getDoc(docRef);
  //       if (docSnap.exists()) {
  //         const data = docSnap.data();
  //         if (data && data.message) {
  //           setMessages(data.message);
  //         } else {
  //           console.log("No messages found.");
  //         }
  //       } else {
  //         console.log("Document does not exist.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching messages:", error);
  //     }
  //   };

  //   fetchMessages();
  // }, [docRef]);

  return (
    <div>
      <h2>Messages:</h2>
      <ul>
      {console.log(message)}
          {/* <li>{message.date}</li> */}
          <li>{message.senderId}</li>
          <li>{message.text}</li>
          <li>{message.Name}</li>
          {/* <li>{date}</li> */}
          {/* <li>{message.senderId}</li> */}
      </ul>
    </div>
  );
};

export default Message;
