import React, { useEffect, useState } from "react";
import Chats from "../Components/Chats";
import Input from "../Components/Input";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const uid = localStorage.getItem("role");
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserData(userData);
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className=" bg-[#342F2F]">
      <Chats />
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Home;
