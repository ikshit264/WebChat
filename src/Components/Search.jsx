import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      // console.log(username)
      const q = query(collection(db, "users"), where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("User not found");
      } else {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
          console.log(user)
        });
      }
    } catch (error) {
      console.error("Error searching for user:", error);
      setError("An error occurred while searching for the user");
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col min-w-full p-2">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKeyDown}
          onChange={(e) => setUsername(e.target.value)}
          className="w-[90%] px-2 py-1 rounded-md focus:outline-none border-b-2"
          id="search"
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {user && username && (
        <div className="flex items-center justify-start p-4 border-b-2">
          <img
            src={user.photoURL} // Assuming user.Photo contains the image URL
            alt="User"
            className="h-14 w-14 mx-3 rounded-full object-cover"
          />
          <div className="text-md font-medium">{user.username}</div>
        </div>
      )}
    </div>
  );
};

export default Search;
